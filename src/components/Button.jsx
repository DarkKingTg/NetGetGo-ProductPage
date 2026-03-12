// src/components/Button.jsx
// Reusable button — 3 variants: primary | secondary | outline
// Used across Hero, Navbar, Pricing, CTA sections
function Button({
  children,
  variant = 'primary',   // 'primary' | 'secondary' | 'outline'
  size    = 'md',        // 'sm' | 'md' | 'lg'
  href,                  // renders as <a> if provided
  onClick,
  className = '',
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button