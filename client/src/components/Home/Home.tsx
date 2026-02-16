
import './Home.scss';
import { Link } from 'react-router-dom';

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
          <Link to="/projects" className="home__button">View Projects</Link>
          <Link to="/contact" className="home__button home__button--secondary">Contact Me</Link>
        </div>
      </div>
    </main>
  );
}
