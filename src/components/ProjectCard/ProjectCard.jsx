// src/components/ProjectCard/ProjectCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Github } from '../Icons';
import './ProjectCard.css';

/**
 * Entirely clickable card for a project.
 * Clicking anywhere on the card opens the project detail modal.
 */
export default function ProjectCard({ project, onClick, index = 0 }) {
  const {
    title,
    shortDescription,
    domain,
    tags,
    image,
    images,
    videoUrl,
    videoCoverUrl,
    categoryTag,
    githubUrl,
    company,
    contribution,
  } = project;

  const [currentImg, setCurrentImg] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [counterVisible, setCounterVisible] = useState(false);
  const mediaImages = images && images.length > 0 ? images : image ? [image] : [];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === 0 ? mediaImages.length - 1 : prev - 1));
    setCounterVisible(true);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev === mediaImages.length - 1 ? 0 : prev + 1));
    setCounterVisible(true);
  };

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
        {videoUrl ? (
          showVideo ? (
            <video
              src={videoUrl}
              controls
              playsInline
              preload="metadata"
              autoPlay
              className="project-card__video"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div
              className="project-card__video-cover"
              onClick={(e) => { e.stopPropagation(); setShowVideo(true); }}
              role="button"
              tabIndex={0}
              aria-label={`Play ${title} demo video`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); setShowVideo(true); } }}
            >
              {videoCoverUrl ? (
                <img src={videoCoverUrl} alt={`${title} video cover`} className="project-card__video-cover-img" />
              ) : (
                <div className="project-card__placeholder" aria-hidden="true">
                  <FolderGit2 size={32} className="project-card__placeholder-icon" />
                </div>
              )}
              <div className="project-card__play-btn" aria-hidden="true">
                <Play size={22} />
              </div>
            </div>
          )
        ) : mediaImages.length > 0 ? (
          <div className="project-card__gallery-wrap">
            <img
              src={mediaImages[currentImg]}
              alt={`${title} preview ${currentImg + 1}`}
              loading="lazy"
            />
            {mediaImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="project-card__nav-btn project-card__nav-btn--prev"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  className="project-card__nav-btn project-card__nav-btn--next"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <ChevronRight size={16} />
                </button>
                {counterVisible && (
                  <div className="project-card__counter">
                    {currentImg + 1} / {mediaImages.length}
                  </div>
                )}
              </>
            )}
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
