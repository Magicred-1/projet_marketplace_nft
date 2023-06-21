import WeirdApeContainer from "./weird-ape-container";
// TODO: Should be a list of NTFs instead of 3 hardcoded ones

const NTFsContainer = () => {
  return (
    <div className="self-stretch flex-1 flex flex-row p-[0.63rem] items-center justify-between text-left text-[1.25rem] text-white font-ttoctosquares-regular">
      <WeirdApeContainer  />
      <WeirdApeContainer />
      <WeirdApeContainer />
    </div>
  );
};

export default NTFsContainer;
