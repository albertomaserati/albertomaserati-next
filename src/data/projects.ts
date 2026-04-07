export type Locale = 'en' | 'it';

const PROJECTS_IMAGES_BASE = '/images/projects';

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
      en: 'Platform for centralized monitoring and security management of network infrastructures',
      it: 'Piattaforma per il monitoraggio centralizzato e la gestione della sicurezza delle infrastrutture di rete',
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
      en: 'Power BI reports to track KPIs and support data-driven decisions across the company',
      it: 'Report Power BI per monitorare KPI e supportare decisioni data-driven in azienda',
    },
    longDescription: {
      en: 'I coordinated the development of 4 Power BI reports for the real estate industry (each 10-12 pages), overseeing data integration from a PostgreSQL database to GCP and ensuring project deadlines and margins were met.\n\nThe work was conducted using an Agile approach using Azure DevOps, collaborating directly with the client to manage the backlog and continuously adapt priorities to emerging needs.',
      it: 'Ho coordinato lo sviluppo di 4 report Power BI in ambito immobiliare (ciascuno articolato su 10/12 pagine), supervisionando l\'integrazione dei dati da un database PostgreSQL su GCP e garantendo il rispetto delle tempistiche e delle marginalità di progetto.\n\nIl lavoro è stato condotto in modalità Agile tramite Azure DevOps, collaborando direttamente con il cliente nella gestione del backlog e nell\'adattamento continuo delle priorità alle esigenze emergenti.',
    },
    demo: '#',
    image: '',
    techStack: ['Power BI', 'PostgreSQL', 'Azure DevOps'],
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
      en: 'Mobile application for reading, analysis and management of energy consumption data',
      it: 'Applicazione mobile per lettura, analisi e gestione dei dati di consumo energetico',
    },
    longDescription: {
      en: 'Mobile application for reading, analysis and management of energy consumption data.',
      it: 'Applicazione mobile per lettura, analisi e gestione dei dati di consumo energetico.',
    },
    demo: '#',
    image: '',
    techStack: ['React Native', 'Azure DevOps'],
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
      en: 'Smart building platform for integrated monitoring of people flows and IoT-enabled environments',
      it: 'Piattaforma smart building per il monitoraggio integrato dei flussi di persone e degli ambienti connessi IoT',
    },
    longDescription: {
      en: 'I coordinated all development activities for IO.T Solutions, the Teoresi Group\'s smart building platform.\n\nThe core product, DINA (Dynamic & Interactive solution for Networked Assets), is designed for facility managers and enables real-time monitoring of people flows and access management within smart buildings.\n\nI managed the full project lifecycle, including sprint planning, stakeholder alignment, and releases on the app stores.',
      it: 'Ho coordinato tutte le attività di sviluppo di IO.T Solutions, la piattaforma smart building del Gruppo Teoresi.\n\nIl prodotto principale, DINA (Dynamic & Interactive solution for Networked Assets), è pensato per i facility manager e consente il monitoraggio in tempo reale dei flussi di persone e la gestione degli accessi all\'interno di edifici intelligenti.\n\nHo gestito l\'intero ciclo di vita del progetto, dalla pianificazione degli sprint fino ai rilasci sugli store.',
    },
    demo: '#',
    image: '',
    techStack: ['Java', 'Android', 'iOS', 'BitBucket', 'Jira', 'Azure', 'AKS', 'PostgreSQL'],
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
      en: 'Backend development for neobank services with focus on scalability, reliability and integrations',
      it: 'Sviluppo backend per servizi neobank con focus su scalabilita, affidabilita e integrazioni',
    },
    longDescription: {
      en: 'Backend development for neobank services with focus on scalability, reliability and integrations.',
      it: 'Sviluppo backend per servizi neobank con focus su scalabilita, affidabilita e integrazioni.',
    },
    demo: '#',
    image: '',
    techStack: ['ASP.NET', 'C#', 'Microservices', 'Event-driven Arch', 'Dapper', 'SQL Server', 'Azure'],
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
      en: 'Development of a risk computing platform for large-scale data ingestion, validation, and risk calculation',
      it: 'Sviluppo di una piattaforma di risk computing per l\'acquisizione di dati su larga scala, la loro validazione e il calcolo del rischio',
    },
    longDescription: {
      en: 'For a major insurance company, I contributed to building a risk computing platform capable of handling large-scale data uploads and validating them through a custom Data Quality system.\n\nMy efforts focused primarily on the development of the risk calculation engine, with additional minor contributions to the Angular web app through which the results are made available to end users.',
      it: 'Per una importante compagnia assicurativa, ho contribuito allo sviluppo di una piattaforma di risk computing in grado di gestire l\'upload di file di grandi dimensioni e di validarli tramite un sistema di Data Quality personalizzato.\n\nIl mio contributo si è concentrato principalmente sullo sviluppo del motore di calcolo del rischio, con interventi minori sulla web app Angular attraverso cui i risultati vengono resi disponibili agli utenti finali.',
    },
    demo: '#',
    image: '',
    techStack: ['ASP.NET', 'C#', 'Angular', 'Azure'],
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
      en: 'Desktop tool for internal training and testing, deployable without installation and fully manageable by the client',
      it: 'Tool desktop per la formazione e i test interni, utilizzabile senza installazione e gestibile in autonomia dal cliente',
    },
    longDescription: {
      en: 'I developed a WPF desktop application on .NET Framework 3.5 for Henkel\'s Educational & Filters department in Italy, later distributed across several European branches.\n\nThe tool allows staff to take tests composed of questions on different topics, loaded dynamically from a CSV file with a fixed structure.\n\nThis approach gives the client full autonomy in managing test content — with no limits on the number of topics or questions — without requiring any technical support or installation.',
      it: 'Ho sviluppato un\'applicazione desktop in WPF su .NET Framework 3.5 per il dipartimento Educational & Filters di Henkel Italia, successivamente distribuita in diverse filiali europee.\n\nIl tool consente al personale di eseguire test composti da domande su argomenti differenti, caricati dinamicamente da un file CSV a struttura fissa.\n\nQuesto approccio garantisce al cliente piena autonomia nella gestione dei contenuti — senza limiti sul numero di argomenti e domande — senza necessità di installazione o supporto tecnico.',
    },
    demo: '#',
    image: `${PROJECTS_IMAGES_BASE}/htc/henkel-logo.svg`,
    techStack: ['.NET', 'C#', 'WPF', 'MVVM'],
    gallery: [
      `${PROJECTS_IMAGES_BASE}/htc/1.png`,
      `${PROJECTS_IMAGES_BASE}/htc/2.png`,
      `${PROJECTS_IMAGES_BASE}/htc/3.png`,
    ],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
