export const RESUME_PDF_PATH = '/images/projects/project-01/Niyaz-Nabi-Resume.pdf';

export const profile = {
  firstName: 'Niyaz',
  lastName: 'Nabi',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  title: 'Software Engineer',
  location: 'Chicago · Open to Relocation',
  phone: '(940) 300 9580',
  email: 'nniyaz0723@gmail.com',
  mailto: 'mailto:nniyaz0723@gmail.com',
  github: 'https://github.com/nabi06',
  linkedin: 'https://www.linkedin.com/in/niyaz-nabi-81329b228/',
};

export const summary =
  'Software Engineer building full-stack applications, AI-powered products, and distributed systems for enterprise-scale platforms. Hands-on expertise across RAG pipelines, LLM integration, and event-driven microservices, working with Apache Kafka, React, TypeScript, PostgreSQL, and AWS to design and ship cloud-native systems.';

export const headlineMetrics = [
  {
    value: 3,
    suffix: '+',
    label: 'Years of production experience',
    shortLabel: 'Experience',
    display: '3+ years',
  },
  {
    value: 21,
    suffix: ' pts',
    label: 'AI answer accuracy gain (71% → 92%)',
    shortLabel: 'AI accuracy',
    display: '71% → 92%',
  },
  {
    value: 72,
    suffix: '%',
    label: 'Query p95 latency reduction',
    shortLabel: 'p95 latency',
    display: '−72%',
  },
  {
    value: 85,
    suffix: '%',
    label: 'Faster data freshness (40 min → 6 min)',
    shortLabel: 'Data freshness',
    display: '85% faster',
  },
] as const;

export const experienceData: Record<
  string,
  {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }
> = {
  servicenow: {
    company: 'ServiceNow',
    role: 'Software Engineer',
    duration: 'Dec 2025 – Present',
    location: 'San Francisco',
    description: `At ServiceNow, I build real-time data platforms and AI content systems that serve 50K+ monthly active users. I work across Kafka, FastAPI, React, and TypeScript in Agile sprints, shipping through Git-based CI/CD and owning observability for recommendation and AI assistant services.

I engineered hybrid retrieval with dense embeddings and cross-encoder reranking on pgvector, boosting AI content-assistant accuracy from 72% to 93% (RAGAS). I also cut personalized content retrieval latency from 4.8s to 1.2s and optimized AI query p95 latency from 3.6s to 850ms with Redis caching and SSE streaming behind a Zuul 2 gateway, sustaining 600+ QPS at peak.

Across 8 microservices, I drove failed inter-service requests down from 2.4% to 0.6% by implementing circuit breakers, exponential-backoff retries, and mTLS-enforced communication, with OpenTelemetry tracing and PagerDuty on-call routing.`,
    achievements: [
      'Reduced personalized content retrieval latency from 4.8s → 1.2s with a real-time platform using Kafka, FastAPI, and React + TypeScript',
      'Boosted AI content-assistant accuracy from 72% → 93% (RAGAS) via hybrid retrieval with dense embeddings and cross-encoder reranking on pgvector',
      'Optimized AI query p95 latency from 3.6s → 850ms with Redis distributed caching and SSE streaming, sustaining 600+ QPS',
      'Drove failed inter-service requests from 2.4% → 0.6% across 8 microservices with circuit breakers, retries, and mTLS',
    ],
    technologies: [
      'Kafka',
      'FastAPI',
      'React',
      'TypeScript',
      'pgvector',
      'Redis',
      'OpenTelemetry',
      'Zuul 2',
    ],
  },
  cisco: {
    company: 'Cisco',
    role: 'Software Engineer',
    duration: 'Jun 2022 – Aug 2024',
    location: 'India',
    description: `Over two years at Cisco, I decomposed a legacy monolith into 9 microservices using Kafka-based CQRS and AWS SQS for async event-driven processing on Linux-based AWS EKS clusters — scaling reconciliation throughput from 45K to 110K accounts/hour across 1.2M active accounts.

I delivered an LLM orchestration and pgvector RAG workflow with citation grounding that trimmed compliance document analysis from 14 min to 5 min per case and raised accuracy from 78% to 95%. I also engineered a unified partner integration layer with OAuth 2.0 and Spring Cloud Gateway, cutting partner API configuration from 12 days to 4 days for 3 external banking partners.

I migrated a high-throughput settlement service from REST polling to gRPC + Protocol Buffers streaming RPCs, lowering inter-service latency from 340ms to 130ms, and compressed deployment recovery from 42 min to 9 min with Terraform IaC, Argo CD, and Spinnaker blue-green pipelines.`,
    achievements: [
      'Scaled reconciliation throughput from 45K → 110K accounts/hour across 1.2M accounts by decomposing a monolith into 9 microservices with Kafka CQRS on AWS EKS',
      'Trimmed compliance document analysis from 14 min → 5 min and raised accuracy from 78% → 95% with LLM orchestration and pgvector RAG',
      'Accelerated partner API configuration from 12 days → 4 days with OAuth 2.0, Spring Cloud Gateway, and a React + TypeScript GraphQL portal',
      'Lowered inter-service latency from 340ms → 130ms by migrating settlement services from REST polling to gRPC + Protocol Buffers',
      'Compressed deployment recovery from 42 min → 9 min and raised successful daily releases from 92% → 99.5% with Terraform, Argo CD, and blue-green pipelines',
    ],
    technologies: [
      'Kafka',
      'AWS EKS',
      'Spring Boot',
      'gRPC',
      'React',
      'TypeScript',
      'Terraform',
      'Argo CD',
      'pgvector',
    ],
  },
};

export const experienceList = [
  {
    id: 'servicenow',
    company: 'ServiceNow',
    role: 'Software Engineer',
    duration: 'Dec 2025 – Present',
    location: 'San Francisco',
    current: true,
    summary:
      'Building real-time data platforms and AI content systems serving 50K+ MAUs. Cut content retrieval latency from 4.8s to 1.2s, boosted AI assistant accuracy from 72% to 93%, and optimized query p95 from 3.6s to 850ms while sustaining 600+ QPS.',
    tags: ['Kafka', 'FastAPI', 'React', 'TypeScript', 'pgvector', 'Redis'],
  },
  {
    id: 'cisco',
    company: 'Cisco',
    role: 'Software Engineer',
    duration: 'Jun 2022 – Aug 2024',
    location: 'India',
    current: false,
    summary:
      'Decomposed a legacy monolith into 9 microservices on AWS EKS, scaling reconciliation from 45K to 110K accounts/hour. Delivered LLM + RAG compliance tooling (14 min → 5 min) and cut inter-service latency from 340ms to 130ms with gRPC.',
    tags: ['Kafka', 'AWS EKS', 'Spring Boot', 'gRPC', 'React', 'Terraform'],
  },
];

export const education = [
  {
    degree: "Master's in Advanced Data Analytics",
    institution: 'University of North Texas',
    location: 'Texas',
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: 'Gitam University',
    location: 'Visakhapatnam, India',
  },
];

export const skillGroups = [
  {
    title: 'AI & ML Infra',
    skills: [
      'ML Feature Stores',
      'MLOps',
      'LLM Integration Pipelines',
      'Real-Time AI Data Pipelines',
      'Recommendation Systems',
      'Apache Iceberg',
      'Model Serving',
    ],
  },
  {
    title: 'Languages',
    skills: ['Java', 'Go', 'Python', 'TypeScript', 'SQL', 'Node.js', 'Bash', 'C++', 'HTML/CSS'],
  },
  {
    title: 'System Design',
    skills: [
      'Distributed Systems',
      'Microservices',
      'Event-Driven Architecture',
      'CQRS',
      'Event Sourcing',
      'Saga Pattern',
      'High Availability',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      'Spring Boot',
      'Gin (Go)',
      'gRPC + Protobuf',
      'Federated GraphQL',
      'REST APIs',
      'WebSockets',
      'OAuth 2.0',
      'JWT',
    ],
  },
  {
    title: 'Streaming & Data',
    skills: [
      'Apache Kafka',
      'Apache Flink',
      'Kafka Streams',
      'CDC (Debezium)',
      'PostgreSQL',
      'Redis',
      'Cassandra',
      'Elasticsearch',
      'Snowflake',
      'DynamoDB',
    ],
  },
  {
    title: 'Cloud & Platform',
    skills: [
      'AWS (EKS, Kinesis, Lambda, RDS, SQS, S3)',
      'Terraform',
      'Helm',
      'Argo CD',
      'GitOps',
    ],
  },
  {
    title: 'Containers & SRE',
    skills: [
      'Kubernetes',
      'Docker',
      'Istio',
      'OpenTelemetry',
      'Prometheus',
      'Grafana',
      'Jaeger',
      'PagerDuty',
      'SLO/SLI',
    ],
  },
  {
    title: 'Security & Practices',
    skills: [
      'HashiCorp Vault',
      'Zero-Trust',
      'mTLS',
      'Platform Engineering',
      'A/B Testing',
      'Agile/Scrum',
      'DevSecOps',
      'TDD',
    ],
  },
];

export const aboutCopy = {
  headline: 'Software engineer shipping full-stack apps, AI products, and distributed systems at enterprise scale.',
  paragraphs: [
    "I'm a Software Engineer who builds full-stack applications, AI-powered products, and event-driven microservices for enterprise platforms. My work spans RAG pipelines, LLM integration, Apache Kafka, React, TypeScript, PostgreSQL, and AWS — designing and shipping cloud-native systems end to end.",
    'Across ServiceNow and Cisco, I improved AI answer accuracy from 71% to 92%, reduced query p95 latency by 72%, and cut data freshness from 40 minutes to 6 minutes. I\'m based in Chicago, open to relocation, and completing a Master\'s in Advanced Data Analytics at the University of North Texas.',
  ],
};
