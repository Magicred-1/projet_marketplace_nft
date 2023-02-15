import Web3 from 'web3';

const web3 = new Web3('https://eth-mainnet.g.alchemy.com/v2/qCyeO5N2cSr65JFnkZB1ga0AY3zHk_fg');

export const connect = async () => {
  try {
    await window.ethereum.enable();
  } catch (error) {
    console.error(error);
  }
};

export default web3;
