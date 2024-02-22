export default function PictureCard({imageLink, alt, legend = 'Legende'}) {
  return (
    <article>
      <img src= { imageLink } alt= { alt } />
      <div className="legend">
        { legend }
      </div>
    </article>
  )
}