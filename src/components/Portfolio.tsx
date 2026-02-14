'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  demo: string;
  image: string;
}

export default function Portfolio() {
  const t = useTranslations('Portfolio');
  const projects = t.raw('projects') as Project[];

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-josefin mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                  <span className="text-white font-josefin text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold font-josefin text-foreground">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    {t('viewDemo')}
                  </a>
                  <a
                    href="#"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
                  >
                    {t('viewDetails')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
