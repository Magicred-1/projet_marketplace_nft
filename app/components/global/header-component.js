import { useEffect, useState } from "react";
import Router from "next/router";
import RestrictedPage from "../restrict/restrictedpage-component";
import { ethers } from "ethers";
import { ERC20Abi } from "../../abi/erc20.json";

const HeaderComponent = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const isConnected = localStorage.getItem("user") !== null;
        setIsConnected(isConnected);
    }, []);

const abi = ERC20Abi;

const [DDTBalance, setDDTBalance] = useState(0);

const getDDTBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Connect to the smart contract
    const contract = new ethers.Contract(
        "0xe195a2dD5b76ad462ad6b6801d92ddf2811B9245",
        abi,
        provider.getSigner()
    );

    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    const balance = await contract.balanceOf(accounts[0]);

    console.log("DDT Balance:", balance.toString());

    setDDTBalance(balance.toString());
};

useEffect(() => {
    getDDTBalance();
}, []);

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

            {
              /* If the user more than 5 numbers we subtring like 999...999 DDT */
              DDTBalance.length > 4 ? 
              DDTBalance.substring(0, 5) + "..." + DDTBalance.substring(DDTBalance.length - 5, DDTBalance.length) + " DDT" : 
              DDTBalance + " DDT"
            }
          </button>
          <button
            className="cursor-pointer py-1 px-2 bg-blue-500 font-ttoctosquares-regular rounded-xl text-white"
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
              window.location.href = "/marketplace";
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
              LOGIN
            </button>
            <button
              className="cursor-pointer py-1 px-2 bg-deeppink-100 rounded-xl box-border font-ttoctosquares-regular rounded-xl text-white"
              onClick={() => window.location.href = "/register"}
            >
              REGISTER
            </button>
          </nav>
        )}
      </header>
    </>
  );
};

export default HeaderComponent;