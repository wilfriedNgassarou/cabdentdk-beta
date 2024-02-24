'use client'

import { useEffect, useRef, useState } from "react";
import Terms from "./Terms";
import { Toaster, toast } from "sonner"

export default function Appointment () {
  // Gestion du bouton acceptation des terms de license
  const [isChecked, setIsChecked] = useState(false) ;
  // Gestion du numéro de téléphone
  const [number, setNumber] = useState('') ;
  // Gestion de la date selectionnée
  const [date, setDate] = useState('') ;
  // Gestion de l'attribut name de l'input caché ( input pour un rendez-vous personalisé )
  const [inputHiddenName, setInputHiddenName] = useState('none') ;
  // Gestion de la sélection du motif de rendez-vous
  const [service, setService] = useState('') ;
  // Liste d'heure de consultations par default
  const [defaultTime, setDefaultTime] = useState([
    '09:00:00',
    '09:30:00',
    '10:00:00',
    '10:30:00',
    '11:00:00',
    '11:30:00',
    '12:00:00',
    '12:30:00',
    '13:00:00',
    '13:30:00',
    '15:00:00',
    '15:30:00',
    '16:00:00',
    '16:30:00',
    '17:00:00',
    '17:30:00',
  ]);

  // Liste des indisponibilités de la base de données
  const [unavailable, setUnavailable] = useState([]) ;
  // Resultat du filtrage de defaultTime par unvailableTime
  const [validTime, setValidTime] = useState([]) ;

  const section = useRef(null) ;

  let isSubmit = false ;

  async function getUnavailability() {
    const url = 'http://127.0.0.1:4500/api/get_unavailability' ;
    
    try {
      const response = await fetch(url)
      const datas = await response.json() ;
  
      return datas ;

    } catch (error) {
      console.log('Erreur lors de la connexion.');
    }

  }

  async function setState() {
    const unavailables = await getUnavailability() ;
    setUnavailable(unavailables)
  }

  // Récupération de toutes les indisponibilités
  useEffect(() => {
    
    setDefaultTime(defaultTime.map((item) => {
      return {
        value: item,
        disabled: false 
      }

    }))

    setState() ;

  }, [])

  // Filtrage des dates lorsque l'utilisateur modifie
  function handleDateChange(e) {
    setDate(e.target.value) ;
    
    const selectedDate = new Date(e.target.value).toLocaleDateString() ;
    
    // Retourne un tableau contenant la liste d'heure d'indisponibilité
    let unavailableTime = unavailable && unavailable.map((item) => {
      const dataBaseDate = new Date(item.date).toLocaleDateString() ; 
      
      if(dataBaseDate == selectedDate) {
        return item.time ;
      }

      return null ;
    });

    unavailableTime = unavailableTime && unavailableTime.filter((item) => item != null)

    if(selectedDate == 'Invalid Date') {
      setValidTime([]) ;
      return 
    }
    
    setValidTime(defaultTime.map((item) => {
      const time = item.value ;
      
      if(!unavailableTime) {
        return 
      }

      if(unavailableTime.includes(time)) {
        return {
          value: time,
          disabled: true 
        } 
      } 
      
      return item
      
    })) ;

  }

  function handleNumberChange(e) {
    const regex = /^6\d{0,8}$/ ;

    if(e.target.value == '' || regex.test(e.target.value)) {
      setNumber(e.target.value) ;
      
    }
  }

  function handleSubmit(e) {
    e.preventDefault() ;

    let date = e.target.querySelector('#date_ren') ;
    date = new Date(date.value).toLocaleDateString();
    const time = e.target.querySelector('#heure_ren') ;
    const soins = e.target.querySelector('#soins') ;

    // Début Vérification

    if (isSubmit) {
      return 
    }


    if(date <= new Date().toLocaleDateString()) {
      toast.error('Veuillez sélectionner une date supérieure à aujourd\'hui') ;
      return ;
    }

    if(time.value == 'none') {
      toast.error('Veuillez sélectionner une heure valide') ;
      return ;
    }

    if(!time) {
      toast.error('Veuillez sélectionner une heure') ;
      return ;
    }
    
    if(soins.value == 'none') {
      toast.error('Veuillez sélectionner un motif') ;
      return ;  
    }

    // Fin Vérification

    const data = new FormData(e.target)
    
    isSubmit = true ;

    fetch('http://127.0.0.1:4500/api/appointment', {
      
      method: "post",
      body: new URLSearchParams(data)
      
    })
    .then(response => response.json())
    .then((data) => {

      if(data.result == "ok") {
        toast.success('Demande envoyée avec succès.') ;
      } else {
        toast.error('Erreur ! Vérifiez vos informations.') ;
      }
      
      e.target.reset() ;
      isSubmit = false ;

      // Réinitialisation de tous les états relatifs aux champs du formulaire ;
      setIsChecked(false) ;
      setDate('');
      setNumber('') ;
      setService('')
      
      // Nouvelle requête pour obtenir les indisponibilités ;
      setState() ;
    })
    .catch((error) => {
      console.log('Erreur lors de la soumission.');
      e.target.reset() ;
    })


  }

  // Gestion du changement de service.
  function handleServiceChange(e) {
    const select = e.target ;
    const inputDiv = select.nextElementSibling ;
    const input = inputDiv.firstElementChild ;

    if(select.value == 'autre') {
      setService(select.value)
      
      select.name = 'none' ;
      setInputHiddenName('soins') ;
      
      input.required = true ;

      !inputDiv.classList.contains('visible') && inputDiv.classList.add('visible');
      return ;
    }

    setService(select.value)
      
    setInputHiddenName('none')
      select.name = 'soins' ;

      input.required = false ;
      inputDiv.classList.remove('visible') ;
    

  }

  return (
    <>
      <Toaster richColors position="top-center" />
      <section ref={section} id="appoitnment">
        <h2>
          <span className="article-text-title">
            Prenez Rendez-Vous
          </span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-control">
              <input 
                type="text" 
                placeholder="Votre Nom" 
                name="nom" 
                id="nom" 
                required 
              />
            </div>
            <div className="form-control">
              <input 
                type="text" 
                placeholder="Votre Prénom" 
                name="prenom" 
                id="prenom" 
                required 
              />
            </div>
            <div className="form-control">
              <input 
                type="email" 
                placeholder="Votre Adresse Email" 
                name="email" 
                id="email"
              />
            </div>
            <div className="form-control">
              <input 
                type="tel" 
                onChange={handleNumberChange} 
                value={number} 
                placeholder="Votre Numéro de Téléphone (6XXXXXXXX)" 
                name="telephone" 
                id="telephone" 
                required 
              />
            </div>
            <div className="form-control flex">
              Date: 
              <input
                value={date}
                onChange={handleDateChange} 
                style={{width: "90%"}} 
                type="date" 
                name="date_ren" 
                id="date_ren" 
                required 
              />
            </div>
            <div className="form-control flex">
              Heure:
              <select 
                style={{width: "90%"}} 
                type="time" 
                name="heure_ren" 
                id="heure_ren" 
                required 
              >
                <option value="none">-- cliquer pour sélectionner une heure --</option>
                { validTime.length && validTime.map((item) => {
                  let text = item?.value?.slice(0,5) ;
                  if(item?.disabled) {
                    text = text + ' (indisponible)'
                  }

                  return <option 
                            disabled={item?.disabled} 
                            key={item?.value} 
                            value={item?.value}
                          >
                            { text /* Gestion du format de date */}
                          </option>
                }) }
              </select>
            </div>
            <div className="form-control service-form">
              <select
                value={service} 
                onChange={handleServiceChange} 
                name="soins" 
                id="soins"
              >
                <option value="none">-- Sélectionner le motif --</option>
                <option value="douleur dentaire">Douleur Dentaire</option>
                <option value="prothèse dentaire">Prothèse Dentaire</option>
                <option value="detartage">Detartage</option>
                <option value="saignement dentaire">Saignement Dentaire</option>
                <option value="blanchiment dentaire">Blanchiment Dentaire</option>
                <option value="carie">Carie</option>
                <option value="autre">Autres</option>
              </select>
              <div className="hidden-input">
                <input placeholder="Comment pouvons nous vous aider ?" type="text" name={inputHiddenName}  />
              </div>
            </div>
          </div>
          <div className="form-control assurance">
            <span className="underline">NB:</span> Nous prenons en charge les assurances suivantes: Allianz, Ascoma, Activa, G.G.A Cameroun, Atlantique Assurances, Zenithe, Willis Towers Watson, O.L.E.A, A.R.E.A, SAHAM, Pass 24, Cameroun Assurance Sanitaire, AGC 
          </div>
          <Terms checked={ isChecked } onChange={setIsChecked} />
          <div className="form-control center">
            <button disabled={ !isChecked } role="submit">
              <span className="btn-submit-cursor">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </span>
              <span className="btn-submit-text">
                Envoyer
              </span>
            </button>
          </div>
        </form>
      </section>
    </>
  )
}