// src/components/RecommendationCard/RecommendationCard.jsx
import { useState } from 'react';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { Linkedin } from '../Icons';
import './RecommendationCard.css';

/**
 * Editorial LinkedIn recommendation card.
 * Displays author details, context, date, and expandable verbatim recommendation text.
 */
export default function RecommendationCard({ recommendation }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { text, name, headline, context, date, avatar } = recommendation;

  // Split text into paragraphs
  const paragraphs = text.split('\n\n').filter(Boolean);
  const isLong = text.length > 220 || paragraphs.length > 1;

  // Generate tasteful initials
  const initials = name
    ? name
        .split(' ')
        .filter((w) => !w.startsWith('(') && !w.startsWith('['))
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'LI';

  return (
    <article className={`rec-card ${isExpanded ? 'rec-card--expanded' : ''}`}>
      {/* Top Bar: LinkedIn Brand Indicator & Date */}
      <div className="rec-card__top">
        <div className="rec-card__platform-badge">
          <Linkedin size={14} className="rec-card__linkedin-icon" />
          <span>Recommendation</span>
        </div>
        {date && <time className="rec-card__date">{date}</time>}
      </div>

      {/* Quote Icon watermark */}
      <div className="rec-card__quote-mark" aria-hidden="true">
        <Quote size={24} />
      </div>

      {/* Verbatim Recommendation Text (Preserving original wording exactly) */}
      <div className="rec-card__body">
        <div className={`rec-card__text-wrap ${!isExpanded && isLong ? 'rec-card__text-wrap--clamped' : ''}`}>
          {paragraphs.map((p, idx) => (
            <p key={idx} className="rec-card__paragraph">
              {p}
            </p>
          ))}
        </div>

        {isLong && (
          <button
            type="button"
            className="rec-card__expand-btn"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Show less' : 'Read more'}</span>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        )}
      </div>

      {/* Author Footer */}
      <div className="rec-card__author">
        <div className="rec-card__avatar" aria-hidden="true">
          {avatar ? (
            <img src={avatar} alt={name} className="rec-card__avatar-img" />
          ) : (
            <span className="rec-card__avatar-initials">{initials}</span>
          )}
        </div>

        <div className="rec-card__info">
          <h4 className="rec-card__name">{name}</h4>
          <p className="rec-card__headline">{headline}</p>
          {context && <p className="rec-card__context">{context}</p>}
        </div>
      </div>
    </article>
  );
}
