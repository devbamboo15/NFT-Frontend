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

export async function getName(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.name();
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getTokenAuthor(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.authorOf(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getOwnerBalance(address, signer, ownerAddress) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.balanceOf(ownerAddress);
        return res.toString();
    } catch (e) {
        console.log(e);
        return "0";
    }
}

export async function getApproved(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.getApproved(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getCommission(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.getCommission(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function isApprovedForAll(address, signer, ownerAddress, operatorAddress) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.isApprovedForAll(ownerAddress, operatorAddress);
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function getTokenOwner(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.ownerOf(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return "";
    }
}

export async function supportsInterface(address, signer, interfaceId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.supportsInterface(interfaceId);
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function getSymbol(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.symbol();
        return res;
    } catch (e) {
        console.log(e);
        return "";
    }
}

export async function getTokenByIndex(address, signer, index) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokenByIndex(index);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getTokenOfOwnerByIndex(address, signer, owner, index) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokenOfOwnerByIndex(owner, index);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getTokenUri(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokenURI(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getTokensByAuthor(address, signer, author) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokensByAuthor(author);
        return res;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getTotalSupply(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.getTotalSupply();
        return res;
    } catch (e) {
        console.log(e);
        return [];
    }
}

