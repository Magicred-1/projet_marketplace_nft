// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./Utils.sol";

contract DigitalDelirium is ERC721URIStorage, ERC721Enumerable, Ownable {
    /* STRUCTS */
    struct DigitalDeliriumData {
        uint256 tokenId;
        string tokenUri;
        uint256 price;
        DD_SALE_STATUS status;
        address owner;
    }

    struct DigitalDeliriumSaleInfo {
        uint256 price;
        DD_SALE_STATUS status;
    }

    struct IdAndTime {
        uint256 tokenId;
        uint256 timestamp;
    }

    /* ENUMS */
    enum DD_SALE_STATUS {
        FOR_SALE,
        NOT_FOR_SALE
    }

    /* CONSTANTS */
    uint256 public immutable PRICE; // NFT PRICE
    uint256 public immutable COOLDOWN_PERIOD; // Cooldown period, before which a signer cannot mint
    uint256 public immutable MAX_SUPPLY; // Max number of Digital Deliriums that can be created

    /* Counter for TokenId */
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    /* Mapping to store info about new NFTs: whether their metadata should be changed */
    mapping(address => IdAndTime) newMintAddressToIdAndTime;

    /* Mapping to store info about minted DigitalDeliriumData's sale: maps tokenId to info */
    mapping(uint256 => DigitalDeliriumSaleInfo) digitalDeliriumSaleInfo;

    /* Modifier to check if token id is valid (above 0) */
    modifier isTokenIdValid(uint256 _tokenIdToCheck) {
        require(_tokenIdToCheck > 0, "INVALID TOKEN ID");
        _;
    }

    /* Constructor - (price, cooldown period secs, max supply) */
    constructor(
        uint256 _price,
        uint256 _cooldownPeriod,
        uint256 _maxSupply
    ) payable ERC721("DigitalDeliriumData", "DDD") {
        PRICE = _price;
        COOLDOWN_PERIOD = _cooldownPeriod;
        MAX_SUPPLY = _maxSupply;
        _tokenId.increment();
    }

    /* Creates a new NFT */
    function createNFT() external payable {
        uint256 newTokenId = _tokenId.current();

        // Check if any more NFTs can be created
        require(
            newTokenId <= MAX_SUPPLY,
            "MAX NUMBER OF Digital Deliriums IN CIRCULATION ALREADY!"
        );

        // Check if user is paying the correct amount to purchase
        require(
            msg.value == PRICE,
            strcat(
                "INCORRECT AMOUNT OF WEI SENT! SEND ",
                Strings.toString(PRICE)
            )
        );

        // Check if an existing incomplete NFT is in progress or cooldown is not over yet
        require(
            (newMintAddressToIdAndTime[msg.sender].tokenId == 0 ||
                block.timestamp -
                newMintAddressToIdAndTime[msg.sender].timestamp >=
                COOLDOWN_PERIOD),
            "SIGNER HAS A PENDING NFT! WAITING FOR COOLDOWN"
        );
            // Mint token
    _safeMint(msg.sender, newTokenId);
    newMintAddressToIdAndTime[msg.sender] = IdAndTime(
        newTokenId,
        block.timestamp
    );
    digitalDeliriumSaleInfo[newTokenId] = DigitalDeliriumSaleInfo(
        PRICE,
        DD_SALE_STATUS.NOT_FOR_SALE
    );
    (bool success, ) = payable(owner()).call{value: PRICE}("");
    require(
        success,
        "CONTRACT OWNER COULD NOT BE TRANSFERRED THE PRICE FOR DigitalDeliriumData!"
    );

    // Increment token id
    _tokenId.increment();
    }

    /* Returns new, incomplete token id that a signer may have */
    function getNewTokenId() public view returns (uint256) {
        return newMintAddressToIdAndTime[msg.sender].tokenId;
    }

    /* Sets URI on newly created NFT */
    function setNewTokenURI(string memory _nftImageURI) external {
        // Checks to make sure URI of existing NFTs are not modified, only a new one
        uint256 newTokenId = newMintAddressToIdAndTime[msg.sender].tokenId;
        require(
            newTokenId != 0,
            "SIGNER DOES NOT HAVE A NEWLY MINTED, INCOMPLETE NFT!"
        );
        require(
            block.timestamp - newMintAddressToIdAndTime[msg.sender].timestamp <
                COOLDOWN_PERIOD,
            "SIGNER HAS NO PENDING NFT!"
        );

        // Create new token's URI
        string memory tokenMetadataJson = Base64.encode(
            bytes(
                abi.encodePacked(
                    '{"name":"Digital Delirium","description":"Digital Delirium is an abstract artwork represented as an NFT. Each NFT is unique and contains its own visual representation.","image":"',
                    _nftImageURI,
                    '"}'
                )
            )
        );
        string memory newTokenURI = string(
            bytes(
                abi.encodePacked(
                    "data:application/json;base64,",
                    tokenMetadataJson
                )
            )
        );

        // Set new token's URI
        _setTokenURI(newTokenId, newTokenURI);
        delete newMintAddressToIdAndTime[msg.sender];
    }

    /* Retrieves NFTs owned by a signer */
    function getAllNftsOwned() public view returns (DigitalDeliriumData[] memory) {
        uint256 numOfNftsOwned = balanceOf(msg.sender);
        DigitalDeliriumData[] memory nfts = new DigitalDeliriumData[](numOfNftsOwned);
        uint256 tokenId = 0;
        for (uint256 i = 0; i < numOfNftsOwned; i++) {
            tokenId = tokenOfOwnerByIndex(msg.sender, i);
            string memory tokenUri = tokenURI(tokenId);
            nfts[i] = DigitalDeliriumData(
                tokenId,
                tokenUri,
                digitalDeliriumSaleInfo[tokenId].price,
                digitalDeliriumSaleInfo[tokenId].status,
                msg.sender
            );
        }
        return nfts;
    }

    /* Puts DigitalDeliriumData for sale */
    function putForSale(uint256 _tokenId, uint256 _price)
        external
        isTokenIdValid(_tokenId)
    {
        require(
            msg.sender == ownerOf(_tokenId),
            "SIGNER IS NOT OWNER OF THE TOKEN"
        );
        require(
            digitalDeliriumSaleInfo[_tokenId].status == DD_SALE_STATUS.NOT_FOR_SALE,
            "TOKEN IS ALREADY FOR SALE."
        );
            digitalDeliriumSaleInfo[_tokenId].status = DD_SALE_STATUS.FOR_SALE;
        digitalDeliriumSaleInfo[_tokenId].price = _price;
        approve(address(this), _tokenId);
    }

    /* Cancels DigitalDeliriumData sale */
    function cancelSale(uint256 _tokenId) external isTokenIdValid(_tokenId) {
        require(
            msg.sender == ownerOf(_tokenId),
            "SIGNER IS NOT OWNER OF THE TOKEN"
        );
        require(
            digitalDeliriumSaleInfo[_tokenId].status == DD_SALE_STATUS.FOR_SALE,
            "TOKEN IS ALREADY NOT FOR SALE."
        );
        digitalDeliriumSaleInfo[_tokenId].status = DD_SALE_STATUS.NOT_FOR_SALE;
    }

    /* Buy DigitalDeliriumData */
    function buy(uint256 _tokenId) external payable isTokenIdValid(_tokenId) {
        address ownerOfToken = ownerOf(_tokenId);
        uint256 priceOfToken = digitalDeliriumSaleInfo[_tokenId].price;

        require(
            msg.sender != ownerOfToken,
            "SIGNER IS ALREADY THE OWNER OF THE TOKEN"
        );
        require(
            digitalDeliriumSaleInfo[_tokenId].status == DD_SALE_STATUS.FOR_SALE,
            "TOKEN IS NOT FOR SALE."
        );
        require(
            msg.value == priceOfToken,
            strcat(
                "INCORRECT VALUE SENT FOR PURCHASING; CORRECT VALUE: ",
                Strings.toString(priceOfToken)
            )
        );

        (bool success, ) = payable(ownerOfToken).call{value: priceOfToken}("");
        require(success, "OWNER COULD NOT BE PAID THE PRICE");
        this.safeTransferFrom(ownerOfToken, msg.sender, _tokenId);

        digitalDeliriumSaleInfo[_tokenId].status = DD_SALE_STATUS.NOT_FOR_SALE;
    }

    /* Fetches all Digital Deliriums for sale */
    function getAllNftsForSale() public view returns (DigitalDeliriumData[] memory) {
        uint256 totalTokens = totalSupply();
        DigitalDeliriumData[] memory nfts = new DigitalDeliriumData[](totalTokens);
        uint256 tokenId;
        uint256 arrIndex = 0;
        for (tokenId = 1; tokenId <= totalTokens; tokenId++) {
            if (digitalDeliriumSaleInfo[tokenId].status == DD_SALE_STATUS.FOR_SALE) {
                string memory tokenUri = tokenURI(tokenId);
                nfts[arrIndex] = DigitalDeliriumData(
                    tokenId,
                    tokenUri,
                    digitalDeliriumSaleInfo[tokenId].price,
                    digitalDeliriumSaleInfo[tokenId].status,
                    ownerOf(tokenId)
                );
                arrIndex += 1;
            }
        }
        DigitalDeliriumData[] memory filteredNfts = new DigitalDeliriumData[](arrIndex);
        for (uint256 i = 0; i < arrIndex; i++) {
            filteredNfts[i] = nfts[i];
        }
        return filteredNfts;
    }

    /* OVERRIDES */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}


