import { expect } from 'chai';
import { ethers } from 'hardhat';

const DigitalDelirium = artifacts.require('./../DigitalDelirium.sol');

let digitalDelirium;
let owner;
let user1;
let user2;

const NFT_NAME = 'Digital Delirium';
const NFT_SYMBOL = 'DDLR';

contract('DigitalDelirium', (accounts) => {
    before(async () => {
        digitalDelirium = await DigitalDelirium.deployed();
        [owner, user1, user2] = await ethers.getSigners();
    });

    it('should have correct name and symbol', async () => {
        const name = await digitalDelirium.name();
        const symbol = await digitalDelirium.symbol();

        expect(name).to.equal(NFT_NAME);
        expect(symbol).to.equal(NFT_SYMBOL);
    });

    it('should create NFT correctly', async () => {
        const name = 'My NFT';
        const description = 'This is my first NFT';
        const ipfsUri = 'QmNFT123';
        const price = ethers.utils.parseEther('1');
        const listed = true;

        await digitalDelirium.createNFT(name, description, ipfsUri, price, listed);

        const nftDetails = await digitalDelirium.getNFTDetails(0);

        expect(nftDetails.name).to.equal(name);
        expect(nftDetails.description).to.equal(description);
        expect(nftDetails.price).to.equal(price);
        expect(nftDetails.listed).to.equal(listed);
        expect(nftDetails.metadataURI).to.equal(ipfsUri);
    });

    it('should list NFT correctly', async () => {
        const tokenId = 0;
        const price = ethers.utils.parseEther('0.2');

        await digitalDelirium.listNFT(tokenId, price);

        const nftDetails = await digitalDelirium.getNFTDetails(tokenId);

        expect(nftDetails.listed).to.equal(true);
        expect(nftDetails.price).to.equal(price);
    });

    it('should unlist NFT correctly', async () => {
        const tokenId = 0;

        await digitalDelirium.unlistNFT(tokenId);

        const nftDetails = await digitalDelirium.getNFTDetails(tokenId);

        expect(nftDetails.listed).to.equal(false);
    });

    it('should transfer NFT correctly', async () => {
        const tokenId = 0;

        await digitalDelirium.transferFrom(owner.address, user1.address, tokenId);

        const ownerOfNFT = await digitalDelirium.ownerOf(tokenId);

        expect(ownerOfNFT).to.equal(user1.address);
    });
});
