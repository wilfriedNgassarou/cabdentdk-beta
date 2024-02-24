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
              <p>
                3 ans, 6 ans, 9 ans, 12 ans, 15 ans
              </p>
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