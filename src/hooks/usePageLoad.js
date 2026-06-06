import { useState, useEffect } from 'react'
import { PRELOAD_IMAGES } from '../data/constants'

const SPLASH_MS = 3000
const MIN_SKELETON_MS = 800

function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image()
          img.onload = () => resolve(true)
          img.onerror = () => resolve(false)
          img.src = src
        }),
    ),
  )
}

export default function usePageLoad() {
  const [phase, setPhase] = useState('splash')

  useEffect(() => {
    const splashTimer = setTimeout(() => setPhase('loading'), SPLASH_MS)
    return () => clearTimeout(splashTimer)
  }, [])

  useEffect(() => {
    if (phase !== 'loading') return

    const skeletonStart = Date.now()

    preloadImages(PRELOAD_IMAGES).then(() => {
      const elapsed = Date.now() - skeletonStart
      const remaining = Math.max(0, MIN_SKELETON_MS - elapsed)
      setTimeout(() => setPhase('ready'), remaining)
    })
  }, [phase])

  return phase
}
