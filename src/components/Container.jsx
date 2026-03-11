// src/components/Container.jsx
// Centers content and applies max-width
// Used inside every section

function Container({ children, className = '' }) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}

export default Container