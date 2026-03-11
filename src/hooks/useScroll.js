// src/hooks/useScroll.js
// Watches for .reveal elements entering the viewport
// and adds .revealed to trigger CSS transitions

import { useEffect } from 'react'

function useScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Once revealed, stop watching (performance)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,   // Trigger when 12% of element is visible
        rootMargin: '0px 0px -20px 0px'  // Slightly before fully in view
      }
    )

    // Observe all .reveal elements
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default useScroll