
import './Home.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TITLE_SIZE = 48; // Adjust this value to change the font size

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className={"home" + (mounted ? ' home--mounted' : '')}>
      <div className="home__container">
        <h1 className="home__title">Oleksandr Ivanchenko</h1>
        <h2 className="home__subtitle">System-minded Fullstack Engineer</h2>
        <p className="home__description">
          I build resilient web systems with clean architecture, automation, and AI integration. My focus is on scalable engineering, transparent pipelines, and solutions that empower both developers and users.
        </p>
        <div className="home__actions">
          <Link to="/projects" className="home__button home__button--primary">View Projects</Link>
          <Link to="/contact" className="home__button home__button--secondary">Contact Me</Link>
        </div>
      </div>
    </main>
  );
}
