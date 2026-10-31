import Section from './Section.jsx'
import { projects, profile } from '../data.js'

export default function Projects() {
  const github = profile.socials.find((s) => s.label === 'GitHub')

  return (
    <Section id="projects" label="03" title="Selected projects">
      <div className="projects">
        {projects.map((p) => (
          <a key={p.name} href={p.repo} target="_blank" rel="noreferrer" className="card">
            <div className="card__top">
              <span className="card__icon" aria-hidden="true">{'</>'}</span>
              <span className="card__arrow" aria-hidden="true">↗</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <ul className="card__tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </a>
        ))}
      </div>
      {github && (
        <p className="projects__more">
          More on <a href={github.href} target="_blank" rel="noreferrer">GitHub ↗</a>
        </p>
      )}
    </Section>
  )
}
