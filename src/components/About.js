import React from 'react'

const About = () => {
  return (
    <section id="about" className="mt-20 mb-20 mx-auto max-w-3xl px-6">
      <div className="text-center">

        <h2 className="hidden md:block text-4xl font-bold mb-8 text-white">
          Welcome to my website!
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            I am a developer who loves to learn about the latest in{' '}
            <span className="text-white font-semibold">software</span> and{' '}
            <span className="text-white font-semibold">data</span> and integrate
            that into working solutions and projects. Feel free to reach out to
            chat!
          </p>

          <p>
            Some of my personal interests are sports such as soccer and basketball{' '}
            <span
              className="inline-block font-bold text-gray-200 cursor-pointer transition-all duration-300 hover:text-red-600 hover:scale-110 hover:-rotate-2"
            >
              (Let's Go Raptors!)
            </span>
            , attending concerts, and finding new ways to get a deeper
            understanding of the world around me.
            
            {/* Thinking Emoji Tooltip */}
            <span className="relative inline-block group ml-2 cursor-help">
              <span className="text-2xl hover:scale-110 inline-block transition-transform duration-200">
                🤔
              </span>

              {/* The Tooltip Bubble */}
              <div className="
                absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 
                p-4 rounded-xl 
                bg-slate-800/95 border border-slate-600 shadow-xl shadow-black/50
                opacity-0 scale-95 translate-y-1
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                transition-all duration-200 ease-out origin-bottom z-50
              ">
                <p className="text-white text-sm font-medium">
                  I also have an AWS certificate from Udemy ☁️ and a Lifesaving Society CPR Certificate ⛑️
                </p>

                {/* Little Triangle Arrow at the bottom */}
                <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-slate-800 border-r border-b border-slate-600 transform rotate-45"></div>
              </div>
            </span>

          </p>
        </div>
      </div>
    </section>
  )
}

export default About