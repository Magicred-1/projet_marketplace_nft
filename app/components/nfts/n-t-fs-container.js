import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import MarketplaceNFTContainer from "../marketplace/marketplace-nft-container";
import { abi } from "../../abi/abi.json";

const NTFsContainer = () => {
  const [nftDatas, setNFTDatas] = useState([]);

  useEffect(() => {
    getNFTDatas();
  }, []);

  const getNFTDatas = async () => {
    const contractAbi = abi;
    const contractAddress = "0x2F3241ccc7955276c11DcD7FF50810c3c204F77A";

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
          price: nftData.price.toNumber(),
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center pt-10">
      {nftDatas.length > 0 ? (
        nftDatas.map((nftData) => (
          <div key={nftData.tokenId}>
            <MarketplaceNFTContainer
              nftID={nftData.tokenId}
              nftName={nftData.name}
              nftImage={nftData.metadataURI}
              nftPrice={nftData.price}
            />
          </div>
        ))
      ) : (
        <div className="col-span-full">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-2xl font-bold">No NFTs found</p>
          </div>
        </div>
      )}
    </div>
  );  
};

export default NTFsContainer;
