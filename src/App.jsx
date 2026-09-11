// src/App.jsx
// The root application component.
// Arranges sections, provides theme state, and renders the floating navbar and footer.

import { useTheme } from './hooks/useTheme';

import Navbar       from './components/Navbar/Navbar';
import Footer       from './components/Footer/Footer';

import Home         from './sections/Home/Home';
import About        from './sections/About/About';
import Experience   from './sections/Experience/Experience';
import Skills       from './sections/Skills/Skills';
import Achievements from './sections/Achievements/Achievements';
import Projects     from './sections/Projects/Projects';
import KindWords    from './sections/KindWords/KindWords';
import CV           from './sections/CV/CV';
import Contact      from './sections/Contact/Contact';

import './App.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggle={toggleTheme} />

      <main id="main-content">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Projects />
        <KindWords />
        <CV />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
