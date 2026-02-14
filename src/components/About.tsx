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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold font-josefin mb-12 text-center">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('description')}
            </p>

            <a
              href="#"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
            >
              {t('downloadCV')}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold font-josefin text-blue-600 dark:text-blue-400 mb-2">
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
