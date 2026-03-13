// src/pages/Home.jsx

import useScroll from '../hooks/useScroll'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import Pricing from '../sections/Pricing'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import Footer from '../sections/Footer'
import ComparisonTable from '../sections/Comparisontable'
import CTA from '../sections/CTA'

function Home() {
  // Activates scroll-triggered .reveal → .revealed animations
  useScroll()

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}

export default Home