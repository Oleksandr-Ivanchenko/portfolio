import { useEffect, useRef, useState } from 'react';
import './About.scss';

const TIMELINE = [
  {
    period: '2024 — Present',
    role: 'Full-Stack Development',
    accent: '#4ECDC4',
    items: [
      { label: 'SmartTender Bot', desc: 'Automated tender processing with Excel uploads, Puppeteer browser automation, and 3 databases managing real-time data flow.' },
      { label: 'Google Sheets + Telegram Bot', desc: 'Eliminated manual reporting for managers through automated sync.' },
      { label: 'AI Audio Transcription System', desc: 'Converts call recordings into structured text with ~95% accuracy, outperforming standard services.' },
    ],
  },
  {
    period: '2023 — 2024',
    role: 'Frontend Development',
    accent: '#A78BFA',
    items: [
      { label: 'Marketplace platform', desc: 'Built a service marketplace with Next.js, focused on UI/UX implementation and client-side architecture.' },
    ],
  },
  {
    period: '2022 — 2023',
    role: 'Game Development & PM',
    accent: '#FF6B6B',
    items: [
      { label: 'PM / Team Lead', desc: 'Built and managed cross-functional teams, conducted technical and creative interviews.' },
      { label: 'Process design', desc: 'Created task breakdown systems and distributed work across disciplines.' },
      { label: 'Player research', desc: 'Designed surveys and feedback systems for graphics selection and game design decisions.' },
    ],
  },
];

function useInView<T extends Element = HTMLElement>(threshold = 0.15): [import('react').RefObject<T>, boolean] {
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

type TimelineItem = Readonly<{
  period: string;
  role: string;
  accent: string;
  items: ReadonlyArray<{ label: string; desc: string }>;
}>;

function TimelineBlock({ item, index }: Readonly<{ item: TimelineItem; index: number }>) {
  const [ref, inView] = useInView<HTMLDivElement>(0.1);
  const styleVars = {
    ["--delay" as unknown as string]: `${index * 120}ms`,
    ["--accent" as unknown as string]: item.accent,
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      className={`about__block ${inView ? 'about__block--visible' : ''}`}
      style={styleVars}
    >
      <div className="about__block-line" />
      <div className="about__block-dot" style={{ background: item.accent, boxShadow: `0 0 12px ${item.accent}55` }} />

      <div className="about__block-content">
        <span className="about__period">{item.period}</span>
        <h3 className="about__role" style={{ color: item.accent }}>{item.role}</h3>

        <ul className="about__list">
          {item.items.map((it, i) => (
            <li key={`${it.label}-${i}`} className="about__list-item">
              <span className="about__list-label">{it.label}</span>
              <span className="about__list-desc">{it.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ApproachSection() {
  const [ref, inView] = useInView<HTMLDivElement>(0.15);
  return (
    <div ref={ref} className={`about__approach ${inView ? 'about__approach--visible' : ''}`}>
      <h2 className="about__subtitle">My Approach</h2>
      <p className="about__text">
        I specialize in <strong>automation and AI integration</strong> — combining Node.js, Puppeteer,
        OpenAI, Telegram API, and database design to build systems that run autonomously and handle
        failures gracefully.
      </p>
      <div className="about__principle">
        <span className="about__principle-mark">"</span>
        <p className="about__principle-text">
          Reliability over cleverness. I build modular architectures, write defensive code,
          and design systems that recover from failure without human intervention.
        </p>
      </div>
      <p className="about__text">
        Currently focused on <strong>backend automation, AI workflows, and scalable system design</strong>.
        Always looking for ways to make processes simpler, faster, and more resilient.
      </p>
    </div>
  );
}

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className={`about ${mounted ? 'about--mounted' : ''}`}>
      <div className="about__blob about__blob--teal" />
      <div className="about__blob about__blob--purple" />
      <div className="about__grid" />

      <div className="about__container">

        {/* Hero */}
        <div className="about__hero">
          <span className="about__eyebrow">
          <span className="about__eyebrow-dot" />Background
          </span>
          <h1 className="about__title">
            <span className="about__title-word">About</span>
            <span className="about__title-word about__title-word--accent">Me</span>
          </h1>
          <p className="about__intro">
            I'm <strong>Oleksandr Ivanchenko</strong>, a Full Stack Developer with a background in game
            development and project management. Started in gamedev in 2022, led teams as PM/Team Lead in
            2023, and have since transitioned into full-stack — building automation systems and AI-powered
            applications from concept to deployment.
          </p>
        </div>

        {/* Timeline */}
        <section className="about__timeline">
          <h2 className="about__section-title">My Journey</h2>
          {TIMELINE.map((item, i) => (
            <TimelineBlock key={item.period} item={item} index={i} />
          ))}
        </section>

        {/* Approach */}
        <ApproachSection />
      </div>
    </main>
  );
}