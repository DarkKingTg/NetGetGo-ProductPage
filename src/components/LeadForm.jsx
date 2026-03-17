import { useState } from 'react'
import Button from './Button'

const initialLeadForm = {
  name: '',
  email: '',
  company: '',
  teamSize: '',
  message: '',
}

function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m4.5 10 3.5 3.5L15.5 6" />
    </svg>
  )
}

function LeadForm() {
  const [leadForm, setLeadForm] = useState(initialLeadForm)
  const [leadErrors, setLeadErrors] = useState({})
  const [leadStatus, setLeadStatus] = useState('idle')

  const handleLeadChange = (event) => {
    const { name, value } = event.target

    setLeadForm((current) => ({
      ...current,
      [name]: value,
    }))

    setLeadErrors((current) => {
      if (!current[name]) {
        return current
      }

      const nextErrors = { ...current }
      delete nextErrors[name]
      return nextErrors
    })
  }

  const validateLeadForm = (formValues) => {
    const nextErrors = {}

    if (!formValues.name.trim()) nextErrors.name = 'Please share your name.'
    if (!formValues.email.trim()) nextErrors.email = 'Please share your work email.'
    if (formValues.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!formValues.company.trim()) nextErrors.company = 'Please tell us your company name.'
    if (!formValues.teamSize.trim()) nextErrors.teamSize = 'Please choose a team size.'
    if (!formValues.message.trim()) nextErrors.message = 'Tell us what you want to improve first.'

    return nextErrors
  }

  const handleLeadSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateLeadForm(leadForm)

    if (Object.keys(nextErrors).length > 0) {
      setLeadErrors(nextErrors)
      setLeadStatus('idle')
      return
    }

    setLeadErrors({})
    setLeadStatus('loading')

    window.setTimeout(() => {
      setLeadStatus('success')
      setLeadForm(initialLeadForm)
    }, 900)
  }

  const renderFieldError = (fieldName) =>
    leadErrors[fieldName] ? (
      <p className="mt-2 text-sm text-rose-600">{leadErrors[fieldName]}</p>
    ) : null

  if (leadStatus === 'success') {
    return (
      <div className="flex h-full flex-col items-start justify-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-ink">
          Your demo request is in.
        </h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          Thanks for sharing the context. The team should follow up within 24 hours to plan the right walkthrough.
        </p>
        <Button className="mt-8" variant="outline" onClick={() => setLeadStatus('idle')}>
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleLeadSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={leadForm.name}
            onChange={handleLeadChange}
            className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            placeholder="Arjun Mehta"
          />
          {renderFieldError('name')}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700" htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={leadForm.email}
            onChange={handleLeadChange}
            className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            placeholder="arjun@company.com"
          />
          {renderFieldError('email')}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-[1fr_0.5fr]">
        <div>
          <label className="text-sm font-semibold text-slate-700" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={leadForm.company}
            onChange={handleLeadChange}
            className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            placeholder="TechVision India"
          />
          {renderFieldError('company')}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700" htmlFor="teamSize">
            Team size
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={leadForm.teamSize}
            onChange={handleLeadChange}
            className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-ink outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="">Select</option>
            <option value="1-10">1-10</option>
            <option value="11-25">11-25</option>
            <option value="26-100">26-100</option>
            <option value="100+">100+</option>
          </select>
          {renderFieldError('teamSize')}
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-slate-700" htmlFor="message">
          What should we improve first?
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={leadForm.message}
          onChange={handleLeadChange}
          className="mt-2 w-full rounded-[24px] border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          placeholder="Tell us where the team is losing time today and what a successful rollout should change."
        />
        {renderFieldError('message')}
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-slate-500">
          This front-end demo now validates the form and is ready to be connected to your CRM, webhook, or email workflow.
        </p>
        <Button type="submit" variant="secondary" size="lg" className="min-w-[190px]">
          {leadStatus === 'loading' ? 'Sending...' : 'Request demo'}
        </Button>
      </div>
    </form>
  )
}

export default LeadForm
