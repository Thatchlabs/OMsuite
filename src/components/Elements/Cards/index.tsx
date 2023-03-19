import React, { ReactElement, ReactNode } from 'react';



export function InfoCard(title:string, logo:ReactElement, mid:ReactElement, string:string ) {

    return (
    <div className='card'>
        <a className='card-link' href ={string}>
        <div className='card-tittle'>{title}</div>
        <div className='card-head'>{logo}</div>
        <div className='card-center'>{mid}</div>
        </a>
    </div>
    );
  };