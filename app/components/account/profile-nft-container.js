import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { ERC20Abi } from "../../abi/erc20.json";

const ProfileNFTContainer = ({
    nftName,
    nftID,
    nftImage,
    nftPrice,
    nftListed,
    address,
    abi,
}) => {
    const contractAddress = address;
    const contractAbi = abi;

    const ERC20ContractAddress = "0x9Af74716f988eD23d23D273Fa6eBC787e2E9D549";
    const ERC20_ABI = ERC20Abi;

    const [listedState, setListedState] = useState(nftListed);
    const [priceState, setPriceState] = useState(nftPrice);
    const [nftImageState, setNftImageState] = useState(nftImage);
    const [message, setMessage] = useState("");

    const listingNFT = async (nftID, price) => {
        try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Check if the user is connected to the wallet
        const accounts = await provider.listAccounts();

        if (accounts.length === 0) {
            console.error("Please connect to the wallet.");
            return;
        }

        // Connect to the smart contract
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
        );

        console.log(nftID);

        const formattedPrice = ethers.utils.parseEther(price.toString());

        console.log(formattedPrice);

        const approvedAddress = await contract.getApproved(nftID);

        if (approvedAddress !== contractAddress) {
            setMessage("Approving transaction...");
            const approveTx = await contract.connect(signer).approve(contractAddress, nftID);
            await approveTx.wait();
        }

        setMessage("Approving transaction...");

        // Call the smart contract to list the NFT
        const transaction = await contract.listNFT(nftID, formattedPrice,);

        setMessage("Waiting for listing to finish...");

        // Wait for the transaction to finish
        await transaction.wait();

        setMessage(`NFT #${nftID} successfully listed!`);
        setListedState(true);
        } catch (error) {
        console.error("Failed to list NFT:", error);
        }
    };

    const unlistingNFT = async (nftID) => {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Check if the user is connected to the wallet
            const accounts = await provider.listAccounts();

            if (accounts.length === 0) {
                console.error("Please connect to the wallet.");
                return;
            }

            // Connect to the smart contract
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                contractAbi,
                signer
            );

            // Call the smart contract to unlist the NFT
            const transaction = await contract.unlistNFT(nftID);

            setMessage("Waiting for transaction to finish...")

            // Wait for the transaction to finish
            await transaction.wait();
            setMessage(`NFT #${nftID} successfully unlisted!`);
            setListedState(false);
        } catch (error) {
            console.error("Failed to unlist NFT:", error);
        }
    };

    const listNFTAuction = async (nftID, price) => {
        try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Check if the user is connected to the wallet
        const accounts = await provider.listAccounts();

        if (accounts.length === 0) {
            console.error("Please connect to the wallet.");
            return;
        }

        // Connect to the smart contract
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
        );

        const ERC20Contract = new ethers.Contract(
            ERC20ContractAddress,
            ERC20_ABI,
            signer
        );

        // Get the user's token balance
        const userTokenBalance = await ERC20Contract.balanceOf(accounts[0]);

        const formattedPrice = ethers.utils.parseEther(price);

        console.log("User token balance:", userTokenBalance.toString());

        // Check user's allowance
        const allowance = await ERC20Contract.allowance(
            accounts[0],
            contractAddress
        );

        console.log("User allowance:", allowance.toString());

        // Check if the user has approved the contract to spend the specified amount of tokens
        if (allowance.lt(formattedPrice)) {
            // Approve the contract to spend the specified amount of tokens
            const approveTx = await ERC20Contract.approve(
            contractAddress,
            formattedPrice
        );
        await approveTx.wait();
        }

        // Call the smart contract to list the NFT
        const transaction = await contract.putNFTToAuction(
            nftID,
            formattedPrice,
            Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days from now
            accounts[0]
        );

        // Wait for the transaction to finish
        await transaction.wait();

        setListedState(true);
        } catch (error) {
            console.error("Failed to list NFT:", error);
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

    useEffect(() => {
        getNFTImage(nftImage);
    }, []);

    return (
        <>
        {/* Small message */}
        <div className="text-white text-center text-[1.25rem] font-ttoctosquares-regular">
            {message}
        </div>
        <div className="rounded-mini bg-midnightblue box-border w-[17.75rem] flex flex-col px-[1.19rem] items-center justify-center gap-[0.63rem] text-left text-[1.25rem] text-white font-ttoctosquares-regular border-[5px] border-solid border-white">
        <img
            className="rounded-t-mini rounded-b-none w-[17.06rem] h-[13.63rem] object-cover z-[1]"
            alt={nftName}
            src={nftImageState}
        />
        <div className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center z-[0]">
            <div className="relative text-deeppink-200 flex items-center  justify-center w-[16.56rem] h-[2.69rem] shrink-0">
            {nftName}#{nftID}
            </div>
            <div className="self-stretch h-[3.56rem] flex flex-row items-center justify-center gap-[0.06rem] text-center">
            {listedState ? (
                <div className="self-stretch w-[10.56rem] flex flex-row p-[0.63rem] box-border items-center justify-start">
                <div className="relative leading-[4.97rem] flex items-center justify-center h-[2.94rem] shrink-0">
                    {ethers.utils.formatEther(priceState)}&nbsp;
                    <span className="text-deeppink-200">&nbsp;DDT</span>
                </div>
                </div>
            ) : null}
            {!listedState ? (
                <div>
                <input
                    className="w-[8.31rem] h-auto mb-2 rounded-full border-[1px] border-solid border-white text-center text-bold font-ttoctosquares-regular"
                    type="text"
                    placeholder="Price"
                    onChange={(e) => {
                    setPriceState(e.target.value);
                    }}
                />
                <button
                    className="cursor-pointer focus:outline-none bg-blue-500 text-white font-ttoctosquares-regular rounded-full py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                    onClick={() => {
                        listingNFT(nftID, priceState);
                    }}
                >
                    List for Sale
                </button>
                <button
                    className="cursor-pointer focus:outline-none bg-green-500 text-white font-ttoctosquares-regular rounded-full py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
                    onClick={() => {
                        listNFTAuction(nftID, priceState);
                    }}
                >
                    Auction
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
        </>
    );
};

export default ProfileNFTContainer;
