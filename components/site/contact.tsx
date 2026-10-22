'use client'

import { useState } from 'react'
import { PHONES } from './sections'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="site-section contact">
      <div className="container">
        <div className="section-title">
          <small>Contact</small>
          <h2>Hai să discutăm despre proiectul tău</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h2>MONTAJ FOSE SEPTICE</h2>
            <p>Suntem disponibili pentru întrebări, estimări și programări.</p>
            <div className="contact-item">
              <strong>Telefon</strong>
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} style={{ display: 'block' }}>
                  {p.label}
                </a>
              ))}
            </div>
            <div className="contact-item">
              <strong>Locație</strong>
              <a
                className="underline-link"
                href="https://www.google.com/maps?q=45.0313585,24.9759552"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vezi locația pe Google Maps
              </a>
            </div>
            <div className="contact-item">
              <strong>Program</strong>
              Luni – Sâmbătă
              <br />
              24/7
            </div>
          </div>

          <div className="contact-form">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="form-row">
                <label className="sr-only" htmlFor="name">
                  Numele tău
                </label>
                <input id="name" name="name" type="text" placeholder="Numele tău" autoComplete="name" required />
                <label className="sr-only" htmlFor="phone">
                  Telefon
                </label>
                <input id="phone" name="phone" type="tel" placeholder="Telefon" autoComplete="tel" required />
              </div>
              <label className="sr-only" htmlFor="service">
                Serviciu
              </label>
              <select id="service" name="service" defaultValue="Montaj fose septice" required>
                <option value="Montaj fose septice">Montaj fose septice</option>
              </select>
              <label className="sr-only" htmlFor="message">
                Descriere proiect
              </label>
              <textarea id="message" name="message" placeholder="Descrie pe scurt proiectul..." />
              <button type="submit" className="button button-primary submit">
                Trimite solicitarea
              </button>
              <div className="form-message" role="status" aria-live="polite">
                {submitted && 'Pentru a trimite solicitarea, sună la 0755 253 334 sau 0711 099 920.'}
              </div>
            </form>
          </div>
        </div>
        <div className="map-widget">
          <iframe
            title="Locația MONTAJ FOSE SEPTICE pe Google Maps"
            src="https://www.google.com/maps?q=45.0313585,24.9759552&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
