import HeaderComponent from "./header-component";
import TextFooter from "./text-footer";
import { useState, useEffect } from "react";

const ProfileDetails = () => {
    const [profile, setProfile] = useState({
        userID: "1234567890",
        username: "John Doe",
        password: "password",
        walletAddress: "0x1234567890",
        nftOwned: 0,
        created: "2021-10-01T00:00:00.000+00:00",
    });
    
    useEffect(() => {
        // Check if localStorage is available
        const localStorageAvailable = typeof localStorage !== "undefined";
    
        if (localStorageAvailable) {
            const storedProfile = JSON.parse(localStorage.getItem("user"));
            if (storedProfile) {
                setProfile((prevProfile) => ({ ...prevProfile, ...storedProfile }));
            }
        }
    }, []);

    return (
    <main className="self-stretch overflow-hidden flex flex-col items-center 
    justify-center text-center text-[4.38rem] text-white font-ttoctosquares-regular
    relative bg-white w-full h-[75.06rem] flex flex-col items-center justify-center">
        <HeaderComponent />
        <div className="self-stretch bg-midnightblue h-[66.63rem] overflow-hidden shrink-0 flex flex-col py-[2.25rem] px-[0.06rem] box-border items-center justify-start">
        <div className="self-stretch h-[13.81rem] flex flex-col p-[0.63rem] box-border items-center justify-center">
            <div className="self-stretch flex flex-col p-[0.63rem] items-center justify-center">
                <div className="relative leading-[4.97rem] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                    MY PROFILE
                </div>
            </div>
        </div>
        <div className="self-stretch h-[41.94rem] flex flex-col py-[0.63rem] px-[4.81rem] box-border items-center justify-start gap-[0.63rem] text-left text-[1.5rem]">
            <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                    User ID :
                    </span>
                </h2>
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    {profile.userID}
                </h2>
            </div>
            <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                    <span>
                    Username :
                    </span>
                    </span>

                </h2>
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                        {profile.username}
                    </span>
                </h2>
            </div>
            <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                    Wallet Address :
                    </span>
                </h2>
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    {profile.walletAddress.substring(0, 3) + "..." + profile.walletAddress.substring(profile.walletAddress.length - 3, profile.walletAddress.length)}
                </h2>
            </div>
            <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                    Password :
                    </span>
                </h2>
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0" type="password">
                    <span type="password" className="[line-break:anywhere]">
                    {/* We shorten the password using substring and makes a hidden with "***"" */}
                    {profile.password.substring(0, 3) + "..." + profile.password.substring(profile.password.length - 3, profile.password.length)}
                    </span>
                </h2>
            </div>
            <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                    NFTs Owned :
                    </span>
                </h2>
                <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                    <span className="[line-break:anywhere]">
                    {profile.nftOwned}
                    </span>
                </h2>
        </div>
        <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
            <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                <span className="[line-break:anywhere]">
                Date of creation :
                </span>
            </h2>
            <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
                {profile.created}
            </h2>
            </div>

        </div>
        </div>
        <TextFooter />
    </main>
    );
};

export default ProfileDetails;
