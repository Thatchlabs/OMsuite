import ReactDOM from 'react-dom';
import React, { FC, ReactElement, ReactNode, useMemo} from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Gangs } from "./components/Containter/Gangs";
import { Personas } from "./components/Containter/Persona";
import { Item } from "./components/Containter/getItem";
import {Home, HomeButton} from "./components/Containter/Home";
import { Routes,Route } from "react-router-dom";
import Coming from'./components/Containter/ComingSoon';
import { Avatars } from "./components/Containter/getAvatar";

import  '@solana/wallet-adapter-react-ui/styles.css'
import * as web3 from "@solana/web3.js";
import { ConnectionProvider, ConnectionProviderProps, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider,WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { GlowWalletAdapter,
         PhantomWalletAdapter,
         SlopeWalletAdapter,
         SolflareWalletAdapter,
         } from '@solana/wallet-adapter-wallets';  

// APP
function App() { 
  //const routeResults = useRoutes(routes)
  return (
    <div>
      <Context>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="/avatars" Component={Avatars}/>
        <Route path="/gangs" Component={Gangs}/>
        <Route path="/persona" Component={Personas}/>
        <Route path="/items" Component={Item}/>
        <Route path='/nftninja' element = {<Coming/>}/>
      </Routes>
      </Context>
      <SideBar/>
      <HomeButton/>
      
            </div>

  );
}

/*<Routes>
                  <Route index element ={<Home/>}/>
                  <Route path="/avatars" Component={Avatars}/>
                  <Route path="/gangs" Component={Gangs}/>
                  <Route path="/persona" Component={Personas}/>
                  <Route path="/items" Component={Item}/>
                  <Route path='/nftninja' element = {<Coming/>}/>
                </Routes>
 */

export default App;


const Context:FC <{children:ReactNode}> = ({children}) =>{
    //const network
    //const endpoint 
     const endpoint = 'https://solana-devnet.g.alchemy.com/v2/veVJEevaVLd2oLqL6aAE3nSCCPPzBixg';
     const wallets= useMemo( ()=> [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),         
    ],[]);

    return(
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets = {wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    )

}


const Content:FC = ()=>{
  return(
    <div className='main'>
      <WalletMultiButton/>
    </div>
  )
}