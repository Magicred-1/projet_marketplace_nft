// SPDX-License-Identifier: GPL-3.0
 
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCollection is ERC721, Ownable {
    struct NFTMetadata {
        string name;
        string description;
        string ipfsHash;
        uint256 price;
        address payable highestBidder;
        uint256 highestBid;
    }

    NFTMetadata[] public nfts;

    mapping(uint256 => uint256) public currentBid;

    constructor() ERC721("NFTCollection", "NFTC") {}

    function createNFT(
        string memory _name,
        string memory _description,
        string memory _ipfsHash,
        uint256 _price
    ) external onlyOwner returns (uint256) {
        NFTMetadata memory newNFT = NFTMetadata({
            name: _name,
            description: _description,
            ipfsHash: _ipfsHash,
            price: _price,
            highestBidder: payable(address(0)),
            highestBid: 0
        });

        uint256 tokenId = nfts.length;
        nfts.push(newNFT);

        _safeMint(msg.sender, tokenId);
        return tokenId;
    }

    function buyNFT(uint256 _tokenId) external payable {
        require(_exists(_tokenId), "NFT with the given ID does not exist");
        require(
            msg.value >= nfts[_tokenId].price,
            "Insufficient funds to buy the NFT"
        );
        require(
            ownerOf(_tokenId) != address(0),
            "Invalid NFT owner, unable to transfer"
        );

        address payable owner = payable(ownerOf(_tokenId));
        address payable buyer = payable(msg.sender);
        uint256 purchaseValue = msg.value;

        owner.transfer(purchaseValue);
        _transfer(owner, buyer, _tokenId);
    }

    function placeBid(uint256 _tokenId) external payable {
        require(_exists(_tokenId), "NFT with the given ID does not exist");
        require(
            msg.value > currentBid[_tokenId],
            "Bid value must be higher than the current bid"
        );

        address payable previousBidder = nfts[_tokenId].highestBidder;
        uint256 previousBid = nfts[_tokenId].highestBid;

        if (previousBidder != address(0)) {
            previousBidder.transfer(previousBid);
        }

        currentBid[_tokenId] = msg.value;
        nfts[_tokenId].highestBidder = payable(msg.sender);
        nfts[_tokenId].highestBid = msg.value;
    }

    function getNFTMetadata(uint256 _tokenId)
        external
        view
        returns (
            string memory name,
            string memory description,
            string memory ipfsHash,
            uint256 price,
            address highestBidder,
            uint256 highestBid
        )
    {
        require(_exists(_tokenId), "NFT with the given ID does not exist");

        NFTMetadata memory nft = nfts[_tokenId];
        return (
            nft.name,
            nft.description,
            nft.ipfsHash,
            nft.price,
            nft.highestBidder,
            nft.highestBid
        );
    }
}