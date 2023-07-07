import { useMemo } from "react";

const WeirdApeContainer = ({ propZIndex, propZIndex1 }) => {
  const imageIconStyle = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  const infosStyle = useMemo(() => {
    return {
      zIndex: propZIndex1,
    };
  }, [propZIndex1]);

  return (
    <div className="rounded-mini bg-midnightblue box-border w-[17.75rem] h-[24.75rem] flex flex-col py-[0.63rem] px-[1.19rem] items-center justify-center gap-[0.63rem] text-left text-[1.25rem] text-white font-ttoctosquares-regular border-[5px] border-solid border-white">
      <img
        className="rounded-t-mini rounded-b-none w-[17.06rem] h-[13.63rem] object-cover z-[1]"
        alt=""
        src="/image@2x.png"
        style={imageIconStyle}
      />
      <div
        className="w-[16.31rem] h-[9.88rem] flex flex-col items-center justify-center z-[0]"
        style={infosStyle}
      >
        <div className="relative leading-[4.97rem] text-deeppink-200 flex items-center w-[16.56rem] h-[2.69rem] shrink-0">
          WeirdApe #8001
        </div>
        <div className="relative leading-[4.97rem] flex items-center w-[16.25rem] h-[2.81rem] shrink-0">
          Weird Ape Official Club
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
  );
};

export default WeirdApeContainer;
