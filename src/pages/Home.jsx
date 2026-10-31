import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'
import usePageTitle from '../usePageTitle.js'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
