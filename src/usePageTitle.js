import { useEffect } from 'react'
import { profile } from './data.js'

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${profile.name}` : profile.name
  }, [title])
}
