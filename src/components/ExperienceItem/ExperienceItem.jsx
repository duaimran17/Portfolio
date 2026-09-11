// src/components/ExperienceItem/ExperienceItem.jsx
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import './ExperienceItem.css';

/**
 * Compact, polished card for an entry in the unified Journey/Experience section.
 * Props: experience object from src/data/experience.js
 */
export default function ExperienceItem({ experience, index = 0 }) {
  const {
    role,
    title,
    organization,
    company,
    event,
    project,
    roles,
    location,
    startDate,
    endDate,
    description,
    responsibilities,
    tags,
    categoryTag,
  } = experience;

  const displayRole = role || title;
  const displayOrg = company || organization || event;

  return (
    <motion.div
      className="exp-item"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Timeline marker */}
      <div className="exp-item__dot" aria-hidden="true" />

      <div className="exp-item__card">
        {/* Top Header Row */}
        <div className="exp-item__header">
          <div className="exp-item__title-group">
            <h3 className="exp-item__role">{displayRole}</h3>
            {displayOrg && (
              <p className="exp-item__org">{displayOrg}</p>
            )}
            {project && (
              <p className="exp-item__project">
                <span className="exp-item__project-label">Project:</span> {project}
              </p>
            )}
          </div>

          {/* Tag at Top Right */}
          {categoryTag && (
            <span className="exp-item__category-badge">
              {categoryTag}
            </span>
          )}
        </div>

        {/* Date & Location Meta (only if present) */}
        {(startDate || endDate || location) && (
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
        )}

        {/* Structured roles if present (e.g. merged leadership card) */}
        {roles && roles.length > 0 ? (
          <div className="exp-item__roles-structured">
            {roles.map((r, i) => (
              <div key={i} className="exp-item__role-entry">
                <div className="exp-item__role-line">
                  <span className="exp-item__subrole-title">{r.role}</span>
                  <span className="exp-item__subrole-arrow" aria-hidden="true">→</span>
                  <span className="exp-item__subrole-entity">{r.organization || r.event}</span>
                </div>
                {r.description && (
                  <p className="exp-item__subrole-desc">{r.description}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          description && <p className="exp-item__desc">{description}</p>
        )}

        {/* Responsibilities list if any */}
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
