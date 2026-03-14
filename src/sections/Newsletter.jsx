// src/sections/Newsletter.jsx
// Email subscription form section
// Uses: Container component

import { useState } from 'react'
import Container from '../components/Container'

function Newsletter() {
  const [email, setEmail]     = useState('')
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    // Simulate API call — replace with Mailchimp/Resend integration
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1200)
  }

  return (
    <section id="newsletter" className="newsletter section">
      <Container>
        <div className="newsletter__wrapper reveal">

          <div className="newsletter__content">
            <span className="section-label">Stay Updated</span>
            <h2 className="newsletter__title">
              Get the latest from NetJetGo
            </h2>
            <p className="newsletter__subtitle">
              Product updates, tips, and business insights delivered
              straight to your inbox. No spam, ever.
            </p>
          </div>

          <form className="newsletter__form" onSubmit={handleSubmit} noValidate>

            {status === 'success' ? (
              <div className="newsletter__success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                You're subscribed! Welcome aboard.
              </div>
            ) : (
              <div className="newsletter__input-row">
                <input
                  type="email"
                  className="newsletter__input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className={`btn btn--primary btn--md newsletter__btn ${status === 'loading' ? 'newsletter__btn--loading' : ''}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            )}

            <p className="newsletter__note">
              By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
            </p>

          </form>

        </div>
      </Container>
    </section>
  )
}

export default Newsletter