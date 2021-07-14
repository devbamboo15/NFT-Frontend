import { useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../../contracts/nft-factory.abi.json';
import { NFT_FACTORY_ADDRESS } from '../../constants/contract-address';
import { useWallet } from 'use-wallet';
import { getOwner } from '../../contracts/nft-contract';
import { produce } from '../../contracts/nft-factory';

import DeployNFTContract from '../../components/deploy-contract';
import CreateNFT from '../../components/create-token';
import GetCommission from '../../components/get-commission';

const Home = () => {

  const wallet = useWallet()
  
  const connectWallet = () => {
    
    if (wallet.status !== 'connected') {
        console.log('Connecting Wallet');
        wallet.connect();
    } else {
        console.log('Wallet is already connected');
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Non Fungible Contract</h2>
      <button onClick={connectWallet}>Connect Wallet</button>
      <DeployNFTContract></DeployNFTContract>
      <CreateNFT></CreateNFT>
      <GetCommission></GetCommission>
    </div>
  );
}

export default Home;
