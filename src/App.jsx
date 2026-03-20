import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import SmoothScroll from './components/SmoothScroll'
import Preloader from './components/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      window.scrollTo(0, 0)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [isLoading])

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <Home />
    </SmoothScroll>
  )
}

export default App
