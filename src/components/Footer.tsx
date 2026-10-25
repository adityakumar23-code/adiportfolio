import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">
              AK
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {PORTFOLIO_DATA.personal.name}
              </p>
              <p className="text-xs text-slate-500">
                {PORTFOLIO_DATA.personal.college}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-slate-500">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={onOpenDeployGuide}
              className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              Run & Deploy Guide
            </button>
          </nav>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 hover:bg-slate-50 p-2 rounded-md transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright & Tagline */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            &copy; 2026 Aditya Kumar. Built with curiosity and a passion for technology.
          </p>
          <p className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Bengaluru, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
