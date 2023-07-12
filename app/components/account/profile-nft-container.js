import { ethers } from "ethers";
import { useState } from "react";

const ProfileNFTContainer = ({nftName, nftID, nftImage, nftPrice, nftListed, address, abi}) => {
    const contractAddress = address;
    const contractAbi = abi;
    const [listedState, setListedState] = useState(nftListed);
    const [priceState, setPriceState] = useState(nftPrice);

    const unlistingNFT = async (nftID) => {
        try {
            await window.ethereum.enable();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
    
            // Check if the user is connected to the wallet
            const accounts = await provider.listAccounts();
    
            if (accounts.length === 0) {
                console.error("Please connect to the wallet.");
                return;
            }
    
            // Connect to the smart contract
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    
            // Call the smart contract to list the NFT
            const transaction = await contract.unlistNFT(nftID);
    
            // Wait for the transaction to finish
            await transaction.wait();
    
            setListedState(false);
        }
        catch (error) {
            console.error("Failed to unlist NFT:", error);
        }
    };

    const listingNFT = async (nftID) => {
        try {
            await window.ethereum.enable();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
    
            // Check if the user is connected to the wallet
            const accounts = await provider.listAccounts();
    
            if (accounts.length === 0) {
                console.error("Please connect to the wallet.");
                return;
            }
    
            // Connect to the smart contract
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractAbi, signer);
    
            // Call the smart contract to list the NFT
            const transaction = await contract.listNFT(nftID, priceState.toString());
    
            // Wait for the transaction to finish
            await transaction.wait();
    
            setListedState(true);
        } catch (error) {
            console.error("Failed to list NFT:", error);
        }
    };

    return (
        <div className="rounded-mini bg-midnightblue box-border w-[17.75rem] flex flex-col px-[1.19rem] items-center justify-center gap-[0.63rem] text-left text-[1.25rem] text-white font-ttoctosquares-regular border-[5px] border-solid border-white">
        <img
            className="rounded-t-mini rounded-b-none w-[17.06rem] h-[13.63rem] object-cover z-[1]"
            alt={nftName}
            src={nftImage}
        />
        <div
            className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center z-[0]"
        >
            <div className="relative leading-[4.97rem] text-deeppink-200 flex items-center  justify-center w-[16.56rem] h-[2.69rem] shrink-0">
            {nftName}#{nftID}
            </div>
            <div className="self-stretch h-[3.56rem] flex flex-row items-center justify-center gap-[0.06rem] text-center">
            <div className="self-stretch w-[10.56rem] flex flex-row p-[0.63rem] box-border items-center justify-start">
                <div className="relative leading-[4.97rem] flex items-center justify-center w-[4.81rem] h-[2.94rem] shrink-0">
                {priceState} ETH
                </div>
            </div>
            {!listedState ? (
            <div>
                <input
                    className="w-[5.31rem] h-auto mb-2 rounded-full border-[1px] border-solid border-white text-center text-bold font-ttoctosquares-regular"
                    type="text"
                    placeholder="Price"
                    onChange={(e) => {
                        setPriceState(e.target.value);
                    }}
                />
                    
                <button className="cursor-pointer focus:outline-none bg-blue-500 text-white font-ttoctosquares-regular rounded-full py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                    onClick={() => {
                        listingNFT(nftID);
                    }
                }
                >
                    List for sale ?
                </button>
            </div>
            ) : (
                <button
                    className="cursor-pointer focus:outline-none bg-red-400 text-white font-ttoctosquares-regular rounded-full py-2 px-4 hover:bg-red-600 transition-colors duration-300 ease-in-out"
                    onClick={() => {
                        unlistingNFT(nftID);
                    }}
                    >
                    Unlist
                </button>
            )}
            </div>
        </div>
        </div>
    );
};

export default ProfileNFTContainer;
