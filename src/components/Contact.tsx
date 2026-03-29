'use client';

import { useTranslations } from 'next-intl';
import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold font-josefin mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold font-josefin text-center mb-6">
            {t('connectWithMe')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a
              href="https://linkedin.com/in/alberto-maserati/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <FiLinkedin className="w-8 h-8 text-[#0A66C2]" aria-hidden="true" />
                <FiArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" aria-hidden="true" />
              </div>
              <p className="font-medium text-foreground">{t('connectLinkedIn')}</p>
            </a>

            <a
              href="https://github.com/albertomaserati"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-white dark:bg-gray-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <FiGithub className="w-8 h-8 text-gray-900 dark:text-gray-100" aria-hidden="true" />
                <FiArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" aria-hidden="true" />
              </div>
              <p className="font-medium text-foreground">{t('followGithub')}</p>
            </a>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            {t('responseTime')}
          </p>
        </div>
      </div>
    </section>
  );
}
