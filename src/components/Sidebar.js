import React from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const Sidebar = ( {activeSection} ) => {
  return (
    <aside className="flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mt-10 mb-4">Rohan Mistry</h1>
      <p>Computer Science @ University of Toronto</p>
      <p className="mb-4">Software Engineering Intern @ BlueCat</p>

      <nav className='flex flex-col gsp-2 mt-10'>
        {sections.map((section) => {
          const isActive = section.id === activeSection;
          return (
            <a key={section.id} href={`#${section.id}`} className={`block py-1 hover:underline mb-5 ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`}>
              {section.label}
            </a>
          )
        })}
        {/* <a href="#about" className="block py-1 hover:underline">About</a>
        <a href="#experience" className="block py-1 hover:underline">Experience</a>
        <a href="#projects" className="block py-1 hover:underline">Projects</a> */}
      </nav>

    </aside>
  )
}

export default Sidebar
