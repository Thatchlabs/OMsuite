
import * as web3 from "@solana/web3.js";
import ReactDOM from 'react-dom';
import React, { FC, ReactElement, ReactNode, useMemo} from 'react';
import './App.css';
import SideBar from './components/SideBar';
import { Gangs } from "./components/Containter/Gangs";
import { Personas } from "./components/Containter/Persona";
import { Item } from "./components/Containter/getItem";
import Home from "./components/Containter/Home";
import { Routes,Route } from "react-router-dom";
import Coming from'./components/Containter/ComingSoon';
import { Avatars } from "./components/Containter/getAvatar";

// APP
function App() { 
  //const routeResults = useRoutes(routes)
  return (
    <div>
                <HomeBu/>
                <Routes>
                  <Route index element ={<Home/>}/>
                  <Route path="/avatars" Component={Avatars}/>
                  <Route path="/gangs" Component={Gangs}/>
                  <Route path="/persona" Component={Personas}/>
                  <Route path="/items" Component={Item}/>
                  <Route path='/nftninja' element = {<Coming/>}/>
                </Routes>
                <SideBar/>
      </div>
  );
}

export default App;

function HomeBu():ReactElement {

  return <div>
  <div className='homeLogo'>
              
              <a href='/OMsuite/#/' className='nav-link'>
              <svg id="Layer_1" 
                   data-name="Layer 1" 
                   xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 381.38 324.09">
                  <path className="logo-color-1"
                   fill ="currentColor"
                   d="M72.25,410l55.14-260.33H64.05L77.73,85.91H277.86l-13.47,63.76H204L148.86,410Z" 
                   transform="translate(-64.05 -85.91)"/>
                  <path className="logo-color-2"
                  fill ="currentColor"
                    d="M255,410,324,85.91h76.19L345,346.23H445.42L432.16,410Z" 
                   transform="translate(-64.05 -85.91)"/>
                   </svg>

                <span className="link-text">Thatch Labs</span>
              </a>
        </div>
        </div>
}