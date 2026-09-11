// src/components/ProjectModal/ProjectModal.jsx
import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play } from 'lucide-react';
import { Github } from '../Icons';
import './ProjectModal.css';

/**
 * Full-screen modal showing project detail.
 * Props:
 *   - project   {object|null}   the selected project, null = closed
 *   - onClose   {function}      close handler
 */
export default function ProjectModal({ project, onClose }) {
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
              {/* Media: video or image */}
              <div className="modal__media">
                {project.videoUrl ? (
                  <iframe
                    src={project.videoUrl}
                    title={`${project.title} demo video`}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
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
