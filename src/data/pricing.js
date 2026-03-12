// src/data/pricing.js

const pricing = [
  {
    id: 1,
    name: 'Starter',
    price: '₹999',
    period: 'per month',
    description: 'Perfect for small businesses just getting started.',
    featured: false,
    cta: 'Get Started',
    features: [
      'Up to 5 users',
      '10 GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
  },
  {
    id: 2,
    name: 'Growth',
    price: '₹2,499',
    period: 'per month',
    description: 'For growing teams that need more power and flexibility.',
    featured: true,
    cta: 'Start Free Trial',
    features: [
      'Up to 25 users',
      '50 GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team collaboration',
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored for you',
    description: 'For large organizations with custom requirements.',
    featured: false,
    cta: 'Contact Sales',
    features: [
      'Unlimited users',
      'Unlimited storage',
      'Full analytics suite',
      'Dedicated support',
      'API access',
      'Custom integrations',
      'SLA guarantee',
      'On-premise option',
    ],
  },
]

export default pricing