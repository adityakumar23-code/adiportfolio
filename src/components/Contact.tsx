import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, ExternalLink, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom clean GitHub & LinkedIn icons
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

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject.trim() ? subject : `Opportunity / Hello from ${senderName || 'Portfolio Visitor'}`
    );
    const bodyContent = encodeURIComponent(
      `Hello Aditya,\n\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${mailSubject}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
            <span>Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Let&apos;s Connect & Collaborate
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Whether you have an internship opportunity, an academic project inquiry, or just want
            to discuss technology and programming, I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Direct Contact Cards (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="text-sm font-semibold text-slate-900 hover:text-blue-600 break-all transition-colors inline-block"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Click to open your default email application.
              </p>
            </div>

            {/* Social Links Card */}
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 space-y-3">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500 block">
                Social & Developer Profiles
              </span>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-md bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-slate-700 group-hover:text-blue-600 transition-colors" />
                  <span className="text-xs font-semibold text-slate-800">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </a>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-md bg-white border border-slate-200 hover:border-blue-300 hover:text-[#0077b5] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-slate-700 group-hover:text-[#0077b5] transition-colors" />
                  <span className="text-xs font-semibold text-slate-800">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0077b5]" />
              </a>
            </div>

            {/* Location & College info */}
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 space-y-2">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-500 block">
                Academic Residence
              </span>
              <div className="flex items-start gap-2 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-700">
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{PORTFOLIO_DATA.personal.college}</span>
              </div>
            </div>
          </div>

          {/* Quick Message Helper Form (3 cols) */}
          <div className="md:col-span-3 p-6 rounded-lg border border-slate-200 bg-white">
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              Send a Quick Message
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Write a message below to generate an email directly to{' '}
              <span className="font-mono text-slate-700">{PORTFOLIO_DATA.personal.email}</span>.
            </p>

            <form onSubmit={handleComposeEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. John Doe / Tech Recruiter"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Internship Inquiry / Project Discussion"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your note or opportunity details here..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-colors resize-y"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Compose in Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  or simply copy email address
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
