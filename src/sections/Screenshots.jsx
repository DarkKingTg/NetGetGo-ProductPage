// src/sections/Screenshots.jsx
// Product screenshots carousel using Swiper.js
// Install: npm install swiper

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

// Swiper core CSS imported in main.jsx
// 'swiper/css'
// 'swiper/css/navigation'
// 'swiper/css/pagination'

const screenshots = [
  {
    id:          1,
    title:       'Main Dashboard',
    description: 'Get a complete overview of your business at a glance.',
    bg:          'scr-bg--1',
    stats: [
      { label: 'Total Revenue', value: '₹8.4M' },
      { label: 'Active Users',  value: '3,291'  },
      { label: 'Uptime',        value: '99.9%'  },
    ],
  },
  {
    id:          2,
    title:       'Analytics Center',
    description: 'Deep dive into your data with real-time charts and reports.',
    bg:          'scr-bg--2',
    stats: [
      { label: 'Page Views',    value: '142K'  },
      { label: 'Conversions',   value: '4.8%'  },
      { label: 'Avg. Session',  value: '3m 42s' },
    ],
  },
  {
    id:          3,
    title:       'Client Management',
    description: 'Manage all your clients, contacts, and deals in one place.',
    bg:          'scr-bg--3',
    stats: [
      { label: 'Total Clients', value: '1,847' },
      { label: 'Active Deals',  value: '284'   },
      { label: 'Win Rate',      value: '68%'   },
    ],
  },
  {
    id:          4,
    title:       'Automation Builder',
    description: 'Build powerful workflows without writing a single line of code.',
    bg:          'scr-bg--4',
    stats: [
      { label: 'Active Flows',  value: '47'    },
      { label: 'Hours Saved',   value: '320/mo' },
      { label: 'Success Rate',  value: '99.2%' },
    ],
  },
]

function ScreenshotSlide({ item }) {
  return (
    <div className="scr__slide">
      {/* Mockup Window */}
      <div className={`scr__window ${item.bg}`}>

        <div className="scr__window-bar">
          <div className="scr__window-dots">
            <span></span><span></span><span></span>
          </div>
          <div className="scr__window-title">{item.title}</div>
        </div>

        <div className="scr__window-body">
          {/* Sidebar */}
          <div className="scr__win-sidebar">
            {['Home', 'Analytics', 'Clients', 'Flows', 'Settings'].map((nav, i) => (
              <div key={nav} className={`scr__win-nav ${i === 1 ? 'scr__win-nav--active' : ''}`}>
                {nav}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="scr__win-content">
            <div className="scr__win-heading">{item.title}</div>
            <div className="scr__win-stats">
              {item.stats.map((stat) => (
                <div key={stat.label} className="scr__win-stat">
                  <span className="scr__win-stat-val">{stat.value}</span>
                  <span className="scr__win-stat-lbl">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="scr__win-chart">
              {[50, 70, 45, 85, 60, 95, 75, 55, 80, 65].map((h, i) => (
                <div
                  key={i}
                  className={`scr__win-bar ${i === 5 ? 'scr__win-bar--peak' : ''}`}
                  style={{ '--h': `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Caption */}
      <div className="scr__caption">
        <h3 className="scr__caption-title">{item.title}</h3>
        <p className="scr__caption-desc">{item.description}</p>
      </div>
    </div>
  )
}

function Screenshots() {
  return (
    <section id="screenshots" className="screenshots section section--alt">
      <Container>
        <SectionTitle
          label="Screenshots"
          title="See NetJetGo in action"
          subtitle="A closer look at the powerful tools inside your NetJetGo dashboard."
        />
      </Container>

      {/* Swiper — full width outside Container intentionally */}
      <div className="screenshots__slider reveal">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.15}
          centeredSlides
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          loop
          breakpoints={{
            640:  { slidesPerView: 1.3 },
            1024: { slidesPerView: 1.6 },
            1280: { slidesPerView: 1.8 },
          }}
          className="scr__swiper"
        >
          {screenshots.map((item) => (
            <SwiperSlide key={item.id}>
              <ScreenshotSlide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Screenshots