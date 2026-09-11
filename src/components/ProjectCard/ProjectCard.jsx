// src/components/ProjectCard/ProjectCard.jsx
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import './ProjectCard.css';

/**
 * Entirely clickable card for a project.
 * Clicking anywhere on the card opens the project detail modal.
 */
export default function ProjectCard({ project, onClick, index = 0 }) {
  const { title, shortDescription, domain, tags, image, categoryTag } = project;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(project);
    }
  };

  return (
    <motion.article
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${title}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      {/* Thumbnail area with top-right category tag */}
      <div className="project-card__thumb">
        {image ? (
          <img src={image} alt={`${title} preview`} loading="lazy" />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <FolderGit2 size={32} className="project-card__placeholder-icon" />
            <span className="project-card__placeholder-name">{title}</span>
          </div>
        )}

        {/* Category Tag at Top Right */}
        {categoryTag && (
          <span className="project-card__category-tag">
            {categoryTag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="project-card__body">
        <div className="project-card__header-row">
          <span className="project-card__domain">{domain}</span>
          <span className="project-card__action-icon" aria-hidden="true">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{shortDescription}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="project-card__tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
