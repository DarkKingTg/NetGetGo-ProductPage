import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/globals.css'
import './styles/animations.css'
import './styles/Button.css'
import './styles/Card.css'
import './styles/Navbar.css'
import './styles/Hero.css'
import './styles/Features.css'
import './styles/pricing.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)