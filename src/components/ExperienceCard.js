import React from 'react'

const ExperienceCard = ( {position, company, dateRange, location, description, skills} ) => {
  return (
    <div className='sm:p-6 rounded-md mb-10 md:mb-4 shadow-md mx-4 sm:mx-10 md:mx-16 lg:ml-10 lg:mr-40'>
      
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

      <div className='flex flex-wrap gap-2 sm:gap-3 mb-4'>
        {skills.map((skill, i) => (
            <span key={i} className='text-sm bg-gray-700 text-gray-200 px-2 sm:px-3 py-1 rounded-full'>
                {skill}
            </span>
        ))}
      </div>

    </div>
  )
}

export default ExperienceCard
