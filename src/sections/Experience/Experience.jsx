// src/sections/Experience/Experience.jsx
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import { experiences } from '../../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience section section--alt" aria-label="Experience and Journey">
      <div className="container">
        <SectionTitle
          eyebrow="My Journey"
          title="Experience & Milestones"
          subtitle="A unified timeline of technical projects, leadership roles, volunteering, and achievements."
        />

        {/* ONE unified timeline */}
        <div className="experience__unified-timeline">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
