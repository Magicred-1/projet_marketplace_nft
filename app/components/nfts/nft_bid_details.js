import React from 'react';

const NFTBidDetails = ({ nft_uri, nft_name, nft_collection_name, nft_image }) => {

return (
    <div className="self-stretch h-[41.94rem] flex flex-col p-[0.63rem] box-border items-center justify-start gap-[0.63rem] text-center text-[1.25rem] text-white font-ttoctosquares-regular">
        <div className="rounded-mini bg-midnightblue box-border w-[17.75rem] h-[25rem] flex flex-col py-[0.63rem] px-[1.19rem] items-center justify-center gap-[0.63rem] border-[5px] border-solid border-white">
        <img
            className="rounded-t-mini rounded-b-none w-[17.06rem] h-[13.63rem] object-cover z-[1]"
            alt=""
            src={"images/illustration.png" }
        />
        <div className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center z-[0]">
            <div className="relative leading-[4.97rem] text-deeppink-200 flex items-center justify-center w-[16.56rem] h-[2.69rem] shrink-0">
            {nft_name}#{nft_uri}
            </div>
            <div className="relative leading-[4.97rem] text-left flex items-center w-[16.25rem] h-[2.81rem] shrink-0">
            {nft_collection_name}
            </div>
            <div className="self-stretch h-[3.56rem] flex flex-row items-center justify-center">
            <div className="self-stretch w-[16.25rem] flex flex-row p-[0.63rem] box-border items-center justify-center">
                <div className="relative leading-[4.97rem] flex items-center w-[15.94rem] h-[2.94rem] shrink-0">
                <span className="[line-break:anywhere] w-full">
                    <span>{`Current Bid Price: `}</span>
                    <span className="text-deeppink-200">2 ETH</span>
                </span>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="self-stretch h-[7.56rem] flex flex-col py-[0.63rem] px-[4.56rem] box-border items-start justify-center gap-[0.63rem] text-left text-[1.5rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
            <span className="[line-break:anywhere]">
            <span>{`Amount `}</span>
            <span className="text-red">*</span>
            </span>
        </h2>
        <input
            className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
            type="text"
            maxLength={100}
            minLength={1}
        />
        </div>
        <div className="w-[49.94rem] h-[7.56rem] flex flex-row py-[0.63rem] px-[1.88rem] box-border items-center justify-center">

    <button className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[26rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white">
    <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
            Bid
            </div>
            </button>
        </div>
    </div>
    );
};

export default NFTBidDetails;
