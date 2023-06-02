pragma solidity >=0.8.0;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DigitalDeliriumContract {
    struct NFT {
        uint256 id;
        address owner;
        string uri;
        uint256 price;
        bool isForSale;
    }

    // Add commission fee in the future TODO

    // Stock NFTs on IPFS TODO

    NFT[] public nfts;

    // EVENTS

    event NFTContractCreated(address owner, address contractAddress);

    event NFTCreated(uint256 id, address owner, string uri, uint256 price, bool isForSale);

    event NFTBidded(uint256 id, address owner, string uri, uint256 price, bool isForSale);

    event NFTMinted(uint256 id, address owner, string uri, uint256 price, bool isForSale);

    event NFTSold(uint256 id, address owner, string uri, uint256 price, bool isForSale);

    function createNFT(string memory _uri, uint256 _price) public {
        uint256 _id = nfts.length;
        nfts.push(NFT(_id, msg.sender, _uri, _price, false));
        emit NFTCreated(_id, msg.sender, _uri, _price, false);
    }

    function mintNFT(uint256 _id) public {
        NFT storage nft = nfts[_id];
        require(nft.owner == msg.sender, "Only owner can mint");
        nft.isForSale = true;
        emit NFTBidded(_id, msg.sender, nft.uri, nft.price, nft.isForSale);
    }

    function bidNFT(uint256 _id) public {
        NFT storage nft = nfts[_id];
        require(nft.owner != msg.sender, "Owner cannot bid on their own NFT");
        require(nft.isForSale == true, "NFT is not for sale");
        nft.isForSale = false;
        emit NFTSold(_id, msg.sender, nft.uri, nft.price, nft.isForSale);
    }

    function buyNFT(uint256 _id) public payable {
        NFT storage nft = nfts[_id];
        require(nft.isForSale == true, "NFT is not for sale");
        require(msg.value >= nft.price, "Not enough funds sent");
        nft.owner = msg.sender;
        nft.isForSale = false;
        emit NFTSold(_id, msg.sender, nft.uri, nft.price, nft.isForSale);
    }

    function getNFTs() public view returns (NFT[] memory) {
        return nfts;
    }

    function getNFT(uint256 _id) public view returns (NFT memory) {
        return nfts[_id];
    }

    function getNFTsByOwner(address _owner) public view returns (NFT[] memory) {
        NFT[] memory _nfts = new NFT[](nfts.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < nfts.length; i++) {
            if (nfts[i].owner == _owner) {
                _nfts[counter] = nfts[i];
                counter++;
            }
        }
        return _nfts;
    }

    function getNFTsForSale() public view returns (NFT[] memory) {
        NFT[] memory _nfts = new NFT[](nfts.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < nfts.length; i++) {
            if (nfts[i].isForSale == true) {
                _nfts[counter] = nfts[i];
                counter++;
            }
        }
        return _nfts;
    }
}