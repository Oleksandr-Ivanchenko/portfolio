import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// App.jsx
export default function App() {
  return (
    <div>

      <Header />
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
          <p>
            A coder by day, problem-solver by night!
          </p>
          <p className="mt-4">
            I am a dedicated Software Engineer specializing in full-stack application development...
          </p>
        </section>
      </main>

      <Footer>
    </div>
  );
}
