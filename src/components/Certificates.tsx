'use client';

import { useTranslations } from 'next-intl';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export default function Certificates() {
  const t = useTranslations('Certificates');
  const certificates = t.raw('certificates') as Certificate[];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative p-6 rounded-lg bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col h-full">
              {/* Certificate Icon */}
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary">
                <span className="text-white text-3xl">🎓</span>
              </div>

              {/* Certificate Info */}
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold font-josefin text-foreground">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs">
                  {cert.date}
                </p>
              </div>

              {/* View Certificate Button */}
              <div className="mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium text-sm"
                >
                  {t('viewCertificate')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
