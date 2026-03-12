// src/sections/Testimonials.jsx
// 3-column testimonial cards with avatar, rating, review
// Uses: Container, SectionTitle, Card components
// Data from: src/data/testimonials.js

import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import testimonials from '../data/testimonials'

function StarRating({ count }) {
  return (
    <div className="testimonial__stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="testimonial__star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section section--alt">
      <Container>

        <SectionTitle
          label="Testimonials"
          title="Trusted by businesses across India"
          subtitle="Hear directly from the teams who use NetJetGo every day to run and grow their businesses."
        />

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              className="testimonial__card"
              data-animate
            >
              {/* Star Rating */}
              <StarRating count={item.rating} />

              {/* Review Text */}
              <p className="testimonial__review">"{item.review}"</p>

              {/* Author */}
              <div className="testimonial__author">
                <div className="testimonial__avatar">{item.avatar}</div>
                <div className="testimonial__meta">
                  <span className="testimonial__name">{item.name}</span>
                  <span className="testimonial__role">{item.role}</span>
                </div>
              </div>

            </Card>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Testimonials