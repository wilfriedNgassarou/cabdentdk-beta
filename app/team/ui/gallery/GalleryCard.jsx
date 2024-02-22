export default function GalleryCard({ imageUrl, alt, name, profession = 'Dentiste' }) {
  return (
    <article>
      <img src={imageUrl} alt={alt} />
      <div className="text">
        <h2>
          { name } <br />
          { profession }
        </h2>
      </div>
    </article>
  )
}