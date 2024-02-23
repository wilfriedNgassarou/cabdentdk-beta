import GalleryCard from "./GalleryCard"

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <GalleryCard
          imageUrl='/team/team_1.jpg'
          alt='Dr Dzokem Kuete Yvette'
          name='Dr Dzokem Kuete Yvette'
          profession='Chirurgien dentiste'
        />
        <GalleryCard
          imageUrl='/team/team_2.jpg'
          alt='Mme Ngo Bassama Anne Yvette'
          name='Mme Ngo Bassama Anne Yvette'
          profession='Assistante dentaire'
        />
        <GalleryCard
          imageUrl='/team/team_3.jpg'
          alt='Dr Tabitha Luciane Gomoko A Mouthe'
          name='Dr Tabitha Luciane Gomoko A Mouthe'
          profession='Chirurgien dentiste'
        />
      </div>
    </section>
  )
}