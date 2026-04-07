export type Locale = 'en' | 'it';

export type Project = {
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
    longDescription: {
      en: 'I designed and supervised the development of a cloud platform for a major banking institution. The project was carried out in Agile methodology, in close collaboration with the client\'s staff.\n\nThe system automates the management of specific network requests by evaluating their applicability (e.g., opening firewall ports).\n\nThe system integrates with the client\'s third-party systems, such as ServiceNow and Guardicore.\n\nA web portal was also designed for administrators, exposing manual approval workflows and a full request history view.',
      it: 'Ho progettato e supervisionato la realizzazione di una piattaforma cloud per un’importante istituto di credito. Il progetto è stato condotto in modalità Agile a stretto contatto con il personale del cliente.\n\nIl sistema automatizza la gestione di specifiche richieste di rete valutandone l’applicabilità (es: apertura di porte sul firewall).\n\nIl sistema si integra con i sistemi di terze parti del cliente, come ServiceNow e Guardicore.\n\nPer gli amministratori è stato progettato anche un portale web che espone funzionalità di approvazione manuale e visualizzazione dello storico richieste.',
    },
    demo: '#',
    image: '',
    techStack: ['.NET', 'C#', 'Azure', 'AzureSQL', 'Docker', 'React'],
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
    longDescription: {
      en: 'Business intelligence dashboard to track KPIs and support data-driven decisions across the company.',
      it: 'Dashboard di business intelligence per monitorare KPI e supportare decisioni data-driven in azienda.',
    },
    demo: '#',
    image: '',
    techStack: ['Power BI', 'SQL Server', 'TypeScript', 'React', 'Azure'],
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
    longDescription: {
      en: 'Mobile application for reading, analysis and management of energy consumption data.',
      it: 'Applicazione mobile per lettura, analisi e gestione dei dati di consumo energetico.',
    },
    demo: '#',
    image: '',
    techStack: ['React Native', '.NET', 'REST API', 'Azure', 'Postman'],
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
    longDescription: {
      en: 'Platform for integrated management of building systems and IoT-enabled environments.',
      it: 'Piattaforma per la gestione integrata degli impianti e degli ambienti connessi IoT.',
    },
    demo: '#',
    image: '',
    techStack: ['IoT', '.NET', 'Azure', 'Docker', 'React'],
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
    longDescription: {
      en: 'Backend development for neobank services with focus on scalability, reliability and integrations.',
      it: 'Sviluppo backend per servizi neobank con focus su scalabilita, affidabilita e integrazioni.',
    },
    demo: '#',
    image: '',
    techStack: ['.NET', 'C#', 'Microservices', 'SQL Server', 'Azure'],
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
    longDescription: {
      en: 'Development of a credit risk platform for scoring, assessment and risk monitoring workflows.',
      it: 'Sviluppo di una piattaforma di credit risk per scoring, valutazione e monitoraggio del rischio.',
    },
    demo: '#',
    image: '',
    techStack: ['Python', '.NET', 'PostgreSQL', 'Docker', 'Azure'],
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
    longDescription: {
      en: 'Software solution for planning, supervision and optimization of industrial cutting line operations.',
      it: 'Soluzione software per pianificazione, supervisione e ottimizzazione delle operazioni di linea di taglio.',
    },
    demo: '#',
    image: '',
    techStack: ['.NET', 'SQL Server', 'Docker', 'React', 'GitHub Actions'],
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
    longDescription: {
      en: 'Test center platform for managing validation workflows, test sessions and quality reporting.',
      it: 'Piattaforma test center per la gestione di workflow di validazione, sessioni di test e reporting qualita.',
    },
    demo: '#',
    image: '',
    techStack: ['.NET', 'TypeScript', 'React', 'PostgreSQL', 'Azure'],
    gallery: [],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
