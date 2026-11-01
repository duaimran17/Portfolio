// src/sections/Certificates/Certificates.jsx
// Home-page preview: shows only featured (top 3) certificates + "View all" link.
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CertificateCard from '../../components/CertificateCard/CertificateCard';
import { certificates } from '../../data/certificates';
import './Certificates.css';

const featured = certificates.filter((c) => c.featured);

export default function Certificates() {
  return (
    <section id="certificates" className="certificates section section--alt" aria-label="Certificates">
      <div className="container">
        <SectionTitle
          eyebrow="Credentials & Learning"
          title="Certificates"
          subtitle="A curated selection of my verified credentials and professional development."
        />

        <div className="certificates__grid">
          {featured.map((cert, i) => (
            <CertificateCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        <div className="certificates__footer">
          <Link to="/certificates" className="btn btn--outline certificates__view-all">
            View all certificates
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

