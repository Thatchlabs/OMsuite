import { useWallet, ConnectButton} from '@suiet/wallet-kit';
import{TransactionBlock} from '@mysten/sui.js'

export const Create = () => {
    const wallet = useWallet();
    
    async function handleSignAndExecuteTxBlock() {
      if (!wallet.connected) return
  
      // define a programmable transaction
      const tx = new TransactionBlock();
      const packageObjectId = "0xXXX";
      tx.moveCall({
        target: `${packageObjectId}::nft::mint`,
        arguments: [tx.pure("Example NFT")],
      });
  
      try {
        // execute the programmable transaction
        const resData = await wallet.signAndExecuteTransactionBlock({
          transactionBlock: tx
        });
        console.log('nft minted successfully!', resData);
        alert('Congrats! your nft is minted!')
      } catch (e) {
        console.error('nft mint failed', e);
      }
    }
    return (<main>
      <ConnectButton/>
      <div className='Container'> 
      <button onClick={handleSignAndExecuteTxBlock}> Mint Your NFT !</button>
 
       </div>    
     </main>
    );
  };
  

  /**/