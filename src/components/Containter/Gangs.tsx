import React, { FC, ReactElement, ReactNode,useState,useEffect, useMemo} from 'react';
import * as mpl from "@metaplex-foundation/mpl-token-metadata";
import  '@solana/wallet-adapter-react-ui/styles.css'
import * as web3 from "@solana/web3.js";
import { ConnectionProvider, ConnectionProviderProps, WalletProvider, useConnection,useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider,WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { GlowWalletAdapter,
         PhantomWalletAdapter,
         SlopeWalletAdapter,
         SolflareWalletAdapter,
         } from '@solana/wallet-adapter-wallets'; 
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { text } from 'stream/consumers';
import {useForm} from "react-hook-form"
import * as splToken  from "@solana/spl-token"
import { Gangschema, GangFormDATA} from '../Elements/Forms';
import { ManageGang,NewGang } from './GangScripts';
import { GetNormalNFTs } from '../../ChainScripts/GetNft';
import { Buffer } from 'buffer';
import { promise } from 'zod';
import { metadata } from '@metaplex/js/lib/utils';

export function Gangs() {
    const [display,setDisplay] = useState("newGang")


    return (
    <div>
      <div className='login'>
            <WalletMultiButton/>
        </div>
   <div>
      <div className="container">

        <div className='container-tittle'>
            <h1>GANGS</h1>
        </div>

        <div>
          <nav className="container-selector">
            <ul className="container-selector-nav">
              <li className="container-selector-item"> new </li>
              <li className="container-selector-item">manage</li>
            </ul>
          </nav>
        </div>
      <div> {NFTs()}</div>

      <div>{NewGang()}</div>
      </div>
    </div>   
    </div>
    );
  };


  function Balance(){
    const [balance,setBalance] = useState(0);
    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {
      if (!connection || !publicKey) {
        return;
      }
        connection.getAccountInfo(publicKey).then((info) => {
          if(!info){
            return;
          }
          else setBalance(info.lamports);
      });
    }, [connection, publicKey]);
    
    return <div>
        <p>{publicKey ? `Balance: ${balance / LAMPORTS_PER_SOL} SOL` : ""}</p>
      </div>
  }

  function NFTs(){
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const wallet = String(publicKey) 
    const showaccounts:any = []
    const nfts:any = []

 

    async function getTokenAccounts(wallet: string, solanaConnection: web3.Connection) {

      const filters:web3.GetProgramAccountsFilter[] = [
        {
          dataSize: 165,    //size of account (bytes)
        },
        {
          memcmp: {
            offset: 32,     //location of our query in the account (bytes)
            bytes: wallet,  //our search criteria, a base58 encoded string
          }            
        }
    ];

    const accounts = await solanaConnection.getParsedProgramAccounts(
      splToken.TOKEN_PROGRAM_ID, //new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
      {filters: filters}
        );


      console.log(`Found ${accounts.length} token account(s) for wallet ${wallet}.`);
      accounts.forEach((account, i) => {
          //Parse the account data
          const parsedAccountInfo:any = account.account.data;
          const mintAddress:string = parsedAccountInfo["parsed"]["info"]["mint"];
          const tokenBalance: number = parsedAccountInfo["parsed"]["info"]["tokenAmount"]["uiAmount"];
          const supply:number= parsedAccountInfo["parsed"]["info"]["tokenAmount"]
        
          
          //Log results
          console.log(`Token Account No. ${i + 1}: ${account.pubkey.toString()}`);
          console.log(`--Token Mint: ${mintAddress}`);
          console.log(`--Posible Supply:${supply}`)
          
          console.log(`--Token Balance: ${tokenBalance}`); });
          
        
        showaccounts.push(accounts)}

    useEffect(() => {
      if (!connection || !publicKey) {
        return;
      }
      getTokenAccounts(wallet,connection)
      
    }, [connection, publicKey]);
    return<></>
  }


