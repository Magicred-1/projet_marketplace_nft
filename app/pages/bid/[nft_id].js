import HeaderComponent from "../../components/header-component";
import NFTBIDDetail from "../../components/nft_bid_details";
import Head from "next/head";

import { useRouter } from 'next/router'

const BidPage = () => {
    const router = useRouter();
    const nft_id = router.query.nft_id;
    // get nft_name from smart contract
    // get nft_collection_name from smart contract
    const nft_name = "NFT Name";
    const nft_collection_name = "NFT Collection Name";
    const nft_image = "/images/illustration.png";

    return (
        <>
        <Head>
            <title>Digital Delirium - Bid on NFT {nft_id}</title>
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
                        <span>{`BID ON NFT ${nft_collection_name}`}</span><br />
                        <span className="text-deeppink-100">{nft_name}#{nft_id}</span>
                        </div>
                    </div>
                </div>
                <NFTBIDDetail nft_name={nft_collection_name} nft_id={nft_id} nft_image={nft_image} />
            </div>
            <div className="self-stretch bg-midnightblue flex flex-col items-start justify-center text-left text-[1.25rem] border-[1px] border-solid border-white">
                <div className="w-[75.38rem] h-[3.56rem] flex flex-row py-[0rem] px-[1.81rem] box-border items-center justify-center">
                <div className="relative leading-[3.75rem] inline-block w-[59.44rem] shrink-0">
                    Digital Delirium © 2023 ALL RIGHTS RESERVED
                </div>
                <button
                    className="cursor-pointer py-[0rem] px-[0.63rem] bg-cornflowerblue rounded-xl box-border w-[14.25rem] h-[2.13rem] overflow-hidden shrink-0 flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
                    data-animate-on-scroll
                >
                    <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
                    GITHUB REPO
                    </div>
                </button>
                </div>
            </div>
            </main>
        </main>
        </>
    );
};

export default BidPage;