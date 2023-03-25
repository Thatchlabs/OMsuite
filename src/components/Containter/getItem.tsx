import  '@solana/wallet-adapter-react-ui/styles.css'
import * as web3 from "@solana/web3.js";
import { ConnectionProvider, ConnectionProviderProps, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider,WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { GlowWalletAdapter,
         PhantomWalletAdapter,
         SlopeWalletAdapter,
         SolflareWalletAdapter,
         } from '@solana/wallet-adapter-wallets'; 
         
export function Item() {
    return (
      <div>
        <div className='login'>
            <WalletMultiButton/>
        </div>
      <div className="container">
        <div className='container-tittle'>
            <h1>Items</h1>
        </div>
        <div>
          <nav className="container-selector">
            <ul className="container-selector-nav">
              <li className="container-selector-item"> Create Item </li>
              <li className="container-selector-item"> Store </li>
              <li className="container-selector-item"> My Items </li>
            </ul>
          </nav>

        </div>
      </div>
    </div>
    );
  };