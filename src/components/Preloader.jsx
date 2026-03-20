import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink dark:bg-[#050505]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
        className="flex flex-col items-center justify-center gap-4 text-white"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-bold text-ink shadow-[0_0_40px_rgba(255,255,255,0.2)] dark:bg-white dark:text-black">
          NJ
        </span>
        <div className="h-1 w-32 overflow-hidden rounded-full bg-white/20">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full w-full bg-white"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
