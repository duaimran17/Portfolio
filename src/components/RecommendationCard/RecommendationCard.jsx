import { Quote } from 'lucide-react';
import { Linkedin } from '../Icons';
import './RecommendationCard.css';

/**
 * Single recommendation card.
 * Props: recommendation object from src/data/recommendations.js
 */
export default function RecommendationCard({ recommendation }) {
  const { text, author, role, organization, avatar, linkedinUrl } = recommendation;

  return (
    <div className="rec-card" role="article">
      <Quote size={32} className="rec-card__quote-icon" aria-hidden="true" />

      <blockquote className="rec-card__text">
        <p>"{text}"</p>
      </blockquote>

      <div className="rec-card__author">
        <div className="rec-card__avatar" aria-hidden="true">
          {avatar ? (
            <img src={avatar} alt={author} />
          ) : (
            <span className="rec-card__avatar-initials">
              {author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
            </span>
          )}
        </div>

        <div className="rec-card__info">
          <strong className="rec-card__name">{author}</strong>
          <span className="rec-card__role">
            {role}{organization ? ` · ${organization}` : ''}
          </span>
        </div>

        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rec-card__linkedin"
            aria-label={`${author}'s LinkedIn profile`}
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
