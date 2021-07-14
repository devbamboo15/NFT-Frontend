import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import factoryAbi from '../../contracts/nft-factory.abi.json';
import { NFT_FACTORY_ADDRESS } from '../../constants/contract-address';
import { produce } from '../../contracts/nft-factory';

const CreateNFT = () => {

    const [uri, setUri] = useState('');
  
    const deployContract = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const factory = new ethers.Contract(NFT_FACTORY_ADDRESS[4], factoryAbi, signer);
        await produce(NFT_FACTORY_ADDRESS[4], signer);

        factory.on("Produced", async (from, to) => {
            const nft = new ethers.Contract(to, abi, signer);
        });
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Create NFT Token</h3>
            <form onSubmit={deployContract}>
                <div>
                    <p>Uri</p>
                    <input type="text" value={uri} onChange={(evt) => setUri(evt.target.value)} />
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Create Token" />
                </div>
                
            </form>
        </div>
    );
}

export default CreateNFT;
