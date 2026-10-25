import React from 'react';
import { Award, CheckCircle, ExternalLink, Calendar, ShieldCheck, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA, CertificateItem } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyCredentialId = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="certificates" className="py-20 border-b border-slate-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 mb-2">
            <span>Certifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Verified Credentials & Accreditations
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Formal learning programs completed with official verification links and credential IDs.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PORTFOLIO_DATA.certificates.map((cert: CertificateItem) => (
            <div
              key={cert.id}
              className="p-6 rounded-lg border border-slate-200 bg-slate-50/40 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                {/* Header with verified badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2 rounded-md bg-blue-50 text-blue-600 border border-blue-100">
                    <Award className="w-5 h-5" />
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Credential</span>
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-blue-600 mt-1">
                  {cert.issuer}
                </p>

                {/* Metadata */}
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Completed: {cert.completionDate}</span>
                </div>

                {/* Credential ID if present */}
                {cert.credentialId && (
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500 bg-white/80 border border-slate-200 px-2 py-1 rounded">
                    <span className="text-slate-400 font-mono">ID:</span>
                    <span className="font-mono text-slate-700 truncate max-w-[180px] sm:max-w-[220px]">
                      {cert.credentialId}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyCredentialId(cert.id, cert.credentialId || '')}
                      className="ml-auto p-0.5 text-slate-400 hover:text-slate-700 transition-colors"
                      title="Copy credential ID"
                      aria-label="Copy credential ID"
                    >
                      {copiedId === cert.id ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                )}

                {/* Topics Covered */}
                <div className="mt-4 pt-3 border-t border-slate-200/70">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Competencies
                  </p>
                  <ul className="space-y-1">
                    {cert.skillsCovered.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle className="w-3 h-3 text-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="mt-6 pt-4 border-t border-slate-200/70">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-blue-600 hover:text-white border border-slate-300 hover:border-blue-600 rounded-md transition-colors shadow-2xs group"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
