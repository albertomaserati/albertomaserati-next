'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { projects, type Locale } from '@/data/projects';

export default function Projects() {
  const t = useTranslations('Projects');
  const locale = useLocale() as Locale;
  const localizedProjects = projects.map((project) => ({
    ...project,
    title: project.title[locale] ?? project.title.en,
    description: project.description[locale] ?? project.description.en,
  }));

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {localizedProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative h-56 bg-gray-200 dark:bg-gray-800 overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`${project.imageFill ? 'object-cover' : 'object-contain p-4'} group-hover:scale-105 transition-transform duration-300`}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary opacity-80 flex items-center justify-center group-hover:opacity-90 transition-opacity">
                  <span className="text-white font-josefin text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
              )}
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
                <Link
                  href={`/projects/${project.slug}`}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors font-medium text-sm"
                >
                  {t('viewDetails')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
