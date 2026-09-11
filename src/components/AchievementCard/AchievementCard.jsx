// src/components/AchievementCard/AchievementCard.jsx
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Sparkles } from 'lucide-react';
import './AchievementCard.css';

const ICON_MAP = {
  Trophy,
  Medal,
  Award,
  Sparkles,
};

/**
 * Modern, editorial card for curated achievements.
 * Supports connected visual assets (medal, trophy photo, 3D render)
 * while presenting a polished, state-of-the-art fallback treatment.
 */
export default function AchievementCard({ achievement, index = 0 }) {
  const Icon = ICON_MAP[achievement.icon] || Trophy;

  return (
    <motion.article
      className="achievement-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="achievement-card__visual">
        {achievement.asset ? (
          <div className="achievement-card__asset-preview">
            <img
              src={achievement.asset}
              alt={achievement.title}
              className="achievement-card__asset-img"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="achievement-card__icon-badge" aria-hidden="true">
            <div className="achievement-card__icon-glow" />
            <Icon size={26} className="achievement-card__icon" />
          </div>
        )}
      </div>

      <div className="achievement-card__content">
        <div className="achievement-card__meta">
          {achievement.category && (
            <span className="achievement-card__badge">
              <Sparkles size={12} aria-hidden="true" />
              {achievement.category}
            </span>
          )}
          {achievement.honors && achievement.honors.map((honor) => {
            const HonorIcon = ICON_MAP[honor.icon] || Award;
            return (
              <span key={honor.label} className="achievement-card__badge">
                <HonorIcon size={12} aria-hidden="true" />
                {honor.label}
              </span>
            );
          })}
        </div>

        <h3 className="achievement-card__title">{achievement.title}</h3>
        <p className="achievement-card__desc">{achievement.description}</p>
      </div>
    </motion.article>
  );
}
