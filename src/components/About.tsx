import React from 'react';
import { BookOpen, Code, Compass, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Background & Learning Journey
          </h2>
        </div>

        {/* Introduction content */}
        <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          <p>{PORTFOLIO_DATA.about.mainText}</p>
          <p>{PORTFOLIO_DATA.about.secondaryText}</p>
        </div>

        {/* Education & Academic Details */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/60 hover:border-blue-200 transition-colors">
            <div className="w-9 h-9 rounded-md bg-blue-100/70 text-blue-700 flex items-center justify-center mb-3">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Education</h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              {PORTFOLIO_DATA.about.education.degree}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {PORTFOLIO_DATA.about.education.institution}
            </p>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-slate-500">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{PORTFOLIO_DATA.about.education.location}</span>
            </div>
          </div>

          <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/60 hover:border-blue-200 transition-colors">
            <div className="w-9 h-9 rounded-md bg-blue-100/70 text-blue-700 flex items-center justify-center mb-3">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Current Focus</h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              Programming & Data
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Practicing logic building in Python, C, and Java alongside SQL database querying.
            </p>
            <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-blue-600 font-medium">
              <span>Building practical projects</span>
            </div>
          </div>

          <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/60 hover:border-blue-200 transition-colors">
            <div className="w-9 h-9 rounded-md bg-blue-100/70 text-blue-700 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-slate-900">Exploring</h3>
            <p className="mt-1 text-sm font-medium text-slate-800">
              AI & Cloud Workflows
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Prompt engineering, generative model integration, and cloud architecture basics.
            </p>
            <div className="mt-3 inline-flex items-center gap-1 text-[11px] text-blue-600 font-medium">
              <span>Continuous upskilling</span>
            </div>
          </div>
        </div>

        {/* How I approach learning */}
        <div className="mt-10 pt-8 border-t border-slate-100">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
            Core Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.about.values.map((v, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    0{i + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-900">{v.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-7">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
