import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projectData';

const Projects = () => {
  return (
    <section id="projects" className="mx-auto mb-20 max-w-3xl px-6">
      
      {projectData.map(project => (
        <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            repoLink={project.repoLink}
            skills={project.skills}
        />

      ))}
    </section>
    
  )
}

export default Projects;
