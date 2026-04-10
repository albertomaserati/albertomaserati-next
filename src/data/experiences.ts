export type Locale = 'en' | 'it';

export type Experience = {
  id: number;
  slug: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  longDescription: Record<Locale, string>;
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
      en: 'Teoresi DigiTech',
      it: 'Teoresi DigiTech',
    },
    description: {
      en: "Engineering Unit Manager for Microsoft & Mobile Apps area in Teoresi's DigiTech division",
      it: "Engineering Unit Manager per l'area Microsoft & Mobile Apps nella divisione DigiTech di Teoresi",
    },
    longDescription: {
      en: "Leading the Microsoft & Mobile engineering unit (20 engineers), following BindingFuture’s acquisition by Teoresi.\n\nDefining team training plans.\n\nMonitoring project delivery with PMs to ensure quality and timelines.",
      it: "Guido la Engineering Unit Microsoft & Mobile Apps (20 ingegneri), a seguito dell'acquisizione di BindingFuture da parte di Teoresi.\n\nDefinizione dei piani di formazione del team.\n\nMonitoraggio della consegna dei progetti con i PM per garantire qualità e rispetto dei tempi.",
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
    longDescription: {
      en: 'Co-founded the company from 3 people, growing it to 35 employees and ~€2.6M annual revenue.\n\nLed and scaled the engineering team up to 19 people, overseeing hiring, performance and career growth.\n\nDefined presale and execution procedures for turnkey projects, supporting technical specification and budget planning.\n\nMonitored time, costs and delivery quality across all active projects.',
      it: 'Co-fondato l\'azienda da 3 persone, portandola a 35 dipendenti e ~€2,6M di fatturato annuo.\n\nGuidato e scalato il team di ingegneria fino a 19 persone, supervisionando assunzioni, performance e crescita professionale.\n\nDefinito procedure di presale ed esecuzione per progetti chiavi in mano, supportando la specifica tecnica e la pianificazione del budget.\n\nMonitorato tempi, costi e qualità della consegna su tutti i progetti attivi.',
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
    longDescription: {
      en: 'Managed end-to-end client engagements: requirements analysis, technical and commercial proposals, and full-stack delivery.\n\nDeveloped client and server-side solutions using Microsoft stack: C#, WPF, UWP, ASP.NET, Razor, Bot Framework, MSSQL.',
      it: 'Gestito l\'intero ciclo di vita dei progetti dei clienti: analisi dei requisiti, proposte tecniche e commerciali, e sviluppo full-stack.\n\nSviluppo di soluzioni client e server utilizzando lo stack Microsoft: C#, WPF, UWP, ASP.NET, Razor, Bot Framework, MSSQL.',
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
    longDescription: {
      en: 'Designed and implemented custom integrations for enterprise clients using Microsoft stack (C#, WPF, WinForms, MSSQL).\n\nCollaborated directly with technical and senior management stakeholders, often on-site at client locations',
      it: 'Progettato e implementato integrazioni personalizzate per clienti aziendali utilizzando lo stack Microsoft (C#, WPF, WinForms, MSSQL).\n\nCollaborato direttamente con stakeholder tecnici e di senior management, spesso in loco presso i clienti',
    },
    demo: '#',
    image: '/images/prb-logo-white.svg',
    gallery: [],
  },
];

export const getExperienceBySlug = (slug: string) =>
  experiences.find((experience) => experience.slug === slug);