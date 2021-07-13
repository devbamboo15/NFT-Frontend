import { ethers } from 'ethers';
import { abi } from './nft-contract.abi.json';

export async function getOwner(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.owner();
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}