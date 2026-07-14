import { useEffect, useRef, useState } from 'react';
import './Experience.scss';

const experiences = [
  {
    role: 'Fullstack Engineer',
    company: 'NDA Projects',
    period: '10/2024 — Present',
    accent: '#4ECDC4',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 5l3.5 3.5L3 12M8.5 12h6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    details: [
      'Built a Telegram bot for trading: resilient price parsing, DOM state control, false trigger prevention, logging, and fallback messaging.',
      'Developed a manager-facing bot with table output: automated data collection, model-based grouping, statistics generation, and performance optimization.',
      'Created an audio processing bot: FFmpeg-based preprocessing, chunked transcription, Whisper/OpenAI integration, and robust Telegram API handling with fallback logic.',
      'Designed system architecture with transparent control, scalable pipelines, and fault-tolerant error handling.',
      'Acted as technical lead: made architectural decisions, documented bugs, formulated tracker tasks, and proposed engineering improvements.',
    ],
  },
  {
    role: 'Project Manager',
    company: 'Edev',
    period: '10/2023 — 9/2024',
    accent: '#A78BFA',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    details: [
      'Successfully led the development of multiple games and web applications from concept to launch, maintaining high quality even with extended timelines.',
      'Built user interfaces for games and web apps using JavaScript, React, and CSS, collaborating closely with designers to create interactive and responsive UIs.',
      'Streamlined workflows and improved team collaboration across 2D artists, illustrators, UI/UX designers, and developers by implementing specialized tools.',
      'Supervised and coordinated QA testers, 2D artists, developers, SEO specialists, writers, and web designers to ensure quality and consistency.',
      'Created and maintained comprehensive project documentation, including technical specifications and development guidelines.',
    ],
  },
  {
    role: 'Javascript Developer',
    company: 'Qplaze',
    period: '07/2022 — 9/2023',
    accent: '#FF6B6B',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M5 13l3-8 3 8M6.5 10.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    details: [
      'Conducted code reviews, ensuring quality and maintainability. Configured game engines without modifying core code for stability.',
      'Developed responsive UIs with JavaScript, optimizing assets for fast loading and smooth gameplay.',
      'Integrated XML-based localization frameworks for multilingual content across regions.',
      'Improved performance by removing unnecessary dependencies and implementing features for icon display, screen rotation, and offline mode.',
      'Integrated third-party SDKs for analytics, social sharing, and push notifications. Set up in-app purchases and ad integrations with Google AdMob and Unity Ads.',
    ],
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

type ExperienceType = Readonly<{
  role: string;
  company: string;
  period: string;
  accent: string;
  icon: React.ReactNode;
  details: ReadonlyArray<string>;
}>;

function ExperienceCard({ exp, index }: Readonly<{ exp: ExperienceType; index: number }>) {
  const [ref, inView] = useInView<HTMLElement>(0.08);
  const [expanded, setExpanded] = useState(index === 0);
  const [hovered, setHovered] = useState(false);
  const styleVars = {
    ["--delay" as unknown as string]: `${index * 120}ms`,
    ["--accent" as unknown as string]: exp.accent,
  } as React.CSSProperties;

  return (
    <article
      ref={ref}
      className={[
        'experience__card',
        inView      ? 'experience__card--visible'  : '',
        expanded    ? 'experience__card--expanded' : '',
        hovered     ? 'experience__card--hovered'  : '',
      ].filter(Boolean).join(' ')}
  style={styleVars}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow */}
      <div className="experience__card-glow" />

      {/* Left accent bar */}
      <div className="experience__card-bar" />

      {/* Header row */}
      <button
        className="experience__card-header"
        onClick={() => setExpanded(v => !v)}
        aria-expanded={expanded}
      >
        <div className="experience__card-icon" style={{ color: exp.accent, borderColor: `${exp.accent}30`, background: `${exp.accent}10` }}>
          {exp.icon}
        </div>

        <div className="experience__card-meta">
          <span className="experience__card-period">{exp.period}</span>
          <h2 className="experience__card-role">{exp.role}</h2>
          <span className="experience__card-company" style={{ color: exp.accent }}>{exp.company}</span>
        </div>

        <div className={`experience__card-chevron ${expanded ? 'experience__card-chevron--open' : ''}`} style={{ color: exp.accent }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>

      {/* Collapsible details */}
      <div className="experience__card-body">
        <ul className="experience__card-list">
          {exp.details.map((d, i) => (
            <li
              key={`${exp.company}-${i}`}
              className="experience__card-point"
              style={{ transitionDelay: expanded ? `${i * 40 + 60}ms` : '0ms' }}
            >
              <span className="experience__card-bullet" style={{ background: exp.accent }} />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  const [mounted, setMounted] = useState(false);
  const [heroRef] = useInView<HTMLDivElement>(0.2);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className={`experience ${mounted ? 'experience--mounted' : ''}`}>
      <div className="experience__blob experience__blob--teal" />
      <div className="experience__blob experience__blob--purple" />
      <div className="experience__blob experience__blob--red" />
      <div className="experience__grid" />

      <div className="experience__container">

        {/* Hero */}
        <div className="experience__hero" ref={heroRef}>
          <span className="experience__eyebrow">
            <span className="experience__eyebrow-dot" />{' '}
            Career path
          </span>

          <h1 className="experience__title">
            <span className="experience__title-word">Work</span>
            <span className="experience__title-word experience__title-word--accent">Experience</span>
          </h1>

          <p className="experience__intro">
            My journey as a system-minded engineer — focused on automation,
            architecture, and clarity.
          </p>

          {/* Stats row */}
          <div className="experience__stats">
            {[
              { value: '5+', label: 'Years' },
              { value: '3',  label: 'Companies' },
              { value: '12+', label: 'Projects' },
            ].map(s => (
              <div key={s.label} className="experience__stat">
                <span className="experience__stat-value">{s.value}</span>
                <span className="experience__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="experience__list">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}