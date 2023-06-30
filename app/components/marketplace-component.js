import HeaderComponent from "./header-component";
import NTFsContainer from "./n-t-fs-container";
import TextFooter from "./text-footer";





const MarketplaceComponent = () => {
    return (
        <main className="relative bg-white w-full flex flex-col items-center justify-center self-stretch overflow-hidden flex-col items-center justify-start text-center text-3xl sm:text-4xl md:text-5xl text-white font-ttoctosquares-regular">
            <div className="self-stretch bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
                <div className="self-stretch h-[16.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                    <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                        <h1 className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                            MARKETPLACE
                        </h1>
                    </div>
                    <div className="w-full md:w-[40.5rem] flex flex-row items-center justify-center gap-2 md:gap-9 text-xl md:text-[3.13rem]">
                        <div className="flex-1 relative leading-5 md:leading-[4.97rem]">
                            <p className="mb-2">
                                3
                            </p>
                            <p className="m-0 text-deeppink-200">Items</p>
                        </div>
                        <div className="flex-1 relative leading-5 md:leading-[4.97rem] text-shadow-md">
                            <p className="mb-2">
                                2
                            </p>
                            <p className="m-0 text-deeppink-200">Owners</p>
                        </div>
                        <div className="flex-1 relative leading-5 md:leading-[4.97rem]">
                            <p className="mb-2">
                                3
                            </p>
                            <p className="m-0 text-deeppink-200">Collections</p>
                        </div>
                    </div>
                </div>
                <NTFsContainer />
            </div>
        </main>
    );
};

export default MarketplaceComponent;
