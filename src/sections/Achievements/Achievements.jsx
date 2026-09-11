// src/sections/Achievements/Achievements.jsx
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AchievementCard from '../../components/AchievementCard/AchievementCard';
import { achievements, certificates } from '../../data/achievements';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section section--alt" aria-label="Achievements and certificates">
      <div className="container">
        <SectionTitle
          eyebrow="Recognition"
          title="Achievements"
          subtitle="Competitions, awards, and milestones I'm proud of."
        />

        {/* Achievement cards */}
        <div className="achievements__grid">
          {achievements.map((a, i) => (
            <AchievementCard key={a.id} achievement={a} index={i} />
          ))}
        </div>

        {/* Certificates subsection */}
        {certificates.length > 0 && (
          <div className="achievements__certs">
            <h2 className="achievements__certs-title">Certificates</h2>

            <div className="achievements__certs-grid">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  className="cert-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="cert-card__body">
                    <p className="cert-card__name">{cert.name}</p>
                    <p className="cert-card__issuer">{cert.issuer}</p>
                    {cert.date && <p className="cert-card__date">{cert.date}</p>}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-card__link"
                      aria-label={`View credential for ${cert.name}`}
                    >
                      <ExternalLink size={14} /> View
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
