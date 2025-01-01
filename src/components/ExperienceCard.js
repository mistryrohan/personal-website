import React from 'react'

const ExperienceCard = ( {position, company, dateRange, location, description, skills} ) => {
  return (
    <div className='bg-gray-800 p-6 rounded-md mb-5 shadow-md
    ring-1 ring-gray-700 ring-offset-2 ring-offset-gray-900'>
      
      <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-3'>
        <p className='text-base text-gray-200'>{dateRange}</p>
        <p className='text-base text-gray-200'>{location}</p>
      </div>

      <div className='mb-4'>
        <h3 className="text-xl font-semibold text-white">{position}</h3>
        <h2 className='text-lg font-semibold text-white'>{company}</h2>
      </div>

      <div className='text-gray-200 mb-4'>
        {description}
      </div>

      <div className='flex flex-wrap gap-3 mb-4'>
        {skills.map((skill, i) => (
            <span key={i} className='text-sm bg-gray-700 text-gray-200 px-3 py-1 rounded-full'>
                {skill}
            </span>
        ))}
      </div>

    </div>
  )
}

export default ExperienceCard
