import { useEffect, useState } from 'react'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import useToggle from '../hooks/useToggle'
import '../styles/navbar.css'

const navLinks = [
  { name: 'Overview', href: '#product' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
]

function Navbar() {
  const { value: menuOpen, toggle: toggleMenu, setFalse: closeMenu } = useToggle(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHash, setActiveHash] = useState('#hero')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) closeMenu()
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [closeMenu])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['#hero', ...navLinks.map((item) => item.href)]
      .map((selector) => document.querySelector(selector))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveHash(`#${visibleEntry.target.id}`)
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.25, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => closeMenu()
  const shellClasses = isScrolled
    ? 'border border-white/70 bg-white/85 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]'
    : 'border border-transparent bg-white/55 backdrop-blur-lg dark:bg-slate-900/50'

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex w-full items-center justify-between rounded-full px-4 py-3 transition duration-300 sm:px-5 ${shellClasses}`}>
          

          <span className="navbar__logo">
            <img src="./src/assets/icons/logo-text.png" alt="NetJetGo logo" />
          </span>
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-2 rounded-full bg-white/75 px-2 py-2 ring-1 ring-slate-900/6">
              {navLinks.map((item) => {
                const isActive = activeHash === item.href

                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition ${isActive
                          ? 'bg-ink text-white shadow-lg shadow-slate-900/10'
                          : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900'
                        }`}
                    >
                      {item.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button href="#contact" variant="outline" size="sm">
              Talk to sales
            </Button>
            <Button href="#pricing" variant="secondary" size="sm">
              Book a demo
            </Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/70 bg-white/85 text-slate-900 transition hover:border-slate-400 lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mx-auto mt-3 max-w-7xl px-4 transition duration-300 sm:px-6 lg:hidden ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
      >
        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-2">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900"
                    onClick={handleNavClick}
                  >
                    <span>{item.name}</span>
                    <span className="text-slate-400">/</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Theme</span>
              <ThemeToggle />
            </div>
            <Button href="#contact" variant="outline" size="md" onClick={handleNavClick}>
              Talk to sales
            </Button>
            <Button href="#pricing" variant="secondary" size="md" onClick={handleNavClick}>
              Book a demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
