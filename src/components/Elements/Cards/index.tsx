import React, { Children, ReactElement, ReactNode } from 'react';
import { text } from 'stream/consumers';

function HeadingwithContent({children}:{children:ReactNode}):ReactElement{
    return <h1>{children}</h1>
  }


export function InfoCard(title:string, logo:ReactElement, mid:ReactElement, string:string) {
    
    return (
    <div className='card'>
        <a className='card-link' href ={string}>
        <div className='card-title'>{title}</div>
        <div className='card-head'>{logo}</div>
        <div className='card-center'>{mid}</div>
        </a>
    </div>
    );
  };
