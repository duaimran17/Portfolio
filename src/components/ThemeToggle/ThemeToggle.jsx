// src/components/ThemeToggle/ThemeToggle.jsx
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import './ThemeToggle.css';

/**
 * Animated sun/moon toggle button.
 * Props:
 *   - theme     {'light'|'dark'}
 *   - onToggle  {function}
 */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <motion.button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="theme-toggle__icon"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </motion.button>
  );
}
