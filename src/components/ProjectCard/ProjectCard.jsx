// src/components/ProjectCard/ProjectCard.jsx
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { Github } from '../Icons';
import './ProjectCard.css';

/**
 * Entirely clickable card for a project.
 * Clicking anywhere on the card opens the project detail modal.
 * The media area shows ONLY a static cover image — no gallery controls,
 * no navigation arrows, no counter, no video player.
 * Full media interaction is available inside ProjectModal.
 */
export default function ProjectCard({ project, onClick, index = 0 }) {
  const {
    title,
    shortDescription,
    domain,
    tags,
    image,
    images,
    videoCoverUrl,
    categoryTag,
    githubUrl,
    company,
    contribution,
  } = project;

  // Percent-encode path segments so spaces in filenames (e.g. "HBM 1.png") don't break requests.
  const encodeImgSrc = (src) =>
    src
      ? src.split('/').map((seg) => encodeURIComponent(seg)).join('/')
      : src;

  // Resolve the single static cover image to display on the card.
  // Priority: videoCoverUrl (for video projects) → first image in images[] → image → null
  const rawCover = videoCoverUrl
    || (images && images.length > 0 ? images[0] : null)
    || image
    || null;
  const coverImage = encodeImgSrc(rawCover);

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
      {/* Thumbnail area — static cover image only */}
      <div className="project-card__thumb">
        {coverImage ? (
          <div className="project-card__gallery-wrap">
            <img
              src={coverImage}
              alt={`${title} cover`}
              loading="lazy"
              decoding="async"
            />
          </div>
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
          <div className="project-card__actions" onClick={(e) => e.stopPropagation()}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__github-btn"
                title="View on GitHub"
                aria-label={`${title} on GitHub`}
              >
                <Github size={13} />
                <span>Code</span>
              </a>
            )}
            <span className="project-card__action-icon" aria-hidden="true">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        <h3 className="project-card__title">{title}</h3>

        {(company || contribution) && (
          <div className="project-card__meta-line">
            {company && <span className="project-card__meta-company">{company}</span>}
            {company && contribution && <span className="project-card__meta-sep">•</span>}
            {contribution && <span className="project-card__meta-contribution">{contribution}</span>}
          </div>
        )}

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
