import HeaderComponent from "../components/header-component";
import NFTForm from "./n-f-t-form";
import TextFooter from "../global/text-footer";

const BuildNFT = () => {
    return (
        <main className="relative bg-white w-full h-[75.06rem] flex flex-col
            md:text-[5.38rem] md:font-ttoctosquares-bold
            items-center justify-centerself-stretch overflow-hidden flex flex-col items-center
            justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular
        ">
            <HeaderComponent />
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
            <TextFooter />
        </main>
    );
};

export default BuildNFT;
