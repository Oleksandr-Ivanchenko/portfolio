import React from "react";

// App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <header>
        <div>
          <a href="/" className="font-bold text-xl">aadi.is-dev</a>
          <nav className="flex gap-4">
            <a href="/">Home</a>
            <a href="/" target="_blank">LinkedIn</a>
            <a href="" target="_blank">Resume</a>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <h1>Oleksandr Ivanchenko</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            A coder by day, problem-solver by night!
          </p>
          <p className="mt-4">
            I am a dedicated Software Engineer specializing in full-stack application development...
          </p>
        </section>
      </main>

      <footer className="py-4 border-t border-border bg-background/95 text-center text-sm text-muted-foreground">
        ©2025 Built with Next.js, shadcn/ui, Tailwind CSS
      </footer>
    </div>
  );
}
