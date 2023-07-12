import HeaderComponent from "../../components/global/header-component";
import TextFooter from "../../components/global/text-footer";
import NFTBidDetails from "../../components/nfts/nft_bid_details";
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
                <NFTBidDetails nft_name={nft_collection_name} nft_id={nft_id} nft_image={nft_image} />
            </div>
            <TextFooter />
            </main>
        </main>
        </>
    );
};

export default BidPage;