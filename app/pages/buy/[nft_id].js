import HeaderComponent from "../../components/header/header-component";
import NFTBuyDetail from "../../components/nfts/nft_buy_details";
import Head from "next/head";
import abi from "../../abi/abi.json";
import ethers from "ethers";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import TextFooter from "../../components/global/text-footer";

const BuyPage = () => {
    const router = useRouter();
    const nft_id = router.query.nft_id;
    const [nftName, setNFTName] = useState("");
    const [nftDescription, setNFTDescription] = useState("");
    const [nftPrice, setNFTPrice] = useState("");
    const [nftMetadataURI, setNFTMetadataURI] = useState("");
    const [message, setMessage] = useState("");
    const contractAbi = abi;
    const contractAddress = "0x2F3241ccc7955276c11DcD7FF50810c3c204F77A";


    // get details from nft_id with smart contract
    const getNFTDetails = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Connect to the smart contract
            const contract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());

            const nftDetails = await contract.getNFTDetails(nft_id);

            console.log("NFT Details:", nftDetails);
            
            setNFTName(nftDetails[0]);
            setNFTDescription(nftDetails[1]);
            setNFTPrice(nftDetails[2]);
            setNFTMetadataURI(nftDetails[3]);

        }
        catch (error) {
            console.error("Error fetching NFT data:", error);
        }
    };

    useEffect(() => {
        if (nft_id) {
            getNFTDetails();
        }
    }, [nft_id]);

    const buyNFT = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Connect to the smart contract
            const contract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());

            // Call the smart contract function
            const transaction = await contract.buyNFT(nft_id, { value: ethers.utils.parseEther(nftPrice) });

            // Wait for the transaction to finish
            await transaction.wait();

            setMessage("NFT purchased!");

            console.log("NFT purchased!");
        }
        catch (error) {
            console.error("Error buying NFT:", error);
        }
    };

    return (
        <>
        <Head>
            <title>Digital Delirium - Bid on NFT {nftName}#{nft_id}</title>
            <meta name="description" content="Bid" />
            <link rel="icon" href="/favicon.ico" />
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
                {message}
                <NFTBuyDetail nft_name={nftName} nft_description={nftDescription} nft_price={nftPrice} nft_id={nft_id} nft_image={nftMetadataURI} buy_function={buyNFT} />
            </div>
            <TextFooter />
            </main>
        </main>
        </>
    );
};

export default BuyPage;