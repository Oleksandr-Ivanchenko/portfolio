
import './About.scss';

export default function About() {
  return (
    <main className="about">
      <div className="about__container">
        <h1 className="about__title">About Me</h1>

        <p className="about__text">
          I’m <strong>Oleksandr Ivanchenko</strong>, a <strong>Full Stack Developer</strong> and former 
          <strong> Project Manager</strong> passionate about building efficient, automated systems and 
          clean, scalable architectures. My work blends <strong>frontend precision</strong> with 
          <strong> backend logic</strong> — from crafting UI/UX in React to orchestrating server-side automation with Node.js.
        </p>

        <p className="about__text">
          Over the last few years, I’ve worked on <strong>commercial games, web apps,</strong> and 
          <strong> automation tools</strong> — leading teams, integrating APIs, and designing systems that connect AI, 
          browser automation, and business logic into one streamlined flow.
        </p>

        <p className="about__text">
          My recent focus is on <strong>automation and AI integration</strong> — using tools like 
          Puppeteer, FFmpeg, OpenAI, and Telegram API to create smart, self-managed environments.
          I believe in reliability, modularity, and making systems that can handle failure gracefully.
        </p>

        <p className="about__text">
          Outside of development, I’m deeply interested in <strong>system design, workflow automation,</strong> 
          and continuous improvement — always looking for ways to make both code and processes simpler and more effective.
        </p>
      </div>
    </main>
  );
}
