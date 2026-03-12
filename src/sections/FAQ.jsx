import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import useToggle from '../hooks/useToggle'

const faqs = [
  {
    id: 1,
    question: 'What is NetJetGo and who is it for?',
    answer:
      'NetJetGo is an all-in-one business management platform built by Netjet IT. It is designed for small to large businesses across India who want to manage operations, track analytics, and scale — all from a single dashboard.',
  },
  {
    id: 2,
    question: 'Is there a free trial available?',
    answer:
      'Yes. Every plan comes with a 14-day free trial — no credit card required. You get full access to all features during the trial period so you can evaluate NetJetGo with your real business data.',
  },
  {
    id: 3,
    question: 'Can I change my plan later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately and billing is prorated automatically.',
  },
  {
    id: 4,
    question: 'How secure is my business data?',
    answer:
      'We use bank-level AES-256 encryption for all data at rest and in transit. Our infrastructure is hosted on enterprise-grade cloud with role-based access control, regular security audits, and full compliance support.',
  },
  {
    id: 5,
    question: 'What integrations does NetJetGo support?',
    answer:
      'NetJetGo connects with 50+ tools including popular CRMs, payment gateways like Razorpay and Stripe, communication platforms, and accounting software. New integrations are added every month.',
  },
  {
    id: 6,
    question: 'What kind of support do you offer?',
    answer:
      'All plans include access to our expert support team via email and live chat. Growth and Enterprise plans get priority support with faster response times. Enterprise clients get a dedicated account manager.',
  },
]

function FAQItem({ faq }) {
  const { value: isOpen, toggle } = useToggle(false)

  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={toggle} aria-expanded={isOpen}>
        <span>{faq.question}</span>
        <span className="faq__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </button>

      <div className={`faq__answer accordion-body ${isOpen ? 'open' : ''}`}>
        <p className="faq__answer-text">{faq.answer}</p>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <section id="faq" className="faq section">
      <Container>

        <SectionTitle
          label="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about NetJetGo. Can't find the answer? Reach out to our support team."
        />

        <div className="faq__list reveal">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>

      </Container>
    </section>
  )
}

export default FAQ