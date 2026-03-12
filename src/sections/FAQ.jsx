import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import useToggle from '../hooks/useToggle'
import faqs from '../data/faq'

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