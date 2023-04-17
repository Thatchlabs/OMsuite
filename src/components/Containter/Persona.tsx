import { ConnectButton } from '@suiet/wallet-kit';

import {useState } from 'react';

function pageBody(string:string){
  if (string=="new"){
    return <div>New Persona</div>
  }
  if (string=="manage"){
    return <div>Manage Persona</div>
  }
  else{
    return <div>New Persona</div>
  }
}
export function Personas() {
  const [display,setDisplay] = useState("new")
    return (
    <div>
      <div className='login'>
            <ConnectButton/>
        </div>
      <div className="container">
        <div className='container-tittle'>
            <h1>Persona</h1>
        </div>
        <div>
          <nav className="container-selector">
            <ul className="container-selector-nav">
              <li className="container-selector-item" onClick={() => setDisplay("new")}> new </li>
              <li className="container-selector-item" onClick={() => setDisplay("manage")}>manage</li>
            </ul>
          </nav>
        </div>
        <div>{pageBody(display)}</div>
      </div>
    </div>
    );
  };
  
  