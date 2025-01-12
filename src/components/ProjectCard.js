import React from 'react'

const ProjectCard = ({ title, description, image, repoLink, skills }) => {
  return (
    <a 
      href={repoLink} 
      target='_blank' 
      rel="noopener noreferrer" 
      className='flex flex-col sm:flex-row items-start gap-4 mb-8 p-4 sm:p-6 mx-4 sm:mx-10 md:mx-16 lg:ml-10 lg:mr-40 cursor-pointer rounded-lg shadow-md transition-colors hover:bg-gray-700'
    >
      <img 
        src={image} 
        alt={`${title} image`} 
        className='w-full sm:w-32 h-40 sm:h-24 object-cover rounded-md flex-shrink-0'
      />

      <div className='flex flex-col justify-between w-full'>
        <div>
          <h2 className='text-lg sm:text-xl font-semibold mb-2 text-white'>{title}</h2>
          <p className='text-sm sm:text-base text-gray-200 mb-4'>{description}</p>
        </div>

        <div className='flex flex-wrap gap-2 sm:gap-3'>
          {skills.map((skill, i) => (
            <span key={i} className='text-xs sm:text-sm bg-gray-700 text-gray-200 px-2 sm:px-3 py-1 rounded-full'>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard;
