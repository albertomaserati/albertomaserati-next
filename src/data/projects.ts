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
    slug: 'teoresi',
    title: {
      en: 'Teoresi',
      it: 'Teoresi',
    },
    description: {
      en: 'Experience at Teoresi - Delivering high-quality software solutions',
      it: 'Esperienza presso Teoresi - Fornitura di soluzioni software di alta qualità',
    },
    demo: '#',
    image: '',
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
      en: 'Experience at BindingFuture - Creating cutting-edge digital experiences',
      it: 'Esperienza presso BindingFuture - Creazione di esperienze digitali all\'avanguardia',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
  {
    id: 3,
    slug: 'alberto-maserati',
    title: {
      en: 'Alberto Maserati',
      it: 'Alberto Maserati',
    },
    description: {
      en: 'Experience at Alberto Maserati - Developing scalable web applications',
      it: 'Esperienza presso Alberto Maserati - Sviluppo di applicazioni web scalabili',
    },
    demo: '#',
    image: '',
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
      en: 'Experience at PRB - Building innovative solutions with modern technologies',
      it: 'Esperienza presso PRB - Costruzione di soluzioni innovative con tecnologie moderne',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
