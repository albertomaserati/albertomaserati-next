export type Locale = 'en' | 'it';

export type Project = {
  id: number;
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  demo: string;
  image: string;
  techStack?: string[];
  gallery?: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'intervueai',
    title: {
      en: 'IntervueAI',
      it: 'IntervueAI',
    },
    description: {
      en: 'Real-time mock interviews with AI, focused on natural and personalized conversations',
      it: 'Interviste simulate in tempo reale con AI, incentrate su conversazioni naturali e personalizzate',
    },
    demo: 'https://intervueai-io.vercel.app/',
    image: '',
    gallery: [],
  },
  {
    id: 2,
    slug: 'blendy',
    title: {
      en: 'Blendy',
      it: 'Blendy',
    },
    description: {
      en: 'A social app for real-time connection and instant content sharing',
      it: 'Un\'app social per connettersi in tempo reale e condividere contenuti istantaneamente',
    },
    demo: 'https://blendy-download.vercel.app/',
    image: '',
    gallery: [],
  },
  {
    id: 3,
    slug: 'watchit',
    title: {
      en: 'WATCHit',
      it: 'WATCHit',
    },
    description: {
      en: 'A streaming-oriented web app designed for personal entertainment',
      it: 'Una web app orientata allo streaming progettata per l\'intrattenimento personale',
    },
    demo: 'https://watchit-1.onrender.com/',
    image: '',
    gallery: [],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
