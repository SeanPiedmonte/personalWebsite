import { Link } from 'react-router'
import usePageTitle from '../usePageTitle.js'

export default function NotFound() {
  usePageTitle('Not found')
  return (
    <section className="page">
      <span className="section__label">404</span>
      <h1 className="page__title">Page not found</h1>
      <p className="page__intro">That page doesn’t exist. <Link to="/">Head home</Link>.</p>
    </section>
  )
}
