import { useEffect, useRef, useState } from 'react';
import './Skills.scss';

const SKILL_GROUPS = [
  {
    key: 'frontend',
    label: 'Frontend',
    accent: '#4ECDC4',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 5l-2 3 2 3M13 5l2 3-2 3M9.5 2.5l-3 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: ['JavaScript (ES6+)', 'TypeScript', 'React / Next.js', 'HTML5 / CSS3 / Sass', 'Tailwind CSS / BEM', 'Redux Toolkit / Context API', 'Responsive & Adaptive Layouts'],
  },
  {
    key: 'backend',
    label: 'Backend',
    accent: '#A78BFA',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="1" y="9" width="14" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="12.5" cy="5" r="1" fill="currentColor"/>
        <circle cx="12.5" cy="11" r="1" fill="currentColor"/>
      </svg>
    ),
    items: ['Node.js / Express', 'REST API / WebSocket', 'SQLite / SQL', 'Puppeteer automation', 'Telegram API / OpenAI API / FFmpeg'],
  },
  {
    key: 'devops',
    label: 'DevOps',
    accent: '#FF6B6B',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5A6.5 6.5 0 1 1 1.5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M8 4.5v3.5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.5 3.5V8H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    items: ['Docker / PM2', 'CI/CD pipelines', 'Nginx setup', 'Error logging / Fallback logic / Caching'],
  },
  {
    key: 'tools',
    label: 'Tools',
    accent: '#60A5FA',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10.5 2a3 3 0 0 1 .5 5.5L5.5 13A1.5 1.5 0 0 1 3.5 11l5.5-5.5A3 3 0 0 1 10.5 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    items: ['Git / GitHub / GitLab', 'NVM / PNPM / Yarn / NPM', 'Chrome DevTools / VS Code', 'Figma / Photoshop / Construct', 'SDK Integration / JSON / API Debugging'],
  },
  {
    key: 'management',
    label: 'Management',
    accent: '#34D399',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="2.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="13.5" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M8 6.5v2M8 8.5l-5 2M8 8.5l5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    items: ['Scrum / Kanban', 'Jira / Confluence', 'Documentation & QA coordination', 'SEO / Localization / Cross-team collaboration'],
  },
];

function useInView<T extends Element = HTMLElement>(threshold = 0.1): [import('react').RefObject<T>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref as import('react').RefObject<T>, inView];
}
type SkillGroupType = Readonly<{
  key: string;
  label: string;
  accent: string;
  icon: React.ReactNode;
  items: ReadonlyArray<string>;
}>;

function SkillGroup({ group, index, activeFilter, onFilter }: Readonly<{ group: SkillGroupType; index: number; activeFilter: string | null; onFilter: (v: string | null) => void }>) {
  const [ref, inView] = useInView<HTMLElement>(0.08);
  const isActive = activeFilter === null || activeFilter === group.key;

  const styleVars = {
    ["--delay" as unknown as string]: `${index * 80}ms`,
    ["--accent" as unknown as string]: group.accent,
  } as unknown as (React.CSSProperties & Record<string, string>);

  return (
    <section
      ref={ref}
      className={[
        'skills__group',
        inView    ? 'skills__group--visible' : '',
        isActive ? '' : 'skills__group--dimmed',
      ].filter(Boolean).join(' ')}
      style={styleVars}
    >
      <div className="skills__group-glow" />

      <button
        className={`skills__group-header ${activeFilter === group.key ? 'skills__group-header--active' : ''}`}
        onClick={() => onFilter(activeFilter === group.key ? null : group.key)}
    style={{ ["--accent" as unknown as string]: group.accent } as unknown as (React.CSSProperties & Record<string, string>)}
      >
        <span className="skills__group-icon" style={{ color: group.accent, borderColor: `${group.accent}30`, background: `${group.accent}10` }}>
          {group.icon}
        </span>
        <h2 className="skills__group-label">{group.label}</h2>
        <span className="skills__group-count" style={{ color: group.accent, background: `${group.accent}15`, borderColor: `${group.accent}30` }}>
          {group.items.length}
        </span>
      </button>

      <ul className="skills__list">
        {group.items.map((skill, i) => (
          <li
            key={skill}
            className="skills__item"
            style={{ transitionDelay: inView ? `${index * 80 + i * 35}ms` : '0ms' }}
          >
            <span className="skills__item-dot" style={{ background: group.accent }} />
            <span className="skills__item-text">{skill}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Skills() {
  const [mounted, setMounted]       = useState(false);
  const [activeFilter, setFilter] = useState<string | null>(null);
  const totalSkills = SKILL_GROUPS.reduce((acc, g) => acc + g.items.length, 0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className={`skills ${mounted ? 'skills--mounted' : ''}`}>
      <div className="skills__blob skills__blob--teal" />
      <div className="skills__blob skills__blob--purple" />
      <div className="skills__grid" />

      <div className="skills__container">

        {/* Hero */}
        <div className="skills__hero">
          <span className="skills__eyebrow">
          <span className="skills__eyebrow-dot" />Tech stack
          </span>

          <h1 className="skills__title">
            <span className="skills__title-word">Skills</span>
            <span className="skills__title-word skills__title-word--accent">& Tools</span>
          </h1>

          <p className="skills__intro">
            Designing and building modern, scalable systems with a strong focus on
            automation, clean architecture, and cross-team collaboration.
          </p>

          {/* Total badge */}
          <div className="skills__badge">
            <span className="skills__badge-value">{totalSkills}</span>
            <span className="skills__badge-label">technologies & tools</span>
          </div>
        </div>

        {/* Filter bar */}
        <div className="skills__filters">
          <button
            className={`skills__filter-btn ${activeFilter === null ? 'skills__filter-btn--active' : ''}`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {SKILL_GROUPS.map(g => (
            <button
              key={g.key}
              className={`skills__filter-btn ${activeFilter === g.key ? 'skills__filter-btn--active' : ''}`}
              style={{ ["--accent" as unknown as string]: g.accent } as unknown as (React.CSSProperties & Record<string, string>)}
              onClick={() => setFilter(activeFilter === g.key ? null : g.key)}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="skills__grid-layout">
          {SKILL_GROUPS.map((group, i) => (
            <SkillGroup
              key={group.key}
              group={group}
              index={i}
              activeFilter={activeFilter}
              onFilter={setFilter}
            />
          ))}
        </div>
      </div>
    </main>
  );
}