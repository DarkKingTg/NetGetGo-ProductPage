// src/sections/Contact.jsx
// Contact form — Name, Email, Message, Submit
// Uses: Container, SectionTitle components

import { useState } from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const initialForm = { name: '', email: '', subject: '', message: '' }

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 8220201666',
    href:  'tel:+918220201666',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'hq@netjetit.com',
    href:  'mailto:hq@netjetit.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Headquarters',
    value: 'Nandambakkam, Tamil Nadu, India',
    href:  'https://netjetit.com/connect-us',
  },
]

function Contact() {
  const [form, setForm]     = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call — replace with backend/email service
    setTimeout(() => {
      setStatus('success')
      setForm(initialForm)
    }, 1500)
  }

  return (
    <section id="contact" className="contact section section--alt">
      <Container>

        <SectionTitle
          label="Contact Us"
          title="Get in touch with our team"
          subtitle="Have a question or ready to get started? Our team is here to help."
        />

        <div className="contact__grid">

          {/* ── Contact Info ─────────────── */}
          <div className="contact__info reveal">

            <div className="contact__info-cards">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="contact__info-card"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact__info-icon">{item.icon}</div>
                  <div className="contact__info-text">
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__netjet-link">
              <p>Part of the Netjet IT family</p>
              <a
                href="https://netjetit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--sm"
              >
                Visit netjetit.com →
              </a>
            </div>

          </div>

          {/* ── Contact Form ─────────────── */}
          <div className="contact__form-wrapper reveal stagger-2">

            {status === 'success' ? (
              <div className="contact__success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>Message sent!</h3>
                <p>Our team will get back to you within 24 hours.</p>
                <button
                  className="btn btn--outline btn--sm"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="contact__input"
                      placeholder="Arjun Mehta"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contact__input"
                      placeholder="arjun@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="contact__input"
                    placeholder="How can we help you?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__input contact__textarea"
                    placeholder="Tell us about your business and what you need..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn--primary btn--md contact__submit ${status === 'loading' ? 'contact__submit--loading' : ''}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}

          </div>

        </div>

      </Container>
    </section>
  )
}

export default Contact