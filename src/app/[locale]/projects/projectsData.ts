export const projectsData = {
  'cue': {
    title: 'Cue (AI Task Manager)',
    slug: 'cue',
    description: 'LLM-powered task manager that parses natural language commands into structured tasks. Reduced task creation from 5+ steps to a single input — boosting daily active task completion by 45%.',
    problem: 'Traditional task managers require multiple clicks, form fields, and structured input to create a single task. This friction leads to procrastination and incomplete task capture, especially during fast-paced workflows.',
    solution: 'Cue transforms natural language into structured tasks using LLMs. Simply type "Buy groceries tomorrow at 3pm" and Cue automatically extracts the task, due date, and time.',
    stack: ['TypeScript', 'Node.js', 'Next.js', 'Docker', 'JWT', 'PostgreSQL', 'BullMQ', 'Redis'],
    highlights: [
      'NLP pipeline with BullMQ concurrent worker architecture parsing natural language → structured task entities',
      'JWT + RBAC auth layer sustaining <100ms response times across 500+ concurrent sessions',
      'Full-stack PWA with offline support via IndexedDB and service workers; zero-downtime deploys',
      'Intelligent context-aware parsing that understands relative dates ("next Monday"), priorities ("urgent"), and assignments ("@john")',
      'Real-time collaboration features allowing team members to share and assign tasks seamlessly'
    ],
    liveUrl: 'https://cuedot.tech',
    githubUrl: null,
    features: [
      'Natural language task input with smart parsing',
      'Recurring tasks with flexible scheduling',
      'Team collaboration and task assignment',
      'Offline-first PWA architecture',
      'Real-time sync across devices',
      'Priority-based task queuing'
    ]
  },
  'one-chat': {
    title: 'One-Chat (Multi-Model AI Platform)',
    slug: 'one-chat',
    description: 'Unified AI gateway supporting multiple LLM providers (OpenAI, Anthropic, etc.) with Bring-Your-Own-Key architecture and real-time streaming.',
    problem: 'Developers and businesses struggle with vendor lock-in when integrating AI capabilities. Switching between LLM providers requires code rewrites, and managing multiple API keys is cumbersome.',
    solution: 'One-Chat provides a unified API gateway that abstracts away provider-specific implementations. Users bring their own API keys, maintaining full cost control while enjoying a consistent interface across all providers.',
    stack: ['TypeScript', 'Node.js', 'Express.js', 'AWS', 'WebSockets', 'OAuth 2.0'],
    highlights: [
      'Multi-LLM API gateway with BYOK architecture routing across OpenAI, Anthropic, and others',
      'Per-user API key isolation with RBAC and OAuth 2.0 — zero cross-user data exposure across 1,000+ sessions',
      'WebSocket streaming cut perceived response latency from 3s+ to under 1.8s',
      'Intelligent load balancing and failover between providers for 99.9% uptime',
      'Built-in cost tracking and usage analytics per provider',
      'Support for function calling and multi-modal inputs (text, images)'
    ],
    liveUrl: 'https://1chat.tech',
    githubUrl: null,
    features: [
      'Unified API across OpenAI, Anthropic, Google, and more',
      'Bring-Your-Own-Key (BYOK) for full cost control',
      'Real-time streaming responses',
      'Conversation history and context management',
      'Usage analytics and cost tracking',
      'Enterprise-grade security and isolation'
    ]
  },
  'pharmetrade': {
    title: 'PharMeTrade',
    slug: 'pharmetrade',
    description: 'Enterprise B2B marketplace connecting pharmaceutical buyers and sellers with real-time inventory management, secure transactions, and regulatory compliance tracking.',
    problem: 'Pharmaceutical distributors and buyers face fragmented supply chains, lack of real-time inventory visibility, and complex regulatory requirements. Traditional procurement involves phone calls, emails, and manual paperwork.',
    solution: 'PharMeTrade digitizes the entire pharmaceutical trade workflow with a secure, compliant platform featuring real-time inventory, automated order processing, and built-in regulatory compliance tracking.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Redis', 'Celery'],
    highlights: [
      'Real-time inventory sync across 50+ distributors processing 10,000+ daily transactions',
      'Automated regulatory compliance checks (FDA, DEA) integrated into order workflow',
      'Multi-tenant architecture with role-based access control for buyers, sellers, and admins',
      'Asynchronous order processing with Celery reducing order confirmation time from hours to minutes',
      'Secure document management for certifications, licenses, and batch records',
      'Advanced search and filtering with PostgreSQL full-text search for 100,000+ products'
    ],
    liveUrl: null,
    githubUrl: null,
    features: [
      'Real-time inventory management',
      'Automated order processing and fulfillment',
      'Regulatory compliance tracking (FDA, DEA)',
      'Secure document storage and verification',
      'Multi-party transaction workflows',
      'Advanced analytics and reporting',
      'Integration with existing ERP systems'
    ]
  }
};

export type ProjectSlug = keyof typeof projectsData;
