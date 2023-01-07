import { abi, networks } from './Cert.json'
import Web3 from 'web3'

const web3 = new Web3('http://localhost:8545')
export const mycontract = new web3.eth.Contract(abi, networks['5777'].address)
export const account = '0x3Ec9c4D6AA38aD7A0De43128C4714F40c850c3Cd'