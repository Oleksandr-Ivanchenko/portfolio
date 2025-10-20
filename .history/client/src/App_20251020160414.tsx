import React from "react";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Experience from "./components/Experience/Experience";

// App.jsx
export default function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* Добавь остальные страницы */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <
      </Routes>
      <Footer />
    </Router>
  );
}
