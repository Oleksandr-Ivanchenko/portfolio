import React from 'react';

export default function Contact() {
  return (
    <main className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Contact Me</h1>
        <p className="contact__text">
          I'm open to collaboration, consulting, and technical leadership. Feel free to reach out via:
        </p>

        <ul className="contact__list">
          <li className="contact__item">
            <strong>Email:</strong>{' '}
            <a href="mailto:oleksandr.ivanchenko.dev@gmail.com" className="contact__link">
              oleksandr.ivanchenko.dev@gmail.com
            </a>
          </li>
          <li className="contact__item">
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/Oleksandr-Ivanchenko" target="_blank" className="contact__link">
              github.com/Oleksandr-Ivanchenko
            </a>
          </li>
          <li className="contact__item">
            <strong>Telegram:</strong>{' '}
            <a href="https://t.me/your_username" target="_blank" className="contact__link">
              @your_username
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
