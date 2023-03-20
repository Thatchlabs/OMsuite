import React, { ReactElement, ReactNode } from 'react';
import { InfoCard } from '../Elements/Cards';
import { HATSVG,AVATARSVG,GANGSVG,logoBlackSVG } from '../Elements/Images';




const Home = () => {
    return (
    <div>
      <main>
      <h1>Welcome to the lab</h1>
      <p>Get started ...</p>
      </main>
      <nav className='containerH'>
      <ul className='homeContainer'>
        <li className='homeItem'>{InfoCard("New Avatar", logoBlackSVG,AVATARSVG,'/OMsuite/#/avatars')}</li>
        <li className='homeItem'>{InfoCard("New Gang", logoBlackSVG,GANGSVG,'/OMsuite/#/gangs')}</li>
        <li className='homeItem'>{InfoCard("Get Items", logoBlackSVG,HATSVG,'/OMsuite/#/items')}</li>

      </ul>
      </nav>
    </div>
    );
  };
  
  export default Home;