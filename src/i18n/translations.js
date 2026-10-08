// Text content per language. Language-independent data (stacks, links, icons) lives in the components.
const translations = {
  en: {
    meta: {
      description:
        "Javier Redondo - Full-Stack & AI Engineer portfolio. React, Node.js, Google Cloud, AI agents and MCP. Open to freelance projects and full-time roles.",
    },
    header: {
      language: "Language",
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
      light: "Light mode",
      dark: "Dark mode",
    },
    intro: {
      availability: "Open to freelance & full-time roles",
      titleStart: "I am ready to face",
      titleHighlight: "new challenges",
      summary:
        "Full-stack and AI engineer designing and shipping scalable architectures, SaaS platforms and AI agents end-to-end, specialized in React, Node.js and Google Cloud.",
      explore: "Explore works",
      linkedin: "LinkedIn",
      email: "Email me",
    },
    info: {
      eyebrow: "Get to know me",
      title: "What I've been working on",
      tablist: "Sections",
      stack: "Tech stack",
      showMore: "Show more",
      showLess: "Show less",
      tabs: { experience: "Experience", projects: "Projects", about: "About me" },
      experiences: [
        {
          id: "cedetec",
          role: "Full Stack Developer",
          period: "2023 – Present",
          summary:
            "End-to-end design, development and deployment of a multi-tenant SaaS platform for educational and financial management, serving multiple campuses simultaneously.",
          highlights: [
            {
              title: "Architecture & Backend",
              text: "Designed from scratch a multi-tenant REST API (Node.js/Express) with independent database pools. Implemented payment automation (Stripe webhooks/cron) and integrations with a dual LMS (Moodle/Brightspace) and Google Workspace.",
            },
            {
              title: "Data Engineering & BI",
              text: "Led the migration and centralization of data into Google BigQuery using Fivetran (ETL), building dynamic dashboards for C-level decision-making.",
            },
            {
              title: "Frontend & Product",
              text: "Built the central admin panel and the student portal (React 18, Redux, TanStack Query): enrollment wizards and RBAC with user impersonation, prioritizing scalability and UX.",
            },
            {
              title: "AI Agents",
              text: "Designed a multi-agent system on top of the multi-tenant Node.js backend: five chained agents (planning → development → testing → QA → documentation) that orchestrate and give feedback to each other, delivering tested and documented features.",
            },
            {
              title: "MCP Server",
              text: "Currently building a Model Context Protocol (MCP) server on top of the platform so employees across departments can query the app's data directly from their AI assistants.",
            },
            {
              title: "Testing",
              text: "Set up the platform's testing system from scratch, covering both the Node.js REST API and the React frontend with Jest and Vitest.",
            },
            {
              title: "Cloud & DevOps",
              text: "Deployed the entire infrastructure on GCP (Cloud Run) with Docker and automated CI/CD pipelines (Cloud Build).",
            },
          ],
        },
        {
          id: "optima",
          role: "Full Stack Developer",
          period: "2022",
          highlights: [
            {
              text: "Built from scratch a React web app showing an up-to-date ranking of employee performance, integrating metrics from the quality department's surveys.",
            },
            {
              text: "Main person responsible for the maintenance and technical evolution of the quality department's management application, built on Laravel, MySQL and Sass.",
            },
          ],
        },
        {
          id: "artero",
          role: "Full Stack Developer",
          period: "2021 – 2022",
          highlights: [
            { text: "Developed key new features for the portal: a scissor finder, an adoption platform and a job portal." },
            { text: "Managed and maintained production platforms using PHP and jQuery, later migrating them to Magento." },
            { text: "Automated internal processes and synchronized the ERP (SAP) with the e-commerce to streamline the sales flow." },
          ],
        },
      ],
      projects: [
        {
          id: "plato",
          type: "Academy management SaaS",
          badge: "In production",
          summary:
            "Multi-tenant SaaS that runs the day-to-day of Centre d'estudis Plató, a tutoring academy with several centers: students and families, classes and timetables, teacher time tracking, billing and accounting. Built white-label from day one so it can be offered to other academies.",
          highlights: [
            {
              title: "Multi-tenant architecture",
              text: "Each academy or center is a tenant with isolated data, its own branding (logo and colors applied as CSS variables) and its own set of enabled modules, enforced by Express middleware. Access is role-based and scoped to each user's center.",
            },
            {
              title: "Billing & SEPA",
              text: "Monthly receipt generation, SEPA direct-debit remittances exported for the bank, PDF receipts emailed to families and a financial control view across bank, cash and totals.",
            },
            {
              title: "Scheduling & payroll",
              text: "Calendar with weekly recurrence and conflict detection, attendance tracking, and per-class teacher clock-in that feeds payroll by class type (hours × hourly rate).",
            },
            {
              title: "Enrollment & communications",
              text: "Public tokenized enrollment form that produces a PDF, editable SEPA mandates and bulk email to families with a rich-text editor, in Catalan and Spanish.",
            },
            {
              title: "Stack & deployment",
              text: "TypeScript monorepo with Zod schemas shared between React 19 and Node.js/Express, Prisma on PostgreSQL (Neon), JWT in httpOnly cookies, Vitest and Cypress; API on Cloud Run and frontend on Firebase Hosting.",
            },
          ],
        },
        {
          id: "lcn",
          type: "Website & ordering platform",
          badge: "In progress",
          summary:
            "Mobile-first website for a sandwich shop in Mataró (Barcelona), in Catalan and Spanish: menu with EU allergen info, opening hours, table reservations and online ordering for pickup or delivery.",
          highlights: [
            {
              title: "Backend",
              text: "REST API with Node.js/Express, PostgreSQL and Prisma: JWT auth with refresh tokens, argon2 hashing and Google sign-in, plus an admin panel to manage orders and the menu.",
            },
            {
              title: "Security & anti-fraud",
              text: "The server recalculates every order total, applies rate limiting, keeps a customer blacklist and an order status history; admin roles are checked against the database, not the token.",
            },
            {
              title: "Quality",
              text: "Vitest and React Testing Library on the frontend, Jest and Supertest on the backend, with a 90% coverage threshold.",
            },
            {
              title: "Progressive rollout",
              text: "Feature flags ship the static site first on Firebase Hosting and switch on accounts, orders and forms once the backend is deployed. Built with a team of specialized Claude Code agents.",
            },
          ],
          links: { site: "Visit website", repo: "Repository" },
        },
        {
          id: "aquaflow",
          type: "IoT smart irrigation",
          badge: "In progress",
          summary:
            "Smart irrigation system for farms: monitors soil moisture, temperature, pressure and flow sensors and a weather station in real time, and issues alerts and irrigation recommendations based on each crop, its growth stage and the weather forecast.",
          highlights: [
            {
              title: "IoT",
              text: "LoRaWAN data ingestion (The Things Network, MQTT) from Modbus sensors, an Ecowitt weather station and a Zeus SCADA datalogger, all through a single ingestion path shared with a soil simulator.",
            },
            {
              title: "Irrigation engine",
              text: "Soil-physics model (Van Genuchten) and a pressure-vs-flow check to detect leaks, bursts and blockages; irrigation is cancelled when rain is forecast (Open-Meteo).",
            },
            {
              title: "Real time",
              text: "Next.js dashboard with a plot map (Leaflet), sensor history and alerts pushed over WebSockets (Django Channels), Web Push notifications and an installable PWA with offline support, in Catalan, Spanish and English.",
            },
            {
              title: "Infrastructure",
              text: "Django REST, Celery, PostgreSQL and Redis on Docker Compose behind Nginx; GitHub Actions CI/CD builds the images and deploys to Hetzner Cloud.",
            },
          ],
        },
        {
          id: "atd",
          type: "AI & development workflow consulting",
          badge: "Consulting",
          summary:
            "ATD runs the entire training system of the European Space Agency (ESA): it schedules the study content, calendars and virtual classes.",
          highlights: [
            { title: "AI adoption", text: "Advised the team on integrating AI tools into their day-to-day way of working." },
            { title: "Git", text: "Version control with Git and collaborative workflows for the development team." },
            { title: "Environments", text: "Setup and organization of the team's different development environments." },
          ],
        },
        {
          id: "cinemabi",
          type: "Business intelligence platform",
          badge: "Degree project",
          summary:
            "My final degree project in Computer Engineering (UOC): a business intelligence platform for a cinema chain that brings box office, concessions and loyalty-program data together, covering the whole data lifecycle from generation to an interactive dashboard.",
          highlights: [
            {
              title: "Synthetic data",
              text: "Python scripts (Faker, pandas) generate a coherent relational dataset covering 12 months of operations (cinemas, screens, films, sessions, members and concession sales) with realistic patterns such as occupancy by weekday and member behavior.",
            },
            { title: "Data warehouse", text: "Star-schema dimensional model in Google BigQuery, loaded through a Python ETL script." },
            { title: "API", text: "Node.js/Express REST API that queries BigQuery and serves the KPIs to the frontend." },
            {
              title: "Dashboard",
              text: "React SPA with Recharts: KPIs, box office and occupancy trends, a showtime heatmap, profitability by format, member segmentation, concession cross-selling and a film comparator.",
            },
          ],
          links: { repo: "Repository" },
        },
      ],
      about: {
        title: "Hi, I am Javier Redondo",
        body: "Full-stack and AI engineer with experience designing and deploying scalable architectures and SaaS platforms end-to-end. Specialized in the JavaScript/TypeScript ecosystem (React, Node.js) and cloud environments (GCP), and in building LLM-powered solutions: multi-agent systems, RAG and MCP servers. Product-minded, able to lead complex integrations, process automation and data strategies for the business.",
        blocks: { skills: "Skills", education: "Education", certifications: "Certifications", languages: "Languages" },
        skills: [
          { area: "Frontend", items: "React, JavaScript, Redux, TanStack Query, Context, HTML, CSS, Bootstrap" },
          { area: "Backend & Architecture", items: "Node.js, Express, PHP, REST API design, multi-tenant architecture" },
          { area: "AI & LLMs", items: "Claude, OpenAI API, LangChain, RAG, embeddings, vector databases (Pinecone), Hugging Face, MCP, LLMOps" },
          { area: "Cloud, Data & DevOps", items: "Google Cloud Platform (Cloud Run), Docker, CI/CD (Cloud Build), BigQuery, Fivetran (ETL)" },
          { area: "Tools & Methodologies", items: "Git, Agile, Stripe automation, LMS integrations (Moodle/Brightspace)" },
        ],
        education: [
          { title: "Bachelor's Degree in Computer Engineering", school: "Universitat Oberta de Catalunya", period: "2023 – 2026" },
          { title: "Higher Technician in Web Application Development (DAW)", school: "IES Thos i Codina", period: "2020 – 2021" },
          { title: "Higher Technician in Network Systems Administration (ASIX)", school: "IES Thos i Codina", period: "2017 – 2020" },
        ],
        certifications: [
          {
            title: "Associate AI Engineer for Developers",
            school: "DataCamp",
            period: "2026",
            description:
              "29-hour career track (10 courses) on building LLM applications: OpenAI API, prompt engineering, Hugging Face, LLMOps, embeddings and vector databases, LangChain (chains, agents and RAG) and Model Context Protocol (MCP).",
          },
        ],
        languages: [
          { name: "Spanish", level: "Native" },
          { name: "Catalan", level: "Native" },
          { name: "English", level: "B1" },
        ],
      },
    },
    availability: {
      eyebrow: "Work with me",
      title: "Two ways we can work together",
      options: {
        freelance: {
          label: "Freelance projects",
          text: "Web applications, SaaS platforms, integrations (Stripe, LMS, Google Workspace) and AI agents, from the first idea to production.",
          cta: "Tell me about your project",
          subject: "Freelance project",
        },
        fullTime: {
          label: "Full-time position",
          text: "Open to joining a team as a full-stack or AI engineer, bringing end-to-end ownership from architecture to deployment.",
          cta: "Let's talk",
          subject: "Job opportunity",
        },
      },
    },
    footer: {
      rights: "All rights reserved",
    },
  },

  es: {
    meta: {
      description: "Javier Redondo - Portfolio de ingeniero Full-Stack y de IA. React, Node.js, Google Cloud, agentes de IA y MCP. Disponible para proyectos freelance y empleo fijo.",
    },
    header: {
      language: "Idioma",
      toLight: "Cambiar a modo claro",
      toDark: "Cambiar a modo oscuro",
      light: "Modo claro",
      dark: "Modo oscuro",
    },
    intro: {
      availability: "Disponible para freelance y empleo fijo",
      titleStart: "Estoy listo para afrontar",
      titleHighlight: "nuevos retos",
      summary:
        "Ingeniero full-stack y de IA que diseña y despliega arquitecturas escalables, plataformas SaaS y agentes de IA de principio a fin, especializado en React, Node.js y Google Cloud.",
      explore: "Ver trabajos",
      linkedin: "LinkedIn",
      email: "Escríbeme",
    },
    info: {
      eyebrow: "Conóceme",
      title: "En qué he estado trabajando",
      tablist: "Secciones",
      stack: "Stack tecnológico",
      showMore: "Ver más",
      showLess: "Ver menos",
      tabs: { experience: "Experiencia", projects: "Proyectos", about: "Sobre mí" },
      experiences: [
        {
          id: "cedetec",
          role: "Desarrollador Full Stack",
          period: "2023 – Actualidad",
          summary:
            "Diseño, desarrollo y despliegue de principio a fin de una plataforma SaaS multi-tenant de gestión académica y financiera que da servicio a varios campus de forma simultánea.",
          highlights: [
            {
              title: "Arquitectura y Backend",
              text: "Diseñé desde cero una API REST multi-tenant (Node.js/Express) con pools de bases de datos independientes. Implementé la automatización de pagos (webhooks/cron de Stripe) e integraciones con un LMS dual (Moodle/Brightspace) y Google Workspace.",
            },
            {
              title: "Ingeniería de datos y BI",
              text: "Lideré la migración y centralización de los datos en Google BigQuery mediante Fivetran (ETL), creando dashboards dinámicos para la toma de decisiones de dirección.",
            },
            {
              title: "Frontend y Producto",
              text: "Desarrollé el panel de administración central y el portal del estudiante (React 18, Redux, TanStack Query): asistentes de matrícula y RBAC con suplantación de usuarios, priorizando la escalabilidad y la UX.",
            },
            {
              title: "Agentes de IA",
              text: "Diseñé un sistema multiagente sobre el backend multi-tenant de Node.js: cinco agentes encadenados (planificación → desarrollo → testing → QA → documentación) que se orquestan y se retroalimentan entre sí, entregando funcionalidades probadas y documentadas.",
            },
            {
              title: "Servidor MCP",
              text: "Actualmente estoy desarrollando un servidor Model Context Protocol (MCP) sobre la plataforma para que empleados de distintos departamentos puedan consultar los datos de la app directamente desde sus asistentes de IA.",
            },
            {
              title: "Testing",
              text: "Monté desde cero el sistema de testing de la plataforma, cubriendo tanto la API REST de Node.js como el frontend en React con Jest y Vitest.",
            },
            {
              title: "Cloud y DevOps",
              text: "Desplegué toda la infraestructura en GCP (Cloud Run) con Docker y pipelines de CI/CD automatizados (Cloud Build).",
            },
          ],
        },
        {
          id: "optima",
          role: "Desarrollador Full Stack",
          period: "2022",
          highlights: [
            {
              text: "Desarrollé desde cero una aplicación web en React que muestra un ranking actualizado del rendimiento de los empleados, integrando métricas de las encuestas del departamento de calidad.",
            },
            {
              text: "Principal responsable del mantenimiento y la evolución técnica de la aplicación de gestión del departamento de calidad, desarrollada con Laravel, MySQL y Sass.",
            },
          ],
        },
        {
          id: "artero",
          role: "Desarrollador Full Stack",
          period: "2021 – 2022",
          highlights: [
            { text: "Desarrollé nuevas funcionalidades clave para el portal: un buscador de tijeras, una plataforma de adopción y un portal de empleo." },
            { text: "Gestioné y mantuve plataformas en producción con PHP y jQuery, migrándolas posteriormente a Magento." },
            { text: "Automaticé procesos internos y sincronicé el ERP (SAP) con el e-commerce para agilizar el flujo de ventas." },
          ],
        },
      ],
      projects: [
        {
          id: "plato",
          type: "SaaS de gestión para academias",
          badge: "En producción",
          summary:
            "SaaS multi-tenant que gestiona el día a día de Centre d'estudis Plató, una academia de repaso con varias sedes: alumnos y familias, clases y horarios, fichaje del profesorado, facturación y contabilidad. Diseñado como marca blanca desde el primer día para poder ofrecerlo a otras academias.",
          highlights: [
            {
              title: "Arquitectura multi-tenant",
              text: "Cada academia o sede es un tenant con sus datos aislados, su propia imagen (logo y colores aplicados como variables CSS) y sus módulos activos, controlados con middleware de Express. Los permisos van por rol y se limitan a la sede de cada usuario.",
            },
            {
              title: "Facturación y SEPA",
              text: "Generación mensual de recibos, remesas de domiciliación SEPA exportadas para el banco, recibos en PDF enviados por email a las familias y una vista de control financiero de banco, caja y total.",
            },
            {
              title: "Horarios y nóminas",
              text: "Calendario con recurrencia semanal y detección de conflictos, control de asistencia y fichaje del profesorado por clase que alimenta la nómina por tipo de clase (horas × tarifa).",
            },
            {
              title: "Matrícula y comunicaciones",
              text: "Formulario de inscripción público con enlace tokenizado que genera un PDF, mandatos SEPA editables y envío masivo de correos a las familias con editor de texto enriquecido, en catalán y castellano.",
            },
            {
              title: "Stack y despliegue",
              text: "Monorepo en TypeScript con esquemas Zod compartidos entre React 19 y Node.js/Express, Prisma sobre PostgreSQL (Neon), JWT en cookies httpOnly, Vitest y Cypress; API en Cloud Run y frontend en Firebase Hosting.",
            },
          ],
        },
        {
          id: "lcn",
          type: "Web y plataforma de pedidos",
          badge: "En desarrollo",
          summary:
            "Web para una bocadillería de Mataró, en catalán y castellano y pensada para móvil: carta con alérgenos, horarios, reservas de mesa y pedidos online para recoger o a domicilio.",
          highlights: [
            {
              title: "Backend",
              text: "API REST con Node.js/Express, PostgreSQL y Prisma: autenticación JWT con refresh tokens, hash con argon2 e inicio de sesión con Google, además de un panel de administración de pedidos y carta.",
            },
            {
              title: "Seguridad y antifraude",
              text: "El servidor recalcula el importe de cada pedido, aplica rate limiting y mantiene una lista negra de clientes y un historial de estados; los roles de administrador se comprueban contra la base de datos, no contra el token.",
            },
            {
              title: "Calidad",
              text: "Vitest y React Testing Library en el frontend, Jest y Supertest en el backend, con un umbral de cobertura del 90%.",
            },
            {
              title: "Despliegue progresivo",
              text: "Feature flags que publican primero la web estática en Firebase Hosting y activan cuentas, pedidos y formularios cuando el backend está desplegado. Desarrollado con un equipo de agentes especializados de Claude Code.",
            },
          ],
          links: { site: "Ver web", repo: "Repositorio" },
        },
        {
          id: "aquaflow",
          type: "Riego inteligente con IoT",
          badge: "En desarrollo",
          summary:
            "Sistema de riego inteligente para explotaciones agrícolas: monitoriza en tiempo real sensores de humedad del suelo, temperatura, presión y caudal y una estación meteorológica, y genera alertas y recomendaciones de riego según el cultivo, su fase y la previsión del tiempo.",
          highlights: [
            {
              title: "IoT",
              text: "Ingesta de datos LoRaWAN (The Things Network, MQTT) de sensores Modbus, una estación meteorológica Ecowitt y un datalogger SCADA Zeus, todo por una única vía de ingesta compartida con un simulador de suelo.",
            },
            {
              title: "Motor de riego",
              text: "Modelo de física del suelo (Van Genuchten) y control de presión frente a caudal para detectar fugas, roturas y obstrucciones; cancela el riego si se prevé lluvia (Open-Meteo).",
            },
            {
              title: "Tiempo real",
              text: "Dashboard en Next.js con mapa de parcelas (Leaflet), históricos y alertas enviados por WebSockets (Django Channels), notificaciones Web Push y PWA instalable con soporte offline, en catalán, castellano e inglés.",
            },
            {
              title: "Infraestructura",
              text: "Django REST, Celery, PostgreSQL y Redis en Docker Compose detrás de Nginx; CI/CD con GitHub Actions que construye las imágenes y despliega en Hetzner Cloud.",
            },
          ],
        },
        {
          id: "atd",
          type: "Consultoría en IA y flujo de desarrollo",
          badge: "Consultoría",
          summary:
            "ATD gestiona todo el sistema de formación de la Agencia Espacial Europea (ESA): programa los contenidos de estudio, los calendarios y las clases virtuales.",
          highlights: [
            { title: "Adopción de IA", text: "Asesoré al equipo para integrar herramientas de IA en su forma de trabajar del día a día." },
            { title: "Git", text: "Control de versiones con Git y flujos de trabajo colaborativos para el equipo de desarrollo." },
            { title: "Entornos", text: "Configuración y organización de los distintos entornos de desarrollo del equipo." },
          ],
        },
        {
          id: "cinemabi",
          type: "Plataforma de Business Intelligence",
          badge: "TFG",
          summary:
            "Mi Trabajo de Fin de Grado en Ingeniería Informática (UOC): una plataforma de Business Intelligence para una cadena de cines que unifica los datos de taquilla, bar y programa de fidelización, cubriendo todo el ciclo de vida del dato, desde su generación hasta un cuadro de mando interactivo.",
          highlights: [
            {
              title: "Datos sintéticos",
              text: "Scripts en Python (Faker, pandas) que generan un conjunto de datos relacional coherente con 12 meses de operativa (cines, salas, películas, sesiones, socios y ventas del bar) y patrones realistas como la ocupación según el día de la semana o el comportamiento de los socios.",
            },
            { title: "Data warehouse", text: "Modelo dimensional en estrella en Google BigQuery, cargado mediante un script ETL en Python." },
            { title: "API", text: "API REST en Node.js/Express que consulta BigQuery y sirve los KPIs al frontend." },
            {
              title: "Cuadro de mando",
              text: "SPA en React con Recharts: KPIs, evolución de taquilla y ocupación, mapa de calor por horario, rentabilidad por formato, segmentación de socios, venta cruzada en el bar y un comparador de películas.",
            },
          ],
          links: { repo: "Repositorio" },
        },
      ],
      about: {
        title: "Hola, soy Javier Redondo",
        body: "Ingeniero full-stack y de IA con experiencia en el diseño y despliegue de arquitecturas escalables y plataformas SaaS de principio a fin. Especializado en el ecosistema JavaScript/TypeScript (React, Node.js), en entornos cloud (GCP) y en soluciones basadas en LLMs: sistemas multiagente, RAG y servidores MCP. Con visión de producto, capaz de liderar integraciones complejas, automatización de procesos y estrategias de datos para el negocio.",
        blocks: { skills: "Habilidades", education: "Formación", certifications: "Certificaciones", languages: "Idiomas" },
        skills: [
          { area: "Frontend", items: "React, JavaScript, Redux, TanStack Query, Context, HTML, CSS, Bootstrap" },
          { area: "Backend y Arquitectura", items: "Node.js, Express, PHP, diseño de APIs REST, arquitectura multi-tenant" },
          { area: "IA y LLMs", items: "Claude, OpenAI API, LangChain, RAG, embeddings, bases de datos vectoriales (Pinecone), Hugging Face, MCP, LLMOps" },
          { area: "Cloud, Datos y DevOps", items: "Google Cloud Platform (Cloud Run), Docker, CI/CD (Cloud Build), BigQuery, Fivetran (ETL)" },
          { area: "Herramientas y Metodologías", items: "Git, Agile, automatización con Stripe, integraciones LMS (Moodle/Brightspace)" },
        ],
        education: [
          { title: "Grado en Ingeniería Informática", school: "Universitat Oberta de Catalunya", period: "2023 – 2026" },
          { title: "CFGS en Desarrollo de Aplicaciones Web (DAW)", school: "IES Thos i Codina", period: "2020 – 2021" },
          { title: "CFGS en Administración de Sistemas Informáticos en Red (ASIX)", school: "IES Thos i Codina", period: "2017 – 2020" },
        ],
        certifications: [
          {
            title: "Associate AI Engineer for Developers",
            school: "DataCamp",
            period: "2026",
            description:
              "Itinerario profesional de 29 horas (10 cursos) sobre desarrollo de aplicaciones con LLMs: OpenAI API, prompt engineering, Hugging Face, LLMOps, embeddings y bases de datos vectoriales, LangChain (chains, agentes y RAG) y Model Context Protocol (MCP).",
          },
        ],
        languages: [
          { name: "Español", level: "Nativo" },
          { name: "Catalán", level: "Nativo" },
          { name: "Inglés", level: "B1" },
        ],
      },
    },
    availability: {
      eyebrow: "Trabajemos juntos",
      title: "Dos formas de colaborar",
      options: {
        freelance: {
          label: "Proyectos freelance",
          text: "Aplicaciones web, plataformas SaaS, integraciones (Stripe, LMS, Google Workspace) y agentes de IA, desde la primera idea hasta producción.",
          cta: "Cuéntame tu proyecto",
          subject: "Proyecto freelance",
        },
        fullTime: {
          label: "Puesto fijo",
          text: "Abierto a incorporarme a un equipo como ingeniero full-stack o de IA, encargándome de punta a punta, desde la arquitectura hasta el despliegue.",
          cta: "Hablemos",
          subject: "Oportunidad laboral",
        },
      },
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },
};

export default translations;
