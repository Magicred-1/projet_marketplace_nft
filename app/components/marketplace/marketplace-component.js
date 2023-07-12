import NTFsContainer from "../nfts/n-t-fs-container";
import TextFooter from "../global/text-footer";
import MarketplaceStats from "./marketplace-stats";

const MarketplaceComponent = () => {
    return (
        <main className="relative bg-white w-full flex flex-col items-center justify-center self-stretch overflow-hidden flex-col items-center justify-start text-center text-3xl sm:text-4xl md:text-5xl text-white font-ttoctosquares-regular">
            <div className="self-stretch bg-midnightblue h-auto overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
                <div className="self-stretch h-auto flex flex-col p-[0.63rem] box-border items-center justify-center">
                    <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                        <h1 className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                            MARKETPLACE
                        </h1>
                    </div>
                    <MarketplaceStats />
                </div>
                <NTFsContainer />
            </div>
            <TextFooter />
        </main>
    );
};

export default MarketplaceComponent;
