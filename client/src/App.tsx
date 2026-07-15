
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Experience from "./components/Experience/Experience";
import Collaboration from "./components/Collaboration/Collaboration";
import AdminRequests from "./components/AdminRequests/AdminRequests";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import NotFound from "./components/NotFound/NotFound";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <Router basename={basename}>
      {/* <ScrollToTop /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/admin/requests" element={<AdminRequests />} />
        {/* <Route path="*" element={<NotFound />} />   */}
      </Routes>
      <Footer />
    </Router>
  );
}
