import * as mpl from "@metaplex-foundation/mpl-token-metadata";
import * as web3 from "@solana/web3.js"
import * as anchor from "@project-serum/anchor"
import * as splToken  from "@solana/spl-token"
import * as Wallet from '@solana/wallet-adapter-base'

export function loadWaletKey(keypairFile:string): web3.Keypair{
    const fs = require("fs");
    const loaded = web3.Keypair.fromSecretKey(
        new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString())),
    );
    return loaded;
}

function NewKeyPair(){
    let newKeyPair = web3.Keypair.generate();
    return newKeyPair;
}



export async function CreateItem() {
    //Load Wallet
    const connection = new web3.Connection("https://solana-devnet.g.alchemy.com/v2/veVJEevaVLd2oLqL6aAE3nSCCPPzBixg");
    console.log('Load wallet');
    const myKeypair =loadWaletKey("wallet.json");//wallet
    async function Accbalance(){
        let balance = await connection.getBalance(myKeypair.publicKey)
        return balance
    }
    let begin = Accbalance(); 
    console.log('solana public address: ' + myKeypair.publicKey.toBase58()+ "with starting balance of " + begin);

    //create mint (NFT token )
    console.log("Create Token")
    let minted = await splToken.createMint(
        connection,
        myKeypair, 
        myKeypair.publicKey, 
        myKeypair.publicKey,
        0,
        NewKeyPair(),
        undefined, 
        splToken.TOKEN_PROGRAM_ID
        );
    console.log('mint address: ' + minted);
    
    //Create Associated Account
    console.log("Create Associated Token Account")
    let mintedAccount
    mintedAccount = await splToken.createAssociatedTokenAccount(
        connection,
        myKeypair,// Payer
        minted,
        myKeypair.publicKey,//Owner
        undefined,
        splToken.TOKEN_PROGRAM_ID,
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID
        );
    console.log("Associated Token Account:" + mintedAccount.toBase58())
    
    // Mint Supply of N
    let N = 20
    splToken.mintTo(
        connection,
        myKeypair, //Payer
        minted,
        mintedAccount,//destination
        myKeypair,//Authority
        N,// Number items
        undefined,
        undefined,
        splToken.TOKEN_PROGRAM_ID
    );
 
    let End = Accbalance();  
    console.log('solana public address: ' + myKeypair.publicKey.toBase58()+ "with final balance of " + End);

    // Add Metadata

    console.log('Add Metadata');
    
    const seed1 = Buffer.from(anchor.utils.bytes.utf8.encode("metadata"));
    const seed2 = Buffer.from(mpl.PROGRAM_ID.toBytes())
    const seed3 = Buffer.from(minted.toBytes())
    const creator1 = myKeypair.publicKey // Token Creator
    const edition = new web3.PublicKey("B3H9WLKghvWjSMxr4aLfHscJ6BwVStSjnnRMtx1Sqa9o")
    const [metadataPDA, _bumps] = web3.PublicKey.findProgramAddressSync([seed1,seed2,seed3], mpl.PROGRAM_ID);

    //Get Token Data
    console.log(myKeypair.publicKey + "Get Token Data ")
    const accounts = {
        metadata: metadataPDA,
        mint:minted,
        mintAuthority: myKeypair.publicKey,
        payer: myKeypair.publicKey,
        updateAuthority: myKeypair.publicKey,
    }
    const dataV2 = {
        name: "Test C1",
        symbol: "TC ASS",
        uri: "https://bafybeifwm2kbz47hy3rrh6wflwm5pfddxr74tpuvdvl5o3kkgpdzio3unu.ipfs.nftstorage.link/metadata.json",
        sellerFeeBasisPoints: 0,
        creators: [
            {
              "address": creator1,
              "verified": true,
              "share": 100
            }],
        collection:{
            verified: true, 
            key: edition
        },
        uses: null,

    }


    //process Transactions 
    console.log("process transactions");
    const args = {
        createMetadataAccountArgsV2: {
            data: dataV2,
            isMutable: true,
        }
    }
    const ix = mpl.createCreateMetadataAccountV2Instruction( accounts, args);
    const tx = new web3.Transaction();
    tx.add(ix);
    const txid = await web3.sendAndConfirmTransaction(connection, tx , [myKeypair] );
    console.log(txid);

    
}



CreateItem();