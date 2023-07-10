import { ConnectButton } from "@rainbow-me/rainbowkit";
import HeaderComponent from "../global/header-component";
import { useAccount } from "wagmi";
import { useState } from 'react';
import Router from 'next/router';
import TextFooter from "../global/text-footer";


const RegisterForm = () => {
    const { address } = useAccount();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    
    const handleRegister = () => {
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                walletAddress: address,
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.status === 400) {
                setError(res.message);
                return;
            }
            return res;
        })
        .then((data) => {
            localStorage.setItem('user', JSON.stringify({
                userID: data.insertedMember.insertedId,
                username: data.insertedMember.username,
                password: data.insertedMember.encryptPassword,
                walletAddress: data.insertedMember.walletAddress,
                created: data.insertedMember.created,
            }));
            Router.push('/marketplace');
        })
        .catch((error) => {
            console.log(error);
            setError('Error occurred during registration.');
        });
    };

    return (
        <>
        <main className="relative bg-white w-full flex flex-col items-center 
        justify-center self-stretch overflow-hidden flex flex-col 
        items-center justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular">
            <HeaderComponent />
            <div className="self-stretch bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
                <div className="self-stretch h-[16.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                    <div className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    CREATE A NEW ACCOUNT
                    </div>
                </div>
                <div style={
                    {
                        color: "red",
                    }
                } id="error" className="self-stretch relative leading-[4.97rem] flex items-center justify-center h-[2.19rem] shrink-0">
                    {error}
                </div>
                </div>
                <div className="self-stretch h-[41.94rem] flex flex-col py-[0.63rem] px-[4.81rem] box-border items-center justify-start gap-[0.63rem] text-left text-[1.5rem]">
                <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                    <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                        <span>Username</span>
                        <span style={{ color: "red" }}> *</span>
                    </span>
                    </h2>
                    <input
                    className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
                    type="text"
                    maxLength={30}
                    minLength={3}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    placeholder="Username"
                    />
                </div>
                <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                    <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                        <span>Password</span>
                        <span style={{ color: "red" }}> *</span>
                    </span>
                    </h2>
                    <input
                    className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
                    type="password"
                    maxLength
                    minLength
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    placeholder="Password"
                    />
                </div>
                <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                    <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                        <span>Connect your Wallet</span>
                        <span style={{ 
                            color: "red" 
                        }}> *</span>
                    </span>
                    </h2>
                    <ConnectButton 
                    showBalance={true}
                    label="Please connect your Wallet" 
                    accountStatus={"full"}
                    />
                </div>
                <div className="w-[49.94rem] h-[18.69rem] flex flex-col py-[0.63rem] px-[1.88rem] box-border items-center justify-center gap-[0.63rem] text-center text-[1.25rem]">
                {/* make this button clickable by pressing enter */}
                <button
                className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white"
                onClick={() => {
                    handleRegister();
                }}
                >
                <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
                    Register
                </div>
                </button>
                <div className="self-stretch relative leading-[4.97rem] flex items-center justify-center h-[2.19rem] shrink-0">
                    OR
                </div>
                <button className="cursor-pointer p-[0.63rem] bg-cornflowerblue rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white">
                    <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left"
                        onClick={() => {
                            Router.push("/login");
                        }
                    }
                    >
                    Login
                    </div>
                </button>
                <div className="self-stretch relative leading-[4.97rem] flex items-center justify-center h-[2.19rem] shrink-0">
                    If you already have an account
                </div>
                </div>
            </div>
            </div>
            <TextFooter />
        </main>
        </>
    );
}

export default RegisterForm;