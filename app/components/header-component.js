import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const HeaderComponent = () => {
    const [isConnected, setIsConnected] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const isConnected = localStorage.getItem("user") !== null;
        setIsConnected(isConnected);
    }, []);

    const walletAddress = isConnected
        ? JSON.parse(localStorage.getItem("user")).walletaddress
        : "";

    return (
        <header className="self-stretch bg-black flex flex-row py-0 pr-2 pl-12 items-center justify-between border-b-1 border-solid border-white">
            <div className="flex items-center">
                <img
                    className="w-54 h-58 object-contain cursor-pointer"
                    src="/images/digital_delirium_logo.png"
                    alt=""
                    onClick={() => (window.location.href = "/")}
                />
            </div>
            <nav className="w-40 flex flex-row py-4 px-8 items-center justify-end">
                {isConnected ? (
                    <>
                        <button className="cursor-pointer py-0 px-2 bg-deeppink-100 rounded-xl w-36 h-8 border-1 border-solid border-white">
                            <div
                                className="text-xs leading-10 font-ttoctosquares-regular text-white text-left"
                                onClick={() => (window.location.href = "/profile")}
                            >
                                {walletAddress.substring(0, 6) +
                                    "..." +
                                    walletAddress.substring(walletAddress.length - 4)}
                            </div>
                        </button>
                        <button>
                            <div
                                className="text-xs leading-10 font-ttoctosquares-regular text-white text-left"
                                onClick={() => {
                                    localStorage.removeItem("user");
                                    window.location.href = "/marketplace";
                                }}
                            >
                                SIGN OUT
                            </div>
                        </button>
                    </>
                ) : (
                    <button
                        className="cursor-pointer py-0 px-2 bg-deeppink-100 rounded-xl w-[14.25rem] h-[2.13rem] overflow-hidden flex flex-row items-center justify-center animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
                        onClick={() => {
                            const newPath =
                                router.pathname === "/register" ? "/login" : "/register";
                            window.location.href = newPath;
                        }}
                    >
                        <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
                            {router.pathname === "/register" ? "SIGN IN" : "REGISTER"}
                        </div>
                    </button>
                )}
            </nav>
        </header>
    );
};

export default HeaderComponent;
