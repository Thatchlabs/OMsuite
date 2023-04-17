import React, { Children, ReactElement, ReactNode } from 'react';
import { text } from 'stream/consumers';

function HeadingwithContent({children}:{children:ReactNode}):ReactElement{
    return <h1>{children}</h1>
  }


export function InfoCard(title:string, logo:ReactElement, mid:ReactElement, string:string,emoji:string) {
    
    return (
      <a href ={string}>
        <div className='card' >
        <div className='card-link' >
        <div className='card-title'>{title}</div>
        <div className='card-head'>{logo}</div>
        <div className='card-center'>{mid}</div>
        <div className='card-emoji'>{emoji}</div>
        </div>
    </div>
    </a>
    );
  };
