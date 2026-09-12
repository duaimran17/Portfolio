// src/components/SocialLinks/SocialLinks.jsx
import { Mail } from 'lucide-react';
import { Github, Linkedin, Discord } from '../Icons';
import { motion } from 'framer-motion';
import './SocialLinks.css';

const SOCIAL_ITEMS = [
  {
    id: 'email',
    label: 'Email',
    icon: <Mail size={18} />,
    href: 'mailto:duaimrann17@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <Linkedin size={18} />,
    href: 'https://www.linkedin.com/in/duaimran17',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <Github size={18} />,
    href: 'https://github.com/duaimran17',
  },
  {
    id: 'discord',
    label: 'Discord',
    icon: <Discord size={18} />,
    href: 'https://discord.com/users/duaimran17',
  },
];

/**
 * Row of animated social icon links.
 */
export default function SocialLinks({ size = 'md', label = false }) {
  return (
    <div className={`social-links social-links--${size}`} role="list">
      {SOCIAL_ITEMS.map((item, i) => (
        <motion.a
          key={item.id}
          href={item.href}
          target={item.id !== 'email' ? '_blank' : undefined}
          rel={item.id !== 'email' ? 'noopener noreferrer' : undefined}
          aria-label={item.label}
          title={item.label}
          className="social-links__item"
          role="listitem"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.08 * i, duration: 0.35 }}
          whileHover={{ y: -3, scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          {item.icon}
          {label && <span className="social-links__label">{item.label}</span>}
        </motion.a>
      ))}
    </div>
  );
}
