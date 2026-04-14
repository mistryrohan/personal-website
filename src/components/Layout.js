import { useState, useEffect, useRef, useCallback } from 'react'
import Sidebar from './Sidebar';

const Layout = ({ children } ) => {
  const [activeSection, setActiveSection] = useState('about'); 
  const mainRef = useRef(null);

  const updateActive = useCallback(() => {
    const container = mainRef.current;
    if (!container) return;

    const isDesktop = window.innerWidth >= 768;
    const scrollEl = isDesktop ? container : document.documentElement;
    const viewportH = isDesktop ? container.clientHeight : window.innerHeight;
    const trigger = viewportH * 0.35;

    const sections = container.querySelectorAll('section[id]');
    let current = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const top = isDesktop
        ? rect.top - container.getBoundingClientRect().top
        : rect.top;

      if (top <= trigger) {
        current = section.id;
      }
    });

    if (!current && sections.length > 0) {
      const atTop = isDesktop ? scrollEl.scrollTop < 50 : window.scrollY < 50;
      if (atTop) current = sections[0].id;
    }

    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    updateActive();

    const opts = { passive: true };
    window.addEventListener('scroll', updateActive, opts);
    main?.addEventListener('scroll', updateActive, opts);
    window.addEventListener('resize', updateActive, opts);

    return () => {
      window.removeEventListener('scroll', updateActive);
      main?.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [updateActive]);

  return (
    <div className="relative min-h-screen w-screen text-white bg-slate-800">
        <div className="bg-grid-nodes w-full p-6 md:fixed md:top-0 md:left-0 md:h-screen md:w-[35%] md:bg-slate-800 md:border-slate-800">

            <Sidebar activeSection={activeSection} />
        </div>
     
        <main ref={mainRef} className='bg-flow-network p-6 min-h-screen md:h-screen md:overflow-y-auto md:ml-[35%]'>
            {children}
        </main>
    </div>
  );
};


export default Layout
