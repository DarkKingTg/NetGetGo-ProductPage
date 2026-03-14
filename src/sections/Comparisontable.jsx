// src/sections/ComparisonTable.jsx
// Feature comparison table across Starter, Growth, Enterprise plans
// Uses: Container, SectionTitle components

import '../styles/comparisontable.css'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'

const features = [
  { name: 'Users',             starter: '5',    growth: '25',   enterprise: 'Unlimited' },
  { name: 'Storage',           starter: '10 GB', growth: '50 GB', enterprise: 'Unlimited' },
  { name: 'Analytics',         starter: true,   growth: true,   enterprise: true        },
  { name: 'API Access',        starter: false,  growth: true,   enterprise: true        },
  { name: 'Custom Integrations', starter: false, growth: true,  enterprise: true        },
  { name: 'Priority Support',  starter: false,  growth: true,   enterprise: true        },
  { name: 'Team Collaboration', starter: false, growth: true,   enterprise: true        },
  { name: 'Dedicated Manager', starter: false,  growth: false,  enterprise: true        },
  { name: 'SLA Guarantee',     starter: false,  growth: false,  enterprise: true        },
  { name: 'On-premise Option', starter: false,  growth: false,  enterprise: true        },
]

function CellValue({ value }) {
  if (value === true) {
    return (
      <svg className="table__check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    )
  }
  if (value === false) {
    return (
      <svg className="table__cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    )
  }
  return <span className="table__value">{value}</span>
}

function ComparisonTable() {
  return (
    <section id="comparison" className="comparison section section--alt">
      <Container>

        <SectionTitle
          label="Compare Plans"
          title="Find the right plan for you"
          subtitle="See exactly what is included in each plan before you decide."
        />

        <div className="table__wrapper reveal">
          <table className="table">
            <thead>
              <tr>
                <th className="table__th table__th--feature">Feature</th>
                <th className="table__th">Starter</th>
                <th className="table__th table__th--featured">
                  <span className="table__popular-badge">Most Popular</span>
                  Growth
                </th>
                <th className="table__th">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="table__row">
                  <td className="table__td table__td--feature">{row.name}</td>
                  <td className="table__td"><CellValue value={row.starter} /></td>
                  <td className="table__td table__td--featured"><CellValue value={row.growth} /></td>
                  <td className="table__td"><CellValue value={row.enterprise} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </Container>
    </section>
  )
}

export default ComparisonTable