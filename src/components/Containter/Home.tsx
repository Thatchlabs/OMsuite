import { ReactElement } from 'react';
import { InfoCard } from '../Elements/Cards';
import { HATSVG,AVATARSVG,GANGSVG,logoBlackSVG } from '../Elements/Images';
import { ConnectButton } from '@suiet/wallet-kit';



export const Home = () => {
  
  
    return (
    <div>
      <div className='login'>
            <ConnectButton/>
        </div>
      <main>
        <h2>Welcome to the lab</h2>
        <a className='learn' href='https://thatch-labs.gitbook.io/intro/'>
        <p>Get started 😉...</p>
        </a>
      </main>
      <nav className='containerH'>
        <ul className='homeContainer'>
          <li className='homeItem'>{InfoCard("Get Items", logoBlackSVG,HATSVG,'/OMsuite/#/items','🕶')}</li>
          <li className='homeItem'>{InfoCard("New Gang", logoBlackSVG,GANGSVG,'/OMsuite/#/gangs','👨‍👦‍👦')}</li>
          <li className='homeItem'>{InfoCard("New Avatar", logoBlackSVG,AVATARSVG,'/OMsuite/#/avatars','😎')}</li>
        </ul>
      </nav>
    </div>
    );
  };
  

export function HomeButton():ReactElement {

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

  