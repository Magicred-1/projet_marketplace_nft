import HeaderComponent from "./../global/header-component";
import TextFooter from "../global/text-footer";
import { useState, useEffect } from "react";
import { abi } from "../../abi/abi.json";
import { ethers } from "ethers";
import moment from 'moment';
import ProfileCreations from "./profile-creations";

const ProfileDetails = () => {
    const contractAbi = abi;
    const contractAddress = "0x2ad0f3BF74762357057fdd0f86CBdF6aBC4687eA";

    const [profile, setProfile] = useState({
        userID: "1234567890",
        username: "John Doe",
        password: "password",
        walletAddress: "0x1234567890",
        nftOwned: 0,
        created: "2021-10-01T00:00:00.000+00:00",
    });
    
    useEffect(() => {
        // Check if localStorage is available
        const localStorageAvailable = typeof localStorage !== "undefined";
    
        if (localStorageAvailable) {
            const storedProfile = JSON.parse(localStorage.getItem("user"));
            if (storedProfile) {
                setProfile((prevProfile) => ({ ...prevProfile, ...storedProfile }));
            }
        }
    }, []);

    const [nftOwned, setNftOwned] = useState(0);

    // using ethers to get the number of NFTs owned by the user
    const getNftOwned = async () => {
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

        const nftOwned = await contract.balanceOf(connectedWalletAddress);

        setNftOwned(nftOwned.toString());
    };

    useEffect(() => {
        getNftOwned();
    }, []);
        
    return (
    <main className="self-stretch overflow-hidden flex flex-col items-center 
    justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular
    relative bg-white w-full flex flex-col items-center justify-center">
        <HeaderComponent />
        <div className="flex flex-col h-auto py-[2.25rem] px-[0.06rem] box-border items-center justify-start bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 self-stretch">
                <div className="relative leading-[4.97rem] text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25) h-[13.81rem] self-stretch flex flex-col p-[0.63rem] box-border items-center justify-center">
                    MY PROFILE
                </div>

                <div className="flex h-auto flex-row py-[0.63rem] pl-[8.81rem] pr-[4.81rem] box-border items-start justify-start gap-[4.81rem] text-left text-[1.3rem] h-[10.94rem] self-stretch flex-wrap md:flex-nowrap">

                    {/* User ID and Wallet Address sections */}
                    <div className="w-full flex flex-col md:flex-row gap-4">

                    {/* User ID section */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                        <div className="h-16 flex items-center">
                        <span className="text-orange-300">User ID:</span>
                        </div>
                        <div className="h-16 flex items-center">
                        <span>{profile.userID.substring(0, 3) + "..." + profile.userID.substring(profile.userID.length - 3, profile.userID.length)}</span>
                        </div>
                    </div>

                    {/* Username section */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                        <div className="h-16 flex items-center">
                        <span className="text-orange-300">Username:</span>
                        </div>
                        <div className="h-16 flex items-center">
                        <span>{profile.username}</span>
                        </div>
                    </div>

                    {/* NFT Owned section */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                        <div className="h-16 flex items-center">
                        <span className="text-orange-300">NFTs Owned:</span>
                        </div>
                        <div className="h-16 flex items-center">
                        <span>{nftOwned}</span>
                        </div>
                    </div>

                    {/* Wallet Address section */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                        <div className="h-16 flex items-center">
                        <span className="text-orange-300">Wallet Address:</span>
                        </div>
                        <div className="h-16 flex items-center">
                        <span>{profile.walletAddress.substring(0, 3) + "..." + profile.walletAddress.substring(profile.walletAddress.length - 3, profile.walletAddress.length)}</span>
                        </div>
                    </div>

                    {/* Password section */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                        <div className="h-16 flex items-center">
                        <span className="text-orange-300">Password:</span>
                        </div>
                        <div className="h-16 flex items-center">
                        <span>{profile.password.substring(0, 3) + "..." + profile.password.substring(profile.password.length - 3, profile.password.length)}</span>
                        </div>
                    </div>

                    {/* Date of creation section */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                        <div className="h-16 flex items-center">
                        <span className="text-orange-300">Date of Creation:</span>
                        </div>
                        <div className="h-16 flex items-center">
                        <span>{moment(profile.created).format('DD/MM/YYYY - HH:mm')}</span>
                        </div>
                    </div>

                    </div>
                </div>
                <ProfileCreations 
                    address={contractAddress}
                    abi={contractAbi}
                />
            </div>
            <TextFooter />
        </main>
    );
};

export default ProfileDetails;


