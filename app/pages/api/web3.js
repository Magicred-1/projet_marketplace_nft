import Web3 from 'web3';
require('dotenv').config();

const Web3 = require('web3');
const provider = new Web3(new Web3.providers.HttpProvider(process.env.API_KEY_ALCHEMY));


export const connect = async () => {
  try {
    await window.ethereum.enable();
  } catch (error) {
    console.error(error);
  }
};

export default provider;
