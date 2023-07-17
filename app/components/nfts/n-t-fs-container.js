import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import MarketplaceNFTContainer from "../marketplace/marketplace-nft-container";
import { abi } from "../../abi/abi.json";

const NTFsContainer = () => {
  const contractAbi = abi;
  const contractAddress = "0x9Af74716f988eD23d23D273Fa6eBC787e2E9D549";
  const [nftDatas, setNFTDatas] = useState([]);

  useEffect(() => {
    getNFTDatas();
  }, []);

  const getNFTDatas = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const contract = new ethers.Contract(contractAddress, contractAbi, provider);

      const nftsCreated = await contract.getAllNFTMetadata();
      console.log("NFTs created:", nftsCreated);

      const formattedNFTDatas = nftsCreated
        .filter((nftData) => nftData.listed) // Filter for listed NFTs
        .map((nftData) => ({
          tokenId: nftData.tokenId.toNumber(),
          name: nftData.name,
          description: nftData.description,
          price: ethers.utils.formatEther(nftData.price.toString()),
          listed: nftData.listed,
          metadataURI: nftData.metadataURI,
        }));

      if (formattedNFTDatas.length > 0) {
        setNFTDatas(formattedNFTDatas);
        console.log("NFT data:", formattedNFTDatas);
      } else {
        console.log("No NFTs found");
      }
    } catch (error) {
      console.error("Error fetching NFT data:", error);
    }
  };

  return (
    <div className="container mx-auto flex justify-center pt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-10">
        {nftDatas.length > 0 ? (
          nftDatas.map((nftData) => (
            <div key={nftData.tokenId} className="w-full sm:w-1/2 md:w-1/3">
              <MarketplaceNFTContainer
                nftID={nftData.tokenId}
                nftName={nftData.name}
                nftImage={nftData.metadataURI}
                nftPrice={nftData.price}
              />
            </div>
          ))
        ) : (
          <div>No NFT data available.</div>
        )}
      </div>
    </div>
  );
};

export default NTFsContainer;