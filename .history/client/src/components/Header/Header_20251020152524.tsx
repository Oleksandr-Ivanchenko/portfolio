import React, { useState } from 'react';


export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About me' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills & Tools' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div href="/" className="header__logo">
          Oleksandr Ivanchenko
        </>

        <button
          className="header__burger"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="header__burger-line" />
          <span className="header__burger-line" />
          <span className="header__burger-line" />
        </button>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navItems.map(({ href, label }) => (
              <li key={href} className="header__nav-item">
                <Link href={href} className="header__nav-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
