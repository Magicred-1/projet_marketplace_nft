import HeaderComponent from "../../components/global/header-component";
import Head from "next/head";
import { abi } from "../../abi/abi.json";
import { ERC20Abi } from "../../abi/erc20.json";
import { ethers } from "ethers";
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import TextFooter from "../../components/global/text-footer";

const BuyPage = () => {
    const router = useRouter();
    const { nft_id } = router.query;

    const [provider, setProvider] = useState(null);
    const [nftName, setNFTName] = useState("");
    const [nftDescription, setNFTDescription] = useState("");
    const [nftPrice, setNFTPrice] = useState("");
    const [message, setMessage] = useState("");
    const [nftImageState, setNftImageState] = useState("");

    const contractAddress = "0x82307f030845dbDfb010792c436422344dB650E8";
    const contractAbi = abi;

    const ERC20ContractAddress = "0xE85Ddd2a9D7396b8475124b35f8CdFc6Fbe2A585"
    const ERC20_ABI = ERC20Abi;
    
    useEffect(() => {
        const initialize = async () => {
        if (typeof window !== "undefined" && window.ethereum) {
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" });
                const web3Provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                setProvider(web3Provider);
            } catch (error) {
                console.error(
                    "Error connecting to the Ethereum provider:",
                    error
                );
                setMessage("Error while connecting to the Ethereum provider.");
            }
        }
        };
    
        const getNFTDetails = async () => {
        if (provider && nft_id) {
            try {
            const contract = new ethers.Contract(
                contractAddress,
                contractAbi,
                provider.getSigner()
            );
    
            const foundNFT = await contract.getNFTDetails(nft_id);
    
            if (!foundNFT) {
                window.location.href = "/404";
                return;
            }
    
            const { name, description, price, metadataURI } = foundNFT;
    
            const formattedPrice = ethers.utils.formatEther(price);
    
            setNFTName(name);
            setNFTDescription(description);
            setNFTPrice(formattedPrice);
            getNFTImage(metadataURI);
            } catch (error) {
                console.error("Error retrieving NFT details:", error);
            }
        }
        };
    
        async function getNFTImage(metadataURI) {
        try {
        const response = await fetch(metadataURI);
    
        if (!response.ok) {
            console.error("Failed to get NFT image");
            return;
        } else {
            const metadata = await response.json();
            setNftImageState(metadata.image);
        }
        } catch (error) {
            console.error("Failed to get NFT image:", error);
        }
        }
    
        if (provider && nft_id) {
        getNFTDetails();
        }
        initialize();
    }, [provider, nft_id]);
    
    const buyNFT = async (nft_id) => {
        try {
        if (!provider) {
            setMessage("Please connect to your wallet.");
            return;
        }
    
        // Check if the user is connected to the wallet
        const accounts = await provider.listAccounts();
    
        if (accounts.length === 0) {
            setMessage("Please connect to your wallet.");
            return;
        }
    
        // Connect to the smart contract
        const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            provider.getSigner()
        );
    
        const ERC20Contract = new ethers.Contract(
            ERC20ContractAddress,
            ERC20_ABI,
            provider.getSigner()
        );
    
        // Get the user's token balance
        const userTokenBalance = await ERC20Contract.balanceOf(accounts[0]);
    
        const formattedUserTokenBalance = ethers.utils.formatEther(
            userTokenBalance
        );

        // Check if the user has enough tokens to buy the NFT
        if (parseFloat(formattedUserTokenBalance) < parseFloat(nftPrice)) {
            setMessage("You don't have enough tokens to buy this NFT.");
            return;
        }
    
        // Call the smart contract to buy the NFT with DDT tokens
        const transaction = await contract.buyNFT(nft_id);
        setMessage("Processing the transaction...");
    
        // Wait for the transaction to finish
        await transaction.wait();
    
        setMessage("The transaction was successful! The NFT is now yours.");
        } catch (error) {
        console.error("Failed to buy NFT:", error);
        setMessage("Failed to buy the NFT. Please try again.");
        }
    };
    

    return (
        <>
        <Head>
            <title>Digital Delirium - Buy NFT {nftName}#{nft_id}</title>
            <meta name="description" content="Bid" />
            <link rel="icon" href="../../../favicon.ico" />
        </Head>
        <main className="relative bg-white w-full flex flex-col items-center justify-center text-left text-[1.25rem] text-white font-ttoctosquares-regular">
            <main className="self-stretch overflow-hidden flex flex-col items-center justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular">
            <HeaderComponent />
            <div className="self-stretch bg-midnightblue overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
                <div className="self-stretch h-[16.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                    <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                        <div className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                            <span>{`BUYING NFT ${nftName}#${nft_id}`}</span><br />
                            <span className="text-deeppink-100">{nftName}#{nft_id}</span>
                        </div>
                    </div>
                </div>
                <span style={{ color: 'red', fontSize: '2.5rem' }}>
                    <div className="self-stretch
                        flex flex-col
                        center box-border items-center justify-center">
                        {message}
                    </div>
                </span>
                <div className="self-stretch h-[41.94rem] flex flex-col p-[0.63rem] box-border items-center justify-start gap-[0.63rem] text-center text-[1.25rem] text-white font-ttoctosquares-regular">
                    <div className="rounded-mini bg-midnightblue box-border w-[17.75rem] h-[25rem] flex flex-col px-[1.19rem] items-center justify-center gap-[0.63rem] border-[5px] border-solid border-white">
                    <img
                        className="rounded-t-mini rounded-b-none w-[17.06rem] h-[13.63rem] object-cover z-[1]"
                        alt=""
                        src={nftImageState}
                    />
                    <div className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center z-[0]">
                        <div className="relative leading-[4.97rem] text-deeppink-200 flex items-center justify-center w-[16.56rem] h-[2.69rem] shrink-0">
                        {nftName}#{nft_id}
                        </div>
                        <div className="self-stretch h-[3.56rem] flex flex-row items-center justify-center">
                        <div className="self-stretch w-[16.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                            <div className="relative leading-[4.97rem] flex items-center w-[15.94rem] h-[2.94rem] shrink-0">
                            <span className="[line-break:anywhere] w-full">
                                <span>Buying Price : </span>
                                <span className="text-deeppink-200">{nftPrice} DDT</span>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="w-[49.94rem] h-[7.56rem] flex flex-row py-[0.63rem] px-[1.88rem] box-border items-center justify-center">
                        {nftDescription}
                    </div>
                <button className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[26rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white"
                onClick={
                    () => {
                        buyNFT(nft_id);
                    }
                }>
                    <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
                        Buy
                    </div>
                </button>
            </div>
            </div>
            <TextFooter />
            </main>
        </main>
        </>
    );
};

export default BuyPage;