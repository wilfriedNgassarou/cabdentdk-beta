'use client' ;

import Link from 'next/link';
import { useRef } from 'react';


export default function Nav() {
  const nav = useRef(null)

  function toggleMenu(e) {
    let span = e.target.closest('span') ;
    span.classList.toggle('open') ;
  } 

  function handleClick(e) {
    if(!e.target.closest('a')) return ;

    const header = nav.current.closest('header') ;
    let span = header.querySelector('#menu-toggle') ;

    span.classList.contains('open') && span.classList.remove('open') ;
  }

  return (
    <div className="nav-container">
      <span
        onClick={toggleMenu} 
        id="menu-toggle"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
      </span>
      <nav ref={nav} onClick={handleClick}>
      
        <ul>
          <li>
            <Link href="/#">Accueil</Link>
          </li>
          <li>
            <Link href="/#about">A Propos</Link>
          </li>
          <li>
            <Link href="/#approach">Notre Approche</Link>
          </li>
        </ul>
        <Link className="btn" href="/#appoitnment">
          <span></span>
          <span>
            Prenez Rendez-Vous
          </span>
        </Link> 
      </nav>
    </div>
  )
}