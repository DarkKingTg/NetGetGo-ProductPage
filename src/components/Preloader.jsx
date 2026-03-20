import { motion } from 'framer-motion'
import { useEffect } from 'react'
import logoText from '../assets/icons/logo-text.png'

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Hold the minimalist logo on screen for 1.2s, then trigger exit
    const timer = setTimeout(() => {
      onComplete()
    }, 1200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.img
        src={logoText}
        alt="NetJetGo Logo"
        className="h-12 w-auto object-contain sm:h-14"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
      />
    </motion.div>
  )
}
