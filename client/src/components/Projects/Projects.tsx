import React from 'react';
import './Projects.scss';

const projects = [
  {
    title: 'Transcribe App',
    description: 'Full-stack app for audio transcription: upload audio files, process them with AssemblyAI, and view transcriptions in real time via a React interface.',
    tech: ['React', 'Vite', 'Express', 'AssemblyAI', 'Multer', 'Axios', 'dotenv'],
    link: '/projects/transcribe-app',
  },
  {
    title: 'SmartTender Bot',
    description: 'Full-stack tender automation: upload Excel files via a React interface, process data with Express, and perform automated actions using Puppeteer and Telegram integration.',
    tech: ['React', 'Vite', 'Express', 'Puppeteer', 'SQLite', 'Telegram API', 'Excel (.xlsx)'],
    link: '/projects/smarttender-bot',
  },
  {
    title: 'Telegram Product Bot',
    description: 'Telegram bot for searching products in Google Sheets, browsing by categories and brands, and answering user questions with AI assistance (Gemini).',
    tech: ['Node.js', 'Telegram API', 'Google Sheets API', 'AI (Gemini)', 'Axios', 'dotenv'],
    link: '/projects/telegram-product-bot',
  },
  // --- QPlaze projects ---
  {
    title: 'QPlaze Real Checkers',
    description: 'HTML5 online Checkers game built with real-time multiplayer logic and smooth browser performance.',
    tech: ['HTML5', 'JavaScript', 'WebSockets', 'Game Logic'],
    link: 'https://html5.qplaze.com/games/real_checkers/',
  },
  {
    title: 'QPlaze Real Chess',
    description: 'Interactive chess platform with real-time moves, AI integration for hints, and multiplayer functionality.',
    tech: ['HTML5', 'JavaScript', 'Chess Engine', 'WebSockets'],
    link: 'https://html5.qplaze.com/games/realchess/',
  },
  {
    title: 'QPlaze Real Baccarat',
    description: 'Online Baccarat game with real-time results and interactive interface for players.',
    tech: ['HTML5', 'JavaScript', 'Game Logic', 'WebSockets'],
    link: 'https://html5.qplaze.com/games/realBaccarat/',
  },
  {
    title: 'QPlaze Tractor Mania',
    description: 'Browser-based strategy and simulation game with interactive farm mechanics.',
    tech: ['HTML5', 'JavaScript', 'Game Logic', 'UI/UX Design'],
    link: 'https://html5.qplaze.com/games/tractorMania/',
  },
  {
    title: 'QPlaze Idle Farm Tycoon',
    description: 'Idle farming simulator with progressive gameplay, automation, and browser compatibility.',
    tech: ['HTML5', 'JavaScript', 'Game Logic', 'Progressive Web App'],
    link: 'https://html5.qplaze.com/games/idleFarmTycoon/',
  },
  // --- Marketplace ---
  {
    title: 'FDOUT Service Marketplace',
    description: 'Marketplace for services built with Next.js, featuring user profiles, listings, and seamless UI/UX.',
    tech: ['Next.js', 'React', 'Node.js', 'API Integration', 'Responsive Design'],
    link: 'https://fdout.pl/uk',
  },
  // --- EDEV projects ---
  {
    title: 'Sudoku Online',
    description: 'Web-based Sudoku game developed during PM and team lead role, coordinating developers and designers to deliver a smooth game experience.',
    tech: ['React', 'JavaScript', 'Game Logic', 'UI/UX'],
    link: 'https://sudoku.online/',
  },
  {
    title: 'Play Solitaire',
    description: 'Solitaire web game with multiple variants, animations, and responsive design, managed as PM and team lead.',
    tech: ['React', 'JavaScript', 'Animations', 'Game Logic', 'UI/UX'],
    link: 'https://playsolitaire.game/',
  },
  {
    title: 'Backgammon Clash (iOS)',
    description: 'Mobile Backgammon game published on App Store, developed under PM leadership with team coordination.',
    tech: ['iOS', 'Unity', 'Game Design', 'Team Leadership', 'PM'],
    link: 'https://apps.apple.com/us/app/backgammon-clash/id6754024403',
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
              <a href={project.link} className="projects__item-link" target="_blank" rel="noopener noreferrer">View details →</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
