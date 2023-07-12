import Router from "next/router";

const TextFooter = () => {
  return (
    <div className="self-stretch bg-midnightblue flex flex-col items-start justify-center border-[1px] border-solid border-white">
      <div className="w-[75.38rem] h-[3.56rem] flex flex-row py-[0rem] px-[1.81rem] box-border items-center justify-between text-left text-[1.25rem] text-white font-ttoctosquares-regular">
        <div className="relative leading-[3.75rem] inline-block w-[59.44rem] shrink-0">
          Digital Delirium © 2023 ALL RIGHTS RESERVED
        </div>
        <button
          className="cursor-pointer py-[0rem] px-[0.63rem] bg-blue-400 rounded-xl box-border w-[14.25rem] h-[2.13rem] 
          flex flex-row items-center justify-center 
          border-[1px] border-solid border-white"
          onClick={() => Router.push("/marketplace")}
        >
          <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
            MARKETPLACE
          </div>
        </button>
        <button
          className="cursor-pointer py-[0rem] px-[0.63rem] bg-blue-400 rounded-xl box-border w-[14.25rem] h-[2.13rem] 
          flex flex-row items-center justify-center 
          border-[1px] border-solid border-white"
          onClick={() => Router.push("https://github.com/Magicred-1/projet_marketplace_nft/")}
        >
          <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
            GITHUB
          </div>
        </button>
      </div>
    </div>
  );
};

export default TextFooter;
