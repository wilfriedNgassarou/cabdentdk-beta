import GalleryCard from "./GalleryCard"

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-container">
        <GalleryCard
          imageUrl='/team/team_1.jpg'
          alt='Dr Dzokem'
          name='Dr Dzokem'
          profession='Dr Dzokem'
        />
        <GalleryCard
          imageUrl='/team/team_2.jpg'
          alt='Dr Dzokem'
          name='Dr Dzokem'
          profession='Dr Dzokem'
        />
        <GalleryCard
          imageUrl='/team/team_3.jpg'
          alt='Dr Dzokem'
          name='Dr Dzokem'
          profession='Dr Dzokem'
        />
        <GalleryCard
          imageUrl='/team/team_4.jpg'
          alt='Dr Dzokem'
          name='Dr Dzokem'
          profession='Dr Dzokem'
        />
      </div>
    </section>
  )
}