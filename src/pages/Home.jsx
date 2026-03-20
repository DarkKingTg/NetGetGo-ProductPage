import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Container from '../components/Container'
import DashboardPreview from '../components/DashboardPreview'
import LeadForm from '../components/LeadForm'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import {
  contactStats,
  faqs,
  features,
  heroStats,
  outcomes,
  pricingPlans,
  productSignals,
  testimonials,
  trustLogos,
  workflowSteps,
} from '../data/landingContent'

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.167 10h11.666" />
      <path d="M9.167 5l5 5-5 5" />
    </svg>
  )
}

function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m4.5 10 3.5 3.5L15.5 6" />
    </svg>
  )
}

function FeaturePlaceholder({ feature }) {
  const commonPanel = `relative h-56 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br ${feature.accent}`

  if (feature.pattern === 'bars') {
    return (
      <div className={commonPanel}>
        <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {feature.label}
        </div>
        <div className="absolute inset-x-5 bottom-5 flex items-end gap-3">
          {[34, 52, 44, 68, 56].map((height, index) => (
            <div key={height} className="flex-1 rounded-t-[18px] bg-white/80" style={{ height: `${height}%`, opacity: 0.58 + index * 0.08 }} />
          ))}
        </div>
      </div>
    )
  }

  if (feature.pattern === 'shield') {
    return (
      <div className={commonPanel}>
        <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {feature.label}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex h-28 w-24 items-center justify-center rounded-[32px] border border-white/80 bg-white/85 shadow-lg shadow-emerald-950/5">
            <div className="absolute -left-7 top-8 h-px w-7 bg-white/80" />
            <div className="absolute -right-7 top-8 h-px w-7 bg-white/80" />
            <div className="absolute -bottom-6 left-1/2 h-6 w-px -translate-x-1/2 bg-white/80" />
            <div className="h-10 w-10 rounded-full bg-emerald-500/12" />
          </div>
        </div>
      </div>
    )
  }

  if (feature.pattern === 'cards') {
    return (
      <div className={commonPanel}>
        <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {feature.label}
        </div>
        <div className="absolute inset-x-6 bottom-6 top-16">
          <div className="absolute right-0 top-0 h-28 w-2/3 rounded-[24px] border border-white/80 bg-white/72" />
          <div className="absolute left-4 top-10 h-32 w-2/3 rounded-[24px] border border-white/80 bg-white/82 shadow-lg shadow-slate-900/5" />
          <div className="absolute bottom-0 right-8 h-24 w-2/5 rounded-[24px] bg-slate-900/12" />
        </div>
      </div>
    )
  }

  if (feature.pattern === 'network') {
    return (
      <div className={commonPanel}>
        <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {feature.label}
        </div>
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-px w-36 -translate-x-1/2 -translate-y-1/2 bg-white/90" />
          <div className="absolute left-1/2 top-1/2 h-36 w-px -translate-x-1/2 -translate-y-1/2 bg-white/90" />
          {[
            'left-1/2 top-10 -translate-x-1/2',
            'left-10 top-1/2 -translate-y-1/2',
            'right-10 top-1/2 -translate-y-1/2',
            'left-1/2 bottom-10 -translate-x-1/2',
          ].map((position) => (
            <div key={position} className={`absolute ${position} h-14 w-14 rounded-full border border-white/80 bg-white/85 shadow-lg shadow-slate-900/5`} />
          ))}
        </div>
      </div>
    )
  }

  if (feature.pattern === 'timeline') {
    return (
      <div className={commonPanel}>
        <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
          {feature.label}
        </div>
        <div className="absolute inset-x-6 bottom-6 top-16 flex flex-col justify-between">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex items-center gap-3 rounded-[22px] border border-white/75 bg-white/72 px-4 py-4">
              <div className="h-9 w-9 rounded-full bg-rose-500/12" />
              <div className="flex-1">
                <div className="h-2 w-24 rounded-full bg-slate-900/15" />
                <div className="mt-2 h-2 w-16 rounded-full bg-slate-900/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={commonPanel}>
      <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
        {feature.label}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-36 w-36 rounded-full border border-white/80">
          <div className="absolute inset-6 rounded-full border border-white/80" />
          <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85 shadow-lg shadow-slate-900/5" />
        </div>
      </div>
    </div>
  )
}

function Home() {
  const [activeFaq, setActiveFaq] = useState(faqs[0].id)

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="content" className="overflow-hidden pb-16">
        <section id="hero" className="relative pt-8 sm:pt-10 lg:pt-14">
          <Container className="relative">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                className="relative max-w-2xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="inline-flex rounded-full border border-white/80 bg-white/80 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                  Calm operations for growing teams.
                </motion.div>

                <motion.h1 variants={itemVariants} className="mt-7 font-display text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-ink sm:text-6xl lg:text-7xl">
                  Run the business from one calm, premium workspace.
                </motion.h1>

                <motion.p variants={itemVariants} className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                  NetJetGo brings operations, automation, reporting, and client delivery into one premium layer so growing teams can move faster without adding more chaos.
                </motion.p>

                <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="#contact" variant="primary" size="lg">
                    Book a live demo
                    <ArrowRightIcon />
                  </Button>
                  <Button href="#pricing" variant="outline" size="lg">
                    Explore pricing
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  {['No credit card', 'Built for India-first teams', 'Implementation support included'].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/65 px-3 py-2 backdrop-blur"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} className="mt-10 grid gap-4 sm:grid-cols-3">
                  {heroStats.map((item) => (
                    <div key={item.label} className="premium-card p-5">
                      <p className="font-display text-2xl font-semibold tracking-[-0.05em] text-ink sm:text-3xl">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="lg:pl-4"
              >
                <DashboardPreview />
              </motion.div>
            </div>
          </Container>
        </section>

        <section aria-label="Partner ecosystem" className="pt-16 sm:pt-20">
          <Container>
            <div className="premium-card overflow-hidden px-5 py-5 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Representative customer marks
                </p>
                <p className="text-sm text-slate-500">Swap these placeholders for final customer or partner logos later.</p>
              </div>
              <div className="logo-marquee mt-6 overflow-hidden">
                <div className="flex min-w-max items-center gap-4 animate-marquee pr-4">
                  {[...trustLogos, ...trustLogos, ...trustLogos].map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex min-w-[190px] items-center gap-3 rounded-[24px] border border-slate-200 bg-white/90 px-4 py-4 text-sm text-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/[0.04] font-display font-semibold tracking-[-0.03em] text-ink">
                        {logo.mark}
                      </span>
                      <span className="font-semibold">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pt-20 sm:pt-24" id="results">
          <Container>
            <SectionTitle
              label="Why teams switch"
              title="Replace operational drag with one clear decision layer."
              subtitle="NetJetGo brings structure to everyday work so founders, operators, and delivery teams are finally looking at the same live picture."
              align="center"
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {outcomes.map((item, index) => (
                <motion.article
                  key={item.title}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="premium-card p-7"
                >
                  <p className="font-display text-4xl font-semibold tracking-[-0.06em] text-ink">{item.stat}</p>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        <section id="product" className="pt-20 sm:pt-24">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="premium-card p-8">
                <SectionTitle
                  label="Operating layer"
                  title="Give every team the same live picture of the business."
                  subtitle="Use one clean system for handoffs, approvals, client delivery, and reporting so decisions happen with less back-and-forth."
                />

                <div className="mt-8 space-y-4">
                  {productSignals.map((signal) => (
                    <div key={signal} className="flex items-start gap-3 rounded-[24px] bg-slate-900/[0.03] p-4 transition-transform duration-300 hover:translate-x-1">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      <p className="text-sm leading-6 text-slate-600">{signal}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[28px] bg-ink px-6 py-6 text-white shadow-[0_18px_60px_rgba(15,23,42,0.14)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Implementation snapshot</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="font-display text-3xl font-semibold tracking-[-0.05em]">Week 1</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">Audit workflows, confirm data touchpoints, align dashboard priorities.</p>
                    </div>
                    <div>
                      <p className="font-display text-3xl font-semibold tracking-[-0.05em]">Week 2</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">Launch reporting surfaces, enable automations, train the operating team.</p>
                    </div>
                  </div>
                </div>
              </div>

              <DashboardPreview />
            </div>
          </Container>
        </section>

        <section id="features" className="pt-20 sm:pt-24">
          <Container>
            <SectionTitle
              label="Core modules"
              title="Polished placeholders now hold the space for product imagery."
              subtitle="The layout stays premium and presentation-ready now, and you can replace each block with real screenshots whenever they are ready."
              align="center"
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => (
                <motion.article 
                  key={feature.title} 
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-5% 0px" }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300 } }}
                  className="premium-card overflow-hidden p-4"
                >
                  <FeaturePlaceholder feature={feature} />
                  <div className="px-3 pb-3 pt-6">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">{feature.title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{feature.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        <section id="workflow" className="pt-20 sm:pt-24">
          <Container>
            <div className="premium-card overflow-hidden bg-ink text-white">
              <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
                <SectionTitle
                  label="How it works"
                  title="A rollout that stays simple even when the business is not."
                  subtitle="Start with the workflows that matter most, then expand without forcing the team into another heavy implementation cycle."
                  dark
                />

                <div className="space-y-4">
                  {workflowSteps.map((item, index) => (
                    <motion.article 
                      key={item.step} 
                      custom={index}
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: (i) => ({ opacity: 1, x: 0, transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } })
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-5% 0px" }}
                      className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
                          {item.step}
                        </span>
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                      </div>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">{item.description}</p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="testimonials" className="pt-20 sm:pt-24">
          <Container>
            <SectionTitle
              label="Customer proof"
              title="Trusted by teams that need clarity, not ceremony."
              subtitle="The strongest proof is operational: faster reviews, cleaner reporting, and fewer status-chasing loops."
              align="center"
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <motion.article 
                  key={item.name} 
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: (i) => ({ opacity: 1, scale: 1, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } })
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-5% 0px" }}
                  whileHover={{ y: -6, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
                  className="premium-card p-7"
                >
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>*</span>
                    ))}
                  </div>
                  <p className="mt-5 text-lg leading-8 text-slate-700">&quot;{item.quote}&quot;</p>
                  <div className="mt-8 border-t border-slate-200 pt-5">
                    <p className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>

        <section id="pricing" className="pt-20 sm:pt-24">
          <Container>
            <SectionTitle
              label="Pricing"
              title="Clear plans for teams at different stages of maturity."
              subtitle="Start lean, standardize the messy middle, and move into a tailored rollout when the business needs more depth."
              align="center"
            />

            <div className="mt-14 grid gap-6 xl:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <motion.article
                  key={plan.name}
                  custom={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } })
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-5% 0px" }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                  className={`premium-card flex h-full flex-col p-7 ${
                    plan.featured ? 'relative border-blue-600/40 bg-white shadow-[0_26px_80px_rgba(37,83,215,0.16)] animate-pulse-glow' : ''
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      Most popular
                    </span>
                  ) : null}

                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{plan.name}</p>
                  <div className="mt-5">
                    <p className="font-display text-4xl font-semibold tracking-[-0.06em] text-ink">{plan.price}</p>
                    <p className="mt-2 text-sm text-slate-500">{plan.period}</p>
                  </div>
                  <p className="mt-5 text-base leading-7 text-slate-600">{plan.description}</p>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button href="#contact" variant={plan.featured ? 'secondary' : 'outline'} size="md" className="w-full">
                      {plan.cta}
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-white/70 px-6 py-5 text-sm leading-7 text-slate-600 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur">
              Every plan includes guided onboarding, support from Netjet IT, and space to swap in final screenshots, customer logos, and product visuals later.
            </div>
          </Container>
        </section>

        <section id="faq" className="pt-20 sm:pt-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionTitle
                label="FAQ"
                title="Questions leaders ask before they roll out a new operating system."
                subtitle="The essentials: rollout speed, flexibility, expansion path, and how the product fits into the stack you already run."
              />

              <div className="space-y-4">
                {faqs.map((item) => {
                  const isOpen = activeFaq === item.id

                  return (
                    <article key={item.id} className="premium-card overflow-hidden transition-transform duration-300 hover:-translate-y-0.5">
                      <button
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        onClick={() => setActiveFaq(isOpen ? '' : item.id)}
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">{item.question}</span>
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition ${
                            isOpen ? 'rotate-45 bg-slate-900 text-white' : 'bg-white'
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden">
                          <p className="px-6 pb-6 text-base leading-7 text-slate-600">{item.answer}</p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </Container>
        </section>

        <section id="contact" className="pt-20 sm:pt-24">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="premium-card p-8">
                <SectionTitle
                  label="Talk to the team"
                  title="See how NetJetGo would fit your workflow."
                  subtitle="Share the first process you want to clean up, and we will shape the right rollout around your team and stack."
                />

                <div className="mt-8 space-y-4">
                  {[
                    ['Phone', '+91 8220201666', 'tel:+918220201666'],
                    ['Email', 'hq@netjetit.com', 'mailto:hq@netjetit.com'],
                    ['Website', 'netjetit.com', 'https://netjetit.com'],
                  ].map(([label, value, href]) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center justify-between rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-sm shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <span className="text-slate-500">{label}</span>
                      <span className="font-semibold text-ink">{value}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {contactStats.map((item) => (
                    <div key={item.label} className="rounded-[24px] bg-slate-900/[0.03] p-4 transition-transform duration-300 hover:-translate-y-0.5">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                      <p className="mt-3 font-display text-xl font-semibold tracking-[-0.04em] text-ink">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="premium-card p-8 sm:p-10">
                <LeadForm />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="pb-8 pt-20">
        <Container>
          <div className="premium-card overflow-hidden bg-ink px-6 py-8 text-white sm:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-ink">
                    NJ
                  </span>
                  <div>
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em]">NetJetGo</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/50">Operating system for modern teams</p>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
                  A calm workspace for operations, reporting, approvals, and delivery. Built to feel premium now, with polished placeholders ready for your final brand assets later.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/50">Explore</p>
                  <div className="mt-4 space-y-3 text-sm text-white/75">
                    <a href="#product" className="block hover:text-white">
                      Product overview
                    </a>
                    <a href="#features" className="block hover:text-white">
                      Feature architecture
                    </a>
                    <a href="#pricing" className="block hover:text-white">
                      Pricing
                    </a>
                    <a href="#contact" className="block hover:text-white">
                      Contact
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/50">Company</p>
                  <div className="mt-4 space-y-3 text-sm text-white/75">
                    <a href="https://netjetit.com" className="block hover:text-white" target="_blank" rel="noreferrer">
                      netjetit.com
                    </a>
                    <a href="mailto:hq@netjetit.com" className="block hover:text-white">
                      hq@netjetit.com
                    </a>
                    <a href="tel:+918220201666" className="block hover:text-white">
                      +91 8220201666
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/45">
              Copyright {new Date().getFullYear()} Netjet IT. Built for calm operations and clear decisions.
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Home
