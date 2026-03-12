// src/sections/Features.jsx
// 3-column feature cards grid with icons, titles, descriptions
// Uses: Container, SectionTitle, Card components
// Data from: src/data/features.js

import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import features from '../data/features'

function Features() {
  return (
    <section id="features" className="features section section--alt">
      <Container>

        <SectionTitle
          label="Features"
          title="Everything your business needs"
          subtitle="NetJetGo brings together the tools, insights, and support you need to run and grow your business — all in one place."
        />

        <div className="features__grid">
          {features.map((feature) => (
          <Card
            key={feature.id}
            className="features__card"
            data-animate
          >
            <div className="features__icon">{feature.icon}</div>
            <h3 className="features__title">{feature.title}</h3>
            <p className="features__description">{feature.description}</p>
          </Card>
        ))}
        </div>

      </Container>
    </section>
  )
}

export default Features