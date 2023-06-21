import HeaderComponent from "../../components/header-component";
import CryptoWaveCard from "../../components/crypto-wave-card";

import { useRouter } from "next/router";

const BuyPage = () => {
    const router = useRouter();
    const { nft_uri } = router.query;

    return (
        <main className="relative bg-white w-full h-[75.06rem] flex flex-col items-center justify-center text-left text-[1.25rem] text-white font-ttoctosquares-regular">
            <main className="self-stretch overflow-hidden flex flex-col items-center justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular">
            <HeaderComponent headerLogo="/header-logo1.svg" />
            <div className="self-stretch bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
                <div className="self-stretch h-[16.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                    <div className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    {/* <span>{`BID ON NFT N° ${nft_id}`}</span> */}
                    <span className="text-deeppink-100">CryptoWave #${nft_uri}</span>
                    </div>
                </div>
                </div>
                <CryptoWaveCard />
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
            <div className="flex-1 rounded-mini bg-midnightblue box-border w-[17.75rem] flex flex-col py-[0.63rem] px-[1.19rem] items-center justify-center border-[5px] border-solid border-white">
            <div className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center z-[0]">
                <div className="relative leading-[4.97rem] text-deeppink-200 flex items-center w-[16.56rem] h-[2.69rem] shrink-0">
                CryptoWave #0001
                </div>
                <div className="relative leading-[4.97rem] flex items-center w-[16.25rem] h-[2.81rem] shrink-0">
                CryptoWave Official HUB
                </div>
                <div className="self-stretch h-[3.56rem] flex flex-row items-center justify-center gap-[0.06rem] text-center">
                <div className="self-stretch w-[10.56rem] flex flex-row p-[0.63rem] box-border items-center justify-start">
                    <div className="relative leading-[4.97rem] flex items-center justify-center w-[4.81rem] h-[2.94rem] shrink-0">
                    19 ETH
                    </div>
                </div>
                <button className="cursor-pointer [border:none] p-[0.63rem] bg-mediumvioletred rounded-6xl w-[5.25rem] h-[2.31rem] flex flex-col box-border items-center justify-center">
                    <div className="relative text-[0.94rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-center">
                    BUY
                    </div>
                </button>
                </div>
            </div>
            </div>
        </main>
        );
    };

export default BuyPage;