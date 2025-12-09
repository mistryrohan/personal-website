import React from 'react'
import GitHubIcon from "../images/GithubIcon.png";
import LinkedInIcon from "../images/LinkedInIcon.png"
import ResumeIcon from "../images/ResumeIcon.png"

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const Sidebar = ( {activeSection} ) => {
  return (
    <aside className="flex flex-col items-center text-center mt-5 mb-3">
      <h1 className="text-4xl font-bold mt-10 mb-4">Rohan Mistry</h1>

      <div className="text-lg text-gray-300 space-y-1 mb-6">
        <p>Computer Science @ University of Toronto</p>

        <p>
          Building{" "}
          <a
            href="https://iqbank.teach.cs.toronto.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-100 hover:text-blue-400 underline decoration-dotted underline-offset-4 transition-colors"
          >
            IQBank
          </a>
        </p>

        <p>
          Previous Software Engineering Intern @{" "}
          <a
            href="https://bluecatnetworks.com/blog/exciting-product-update-introducing-bluecat-integrity-x/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-100 hover:text-blue-400 underline decoration-dotted underline-offset-4 transition-colors"
          >
            BlueCat
          </a>
        </p>
      </div>


      <nav className='flex flex-col gsp-2 mt-10'>
        {sections.map((section) => {
          const isActive = section.id === activeSection;
          return (
            <a key={section.id} href={`#${section.id}`} className={`block py-1 hover:underline text-xl font-bold tracking-wide mb-5 ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`}>
              {section.label}
            </a>
          )
        })}
      </nav>

      <div className="mt-20 mb-5">

        <div className="flex justify-center space-x-8 mb-4">

          <a
            href="https://github.com/mistryrohan"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <img
              src={GitHubIcon}
              alt="GitHub"
              className="w-10 h-10 md:w-11 md:h-11"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/mistry-rohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
          >
            <img
              src={ResumeIcon}
              alt="Resume"
              className="w-10 h-10 md:w-12 md:h-12"
            />
          </a>
        </div>

        <a
          href="mailto:rohan.mistry@mail.utoronto.ca"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 text-md text-gray-300 hover:border-blue-400 hover:text-blue-300 hover:bg-gray-800/60 transition"
        >
          <span className="font-large">rohan.mistry@mail.utoronto.ca</span>
        </a>
      </div>

    </aside>
  )
}

export default Sidebar
