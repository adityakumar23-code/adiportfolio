import React from 'react';
import { ArrowDown, Mail, MapPin, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom clean SVG icons for GitHub & LinkedIn to guarantee exact brand silhouette
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status / Location Tag */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 mb-6">
          <div className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100/80 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Open for learning & internships</span>
          </div>

          <div className="inline-flex items-center gap-1 py-1 px-2.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>{PORTFOLIO_DATA.personal.location}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1 py-1 px-2.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
            <GraduationCap className="w-3 h-3 text-slate-400" />
            <span>{PORTFOLIO_DATA.personal.college}</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Hi, I&apos;m{' '}
            <span className="text-blue-600">{PORTFOLIO_DATA.personal.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-700 tracking-tight">
            {PORTFOLIO_DATA.personal.heroRole}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed pt-1">
            {PORTFOLIO_DATA.personal.subtitle}
          </p>
        </div>

        {/* Short introduction paragraph */}
        <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
          <p className="italic text-slate-700">
            &ldquo;{PORTFOLIO_DATA.personal.shortIntro}&rdquo;
          </p>
        </div>

        {/* Buttons & Social links */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-xs focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View My Projects
          </button>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Contact Me
          </button>

          {/* Social Profiles */}
          <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-slate-200">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="GitHub Profile (opens in new tab)"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-[#0077b5] hover:bg-slate-100 rounded-md transition-colors"
              aria-label="LinkedIn Profile (opens in new tab)"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Send Email"
              title={`Email: ${PORTFOLIO_DATA.personal.email}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Subtle quick indicator */}
        <div className="mt-12 flex items-center gap-2 text-xs text-slate-400">
          <ArrowDown className="w-3.5 h-3.5 text-blue-500" />
          <span>Explore my background, skills, projects, and certifications below</span>
        </div>
      </div>
    </section>
  );
};
