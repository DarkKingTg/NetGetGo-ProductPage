import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// App styles
import './index.css'
import './styles/globals.css'
import './styles/animations.css'
import './styles/Loader.css'

// Component styles
import './styles/Button.css'
import './styles/Card.css'
import './styles/Navbar.css'

// Section styles
import './styles/Hero.css'
import './styles/LogoCloud.css'
import './styles/Features.css'
import './styles/ProductDemo.css'
import './styles/Pricing.css'
import './styles/Testimonials.css'
import './styles/FAQ.css'
import './styles/Newsletter.css'
import './styles/Contact.css'
import './styles/CTA.css'
import './styles/Footer.css'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)