import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projectData';

const Projects = () => {
  return (
    <section id='projects' className='mb-20 my-5'>
      {/* <h2 className='text-3xl font-bold text-white mb-6'>Projects</h2>
      TODO I only want these to show up if it is the active section */}

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
