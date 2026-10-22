'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const links = [
  { href: '#servicii', label: 'Servicii' },
  { href: '#despre', label: 'Despre noi' },
  { href: '#proces', label: 'Cum lucrăm' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="navbar">
        <a href="#" className="logo">
          MONTAJ <span>FOSE SEPTICE</span>
        </a>
        <button
          type="button"
          className="menu-button"
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
        <nav id="navigation" className={`site-nav${open ? ' active' : ''}`} aria-label="Navigare principală">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="tel:+40755253334" className="nav-button" onClick={close}>
            <Phone size={16} aria-hidden="true" />
            Sună acum
          </a>
        </nav>
      </div>
    </header>
  )
}
