import React from 'react';
import ExperienceCard from './ExperienceCard';
import experienceData from '../data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="mx-auto mt-20 mb-20 max-w-3xl px-6">

      {experienceData.map(job => (
        <ExperienceCard
            key={job.id}
            dateRange={job.dateRange}
            position={job.position}
            location={job.location}
            company={job.company}
            description={job.description}
            skills={job.skills}
        />

      ))}
    </section>
  )
}

export default Experience
