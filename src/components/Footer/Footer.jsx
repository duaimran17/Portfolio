// src/components/Footer/Footer.jsx
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { Github, Linkedin } from '../Icons';
import './Footer.css';

const SOCIAL_LINKS = [
  { id: 'email',    icon: <Mail size={16} />,          href: 'mailto:duaimrann17@gmail.com', label: 'Email' },
  { id: 'linkedin', icon: <Linkedin size={16} />,      href: 'https://www.linkedin.com/in/duaimran17', label: 'LinkedIn' },
  { id: 'github',   icon: <Github size={16} />,        href: 'https://github.com/duaimran17', label: 'GitHub' },
  { id: 'discord',  icon: <MessageCircle size={16} />, href: 'https://discord.com/users/duaimrann17', label: 'Discord' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">

        {/* Back to top */}
        <button
          className="footer__top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={16} />
        </button>

        {/* Name */}
        <p className="footer__name">
          Dua<span className="gradient-text">.</span>
        </p>

        {/* Statement */}
        <p className="footer__statement">
          Aspiring AI & Software Developer · Learning and building one project at a time.
        </p>

        {/* Social links */}
        <div className="footer__socials" role="list">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target={s.id !== 'email' ? '_blank' : undefined}
              rel={s.id !== 'email' ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              title={s.label}
              className="footer__social-link"
              role="listitem"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="footer__copy">
          © {year} Dua Imran. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}
