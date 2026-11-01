// src/App.jsx
// The root application component.
// Arranges sections, provides theme state, and renders the floating navbar and footer.

import { Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

import Navbar           from './components/Navbar/Navbar';
import Footer           from './components/Footer/Footer';
import ScrollToTop      from './components/ScrollToTop/ScrollToTop';

import Home             from './sections/Home/Home';
import About            from './sections/About/About';
import Experience       from './sections/Experience/Experience';
import Skills           from './sections/Skills/Skills';
import Projects         from './sections/Projects/Projects';
import Certificates     from './sections/Certificates/Certificates';
import KindWords        from './sections/KindWords/KindWords';
import Contact          from './sections/Contact/Contact';
import CertificatesPage from './sections/CertificatesPage/CertificatesPage';

import './App.css';

function HomePage() {
  return (
    <main id="main-content">
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <KindWords />
      <Contact />
    </main>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} onToggle={toggleTheme} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
      </Routes>

      <Footer />
    </>
  );
}
