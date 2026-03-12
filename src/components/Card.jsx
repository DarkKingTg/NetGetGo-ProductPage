// src/components/Card.jsx
// Flexible card — used for Features, Testimonials, Pricing tiers
// Variants: default | featured | dark

function Card({ children, variant = 'default', className = '', ...props }) {
  return (
    <div
      className={`card card--${variant} hover-lift ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card