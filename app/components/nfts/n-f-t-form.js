import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { create } from 'ipfs-http-client';
import { config } from 'dotenv';
import { abi } from "../../abi/abi.json";

config();

const NFTForm = () => {
  const [provider, setProvider] = useState(null);
  const [ipfs, setIpfs] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [listedNFT, setListedNFT] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const contractAddress = "0x6d37ECf468c94E98D277207Df4da662721cdEF61";
  const contractABI = abi;
  // const INFURA_SECRET = String(process.env.INFURA_SECRET);
  // const INFURA_PROJECT_ID = String(process.env.INFURA_PROJECT_ID);

  useEffect(() => {
    const initialize = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(web3Provider);
        } catch (error) {
          console.error('Error connecting to the Ethereum provider:', error);
          setError('Error while connecting to the Ethereum provider.');
        }
      }
    };

    initialize();

    // IPFS client initialization
    const auth = 'Basic ' + Buffer.from("2SLd0jmCIYe920D2fpxoGPRlZDC" + ':' + "7564e78b528e9c028830f8ca8cd3b1b4").toString('base64');
    const ipfsClient = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
        authorization: auth,
      }
    });
    setIpfs(ipfsClient);
  }, []);

  const uploadImageToIPFS = async (file) => {
    try {
      const { cid } = await ipfs.add(file);
      return cid.toString();
    } catch (error) {
      console.error('Error uploading image to IPFS:', error);
      setError('Error uploading image to IPFS.');
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setSuccess(null);
    setImagePreview(null);


    if (!provider || !ipfs) {
      setError('Ethereum provider or IPFS client is not available.\n');
      return;
    }

    if (localStorage.getItem('user') === null) {
      setError('Please sign in to create an NFT.\n');
      return;
    }

    if (name.length < 5) {
      setError('Name must be greater than 5 characters.\n');
      return;
    }

    if (description.length < 10) {
      setError('Description must be less than 10 characters.\n');
      return;
    }

    if (price < 1) {
      setError('Price must be greater than 1.\n');
      return;
    }

    if (price > 100) {
      setError('Price must be less than 100.\n');
      return;
    }

    if (price % 1 !== 0) {
      setError('Price must be rounded to the nearest integer.\n');
      return;
    }

    if (!name || !price || !imageFile) {
      setError('Please fill in all the required fields.\n');
      return;
    }

    try {
      // Check if the user is connected to the wallet
      const accounts = await provider.listAccounts();
      if (accounts.length === 0) {
        console.error('Please connect to the wallet.');
        setError('Please connect to the wallet.\n');
        return;
      }


      if (connectedWalletAddress !== localStorageWalletAddress) {
        setError('Please connect to the correct wallet.\n');
        return;
      }

      // Upload image to IPFS
      const imageCID = await uploadImageToIPFS(imageFile);

      // Convert the price to the required format (e.g., from Ether to Wei)
      const formattedPrice = price;

      // Connect to the smart contract
      const contract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());

      const connectedWalletAddress = accounts[0];
      const localStorageWalletAddress = JSON.parse(localStorage.getItem('user')).walletAddress;

      setSuccess('Waiting for the transaction confirmation...')

      const tx = await contract.createNFT(name, description, imageCID, formattedPrice, listedNFT);

      setSuccess('Creating NFT, please wait...');

      await tx.wait();

      setSuccess('NFT created successfully!');
      setImagePreview(`https://ipfs.io/ipfs/${imageCID}`);
    } catch (error) {
      console.error('Error while creating NFT:', error);
      setError('Error while creating NFT.');
    }
  };

  return (
      <div className="self-stretch h-[10.94rem] flex flex-col py-[0.63rem] px-[4.81rem] box-border items-center justify-start gap-[0.63rem] text-left text-[1.5rem] text-white font-ttoctosquares-regular">
      <span style={{ color: 'red' }}>
        {/* center img */}
        <div className="self-stretch
        flex flex-col
        center box-border items-center justify-center">
          {imagePreview && imageFile ? <img src={imagePreview} className='border border-solid border-white' alt="NFT preview" height={200} /> : null}
        </div>
        {error ? error : success}
      </span>
        <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
          <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>Name</span>
            <span style={{ color: 'red' }}>*</span>
          </span>
          </h2>
          <input
              className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <div className="self-stretch relative text-[1.25rem] leading-[4.97rem] flex items-center h-[2.19rem] shrink-0">
            Name of your NFT.
          </div>
        </div>
        <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-center gap-[0.63rem]">
          <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>Description</span>
            <span style={{ color: 'red' }}>*</span>
          </span>
          </h2>
          <input
              className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          />
          <div className="self-stretch relative text-[1.25rem] leading-[4.97rem] flex items-center h-[2.19rem] shrink-0">
            Description of your NFT.
          </div>
        </div>
        <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
          <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>Price</span>
            <span style={{ color: 'red' }}>*</span>
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
        <div className="self-stretch h-[7.56rem] flex flex-col p-[0.63rem] box-border items-start justify-start gap-[0.63rem]">
        <h2 className="m-0 self-stretch relative text-[inherit] leading-[4.97rem] font-normal font-inherit flex items-center h-[2.13rem] shrink-0">
          <span className="[line-break:anywhere]">
            <span>List your NFT for Sale ?</span>
            <span style={{ color: 'red' }}>*</span>
          </span>
        </h2>
        <select
          className="bg-lightcoral self-stretch relative box-border h-[2rem] border-[5px] border-solid border-white"
          value={listedNFT}
          onChange={(e) => setListedNFT(e.target.value)}
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
        <div className="self-stretch h-[7.56rem] flex flex-row p-[0.63rem] box-border items-center justify-center gap-[0.63rem]">
          <div className="relative leading-[4.97rem] flex items-center w-[13.25rem] shrink-0">
      </div>
      <div className="self-stretch h-[7.56rem] flex flex-row p-[0.63rem] box-border items-center justify-center gap-[0.63rem]">
        <div className="relative leading-[4.97rem] flex items-center w-[13.25rem] shrink-0">
          <span className="[line-break:anywhere] w-full">
            <span>Image</span>
            <span style={{ color: 'red' }}>*</span>
          </span>
          </div>
          <input
              className="flex flex-col p-[0.63rem] items-center justify-center border-[5px] border-solid border-white"
              type="file"
              required
              onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        <div className="w-[49.94rem] h-[7.56rem] flex flex-row py-[0.63rem] px-[1.88rem] box-border items-center justify-center">
          <button
              className="cursor-pointer p-[0.63rem] bg-deeppink-200 rounded-xl box-border w-[18.94rem] h-[2.75rem] flex flex-col items-center justify-center border-[1px] border-solid border-white"
              onClick={handleSubmit}
          >
            <div className="relative text-[1.5rem] leading-[4.97rem] font-ttoctosquares-regular text-white text-left">
              Build
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTForm;