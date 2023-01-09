import { abi, networks } from './Cert.json';
import { from } from './deployer.json';
import Web3 from 'web3';

export const web3 = new Web3('http://localhost:8545');
export const mycontract = new web3.eth.Contract(abi, networks['5777'].address);
export const account = from;