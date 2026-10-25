import React, { useState } from 'react';
import { ExternalLink, FolderGit2, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

// Custom clean GitHub icon
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
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

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Web Development', 'AI & Data', 'System & Utilities'];

  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
              <span>Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Featured Work & Prototypes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Practical software concepts and projects built to reinforce programming concepts,
              architectural patterns, and real-life utility.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 py-1.5 px-3 rounded-md border border-slate-200 hover:border-blue-200 transition-colors self-start sm:self-auto"
          >
            <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>github.com/adityakumar23-code</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-400 font-medium mr-1">Filter:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards List */}
        <div className="space-y-5">
          {filteredProjects.map((project: ProjectItem) => (
            <article
              key={project.id}
              className="p-6 rounded-lg border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded bg-blue-50 text-blue-600">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                    {project.status}
                  </span>
                </div>

                <p className="text-xs font-medium text-blue-700/90 mb-2">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                {/* Technology Tags */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-slate-50 text-slate-700 border border-slate-200/80 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Repository Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200 px-3.5 py-1.5 rounded-md transition-colors"
                  title={`View ${project.title} repository on GitHub`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note on Repositories */}
        <div className="mt-8 p-3.5 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p>
            All projects are maintained under my GitHub account{' '}
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 underline hover:text-blue-800"
            >
              @adityakumar23-code
            </a>
            . Repositories receive periodic commits as features and coursework milestones are completed.
          </p>
        </div>
      </div>
    </section>
  );
};
