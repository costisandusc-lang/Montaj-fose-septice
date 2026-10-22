import { Building2, ClipboardList, Droplets, House, Phone, Shovel, Wrench } from 'lucide-react'

export const PHONES = [
  { tel: '+40755253334', label: '0755 253 334' },
  { tel: '+40711099920', label: '0711 099 920' },
]

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="tag">Montaj profesional • Lucrări rapide</span>
          <h1>
            Soluții complete pentru <span>fose septice</span>
          </h1>
          <p>Montăm fose septice și sisteme de epurare pentru case, pensiuni și proprietăți fără acces la canalizare.</p>
          <div className="buttons">
            <a href="#contact" className="button button-primary">
              Cere o ofertă
            </a>
            {PHONES.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="button button-secondary">
                <Phone size={16} aria-hidden="true" />
                {p.label}
              </a>
            ))}
          </div>
          <div className="hero-note">
            <span>Montaj fose septice</span>
            <span>Program Luni–Sâmbătă, 24/7</span>
            <span>Contact direct</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const services = [
  { icon: Wrench, title: 'Montaj fose septice', text: 'Instalare profesională a foselor septice, adaptată terenului și necesităților proprietății.' },
  { icon: Shovel, title: 'Săpături și excavare', text: 'Pregătirea terenului și realizarea excavației necesare pentru instalarea sistemului.' },
  { icon: Droplets, title: 'Sisteme de epurare', text: 'Soluții pentru tratarea apelor uzate și gestionarea eficientă a acestora.' },
  { icon: House, title: 'Case și gospodării', text: 'Sisteme dimensionate pentru locuințe, gospodării și proprietăți individuale.' },
  { icon: Building2, title: 'Pensiuni și spații comerciale', text: 'Soluții pentru proprietăți cu un necesar mai mare de gestionare a apelor uzate.' },
  { icon: ClipboardList, title: 'Consultanță', text: 'Te ajutăm să alegi soluția potrivită în funcție de teren și necesitățile proprietății.' },
]

export function Services() {
  return (
    <section id="servicii" className="site-section services">
      <div className="container">
        <div className="section-title">
          <small>Serviciile noastre</small>
          <h2>Tot ce ai nevoie pentru instalația ta</h2>
          <p>Ne ocupăm de lucrări de la pregătirea terenului până la instalarea și punerea în funcțiune a sistemului.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="service">
              <div className="service-icon">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="despre" className="site-section about-section">
      <div className="container">
        <div className="about">
          <div className="about-image" role="img" aria-label="Montaj fosă septică pe teren" />
          <div className="about-text">
            <small className="eyebrow">De ce noi?</small>
            <h2>Lucrări făcute corect de la început.</h2>
            <p>
              O fosă septică trebuie instalată corect pentru a funcționa eficient pe termen lung. Ne ocupăm de întregul
              proces și adaptăm soluția la condițiile terenului.
            </p>
            <ul className="checks">
              <li>Montaj profesional</li>
              <li>Lucrări rapide și organizate</li>
              <li>Soluții adaptate proprietății</li>
              <li>Consultanță înainte de lucrare</li>
            </ul>
            <a href="#contact" className="button button-primary">
              Solicită o ofertă
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { value: '100+', label: 'Lucrări realizate' },
  { value: '5+', label: 'Ani de experiență' },
  { value: '24h', label: 'Răspuns rapid' },
  { value: '100%', label: 'Seriozitate' },
]

export function Stats() {
  return (
    <section className="site-section stats" aria-label="Cifre">
      <div className="container">
        <div className="stat-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  { title: 'Discutăm', text: 'Ne spui ce ai nevoie și aflăm detaliile proprietății.' },
  { title: 'Evaluăm', text: 'Stabilim soluția potrivită pentru teren și necesarul tău.' },
  { title: 'Montăm', text: 'Executăm lucrările și instalăm sistemul.' },
  { title: 'Finalizăm', text: 'Verificăm instalația și îți explicăm modul de utilizare.' },
]

export function Process() {
  return (
    <section id="proces" className="site-section process-section">
      <div className="container">
        <div className="section-title">
          <small>Procesul nostru</small>
          <h2>De la prima discuție la lucrarea finalizată</h2>
        </div>
        <ol className="process-grid">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <div className="step-number" aria-hidden="true">
                {i + 1}
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Cta() {
  return (
    <section className="cta">
      <div className="cta-box">
        <h2>Ai nevoie de o fosă septică?</h2>
        <p>Contactează-ne pentru o ofertă și discutăm despre soluția potrivită pentru proprietatea ta.</p>
        <a href="#contact" className="button button-primary">
          Cere o ofertă gratuită
        </a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        © 2026 <strong>MONTAJ FOSE SEPTICE</strong>. Toate drepturile rezervate.
      </p>
    </footer>
  )
}
