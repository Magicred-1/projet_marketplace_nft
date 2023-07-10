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
      <header className="self-stretch bg-gray-100 flex flex-row py-0 pr-1 sm:pr-6 pl-2 sm:pl-8 items-center justify-between border-b-1 border-solid bg-black border-white">
        <div className="flex justify-between items-center max-w-6xl">
          <img
            className="w-28 sm:w-36 h-auto object-contain cursor-pointer"
            src="/images/digital_delirium_logo.png"
            alt="Digital Delirium Logo"
            onClick={() => window.location.href = "/"}
          />
        </div>
        {isConnected ? (
        <nav className="w-64 sm:w-80 flex flex-row py-2 px-2 sm:px-4 box-border items-center justify-between">
          <button
            className="cursor-pointer py-1 px-2 bg-deeppink-100 font-ttoctosquares-regular rounded-xl text-white"
            onClick={() => Router.push("/profile")}
          >
            PROFILE
          </button>
          <button
            className="cursor-pointer py-1 px-2 bg-orange-100 font-ttoctosquares-regular rounded-xl text-white"
            onClick={() => {
              Router.push("/create");
            }}
          >
            CREATE
          </button>
          <button
            className="cursor-pointer py-1 px-2 bg-red-500 font-ttoctosquares-regular rounded-xl text-white"
            onClick={() => {
              localStorage.removeItem("user");
              Router.push("/marketplace");
            }}
          >
            SIGN OUT
          </button>
        </nav>
        ) : (
          <nav className="w-36 sm:w-64 flex flex-row py-2 px-2 sm:px-4 box-border items-center justify-center">
            <button
              className="cursor-pointer py-1 px-2 bg-deeppink-100 rounded-xl box-border font-ttoctosquares-regular rounded-xl text-white"
              onClick={() => window.location.href = "/login"}
            >
              SIGN IN
            </button>
            <button
              className="cursor-pointer py-1 px-2 bg-deeppink-100 rounded-xl box-border font-ttoctosquares-regular rounded-xl text-white"
              onClick={() => window.location.href = "/register"}
            >
              SIGN UP
            </button>
          </nav>
        )}
      </header>
    </>
  );
};

export default HeaderComponent;
