import ArticleText from "@/app/ui/base/ArticleText";

export default function About() {
  return (
    <section id="about" className="section">
      <article className="section-image-container">
        <img src={ '/reception.jpg' } alt="Une Image" />
      </article>
      <ArticleText 
        title={"A propos de nous"}
        link={"/picture"}
        buttonText={"Photo du Cabinet"}
      >
        <p>
          <strong>Le Cabinet Dentaire Dr DZOKEM</strong> est une structure de santé reconnue 
          officiellement selon la décision N ° 071/CNO/PR/11/2005 du MINSANTE du Cameroun, 
          essentiellement dévouée aux soins dentaires Il y est pratiqué des soins conservateurs, 
          chirurgicaux, esthétiques, des réhabilitations prothétiques fixes et mobiles, l’ interceptions 
          des Dysharmonies dentaires chez les enfants, des traitements orthodontiques avec des 
          gouttières aligneurs chez les sujets de plus de 12 ans.
        </p>
        <p>
          <strong>
            Le Cabinet Dentaire Dr DZOKEM est conventionné dans plusieurs mutuelles et presque toutes 
            les assurances de la ville de Douala où nous pratiquons le tiers payant. Nous aurons le 
            plaisir de vous recevoir dans un cadre agréable, sécurisé et d’accès facile. Un parking de 
            deux véhicules vous est réservé.
          </strong>
        </p>
      </ArticleText>
    </section>
  )
}