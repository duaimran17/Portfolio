// src/sections/Achievements/Achievements.jsx
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import AchievementCard from '../../components/AchievementCard/AchievementCard';
import { achievements, certificates } from '../../data/achievements';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section section--alt" aria-label="Achievements and Certifications">
      <div className="container">
        <SectionTitle
          eyebrow="Milestones & Honors"
          title="Achievements"
          subtitle="Selected recognitions, competition honors, and certifications."
        />

        {/* Curated Main Achievements Grid */}
        <div className="achievements__grid">
          {achievements.map((achievement, i) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={i} />
          ))}
        </div>

        {/* Certificates Subsection */}
        {certificates.length > 0 && (
          <div className="achievements__certs">
            <motion.div
              className="achievements__certs-header"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <div className="achievements__certs-badge" aria-hidden="true">
                <Award size={16} />
              </div>
              <h3 className="achievements__certs-title">Certificates</h3>
            </motion.div>

            <div className="achievements__certs-grid">
              {certificates.map((cert, i) => {
                const issuerInfo = cert.platform
                  ? `${cert.institution} · ${cert.platform}`
                  : cert.institution;

                return (
                  <motion.div
                    key={cert.id}
                    className="cert-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="cert-card__icon" aria-hidden="true">
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="cert-card__body">
                      <h4 className="cert-card__name">{cert.name}</h4>
                      <p className="cert-card__issuer">{issuerInfo}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
