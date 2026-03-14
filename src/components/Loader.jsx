// src/components/Loader.jsx

function Loader() {
  return (
    <div className="loader" role="status" aria-label="Loading NetJetGo">
      <div className="loader__content">

        {/* Logo mark */}
        <div className="loader__logo">
          <span className="loader__logo-icon">NJ</span>
        </div>

        {/* Spinner ring */}
        <div className="loader__spinner"></div>

        {/* Text */}
        <p className="loader__text">Loading NetJetGo...</p>

      </div>
    </div>
  )
}

export default Loader