// src/components/SectionTitle.jsx
// Renders the standard section header used on Features, Pricing, Testimonials, FAQ
// Pattern: small label badge → h2 heading → subtitle paragraph
// No separate CSS file — styles live in src/styles/globals.css

function SectionTitle({ label, title, subtitle, align = 'center', dark = false }) {
  const alignClass = align === 'left' ? 'section-header--left' : ''
  const darkClass  = dark ? 'section-header--dark' : ''

  return (
    <div className={`section-header ${alignClass} ${darkClass}`}>

      {label && (
        <span className="section-label">{label}</span>
      )}

      <h2>{title}</h2>

      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}

    </div>
  )
}

export default SectionTitle