import React from 'react';
import ExperienceCard from './ExperienceCard';
import experienceData from '../data/experienceData';

const Experience = () => {
  return (
    <section id='experience' className='mt-20 mb-20 my-5'>
      {/* <h2 className='text-3xl font-bold text-white mb-6'>Experience</h2> 
      TODO I only want these to show up if it is the active section*/}

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
