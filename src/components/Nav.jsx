import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner wrap">
        <a href="#" className="nav__brand">
          YM
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__socials">
          <a href="https://www.linkedin.com/in/yamanmalik/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <img src="/assets/linkedin-white.png" width="20" height="20" alt="LinkedIn" />
          </a>
          <a href="https://github.com/yamanmalik" aria-label="GitHub" target="_blank" rel="noreferrer">
            <img src="/assets/github.png" width="20" height="20" alt="GitHub" />
          </a>
        </div>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
