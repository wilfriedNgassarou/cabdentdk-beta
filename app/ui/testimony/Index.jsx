import TestimonyCard from "./TestimonyCard";

export default function Testimony() {
  return (
    <section id="testimony">
      <h2>
        <span className="article-text-title">
          Parole de nos patients
        </span>
      </h2>
      <section className="testimony-card-container">
        <TestimonyCard name={"ESSOH Patrice"} jobTitle={"Consultant"}>
          <p>
            Le Dr Yvette DZOKEM, est très excellente en matière de Chirurgie-Dentaire, très à l'écoute
            et très agréable. Explique tout ce qu'elle fait à chaque étape. Merci !!
          </p>
        </TestimonyCard>
        <TestimonyCard name={"Emma Bassaga"} jobTitle={"Patiente"}>
          <p>
            I was so affraid when it comes to dentists but when i got to Dr DZOKEM Cabinet, I was so
            impressed by her professionalism and i really appreciate her way of working and explanations
          </p>
        </TestimonyCard>
        <TestimonyCard name={"Emma Brown"} jobTitle={"Patiente"}>
          <p>
            J'apprécie le gros boulot du Cabinet Dr DZOKEM, j'ai aisément exposé mes problèmes et
            facilement ils sont résolus.
          </p>
        </TestimonyCard>
      </section>
    </section>
  )
}