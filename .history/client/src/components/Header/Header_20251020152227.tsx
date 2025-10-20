import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">Oleksandr Ivanchenko</a>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/" className="header__nav-link header__nav-link--active">Home</a>
            </li>
            <li className="header__nav-item">
              <a href="/about" className="header__nav-link">About me</a>
            </li>
            <li className="header__nav-item">
              <a href="/projects" className="header__nav-link">Projects</a>
            </li>
            <li className="header__nav-item">
              <a href="/contact" className="header__nav-link">Contact</a>
            </li>
             <li className="header__nav-item">
              <a href="/s" className="header__nav-link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
