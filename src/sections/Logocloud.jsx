// src/sections/LogoCloud.jsx
// Scrolling marquee of partner/trusted-by logos
// Uses: Container component

import Container from '../components/Container'

const logos = [
  { name: 'Google Cloud',  abbr: 'GC'  },
  { name: 'Amazon AWS',    abbr: 'AWS' },
  { name: 'Microsoft Azure', abbr: 'AZ' },
  { name: 'Firebase',      abbr: 'FB'  },
  { name: 'GitHub',        abbr: 'GH'  },
  { name: 'Oracle',        abbr: 'OC'  },
  { name: 'WordPress',     abbr: 'WP'  },
  { name: 'Meta',          abbr: 'MT'  },
]

function LogoCloud() {
  return (
    <section className="logocloud section--alt">
      <Container>
        <p className="logocloud__label reveal">
          Trusted technology partners
        </p>
      </Container>

      {/* Full width marquee — outside Container intentionally */}
      <div className="logocloud__track-wrapper" aria-hidden="true">
        <div className="logocloud__track marquee-track">
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="logocloud__logo">
              <span className="logocloud__logo-abbr">{logo.abbr}</span>
              <span className="logocloud__logo-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoCloud