// src/sections/ProductDemo.jsx
// Product showcase — left: text + CTA, right: animated dashboard UI
// No video dependency — pure CSS mockup for professional look

import Button from '../components/Button'
import Container from '../components/Container'

const tabs = [
  {
    id: 'analytics',
    label: 'Analytics',
    icon: '📊',
    title: 'Real-time business analytics',
    description:
      'Track every metric that matters. Revenue, users, performance — all live on one dashboard.',
  },
  {
    id: 'automation',
    label: 'Automation',
    icon: '⚡',
    title: 'Automate your workflows',
    description:
      'Set up powerful automations in minutes. Let NetJetGo handle the repetitive work for you.',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: '🔗',
    title: 'Connect your entire stack',
    description:
      'Plug into 50+ tools your team already uses. Everything synced, nothing missed.',
  },
]

import { useState } from 'react'

function ProductDemo() {
  const [activeTab, setActiveTab] = useState('analytics')
  const active = tabs.find((t) => t.id === activeTab)

  return (
    <section id="demo" className="demo section">
      <Container>

        <div className="demo__grid">

          {/* ── Left — Text Content ───────── */}
          <div className="demo__content reveal">

            <span className="section-label">Product Demo</span>

            <h2 className="demo__title">{active.title}</h2>
            <p className="demo__description">{active.description}</p>

            {/* Feature Tabs */}
            <div className="demo__tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`demo__tab ${activeTab === tab.id ? 'demo__tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="demo__tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="demo__actions">
              <Button variant="primary" size="md" href="#pricing">
                Start Free Trial
              </Button>
              <Button variant="outline" size="md" href="#contact">
                Book a Demo
              </Button>
            </div>

          </div>

          {/* ── Right — UI Mockup ─────────── */}
          <div className="demo__visual reveal stagger-2">
            <div className="demo__mockup">

              {/* Mockup Header */}
              <div className="demo__mockup-bar">
                <div className="demo__mockup-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="demo__mockup-url">netjetgo.app/dashboard</div>
              </div>

              {/* Mockup Sidebar */}
              <div className="demo__mockup-body">
                <div className="demo__sidebar">
                  <div className="demo__sidebar-logo">NJ</div>
                  {['Dashboard', 'Analytics', 'Clients', 'Reports', 'Settings'].map((item, i) => (
                    <div
                      key={item}
                      className={`demo__sidebar-item ${i === 1 ? 'demo__sidebar-item--active' : ''}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Main Content Area */}
                <div className="demo__main">

                  <div className="demo__main-header">
                    <span className="demo__main-title">Overview</span>
                    <span className="demo__main-date">March 2026</span>
                  </div>

                  {/* Stat Row */}
                  <div className="demo__stats">
                    {[
                      { label: 'Revenue',  value: '₹4.2M', up: true  },
                      { label: 'Clients',  value: '1,847', up: true  },
                      { label: 'Tasks',    value: '94%',   up: true  },
                    ].map((stat) => (
                      <div key={stat.label} className="demo__stat">
                        <span className="demo__stat-val">{stat.value}</span>
                        <span className="demo__stat-lbl">{stat.label}</span>
                        <span className="demo__stat-tag">↑ Live</span>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="demo__chart">
                    <div className="demo__chart-label">Performance — Last 7 days</div>
                    <div className="demo__chart-bars">
                      {[40, 65, 45, 80, 55, 90, 72].map((h, i) => (
                        <div
                          key={i}
                          className={`demo__chart-bar ${i === 5 ? 'demo__chart-bar--peak' : ''}`}
                          style={{ '--bar-h': `${h}%` }}
                        ></div>
                      ))}
                    </div>
                    <div className="demo__chart-days">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                        <span key={d}>{d}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  )
}

export default ProductDemo