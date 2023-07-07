import { useState } from 'react';
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { useAccount } from "wagmi";
import { useEffect } from 'react';

const NFTForm = () => {
  const [provider, setProvider] = useState(null);
  const [ipfs, setIpfs] = useState(null);
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const ipfsClient = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

  const account = useAccount();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ethereum provider initialization
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(web3Provider);
      }

      // IPFS client initialization
      setIpfs(ipfsClient);
    }
  }, []);

    const uploadImageToIPFS = async (file) => {
    return new Promise((resolve, reject) => {
      ipfsClient.add(file, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0].hash);
        }
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!provider || !ipfs) {
      console.error('Ethereum provider or IPFS client is not available.');
      return;
    }

    // Upload image to IPFS
    const {cid} = uploadImageToIPFS(imageFile)
    const imageCID = cid.toString();

    // Convert the price to the required format (e.g., from Ether to Wei)
    const formattedPrice = ethers.utils.parseEther(price);

    // Connect to the smart contract
    const contractAddress = '0x9319c5C464aaFb2767447FA4850E00bcFa9bF6AB'; // Replace with your actual contract address
    const contractABI = abi; // Replace with your actual contract ABI
    const contract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());

    // Call the createNFT function on the smart contract
    try {
      if (localStorage.getItem('user').walletAddress === account) {
        const tx = await contract.createNFT(name,description, imageCID, formattedPrice, symbol);
        await tx.wait();
      } else {
        console.error('Wallet address does not match.');
        alert('Wallet address does not match.');
        return;
      }

      // NFT creation successful
      console.log('NFT created successfully!');
    } catch (error) {
      // Handle error
      console.error('Error creating NFT:', error);
    }
  };

  return (
    <div className="self-stretch h-[41.94rem] flex flex-col py-[0.63rem] px-[4.81rem] box-border items-center justify-start gap-[0.63rem] text-left text-[1.5rem] text-white font-ttoctosquares-regular">
      <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>{`Name `}</span>
            <span className="text-red">*</span>
          </span>
        </h2>
        <input
          className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="self-stretch relative text-[1.25rem] leading-[4.97rem] flex items-center h-[2.19rem] shrink-0">
          Symbol of your NFT.
        </div>
      </div>
      <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>Symbol</span>
            <span className="text-red"> *</span>
          </span>
        </h2>
        <input
          className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <div className="self-stretch relative text-[1.25rem] leading-[4.97rem] flex items-center h-[2.19rem] shrink-0">
          Symbol of your NFT.
        </div>
      </div>
      <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>Price</span>
            <span className="text-red"> *</span>
          </span>
        </h2>
        <input
          className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="self-stretch relative text-[1.25rem] leading-[4.97rem] flex items-center h-[2.19rem] shrink-0">
          Price of your NFT in ETH.
        </div>
      </div>
      <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-center gap-[0.63rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>Description</span>
            <span className="text-red">*</span>
          </span>
        </h2>
        <input
          className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
          type="text"
          value={description}
        />
      <div className="self-stretch relative text-[1.25rem] leading-[4.97rem] flex items-center h-[2.19rem] shrink-0">
        Description of your NFT.
      </div>
      </div>
      <div className="self-stretch h-[7.56rem] flex flex-row p-[0.63rem] box-border items-center justify-center gap-[0.63rem]">
        <div className="relative leading-[4.97rem] flex items-center w-[13.25rem] shrink-0">
          <span className="[line-break:anywhere] w-full">
            <span>{`Image `}</span>
            <span className="text-red">*</span>
          </span>
        </div>
        <input
          className="flex flex-col p-[0.63rem] items-center justify-center border-[5px] border-solid border-white"
          type="file"
          required
          value={imageFile}
        />
      </div>
      <div className="w-[49.94rem] h-[7.56rem] flex flex-row py-[0.63rem] px-[1.88rem] box-border items-center justify-center">
        <button
          className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white"
          onClick={handleSubmit}
        >
          <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
            Submit
          </div>
        </button>
      </div>
    </div>
  );
};

export default NFTForm;
