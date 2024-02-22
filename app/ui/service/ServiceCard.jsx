
export default function ServiceCard({imgUrl, index, title, children}) {
  return (
    <article data-index = { index } className="service-card carousel-cell">
      <div className="service-card-img-container">
        <img src = { 'services/' + imgUrl } alt="Une Image" />
      </div>
      <h3>
        { title }
      </h3>
      { children }
    </article>
  )
}