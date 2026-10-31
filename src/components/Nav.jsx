import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'

const links = [
  { to: '/#about', label: 'About' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only the home page has a hero image behind the nav.
  const solid = scrolled || pathname !== '/'

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`}>
      <Link to="/" className="nav__brand">SP</Link>
      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>
      <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className={pathname.startsWith('/blog') && l.to === '/blog' ? 'active' : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
