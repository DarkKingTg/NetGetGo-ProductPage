import { useState } from "react"
import logo from "../assets/react.svg"

const navLinks = [
  { name: "Features", link: "#features" },
  { name: "Pricing", link: "#pricing" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "FAQ", link: "#faq" }
]

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      <div className="nav-container">

        <a href="#hero">
          <img src={logo} alt="logo" className="logo"/>
        </a>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}

          <button className="cta-mobile">
            Get Started
          </button>
        </ul>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <button className="cta-desktop">
          Get Started
        </button>

      </div>

    </nav>
  )
}

export default Navbar