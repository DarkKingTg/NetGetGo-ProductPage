// src/sections/Pricing.jsx

import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import Button from '../components/Button'
import pricing from '../data/pricing'

function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <Container>

        <SectionTitle
          label="Pricing"
          title="Simple, transparent pricing"
          subtitle="No hidden fees. No surprises. Pick the plan that fits your business and scale up anytime."
        />

        <div className="pricing__grid">
          {pricing.map((plan) => (
            <Card
              key={plan.id}
              variant={plan.featured ? 'featured' : 'default'}
              className={`pricing__card ${plan.featured ? 'pricing__card--featured' : ''}`}
              data-animate
            >
              {plan.featured && (
                <div className="pricing__badge">Most Popular</div>
              )}

              <h3 className="pricing__name">{plan.name}</h3>

              <div className="pricing__price-block">
                <span className="pricing__price">{plan.price}</span>
                <span className="pricing__period">{plan.period}</span>
              </div>

              <p className="pricing__description">{plan.description}</p>

              <div className="pricing__divider"></div>

              <ul className="pricing__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing__feature-item">
                    <svg className="pricing__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? 'primary' : 'outline'}
                size="md"
                href="#"
                className="pricing__cta"
              >
                {plan.cta}
              </Button>

            </Card>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Pricing
