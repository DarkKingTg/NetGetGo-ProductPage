import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import SmoothScroll from './components/SmoothScroll'
import Preloader from './components/Preloader'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Block native scrolling exactly while the preloader is on screen
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ''
    }
  }, [isLoaded])

  return (
    <>
      <AnimatePresence>
        {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>
      <SmoothScroll>
        <Home isLoaded={isLoaded} />
      </SmoothScroll>
    </>
  )
}

export default App
