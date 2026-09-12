// src/sections/CV/CV.jsx
import { motion } from 'framer-motion';
import { Eye, Download, FileText } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './CV.css';

const CV_PATH = '/cv/Dua-Imran-CV.pdf';

export default function CV() {
  return (
    <section id="cv" className="cv section" aria-label="Curriculum Vitae">
      <div className="container">
        <SectionTitle
          eyebrow="My Resume"
          title="Curriculum Vitae"
          subtitle="Interested in my background and technical journey? View or download my CV."
        />

        <motion.div
          className="cv__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <div className="cv__icon-wrap" aria-hidden="true">
            <FileText size={36} />
          </div>

          <div className="cv__content">
            <h2 className="cv__name">Dua Imran — CV</h2>
            <p className="cv__desc">
              A concise overview of my education, experience, projects, skills, and achievements.
            </p>

            <div className="cv__actions">
              <motion.a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                aria-label="View CV in browser"
              >
                <Eye size={17} />
                View CV
              </motion.a>

              <motion.a
                href={CV_PATH}
                download="Dua-Imran-CV.pdf"
                className="btn btn--outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                aria-label="Download CV as PDF"
              >
                <Download size={17} />
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
