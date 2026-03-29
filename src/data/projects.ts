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
    slug: 'network-security-platform',
    title: {
      en: 'Network Security Platform',
      it: 'Piattaforma di Network Security',
    },
    description: {
      en: 'Platform for centralized monitoring and security management of network infrastructures.',
      it: 'Piattaforma per il monitoraggio centralizzato e la gestione della sicurezza delle infrastrutture di rete.',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
  {
    id: 2,
    slug: 'company-wide-bi-dashboard',
    title: {
      en: 'Company-Wide BI Dashboard',
      it: 'Dashboard BI Aziendale',
    },
    description: {
      en: 'Business intelligence dashboard to track KPIs and support data-driven decisions across the company.',
      it: 'Dashboard di business intelligence per monitorare KPI e supportare decisioni data-driven in azienda.',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
  {
    id: 3,
    slug: 'energy-meter-mobile-app',
    title: {
      en: 'Energy Meter Mobile App',
      it: 'App Mobile Energy Meter',
    },
    description: {
      en: 'Mobile application for reading, analysis and management of energy consumption data.',
      it: 'Applicazione mobile per lettura, analisi e gestione dei dati di consumo energetico.',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
  {
    id: 4,
    slug: 'smart-building-platform',
    title: {
      en: 'Smart Building Platform',
      it: 'Piattaforma Smart Building',
    },
    description: {
      en: 'Platform for integrated management of building systems and IoT-enabled environments.',
      it: 'Piattaforma per la gestione integrata degli impianti e degli ambienti connessi IoT.',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
  {
    id: 5,
    slug: 'neobank-backend-development',
    title: {
      en: 'Neobank Backend Development',
      it: 'Sviluppo Backend Neobank',
    },
    description: {
      en: 'Backend development for neobank services with focus on scalability, reliability and integrations.',
      it: 'Sviluppo backend per servizi neobank con focus su scalabilita, affidabilita e integrazioni.',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
  {
    id: 6,
    slug: 'credit-risk-platform-development',
    title: {
      en: 'Credit Risk Platform Development',
      it: 'Sviluppo Piattaforma Credit Risk',
    },
    description: {
      en: 'Development of a credit risk platform for scoring, assessment and risk monitoring workflows.',
      it: 'Sviluppo di una piattaforma di credit risk per scoring, valutazione e monitoraggio del rischio.',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
  {
    id: 7,
    slug: 'cutting-line-management',
    title: {
      en: 'Cutting Line Management',
      it: 'Gestione Linea di Taglio',
    },
    description: {
      en: 'Software solution for planning, supervision and optimization of industrial cutting line operations.',
      it: 'Soluzione software per pianificazione, supervisione e ottimizzazione delle operazioni di linea di taglio.',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
  {
    id: 8,
    slug: 'henkel-test-center',
    title: {
      en: 'Henkel Test Center',
      it: 'Henkel Test Center',
    },
    description: {
      en: 'Test center platform for managing validation workflows, test sessions and quality reporting.',
      it: 'Piattaforma test center per la gestione di workflow di validazione, sessioni di test e reporting qualita.',
    },
    demo: '#',
    image: '',
    gallery: [],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
