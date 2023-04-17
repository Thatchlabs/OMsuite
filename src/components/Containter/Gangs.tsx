import React, { FC, ReactElement, ReactNode,useState,useEffect, useMemo} from 'react';
import * as mpl from "@metaplex-foundation/mpl-token-metadata";
import  '@solana/wallet-adapter-react-ui/styles.css'
import * as web3 from "@solana/web3.js";
import { ConnectButton, useWallet } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css'
import { ManageGang,NewGang} from '../Scripts/GangScripts';

function pageBody(string:string){
  if (string=="new"){
    return <NewGang/>
  }
  if (string=="manage"){
    return <div>Manage Gangs</div>
  }
  else{
    return<NewGang/>
  }
}

export function Gangs() {
    const [display,setDisplay] = useState("new")
    const publicKey  = useWallet();
    const wallet = String(publicKey) 
    const showaccounts:any = []
    const nfts: { publicKey: web3.PublicKey; mintAddy: string}[] = [];
    
    


    return (
    <div>
      <div className='login'>
      <ConnectButton/>
        </div>
   <div>
      <div className="container">

        <div className='container-tittle'>
            <h1>GANGS</h1>
        </div>

        <div>
          <nav className="container-selector">
            <ul className="container-selector-nav">
              <li className="container-selector-item" onClick={() => setDisplay("new")} > new </li>
              <li className="container-selector-item"onClick={() => setDisplay("manage")}>manage</li>
            </ul>
          </nav>
        </div>
      <div></div>

      <div>{pageBody(display)}</div>
      </div>
    </div>   
    </div>
    );
  };
