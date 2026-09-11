// src/components/Navbar/Navbar.jsx
import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

/**
 * Floating centered oval/pill-shaped navbar with active section detection,
 * mobile drawer, and theme toggle.
 */
export default function Navbar({ theme, onToggle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer to highlight active nav link
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-35% 0px -50% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 900) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  }, []);

  return (
    <header className="navbar-wrapper" role="banner">
      <nav className={`navbar-pill ${isScrolled ? 'navbar-pill--scrolled' : ''}`} aria-label="Main navigation">
        {/* Brand / Logo */}
        <button
          className="navbar-pill__logo"
          onClick={() => scrollTo('home')}
          aria-label="Dua Imran - Home"
        >
          <span className="navbar-pill__avatar-dot" />
          <span className="navbar-pill__logo-text">Dua<span className="gradient-text">.</span></span>
        </button>

        {/* Center Pill Links (Desktop) */}
        <ul className="navbar-pill__links" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} role="listitem">
                <button
                  className={`navbar-pill__link ${isActive ? 'navbar-pill__link--active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePillIndicator"
                      className="navbar-pill__active-bg"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="navbar-pill__link-label">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right Controls */}
        <div className="navbar-pill__actions">
          <ThemeToggle theme={theme} onToggle={onToggle} />

          <a
            href="/cv/Dua-Imran-CV.pdf"
            download="Dua-Imran-CV.pdf"
            className="navbar-pill__cv-btn"
            aria-label="Download CV"
            title="Download CV"
          >
            <Download size={13} />
            <span>CV</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="navbar-pill__hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-mobile-card"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            role="dialog"
            aria-label="Mobile navigation"
          >
            <ul className="navbar-mobile-card__links" role="list">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  role="listitem"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <button
                    className={`navbar-mobile-card__link ${activeSection === link.id ? 'navbar-mobile-card__link--active' : ''}`}
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.03 }}
              >
                <a
                  href="/cv/Dua-Imran-CV.pdf"
                  download="Dua-Imran-CV.pdf"
                  className="navbar-mobile-card__cv"
                  onClick={() => setMobileOpen(false)}
                >
                  <Download size={15} /> Download CV
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
