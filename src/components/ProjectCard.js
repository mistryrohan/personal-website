import React from 'react'

const ProjectCard = ({ title, description, image, repoLink, skills }) => {
  return (
    <a 
      href={repoLink} 
      target='_blank' 
      rel="noopener noreferrer" 
      className='
        group relative flex flex-col sm:flex-row items-start gap-6 
        mx-4 sm:mx-10 md:mx-16 lg:ml-16 lg:mr-40 mb-8 
        p-6 sm:p-8 
        rounded-xl 
        bg-gray-900/50 
        border border-gray-800 
        transition-all duration-200 
        hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:bg-gray-900
        cursor-pointer
      '
    >
      <img 
        src={image} 
        alt={`${title} image`} 
        className='w-full sm:w-32 h-40 sm:h-24 object-cover rounded-md flex-shrink-0 border border-gray-700/50'
      />

      <div className='flex flex-col justify-between w-full'>
        <div>
          <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2'>
            {title}
          </h3>
          <p className='text-gray-300/90 mb-4 text-md leading-relaxed'>
            {description}
          </p>
        </div>

        <div className='flex flex-wrap gap-3'>
          {skills.map((skill, i) => (
            <span 
              key={i} 
              className='
                px-4 py-1.5 
                text-sm font-medium 
                rounded-full 
                text-blue-200 bg-blue-900/30 
                transition-all duration-200 
                hover:bg-blue-600 hover:text-white
              '
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard;