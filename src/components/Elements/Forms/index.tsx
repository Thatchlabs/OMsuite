import { z } from "zod";
import * as web3 from "@solana/web3.js"
import { ZodType } from "zod/lib";


export const Gangschema:ZodType<GangFormDATA> =z.object({
    GangLeader: z.string(),
    GangName: z.string().min(2).max(15),
    NoOfMembers:z.number().max(1000).positive().int(),
    Ranked: z.string(),
    mintType:z.string()
})

export type GangFormDATA ={
    GangLeader:string,
    GangName: string,
    NoOfMembers: number,
    Ranked: string,
    mintType: string
}


export type GangDATA ={
    GangLeader:string,
    GangName: string,
    NoOfMembers: number,
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