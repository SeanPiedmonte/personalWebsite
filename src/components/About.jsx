import Section from './Section.jsx'
import { about, skills } from '../data.js'

export default function About() {
  return (
    <Section id="about" label="01" title="About me">
      <div className="about">
        <div className="about__text">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="about__skills">
          {skills.map((s) => (
            <div key={s.group} className="skillgroup">
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
