import { motion } from 'framer-motion'

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 disabled:pointer-events-none disabled:opacity-60'
  const variants = {
    primary:
      'bg-ink text-white shadow-lg shadow-slate-900/10 hover:bg-slate-900',
    secondary:
      'bg-brand text-white shadow-lg shadow-blue-600/15 hover:bg-blue-700',
    outline:
      'border border-slate-300/80 bg-white/80 text-slate-900 hover:border-slate-400 hover:bg-white',
    subtle:
      'bg-slate-900/5 text-slate-900 hover:bg-slate-900/10',
    light:
      'bg-white text-slate-900 shadow-lg shadow-slate-900/5 hover:bg-slate-50',
  }
  const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-sm md:h-14 md:px-7 md:text-base',
  }
  const classes = `${baseClasses} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`.trim()
  const isExternal = typeof href === 'string' && href.startsWith('http')

  const interactionProps = {
    whileHover: { scale: 1.025, transition: { type: "spring", stiffness: 400, damping: 10 } },
    whileTap: { scale: 0.97 }
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        {...interactionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button className={classes} onClick={onClick} type="button" {...interactionProps} {...props}>
      {children}
    </motion.button>
  )
}

export default Button
