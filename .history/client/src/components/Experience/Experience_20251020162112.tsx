import React from 'react';
import './Experience.scss';

const experiences = [
  {
    role: 'Fullstack Engineer / Architect',
    company: 'NDA',
    period: '2022 — Present',
    details: [
      'Architected resilient systems with modular pipelines and fallback logic',
      'Integrated Telegram API, FFmpeg, and OpenAI for audio bots and automation',
      'Led technical decisions and acted as the sole engineering partner to business',
    ],
  },
  {
    role: 'Automation Developer',
    company: 'Freelance / Product Teams',
    period: '2020 — 2022',
    details: [
      'Built browser automation with Puppeteer and robust selector logic',
      'Implemented CI/CD pipelines and error logging systems',
      'Created bots for price tracking, parsing, and structured data delivery',
    ],
  },
];

export default function Experience() {
  return (
    <main className="experience">
      <div className="experience__container">
        <h1 className="experience__title">Experience</h1>
        <p className="experience__intro">
          My journey as a system-minded engineer — focused on automation, architecture, and clarity.
        </p>

        <div className="experience__list">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="experience__item">
              <h2 className="experience__item-role">{exp.role}</h2>
              <p className="experience__item-meta">
                <span className="experience__item-company">{exp.company}</span> ·{' '}
                <span className="experience__item-period">{exp.period}</span>
              </p>
              <ul className="experience__item-details">
                {exp.details.map((detail) => (
                  <li key={detail} className="experience__item-point">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
