import Hero from "../team/ui/hero/Hero";
import PictureCard from "@/app/picture/ui/PictureCard";

export default function Page() {
  return (
    <>
      <Hero />
      <main> 
        <h1 className="title">Photos du Cabinet</h1>
        <section className="picture">

          <PictureCard 
            imageLink={'/picture/allee.jpg'} 
            alt={'Allée'} 
            legend="Allée." 
          />
          <PictureCard 
            imageLink="/picture/accueil.jpg" 
            alt="Salle d'accueil"
            legend="Salle d'accueil." 
          />
          <PictureCard 
            imageLink="/picture/exterieur.jpg" 
            alt="Extérieur"
            legend="Extérieur." 
          />
          <PictureCard 
            imageLink="/picture/parking.jpg" 
            alt="Parking" 
            legend="Parking."
          />
          <PictureCard 
            imageLink="/picture/parking2.jpg" 
            alt="Parking" 
            legend="Parking."
          />
          <PictureCard 
            imageLink="/picture/porte.jpg" 
            alt="Entrée du Cabinet" 
            legend="Entrée du Cabinet."
          />
          <PictureCard 
            imageLink="/picture/salle.jpg" 
            alt="Salle d'opération" 
            legend="Salle d'opération."
          />

        </section>

      </main>
    </>
  )
}