import React, { ReactElement, ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';
import {Home} from '../Containter/Home';


const SideBar = () => {
    return (
      <div>
        <nav className="navbar">
            <ul className="navbar-nav">
            
            <li className='logo' >
              
              <a href='/OMsuite/#/' className='nav-link'>
              <svg id="Layer_1" 
                   data-name="Layer 1" 
                   xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 381.38 324.09">
                  <path className="logo-color-1"
                   fill ="currentColor"
                   d="M72.25,410l55.14-260.33H64.05L77.73,85.91H277.86l-13.47,63.76H204L148.86,410Z" 
                   transform="translate(-64.05 -85.91)"/>
                  <path className="logo-color-1"
                  fill ="currentColor"
                    d="M255,410,324,85.91h76.19L345,346.23H445.42L432.16,410Z" 
                   transform="translate(-64.05 -85.91)"/>
                   </svg>

                <span className="link-text">Thatch Labs</span>
              </a>


            </li>

            <li className="nav-item">
                <a href='/OMsuite/#/avatars' className='nav-link'>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 512">
                     <path
                      fill ="currentColor"
                      className ="fa-primary"
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                      </svg>
                
                <span className='link-text'>Avatar</span>
                </a>
              </li>
              
              <li className="nav-item">
                <a href='/OMsuite/#/items' className='nav-link'>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 640 512">
                    <path 
                    fill ="currentColor"
                    className ="fa-primary"
                    d="M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"/></svg>
                
                <span className = "link-text">Items</span>
                </a>
              </li>

              <li className="nav-item">
                <a href='/OMsuite/#/persona' className='nav-link'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512">
                    <path
                    fill ="currentColor"
                    className ="fa-primary"
                    d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                </svg>
                <span className = "link-text">Persona</span>
                </a>
              </li>

              <li className="nav-item">
                <a href='/OMsuite/#/gangs' className='nav-link'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 640 512">
                    <path 
                    fill ="currentColor"
                    className ="fa-primary"
                    d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
                    ></path>
                    
                    </svg>
                <span className = "link-text">Gangs</span>
                </a>
              </li>

              <li className="nav-item">
                <a href='/OMsuite/#/nftninja' className='nav-link'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 640 512"> 
                    <path
                      fill ="currentColor"
                      className ="fa-primary"
                      d="M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1 .8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4C37.4 82.7 32.6 59.7 31.1 44.9c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zM0 482.3C0 399.5 56.4 330 132.8 309.9c6-1.6 12.2 .9 15.9 5.8l62.5 83.3c6.4 8.5 19.2 8.5 25.6 0l62.5-83.3c3.7-4.9 9.9-7.4 15.9-5.8C391.6 330 448 399.5 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H160z"/>
                      </svg>
                <span className = "link-text">NFT Ninja</span>
                </a>
              </li>


              

            </ul>
        </nav>            
    </div>
    );
  };
  
  export default SideBar;