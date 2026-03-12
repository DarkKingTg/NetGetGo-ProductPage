// src/components/Navbar.jsx
// Sticky navbar — logo left, nav links center, CTA right
// Mobile: hamburger menu with slide-down animation
// Uses: useToggle hook, Button component

import { useEffect } from 'react'
import Button from './Button'
import useToggle from '../hooks/useToggle'

const navLinks = [
  { name: 'Features',     href: '#features'     },
  { name: 'Pricing',      href: '#pricing'      },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ',          href: '#faq'          },
]

function Navbar() {
  const { value: menuOpen, toggle: toggleMenu, setFalse: closeMenu } = useToggle(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [closeMenu])

  // Close menu when a nav link is clicked
  const handleNavClick = () => closeMenu()

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <span className="logotxt">
            <img src="./src/assets/icons/logo-text.png" alt="NetJetGo Logo" className="logotxt" />
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="navbar__link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar__cta">
          <Button variant="primary" size="sm" href="#pricing">
            Get Started
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="navbar__mobile-link"
                onClick={handleNavClick}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-cta">
          <Button variant="primary" size="md" href="#pricing">
            Get Started
          </Button>
        </div>
      </div>

    </header>
  )
}

export default Navbar