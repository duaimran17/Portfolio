// src/sections/About/About.jsx
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section section--alt" aria-label="About me">
      <div className="container">
        <SectionTitle
          eyebrow="Get to Know Me"
          title="About Me"
          subtitle="A quick snapshot of my journey, education, and current focus."
        />

        {/* Modern availability status label */}
        <motion.div
          className="about__availability-wrapper"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <span className="about__availability-pill">
            <span className="about__availability-dot" />
            Available for new projects
          </span>
        </motion.div>

        <div className="about__grid">
          {/* LEFT: Clean photo frame */}
          <motion.div
            className="about__photo-col"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <div className="about__photo-frame">
              <img
                src="/images/dua2.JPG"
                alt="Dua Imran"
                className="about__photo-img"
              />
            </div>
          </motion.div>

          {/* RIGHT: About Details */}
          <motion.div
            className="about__content-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            {/* Prominent Hook Line */}
            <p className="about__hook">
              <strong>My journey so far</strong>
            </p>

            {/* Authentic paragraph */}
            <p className="about__paragraph">
              I'm Dua Imran, a CS undergrad (final year) at the University
              of Central Punjab, focused on artificial intelligence and data science.
              I work with Python, Pandas, and NumPy to build the foundations of
              intelligent systems, and I develop full-stack applications using React
              and the MERN stack with REST API integration.
              <br />
              Through my involvement in university societies, where I organize events
              and coordinate teams, I have developed strong leadership, collaboration,
              and time management skills. I am continuously exploring emerging AI
              technologies and working toward becoming a capable AI Engineer.
            </p>

            {/* Services Card — full width */}
            <div className="about__cards">
              <div className="about__info-pill-card about__info-pill-card--wide">
                <div className="about__card-icon" aria-hidden="true">
                  <Sparkles size={18} />
                </div>
                <div className="about__card-body">
                  <span className="about__card-label">Services</span>
                  <div className="about__tag-pills">
                    <span className="about__tag-pill">Frontend Development</span>
                    <span className="about__tag-pill">Full-Stack Web Apps (MERN)</span>
                    <span className="about__tag-pill">AI &amp; Data Science</span>
                    <span className="about__tag-pill">REST API Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
