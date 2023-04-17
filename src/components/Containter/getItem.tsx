
import {  useState} from 'react';import  '@solana/wallet-adapter-react-ui/styles.css'
import { ConnectButton } from '@suiet/wallet-kit';


function pageBody(string:string){
        if (string=="create"){
          return <div>Create Items</div>
        }
        if (string=="manage"){
          return <div>MyItems</div>
        }
        else{
          return <div>Buy items</div>
        }
        }
         
export function Item() {
  const [display,setDisplay] = useState("buy")

    return (
      <div>
        <div className='login'>
        <ConnectButton/>
        </div>
      <div className="container">
        <div className='container-tittle'>
            <h1>Items</h1>
        </div>
        <div>
          <nav className="container-selector">
            <ul className="container-selector-nav">
              <li className="container-selector-item" onClick={() => setDisplay("create")}> Create Item </li>
              <li className="container-selector-item" onClick={() => setDisplay("buy")}> Store </li>
              <li className="container-selector-item" onClick={() => setDisplay("manage")}> My Items </li> 
            </ul>
          </nav>
        </div>
        <div>{pageBody(display)}</div>
      </div>
    </div>
    );
  };