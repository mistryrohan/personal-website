import React from 'react'

const ProjectCard = ( {title, description, image, repoLink, skills} ) => {
  return (
    <a href={repoLink} target='_blank' rel="noopener noreferrer" className='flex items-start gap-4 mb-5 p-3 cursor-pointer rounded-lg shadow-md transition-colors bg-gray-800 hover:bg-gray-700'>
        <img src={image} alt={`${title} image`} className='w-25 h-20 object-cover rounded'/>

        <div>
            <h2 className='text-lg font-semibold mb-1 text-white'>{title}</h2>
            <p className='text-sm text-gray-200'>{description}</p>
        </div>
    </a>
  )
}

export default ProjectCard;
