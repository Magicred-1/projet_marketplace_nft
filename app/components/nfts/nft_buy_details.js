import React from 'react';

const NFTBuyDetails = ({ nft_name, nft_description, nft_price, nft_id, nft_image, buy_function }) => {

return (
    <div className="self-stretch h-[41.94rem] flex flex-col p-[0.63rem] box-border items-center justify-start gap-[0.63rem] text-center text-[1.25rem] text-white font-ttoctosquares-regular">
        <div className="rounded-mini bg-midnightblue box-border w-[17.75rem] h-[25rem] flex flex-col py-[0.63rem] px-[1.19rem] items-center justify-center gap-[0.63rem] border-[5px] border-solid border-white">
        <img
            className="rounded-t-mini rounded-b-none w-[17.06rem] h-[13.63rem] object-cover z-[1]"
            alt=""
            src={nft_image}
        />
        <div className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center z-[0]">
            <div className="relative leading-[4.97rem] text-deeppink-200 flex items-center justify-center w-[16.56rem] h-[2.69rem] shrink-0">
            {nft_name}#{nft_id}
            </div>
            <div className="relative leading-[4.97rem] text-left flex items-center w-[16.25rem] h-[2.81rem] shrink-0">
            {nft_name}
            </div>
            <div className="self-stretch h-[3.56rem] flex flex-row items-center justify-center">
            <div className="self-stretch w-[16.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                <div className="relative leading-[4.97rem] flex items-center w-[15.94rem] h-[2.94rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                    <span>{`Buying Price :`}</span>
                    <span className="text-deeppink-200">{nft_price} ETH</span>
                </span>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="w-[49.94rem] h-[7.56rem] flex flex-row py-[0.63rem] px-[1.88rem] box-border items-center justify-center">
            {nft_description}
            

    <button className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[26rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white"
    onClick={
        () => {
            buy_function();
        }
    }>
        <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
            Buy
        </div>
    </button>
    </div>
</div>
);
};

export default NFTBuyDetails;
