import React from 'react';

const projects = [
  {
    title: 'Telegram Bot for Audio Transcription',
    description: 'Automated audio preprocessing with FFmpeg, chunked transcription, fallback messaging, and error logging.',
    tech: ['Node.js', 'FFmpeg', 'Telegram API', 'OpenAI'],
    link: '/projects/audio-bot',
  },
  {
    title: 'Price Sniper with Puppeteer',
    description: 'Resilient browser automation with fallback selectors, DOM state control, and anti-duplication logic.',
    tech: ['Puppeteer', 'TypeScript', 'CI/CD', 'Telegram'],
    link: '/projects/price-sniper',
  },
  {
    title: 'Speech Analytics MVP',
    description: 'Architected and simplified technical scope for a speech analytics system with modular pipeline and AI integration.',
    tech: ['React', 'Node.js', 'Whisper', 'Zod'],
    link: '/projects/speech-analytics',
  },
];

export default function Projects() {
  return (
    <main className="projects">
      <div className="projects__container">
        <h1 className="projects__title">Projects</h1>
        <p className="projects__intro">
          Here are some of the systems I've built or architected — focused on automation, resilience, and clarity.
        </p>

        <div className="projects__list">
          {projects.map((project) => (
            <div key={project.title} className="projects__item">
              <h2 className="projects__item-title">{project.title}</h2>
              <p className="projects__item-description">{project.description}</p>
              <ul className="projects__item-tech">
                {project.tech.map((tech) => (
                  <li key={tech} className="projects__item-tag">{tech}</li>
                ))}
              </ul>
              <a href={project.link} className="projects__item-link">View details →</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
