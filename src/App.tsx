import './App.css';
import SideBar from './components/SideBar';
import { Gangs } from "./components/Containter/Gangs";
import { Personas } from "./components/Containter/Persona";
import { Item } from "./components/Containter/getItem";
import {Home, HomeButton} from "./components/Containter/Home";
import { Routes,Route } from "react-router-dom";
import { Avatars } from "./components/Containter/getAvatar";
import { Create } from './components/Containter/Create';
import { WalletProvider } from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css'

// APP
 function App() { 
  //const routeResults = useRoutes(routes)
  return (
    <div>
      <WalletProvider>
        
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="/avatars" Component={Avatars}/>
        <Route path="/gangs" Component={Gangs}/>
        <Route path="/persona" Component={Personas}/>
        <Route path="/items" Component={Item}/>
        <Route path="/createnft" Component={Create}/>
        
      </Routes>
      </WalletProvider>
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

export default App