import { lazy, Suspense } from 'react'
import useScroll from '../hooks/useScroll'

// Eager — above the fold, must load instantly
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Newsletter from '../sections/Newsletter'

// Lazy — below the fold, loaded as user scrolls
const LogoCloud       = lazy(() => import('../sections/LogoCloud'))
const Features        = lazy(() => import('../sections/Features'))
const Pricing         = lazy(() => import('../sections/Pricing'))
const ComparisonTable = lazy(() => import('../sections/ComparisonTable'))
const Testimonials    = lazy(() => import('../sections/Testimonials'))
const FAQ             = lazy(() => import('../sections/FAQ'))
const CTA             = lazy(() => import('../sections/CTA'))
const Footer          = lazy(() => import('../sections/Footer'))
const Contact         = lazy(() => import('../sections/Contact'))
const Screenshots     = lazy(() => import('../sections/Screenshots'))
const ProductDemo     = lazy(() => import('../sections/ProductDemo'))

// Lightweight placeholder while lazy sections load
function SectionFallback() {
  return <div style={{ minHeight: '200px' }} aria-hidden="true" />
}

function Home() {
  useScroll()

  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}><LogoCloud /></Suspense>
      <Suspense fallback={<SectionFallback />}><Features /></Suspense>
      <Suspense fallback={<SectionFallback />}><ProductDemo /></Suspense>
      <Suspense fallback={<SectionFallback />}><Screenshots /></Suspense>
      <Suspense fallback={<SectionFallback />}><Pricing /></Suspense>
      <Suspense fallback={<SectionFallback />}><ComparisonTable /></Suspense>
      <Suspense fallback={<SectionFallback />}><Testimonials /></Suspense>
      <Suspense fallback={<SectionFallback />}><FAQ /></Suspense>
      <Suspense fallback={<SectionFallback />}><Newsletter /></Suspense>
      <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
      <Suspense fallback={<SectionFallback />}><CTA /></Suspense>
      <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
    </>
  )
}

export default Home