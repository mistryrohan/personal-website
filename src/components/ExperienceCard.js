const ExperienceCard = ({ position, company, dateRange, location, description, skills }) => {
  return (
    <div className="
      group relative
      mx-4 sm:mx-10 md:mx-16 lg:ml-16 lg:mr-40 mb-8
      p-6 sm:p-8
      rounded-xl
      bg-gray-900/50
      border border-gray-800
      transition-all duration-200
      hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-2xl hover:bg-gray-900
    ">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        
        <div className="md:mb-0">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {position}
          </h3>
          <p className="text-lg font-medium text-blue-400 mt-1">
            {company}
          </p>
        </div>

        {/* Date and Location */}
        <div className="flex flex-col md:items-end">
          <p className="text-base font-semibold text-gray-300">{dateRange}</p>
          <p className="text-md text-gray-300">{location}</p>
        </div>

      </div>

      {/* Description */}
      <div className="text-gray-300/90 mb-8 text-md leading-relaxed">
        {description}
      </div>

      {/* Skills Section - Consistent Blue */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span 
            key={i} 
            className="
              px-4 py-1.5
              text-sm font-medium
              rounded-full
              text-blue-200 bg-blue-900/30
              transition-all duration-200
              hover:bg-blue-600 hover:text-white
              cursor-default
            "
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  )
}

export default ExperienceCard;