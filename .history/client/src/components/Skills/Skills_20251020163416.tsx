import React from 'react';
import './Skills.scss';

const skills = {
  frontend: [
    'JavaScript (ES6+)',
    'TypeScript',
    'React / Next.js',
    'HTML5 / CSS3 / Sass (SCSS)',
    'Tailwind CSS / BEM',
    'Redux Toolkit / Context API',
    'Responsive & Adaptive Layouts',
  ],
  backend: [
    'Node.js / Express',
    'REST API / WebSocket',
    'SQLite / SQL',
    'Puppeteer automation',
    'Telegram API / OpenAI API / FFmpeg',
  ],
  devops: [
    'Docker / PM2',
    'CI/CD pipelines',
    'Nginx setup',
    'Error logging / Fallback logic / Caching',
  ],
  tools: [
    'Git / GitHub / GitLab',
    'NVM / PNPM / Yarn / NPM',
    'Chrome DevTools / VS Code',
    'Figma / Photoshop / Construct',
    'SDK Integration / JSON / API Debugging',
  ],
  management: [
    'Scrum / Kanban',
    'Jira / Confluence',
    'Documentation & QA coordination',
    'SEO / Localization / Cross-team collaboration',
  ],
};

export default function Skills() {
  return (
    <main className="skills">
      <div className="skills__container">
        <h1 className="skills__title">Skills & Tools</h1>
        <p className="skills__intro">
          I design and build modern, scalable systems with a strong focus on automation,
          clean architecture, and collaboration across teams.
        </p>

        <div className="skills__bio">
          <p>
            Detail-oriented Fullstack Engineer with 3+ years of experience building resilient web systems.
            Proficient in JavaScript, TypeScript, React, and scalable CSS frameworks like Sass and Tailwind.
            I follow SOLID, DRY, and KISS principles to ensure maintainable and transparent code.
          </p>
          <p>
            <strong>Education & Practice:</strong><br />
            Mate Academy (Frontend course: Git, HTML, CSS, JS, TS, React, Web, 2022)<br />
            FreeCodeCamp, Learn.javascript.ru, Reactjs.org<br />
            CodeWars, LeetCode, w3schools
          </p>
          <p>
            <strong>English level:</strong> Intermediate (B1)
          </p>
        </div>

        <div className="skills__grid">
          {/* твои секции Frontend, Backend, DevOps, Tools, Management */}
        </div>
      </div>
    </main>
  );
}