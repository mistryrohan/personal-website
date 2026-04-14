import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ReactComponent as IconGithub } from '../icons/github.svg';
import { ReactComponent as IconLinkedin } from '../icons/linkedin.svg';
import { ReactComponent as IconCertificate } from '../icons/certificate.svg';
import { ReactComponent as IconMail } from '../icons/mail.svg';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const iconClassName = 'h-9 w-9 shrink-0';

const linkIconClassName =
  'flex items-center justify-center text-gray-300 transition-all duration-200 hover:scale-110 hover:text-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 rounded';

const CERTIFICATES = [
  'AWS certificate (Udemy)',
  'Lifesaving Society CPR certification',
];

const Sidebar = ({ activeSection }) => {
  const [certsOpen, setCertsOpen] = useState(false);
  const certsWrapRef = useRef(null);

  const closeCerts = useCallback(() => setCertsOpen(false), []);

  useEffect(() => {
    if (!certsOpen) return;

    const onDocMouseDown = (e) => {
      if (certsWrapRef.current && !certsWrapRef.current.contains(e.target)) {
        closeCerts();
      }
    };

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeCerts();
    };

    document.addEventListener('mousedown', onDocMouseDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [certsOpen, closeCerts]);

  return (
    <aside className="mt-5 mb-3 flex flex-col items-center text-center">
      <h1 className="mb-4 mt-10 text-4xl font-bold">Rohan Mistry</h1>

      <div className="mb-6 space-y-1 text-lg text-gray-300">
        <p>Computer Science @ University of Toronto</p>

        <p>
          Building{' '}
          <a
            href="https://iqbank.teach.cs.toronto.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-100 underline decoration-dotted underline-offset-4 transition-colors hover:text-blue-400"
          >
            IQBank
          </a>
        </p>

        <p>
          Prev. Software Engineering Intern @{' '}
          <a
            href="https://bluecatnetworks.com/blog/exciting-product-update-introducing-bluecat-integrity-x/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-100 underline decoration-dotted underline-offset-4 transition-colors hover:text-blue-400"
          >
            BlueCat
          </a>
        </p>
      </div>

      <nav className="mt-10 flex flex-col gap-2" aria-label="Page sections">
        {sections.map((section) => {
          const isActive = section.id === activeSection;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`mb-5 block rounded py-1 text-xl font-bold tracking-wide hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              {section.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-20 mb-5 flex w-full flex-col items-center">
        <div
          className="flex flex-row flex-wrap items-center justify-center gap-8"
          role="group"
          aria-label="Social, certifications, and contact"
        >
          <a
            href="https://github.com/mistryrohan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={linkIconClassName}
          >
            <IconGithub className={iconClassName} aria-hidden />
          </a>

          <a
            href="https://www.linkedin.com/in/mistry-rohan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={linkIconClassName}
          >
            <IconLinkedin className={iconClassName} aria-hidden />
          </a>

          <div
            className="relative flex justify-center"
            ref={certsWrapRef}
            onMouseEnter={() => setCertsOpen(true)}
            onMouseLeave={() => setCertsOpen(false)}
          >
            <button
              type="button"
              aria-label="View certifications"
              aria-expanded={certsOpen}
              aria-controls="sidebar-certs-popover"
              aria-haspopup="dialog"
              className={`${linkIconClassName} border-0 bg-transparent p-0 cursor-pointer`}
              onClick={() => setCertsOpen((o) => !o)}
            >
              <IconCertificate className={iconClassName} aria-hidden />
            </button>

            <div
              id="sidebar-certs-popover"
              role="dialog"
              aria-label="Certifications"
              aria-hidden={!certsOpen}
              className={[
                'absolute bottom-full left-1/2 z-50 mb-3 w-64 -translate-x-1/2 rounded-xl border border-slate-600 bg-slate-800/95 p-4 text-left shadow-xl shadow-black/50 transition-all duration-200 ease-out origin-bottom',
                certsOpen
                  ? 'pointer-events-auto scale-100 opacity-100 translate-y-0'
                  : 'pointer-events-none scale-95 opacity-0 translate-y-1',
              ].join(' ')}
            >
              {/* Keeps hover path continuous between icon and panel (covers margin gap). */}
              <div
                className="absolute -bottom-3 left-0 right-0 h-3"
                aria-hidden
              />
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Certifications
              </p>
              <ul className="list-inside list-disc space-y-2 text-sm font-medium leading-relaxed text-white">
                {CERTIFICATES.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div
                className="absolute left-1/2 -bottom-2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b border-slate-600 bg-slate-800/95"
                aria-hidden
              />
            </div>
          </div>

          <a
            href="mailto:mistryrohan222@gmail.com"
            aria-label="Email mistryrohan222@gmail.com"
            title="mistryrohan222@gmail.com"
            className={linkIconClassName}
          >
            <IconMail className={iconClassName} aria-hidden />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
