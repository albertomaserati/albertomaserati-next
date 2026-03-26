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
      en: 'Real-time mock interviews with AI, no forms or clicks just natural, personalized conversations',
      it: 'Interviste simulate in tempo reale con AI, senza moduli o clic, conversazioni naturali e personalizzate',
    },
    demo: 'https://intervueai-io.vercel.app/',
    image: '/projects/intervueai.png',
    gallery: ['/projects/intervueai.png'],
  },
  {
    id: 2,
    slug: 'blendy',
    title: {
      en: 'Blendy',
      it: 'Blendy',
    },
    description: {
      en: 'A social app where you can connect in real-time, log in with one click, share moments and posts instantly',
      it: "Un'app sociale per connettersi in tempo reale, accedi con un click, condividi momenti e post istantaneamente",
    },
    demo: 'https://blendy-download.vercel.app/',
    image: '/projects/blendy.png',
    gallery: ['/projects/blendy.png'],
  },
  {
    id: 3,
    slug: 'watchit',
    title: {
      en: 'WATCHit',
      it: 'WATCHit',
    },
    description: {
      en: 'A video streaming app made for easy, personal entertainment and everything you love to binge',
      it: "Un'app di streaming video per intrattenimento facile e personale, tutto quello che ami guardare",
    },
    demo: 'https://watchit-1.onrender.com/',
    image: '/projects/watchit.png',
    gallery: ['/projects/watchit.png'],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
