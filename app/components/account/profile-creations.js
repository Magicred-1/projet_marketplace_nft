import ethers from "ethers";
import { useEffect, useState } from "react";
import { abi } from "../../abi/abi.json";
import Router from "next/router";

const ProfileCreation = () => {
    const [creations, setCreations] = useState([]);
    const contractAbi = abi;
    const contractAddress = "0x2F3241ccc7955276c11DcD7FF50810c3c204F77A";

    const getCreations = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Connect to the smart contract
            const contract = new ethers.Contract(contractAddress, contractAbi, provider.getSigner());

            const creations = await contract.getCreations(accounts[0]);

            console.log("Creations:", creations);

            setCreations(creations);
        }
        catch (error) {
            console.error("Error fetching creations:", error);
        }
    };

    useEffect(() => {
        getCreations();
    }, []);

    return (
        <div className="relative text-[1.78rem] text-shadow:0px_4px_4px_rgba(0,0,0,0.25) h-[3.81rem] self-stretch flex flex-col p-[0.63rem] box-border items-center justify-center">
            CREATIONS :
            {creations.length > 0 ? (
                creations.map((creation, index) => (
                <div key={index} className="relative text-[1.78rem] text-shadow:0px_4px_4px_rgba(0,0,0,0.25) h-[3.81rem] self-stretch flex flex-col p-[0.63rem] box-border items-center justify-center">
                    {/* Render creation content here */}
                </div>
                ))
            ) : (
                <div className="relative text-[1.78rem] text-shadow:0px_4px_4px_rgba(0,0,0,0.25) h-[3.81rem] self-stretch flex flex-col p-[0.63rem] box-border items-center justify-center">
                No creations found
                <button
                onClick={
                    () => {
                        Router.push("/create");
                    }
                }>Want to create one?</button>
                </div>
            )}
            </div>
        );
};


export default ProfileCreation;