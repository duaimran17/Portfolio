// src/components/Navbar/Navbar.jsx
import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const SECTION_LINKS = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'contact',    label: 'Contact' },
];

/**
 * Floating centered pill navbar.
 * On "/" — smooth-scrolls to sections, active highlight via scroll-spy.
 * On "/certificates" — section links navigate back to "/#id", Certificates is active.
 */
export default function Navbar({ theme, onToggle }) {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen]   = useState(false);

  const location   = useLocation();
  const navigate   = useNavigate();
  const isHome     = location.pathname === '/';
  const isCertsPage = location.pathname === '/certificates';

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer — only active on home route
  useEffect(() => {
    if (!isHome) return;
    const observers = [];
    SECTION_LINKS.forEach(({ id }) => {
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
  }, [isHome]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 900) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Scroll to a section — works on home; from other pages navigates first
  const scrollTo = useCallback((id) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Navigate to home with a hash; ScrollToTop + hash effect handles scroll
      navigate(`/#${id}`);
    }
  }, [isHome, navigate]);

  // After navigating to "/#id", scroll to the element
  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    }
  }, [isHome, location.hash]);

  // Decide active pill
  const activePill = isCertsPage ? 'certificates' : activeSection;

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
          {SECTION_LINKS.map((link) => {
            const isActive = activePill === link.id;
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

          {/* Certificates page link */}
          <li role="listitem">
            <Link
              to="/certificates"
              className={`navbar-pill__link ${activePill === 'certificates' ? 'navbar-pill__link--active' : ''}`}
              aria-current={activePill === 'certificates' ? 'true' : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {activePill === 'certificates' && (
                <motion.span
                  layoutId="activePillIndicator"
                  className="navbar-pill__active-bg"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className="navbar-pill__link-label">Certificates</span>
            </Link>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="navbar-pill__actions">
          <ThemeToggle theme={theme} onToggle={onToggle} />

          <a
            href="/cv/Dua's%20CV.pdf"
            download="Dua's CV.pdf"
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
              {SECTION_LINKS.map((link, i) => (
                <motion.li
                  key={link.id}
                  role="listitem"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <button
                    className={`navbar-mobile-card__link ${activePill === link.id ? 'navbar-mobile-card__link--active' : ''}`}
                    onClick={() => scrollTo(link.id)}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}

              {/* Certificates mobile link */}
              <motion.li
                role="listitem"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: SECTION_LINKS.length * 0.03 }}
              >
                <Link
                  to="/certificates"
                  className={`navbar-mobile-card__link ${activePill === 'certificates' ? 'navbar-mobile-card__link--active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Certificates
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (SECTION_LINKS.length + 1) * 0.03 }}
              >
                <a
                  href="/cv/Dua's%20CV.pdf"
                  download="Dua's CV.pdf"
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
