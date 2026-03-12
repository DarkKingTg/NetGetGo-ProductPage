import Container from '../components/Container'

const footerLinks = {
  Product: [
    { name: 'Features',     href: '#features'     },
    { name: 'Pricing',      href: '#pricing'      },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ',          href: '#faq'          },
  ],
  Company: [
    { name: 'About Netjet IT', href: 'https://netjetit.com/netjet'      },
    { name: 'Our Work',        href: 'https://netjetit.com/our-work-gallery' },
    { name: 'Careers',         href: 'https://netjetit.com/careers-1'   },
    { name: 'Contact Us',      href: 'https://netjetit.com/connect-us'  },
  ],
  Legal: [
    { name: 'Privacy Policy',    href: '#' },
    { name: 'Terms of Service',  href: '#' },
    { name: 'Cookie Policy',     href: '#' },
    { name: 'Data Security',     href: '#' },
  ],
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="footer">
      <Container>

        {/* ── Top Row ─────────────────────── */}
        <div className="footer__top">

          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <span className="footer__logo-icon">NJ</span>
              <span className="footer__logo-text">NetJetGo</span>
            </a>
            <p className="footer__tagline">
              The all-in-one business platform built by Netjet IT — helping businesses across India manage, grow, and scale.
            </p>
            <div className="footer__contact">
              <a href="tel:+918220201666" className="footer__contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 8220201666
              </a>
              <a href="mailto:hq@netjetit.com" className="footer__contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                hq@netjetit.com
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer__column">
              <h4 className="footer__column-title">{category}</h4>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="footer__link">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Bottom Bar ──────────────────── */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Netjet IT. All rights reserved. Built with NetJetGo.
          </p>
          <a href="https://netjetit.com" className="footer__netjet-link">
            netjetit.com
          </a>
        </div>

      </Container>
    </footer>
  )
}

export default Footer