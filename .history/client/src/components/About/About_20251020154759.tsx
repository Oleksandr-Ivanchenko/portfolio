import React from 'react';
import './About.scss';
export default function About() {
  return (
    <main className="about">
      <div className="about__container">
        <h1 className="about__title">About Me</h1>

        <p className="about__text">
          I'm Oleksandr Ivanchenko — a fullstack engineer with a system mindset and a passion for automation, architecture, and AI integration. I work remotely on Polish and international projects, building resilient solutions that scale and stay transparent for teams.
        </p>

        <p className="about__text">
          My focus is on clean engineering, modular architecture, and developer experience. I value clarity, control, and flexibility — and I believe that good systems should be understandable not only to developers, but also to users and stakeholders.
        </p>

        <div className="about__highlights">
          <div className="about__highlight">
            <h3 className="about__highlight-title">💡 Engineering Style</h3>
            <p className="about__highlight-text">Structured, transparent, scalable. I build systems with clear pipelines and fallback logic.</p>
          </div>
          <div className="about__highlight">
            <h3 className="about__highlight-title">🧠 Mindset</h3>
            <p className="about__highlight-text">I treat complexity as a task to solve — not as a personal failure. Methodical and calm.</p>
          </div>
          <div className="about__highlight">
            <h3 className="about__highlight-title">🔧 Tools & Focus</h3>
            <p className="about__highlight-text">React, Node.js, Puppeteer, FFmpeg, Telegram bots, AI, CI/CD, fallback systems, logging.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
