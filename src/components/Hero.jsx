import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__kicker">Hi, I’m</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">View my work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to about">↓</a>
    </section>
  )
}
