// src/sections/Skills/Skills.jsx
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SkillCard from '../../components/SkillCard/SkillCard';
import { skillCategories } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills section" aria-label="Skills and tech stack">
      <div className="container">
        <SectionTitle
          eyebrow="Tech Stack"
          title="Skills"
          subtitle="Technologies I work with and areas I'm actively learning."
        />

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
