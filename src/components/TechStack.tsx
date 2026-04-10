'use client';

import { useTranslations } from 'next-intl';
import {
  siBitbucket,
  siCss,
  siDocker,
  siDotnet,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siSass,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons';
import { DiMsqlServer } from 'react-icons/di';
import type { IconType } from 'react-icons';
import { SiDotnet as RiDotnet } from 'react-icons/si';
import { TbBrandCSharp, TbBrandReactNative } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

interface Technology {
  name: string;
  icon?: SimpleIcon;
  reactIcon?: IconType;
  reactIconColor?: string;
  fallback: string;
}

const normalizeTechName = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, '');

export default function TechStack() {
  const t = useTranslations('TechStack');
  const rawTechnologies = t.raw('technologies') as Array<{ name: string }>;

  const techMap: Record<string, { icon?: SimpleIcon; reactIcon?: IconType; reactIconColor?: string; fallback: string }> = {
    net: { reactIcon: RiDotnet, reactIconColor: '#512BD4', fallback: '.NET' },
    c: { reactIcon: TbBrandCSharp, reactIconColor: '#68217A', fallback: 'C#' },
    azure: { reactIcon: VscAzure, reactIconColor: '#0078D4', fallback: 'Azure' },
    html5: { icon: siHtml5, fallback: 'HTML' },
    css3: { icon: siCss, fallback: 'CSS' },
    sass: { icon: siSass, fallback: 'Sass' },
    javascript: { icon: siJavascript, fallback: 'JS' },
    typescript: { icon: siTypescript, fallback: 'TS' },
    react: { icon: siReact, fallback: 'React' },
    nextjs: { icon: siNextdotjs, fallback: 'Next' },
    tailwind: { icon: siTailwindcss, fallback: 'TW' },
    sqlserver: { reactIcon: DiMsqlServer, reactIconColor: '#CC2927', fallback: 'SQL' },
    postgresql: { icon: siPostgresql, fallback: 'PSQL' },
    mysql: { icon: siMysql, fallback: 'MySQL' },
    nodejs: { icon: siNodedotjs, fallback: 'Node' },
    python: { icon: siPython, fallback: 'Python' },
    docker: { icon: siDocker, fallback: 'Docker' },
    git: { icon: siGit, fallback: 'Git' },
    github: { icon: siGithub, fallback: 'GitHub' },
    bitbucket: { icon: siBitbucket, fallback: 'Bitbucket' },
    reactnative: { reactIcon: TbBrandReactNative, reactIconColor: '#61DAFB', fallback: 'RN' },
    postman: { icon: siPostman, fallback: 'Postman' },
  };

  const technologies: Technology[] = rawTechnologies.map((tech) => {
    const key = normalizeTechName(tech.name);

    return {
      name: tech.name,
      icon: techMap[key]?.icon,
      reactIcon: techMap[key]?.reactIcon,
      reactIconColor: techMap[key]?.reactIconColor,
      fallback: techMap[key]?.fallback || tech.name.slice(0, 3).toUpperCase(),
    };
  });

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
              {tech.icon ? (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`w-10 h-10 ${
                    normalizeTechName(tech.name) === 'nextjs' || normalizeTechName(tech.name) === 'github'
                      ? 'text-black dark:text-white'
                      : ''
                  }`}
                  style={
                    normalizeTechName(tech.name) === 'nextjs' || normalizeTechName(tech.name) === 'github'
                      ? undefined
                      : { color: `#${tech.icon.hex}` }
                  }
                >
                  <path fill="currentColor" d={tech.icon.path} />
                </svg>
              ) : tech.reactIcon ? (
                <tech.reactIcon
                  className="w-10 h-10"
                  style={{ color: tech.reactIconColor }}
                  aria-hidden="true"
                />
              ) : (
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {tech.fallback}
                </span>
              )}
            </div>

            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
