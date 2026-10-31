import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <Section id="contact" label="04" title="Let’s work together">
      <div className="contact">
        <p>
          I’m always happy to talk about new roles, interesting problems or side projects.
          The fastest way to reach me is email.
        </p>
        <div className="contact__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">{profile.email}</a>
          <a href={profile.resumeUrl} className="btn btn--ghost" download>Download résumé</a>
        </div>
        <ul className="contact__socials">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
