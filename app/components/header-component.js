import { useEffect, useState } from "react";
import Router from "next/router";
import RestrictedPage from "./restrictedpage-component";

const HeaderComponent = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const isConnected = localStorage.getItem("user") !== null;
    setIsConnected(isConnected);
  }, []);

  const walletAddress = isConnected ? JSON.parse(localStorage.getItem("user")).walletAddress : "";

  return (
    <>
      <RestrictedPage />
      <header
        className="self-stretch bg-gray-100 flex flex-row py-[0rem] pr-[0.06rem] pl-[2.13rem] items-center justify-center border-b-[1px] border-solid bg-black border-white"
      >
      <div class="flex justify-between items-center max-w-6xl">
        <img
          class="w-54 h-58 object-contain cursor-pointer"
          src="/images/digital_delirium_logo.png"
          alt="Digital Delirium Logo"
          onClick={
            () => window.location.href = "/"
          }
        />
        </div>
        { isConnected ? (
        <nav
          className="w-[16.25rem] flex flex-row py-[1.38rem] px-[3.13rem] box-border items-center justify-center"
        >
              <button
              className="cursor-pointer py-[0rem] px-[0.63rem] 
              bg-deeppink-100 rounded-xl box-border 
              w-[14.25rem] h-[2.13rem] overflow-hidden 
              shrink-0 flex flex-row items-center 
              justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] 
              opacity-[0] border-[1px] border-solid border-white"
            >
                <div
                className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left"
              onClick={
                () => Router.push("/profile")
              }>
                {walletAddress.substring(0, 6) + "..." + walletAddress.substring(walletAddress.length - 4)} 
              </div>
            </button>
            <button
            >
                <div
                className="font-ttoctosquares-regular bg-red-500"
              onClick={
                () => {
                  localStorage.removeItem("user");
                  Router.push("/marketplace");
                }
              }>
                SIGN OUT
              </div>
            </button>
        </nav>
        ) : (
          <nav
          className="w-[16.25rem] flex flex-row py-[1.38rem] px-[3.13rem] box-border items-center justify-center"
        >
          <button
            className="cursor-pointer py-[0rem] px-[0.63rem] bg-deeppink-100 rounded-xl box-border w-[14.25rem] h-[2.13rem] overflow-hidden shrink-0 flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
            data-animate-on-scroll
          >
            <div
              className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left"
            onClick={
              () => window.location.href = "/login"
            }>
              SIGN IN
            </div>
          </button>
        </nav>
        )}
      </header>
    </>
  );
};

export default HeaderComponent;
