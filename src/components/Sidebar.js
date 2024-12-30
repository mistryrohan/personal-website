import React from 'react'

const Sidebar = () => {
  return (
    <aside>
      <h1 className="text-3xl font-bold mb-4">Rohan Mistry</h1>
      <p className="mb-4">Computer Science @ University of Toronto | Software Engineering Intern @ BlueCat</p>
      <nav>
        <a href="#about" className="block py-1 hover:underline">About - remove titles </a>
        <a href="#experience" className="block py-1 hover:underline">Experience</a>
        <a href="#projects" className="block py-1 hover:underline">Projects</a>
      </nav>
    </aside>
  )
}

export default Sidebar
