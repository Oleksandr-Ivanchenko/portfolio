import React from 'react';

const skills = [
  // --- Core Tech ---
  'JavaScript (ES6+) / TypeScript / React / Next.js',
  'HTML5 / CSS3 / Sass (SCSS) / Tailwind CSS / BEM',
  'Node.js / Express / REST API / WebSocket',
  'SQL / SQLite / Data pipelines / JSON',

  // --- Dev & Automation ---
  'Puppeteer / FFmpeg / Telegram API / OpenAI API',
  'Docker / PM2 / CI/CD pipelines / Nginx',
  'Error handling / Logging / Fallback logic / Caching',
  'System architecture / Automation / AI integration',

  // --- Tools & Environment ---
  'Git / GitHub / GitLab / NVM / PNPM / Yarn / NPM',
  'Chrome DevTools / Visual Studio Code',
  'Figma / Photoshop / Construct / SDK Integration',

  // --- Project & Process ---
  'Scrum / Kanban / Jira / Confluence / Documentation',
  'Cross-team collaboration / QA / SEO / Localization',
];

export default function Skills() {
  return (
    <main className="skills">
      <div className="skills__container">
        <h1 className="skills__title">Skills & Tools</h1>
        <p className="skills__intro">
          I build resilient web systems with React, Node.js, and automation tools —
          integrating AI, browser automation, and CI/CD to deliver reliable and scalable apps.
        </p>

        <ul className="skills__list">
          {skills.map((skill) => (
            <li key={skill} className="skills__item">{skill}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
