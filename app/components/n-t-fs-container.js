import WeirdApeContainer from "./weird-ape-container";

const NTFsContainer = () => {
  return (
    <div className="self-stretch flex-1 flex flex-row p-[0.63rem] items-center justify-between text-left text-[1.25rem] text-white font-ttoctosquares-regular">
      <WeirdApeContainer />
      <div className="rounded-mini bg-midnightblue box-border w-[17.75rem] h-[24.75rem] flex flex-col py-[0.63rem] px-[1.19rem] items-center justify-center gap-[0.63rem] text-deeppink-200 border-[5px] border-solid border-white">
        <img
          className="rounded-t-mini rounded-b-none w-[17.06rem] h-[13.63rem] object-cover"
          alt=""
          src="/image1@2x.png"
        />
        <div className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center">
          <div className="relative leading-[4.97rem] flex items-center w-[16.56rem] h-[2.69rem] shrink-0">
            WeirdApe #8001
          </div>
          <div className="relative leading-[4.97rem] text-white flex items-center w-[16.25rem] h-[2.81rem] shrink-0">
            Weird Ape Official Club
          </div>
          <textarea
            className="[border:none] bg-[transparent] font-ttoctosquares-regular text-[1.25rem] self-stretch h-[3.56rem] flex flex-row items-center justify-center"
            placeholder="19 ETH"
            defaultValue="BUY"
          />
        </div>
      </div>
      <WeirdApeContainer propZIndex="unset" propZIndex1="unset" />
    </div>
  );
};

export default NTFsContainer;
