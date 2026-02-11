import './About.scss';

export default function About() {
  return (
    <main className="about">
      <div className="about__container">
        <h1 className="about__title">About Me</h1>

        <p className="about__intro">
          I'm <strong>Oleksandr Ivanchenko</strong>, a Full Stack Developer with a background in game development and project management. I started in gamedev in 2022, led teams as a PM/Team Lead in 2023, and have since transitioned into full-stack development — building automation systems and AI-powered applications from concept to deployment.
        </p>

        <h2 className="about__subtitle">My Journey</h2>

        <div className="about__section">
          <h3 className="about__period">2024-Present: Full-Stack Development</h3>
          <p className="about__text">
            Design and deploy <strong>end-to-end automation systems</strong> with Node.js, databases, and AI integration.
          </p>
          <p className="about__text"><strong>Recent projects:</strong></p>
          <ul className="about__list">
            <li><strong>SmartTender Bot</strong> — automated tender processing with Excel uploads, Puppeteer browser automation, and 3 databases managing real-time data flow</li>
            <li><strong>Google Sheets + Telegram Bot</strong> — eliminated manual reporting for managers through automated sync</li>
            <li><strong>AI Audio Transcription System</strong> — converts call recordings into structured text with ~95% accuracy, outperforming standard services</li>
          </ul>
        </div>

        <div className="about__section">
          <h3 className="about__period">2023-2024: Frontend Development</h3>
          <ul className="about__list">
            <li>Shifted to web development, building a <strong>marketplace platform for services</strong> with Next.js</li>
            <li>Focused on UI/UX implementation and client-side architecture</li>
          </ul>
        </div>

        <div className="about__section">
          <h3 className="about__period">2022-2023: Game Development & Project Management</h3>
          <ul className="about__list">
            <li>Worked as <strong>PM/Team Lead</strong>, building and managing cross-functional teams</li>
            <li>Conducted technical and creative interviews, hired designers, artists, and developers</li>
            <li>Created task breakdown systems and distributed work across disciplines</li>
            <li>Designed player surveys and feedback systems for graphics selection and game design decisions</li>
          </ul>
        </div>

        <div className="about__section">
          <h3 className="about__subtitle">My Approach</h3>
          <p className="about__text">
            I specialize in <strong>automation and AI integration</strong> — combining Node.js, Puppeteer, OpenAI, Telegram API, and database design to build systems that run autonomously and handle failures gracefully.
          </p>
          <p className="about__text">
            <strong>Reliability over cleverness.</strong> I build modular architectures, write defensive code, and design systems that recover from failure without human intervention.
          </p>
          <p className="about__text">
            Currently focused on <strong>backend automation, AI workflows, and scalable system design</strong>. Always looking for ways to make processes simpler, faster, and more resilient.
          </p>
        </div>
      </div>
    </main>
  );
}