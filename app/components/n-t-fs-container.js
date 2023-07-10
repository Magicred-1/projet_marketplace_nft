import MarketplaceNFTContainer from "./marketplace-nft-container";
import { abi } from "../abi/abi.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const NTFsContainer = () => {
  const [nftDatas, setNFTDatas] = useState([]);

  useEffect(() => {
    getNFTDatas();
  }, []);

  const getNFTDatas = async () => {
    const contractAbi = abi;
    const contractAddress = "0xc24aFaa97633ccB150D0aE87470116b8D9268EAb";

    try {
      // Check if the user is connected to the wallet
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();

      if (accounts.length === 0) {
        console.error("Please connect to the wallet.");
        return;
      }

      // Connect to the smart contract
      const contract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());

      const connectedWalletAddress = accounts[0];

      const nftsCreated = await contract.getAllNFTMetadata(connectedWalletAddress);

      setNFTDatas(nftsCreated);
    } catch (error) {
      console.error("Error fetching NFT data:", error);
    }
  };

  return (
    console.log(nftDatas),
    <>
      {nftDatas.map((nftData) => (
        <MarketplaceNFTContainer nftID={nftData.tokenId} nftName={nftData.name} nftPrice={nftData.price} nftURI={nftData.ipfsHash} />
      ))}
    </>
  );
};

export default NTFsContainer;
