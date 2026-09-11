// src/components/SkillCard/SkillCard.jsx
import { motion } from 'framer-motion';
import {
  Code2, Monitor, Server, Database, Wrench, Sparkles, Cpu, Cloud,
} from 'lucide-react';
import './SkillCard.css';

// Map icon name strings from skills.js to actual Lucide components
const ICON_MAP = {
  Code2, Monitor, Server, Database, Wrench, Sparkles, Cpu, Cloud,
};

/**
 * Card for a single skill category without proficiency levels.
 * Displays category name and skills cleanly filling the visual space.
 */
export default function SkillCard({ category, index = 0 }) {
  const Icon = ICON_MAP[category.icon] || Code2;

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -3 }}
    >
      <div className="skill-card__header">
        <span className="skill-card__icon" aria-hidden="true">
          <Icon size={18} />
        </span>
        <h3 className="skill-card__label">{category.label}</h3>
      </div>

      <div className="skill-card__skills-wrap" role="list">
        {category.skills.map((skill) => {
          const skillName = typeof skill === 'string' ? skill : skill.name;
          return (
            <div key={skillName} className="skill-card__chip" role="listitem">
              <span className="skill-card__chip-dot" aria-hidden="true" />
              <span className="skill-card__chip-text">{skillName}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
