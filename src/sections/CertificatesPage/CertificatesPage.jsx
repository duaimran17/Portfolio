// src/sections/CertificatesPage/CertificatesPage.jsx
// Full /certificates route: search, category filter, full grid.
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CertificateCard from '../../components/CertificateCard/CertificateCard';
import { certificates } from '../../data/certificates';
import './CertificatesPage.css';

const ALL = 'All';
const CATEGORIES = [ALL, ...Array.from(new Set(certificates.map((c) => c.category)))];

export default function CertificatesPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certificates.filter((c) => {
      const matchesCategory = activeCategory === ALL || c.category === activeCategory;
      const matchesQuery =
        !q || c.title.toLowerCase().includes(q) || c.issuer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="certs-page">
      <div className="container">
        {/* Back link */}
        <Link to="/" className="certs-page__back">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to home
        </Link>

        <SectionTitle
          eyebrow="Credentials & Learning"
          title="Certificates & Badges"
          subtitle={`${certificates.length} credentials across cloud, AI/ML, programming, and more.`}
        />

        {/* Search */}
        <div className="certs-page__search-wrap">
          <Search size={16} className="certs-page__search-icon" aria-hidden="true" />
          <input
            type="search"
            className="certs-page__search"
            placeholder="Search by title or issuer…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search certificates"
          />
        </div>

        {/* Category pills */}
        <div className="certs-page__filters" role="group" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`certs-page__pill ${activeCategory === cat ? 'certs-page__pill--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="certs-page__grid">
            {filtered.map((cert, i) => (
              <CertificateCard key={cert.id} cert={cert} index={i} static />
            ))}
          </div>
        ) : (
          <div className="certs-page__empty" role="status">
            <p>No certificates match your search.</p>
            <button
              className="btn btn--ghost"
              onClick={() => { setQuery(''); setActiveCategory(ALL); }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

