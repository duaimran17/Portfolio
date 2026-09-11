// src/sections/Projects/Projects.jsx
import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import { projects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects section" aria-label="Projects">
      <div className="container">
        <SectionTitle
          eyebrow="What I've Built"
          title="Featured Projects"
          subtitle="Selected work across full-stack development, web applications, and 3D modelling."
        />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
