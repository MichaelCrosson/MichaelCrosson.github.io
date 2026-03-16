import dellLogo from '../assets/logos/dell.svg';
import microsoftLogo from '../assets/logos/microsoft.svg';
import courtavenueLogo from '../assets/logos/courtavenue.png';
import fillgenieLogo from '../assets/logos/fillgenie.png';
import augmentedLogo from '../assets/logos/augmented.svg';
import kaiserLogo from '../assets/logos/kaiser.svg';
import utaustinLogo from '../assets/logos/utaustin.svg';

export const companies = [
  { name: 'Dell Technologies', logo: dellLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'CourtAvenue', logo: courtavenueLogo },
  { name: 'FillGenie', logo: fillgenieLogo },
  { name: 'Augmented AI', logo: augmentedLogo },
  { name: 'Kaiser Permanente', logo: kaiserLogo },
  { name: 'UT Austin', logo: utaustinLogo },
];

export const services = [
  {
    icon: '🤖',
    title: 'AI Systems & Agents',
    description:
      'End-to-end LLM applications, multi-agent orchestration with CrewAI, RAG pipelines with hybrid retrieval, and production-ready agentic workflows.',
    tags: ['LangChain', 'CrewAI', 'RAG', 'OpenAI', 'Gemini'],
  },
  {
    icon: '📊',
    title: 'Data Science & Analytics',
    description:
      'ML modeling, predictive analytics, NLP pipelines, and interactive dashboards that turn raw data into decisions you can act on.',
    tags: ['PyTorch', 'scikit-learn', 'Pandas', 'Plotly', 'BigQuery'],
  },
  {
    icon: '⚡',
    title: 'Automation & Tooling',
    description:
      'Custom scrapers, API integrations, OCR-powered document parsing, and CI/CD workflows that eliminate manual effort at scale.',
    tags: ['Python', 'FastAPI', 'Selenium', 'Playwright', 'Docker'],
  },
  {
    icon: '☁️',
    title: 'Cloud ML Infrastructure',
    description:
      'Deploying and scaling ML models on AWS and GCP — ECS, Lambda, SageMaker, Vertex AI — with proper monitoring and reliability.',
    tags: ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'ECS'],
  },
];

export const projects = [
  {
    title: 'FillGenie — Agentic RAG System',
    description:
      'Full-stack multi-agent RAG system for automated HR/legal form-filling. Hybrid BM25 + BERT retrieval with CrewAI orchestration achieving 80% accuracy across 10+ document workflows.',
    tags: ['CrewAI', 'RAG', 'BM25', 'BERT', 'AWS', 'Docker'],
    links: { github: '#', live: null },
    accent: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  {
    title: 'YouTube Popularity Predictor',
    description:
      'Stacking model (R²~0.8) predicting video popularity from 100+ videos using CNNs, Wav2Vec audio features, LLaVA visual embeddings, and NMF topic modeling.',
    tags: ['PyTorch', 'CNN', 'Wav2Vec', 'LLaVA', 'NMF', 'scikit-learn'],
    links: { github: '#', live: '#' },
    accent: 'linear-gradient(135deg, #f093fb, #f5576c)',
  },
  {
    title: 'PromptPilot — LLM Training Platform',
    description:
      'Interactive web app that trained 9,000+ Microsoft engineers in prompt engineering via goal-driven exercises, LLM grading, performance tracking, and peer competition.',
    tags: ['Python', 'Anvil', 'OpenAI', 'Plotly', 'Gamification'],
    links: { github: '#', live: '#' },
    accent: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  },
  {
    title: 'Car Traffic Anomaly Detection',
    description:
      'VLM-powered anomaly detection pipeline (Qwen2.5VL) on 100+ hours of traffic footage. GPU-optimized preprocessing with 93.8% crash detection accuracy for real-time response.',
    tags: ['Qwen2.5VL', 'NVIDIA Metropolis', 'Python', 'GPU', 'Computer Vision'],
    links: { github: '#', live: null },
    accent: 'linear-gradient(135deg, #43e97b, #38f9d7)',
  },
  {
    title: 'AI Job Scraper & Recommender',
    description:
      'NLP-based job recommender using TF-IDF similarity and NMF topic modeling, trained on 1,000+ scraped listings from Indeed via Playwright dynamic rendering bypass.',
    tags: ['Python', 'Playwright', 'TF-IDF', 'NMF', 'NLP', 'Selenium'],
    links: { github: '#', live: null },
    accent: 'linear-gradient(135deg, #fa709a, #fee140)',
  },
  {
    title: 'GEO Visibility Analyzer',
    description:
      'Crawls a company\'s website and evaluates its LLM/AI search visibility — scoring content structure, entity clarity, and citation potential — then generates prioritized GEO recommendations to improve how AI engines like ChatGPT, Perplexity, and Google SGE surface the brand.',
    tags: ['Python', 'Vercel', 'OpenAI', 'Perplexity', 'GEO', 'Web Crawling'],
    links: { github: null, live: null },
    accent: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
  },
];

export const skills: Record<string, string[]> = {
  'Languages': ['Python', 'SQL', 'R', 'and more...'],
  'ML / AI': ['PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'Hugging Face', 'spaCy', 'OpenAI API', 'Gemini API', 'OpenClaw', 'Ollama', 'and more...'],
  'Techniques': ['RAG', 'Transformers', 'NLP', 'Neural Networks', 'XGBoost', 'Random Forest', 'Regression', 'Classification', 'Reinforcement Learning', 'TF-IDF', 'NMF', 'and more...'],
  'Cloud & Infra': ['AWS (S3, Lambda, ECS, SageMaker)', 'GCP (BigQuery, Vertex AI)', 'Docker', 'GitHub Actions', 'and more...'],
  'Tools & Frameworks': ['FastAPI', 'CrewAI', 'Selenium', 'Playwright', 'Pandas', 'NumPy', 'Plotly', 'React', 'and more...'],
};
