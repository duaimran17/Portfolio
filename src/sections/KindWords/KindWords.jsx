// src/sections/KindWords/KindWords.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import { recommendations } from '../../data/recommendations';
import './KindWords.css';

export default function KindWords() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = recommendations.length;

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + total) % total);
  };

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.25 } }),
  };

  return (
    <section id="kind-words" className="kind-words section section--alt" aria-label="Recommendations">
      <div className="container">
        <SectionTitle
          eyebrow="Kind Words"
          title="What People Say"
          subtitle="What people I've worked with have to say."
        />

        {total === 0 ? (
          <p className="kind-words__empty">Recommendations coming soon.</p>
        ) : (
          <div className="kind-words__carousel">
            <div className="kind-words__stage" aria-live="polite">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="kind-words__slide"
                >
                  <RecommendationCard recommendation={recommendations[index]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            {total > 1 && (
              <div className="kind-words__controls">
                <button
                  className="kind-words__nav-btn"
                  onClick={() => paginate(-1)}
                  aria-label="Previous recommendation"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="kind-words__dots" role="list">
                  {recommendations.map((_, i) => (
                    <button
                      key={i}
                      role="listitem"
                      className={`kind-words__dot ${i === index ? 'kind-words__dot--active' : ''}`}
                      onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                      aria-label={`Recommendation ${i + 1} of ${total}`}
                      aria-current={i === index ? 'true' : undefined}
                    />
                  ))}
                </div>

                <button
                  className="kind-words__nav-btn"
                  onClick={() => paginate(1)}
                  aria-label="Next recommendation"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
