import ArticleText from "../base/ArticleText";

export default function Avice() {

  return (
    <section id="avice" className="section">
      <ArticleText 
        title={"Conseil, Dr Yvette DZOKEM KUETE"}
        link={"https://wa.link/636aux"}
        target= {'_blank'}
        buttonText={"Whatsapp"} 
      > 
        <p>
          Vous êtes chez vous, un jour férié, un week-end ou à des heures où il est impossible d'avoir un cabinet dentaire ouvert. Vous avez une forte douleur dentaire, une dent cassée ou avulsée ou des gencives qui saignent ? Vous ne 
          savez pas où vous orienter pour soulager cette douleur. Contactez-nous immédiatement via le bouton WhatsApp ci-dessous pour une prise en charge en ligne gratuite ou alors prenez un rendez-vous pour une consultation au CABINET DENTAIRE DR DZOKEM via le formulaire de la section suivante.
        </p>
        <p>
          Nous sommes ouverts de lundi au samedi de 9h à 14h et de 15h à 18h sauf les derniers samedis du mois et les jours fériés.
        </p>
        
      </ArticleText>
      <article className="section-image-container">
        <img src={ '/dr_dzokem.jpg' } alt="Une image" />
      </article>
    </section>
  )
}