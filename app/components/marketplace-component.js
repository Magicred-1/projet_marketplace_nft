import HeaderComponent from "./header-component";
import NTFsContainer from "./n-t-fs-container";
import TextFooter from "./text-footer";


const MarketplaceComponent = () => {
    return (
        <main className="relative bg-white w-full flex flex-col items-center justify-center self-stretch overflow-hidden flex flex-col items-center justify-start text-center text-[4.38rem] text-white font-ttoctosquares-regular">
            <HeaderComponent headerLogo="/images/digital_delirium_logo.png" />
            <div className="bg-midnightblue w-[75.81rem] h-[51.69rem] overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start gap-[5rem]">
            <div className="self-stretch h-[16.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center gap-[0.63rem]">
                <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                <div className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    Marketplace
                </div>
                </div>
                <div className="w-[40.5rem] flex flex-row items-center justify-center gap-[9.31rem] text-[3.13rem]">
                <div className="flex-1 relative leading-[4.97rem]">
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                    3
                    </p>
                    <p className="m-0 text-deeppink-200">Items</p>
                </div>
                <div className="flex-1 relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                    2
                    </p>
                    <p className="m-0 text-deeppink-200">Owners</p>
                </div>
                <div className="flex-1 relative leading-[4.97rem]">
                    <p className="[margin-block-start:0] [margin-block-end:2px]">
                    3
                    </p>
                    <p className="m-0 text-deeppink-200">Collections</p>
                </div>
                </div>
            </div>
            <NTFsContainer />
            </div>
            <TextFooter />
        </main>
    );
};

export default MarketplaceComponent;
