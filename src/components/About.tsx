'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  const stats = [
    {
      count: t('projectsCount'),
      label: t('projectsLabel'),
    },
    {
      count: t('certificatesCount'),
      label: t('certificatesLabel'),
    },
    {
      count: t('experienceCount'),
      label: t('experienceLabel'),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold font-josefin mb-12 text-center">
          {t('title')}
        </h2>

        <div className="space-y-10">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('description')}
            </p>

            <div className="flex justify-center">
              <a
                href="/AM-CV-Eng.pdf"
                download="AM-CV-Eng.pdf"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors font-medium"
              >
                {t('downloadCV')}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold font-josefin text-primary mb-2 leading-snug break-normal">
                  {stat.count}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
