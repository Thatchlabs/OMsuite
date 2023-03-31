import * as mpl from "@metaplex-foundation/mpl-token-metadata";
import * as mpl2 from "@metaplex/js/node_modules/@metaplex-foundation/mpl-token-metadata/dist/src/accounts/Metadata"
import * as web3 from "@solana/web3.js"
import * as anchor from "@project-serum/anchor"
import * as splToken  from "@solana/spl-token"
import * as Wallet from '@solana/wallet-adapter-base'
import React, { FC, ReactElement, ReactNode,useState,useEffect, useMemo} from 'react';



export function GetNormalNFTs(){
    console.log("ranGet request")
    return ["nft1","nft2","nft3","nft4"]
} 

export function GetGangNFTs(){

    return ["nft1","nft2","nft3","nft4"]
} 
export function GetPersonaNFTs(){
    return ["nft1","nft2","nft3","nft4"]
}

export function GetItems(){
    return ["nft1","nft2","nft3","nft4"]
}



