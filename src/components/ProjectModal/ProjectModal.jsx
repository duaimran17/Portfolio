// src/components/ProjectModal/ProjectModal.jsx
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Github } from '../Icons';
import './ProjectModal.css';

/**
 * Full-screen modal showing project detail.
 * Props:
 *   - project   {object|null}   the selected project, null = closed
 *   - onClose   {function}      close handler
 */
export default function ProjectModal({ project, onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [counterVisible, setCounterVisible] = useState(false);
  const [prevProjectId, setPrevProjectId] = useState(project?.id);

  if (project?.id !== prevProjectId) {
    setPrevProjectId(project?.id);
    setActiveSlide(0);
    setCounterVisible(false);
  }

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => { if (e.key === 'Escape') onClose(); },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, handleKeyDown]);

  const images = project?.images && project.images.length > 0
    ? project.images
    : project?.image
    ? [project.image]
    : [];

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} project details`}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              className="modal__close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            <div className="modal__scroll-area">
              {/* Media: video or image gallery */}
              <div className="modal__media">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    controls
                    playsInline
                    className="modal__video"
                  />
                ) : images.length > 0 ? (
                  <div className="modal__gallery">
                    <img
                      src={images[activeSlide]}
                      alt={`${project.title} view ${activeSlide + 1}`}
                      className="modal__gallery-img"
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="modal__gallery-nav modal__gallery-nav--prev"
                          onClick={() => { setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1)); setCounterVisible(true); }}
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          type="button"
                          className="modal__gallery-nav modal__gallery-nav--next"
                          onClick={() => { setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1)); setCounterVisible(true); }}
                          aria-label="Next image"
                        >
                          <ChevronRight size={22} />
                        </button>
                        {counterVisible && (
                          <div className="modal__gallery-counter">
                            {activeSlide + 1} / {images.length}
                          </div>
                        )}
                        <div className="modal__gallery-dots">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              className={`modal__gallery-dot ${i === activeSlide ? 'modal__gallery-dot--active' : ''}`}
                              onClick={() => setActiveSlide(i)}
                              aria-label={`Slide ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="modal__media-placeholder" aria-hidden="true">
                    <Play size={40} />
                    <span>No preview available yet</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="modal__content">
                {/* Header */}
                <div className="modal__header">
                  <div>
                    <span className="modal__domain">{project.domain}</span>
                    <h2 className="modal__title">{project.title}</h2>
                    {(project.company || project.contribution) && (
                      <p className="modal__meta-sub">
                        {project.company && <strong>{project.company}</strong>}
                        {project.company && project.contribution && <span> · </span>}
                        {project.contribution && <span>{project.contribution}</span>}
                      </p>
                    )}
                  </div>
                  <div className="modal__actions">
                    {project.githubUrl && !project.githubUrl.startsWith('[') && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--ghost modal__action-btn"
                        aria-label="View GitHub repository"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary modal__action-btn"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <section className="modal__section">
                  <h3 className="modal__section-title">About this project</h3>
                  <p className="modal__text">{project.description}</p>
                </section>

                {/* Contribution */}
                {project.contribution && (
                  <section className="modal__section">
                    <h3 className="modal__section-title">My contribution</h3>
                    <p className="modal__text">{project.contribution}</p>
                  </section>
                )}

                {/* Tech stack */}
                {project.tags && project.tags.length > 0 && (
                  <section className="modal__section">
                    <h3 className="modal__section-title">Tech stack</h3>
                    <div className="modal__tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="modal__tag">{tag}</span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
