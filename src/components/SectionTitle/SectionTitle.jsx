// src/components/SectionTitle/SectionTitle.jsx
import { motion } from 'framer-motion';
import './SectionTitle.css';

/**
 * Reusable section heading with optional subtitle.
 * Props:
 *   - eyebrow   {string}  Small label above the title
 *   - title     {string}  Main heading (first word uses gradient)
 *   - subtitle  {string}  Optional description below the heading
 *   - align     {'left'|'center'}  Default: 'center'
 */
export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  const words = title ? title.split(' ') : [];
  const firstWord = words[0];
  const restWords = words.slice(1).join(' ');

  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && (
        <motion.span
          className="section-title__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        className="section-title__heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.45, delay: 0.05 }}
      >
        <span className="gradient-text">{firstWord}</span>
        {restWords && ` ${restWords}`}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="section-title__subtitle"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className="section-title__line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      />
    </div>
  );
}
