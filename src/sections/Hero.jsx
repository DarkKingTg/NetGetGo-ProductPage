// src/sections/Hero.jsx
// Full-width hero — headline, subtitle, dual CTA buttons, trust badge
// Uses: Button, Container components
// Scroll reveal handled by useScroll hook in Home.jsx

import Button from '../components/Button'
import Container from '../components/Container'

function Hero() {
  return (
    <section id="hero" className="hero section">
      <Container>

        <div className="hero__content">

          {/* Badge */}
          <div className="hero__badge reveal">
            <span className="hero__badge-dot"></span>
            Trusted by 500+ businesses across India
          </div>

          {/* Headline */}
          <h1 className="hero__headline reveal stagger-1">
            Supercharge Your Business
            <span className="hero__headline-accent"> with NetJetGo</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle reveal stagger-2">
            The all-in-one platform built by Netjet IT to help businesses
            manage, grow, and scale — faster than ever before.
          </p>

          {/* CTA Buttons */}
          <div className="hero__actions reveal stagger-3">
            <Button variant="primary" size="lg" href="#pricing">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" href="#features">
              See How It Works
            </Button>
          </div>

          {/* Trust Strip */}
          <div className="hero__trust reveal stagger-4">
            <span className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              No credit card required
            </span>
            <span className="hero__trust-divider">·</span>
            <span className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              14-day free trial
            </span>
            <span className="hero__trust-divider">·</span>
            <span className="hero__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Cancel anytime
            </span>
          </div>

        </div>

        {/* Hero Visual */}
        <div className="hero__visual reveal stagger-2">
          <div className="hero__card-mockup">

            <div className="hero__mockup-header">
              <div className="hero__mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="hero__mockup-title">NetJetGo Dashboard</div>
            </div>

            <div className="hero__mockup-body">
              <div className="hero__stat-grid">
                <div className="hero__stat">
                  <span className="hero__stat-value">₹2.4M</span>
                  <span className="hero__stat-label">Revenue this month</span>
                  <span className="hero__stat-badge hero__stat-badge--up">↑ 18%</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-value">1,284</span>
                  <span className="hero__stat-label">Active clients</span>
                  <span className="hero__stat-badge hero__stat-badge--up">↑ 9%</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-value">99.9%</span>
                  <span className="hero__stat-label">Uptime SLA</span>
                  <span className="hero__stat-badge hero__stat-badge--up">↑ Live</span>
                </div>
                <div className="hero__stat">
                  <span className="hero__stat-value">4.9★</span>
                  <span className="hero__stat-label">Customer rating</span>
                  <span className="hero__stat-badge hero__stat-badge--up">↑ Top</span>
                </div>
              </div>

              <div className="hero__mockup-bar-label">Weekly Performance</div>
              <div className="hero__bars">
                <div className="hero__bar" style={{ '--h': '45%' }}></div>
                <div className="hero__bar" style={{ '--h': '65%' }}></div>
                <div className="hero__bar" style={{ '--h': '50%' }}></div>
                <div className="hero__bar" style={{ '--h': '80%' }}></div>
                <div className="hero__bar" style={{ '--h': '60%' }}></div>
                <div className="hero__bar" style={{ '--h': '90%' }}></div>
                <div className="hero__bar hero__bar--accent" style={{ '--h': '75%' }}></div>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  )
}

export default Hero