import { useEffect } from "react";
import Head from "next/head";

const RegisterPage = () => {
    return (
    <>
        <Head>
            <title>Digital Delirium - Sign In</title>
        </Head>
    <main className="relative bg-white w-full h-[75.06rem] flex flex-col items-center justify-center">
        <main className="self-stretch overflow-hidden flex flex-col items-center justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular">
        <header className="self-stretch bg-gray-100 flex flex-row py-[0rem] pr-[0.06rem] pl-[2.13rem] items-center justify-center border-b-[1px] border-solid border-white">
            <img
            className="flex-1 max-w-full overflow-hidden max-h-full"
            alt=""
            src="/header-logo.svg"
            />
            <nav className="w-[16.25rem] flex flex-row py-[1.38rem] px-[3.13rem] box-border items-center justify-center">
            <button
                className="cursor-pointer py-[0rem] px-[0.63rem] bg-deeppink-100 rounded-xl box-border w-[14.25rem] h-[2.13rem] overflow-hidden shrink-0 flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
                data-animate-on-scroll
            >
                <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
                SIGN IN
                </div>
            </button>
            </nav>
        </header>
        <div className="self-stretch bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
            <div className="self-stretch h-[16.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
            <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                <div className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                CREATE A NEW ACCOUNT
                </div>
            </div>
            </div>
            <div className="self-stretch h-[41.94rem] flex flex-col py-[0.63rem] px-[4.81rem] box-border items-center justify-start gap-[0.63rem] text-left text-[1.5rem]">
            <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                <span className="[line-break:anywhere]">
                    <span>Username</span>
                    <span className="text-red"> *</span>
                </span>
                </h2>
                <input
                className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
                type="text"
                maxLength
                minLength
                />
            </div>
            <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                <span className="[line-break:anywhere]">
                    <span>Password</span>
                    <span className="text-red"> *</span>
                </span>
                </h2>
                <input
                className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
                type="text"
                maxLength
                minLength
                />
            </div>
            <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                <span className="[line-break:anywhere]">
                    <span>Wallet Address</span>
                    <span className="text-red"> *</span>
                </span>
                </h2>
                <input
                className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
                type="text"
                maxLength
                minLength
                />
            </div>
            <div className="w-[49.94rem] h-[18.69rem] flex flex-col py-[0.63rem] px-[1.88rem] box-border items-center justify-center gap-[0.63rem] text-center text-[1.25rem]">
                <button className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white">
                <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
                    Login
                </div>
                </button>
                <div className="self-stretch relative leading-[4.97rem] flex items-center justify-center h-[2.19rem] shrink-0">
                OR
                </div>
                <button className="cursor-pointer p-[0.63rem] bg-cornflowerblue rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white">
                <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
                    Register
                </div>
                </button>
                <div className="self-stretch relative leading-[4.97rem] flex items-center justify-center h-[2.19rem] shrink-0">
                If you don’t have an account yet
                </div>
            </div>
            </div>
        </div>
        <div className="self-stretch bg-midnightblue flex flex-col items-start justify-center text-left text-[1.25rem] border-[1px] border-solid border-white">
            <div className="w-[75.38rem] h-[3.56rem] flex flex-row py-[0rem] px-[1.81rem] box-border items-center justify-center">
            <div className="relative leading-[3.75rem] inline-block w-[59.44rem] shrink-0">
                Digital Delirium © 2023 ALL RIGHTS RESERVED
            </div>
            <button
                className="cursor-pointer py-[0rem] px-[0.63rem] bg-cornflowerblue rounded-xl box-border w-[14.25rem] h-[2.13rem] overflow-hidden shrink-0 flex flex-row items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] border-[1px] border-solid border-white"
                data-animate-on-scroll
            >
                <div className="relative text-[1.25rem] leading-[3.75rem] font-ttoctosquares-regular text-white text-left">
                GITHUB REPO
                </div>
            </button>
            </div>
        </div>
        </main>
    </main>
    </>
);
};

export default RegisterPage;