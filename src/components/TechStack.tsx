'use client';

import { useTranslations } from 'next-intl';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

export default function TechStack() {
  const t = useTranslations('TechStack');
  const rawTechnologies = t.raw('technologies') as Array<{ name: string }>;
  
  // Map technology names to icons and colors
  const techMap: Record<string, { icon: string; color: string }> = {
    'HTML5': { icon: '📄', color: 'from-orange-500 to-orange-600' },
    'CSS3': { icon: '🎨', color: 'from-blue-500 to-blue-600' },
    'JavaScript': { icon: '⚡', color: 'from-yellow-400 to-yellow-500' },
    'TypeScript': { icon: 'TS', color: 'from-blue-600 to-blue-700' },
    'React': { icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
    'Next.js': { icon: '▲', color: 'from-gray-800 to-black' },
    'Tailwind': { icon: '🌊', color: 'from-teal-400 to-cyan-500' },
    'Node.js': { icon: '🟢', color: 'from-green-600 to-green-700' },
    '.NET': { icon: '.NET', color: 'from-purple-600 to-purple-700' },
    'ASP.NET Core': { icon: 'ASP', color: 'from-purple-500 to-purple-600' },
    'C#': { icon: 'C#', color: 'from-purple-700 to-indigo-800' },
    'REST APIs': { icon: '🔌', color: 'from-blue-500 to-indigo-600' },
    'SQL Server': { icon: '🗄️', color: 'from-red-600 to-red-700' },
    'PostgreSQL': { icon: '🐘', color: 'from-blue-600 to-blue-800' },
    'MongoDB': { icon: '🍃', color: 'from-green-500 to-green-700' },
    'Azure SQL': { icon: '☁️', color: 'from-blue-500 to-blue-600' },
    'Azure': { icon: '☁️', color: 'from-blue-600 to-blue-700' },
    'Docker': { icon: '🐳', color: 'from-blue-500 to-blue-600' },
    'Git': { icon: '📦', color: 'from-orange-600 to-red-600' },
    'GitHub Actions': { icon: '⚙️', color: 'from-gray-700 to-gray-900' },
    'CI/CD': { icon: '🔄', color: 'from-green-500 to-green-600' },
    'Xamarin': { icon: '📱', color: 'from-blue-600 to-indigo-700' },
    'MAUI': { icon: '.NET', color: 'from-purple-500 to-purple-700' },
    'React Native': { icon: '⚛️', color: 'from-cyan-500 to-blue-600' },
  };

  const technologies: Technology[] = rawTechnologies.map((tech) => ({
    name: tech.name,
    icon: techMap[tech.name]?.icon || '💻',
    color: techMap[tech.name]?.color || 'from-gray-600 to-gray-700',
  }));

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Icon */}
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
              <span className="text-white text-3xl font-bold">{tech.icon}</span>
            </div>
            
            {/* Tech Name */}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
