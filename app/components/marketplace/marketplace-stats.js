import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { abi } from "../../abi/abi.json";

const MarketplaceStats = () => {
    const [NftCreated, setNftCreated] = useState("0");
    const [NftOwners, setNftOwners] = useState("0");

    const contractAbi = abi;
    const contractAddress = "0x2F3241ccc7955276c11DcD7FF50810c3c204F77A";

    const getNumberOfNFTs = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Connect to the smart contract
            const contract = new ethers.Contract(
                contractAddress,
                contractAbi,
                provider.getSigner()
            );

            const numberOfNFTs = await contract.totalSupply();

            console.log("Number of NFTs:", numberOfNFTs.toString());

            setNftCreated(numberOfNFTs.toString());
        } catch (error) {
        console.error("Error fetching NFT data:", error);
        }
    };

    const getNumberOfOwners = async () => {
        try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Connect to the smart contract
        const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            provider.getSigner()
        );

        const numberOfOwners = await contract.getNumberOfOwners();

        console.log("Number of Owners:", numberOfOwners.toString());

        setNftOwners(numberOfOwners.toString());
        } catch (error) {
        console.error("Error fetching the number of NFT owners", error);
        }
    };

    useEffect(() => {
        getNumberOfNFTs();
        getNumberOfOwners();
    }, []);

    return (
        <div className="w-full md:w-[40.5rem] flex flex-row items-center justify-center gap-2 md:gap-9 text-xl md:text-[3.13rem]">
        <div className="flex-1 relative leading-5 md:leading-[4.97rem]">
            <p className="mb-2">{NftCreated}</p>
            <p className="m-0 text-deeppink-200">Items</p>
        </div>
        <div className="flex-1 relative leading-5 md:leading-[4.97rem] text-shadow-md">
            <p className="mb-2">{NftOwners}</p>
            <p className="m-0 text-deeppink-200">Owners</p>
        </div>
        </div>
    );
};

export default MarketplaceStats;
