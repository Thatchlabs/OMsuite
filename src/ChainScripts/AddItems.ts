import * as mpl from "@metaplex-foundation/mpl-token-metadata";
import * as web3 from "@solana/web3.js"
import * as anchor from "@project-serum/anchor"
import * as splToken  from "@solana/spl-token"

export function loadWaletKey(keypairFile:string): web3.Keypair{
    const fs = require("fs");
    const loaded = web3.Keypair.fromSecretKey(
        new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString())),
    );
    return loaded;
}
//export var NumberOfItems: number

export async function AddItem(
    TokenAddy:string,  
    NumberOf: number
     ) {
    const item = new web3.PublicKey(TokenAddy);
    const connection = new web3.Connection("https://solana-devnet.g.alchemy.com/v2/veVJEevaVLd2oLqL6aAE3nSCCPPzBixg");
    console.log('Load wallet');
    const myKeypair =loadWaletKey("wallet.json");//wallet

    console.log("Create Associated Token Account")
    let itemAccount = await splToken.getOrCreateAssociatedTokenAccount(
        connection,
        myKeypair,
        item,
        myKeypair.publicKey,
        false,
        undefined,
        undefined,
        splToken.TOKEN_PROGRAM_ID,
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID);

        console.log("Associated Token Account:" + itemAccount.address)
    
        // Mint Supply of N
        let N = NumberOf
        splToken.mintTo(
            connection,
            myKeypair, //Payer
            item,
            itemAccount.address, //destination
            myKeypair,//Authority
            N,// Number items
            undefined,
            undefined,
            splToken.TOKEN_PROGRAM_ID
        );
     return console.log("minted")
}

AddItem("6Bine95MoAFS4jvCdYQUXtUhyREerMzRvh4ekLEru8BU",19);