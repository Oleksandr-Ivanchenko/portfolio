import { useEffect, useRef, useState } from 'react';
import './Contact.scss';

const CONTACTS = [
  {
    id: 'email',
    label: 'Email',
    value: 'ivanchenko.dev.ua@gmail.com',
    href: 'mailto:ivanchenko.dev.ua@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5.5L10 11l8-5.5M2 5.5h16v11H2V5.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: '#4ECDC4',
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Oleksandr-Ivanchenko',
    href: 'https://github.com/Oleksandr-Ivanchenko',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58 2 2 5.67 2 10.2c0 3.63 2.29 6.71 5.47 7.8.4.07.55-.18.55-.39v-1.37c-2.23.5-2.7-1.1-2.7-1.1-.36-.95-.89-1.2-.89-1.2-.73-.51.05-.5.05-.5.8.06 1.23.85 1.23.85.71 1.26 1.87.9 2.32.69.07-.53.28-.9.51-1.1-1.78-.21-3.65-.92-3.65-4.1 0-.9.31-1.64.83-2.22-.08-.21-.36-1.05.08-2.18 0 0 .67-.22 2.2.84a7.5 7.5 0 0 1 2-.28c.68 0 1.36.09 2 .28 1.53-1.06 2.2-.84 2.2-.84.44 1.13.16 1.97.08 2.18.52.58.83 1.32.83 2.22 0 3.19-1.88 3.89-3.67 4.1.29.25.54.76.54 1.52v2.26c0 .21.14.47.55.39C15.71 16.91 18 13.83 18 10.2 18 5.67 14.42 2 10 2z" fill="currentColor" />
      </svg>
    ),
    accent: '#A78BFA',
    external: true,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    value: '@IvAlxndr',
    href: 'https://t.me/IvAlxndr',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.5 3.5L2 9.17l5.5 2.08 2 5.75 2.5-3 4 3 1.5-13.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 11.25l8-7.75" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    accent: '#60A5FA',
    external: true,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleCopy = (value, id) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <main className={`contact ${mounted ? 'contact--mounted' : ''}`}>
      {/* Ambient blobs */}
      <div className="contact__blob contact__blob--teal" />
      <div className="contact__blob contact__blob--purple" />
      <div className="contact__grid" />

      <div className="contact__container">

        {/* Header */}
        <div className="contact__header">
          <span className="contact__eyebrow">
            <span className="contact__eyebrow-dot" />Let's talk
          </span>
          <h1 className="contact__title">Get in touch</h1>
          <p className="contact__text">
            Open to collaboration, consulting, and technical leadership.
            Pick the channel that suits you best.
          </p>
        </div>

        {/* Cards */}
        <ul className="contact__list">
          {CONTACTS.map((item, i) => (
            <ContactCard
              key={item.id}
              item={item}
              index={i}
              copied={copied === item.id}
              onCopy={() => handleCopy(item.value, item.id)}
            />
          ))}
        </ul>

        {/* Availability badge */}
        <AvailabilityBadge />
      </div>
    </main>
  );
}

interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  accent: string;
  external: boolean;
}

function ContactCard({ item, index, copied, onCopy }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <li
      ref={ref}
      className={`contact__item ${inView ? 'contact__item--visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="contact__item-glow" style={{ background: item.accent, opacity: hovered ? 0.1 : 0.03 }} />

      <div className="contact__item-icon" style={{ color: item.accent, borderColor: `${item.accent}30`, background: `${item.accent}10` }}>
        {item.icon}
      </div>

      <div className="contact__item-body">
        <span className="contact__item-label">{item.label}</span>
        <a
          href={item.href}
          className="contact__item-value"
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          style={{ color: item.accent }}
        >
          {item.value}
        </a>
      </div>

      <div className="contact__item-actions">
        <button
          className={`contact__copy-btn ${copied ? 'contact__copy-btn--done' : ''}`}
          onClick={onCopy}
          title="Copy"
          style={{ '--accent': item.accent }}
        >
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M2 10V2h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          )}
        </button>

        <a
          href={item.href}
          className="contact__arrow-btn"
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          style={{ '--accent': item.accent }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </li>
  );
}

function AvailabilityBadge() {
  const [ref, inView] = useInView(0.3);
  return (
    <div ref={ref} className={`contact__availability ${inView ? 'contact__availability--visible' : ''}`}>
      <span className="contact__availability-dot" />
      <span className="contact__availability-text">Available for new projects — typically responds within 24h</span>
    </div>
  );
}