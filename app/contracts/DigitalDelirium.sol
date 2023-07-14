// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DigitalDelirium is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 private feePercentage = 2;

    struct NFT {
        uint256 tokenId;
        string name;
        string description;
        uint256 price;
        bool listed;
        string metadataURI;
    }

    struct Bid {
        uint256 amount;
        address bidder;
    }

    struct Auction {
        uint256 tokenId;
        uint256 startingPrice;
        uint256 endTime;
        address seller;
        Bid highestBid;
    }

    mapping(uint256 => Bid[]) private _bids;
    mapping(uint256 => Auction) private _auctions;
    mapping(uint256 => NFT) private _nfts;
    mapping(uint256 => address) private _nftCreators;

    IERC20 private _erc20Token;

    event NFTCreated(uint256 indexed tokenId, address indexed creator);
    event NFTListed(uint256 indexed tokenId, uint256 price);
    event NFTUnlisted(uint256 indexed tokenId);
    event NFTSold(uint256 indexed tokenId, address indexed buyer, uint256 price);
    event NFTBid(uint indexed tokenId, address indexed bidder, uint256 price);
    event NFTAuctionCreated(uint256 indexed tokenId, uint256 startTime, uint256 endTime);
    event NFTAuctionEnded(uint256 indexed tokenId, address indexed winner, uint256 price);

    constructor(address erc20TokenAddress) ERC721("Digital Delirium", "DDLR") {
        _erc20Token = IERC20(erc20TokenAddress);
    }

    function createNFT(
        string memory name,
        string memory description,
        string memory ipfsUri,
        uint256 price,
        bool listed
    ) external {
        uint256 newTokenId = _tokenIdCounter.current();

        _safeMint(msg.sender, newTokenId);

        string memory metadataURI = string(abi.encodePacked(_baseURI(), ipfsUri));
        _nfts[newTokenId] = NFT(newTokenId, name, description, price, listed, metadataURI);
        _nftCreators[newTokenId] = msg.sender;

        _tokenIdCounter.increment();

        emit NFTCreated(newTokenId, msg.sender);

        _setTokenURI(newTokenId, ipfsUri);
    }

    function getNFTDetails(uint256 tokenId)
        external
        view
        returns (
            string memory name,
            string memory description,
            uint256 price,
            bool listed,
            string memory metadataURI
        )
    {
        require(_exists(tokenId), "NFT does not exist");
        NFT storage nft = _nfts[tokenId];
        return (nft.name, nft.description, nft.price, nft.listed, nft.metadataURI);
    }

    function getAllCreatorNFTsDetails(address creator) external view returns (NFT[] memory) {
        uint256 totalNFTs = _tokenIdCounter.current();
        NFT[] memory creatorNFTs = new NFT[](totalNFTs);
        uint256 count = 0;

        for (uint256 i = 0; i < totalNFTs; i++) {
            if (_nftCreators[i] == creator) {
                NFT storage nft = _nfts[i];
                creatorNFTs[count] = NFT(
                    nft.tokenId,
                    nft.name,
                    nft.description,
                    nft.price,
                    nft.listed,
                    nft.metadataURI
                );
                count++;
            }
        }

        NFT[] memory result = new NFT[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = creatorNFTs[i];
        }

        return result;
    }

    function listNFT(uint256 tokenId, uint256 price) external {
        require(_exists(tokenId), "NFT does not exist");
        require(ownerOf(tokenId) == msg.sender, "Not the owner of the NFT");

        NFT storage nft = _nfts[tokenId];
        require(!nft.listed, "NFT already listed");

        nft.price = price;

        // Calculate the fee amount
        uint256 feeAmount = (price * feePercentage) / 100;
        uint256 totalPrice = price + feeAmount;

        // Transfer the ERC20 tokens from the buyer to the contract
        require(IERC20(_erc20Token).transferFrom(msg.sender, address(this), totalPrice), "Token transfer failed");

        nft.listed = true;

        emit NFTListed(tokenId, price);
    }

    function unlistNFT(uint256 tokenId) external {
        require(_exists(tokenId), "NFT does not exist");
        require(ownerOf(tokenId) == msg.sender, "Not the owner of the NFT");

        NFT storage nft = _nfts[tokenId];
        require(nft.listed, "NFT not listed for sale");
        require(IERC20(_erc20Token).transfer(msg.sender, nft.price), "Token transfer failed");

        nft.listed = false;

        emit NFTUnlisted(tokenId);
    }

    function buyNFT(uint256 tokenId) external {
        require(_exists(tokenId), "NFT does not exist");
        NFT storage nft = _nfts[tokenId];
        require(nft.listed, "NFT not listed for sale");

        address seller = ownerOf(tokenId);
        uint256 tokenPrice = nft.price;

        uint256 feeAmount = (tokenPrice * feePercentage) / 100;
        // Check if the buyer has enough ERC20 tokens and transfer the fee amount
        require(IERC20(_erc20Token).balanceOf(msg.sender) >= feeAmount, "Not enough DDT tokens to buy");
        require(IERC20(_erc20Token).transferFrom(msg.sender, owner(), feeAmount), "Token transfer failed");
        require(IERC20(_erc20Token).transferFrom(msg.sender, seller, tokenPrice), "Token transfer failed");

        _transfer(seller, msg.sender, tokenId);

        nft.listed = false;

        emit NFTSold(tokenId, msg.sender, tokenPrice);
    }

    function bidNFT(uint256 tokenId, uint256 bidAmount) external payable {
        require(_exists(tokenId), "NFT does not exist");
        NFT storage nft = _nfts[tokenId];
        require(nft.listed, "NFT not listed for auction");

        Auction storage auction = _auctions[tokenId];
        require(block.timestamp <= auction.endTime, "Auction has ended");
        require(bidAmount > auction.highestBid.amount, "Bid amount too low");

        if (auction.highestBid.bidder != address(0)) {
            // Refund the previous bidder
            require(IERC20(_erc20Token).transfer(auction.highestBid.bidder, auction.highestBid.amount), "Token transfer failed");
        }

        // Transfer the ERC20 tokens from the bidder to the contract
        require(IERC20(_erc20Token).transferFrom(msg.sender, address(this), bidAmount), "Token transfer failed");

        // Update the highest bid
        auction.highestBid.amount = bidAmount;
        auction.highestBid.bidder = msg.sender;

        emit NFTBid(tokenId, msg.sender, bidAmount);
    }

    function putNFTToAuction(
        uint256 tokenId,
        uint256 startingPrice,
        uint256 duration,
        address seller
    ) external {
        require(_exists(tokenId), "NFT does not exist");
        require(ownerOf(tokenId) == msg.sender, "Not the owner of the NFT");
        require(duration > 0, "Auction duration must be greater than zero");

        NFT storage nft = _nfts[tokenId];
        require(!nft.listed, "NFT already listed for sale");

        // Transfer the NFT to the contract
        _transfer(msg.sender, address(this), tokenId);

        // Create an auction for the NFT
        Auction memory auction = Auction(
            tokenId,
            startingPrice,
            block.timestamp + duration,
            seller,
            Bid(0, address(0))
        );

        _auctions[tokenId] = auction;

        emit NFTAuctionCreated(tokenId, startingPrice, auction.endTime);
    }

    function endNFTAuction(uint256 tokenId) external {
        Auction storage auction = _auctions[tokenId];
        require(block.timestamp >= auction.endTime, "Auction not ended yet");

        // Transfer the NFT from the contract to the highest bidder
        _transfer(address(this), auction.highestBid.bidder, tokenId);

        emit NFTAuctionEnded(tokenId, auction.highestBid.bidder, auction.highestBid.amount);

        // Remove the auction
        delete _auctions[tokenId];
    }

    function listAllActiveAuctions() external view returns (Auction[] memory) {
        uint256 totalAuctions = _tokenIdCounter.current();
        uint256 activeAuctionCount = 0;

        // Count the number of active auctions
        for (uint256 i = 0; i < totalAuctions; i++) {
            if (_auctions[i].tokenId != 0) {
                activeAuctionCount++;
            }
        }

        Auction[] memory activeAuctions = new Auction[](activeAuctionCount);
        uint256 index = 0;

        // Retrieve the active auctions
        for (uint256 i = 0; i < totalAuctions; i++) {
            Auction storage auction = _auctions[i];
            if (auction.tokenId != 0) {
                activeAuctions[index] = auction;
                index++;
            }
        }

        return activeAuctions;
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    function exists(uint256 tokenId) external view returns (bool) {
        return _exists(tokenId);
    }

    function getAllNFTMetadata() external view returns (NFT[] memory) {
        uint256 totalNFTs = _tokenIdCounter.current();
        NFT[] memory allMetadata = new NFT[](totalNFTs);

        for (uint256 i = 0; i < totalNFTs; i++) {
            NFT storage nft = _nfts[i];
            allMetadata[i] = nft;
        }

        return allMetadata;
    }

    function getNumberOfListedItems() external view returns (uint256) {
        uint256 totalNFTs = _tokenIdCounter.current();
        uint256 count = 0;

        for (uint256 i = 0; i < totalNFTs; i++) {
            if (_nfts[i].listed) {
                count++;
            }
        }

        return count;
    }

    function getNumberOfNFTsHolders() external view returns (uint256) {
        uint256 totalNFTs = _tokenIdCounter.current();
        uint256 count = 0;
        address[] memory holders = new address[](totalNFTs);

        for (uint256 i = 0; i < totalNFTs; i++) {
            address holder = ownerOf(i);
            bool holderExists = false;

            for (uint256 j = 0; j < holders.length; j++) {
                if (holders[j] == holder) {
                    holderExists = true;
                    break;
                }
            }

            if (!holderExists) {
                holders[count] = holder;
                count++;
            }
        }

        return count;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }
}
