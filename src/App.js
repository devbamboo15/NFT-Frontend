import './App.css';
import { ethers } from "ethers";
import { useEffect } from 'react';
import { useWallet, UseWalletProvider } from 'use-wallet'
import Home from "./pages/home";

const App = () => {
  const wallet = useWallet()
  

  useEffect(() => {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // console.log({signer});
    
  });

  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

// export default App;
export default () => (
  <UseWalletProvider
    chainId={4}
    connectors={{
      // This is how connectors get configured
    }}
  >
    <App />
  </UseWalletProvider>
);
