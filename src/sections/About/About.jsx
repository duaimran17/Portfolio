// src/sections/About/About.jsx
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Briefcase, Camera } from 'lucide-react';
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

        <div className="about__grid">
          {/* LEFT: Photo Placeholder Frame */}
          <motion.div
            className="about__photo-col"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about__photo-frame">
              <div className="about__photo-inner">
                <div className="about__photo-icon-box" aria-hidden="true">
                  <Camera size={36} className="about__photo-icon" />
                </div>
                <span className="about__photo-text">[Add photo]</span>
                <span className="about__photo-hint">Replace with your personal photo</span>
              </div>

              {/* Cute Floating status tag on the photo frame */}
              <div className="about__photo-badge">
                <span className="about__status-dot" />
                <span>Open for work</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: About Details */}
          <motion.div
            className="about__content-col"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Genuine, grounded paragraph */}
            <p className="about__paragraph">
              I'm Dua Imran, a Computer Science student with an active curiosity for how software
              is crafted and how artificial intelligence can solve practical challenges. I enjoy building
              clean, reliable projects, learning new tools through hands-on practice, and steadily
              growing as a developer.
            </p>

            {/* Structured Info Cards */}
            <div className="about__cards">
              {/* Education */}
              <div className="about__info-pill-card">
                <div className="about__card-icon" aria-hidden="true">
                  <GraduationCap size={20} />
                </div>
                <div className="about__card-body">
                  <span className="about__card-label">University</span>
                  <p className="about__card-main">BS Computer Science</p>
                  <p className="about__card-sub">University of Central Punjab · 2023 – Present</p>
                </div>
              </div>

              {/* Location */}
              <div className="about__info-pill-card">
                <div className="about__card-icon" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div className="about__card-body">
                  <span className="about__card-label">Location</span>
                  <p className="about__card-main">Lahore, Pakistan</p>
                </div>
              </div>

              {/* Current Direction / Interests */}
              <div className="about__info-pill-card">
                <div className="about__card-icon" aria-hidden="true">
                  <Sparkles size={20} />
                </div>
                <div className="about__card-body">
                  <span className="about__card-label">Interests & Focus</span>
                  <div className="about__tag-pills">
                    <span className="about__tag-pill">AI</span>
                    <span className="about__tag-pill">Full-Stack Development</span>
                  </div>
                </div>
              </div>

              {/* Opportunities status */}
              <div className="about__info-pill-card about__info-pill-card--highlight">
                <div className="about__card-icon" aria-hidden="true">
                  <Briefcase size={20} />
                </div>
                <div className="about__card-body">
                  <span className="about__card-label">Opportunities</span>
                  <p className="about__card-main">Open for internships, projects & collaborations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
