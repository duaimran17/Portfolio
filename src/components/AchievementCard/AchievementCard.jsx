// src/components/AchievementCard/AchievementCard.jsx
import { motion } from 'framer-motion';
import { Trophy, Medal, GraduationCap, Code2, Star } from 'lucide-react';
import './AchievementCard.css';

const ICON_MAP = { Trophy, Medal, GraduationCap, Code2, Star };

/**
 * Card for a single achievement.
 * Props: achievement object from src/data/achievements.js
 */
export default function AchievementCard({ achievement, index = 0 }) {
  const Icon = ICON_MAP[achievement.icon] || Trophy;

  return (
    <motion.div
      className="achievement-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="achievement-card__icon-wrap" aria-hidden="true">
        <Icon size={22} />
      </div>

      <div className="achievement-card__body">
        <div className="achievement-card__top">
          <h3 className="achievement-card__title">{achievement.title}</h3>
          {achievement.date && (
            <span className="achievement-card__date">{achievement.date}</span>
          )}
        </div>
        <p className="achievement-card__org">{achievement.organization}</p>
        {achievement.description && (
          <p className="achievement-card__desc">{achievement.description}</p>
        )}
      </div>
    </motion.div>
  );
}
