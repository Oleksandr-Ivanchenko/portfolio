
import './Home.scss';

export default function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <h1 className="home__title">Oleksandr Ivanchenko</h1>
        <h2 className="home__subtitle">System-minded Fullstack Engineer</h2>
        <p className="home__description">
         I build resilient web systems with clean architecture, automation, and AI integration. My focus is on scalable engineering, transparent pipelines, and solutions that empower both developers and users.
        </p>

        <div className="home__actions">
          <a href="/projects" className="home__button">View Projects</a>
          <a href="/contact" className="home__button home__button--secondary">Contact Me</a>
        </div>
      </div>
    </main>
  );
}
