import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Transcribe App",
    description:
      "Full-stack app for audio transcription: upload audio files, process them with AssemblyAI, and view transcriptions in real time via a React interface.",
    tech: ["React", "Vite", "Express", "AssemblyAI", "Multer", "Axios"],
  link: "/projects/transcribe-app",
  comingSoon: true,
    number: "01",
    category: "Full-Stack",
    accent: "#4ECDC4",
  },
  {
    title: "SmartTender Bot",
    description:
      "Full-stack tender automation: upload Excel files via a React interface, process data with Express, and perform automated actions using Puppeteer and Telegram integration.",
    tech: ["React", "Vite", "Express", "Puppeteer", "SQLite", "Telegram API"],
  link: "/projects/smarttender-bot",
  comingSoon: true,
    number: "02",
    category: "Automation",
    accent: "#FF6B6B",
  },
  {
    title: "Telegram Product Bot",
    description:
      "Telegram bot for searching products in Google Sheets, browsing by categories and brands, and answering user questions with AI assistance (Gemini).",
    tech: ["Node.js", "Telegram API", "Google Sheets API", "AI (Gemini)", "Axios"],
  link: "/projects/telegram-product-bot",
  comingSoon: true,
    number: "03",
    category: "AI / Bot",
    accent: "#A78BFA",
  },
  {
    title: "QPlaze Real Checkers",
    description:
      "HTML5 online Checkers game built with real-time multiplayer logic and smooth browser performance.",
    tech: ["HTML5", "JavaScript", "WebSockets", "Game Logic"],
    link: "https://html5.qplaze.com/games/real_checkers/",
    number: "04",
    category: "Game Dev",
    accent: "#F59E0B",
  },
  {
    title: "QPlaze Real Chess",
    description:
      "Interactive chess platform with real-time moves, AI integration for hints, and multiplayer functionality.",
    tech: ["HTML5", "JavaScript", "Chess Engine", "WebSockets"],
    link: "https://html5.qplaze.com/games/realchess/",
    number: "05",
    category: "Game Dev",
    accent: "#34D399",
  },
  {
    title: "QPlaze Real Baccarat",
    description:
      "Online Baccarat game with real-time results and interactive interface for players.",
    tech: ["HTML5", "JavaScript", "Game Logic", "WebSockets"],
    link: "https://html5.qplaze.com/games/realBaccarat/",
    number: "06",
    category: "Game Dev",
    accent: "#60A5FA",
  },
  {
    title: "QPlaze Tractor Mania",
    description:
      "Browser-based strategy and simulation game with interactive farm mechanics.",
    tech: ["HTML5", "JavaScript", "Game Logic", "UI/UX Design"],
    link: "https://html5.qplaze.com/games/tractorMania/",
    number: "07",
    category: "Simulation",
    accent: "#FB923C",
  },
  {
    title: "QPlaze Idle Farm Tycoon",
    description:
      "Idle farming simulator with progressive gameplay, automation, and browser compatibility.",
    tech: ["HTML5", "JavaScript", "Game Logic", "Progressive Web App"],
    link: "https://html5.qplaze.com/games/idleFarmTycoon/",
    number: "08",
    category: "Simulation",
    accent: "#E879F9",
  },
  {
    title: "FDOUT Service Marketplace",
    description:
      "Marketplace for services built with Next.js, featuring user profiles, listings, and seamless UI/UX.",
    tech: ["Next.js", "React", "Node.js", "API Integration"],
    link: "https://fdout.pl/uk",
    number: "09",
    category: "Marketplace",
    accent: "#2DD4BF",
  },
  {
    title: "Sudoku Online",
    description:
      "Web-based Sudoku game developed during PM and team lead role, coordinating developers and designers to deliver a smooth game experience.",
    tech: ["React", "JavaScript", "Game Logic", "UI/UX"],
    link: "https://sudoku.online/",
    number: "10",
    category: "Game Dev / PM",
    accent: "#F472B6",
  },
  {
    title: "Play Solitaire",
    description:
      "Solitaire web game with multiple variants, animations, and responsive design, managed as PM and team lead.",
    tech: ["React", "JavaScript", "Animations", "Game Logic"],
    link: "https://playsolitaire.game/",
    number: "11",
    category: "Game Dev / PM",
    accent: "#FBBF24",
  },
  {
    title: "Backgammon Clash",
    description:
      "Mobile Backgammon game published on App Store, developed under PM leadership with team coordination.",
    tech: ["iOS", "Unity", "Game Design", "PM"],
    link: "https://apps.apple.com/us/app/backgammon-clash/id6754024403",
    number: "12",
    category: "Mobile / iOS",
    accent: "#818CF8",
  },
];

function useInView<T extends Element = HTMLElement>(threshold = 0.15): [import('react').RefObject<T>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref as import('react').RefObject<T>, inView];
}

function ProjectCard({ project, index }: Readonly<{ project: typeof projects[number]; index: number }>) {
  const [ref, inView] = useInView<HTMLElement>(0.1);
  const [hovered, setHovered] = useState(false);
  const sharedStyle = {
    display: "block",
    textDecoration: "none",
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0) scale(1)" : "translateY(60px) scale(0.97)",
    transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${index * 60}ms, transform 0.7s cubic-bezier(.16,1,.3,1) ${index * 60}ms`,
  } as const;

  // For coming-soon items we render an anchor-like card but disable navigation
  // — keep markup close to the regular card so styles remain consistent.

  if (project.comingSoon) {
    return (
      <a
        // intentionally no href to avoid navigation
        ref={ref as import('react').RefObject<HTMLAnchorElement>}
        onClick={(e) => e.preventDefault()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-disabled={true}
        tabIndex={-1}
        style={{ ...sharedStyle, cursor: 'default', textDecoration: 'none' }}
      >
        <div
          style={{
            position: "relative",
            background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)",
            border: `1px solid ${hovered ? project.accent + "55" : "rgba(255,255,255,0.07)"}`,
            borderRadius: "20px",
            padding: "36px 36px 32px",
          }}
        >
          <div style={{ position: 'absolute', top: 16, right: 16 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, background: 'rgba(255,255,255,0.06)', padding: '4px 8px', borderRadius: 8 }}>{'Coming soon'}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: project.accent, opacity: 0.8 }}>{project.number} — {project.category}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: hovered ? 1 : 0.3, transition: 'all 0.3s ease', transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)' }}>
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 style={{ margin: '0 0 12px', fontFamily: "'Syne', sans-serif", fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 700, color: '#FAFAFA' }}>{project.title}</h2>

          <p style={{ margin: '0 0 24px', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>{project.description}</p>

        </div>
      </a>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as import('react').RefObject<HTMLAnchorElement>}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={sharedStyle}
    >
      <div
        style={{
          position: "relative",
          background: hovered
            ? "rgba(255,255,255,0.06)"
            : "rgba(255,255,255,0.025)",
          border: `1px solid ${hovered ? project.accent + "55" : "rgba(255,255,255,0.07)"}`,
          borderRadius: "20px",
          padding: "36px 36px 32px",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(.16,1,.3,1)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px ${project.accent}33, inset 0 1px 0 rgba(255,255,255,0.08)`
            : "0 2px 20px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      >
        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: project.accent,
            opacity: hovered ? 0.08 : 0.03,
            filter: "blur(50px)",
            transition: "opacity 0.5s ease",
            pointerEvents: "none",
          }}
        />

        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: project.accent,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            {project.number} — {project.category}
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              opacity: hovered ? 1 : 0.3,
              transition: "all 0.3s ease",
              transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
            }}
          >
            <path
              d="M3 13L13 3M13 3H6M13 3V10"
              stroke={project.accent}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2
          style={{
            margin: "0 0 12px",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(18px, 2.2vw, 24px)",
            fontWeight: 700,
            color: "#FAFAFA",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            transition: "color 0.3s ease",
          }}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p
          style={{
            margin: "0 0 24px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tech.map((t: string) => (
            <span
              key={t}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: project.accent,
                background: project.accent + "15",
                border: `1px solid ${project.accent}30`,
                borderRadius: "6px",
                padding: "4px 10px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function Counter({ value }: Readonly<{ value: number }>) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView<HTMLSpanElement>(0.5);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, value]);
  return <span ref={ref}>{count}</span>;
}

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { label: "Projects", value: 12 },
    { label: "Technologies", value: 30 },
    { label: "Years", value: 5 },
  ];

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080C10; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#080C10",
          color: "#FAFAFA",
          overflowX: "hidden",
        }}
      >
        {/* Ambient background */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(78,205,196,0.06) 0%, transparent 70%)",
              transform: `translateY(${scrollY * 0.2}px)`,
              transition: "transform 0.1s linear",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              right: "0%",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)",
              transform: `translateY(${scrollY * -0.15}px)`,
              transition: "transform 0.1s linear",
            }}
          />
          {/* Grid lines */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* HERO */}
        <section
          ref={heroRef}
          style={{
            position: "relative",
            zIndex: 1,
            padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 100px) clamp(60px, 8vw, 100px)",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "40px",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(.16,1,.3,1)",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4ECDC4",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Selected Work
            </span>
          </div>

          {/* Main title */}
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              marginBottom: "clamp(24px, 4vw, 48px)",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(.16,1,.3,1) 0.1s",
            }}
          >
            <span style={{ display: "block", color: "#FAFAFA" }}>Projects</span>
            <span
              style={{
                display: "inline-block",
                paddingBottom: "0.1em",
                background: "linear-gradient(135deg, #4ECDC4 0%, #A78BFA 50%, #FF6B6B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              & Builds
            </span>
          </h1>

          {/* Subtitle + stats row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(32px, 5vw, 80px)",
              alignItems: "flex-end",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s cubic-bezier(.16,1,.3,1) 0.25s",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(14px, 1.4vw, 17px)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
                maxWidth: "380px",
              }}
            >
              Games, bots, marketplaces, and automation tools — built across
              full-stack, mobile, and AI-powered domains.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: "40px" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "clamp(32px, 4vw, 48px)",
                      fontWeight: 700,
                      color: "#FAFAFA",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    <Counter value={s.value} />+
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      marginTop: "6px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              marginTop: "clamp(48px, 6vw, 80px)",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(78,205,196,0.4), rgba(167,139,250,0.3), transparent)",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "all 1.2s cubic-bezier(.16,1,.3,1) 0.4s",
            }}
          />
        </section>

        {/* PROJECT GRID */}
        <section
          style={{
            position: "relative",
            zIndex: 1,
            padding: "0 clamp(24px, 6vw, 100px) clamp(80px, 10vw, 140px)",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(360px, 100%), 1fr))",
              gap: "clamp(16px, 2vw, 24px)",
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <FooterCTA />

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.8); }
          }
        `}</style>
      </div>
    </>
  );
}

function FooterCTA() {
  const [ref, inView] = useInView(0.3);
  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        padding: "clamp(60px, 8vw, 100px) clamp(24px, 6vw, 100px)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s cubic-bezier(.16,1,.3,1)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "clamp(40px, 5vw, 60px) clamp(32px, 6vw, 80px)",
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "24px",
          backdropFilter: "blur(20px)",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "16px",
          }}
        >
          Open to collaboration
        </p>
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#FAFAFA",
            marginBottom: "32px",
          }}
        >
          Let's build something
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #4ECDC4, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            remarkable together.
          </span>
        </h3>
        <a
          href="/portfolio/collaboration"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 28px",
            background: "linear-gradient(135deg, #4ECDC4, #A78BFA)",
            borderRadius: "50px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#080C10",
            textDecoration: "none",
            letterSpacing: "0.01em",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow =
              "0 0 40px rgba(78,205,196,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Get in touch →
        </a>
      </div>
    </section>
  );
}