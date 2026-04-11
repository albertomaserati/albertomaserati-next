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
    id: 9,
    slug: 'albertomaserati',
    title: {
      en: 'Personal website',
      it: 'Sito personale',
    },
    description: {
      en: 'Website built with Next.js, showcasing my projects and experience with a focus on performance and accessibility.',
      it: 'Sito web realizzato con Next.js, che mostra i miei progetti e la mia esperienza con un focus su prestazioni e accessibilità.',
    },
    longDescription: {
      en: 'The new version of my personal website. It\'s not intended to be a traditional brochure site — given my current role, I didn\'t have a strict need for one — but I used it as an opportunity to experiment with AI-assisted development.\n\nI started by manually building the skeleton of the site — structure, localization, libraries — then brought in AI tools to accelerate the rest. Claude Code and GitHub Copilot  (via VS Code) genuinely surprised me: the boost to development speed and the quality of the generated code were better than expected.',
      it: 'La nuova versione del mio sito personale. Non è pensata per essere un sito vetrina tradizionale — dato il mio ruolo attuale, non ne avevo un bisogno stringente — ma l\'ho utilizzata come opportunità per sperimentare lo sviluppo assistito dall\'IA.\n\nHo iniziato costruendo manualmente lo scheletro del sito — struttura, localizzazione, librerie — per poi portare dentro gli strumenti di IA per accelerare il resto. Claude Code e GitHub Copilot (via VS Code) mi hanno davvero sorpreso: il boost alla velocità di sviluppo e la qualità del codice generato sono stati migliori del previsto.',
    },
    demo: '#',
    image: '/images/alberto-maserati-w-rgb.svg',
    techStack: ['Next.js', 'Vercel', 'Tailwind CSS', 'GitHub', 'Claude', 'GitHub Copilot'],
    gallery: [],
  },
  {
    id: 1,
    slug: 'network-security-platform',
    title: {
      en: 'Network Security Platform',
      it: 'Piattaforma di network Security',
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
      it: 'Dashboard BI aziendale',
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
      en: 'Energy meter mobile app',
      it: 'App mobile energy meter',
    },
    description: {
      en: 'Project management for the development of a mobile app for configuring and monitoring industrial energy metering devices via Bluetooth',
      it: 'Project management per lo sviluppo di un\'app mobile per la configurazione e il monitoraggio di energy meter industriali tramite Bluetooth',
    },
    longDescription: {
      en: 'I managed the project for the development of a mobile app for configuring and monitoring industrial energy metering devices via Bluetooth.\n\nMy role covered the full project lifecycle: coordinating the execution of turnkey activities, defining technical specifications in cooperation with the client, managing change requests, and monitoring project costs and performance.\n\nThe app guides technicians through device commissioning, configuration, and energy data readings, and is available on both iOS and Android.',
      it: 'Ho gestito il progetto per lo sviluppo di un\'app mobile per la configurazione e il monitoraggio di dispositivi di misura energetica industriali tramite Bluetooth.\n\nIl mio ruolo ha coperto l\'intero ciclo di vita del progetto: coordinamento delle attività chiavi in mano, definizione delle specifiche tecniche in cooperazione con il cliente, gestione delle change request e monitoraggio dei costi e delle performance di progetto.\n\nL\'app guida i tecnici attraverso la messa in servizio, la configurazione e la lettura dei dati energetici ed è disponibile su iOS e Android.',
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
      en: 'Smart building platform',
      it: 'Piattaforma smart building',
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
      en: 'Neobank backend development',
      it: 'Sviluppo backend neobank',
    },description: {
      en: 'Backend development for a microservices-based fintech platform, following Domain-Driven Design and event-driven architecture.',
      it: 'Sviluppo backend per una piattaforma fintech a microservizi, seguendo principi di Domain-Driven Design e architettura event-driven.',
    },
    longDescription: {
      en: 'I joined the Platform team at Flowe, contributing to the development of a microservices-based backend following Domain-Driven Design (DDD) principles and an event-driven architectural paradigm.\n\nThe team of around twenty people worked in a structured Agile environment with full Scrum ceremonies — sprint planning, sprint review, and sprint retrospective — at a corporate scale.\n\nThe codebase was managed via GitFlow with systematic code reviews among team members. Data persistence relied on both relational and non-relational databases, including Cosmos DB.',
      it: 'Ho fatto parte del team Platform di Flowe, contribuendo allo sviluppo del backend orchestrato a microservizi secondo i principi del Domain-Driven Design (DDD) e un paradigma architetturale event-driven.\n\nIl team, composto da una ventina di persone, operava in un contesto Agile strutturato con cerimonie Scrum complete — sprint planning, sprint review e sprint retrospective — a livello corporate.\n\nIl codice era gestito tramite GitFlow con code review sistematiche tra i membri del team. Per la persistenza dei dati erano utilizzati database relazionali e non relazionali, tra cui Cosmos DB.',
    },
    demo: '#',
    image: '',
    techStack: ['ASP.NET', 'C#', 'Microservices', 'Event-driven Arch', 'Dapper', 'SQL Server', 'Cosmos DB', 'Azure'],
    gallery: [],
  },
  {
    id: 6,
    slug: 'credit-risk-platform-development',
    title: {
      en: 'Credit risk platform development',
      it: 'Sviluppo piattaforma credit risk',
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
      en: 'Cutting line management',
      it: 'Gestione linea di taglio',
    },
    description: {
      en: 'Desktop application for managing and monitoring cutting systems in expanded polystyrene production plants.',
      it: 'Applicazione desktop per la gestione e il monitoraggio di sistemi di taglio per impianti di produzione di polistirene espanso.',
    },
    longDescription: {
      en: 'I acted as tech lead for the development of a desktop application for an Italian company specializing in expanded polystyrene production plants.\n\nThe application allows operators to define cutting jobs, monitor their progress in real time, and manage errors detected during the production process.\n\nThe interface is also fully usable via touch screen. I actively contributed to development while coordinating the rest of the team, managing tasks and pull requests through an Azure DevOps Kanban board.',
      it: 'Ho ricoperto il ruolo di tech lead per lo sviluppo di un\'applicazione desktop per un\'azienda italiana specializzata nella produzione di impianti per polistirene espanso.\n\nL\'applicazione consente agli operatori di definire i job di taglio, monitorarne l\'avanzamento in tempo reale e gestire eventuali errori rilevati durante il processo produttivo.\n\nL\'interfaccia è inoltre completamente utilizzabile tramite touch screen. Ho contribuito attivamente allo sviluppo coordinando parallelamente il resto del team, gestendo attività e pull request tramite una Kanban board su Azure DevOps.',
    },
    demo: '#',
    image: `${PROJECTS_IMAGES_BASE}/cutterline/desktop.png`,
    techStack: ['.NET', 'WPF', 'C#', 'Azure DevOps'],
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
