import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">© {new Date().getFullYear()} Oleksandr Ivanchenko. All rights reserved.</p>
        <div className="footer__links">
          <a href="https://github.com/Oleksandr-Ivanchenko" target="_blank" className="footer__link">GitHub</a>
          <a href="mailto:oleksandr.ivanchenko.dev@gmail.com" className="footer__link">Email</a>
        </div>
      </div>
    </footer>
  );
}
