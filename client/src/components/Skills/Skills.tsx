
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

        <div className="skills__grid">
          <section className="skills__group">
            <h2 className="skills__subtitle">Frontend</h2>
            <ul className="skills__list">
              {skills.frontend.map((skill) => (
                <li key={skill} className="skills__item">{skill}</li>
              ))}
            </ul>
          </section>

          <section className="skills__group">
            <h2 className="skills__subtitle">Backend</h2>
            <ul className="skills__list">
              {skills.backend.map((skill) => (
                <li key={skill} className="skills__item">{skill}</li>
              ))}
            </ul>
          </section>

          <section className="skills__group">
            <h2 className="skills__subtitle">DevOps</h2>
            <ul className="skills__list">
              {skills.devops.map((skill) => (
                <li key={skill} className="skills__item">{skill}</li>
              ))}
            </ul>
          </section>

          <section className="skills__group">
            <h2 className="skills__subtitle">Tools</h2>
            <ul className="skills__list">
              {skills.tools.map((skill) => (
                <li key={skill} className="skills__item">{skill}</li>
              ))}
            </ul>
          </section>

          <section className="skills__group">
            <h2 className="skills__subtitle">Management</h2>
            <ul className="skills__list">
              {skills.management.map((skill) => (
                <li key={skill} className="skills__item">{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
