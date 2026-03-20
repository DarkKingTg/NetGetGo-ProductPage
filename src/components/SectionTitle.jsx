import { motion } from 'framer-motion'

function SectionTitle({ label, title, subtitle, align = 'left', dark = false }) {
  const isCentered = align === 'center'
  const wrapperClasses = isCentered
    ? 'mx-auto flex max-w-3xl flex-col items-center text-center'
    : 'flex max-w-3xl flex-col items-start text-left'
  const labelClasses = dark
    ? 'bg-white/10 text-white/80 ring-white/15'
    : 'bg-white/70 text-slate-600 ring-slate-900/8'
  const titleClasses = dark ? 'text-white' : 'text-ink'
  const subtitleClasses = dark ? 'text-white/70' : 'text-slate-600'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <motion.div 
      className={wrapperClasses}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      {label ? (
        <motion.span
          variants={itemVariants}
          className={`mb-5 inline-flex rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] ring-1 ${labelClasses}`}
        >
          {label}
        </motion.span>
      ) : null}

      <motion.h2 variants={itemVariants} className={`font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl ${titleClasses}`}>
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p variants={itemVariants} className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${subtitleClasses}`}>
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  )
}

export default SectionTitle
