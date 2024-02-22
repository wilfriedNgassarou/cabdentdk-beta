export default function TestimonyCard({jobTitle, name, children}) {
  return (
    <article className="testimony-card">
      { children }
      <h5>{ name }</h5>
      <h6> { jobTitle } </h6>
    </article>
  )
}