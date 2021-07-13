import { useEffect } from 'react';
import { ethers } from 'ethers';
import abi from '../../contracts/nft-factory.abi.json';
import { NFT_FACTORY_ADDRESS } from '../../constants/contract-address';
import { getOwner } from '../../contracts/nft-contract';
import { produce } from '../../contracts/nft-factory';

const MintNFT = () => {

  
  const mintNFT = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const newNFTAddress = await produce();
    console.log({ newNFTAddress });
    const nft = new ethers.Contract(newNFTAddress, abi, signer);
    nft.initialize();
    console.log();
  }


  return (
      <div>
        <h2>Mint NFT</h2>     
        <form onSubmit={mintNFT}>
            <input />
            <input type="submit" value="Mint NFT" />
        </form>
      </div>
    
  );
}

export default MintNFT;
