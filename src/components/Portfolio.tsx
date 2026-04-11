'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiBriefcase, FiCode, FiCpu } from 'react-icons/fi';
import Experience from './Experience';
import Projects from './Projects';
import TechStack from './TechStack';

type TabType = 'projects' | 'experience' | 'certificates' | 'techstack';

export default function Portfolio() {
  const t = useTranslations('Portfolio');
  const [activeTab, setActiveTab] = useState<TabType>('experience');

  const tabs = [
    { id: 'experience' as TabType, icon: FiBriefcase, label: t('tabs.experience') },
    { id: 'projects' as TabType, icon: FiCode, label: t('tabs.projects') },
    // { id: 'certificates' as TabType, icon: '🎓', label: t('tabs.certificates') },
    { id: 'techstack' as TabType, icon: FiCpu, label: t('tabs.techStack') },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-josefin mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex w-full sm:w-auto sm:inline-flex rounded-lg bg-gray-100 dark:bg-gray-900 p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 sm:flex-none px-3 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                }`}
              >
                <tab.icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'experience' && <Experience />}
          {/* {activeTab === 'certificates' && <Certificates />} */}
          {activeTab === 'techstack' && <TechStack />}
        </div>
      </div>
    </section>
  );
}
