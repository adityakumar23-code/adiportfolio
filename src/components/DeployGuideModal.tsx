import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Globe, Github, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: '1. Run Locally',
      description: 'Clone your repository, install dependencies, and start the development server.',
      code: `# Clone your repository
git clone ${PORTFOLIO_DATA.personal.github}/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev`,
    },
    {
      title: '2. Prepare for GitHub',
      description: 'Initialize Git, commit your changes, and push to your GitHub profile.',
      code: `# Initialize git (if not already done)
git init
git add .
git commit -m "feat: complete professional portfolio for Aditya Kumar"

# Connect to your GitHub repository
git branch -M main
git remote add origin ${PORTFOLIO_DATA.personal.github}/portfolio.git
git push -u origin main`,
    },
    {
      title: '3. Deploy on Vercel',
      description: 'Deploy for free with custom domain and automatic CI/CD on every push.',
      code: `# Option A: Deploy via Vercel CLI
npm i -g vercel
vercel

# Option B: Via Vercel Web Dashboard:
# 1. Go to https://vercel.com/new
# 2. Select "Import Git Repository" and pick "portfolio"
# 3. Framework Preset: Vite (automatically detected)
# 4. Click "Deploy"`,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-blue-50 text-blue-600">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Run Locally & Deploy to Vercel
              </h3>
              <p className="text-xs text-slate-500">
                Instructions for Aditya Kumar&apos;s Portfolio
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600">
          <p className="text-xs leading-relaxed text-slate-500">
            This portfolio is built with <span className="font-semibold text-slate-700">React</span>,{' '}
            <span className="font-semibold text-slate-700">TypeScript</span>, and{' '}
            <span className="font-semibold text-slate-700">Tailwind CSS</span>. Follow the steps below
            to run the site on your local machine or publish it live for free on Vercel.
          </p>

          <div className="space-y-5">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    {step.title}
                  </h4>
                  <button
                    type="button"
                    onClick={() => copyCode(step.code, idx)}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {copiedIndex === idx ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-500">{step.description}</p>
                <div className="relative rounded-md bg-slate-900 text-slate-100 p-3.5 font-mono text-xs overflow-x-auto shadow-inner">
                  <pre className="whitespace-pre">{step.code}</pre>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-lg bg-blue-50/70 border border-blue-200/80 text-xs text-blue-900 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Vercel Build Configuration:</span>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-blue-800">
                <li>Build Command: <code className="font-mono bg-white/70 px-1 rounded">npm run build</code></li>
                <li>Output Directory: <code className="font-mono bg-white/70 px-1 rounded">dist</code></li>
                <li>Install Command: <code className="font-mono bg-white/70 px-1 rounded">npm install</code></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-400">Ready for internship and resume sharing</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-md bg-slate-200 text-slate-800 hover:bg-slate-300 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
