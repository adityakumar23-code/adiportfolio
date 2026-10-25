import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { Terminal, Database, Brain, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming Languages',
    'Web & Database',
    'AI & Cloud',
    'Tools & Version Control',
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: SkillItem['category']) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-4 h-4 text-blue-600" />;
      case 'Web & Database':
        return <Database className="w-4 h-4 text-blue-600" />;
      case 'AI & Cloud':
        return <Brain className="w-4 h-4 text-blue-600" />;
      case 'Tools & Version Control':
        return <Wrench className="w-4 h-4 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
            <span>Skills & Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Current Skills & Learning Areas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            A transparent overview of the languages, tools, and technical domains I am currently
            practicing in my BCA curriculum and exploring through personal projects.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-900 inline-flex items-center gap-1.5">
                    {getCategoryIcon(skill.category)}
                    {skill.name}
                  </span>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      skill.learningStage === 'Active Practice'
                        ? 'bg-blue-50 text-blue-700 border border-blue-100'
                        : skill.learningStage === 'Foundational'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        : 'bg-amber-50 text-amber-700 border border-amber-100'
                    }`}
                  >
                    {skill.learningStage}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {skill.notes}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>{skill.category}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tag Summary as requested */}
        <div className="mt-8 p-4 rounded-lg border border-slate-100 bg-slate-50/80">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
            All Key Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_DATA.skills.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center px-2.5 py-1 rounded bg-white text-slate-800 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400 italic">
          * Skills are presented based on current academic and project learning; continuous practice is ongoing.
        </p>
      </div>
    </section>
  );
};
