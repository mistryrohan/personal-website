import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projectData';

const Projects = () => {
  return (
    <section id='projects' className='mb-20 my-5'>
      
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
