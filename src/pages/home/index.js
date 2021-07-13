import { useEffect } from 'react';
import { ethers } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { useWallet } from 'use-wallet';
import { getOwner } from '../../contracts/nft-contract';

const Home = () => {

    const wallet = useWallet()
    

    useEffect(async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS[4], abi, signer);
        console.log({contract});
        const owner = await getOwner(NFT_CONTRACT_ADDRESS[4], signer);
        console.log({owner});
    });

  const connectWallet = () => {
    
    if (wallet.status !== 'connected') {
        console.log('Connecting Wallet');
        wallet.connect();
    } else {
        console.log('Wallet is already connected');
    }
  }


  return (
    <div>
        <h2>Non Fungible Contract</h2>
        <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default Home;
