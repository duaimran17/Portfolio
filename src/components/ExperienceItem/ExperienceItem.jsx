// src/components/ExperienceItem/ExperienceItem.jsx
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import './ExperienceItem.css';

/**
 * Compact, polished timeline card for the Experience section.
 * Props: experience object from src/data/experience.js
 */
export default function ExperienceItem({ experience, index = 0 }) {
  const {
    role,
    organization,
    location,
    startDate,
    endDate,
    description,
    responsibilities,
    tags,
    categoryTag,
  } = experience;

  return (
    <motion.div
      className="exp-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      {/* Timeline marker */}
      <div className="exp-item__dot" aria-hidden="true" />

      <div className="exp-item__card">
        {/* Top Header Row with Title & Top-Right Tag */}
        <div className="exp-item__header">
          <div className="exp-item__title-group">
            <h3 className="exp-item__role">{role}</h3>
            <p className="exp-item__org">{organization}</p>
          </div>

          {/* Tag at Top Right */}
          {categoryTag && (
            <span className="exp-item__category-badge">
              {categoryTag}
            </span>
          )}
        </div>

        {/* Date & Location Meta */}
        <div className="exp-item__meta">
          {(startDate || endDate) && (
            <span className="exp-item__meta-item">
              <Calendar size={12} />
              {startDate}{endDate ? ` — ${endDate}` : ''}
            </span>
          )}
          {location && (
            <span className="exp-item__meta-item">
              <MapPin size={12} />
              {location}
            </span>
          )}
        </div>

        {/* Description */}
        {description && <p className="exp-item__desc">{description}</p>}

        {/* Responsibilities list */}
        {responsibilities && responsibilities.length > 0 && (
          <ul className="exp-item__list">
            {responsibilities.map((r, i) => (
              <li key={i} className="exp-item__list-item">
                <span className="exp-item__bullet" aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="exp-item__tags">
            {tags.map((tag) => (
              <span key={tag} className="exp-item__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
