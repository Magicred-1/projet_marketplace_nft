import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Router from "next/router";
import ProfileNFTContainer from "./profile-nft-container";

const ProfileCreations = ({abi, address}) => {
    const [creations, setCreations] = useState([]);

    const contractAbi = abi;
    const contractAddress = address;

    // using ethers to get the number of NFTs owned by the user
    const getNftOwnedByAddress = async () => {
        if (typeof window.ethereum === "undefined") {
            console.error("Please install MetaMask or enable an Ethereum provider.");
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
            

        // Check if the user is connected to the wallet
        const accounts = await provider.listAccounts();

        if (accounts.length === 0) {
            console.error("Please connect to the wallet.");
            return;
        }

        // Connect to the smart contract
        const contract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());

        const connectedWalletAddress = accounts[0];

        const creations = await contract.getAllCreatorNFTsDetails(connectedWalletAddress);

        setCreations(creations);
        console.log(creations);
    };

    useEffect(() => {
        getNftOwnedByAddress();
    }, []);

    return (
        <div className="mt-1">
        <span className="text-2xl font-bold">MY NFTs:</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {creations.length > 0 ? (
            creations.map((creation, index) => (
                <div
                key={index}
                className="relative w-full max-w-[20rem] p-4 shadow-md"
                >
                <ProfileNFTContainer
                    nftID={creation.tokenId.toString()}
                    nftName={creation.name}
                    nftDescription={creation.description}
                    nftPrice={creation.price.toString()}
                    nftListed={creation.listed}
                    nftImage={creation.metadataURI}
                    address={contractAddress}
                    abi={abi}
                />
                </div>
            ))
            ) : (
            <div className="relative w-full max-w-[20rem] bg-white rounded-lg p-4 shadow-md">
                <p className="text-lg text-black grid-cols-4">No NFTs found</p>
                <button
                className="cursor-pointer focus:outline-none bg-blue-500 text-white font-ttoctosquares-regular rounded-full py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                onClick={() => {
                    Router.push("/create");
                }}
                >
                Create one?
                </button>
            </div>
            )}
        </div>
        </div>
    );
};

export default ProfileCreations;