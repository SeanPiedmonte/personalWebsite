import Section from './Section.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" label="02" title="Experience & education">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role + e.org} className="timeline__item">
            <span className="timeline__period">{e.period}</span>
            <h3>{e.role}</h3>
            <p className="timeline__org">{e.org}</p>
            <p>{e.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
