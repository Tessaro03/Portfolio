const CONTENT = {
  pt: {
    nav: {
      projects: "Projetos",
      case: "Case Study",
      skills: "Skills",
      courses: "Cursos",
      experience: "Experiência",
      contact: "Contato",
    },
    hero: {
      kicker: "Full Stack Developer",
      title: "Construo APIs seguras e produtos web escaláveis",
      subtitle:
        "Java (Spring) • Angular • SQL • Docker • AWS — foco em arquitetura, performance e entrega.",
      ctaProjects: "Ver projetos",
      ctaCV: "Baixar CV",
      stat1: "projetos concluídos",
      stat2: "Auth & Segurança",
      stat3: "Docker Conteinerização",
    },
    profile: { name: "Gabriel Tessaro Favareto", role: "Full Stack Developer" },
    about: {
      title: "Sobre",
      subtitle: "Direto ao ponto: o que eu faço e como eu entrego.",
      h3: "O que eu entrego",
      b1: "APIs REST com autenticação (JWT), validações e logs.",
      b2: "Front-end em Angular com foco em UX e performance.",
      b3: "Integrações com banco (SQL), Docker e deploy.",
      methodTitle: "Como eu trabalho",
      m1: "Entendo o problema e defino escopo/critério de sucesso.",
      m2: "Desenho arquitetura simples e escalável.",
      m3: "Implemento, testo, documento e deixo pronto pra deploy.",
    },
    projects: {
      title: "Projetos",
      subtitle: "Seleção de projetos com código, demo e stack.",
    },
    case: {
      title: "Case Study",
      subtitle: "Um projeto explicado “por dentro”.",
      h: "API de Gestão Financeira",
      problemT: "Problema",
      problem:
        "Necessidade de centralizar lançamentos, categorias e relatórios com controle de acesso e histórico.",
      solutionT: "Solução",
      solution:
        "API Spring com JWT, validações, camadas, documentação e deploy Docker.",
      archT: "Arquitetura",
      arch: "Angular → API (Spring) → MySQL → (cache opcional) → CI/CD",
      decisionsT: "Decisões",
      d1: "DTOs + validação (Bean Validation)",
      d2: "Roles por perfil (ADMIN/USER)",
      d3: "Logs estruturados + tratamento de erros",
      resultsT: "Resultado",
      r1: "Código organizado, fácil de manter e evoluir.",
      r2: "Fluxo de deploy replicável com Docker.",
      r3: "Base pronta para testes e observabilidade.",
      demo: "Ver demo",
      code: "Ver código",
    },
    skills: {
      title: "Skills",
      subtitle: "O que eu uso no dia a dia (e o que eu já usei).",
    },
    exp: {
      title: "Experiência",
      subtitle: "Foco em entregas e resultados (não só responsabilidades).",
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos conversar — respondo rápido.",
      direct: "Direto",
      formName: "Nome",
      formMsg: "Mensagem",
      formBtn: "Enviar",
      formHint:
        "Dica: você pode trocar isso por Formspree/Netlify Forms depois.",
    },
    footer: { rights: "Todos os direitos reservados" },
    ui: { searchPlaceholder: "Buscar projetos (ex: JWT, Docker, MySQL)..." },
    courses: {
      title: "Cursos & Certificações",
      subtitle:
        "Formações focadas em Java/Spring, Microservices, Docker e Django.",
    },
  },

  en: {
    nav: {
      projects: "Projects",
      case: "Case Study",
      skills: "Skills",
      courses: "Courses",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      kicker: "Full Stack Developer",
      title: "I build secure APIs and scalable web products",
      subtitle:
        "Java (Spring) • Angular • SQL • Docker • AWS — architecture, performance, and delivery.",
      ctaProjects: "View projects",
      ctaCV: "Download CV",
      stat1: "projects delivered",
      stat2: "Auth & Security",
      stat3: "Docker Containerization",
    },
    profile: { name: "Gabriel Tessaro Favareto", role: "Full Stack Developer" },
    about: {
      title: "About",
      subtitle: "Straight to the point: what I do and how I deliver.",
      h3: "What I deliver",
      b1: "REST APIs with JWT auth, validations, and logging.",
      b2: "Angular front-end focused on UX and performance.",
      b3: "SQL integrations, Docker, and deployment.",
      methodTitle: "How I work",
      m1: "Understand the problem and define success criteria.",
      m2: "Design a simple, scalable architecture.",
      m3: "Implement, test, document, and ship.",
    },
    projects: {
      title: "Projects",
      subtitle: "Selected projects with code, demo, and stack.",
    },
    case: {
      title: "Case Study",
      subtitle: "One project explained from the inside.",
      h: "Finance Management API (example)",
      problemT: "Problem",
      problem:
        "Need to centralize transactions, categories and reports with access control and history.",
      solutionT: "Solution",
      solution:
        "Spring API with JWT, validations, layered architecture, docs and Docker deploy.",
      archT: "Architecture",
      arch: "Angular → API (Spring) → MySQL → (optional cache) → CI/CD",
      decisionsT: "Key decisions",
      d1: "DTOs + validation (Bean Validation)",
      d2: "Role-based access (ADMIN/USER)",
      d3: "Structured logs + error handling",
      resultsT: "Outcome",
      r1: "Maintainable, clean codebase.",
      r2: "Repeatable deployment with Docker.",
      r3: "Ready for tests and observability.",
      demo: "View demo",
      code: "View code",
    },
    skills: {
      title: "Skills",
      subtitle: "What I use daily (and what I’ve used).",
    },
    exp: {
      title: "Experience",
      subtitle: "Focused on outcomes (not just responsibilities).",
    },
    contact: {
      title: "Contact",
      subtitle: "Let’s talk — I reply fast.",
      direct: "Direct",
      formName: "Name",
      formMsg: "Message",
      formBtn: "Send",
      formHint: "Tip: swap this for Formspree/Netlify Forms later.",
    },
    footer: { rights: "All rights reserved" },
    ui: { searchPlaceholder: "Search projects (e.g., JWT, Docker, MySQL)..." },
    courses: {
      title: "Courses & Certifications",
      subtitle:
        "Training focused on Java/Spring, Microservices, Docker, and Django.",
    },
  },

  es: {
    nav: {
      projects: "Proyectos",
      case: "Caso",
      skills: "Skills",
      courses: "Cursos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      kicker: "Desarrollador Full Stack",
      title: "Construyo APIs seguras y productos web escalables",
      subtitle:
        "Java (Spring) • Angular • SQL • Docker • AWS — arquitectura, performance y entrega.",
      ctaProjects: "Ver proyectos",
      ctaCV: "Descargar CV",
      stat1: "proyectos entregados",
      stat2: "Auth & Seguridad",
      stat3: "Containerización con Docker",
    },
    profile: {
      name: "Gabriel Tessaro Favareto",
      role: "Desarrollador Full Stack",
    },
    about: {
      title: "Sobre mí",
      subtitle: "Al grano: qué hago y cómo entrego.",
      h3: "Qué entrego",
      b1: "APIs REST con JWT, validaciones y logs.",
      b2: "Front-end Angular con foco en UX y performance.",
      b3: "Integración SQL, Docker y despliegue.",
      methodTitle: "Cómo trabajo",
      m1: "Entiendo el problema y defino criterios de éxito.",
      m2: "Diseño una arquitectura simple y escalable.",
      m3: "Implemento, pruebo, documento y publico.",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Proyectos seleccionados con código, demo y stack.",
    },
    case: {
      title: "Caso",
      subtitle: "Un proyecto explicado por dentro.",
      h: "API de Gestión Financiera (ejemplo)",
      problemT: "Problema",
      problem:
        "Centralizar registros, categorías e informes con control de acceso e historial.",
      solutionT: "Solución",
      solution:
        "API Spring con JWT, validaciones, capas, documentación y deploy con Docker.",
      archT: "Arquitectura",
      arch: "Angular → API (Spring) → MySQL → (cache opcional) → CI/CD",
      decisionsT: "Decisiones",
      d1: "DTOs + validación (Bean Validation)",
      d2: "Acceso por roles (ADMIN/USER)",
      d3: "Logs estructurados + manejo de errores",
      resultsT: "Resultado",
      r1: "Código limpio y mantenible.",
      r2: "Deploy repetible con Docker.",
      r3: "Listo para tests y observabilidad.",
      demo: "Ver demo",
      code: "Ver código",
    },
    skills: {
      title: "Skills",
      subtitle: "Lo que uso a diario (y lo que ya usé).",
    },
    exp: {
      title: "Experiencia",
      subtitle: "Enfocado en resultados (no solo tareas).",
    },
    contact: {
      title: "Contacto",
      subtitle: "Hablemos — respondo rápido.",
      direct: "Directo",
      formName: "Nombre",
      formMsg: "Mensaje",
      formBtn: "Enviar",
      formHint: "Tip: cambia esto por Formspree/Netlify Forms después.",
    },
    footer: { rights: "Todos los derechos reservados" },
    ui: { searchPlaceholder: "Buscar proyectos (ej: JWT, Docker, MySQL)..." },
    courses: {
      title: "Cursos y Certificaciones",
      subtitle:
        "Formación enfocada en Java/Spring, Microservicios, Docker y Django.",
    },
  },
};

const DATA = {
  heroTags: ["Java", "Spring", "Angular", "SQL", "Docker", "AWS"],
  skills: [
    {
      title: "Back-end",
      items: [
        "Java",
        "Spring Boot",
        "JWT",
        "REST",
        "JPA/Hibernate",
        "Swagger/OpenAPI",
      ],
    },
    {
      title: "Front-end",
      items: [
        "Angular",
        "TypeScript",
        "PrimeNG",
        "HTML/CSS",
        "Responsivo",
        "Acessibilidade",
      ],
    },
    {
      title: "Infra/Dev",
      items: [
        "Docker",
        "Git",
        "CI/CD",
        "Linux",
        "AWS (básico)",
        "Testes (básico)",
      ],
    },
  ],
  experience: [
    {
      role: "Desenvolvedor Júnior",
      where: "Foursys",
      when: "fev 2025 — atual",
      bullets: [
        "Desenvolvimento e manutenção de funcionalidades em sistemas internos.",
        "Implementação de endpoints/integrações e ajustes em banco de dados.",
        "Apoio em correções, melhorias e organização do código.",
      ],
    },
    {
      role: "Auxiliar Administrativo",
      where: "Foursys",
      when: "out 2022 — fev 2025",
      bullets: [
        "Rotinas administrativas e suporte a processos internos.",
        "Organização de informações e apoio operacional do time.",
        "Padronização/controle de documentos e demandas recorrentes.",
      ],
    },
    {
      role: "Assistente Administrativo (Aprendiz)",
      where: "Maxi Shopping Jundiaí",
      when: "dez 2019 — mar 2021",
      bullets: [
        "Apoio administrativo e organização de rotinas.",
        "Atendimento interno e suporte em controles e documentos.",
        "Aprendizado prático de processos e disciplina operacional.",
      ],
    },
  ],
  projects: [
    {
      title: {
        pt: "Plataforma de Faturamento",
        en: "Billing Platform",
        es: "Plataforma de Facturación",
      },
      desc: {
        pt: "Plataforma de faturamento em desenvolvimento para uso interno da empresa, com foco em emissão e configuração de notas fiscais, regras tributárias, gestão de clientes e automação de processos financeiros.",
        en: "Billing platform under development for internal company use, focused on invoice issuance and configuration, tax rules, client management, and financial process automation.",
        es: "Plataforma de facturación en desarrollo para uso interno de la empresa, enfocada en la emisión y configuración de facturas, reglas fiscales, gestión de clientes y automatización de procesos financieros.",
      },
      tech: ["Java", "Spring Boot", "Angular", "TypeScript", "Oracle"],
      status: "wip", // work in progress
      featured: true,
    },

    {
      title: { pt: "Shomer", en: "Shomer", es: "Shomer" },
      desc: {
        pt: "Plataforma web desenvolvida para uma empresa de formação de vigilantes, incluindo site institucional e sistema completo para gestão de alunos, turmas e cursos, com diversas funcionalidades administrativas.",
        en: "Web platform developed for a security guard training company, including an institutional website and a complete system for managing students, classes, and courses, with multiple administrative features.",
        es: "Plataforma web desarrollada para una empresa de formación de vigilantes, que incluye un sitio institucional y un sistema completo para la gestión de alumnos, clases y cursos, con diversas funcionalidades administrativas.",
      },
      image: "./assets/shomer.png",
      tech: [
        "Java",
        "Spring Boot",
        "Angular",
        "TypeScript",
        "HTML",
        "CSS",
        "AWS",
      ],
      links: {
        demo: "https://shomersp.com.br/",
        code: "#",
      },
      featured: true,
    },
    {
      title: {
        pt: "Food Microservice",
        en: "Food Microservice",
        es: "Food Microservice",
      },
      desc: {
        pt: "Este projeto de microservices foi desenvolvido para consolidar meu aprendizado em Java e Spring. Ele possui dois serviços: Pedido, que registra as solicitações dos clientes, e Pagamento, que processa a cobrança e notifica o serviço de Pedido após a confirmação.",
        en: "This microservices project was built to consolidate my learning in Java and Spring. It includes two services: Order, which records customer orders, and Payment, which processes payments and notifies the Order service after confirmation.",
        es: "Este proyecto de microservicios fue desarrollado para consolidar mi aprendizaje en Java y Spring. Incluye dos servicios: Pedido, que registra las solicitudes de los clientes, y Pago, que procesa los pagos y notifica al servicio de Pedido tras la confirmación.",
      },
      image: "./assets/project-2.png",
      tech: ["SQL", "Java", "API", "Docker", "RabbitMQ"],
      links: {
        demo: "#",
        code: "https://github.com/Tessaro03/Food-MicroService",
      },
      featured: false,
    },
    // 1) TaskHub Api
    {
      title: { pt: "TaskHub API", en: "TaskHub API", es: "TaskHub API" },
      desc: {
        pt: "API para gerenciamento de equipes, projetos e tarefas, oferecendo uma experiência completa para organizar trabalho e acompanhar entregas.",
        en: "API for managing teams, projects, and tasks, providing a complete experience to organize work and track delivery.",
        es: "API para gestionar equipos, proyectos y tareas, ofreciendo una experiencia completa para organizar el trabajo y dar seguimiento a entregas.",
      },
      image: "./assets/taskhub-api.png",
      tech: ["Java", "Spring", "SQL"],
      links: { demo: "#", code: "https://github.com/Tessaro03/TaskHubApi" },
      featured: false,
    },

    // 2) Gestão Api
    {
      title: { pt: "Gestão API", en: "Gestão API", es: "Gestión API" },
      desc: {
        pt: "API completa para gerenciamento de lojas: administração de funcionários, categorias e produtos, com MySQL e autenticação via JWT.",
        en: "Complete store management API: manage employees, categories, and products, using MySQL and JWT authentication.",
        es: "API completa para gestión de tiendas: administración de empleados, categorías y productos, con MySQL y autenticación JWT.",
      },
      image: "./assets/gestao-api.png",
      tech: ["Java", "Spring", "SQL", "MySQL", "JWT"],
      links: { demo: "#", code: "https://github.com/Tessaro03/gestaoAPI" },
      featured: false,
    },

    // 3) ControlledMoney
    {
      title: {
        pt: "ControlledMoney API",
        en: "ControlledMoney API",
        es: "ControlledMoney API",
      },
      desc: {
        pt: "API para controle financeiro: registro de lucros mensais, gastos e parcelas, com previsões e status de pagamento para apoiar o planejamento.",
        en: "Financial control API: track monthly income, expenses, and installments, with forecasts and payment status to support planning.",
        es: "API de control financiero: registro de ingresos mensuales, gastos y cuotas, con pronósticos y estado de pagos para apoyar la planificación.",
      },
      image: "./assets/controlledmoney.png",
      tech: ["Java", "Spring", "SQL"],
      links: {
        demo: "#",
        code: "https://github.com/Tessaro03/ControlledMoney",
      },
      featured: false,
    },

    // 4) Quiz Educacional
    {
      title: {
        pt: "Quiz Educacional",
        en: "Educational Quiz",
        es: "Quiz Educativo",
      },
      desc: {
        pt: "Jogo educativo em Java desenvolvido no curso de Ciência da Computação, usando JavaFX e com foco em Educação Ambiental.",
        en: "Educational Java game developed during a Computer Science course, using JavaFX and focused on Environmental Education.",
        es: "Juego educativo en Java desarrollado en el curso de Ciencias de la Computación, usando JavaFX y con enfoque en Educación Ambiental.",
      },
      image: "./assets/quiz-educacional.png",
      tech: ["Java", "JavaFX"],
      links: {
        demo: "#",
        code: "https://github.com/Tessaro03/QuizEducacional",
      },
      featured: false,
    },

    // 5) TaskHub (Django)
    {
      title: { pt: "TaskHub", en: "TaskHub", es: "TaskHub" },
      desc: {
        pt: "Aplicação para organização de projetos: equipes colaborativas, acompanhamento de progresso e centralização de informações de forma simples.",
        en: "Project organization app: collaborative teams, progress tracking, and centralized information in a simple workflow.",
        es: "Aplicación de organización de proyectos: equipos colaborativos, seguimiento de progreso y centralización de información de forma simple.",
      },
      image: "./assets/taskhub.png",
      tech: ["Python", "Django", "SQL", "JavaScript", "HTML", "CSS"],
      links: {
        demo: "#",
        code: "https://github.com/Tessaro03/TaskHub-Project",
      },
      featured: false,
    },

    // 6) CarToop
    {
      title: { pt: "CarToop", en: "CarToop", es: "CarToop" },
      desc: {
        pt: "Plataforma online para entusiastas de veículos: comprar, vender e favoritar carros, motos, vans e caminhões.",
        en: "Online platform for vehicle enthusiasts: buy, sell, and favorite cars, motorcycles, vans, and trucks.",
        es: "Plataforma online para entusiastas de vehículos: comprar, vender y marcar como favoritos autos, motos, vans y camiones.",
      },
      image: "./assets/cartoop.png",
      tech: ["Python", "Django", "SQL", "JavaScript", "HTML", "CSS"],
      links: {
        demo: "#",
        code: "https://github.com/Tessaro03/CarToop-Project/",
      },
      featured: false,
    },

    // 7) FanFute
    {
      title: { pt: "FanFute", en: "FanFute", es: "FanFute" },
      desc: {
        pt: "Plataforma para fãs de futebol com competições, tabelas e rodadas atualizadas, estatísticas detalhadas e informações de escalações.",
        en: "Football fan platform with competitions, updated tables/rounds, detailed stats, and lineup information.",
        es: "Plataforma para aficionados al fútbol con competiciones, tablas y jornadas actualizadas, estadísticas detalladas e información de alineaciones.",
      },
      image: "./assets/fanfute.png",
      tech: ["Python", "Django", "SQL", "JavaScript", "HTML", "CSS"],
      links: { demo: "#", code: "#" },
      featured: false,
    },
  ],
  courses: [
    {
      group: "Java & Spring ",
      items: [
        "Arquitetura Java: Clean Architecture",
        "Spring Boot 3: documente, teste e prepare uma API para o deploy",
        "Spring Boot 3: aplique boas práticas e proteja uma API Rest",
        "Spring Boot 3: desenvolva uma API Rest em Java",
        "Formação Java Web: crie aplicações usando Spring Boot",
        "Java e JDBC: trabalhando com um banco de dados",
        "Java: persistência de dados e consultas com Spring Data JPA",
        "Persistência com JPA: Hibernate",
        "Maven: gerenciamento de dependências e build de aplicações Java",
        "Boas práticas de programação: automatizando testes com Java",
        "Threads em Java 1: programação paralela",
        "Java: trabalhando com lambdas, streams e Spring Framework",
      ],
    },
    {
      group: "Microservices & Infra ",
      items: [
        "Microsserviços na prática: entendendo a tomada de decisões",
        "Microsserviços na prática: implementando com Java e Spring",
        "Microsserviços na prática: mensageria com RabbitMQ",
        "Docker: criando e gerenciando containers",
      ],
    },
    {
      group: "Django & APIs ",
      items: [
        "API com Django 3: Django Rest Framework",
        "API com Django 3: Validações, buscas, filtros e deploy",
        "Django: persistência de dados e Admin",
        "Django: autenticação de formulários e alerta",
        "Django: templates e boas práticas",
        "Boas práticas no Django: apps, pastas e paginação",
        "Formação Django: crie aplicações em Python",
      ],
    },
    {
      group: "Fundamentos ",
      items: [
        "Java Básico [40h]",
        "Java POO [40h]",
        "JavaScript [40h]",
        "MySQL [40h]",
        "HTML5 e CSS3: Módulos 1–5 [40h cada]",
        "Python 3: Mundo 1–3 [40h cada]",
        "Python: entendendo/avançando em Orientação a Objetos",
      ],
    },
  ],
};
