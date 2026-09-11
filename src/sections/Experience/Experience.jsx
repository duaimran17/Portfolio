// src/sections/Experience/Experience.jsx
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ExperienceItem from '../../components/ExperienceItem/ExperienceItem';
import { professionalExperience, leadershipExperience, activities } from '../../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience section section--alt" aria-label="Experience">
      <div className="container">
        <SectionTitle
          eyebrow="My Journey"
          title="Experience"
          subtitle="Professional experience, campus leadership, and meaningful activities."
        />

        <div className="experience__columns">

          {/* Professional */}
          <div className="experience__group">
            <h2 className="experience__group-title">
              <span className="experience__group-dot" aria-hidden="true" />
              Professional
            </h2>
            <div className="experience__timeline">
              {professionalExperience.map((exp, i) => (
                <ExperienceItem key={exp.id} experience={exp} index={i} />
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="experience__group">
            <h2 className="experience__group-title">
              <span className="experience__group-dot" aria-hidden="true" />
              Leadership & Campus
            </h2>
            <div className="experience__timeline">
              {leadershipExperience.map((exp, i) => (
                <ExperienceItem key={exp.id} experience={exp} index={i} />
              ))}
              {activities.map((exp, i) => (
                <ExperienceItem key={exp.id} experience={exp} index={leadershipExperience.length + i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
