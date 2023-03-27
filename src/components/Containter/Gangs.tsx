import React, { FC, ReactElement, ReactNode,useState,useEffect, useMemo} from 'react';
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
import{zodResolver} from "@hookform/resolvers/zod"
import { Gangschema, CreateGang, GangFormDATA} from '../Elements/Forms';

export function Gangs() {
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
      <div>{Balance()}</div>

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


  function NewGang(){
    const{register,handleSubmit} = useForm<GangFormDATA>({resolver: zodResolver(Gangschema)});
    return(
      <div className='Form'>
        <div className='Form-title'><h3>Create a New Gang</h3></div>
        <div className='Form-inputs'>
          <form onSubmit={handleSubmit(CreateGang)}>
            <label>Gang Leader NFT </label>
            {//<input type="nft" placeholder='Select base nft...' {...register("GangLeader")}/>
            }
            <select placeholder='Select base nft...' {...register("GangLeader")}>
              <option value="ibebnwoneurhjr"> nf1</option>
              <option value="ibeertertere3rjr"> nf2</option>
              <option value="ibesdfgerterhjr"> nf3</option>
            </select>

            <label>Gang Name </label>
            <input type="text" placeholder='Gang name...' {...register("GangName")}/>

            <label>Members </label>
            <p className='label-info'>2-1000 members</p>
            <input type="number" placeholder='How Many Members...' {...register("NoOfMembers",{valueAsNumber: true})}/>

            <label>Ranking </label>
            <p className='label-info'>will the gang be ranked? </p>
            <select  {...register("Ranked", {valueAsNumber:false})}>
              <option value = "1"> Yes</option>
              <option value="0"> No</option>
            </select>
            <label>Mint type </label>
            <p className='label-info'>will the gang be ranked? </p>
            <select  {...register("mintType", {valueAsNumber:false})}>
              <option value = "CM(w)"> CandyMachine (whitelist)</option>
              <option value = "CM"> CandyMachine (noWhitelist)</option>
              <option value="SD">Self distribution</option>
            </select>
          <button> Create Gang</button>
          </form>
        </div>
      </div>
    )
  }
