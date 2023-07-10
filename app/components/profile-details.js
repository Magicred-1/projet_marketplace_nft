import HeaderComponent from "./header-component";
import TextFooter from "./text-footer";
import { useState, useEffect } from "react";
import { abi } from "../abi/abi.json";
import { ethers } from "ethers";
import moment from 'moment';

const ProfileDetails = () => {
    const contractAbi = abi;
    const contractAddress = "0xc24aFaa97633ccB150D0aE87470116b8D9268EAb";

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
        <main className="flex flex-col items-center justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular relative bg-white w-full">
            <HeaderComponent />

            <div className="flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 self-stretch">
                <div className="relative leading-[4.97rem] text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25) h-[13.81rem] self-stretch flex flex-col p-[0.63rem] box-border items-center justify-center">
                    MY PROFILE
                </div>

                <div className="flex flex-row py-[0.63rem] pl-[8.81rem] pr-[4.81rem] box-border items-start justify-start gap-[4.81rem] text-left text-[1.3rem] h-[20.94rem] self-stretch flex-wrap md:flex-nowrap">

                    {/* User ID and Wallet Address sections */}
                    <div className="w-full md:w-1/3 flex flex-col gap-[0.63rem]">

                        {/* User ID section */}
                        <div className="h-[7.56rem] self-stretch flex flex-col p-[0.63rem] box-border items-start justify-start">
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className=" text-orange-300 [line-break:anywhere]">User ID:</span>
                            </h2>
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">{profile.userID}</h2>
                        </div>

                        {/* Wallet Address section */}
                        <div className="h-[7.56rem] self-stretch flex flex-col p-[0.63rem] box-border items-start justify-start">
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className="text-orange-300 [line-break:anywhere]">Wallet Address:</span>
                            </h2>
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                {profile.walletAddress.substring(0, 3) + "..." + profile.walletAddress.substring(profile.walletAddress.length - 3, profile.walletAddress.length)}
                            </h2>
                        </div>
                    </div>

                    {/* Username and Password sections */}
                    <div className="w-full md:w-1/3 flex flex-col gap-[0.63rem]">

                        {/* Username section */}
                        <div className="h-[7.56rem] self-stretch flex flex-col p-[0.63rem] box-border items-start justify-start">
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className="text-orange-300 [line-break:anywhere]">Username:</span>
                            </h2>
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className=" [line-break:anywhere]">{profile.username}</span>
                            </h2>
                        </div>

                        {/* Password section */}
                        <div className="h-[7.56rem] self-stretch flex flex-col p-[0.63rem] box-border items-start justify-start">
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className="text-orange-300 [line-break:anywhere]">Password:</span>
                            </h2>
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0" type="password">
                        <span className="[line-break:anywhere]">
                            {profile.password.substring(0, 3) + "..." + profile.password.substring(profile.password.length - 3, profile.password.length)}
                        </span>
                            </h2>
                        </div>
                    </div>

                    {/* NFT Owned and Date of creation sections */}
                    <div className="w-full md:w-1/3 flex flex-col gap-[0.63rem]">

                        {/* NFT Owned section */}
                        <div className="h-[7.56rem] self-stretch flex flex-col p-[0.63rem] box-border items-start justify-start">
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className="text-orange-300 [line-break:anywhere]">NFTs Owned:</span>
                            </h2>
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className="[line-break:anywhere]">{nftOwned}</span>
                            </h2>
                        </div>

                        {/* Date of creation section */}
                        <div className="h-[7.56rem] self-stretch flex flex-col p-[0.63rem] box-border items-start justify-start">
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className="text-orange-300 [line-break:anywhere]">Date of Creation:</span>
                            </h2>
                            <h2 className="m-0 relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                                <span className="[line-break:anywhere]">{moment(profile.created).format('DD/MM/YYYY - HH:mm')}</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="relative text-[1.78rem] text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25) h-[3.81rem] self-stretch flex flex-col p-[0.63rem] box-border items-center justify-center">
                    CREATIONS
                </div>

            </div>



            <TextFooter />
        </main>


    );
};

export default ProfileDetails;


