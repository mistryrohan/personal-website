import React from 'react'

const ProjectCard = ( {title, description, image, repoLink, skills} ) => {
  return (
    <a href={repoLink} target='_blank' rel="noopener noreferrer" className='flex items-start gap-4 mb-8 p-3 
    ml-10 mr-40 cursor-pointer rounded-lg shadow-md transition-colors hover:bg-gray-700'>
        <img src={image} alt={`${title} image`} className='w-32 h-24 object-cover rounded flex-shrink-0'/>

        <div className='flex flex-col justify-between w-full'>
            <div>
                <h2 className='text-lg font-semibold mb-1 text-white'>{title}</h2>
                <p className='text-sm text-gray-200 mb-4'>{description}</p>
            </div>

            <div className='flex flex-wrap gap-3'>
            {skills.map((skill, i) => (
                <span key={i} className='text-sm bg-gray-700 text-gray-200 px-3 py-1 rounded-full'>
                    {skill}
                </span>
            ))}
      </div>

        </div>
    </a>
  )
}

export default ProjectCard;
