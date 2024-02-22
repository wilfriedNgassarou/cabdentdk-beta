'use client' ;

import { useEffect, useRef } from "react";

export default function Banner() {

  const section = useRef(null)
  
  useEffect(() => {
    const flickity = new Flickity(section.current, {
      cellAlign:'left',
      autoPlay: true,  
      contain: true,
    })
  }, [])


  return (
    <div id="banner" >
      <div id="banner-background">
        <section ref={section}>
          <article>
            <h2>
              La visite de contrôle chez le dentiste est essentielle pour 
              préserver sa santé bucco-dentaire
            </h2>
          </article>
          <article>
            <h2>
              Les ages clés pour une visite chez le dentiste : 
              <ul style={{display: 'flex', gap: 50}}>
                <li>3 ans</li>
                <li>6 ans</li>
                <li>9 ans</li>
                <li>12 ans</li>
                <li>15 ans</li>
              </ul>
            </h2>
          </article>
          <article>
            <h2>
              la visite de contrôle chez le dentiste est essentielle pour préserver sa santé bucco-dentaire
            </h2>
          </article>
          <article>
            <h2>
            la visite de contrôle chez le dentiste est essentielle pour préserver sa santé bucco-dentaire
            </h2>
          </article>
          <article>
            <h2>
            la visite de contrôle chez le dentiste est essentielle pour préserver sa santé bucco-dentaire
            </h2>
          </article>
        </section>
        <div className="banner-btn-container">
          <a className="btn" href="#appoitnment">
          <span>
          </span>
          <span>
            Prendre Rendez-Vous
          </span>
          </a>
        </div>
      </div>
    </div>
  )
}