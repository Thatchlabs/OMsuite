import * as web3 from "@solana/web3.js"
import React, { FC, ReactElement, ReactNode,useState,useEffect, useMemo} from 'react';
import {useForm} from "react-hook-form"
import{zodResolver} from "@hookform/resolvers/zod"
import { Gangschema, GangFormDATA} from '../Elements/Forms';
import { GetNormalNFTs, GetGangNFTs } from "../../ChainScripts/GetNft";








export function NewGang(){
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
                {
                    
                }
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

export function ManageGang(){
    return(
        <div>
            <h1>Manage That shit</h1>
        </div>
    )
}











export function CreateGang(data:GangFormDATA){
    const ranked =parseInt(data.Ranked)
    const cost = 0.002+ (0.01*ranked) 
    const price = cost*(3*(data.NoOfMembers + 1))

    console.log("this would cost",price)

    const GangData={
        BaseNFT: data.GangLeader,
    }
}


