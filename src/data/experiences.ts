export type Locale = 'en' | 'it';

export type Experience = {
  id: number;
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  demo: string;
  image: string;
  techStack?: string[];
  gallery?: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    slug: 'teoresi',
    title: {
      en: 'Teoresi',
      it: 'Teoresi',
    },
    description: {
      en: "Engineering Unit Manager for Microsoft & Mobile Apps area in Teoresi's DigiTech division",
      it: "Engineering Unit Manager per l'area Microsoft & Mobile Apps nella divisione DigiTech di Teoresi",
    },
    demo: '#',
    image: '/images/teoresi.svg',
    gallery: [],
  },
  {
    id: 2,
    slug: 'bindingfuture',
    title: {
      en: 'BindingFuture',
      it: 'BindingFuture',
    },
    description: {
      en: 'Co-founder, .NET fullstack developer, Team Leader and Engineering Unit Manager',
      it: 'Co-founder, .NET fullstack developer, Team Leader e Engineering Unit Manager',
    },
    demo: '#',
    image: '/images/logo_bf-lime-negativo.svg',
    gallery: [],
  },
  {
    id: 3,
    slug: 'alberto-maserati',
    title: {
      en: 'Freelance',
      it: 'Freelance',
    },
    description: {
      en: 'Development of fullstack solutions with a focus on Microsoft technologies',
      it: 'Sviluppo fullstack di soluzioni con prevalenza di tecnologie Microsoft',
    },
    demo: '#',
    image: '/images/alberto-maserati-w-rgb.svg',
    gallery: [],
  },
  {
    id: 4,
    slug: 'prb',
    title: {
      en: 'PRB',
      it: 'PRB',
    },
    description: {
      en: 'Developing customizations in the .NET ecosystem',
      it: 'Sviluppo di personalizzazioni in ambito .NET',
    },
    demo: '#',
    image: '/images/prb-logo-white.svg',
    gallery: [],
  },
];

export const getExperienceBySlug = (slug: string) =>
  experiences.find((experience) => experience.slug === slug);