import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { abi } from "../../abi/abi.json";

const MarketplaceStats = () => {
    const [NFTCreated, setNFTCreated] = useState("0");
    const [NFTOwners, setNFTOwners] = useState("0");

    const contractAbi = abi;
    const contractAddress = "0x6d37ECf468c94E98D277207Df4da662721cdEF61";

    const getNumberOfNFTsForSales = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Connect to the smart contract
            const contract = new ethers.Contract(
                contractAddress,
                contractAbi,
                provider.getSigner()
            );
            
            console.log("Contract:", contract);
            const getNumberOfNFTs = await contract.getNumberOfListedItems();

            console.log("Number of NFTs for sale:", getNumberOfNFTs.toString());

            setNFTCreated(getNumberOfNFTs.toString());
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

        const numberOfOwners = await contract.getNumberOfItemsOwners();

        console.log("Number of Items Owners:", numberOfOwners.toString());

        setNFTOwners(numberOfOwners.toString());
        } catch (error) {
        console.error("Error fetching the number of NFT owners", error);
        }
    };

    useEffect(() => {
        getNumberOfNFTsForSales();
        getNumberOfOwners();
    }, []);

    return (
        <div className="w-full md:w-[40.5rem] flex flex-row items-center justify-center gap-2 md:gap-9 text-xl md:text-[3.13rem]">
            <div className="flex-1 relative leading-5 md:leading-[4.97rem]">
                <p className="mb-2">{NFTCreated}</p>
                <p className="m-0 text-deeppink-200">Items</p>
            </div>
            <div className="flex-1 relative leading-5 md:leading-[4.97rem] text-shadow-md">
                <p className="mb-2">{NFTOwners}</p>
                <p className="m-0 text-deeppink-200">Owners</p>
            </div>
        </div>
    );
};

export default MarketplaceStats;
