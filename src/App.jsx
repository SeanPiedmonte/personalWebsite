import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Post from './pages/Post.jsx'
import NotFound from './pages/NotFound.jsx'

// Scroll to #section links (including from other pages), or to the top on page change.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Sean Piedmonte
      </footer>
    </>
  )
}
