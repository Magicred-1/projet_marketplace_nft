import Web3 from 'web3';
require('dotenv').config();


//modoficar la clé API en contante de .ENV para guardar en seguridad 

require('dotenv').config();
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.API_KEY_ALCHEMY));


export const connect = async () => {
  try {
    await window.ethereum.enable();
  } catch (error) {
    console.error(error);
  }
};

export default web3;
