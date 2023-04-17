import  '@solana/wallet-adapter-react-ui/styles.css'
import * as web3 from "@solana/web3.js";
import { ConnectButton } from '@suiet/wallet-kit';

export function Avatars() {
    return (
    <div>
      <div className='login'>
              <ConnectButton/>
        </div>
     <div>
      <div className="container">
        <div className='container-tittle'>
            <h1>Avatar</h1>
        </div>
        <div>
          <nav className="container-selector">
            <ul className="container-selector-nav">
            </ul>
          </nav>

        </div>
      </div>
    </div>    
    </div>
    );
  };