export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section__head">
        <span className="section__label">{label}</span>
        <h2 className="section__title">{title}</h2>
      </div>
      {children}
    </section>
  )
}
