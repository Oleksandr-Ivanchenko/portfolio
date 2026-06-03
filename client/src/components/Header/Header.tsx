import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const NAV_ITEMS = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/projects',   label: 'Projects' },
  { href: '/skills',     label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact',    label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const [mounted,    setMounted]      = useState(false);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    if (mobileOpen) document.body.classList.add('menu-open');
    else document.body.classList.remove('menu-open');
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [mobileOpen]);

  return (
    <header
      className={[
        'header',
        scrolled    ? 'header--scrolled' : '',
        mobileOpen  ? 'header--open'     : '',
        mounted     ? 'header--mounted'  : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="header__inner">

        {/* Logo */}
        <Link to="/" className="header__logo" onClick={() => setMobileOpen(false)}>
          <span className="header__logo-dot" />
          <span className="header__logo-name">Ivanchenko</span>
          <span className="header__logo-role">dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {NAV_ITEMS.map(({ href, label }) => {
              const active = location.pathname === href;
              return (
                <li key={href} className="header__nav-item">
                  <Link
                    to={href}
                    className={`header__nav-link ${active ? 'header__nav-link--active' : ''}`}
                  >
                    {label}
                    <span className="header__nav-underline" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <Link to="/contact" className="header__cta">
          Let's talk
        </Link>

        {/* Burger */}
        <button
          className={`header__burger ${mobileOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className="header__burger-bar" />
          <span className="header__burger-bar" />
          <span className="header__burger-bar" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`header__mobile ${mobileOpen ? 'header__mobile--open' : ''}`}>
        <nav aria-label="Mobile navigation">
          <ul className="header__mobile-list">
            {NAV_ITEMS.map(({ href, label }, i) => {
              const active = location.pathname === href;
              return (
                <li
                  key={href}
                  className="header__mobile-item"
                  style={{ transitionDelay: mobileOpen ? `${i * 50 + 80}ms` : '0ms' }}
                >
                  <Link
                    to={href}
                    className={`header__mobile-link ${active ? 'header__mobile-link--active' : ''}`}
                  >
                    <span className="header__mobile-num">0{i + 1}</span>
                    <span className="header__mobile-label">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}