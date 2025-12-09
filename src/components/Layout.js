import { useState, useEffect } from 'react'
import Sidebar from './Sidebar';

const Layout = ({ children } ) => {
  const [activeSection, setActiveSection] = useState(''); 

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.6,
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [])

  return (
    <div className="relative min-h-screen w-screen text-white bg-slate-900">
        <div className="w-full p-6 md:fixed md:top-0 md:left-0 md:h-screen md:w-[35%] md:bg-slate-800 md:border-slate-800">

            <Sidebar activeSection={activeSection} />
        </div>
     
        <main className='p-6 min-h-screen md:h-screen md:overflow-y-auto md:ml-[35%]'>
            {children}
        </main>
    </div>
  );
};


export default Layout