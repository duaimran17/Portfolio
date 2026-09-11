// src/sections/Home/Home.jsx
import { motion } from 'framer-motion';
import { Mail, FolderOpen } from 'lucide-react';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import './Home.css';

// Animated letter variants for the name
const letterVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.03 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
};

function AnimatedName({ name }) {
  return (
    <span aria-label={name}>
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Home() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home section" aria-label="Introduction">
      {/* Decorative soft backdrop lights */}
      <div className="home__blob home__blob--1" aria-hidden="true" />
      <div className="home__blob home__blob--2" aria-hidden="true" />

      <motion.div
        className="home__inner container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Cute Eyebrow Tag */}
        <motion.div
          className="home__eyebrow-wrapper"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <span className="home__eyebrow-pill">
            <span className="home__eyebrow-dot" />
            Hello, welcome to my space
          </span>
        </motion.div>

        {/* Large Expressive Name */}
        <motion.h1
          className="home__name"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
          }}
        >
          <AnimatedName name="Dua Imran" />
        </motion.h1>

        {/* Primary Subtitle */}
        <motion.div
          className="home__title-wrapper"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }}
        >
          <h2 className="home__title gradient-text">
            AI & Full Stack Developer
          </h2>
        </motion.div>

        {/* Short Minimal Bio */}
        <motion.p
          className="home__bio"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }}
        >
          I build practical projects, exploring new technologies, and continuously learning.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="home__ctas"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }}
        >
          <motion.button
            className="btn btn--primary home__cta"
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <FolderOpen size={17} />
            View Projects
          </motion.button>

          <motion.button
            className="btn btn--outline home__cta"
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Mail size={17} />
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="home__socials-wrap"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          <SocialLinks size="md" />
        </motion.div>
      </motion.div>
    </section>
  );
}
