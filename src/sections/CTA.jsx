// src/sections/CTA.jsx
// Full-width conversion banner between FAQ and Footer
// Uses: Container, Button components

import Button from '../components/Button'
import Container from '../components/Container'

function CTA() {
  return (
    <section id="cta" className="cta">
      <Container>
        <div className="cta__content reveal">

          <span className="section-label">Get Started Today</span>

          <h2 className="cta__headline">
            Ready to supercharge your business?
          </h2>

          <p className="cta__subtitle">
            Join 500+ businesses already using NetJetGo to manage, grow, and scale.
            Start your 14-day free trial — no credit card required.
          </p>

          <div className="cta__actions">
            <Button variant="primary" size="lg" href="#pricing">
              Start Free Trial
            </Button>
            <Button variant="outline-white" size="lg" href="https://netjetit.com/connect-us">
              Talk to Sales
            </Button>
          </div>

          <p className="cta__note">
            No credit card required · Cancel anytime · Setup in minutes
          </p>

        </div>
      </Container>
    </section>
  )
}

export default CTA