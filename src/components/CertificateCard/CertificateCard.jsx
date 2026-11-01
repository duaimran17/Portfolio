// src/components/CertificateCard/CertificateCard.jsx
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './CertificateCard.css';

// static=true: renders instantly with no entrance animation (used on /certificates page).
export default function CertificateCard({ cert, index = 0, static: isStatic = false }) {
  const Wrapper = isStatic ? 'article' : motion.article;
  const motionProps = isStatic
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, amount: 0.15 },
        transition: { duration: 0.4, delay: index * 0.06 },
        whileHover: { y: -4 },
      };

  return (
    <Wrapper className="cert-card" {...motionProps}>
      <span className="cert-card__category">{cert.category}</span>

      <h3 className="cert-card__title">{cert.title}</h3>
      <p className="cert-card__issuer">{cert.issuer}</p>
      <p className="cert-card__date">{cert.date}</p>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-card__verify"
          aria-label={`Verify certificate: ${cert.title}`}
        >
          <ExternalLink size={13} aria-hidden="true" />
          Verify
        </a>
      )}
    </Wrapper>
  );
}

