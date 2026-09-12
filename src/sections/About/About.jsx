// src/sections/About/About.jsx
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';
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
                src="/images/dua.jpeg"
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
              Turning <strong>big ideas</strong> into <em>interactive realities.</em>
            </p>

            {/* Authentic paragraph */}
            <p className="about__paragraph">
              I, Dua Imran, a Computer Science undergrad based in Lahore building at the intersection of full-stack engineering and artificial intelligence. My sweet spot? Crafting interfaces that feel fast and lively, backed by intelligent, reliable systems under the hood. My work always aims for clear, scalable, and maintainable code. Beyond VS Code, you'll find me organizing university event tracks, staying active in competitive sports, and always looking out for the next interesting project or collaboration.
            </p>

            {/* Structured Info Cards */}
            <div className="about__cards">
              {/* Education */}
              <div className="about__info-pill-card">
                <div className="about__card-icon" aria-hidden="true">
                  <GraduationCap size={18} />
                </div>
                <div className="about__card-body">
                  <span className="about__card-label">Education</span>
                  <p className="about__card-main">BS Computer Science</p>
                  <p className="about__card-sub">University of Central Punjab · 2023 – 2027</p>
                </div>
              </div>

              {/* Location */}
              <div className="about__info-pill-card">
                <div className="about__card-icon" aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <div className="about__card-body">
                  <span className="about__card-label">Location</span>
                  <p className="about__card-main">Lahore, Pakistan</p>
                </div>
              </div>

              {/* Current Direction / Interests */}
              <div className="about__info-pill-card about__info-pill-card--wide">
                <div className="about__card-icon" aria-hidden="true">
                  <Sparkles size={18} />
                </div>
                <div className="about__card-body">
                  <span className="about__card-label">Interests & Focus</span>
                  <div className="about__tag-pills">
                    <span className="about__tag-pill">AI</span>
                    <span className="about__tag-pill">Full-Stack Development</span>
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
