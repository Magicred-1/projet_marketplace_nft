import Router from "next/router";
const MarketplaceNFTContainer = ({ nftID, nftName, nftPrice, nftImage }) => {
  return (
    <div className="rounded-mini bg-midnightblue box-border w-[17.75rem] flex flex-col px-[1.19rem] items-center justify-center gap-[0.63rem] text-left text-[1.25rem] text-white font-ttoctosquares-regular border-[5px] border-solid border-white">
      <img
        className="rounded-t-mini rounded-b-none w-[17.06rem] h-[13.63rem] object-cover z-[1]"
        alt={nftName}
        src={nftImage}
      />
      <div
        className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center z-[0]"
      >
        <div className="relative leading-[4.97rem] text-deeppink-200 flex items-center  justify-center w-[16.56rem] h-[2.69rem] shrink-0">
          {nftName}#{nftID}
        </div>
        <div className="self-stretch h-[3.56rem] flex flex-row items-center justify-center gap-[0.06rem] text-center">
          <div className="self-stretch w-[10.56rem] flex flex-row p-[0.63rem] box-border items-center justify-start">
            <div className="relative leading-[4.97rem] flex items-center justify-center w-[4.81rem] h-[2.94rem] shrink-0">
              {nftPrice} ETH
            </div>
          </div>
          <button className="cursor-pointer [border:none] 
          p-[0.63rem] bg-red-400 w-[5.25rem] 
          h-[2.31rem] flex flex-col box-border items-center justify-center
          py-2 px-4 hover:bg-red-600 transition-colors duration-300 ease-in-out
          rounded-full"
          onClick={
            () => {
              Router.push({
                pathname: '/buy/[id]',
                query: { id: nftID },
              })
            }
          }>
            <div className="relative text-[0.94rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-center">
              BUY
            </div>
          </button>
          <button className="cursor-pointer [border:none] 
          p-[0.63rem] bg-blue-400 rounded-full w-[5.25rem] 
          h-[2.31rem] flex flex-col box-border items-center justify-center
          py-2 px-4 hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          onClick={
            () => {
              Router.push({
                pathname: '/bid/[id]',
                query: { id: nftID },
              })
            }
          }>
            <div className="relative text-[0.94rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-center">
              BID
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceNFTContainer;
