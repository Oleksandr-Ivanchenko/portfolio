import React from 'react';
import './Experience.scss';

const experiences = [
  {
    role: 'Fullstack Engineer',
    company: 'NDA Projects',
    period: '10/2024 — Present',
    details: [
      'Built a Telegram bot for trading: resilient price parsing, DOM state control, false trigger prevention, logging, and fallback messaging',
      'Developed a manager-facing bot with table output: automated data collection, model-based grouping, statistics generation, compact JSON output, and performance optimization',
      'Created an audio processing bot: FFmpeg-based preprocessing, chunked transcription, Whisper/OpenAI integration, and robust Telegram API handling with fallback logic',
      'Designed system architecture with transparent control, scalable pipelines, and fault-tolerant error handling',
      'Acted as technical lead: made architectural decisions, documented bugs, formulated tracker tasks, and proposed engineering improvements',
    ]
  },
  {
    role: 'Product Manager',
    company: 'Edev',
    period: '10/2023 — 9/2024',
    details: [
      'Successfully led the development of multiple games and web applications from concept to launch, maintaining high quality even with extended timelines.',
      'Frontend Development: Built user interfaces for games and web apps using JavaScript, React, and CSS, collaborating closely with designers to create interactive and responsive UIs.',
      
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
