const NFTForm = () => {
  return (
    <div className="self-stretch h-[41.94rem] flex flex-col py-[0.63rem] px-[4.81rem] box-border items-center justify-start gap-[0.63rem] text-left text-[1.5rem] text-white font-ttoctosquares-regular">
      <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>{`Name `}</span>
            <span className="text-red">*</span>
          </span>
        </h2>
        <input
          className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
          type="text"
        />
        <div className="self-stretch relative text-[1.25rem] leading-[4.97rem] flex items-center h-[2.19rem] shrink-0">
          Symbol of your NFT.
        </div>
      </div>
      <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>Symbol</span>
            <span className="text-red"> *</span>
          </span>
        </h2>
        <input
          className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
          type="text"
        />
        <div className="self-stretch relative text-[1.25rem] leading-[4.97rem] flex items-center h-[2.19rem] shrink-0">
          Symbol of your NFT.
        </div>
      </div>
      <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-center gap-[0.63rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>{`Description `}</span>
            <span className="text-red">*</span>
          </span>
        </h2>
        <input
          className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
          type="text"
        />
      </div>
      <div className="self-stretch h-[7.56rem] flex flex-row p-[0.63rem] box-border items-center justify-center gap-[0.63rem]">
        <div className="relative leading-[4.97rem] flex items-center w-[13.25rem] shrink-0">
          <span className="[line-break:anywhere] w-full">
            <span>{`Image `}</span>
            <span className="text-red">*</span>
          </span>
        </div>
        <input
          className="flex flex-col p-[0.63rem] items-center justify-center border-[5px] border-solid border-white"
          type="file"
          required
        />
      </div>
      <div className="w-[49.94rem] h-[7.56rem] flex flex-row py-[0.63rem] px-[1.88rem] box-border items-center justify-center">
        <button className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white">
          <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
            Submit
          </div>
        </button>
      </div>
    </div>
  );
};

export default NFTForm;
