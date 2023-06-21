import HeaderComponent from "../components/header-component";
import NFTForm from "../components/n-f-t-form";
import TextFooter from "../components/text-footer";
import Head from "next/head";

const BuildNFT = () => {
    return (
    <>
    <Head>
        <title>Digital Delirium - Build NFT</title>
    </Head>
    <main className="relative bg-white w-full h-[75.06rem] flex flex-col items-center justify-center">
        <main className="self-stretch overflow-hidden flex flex-col items-center justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular">
        <HeaderComponent headerLogo="/header-logo4.svg" />
        <div className="self-stretch bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
            <div className="self-stretch h-[16.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
            <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                <div className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                BUILD YOUR NFT
                </div>
            </div>
            </div>
            <NFTForm />
        </div>
        <div className="self-stretch bg-midnightblue flex flex-col items-start justify-center border-[1px] border-solid border-white">
            <TextFooter />
        </div>
        </main>
    </main>
    </>
    );
};

export default BuildNFT;
