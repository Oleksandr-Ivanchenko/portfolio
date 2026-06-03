import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const LINKS = [
  { href: 'https://github.com/Oleksandr-Ivanchenko', label: 'GitHub', external: true },
  { href: 'mailto:ivanchenko.dev.ua@gmail.com',       label: 'Email',  external: false },
];

const NAV = [
  { to: '/about',      label: 'About' },
  { to: '/projects',   label: 'Projects' },
  { to: '/skills',     label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact',    label: 'Contact' },
];

function useInView<T extends Element = HTMLElement>(threshold = 0.2): [import('react').RefObject<T>, boolean] {
  const ref = useRef<T | null>(null);
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
  return [ref as import('react').RefObject<T>, inView];
}

export default function Footer() {
  const [ref, inView] = useInView<HTMLElement>(0.15);

  return (
    <footer ref={ref} className={`footer ${inView ? 'footer--visible' : ''}`}>
      {/* Top divider line */}
      <div className="footer__line" />

      <div className="footer__container">

        {/* Logo + tagline */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-dot" />
            <span className="footer__logo-name">Ivanchenko</span>
            <span className="footer__logo-role">dev</span>
          </Link>
          <p className="footer__tagline">
            System-minded fullstack engineer.<br />
            Building resilient systems since 2022.
          </p>
        </div>

        {/* Nav */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <span className="footer__nav-label">Navigate</span>
          <ul className="footer__nav-list">
            {NAV.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="footer__nav-link">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer__contact">
          <span className="footer__nav-label">Contact</span>
          <ul className="footer__contact-list">
            {LINKS.map(({ href, label, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="footer__contact-link"
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  {label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Oleksandr Ivanchenko. All rights reserved.
          </p>
          <div className="footer__status">
            <span className="footer__status-dot" />
            <span className="footer__status-text">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}