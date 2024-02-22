'use client'

import { useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";

export default function Service() {
  const service = useRef(null)
  const flktyRef = useRef(null) ;

  useEffect(() => {
    const flkty = new Flickity(flktyRef.current, {
      cellAlign: 'left',
      contain: true,
      pageDots: false 
    }) ;
  }, [])

  return (
    <section ref={ service } id="service"> 
      <h2>
        <span className="article-text-title">
          Nos prestations
        </span>
      </h2>
      <section ref={flktyRef} className="carousel">
      
        <ServiceCard imgUrl={'/prothese.webp'} index={0} title={"Prothèse Dentaire Fixe et Mobile"}>
            <p>
              Nous réalisons des reconstuctions complexes de vos dents abimées (couronne, ...), et remplaçons vos dents absentes
              (resines, valplast, stelite).
            </p>
        </ServiceCard>
        <ServiceCard imgUrl={'/parodontologie.jpg'} index={1} title={"Parodontologie"}>
            <p>
              Nous traitons les troubles du paradonte: saignement et inflammation des gencives, parodontite modéré à sévère, contention des dents mobiles.
            </p>
        </ServiceCard>
        <ServiceCard imgUrl={'/facette_esthetique.jpg'} index={2} title={"Facette Esthétique"}>
            <p>
              Nous améliorons l'apparence de votre sourire (facette composite, ceramique, blanchiment dentaire )
            </p>
        </ServiceCard>
        <ServiceCard imgUrl={'/chirurgie.webp'} index={3} title={"Petite Chirurgie Buccale & Dentaire"}>
            <p>
                Nous enlevons vos petites tumeurs bégnines telles que : les épulis gingivales, ostéome 
                les verrues buccales, ... Et la prise en charge des traumatismes bucco-dentaires et fractures 
                 maxillaires.
            </p>
        </ServiceCard>
        <ServiceCard imgUrl={'/mecanise.webp'} index={4} title={"Traitement Endodontique Mécanisé"}>
            <p>
              Traitement des canaux des dents très abimées par des techniques sophistiquées permettant de  conserver la dent sur l'arcade.
            </p>
        </ServiceCard>
        {/* <ServiceCard imgUrl={'/goutiere.webp'} index={5} title={"Gouttières"}>
            <p>
                Nous alignons votre denture par des goutières pour les sujets de plus de 12 ans
                et chez les enfants de moins de 12 ans, nous réalisons des appareils pour intercepter le 
                mauvais alignement des dents, ainsi que les appareils pour corriger des malformations 
                survenues lors de succion du pouce ou de la langue.
           </p>
        </ServiceCard> */}
        <ServiceCard index={6} title={"Orthodontie"}>
            <p>
                Correction des malpositions dentaires (brackets, bagues, aligneurs invisibles) afin d'obtenir un sourire harmonieux et une fonction masticatoire optimale.
            </p>
        </ServiceCard>
        <ServiceCard index={6} title={"Implantologie"}>
            <p>
              Racine artificielle en titane fixée dans l'os de la mâchoire et qui sert de support à une couronne, un bridge ou une prothèse dentaire mobile en cas d'absence d'une ou de plusieurs dents. 
            </p>
        </ServiceCard>
        <ServiceCard index={6} title={"Pédodontie"}>
            <p>
                Prise en charge des pathologies dentaires chez les enfants d'âge pédiatrique.
            </p>
        </ServiceCard>
      </section> 
      {/* <div className="service-nagivation">
        <div className="service-nagivation-list">
          <ul>
            <li data-index="0" className="service-active"></li>
            <li data-index="1"></li>
            <li data-index="2"></li>
            <li data-index="3"></li>
            <li data-index="4"></li>
            <li data-index="5"></li>
            <li data-index="6"></li>
          </ul>
        </div>
        <div onClick={handleNavigationButtonClick} className="service-nagivation-btn">
          <div className="service-btn" data-action="prec">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z" /></svg>
          </div>
          <div className="service-btn" data-action="next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z" /></svg>
          </div>
        </div>
      </div> */}
    </section>
  )
}