import HeaderComponent from "../global/header-component";
import { useState } from "react";
import Router from 'next/router';
import TextFooter from "../global/text-footer";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: "login", // Added action "login" to specify login operation on the server-side
                username: username,
                password: password,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.foundMember) {
                // Login successful, save user data in localStorage and redirect to the marketplace
                localStorage.setItem("user", JSON.stringify({
                    userID: data.foundMember.insertedId,
                    username: data.foundMember.username,
                    walletAddress: data.foundMember.walletAddress,
                    created: data.foundMember.created,
                }));
                Router.push("/marketplace");
            } else {
                setError(data.message || "Login failed. Please check your credentials.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };
        
    return (
    <>
    <main className="relative bg-white w-full flex flex-col 
            items-left justify-start
            self-stretch overflow-hidden flex flex-col
            items-center text-center text-[4.38rem]
            text-white font-ttoctosquares-regular">
                <HeaderComponent />
                <div className="self-stretch bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
                <div className="self-stretch h-[16.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
                    <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                    <div className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                        LOGIN TO YOUR ACCOUNT
                    </div>
                    </div>
                </div>
                <div style={
                    {
                        color: "red",
                    }
                } id="error" className="self-stretch relative leading-[4.97rem] flex items-center justify-center h-[2.19rem] shrink-0">
                    {error}
                </div>
                <div className="self-stretch h-[41.94rem] flex flex-col py-[0.63rem] px-[4.81rem] box-border items-center justify-start gap-[0.63rem] text-left text-[1.5rem]">
                    <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                    <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                        <span className="[line-break:anywhere]">
                        <span>Username</span>
                        <span style={{color: "red"}}> *</span>
                        </span>
                    </h2>
                    <input
                        className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
                        type="text"
                        maxLength={30}
                        minLength={3}
                        id="username" 
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </div>
                    <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                    <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                        <span className="[line-break:anywhere]">
                        <span>Password</span>
                        <span style={{color: "red"}}> *</span>
                        </span>
                    </h2>
                    <input
                        className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
                        type="password"
                        maxLength={30}
                        minLength={3}
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <div className="w-[49.94rem] h-[18.69rem] flex flex-col py-[0.63rem] px-[1.88rem] box-border items-center justify-center gap-[0.63rem] text-center text-[1.25rem]">
                    <button className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white">
                        <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left"
                        onClick={() => handleLogin()}
                        >
                        Login
                        </div>
                    </button>
                    <div className="self-stretch relative leading-[4.97rem] flex items-center justify-center h-[2.19rem] shrink-0">
                        OR
                    </div>
                    <button className="cursor-pointer p-[0.63rem] bg-cornflowerblue rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white">
                        <div className="relative text-[1.5rem] leading-[4.97rem] 
                        font-ttoctosquares-regular text-white text-left"
                        onClick={() => {
                            Router.push("/register");
                        }
                        }>
                        Register
                        </div>
                    </button>
                    <div className="self-stretch relative leading-[4.97rem] flex items-center justify-center h-[2.19rem] shrink-0">
                        If you don’t have an account yet
                    </div>
                    </div>
                </div>
                </div>
                <TextFooter />
            </main>
        </>
        );
    };

export default LoginForm;
