// src/sections/KindWords/KindWords.jsx
import { motion } from 'framer-motion';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import RecommendationCard from '../../components/RecommendationCard/RecommendationCard';
import { recommendations } from '../../data/recommendations';
import './KindWords.css';

export default function KindWords() {
  return (
    <section id="kind-words" className="kind-words section section--alt" aria-label="Kind Words and Recommendations">
      <div className="container">
        <SectionTitle
          eyebrow="Endorsements"
          title="Kind Words"
          subtitle="Selected LinkedIn recommendations from professors, mentors, and collaborators."
        />

        {recommendations.length === 0 ? (
          <p className="kind-words__empty">Recommendations coming soon.</p>
        ) : (
          <div className="kind-words__grid">
            {recommendations.map((recommendation, i) => (
              <motion.div
                key={recommendation.id}
                className="kind-words__col"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <RecommendationCard recommendation={recommendation} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
