import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Terminal, Globe, Award, Briefcase, User, Mail, FileText, Send, 
  ExternalLink, Github, Linkedin, CheckCircle2, Star, ChevronRight, ChevronLeft, 
  Layers, Database, Cpu, Smartphone, Server, Sparkles, Filter, Search, 
  DollarSign, Clock, ShieldCheck, Zap, ArrowRight, X, Copy, MapPin, Check, 
  BarChart3, RefreshCw, Eye, Trophy, Image as ImageIcon, Sparkle, Maximize2,
  Activity, Stethoscope, Heart, Cpu as Brain, Bot, Share2, Compass, Boxes,
  TrendingUp, MessageSquare, Wrench, Lock, Network
} from 'lucide-react';

const JAIVIN_AVATAR = "https://avatars.githubusercontent.com/u/83535061?s=400&u=80d0da7d96a0ace852be3e0a09942cbc86381911&v=4";

const AWARDS_DATA = [
  {
    id: 'best-performer-2024',
    title: 'Best Performer & Commitment Award 2024',
    organization: 'Srishti Innovative',
    presentedBy: 'Mr. Krishnadas Pisharam (CEO)',
    date: '2024-12-20',
    formattedDate: 'December 20, 2024',
    citation: 'Presented to Jaivin JV for his exceptional performance, technical leadership, dedication, and unwavering commitment to engineering excellence.',
    badge: 'Top Annual Company Honor 🏆',
    highlight: 'Highest Engineering Distinction',
    images: [
      {
        id: 'cert-2024',
        caption: 'Framed Award Certificate (20-12-2024)',
        photoUrl: '/images/awards/best-performer-2024-certificate.jpg',
        type: 'framed-certificate',
        awardNumber: '2024 ANNUAL AWARD',
        titleText: 'Best Performer & Commitment',
        subtitleText: 'AWARD 2024',
        awardee: 'Jaivin JV',
        recipientText: 'THIS AWARD IS PRESENTED TO',
        citationText: 'for his exceptional performance, dedication, and commitment. This recognition is a testament to your well-deserved success!',
        dateStr: '20-12-2024',
        signatory: 'Mr. Krishnadas Pisharam (CEO)',
        companyName: 'SRISHTI INNOVATIVE',
        companyTagline: 'QUALITY BEYOND CONTRACT'
      },
      {
        id: 'stage-2024',
        caption: 'Stage Award Presentation with CEO Mr. Krishnadas Pisharam',
        photoUrl: '/images/awards/best-performer-2024-presentation.jpg',
        type: 'ceremony-photo',
        titleText: 'BEST PERFORMER & COMMITMENT - JAIVIN JV',
        awardee: 'Jaivin JV',
        presenter: 'Mr. Krishnadas Pisharam (CEO)',
        event: 'Srishti Innovative Annual Celebration',
        dateStr: '20-12-2024'
      }
    ],
    tags: ['Best Performer', 'Engineering Leadership', 'Commitment Award', 'Srishti Innovative']
  },
  {
    id: 'avenu-project-2023',
    title: 'Exceptional Contribution in Implementation of Avenu Project',
    organization: 'Srishti Innovative',
    presentedBy: 'Reeja Suresh (HR Manager) & Mr. Krishnadas Pisharam (CEO)',
    date: '2023-12-20',
    formattedDate: 'December 20, 2023',
    citation: 'Thank you for your outstanding project management abilities, exceptional attention to detail, and a proven track record of successful project implementations. Your dedication and expertise have been instrumental in driving successful project outcomes.',
    badge: 'Project Excellence Award 2023 🌟',
    highlight: 'Tech Lead & Core Contributor',
    images: [
      {
        id: 'team-cert-2023',
        caption: 'Framed Team Certificate - Exceptional Contribution in Implementation of Avenu Project',
        photoUrl: '/images/awards/avenu-team-award-2023.jpg',
        type: 'team-certificate',
        awardNumber: '2023 PROJECT AWARD',
        titleText: 'EXCEPTIONAL CONTRIBUTION IN THE IMPLEMENTATION OF AVENU PROJECT',
        citationHeader: 'Dear Team,',
        citationText: 'Thank you for your outstanding project management abilities, exceptional attention to detail, and a proven track record of successful project implementations. Your dedication and expertise have been instrumental in driving successful project outcomes.',
        subheading: 'WE PROUDLY PRESENT THE EXCEPTIONAL CONTRIBUTION IN PROJECT 2023 AWARD TO YOU!',
        teamMembers: [
          { name: 'Remya Mohan', role: 'Team Member' },
          { name: 'Keerthu', role: 'Team Member' },
          { name: 'Raga', role: 'Team Member' },
          { name: 'Vishnu Santhosh', role: 'Team Member' },
          { name: 'Jaivin JV', role: 'Tech Lead / Core Architect', highlight: true },
          { name: 'Roopak', role: 'Team Member' },
          { name: 'Sooraj', role: 'Team Member' },
          { name: 'Rahul Sudarshan', role: 'Team Member' },
          { name: 'Nidhi', role: 'Team Member' },
          { name: 'Parvathy', role: 'Team Member' },
          { name: 'Jeena', role: 'Team Member' }
        ],
        dateStr: '20/12/2023',
        signatories: [
          { name: 'Reeja Suresh', title: 'HR Manager' },
          { name: 'Mr. Krishnadas Pisharam', title: 'CEO' }
        ],
        companyName: 'SRISHTI INNOVATIVE',
        companyTagline: 'QUALITY BEYOND CONTRACT'
      }
    ],
    tags: ['aiAvenu Project', 'Systems Architecture', 'Tech Leadership', 'Team Collaboration']
  }
];

const SKILLS_DATA = [
  // Frontend & Mobile
  { name: 'React.js / Next.js', category: 'Frontend & Mobile', level: 96, icon: '⚛️', popular: true, exp: '4.5+ Yrs' },
  { name: 'TypeScript', category: 'Frontend & Mobile', level: 95, icon: '📘', popular: true, exp: '4.5+ Yrs' },
  { name: 'React Native (Expo)', category: 'Frontend & Mobile', level: 90, icon: '📱', popular: true, exp: '3.5 Yrs' },
  { name: 'Progressive Web Apps (PWA)', category: 'Frontend & Mobile', level: 98, icon: '⚡', popular: true, exp: '4+ Yrs' },
  { name: 'Tailwind CSS', category: 'Frontend & Mobile', level: 98, icon: '🎨', popular: true, exp: '4.5+ Yrs' },
  { name: 'Vite & Redux Toolkit', category: 'Frontend & Mobile', level: 92, icon: '🛠️', popular: false, exp: '4 Yrs' },
  
  // Backend & Cloud
  { name: 'Node.js / Express.js', category: 'Backend & Cloud', level: 96, icon: '🟢', popular: true, exp: '4.5+ Yrs' },
  { name: 'Hono.js / Cloudflare Workers', category: 'Backend & Cloud', level: 90, icon: '🔥', popular: true, exp: '2.5 Yrs' },
  { name: 'REST APIs & GraphQL', category: 'Backend & Cloud', level: 95, icon: '🕸️', popular: true, exp: '4.5+ Yrs' },
  { name: 'Nginx Reverse Proxy & Certbot SSL', category: 'Backend & Cloud', level: 92, icon: '🌐', popular: false, exp: '4 Yrs' },
  { name: 'Drizzle ORM & Prisma', category: 'Backend & Cloud', level: 91, icon: '🌧️', popular: true, exp: '3 Yrs' },

  // Database & Data Modeling
  { name: 'MongoDB / Aggregation Pipelines', category: 'Databases & Modeling', level: 95, icon: '🍃', popular: true, exp: '4.5+ Yrs' },
  { name: 'PostgreSQL / Complex Relational', category: 'Databases & Modeling', level: 92, icon: '🐘', popular: true, exp: '4 Yrs' },
  { name: 'SQLite (Offline-First Sync)', category: 'Databases & Modeling', level: 96, icon: '💾', popular: true, exp: '4 Yrs' },
  { name: 'Vector Similarity Search', category: 'Databases & Modeling', level: 88, icon: '🧮', popular: true, exp: '2 Yrs' },

  // Real-time & AI
  { name: 'Socket.io / WebSockets Engine', category: 'Real-time & AI', level: 94, icon: '🔌', popular: true, exp: '4 Yrs' },
  { name: 'LLM Prompting & Conversational Pipelines', category: 'Real-time & AI', level: 90, icon: '🤖', popular: true, exp: '2 Yrs' },
  { name: 'Webhooks & Payment Gateways', category: 'Real-time & AI', level: 95, icon: '💳', popular: true, exp: '4 Yrs' },

  // DevOps & Server
  { name: 'Docker / Containerization', category: 'DevOps & Infrastructure', level: 89, icon: '🐳', popular: true, exp: '3.5 Yrs' },
  { name: 'Ubuntu VPS / Server Administration', category: 'DevOps & Infrastructure', level: 92, icon: '🖥️', popular: true, exp: '4 Yrs' },
  { name: 'CI/CD Pipelines (GitHub Actions)', category: 'DevOps & Infrastructure', level: 90, icon: '⚙️', popular: true, exp: '4 Yrs' }
];

const PROJECTS_DATA = [
  {
    id: 'pocket-pos',
    title: 'Pocket POS (pocketpos.io)',
    role: 'Founder & Lead Full-Stack Architect',
    type: 'Self-Initiated Production SaaS Product',
    category: 'SaaS / Offline-First POS',
    badge: 'Founder SaaS Product 🚀',
    region: 'Multi-Tenant Retail SaaS',
    imageUrl: '/images/pocket-pos.jpg',
    shortDesc: 'All-in-one multi-tenant retail management & POS PWA designed for multi-outlet retail operations featuring digital Khata ledgers, stock tracking, and automated shift workflows.',
    stats: [
      { label: 'Sync Latency', value: '<10ms Local' },
      { label: 'Architecture', value: 'Offline-First' },
      { label: 'Deployment', value: 'Ubuntu / Nginx' }
    ],
    tech: ['Next.js', 'TypeScript', 'PWA', 'SQLite / Local Storage', 'Node.js', 'Express', 'Nginx', 'Certbot SSL', 'WebSockets', 'Payment Webhooks'],
    problem: 'Retailers in power-unstable or spotty network areas faced lost sales and checkout delays when traditional cloud-only POS systems lost internet connectivity.',
    architecture: 'Engineered an Offline-First Transaction Engine using local data storage for zero-latency checkout billing during internet outages, paired with automatic cloud delta-sync upon network restoration.',
    features: [
      'Offline-First Local Sync Engine for uninterrupted checkout billing during power or internet drops',
      'Dynamic Multi-Outlet Switching and granular Role-Based Access Control (RBAC) for cashiers and store managers',
      'Real-time peer-to-peer staff chat channels and digital Khata ledgers for credit tracking',
      'Ubuntu VPS infrastructure setup with Nginx reverse proxy, Certbot SSL, and subscription payment webhooks'
    ],
    impact: 'Live in production, serving multi-outlet retail operations with zero-downtime offline billing capability.',
    liveUrl: 'https://pocketpos.io/',
    previewConfig: {
      bgGradient: 'from-emerald-950 via-slate-900 to-teal-950',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      headline: 'Multi-Tenant Offline POS & Retail Engine',
      subtext: 'Zero-latency local billing & automated delta cloud synchronization'
    }
  },
  {
    id: 'dreamers-health',
    title: 'Dreamers Health (dreamershealth.com)',
    role: 'Recommendation Engine Architect',
    type: 'Healthcare Social & Matching Engine',
    category: 'Algorithmic Engine & AI',
    badge: 'Vector Math Engine 🧮',
    region: 'Global Healthcare Community',
    imageUrl: '/images/dreamers-health.jpg',
    shortDesc: 'Healthcare social discovery platform powered by a custom "People Like Me" Vector Similarity Matching Engine and exponential time-decay feed ranker.',
    stats: [
      { label: 'Vector Engine', value: 'Cosine Similarity' },
      { label: 'Decay Model', value: 'λ = 0.9 / 0.99' },
      { label: 'Matching', value: '3-Vector Composite' }
    ],
    tech: ['React', 'Node.js', 'Vector Similarity Search', 'MongoDB Aggregations', 'Mathematical Scoring', 'Tailwind CSS'],
    problem: 'Patients with niche condition profiles couldn\'t find relevant peer communities or clinically similar user discussions on standard non-specialized social media.',
    architecture: 'Designed and coded a mathematical "People Like Me" Vector Similarity Matching Engine combining condition community vectors (S_com), demographic/clinical attributes (S_attr), and cosine behavioral interactions (S_beh).',
    features: [
      'Calculates multi-dimensional user compatibility using composite vector similarity equations',
      'Built exponential time-decay scoring models (λ = 0.9 and λ = 0.99) for real-time post ranking and dynamic user feed generation',
      'Optimized database aggregations to compute real-time feed recommendations across heavy graph connections'
    ],
    impact: 'Engineered high-accuracy peer matching for global health support networks.',
    mathModel: 'S_total = w_1 · S_com + w_2 · S_attr + w_3 · S_beh',
    liveUrl: 'https://www.dreamershealth.com/',
    previewConfig: {
      bgGradient: 'from-indigo-950 via-slate-900 to-purple-950',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      headline: 'People Like Me Math Matching Engine',
      subtext: 'Vector similarity scoring & dynamic community feed ranking'
    }
  },
  {
    id: 'asmo-logistics',
    title: 'ASMO Logistics Control Tower (asmo.com)',
    role: 'Senior Full-Stack Developer',
    type: 'Enterprise Supply Chain Platform',
    category: 'Enterprise Supply Chain',
    badge: 'Real-time Logistics 🚛',
    region: 'Middle East & International',
    imageUrl: '/images/asmo-logistics.jpg',
    shortDesc: 'Supply Chain Control Tower and real-time logistics management platform for global freight monitoring.',
    stats: [
      { label: 'Updates', value: 'Real-Time WebSockets' },
      { label: 'Module', value: 'Control Tower' },
      { label: 'Domain', value: 'Logistics' }
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'WebSockets', 'PostgreSQL', 'Tailwind CSS'],
    problem: 'Supply chain teams lacked single-pane visibility over transit delays, inventory dispatches, and multi-fleet route bottlenecks.',
    architecture: 'Constructed real-time WebSocket event pipelines broadcasting driver telemetry, load statuses, and automated alert dispatches.',
    features: [
      'Live control tower mapping UI with driver trajectory telemetry',
      'Automated delay prediction triggers and dispatch order assignment workflows',
      'Multi-tenant administrative analytics dashboard'
    ],
    impact: 'Engineered centralized supply chain operational efficiency for complex global logistics routes.',
    liveUrl: 'https://www.asmo.com/',
    previewConfig: {
      bgGradient: 'from-amber-950 via-slate-900 to-orange-950',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      headline: 'Global Supply Chain Control Tower',
      subtext: 'Real-time driver telemetry & dynamic route alert dispatching'
    }
  },
  {
    id: 'aiavenu',
    title: 'aiAvenu (avenu.ai - Award Winner)',
    role: 'Tech Lead / Award Winner',
    type: 'AI Recruitment & Evaluation Portal',
    category: 'Award Winning Enterprise',
    badge: 'Award Winner 2023 🏆',
    region: 'Global Enterprise',
    imageUrl: '/images/aiavenu.jpg',
    shortDesc: 'AI-powered recruitment & candidate evaluation portal recognized with Srishti Innovative\'s Exceptional Contribution Award 2023.',
    stats: [
      { label: 'Award', value: 'Excellence 2023' },
      { label: 'Role', value: 'Tech Lead' },
      { label: 'Team', value: '11 Engineers' }
    ],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AI Scoring Engine', 'Tailwind CSS'],
    problem: 'Large HR departments were overwhelmed by thousands of applicant resumes requiring manual evaluation and skills matching.',
    architecture: 'Architected candidate processing pipelines and skill evaluation UI state managers to streamline interview stages.',
    features: [
      'Candidate skill evaluation and score matching matrix',
      'Multi-stage interview workflow tracker with automated scheduling links',
      'Role-based security policies for hiring managers and external interviewers'
    ],
    impact: 'Won the "Exceptional Contribution in Implementation of Avenu Project Award 2023" presented by CEO Krishnadas Pisharam.',
    liveUrl: 'https://www.avenu.ai/',
    previewConfig: {
      bgGradient: 'from-violet-950 via-slate-900 to-indigo-950',
      badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
      headline: 'AI Talent Acquisition & Evaluation Platform',
      subtext: 'Automated skill matrix scoring & multi-stage interview workflows'
    }
  },
  {
    id: 'sadia-ecommerce',
    title: 'Sadia E-Commerce (sadia-life.com)',
    role: 'Lead Frontend Engineer',
    type: 'High-Performance Multilingual Storefront',
    category: 'E-Commerce & Retail',
    badge: 'Multilingual E-Com 🛍️',
    region: 'Middle East',
    imageUrl: '/images/sadia-ecommerce.jpg',
    shortDesc: 'High-performance multilingual e-commerce platform with sub-second page loads and RTL/LTR layout switching.',
    stats: [
      { label: 'Speed', value: '<100ms Hydration' },
      { label: 'Languages', value: 'Arabic & English' },
      { label: 'Localization', value: 'Dynamic RTL' }
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL', 'Node.js', 'Redis'],
    problem: 'International shoppers required instant language and currency switching without full page reloads or layout breakage in RTL (Arabic) scripts.',
    architecture: 'Implemented a localized SSR/ISR Next.js architecture with instant layout mirror switching and edge caching.',
    features: [
      'Dynamic RTL/LTR text and direction switching',
      'Multi-currency checkout with regional payment integrations',
      'Ultra-fast product search filtering'
    ],
    impact: 'Delivered an exceptional mobile-first e-commerce shopping experience for regional customers.',
    liveUrl: 'https://www.sadia-life.com/en/',
    previewConfig: {
      bgGradient: 'from-rose-950 via-slate-900 to-red-950',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      headline: 'Multilingual E-Commerce & Retail Storefront',
      subtext: 'Sub-second hydration, Arabic/English RTL mirror & fast search'
    }
  },
  {
    id: 'piaxu',
    title: 'Piaxu (piaxu.com)',
    role: 'Senior Full-Stack Engineer',
    type: 'Healthcare AI Workflow Platform',
    category: 'Healthcare SaaS & AI',
    badge: 'Healthcare SaaS AI 🩺',
    region: 'Global Healthcare',
    imageUrl: '/images/piaxu.jpg',
    shortDesc: 'Multi-tenant healthcare SaaS deploying AI-assisted workflows ("Care Assists") across patient journeys from appointment discovery to post-treatment follow-up.',
    stats: [
      { label: 'Infrastructure', value: 'Encrypted Pods' },
      { label: 'Billing Model', value: 'Token-Based' },
      { label: 'Workflows', value: '6 Care Assists' }
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Conversational AI Pipelines', 'Encrypted DB Pods', 'Tailwind CSS'],
    problem: 'Healthcare providers struggled with fragmented patient communication, manual prep paperwork, and tedious post-treatment care follow-ups.',
    architecture: 'Architected state-persistent conversational pipelines connecting patients, practitioners, and clinical data summarizations with strict privacy controls.',
    features: [
      'Engineered modular workflow engines for Find, Book, Prep, Check-In, Treatment Plan, and Follow-Up Assists',
      'Designed token-based usage billing mechanism supporting Freemium, Standard, and Enterprise dedicated encrypted pod infrastructures',
      'Built persistent AI conversation pipelines connecting practitioners and patients with real-time summary generation'
    ],
    impact: 'Streamlined patient prep and follow-up journeys while maintaining HIPAA-ready encrypted multi-tenant data architecture.',
    liveUrl: 'https://piaxu.com/',
    previewConfig: {
      bgGradient: 'from-cyan-950 via-slate-900 to-blue-950',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      headline: 'AI-Powered Clinical Care Assists',
      subtext: 'Automated prep, booking & encrypted conversational care workflows'
    }
  }
];

const MORE_PROJECTS = [
  { name: 'MergeFlo', tag: 'Automation', desc: 'Workflow Automation & Process Integration Engine for business operations.' },
  { name: 'WelFast', tag: 'Logistics', desc: 'On-Demand Logistics & Delivery Management Platform with live route tracking.' },
  { name: 'SweetTreat', tag: 'Consumer SaaS', desc: 'Custom Consumer Web ordering & inventory subscription platform.' },
  { name: 'Educare', tag: 'EdTech', desc: 'Educational SaaS platform with live class tracking and assignment portals.' },
  { name: 'Endominance', tag: 'Healthcare Analytics', desc: 'Specialized cognitive & healthcare analytics reporting system.' },
  { name: 'FreeCap', tag: 'FinTech', desc: 'Fintech utility platform for capital management and transactional ledgers.' }
];

const TIMELINE_DATA = [
  {
    period: '2021 – PRESENT (4.5+ YEARS)',
    role: 'Senior Full-Stack Software Engineer',
    company: 'Srishti Innovative / Global Client Projects',
    location: 'Technopark, Trivandrum, India & Global Remote',
    type: 'Full-Time & Global Projects',
    description: 'Spearheading end-to-end development of enterprise web applications, PWAs, AI platforms, and real-time systems for global clients. Received the company\'s highest annual performance honor in December 2024.',
    highlights: [
      'Awarded "Best Performer & Commitment Award 2024" presented by CEO Mr. Krishnadas Pisharam.',
      'Awarded "Exceptional Contribution in Implementation of Avenu Project Award 2023".',
      'Architected scalable full-stack applications using React, Next.js, Node.js, Express, Hono.js, MongoDB, PostgreSQL, and PWA engines.',
      'Mentored developers, conducted rigorous code reviews, and managed server deployments on Ubuntu/Nginx VPS.'
    ],
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Cloudflare', 'PWA', 'Tailwind']
  },
  {
    period: '2023 – PRESENT',
    role: 'Founder & Lead Full-Stack Architect',
    company: 'Pocket POS (pocketpos.io)',
    location: 'SaaS Product',
    type: 'Founder Production SaaS',
    description: 'Designed, built, and deployed an all-in-one multi-tenant retail management and POS PWA with offline-first local data engines.',
    highlights: [
      'Engineered zero-latency offline transaction engine with cloud delta-sync upon network reconnection.',
      'Configured Ubuntu VPS server stack, Nginx reverse proxies, SSL certificates, and payment webhook pipelines.',
      'Implemented multi-outlet switching, staff chat channels, and RBAC security.'
    ],
    tech: ['Next.js', 'PWA', 'SQLite', 'Node.js', 'Ubuntu VPS', 'Certbot SSL', 'WebSockets']
  },
  {
    period: '4.5+ YEARS TOTAL JOURNEY',
    role: 'Self-Taught Engineering Mastery',
    company: 'Independent System Builder',
    location: 'Global',
    type: 'Continuous Hands-on Delivery',
    description: 'Built a top-tier software engineering career purely through relentless self-learning, high adaptability, and direct hands-on shipping of 10+ production systems.',
    highlights: [
      'Mastered complex algorithmic logic including custom vector similarity matching engines and exponential time-decay algorithms.',
      'Consistently delivered production-grade code adhering to modern web performance standards.'
    ],
    tech: ['System Architecture', 'Algorithms', 'Vector Math', 'Cloud Infrastructure']
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all-skills');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedAwardModal, setSelectedAwardModal] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.4 + 0.15
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.14 * (1 - dist / 135)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 70, 229, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jaivin.mindset@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const openAwardLightbox = (award, imgIdx = 0) => {
    setSelectedAwardModal(award);
    setActiveImageIndex(imgIdx);
  };

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeTab === 'all-skills') return true;
    if (activeTab === 'frontend') return skill.category.includes('Frontend');
    if (activeTab === 'backend') return skill.category.includes('Backend');
    if (activeTab === 'databases') return skill.category.includes('Databases');
    if (activeTab === 'realtime') return skill.category.includes('Real-time');
    if (activeTab === 'devops') return skill.category.includes('DevOps');
    return true;
  });

  const AwardCardVisual = ({ img, onClick }) => {
    if (img.photoUrl) {
      return (
        <button
          type="button"
          onClick={onClick}
          aria-label={`View ${img.caption}`}
          className="relative block w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-xl group cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-amber-300"
        >
          <img
            src={img.photoUrl}
            alt={img.caption}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent p-4 pt-14 text-left">
            <span className="text-white text-xs sm:text-sm font-semibold leading-snug">{img.caption}</span>
            <Maximize2 className="w-4 h-4 text-white shrink-0" />
          </div>
        </button>
      );
    }

    if (img.type === 'framed-certificate') {
      return (
        <div 
          onClick={onClick}
          className="relative aspect-[3/4] rounded-2xl bg-white border-8 border-slate-900 hover:border-amber-500 transition-all p-5 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-xl text-left"
        >
          <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600" />
          
          <div className="relative z-20 flex justify-between items-center pt-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 font-mono text-[10px] font-bold">
              <Trophy className="w-3 h-3 text-amber-600" />
              <span>{img.awardNumber}</span>
            </div>
            <span className="p-1.5 rounded-full bg-slate-100 text-slate-700 group-hover:scale-110 transition-transform border border-slate-300">
              <Maximize2 className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="relative z-20 my-auto text-center space-y-3 px-1">
            <div>
              <p className="text-slate-900 font-serif text-base sm:text-lg font-bold leading-tight tracking-wide">{img.titleText}</p>
              <p className="text-amber-600 font-mono text-xs tracking-widest uppercase mt-0.5">{img.subtitleText}</p>
            </div>

            <p className="text-[10px] font-mono text-slate-500 tracking-wider uppercase">{img.recipientText}</p>

            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 blur-sm opacity-80" />
              <img src={JAIVIN_AVATAR} alt="Jaivin JV" className="relative w-20 h-20 rounded-full object-cover border-2 border-amber-500 shadow-md" />
            </div>

            <div className="space-y-1">
              <p className="text-amber-700 font-serif text-xl font-bold italic">{img.awardee}</p>
              <p className="text-[10px] font-sans text-slate-600 italic px-2 line-clamp-3 leading-tight">
                "{img.citationText}"
              </p>
            </div>
          </div>

          <div className="relative z-20 pt-2 border-t border-slate-200 flex justify-between items-end text-[9px] font-mono text-slate-600">
            <div>
              <p className="text-amber-700 font-bold">{img.companyName}</p>
              <p className="text-[8px] text-slate-500">{img.companyTagline}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-800 font-semibold">{img.signatory}</p>
              <p className="text-slate-500">{img.dateStr}</p>
            </div>
          </div>
        </div>
      );
    }

    if (img.type === 'ceremony-photo') {
      return (
        <div 
          onClick={onClick}
          className="relative aspect-[3/4] rounded-2xl bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 border-8 border-slate-900 hover:border-emerald-500 transition-all p-5 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-xl text-left"
        >
          <div className="relative z-20 flex justify-between items-center">
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] border border-emerald-500/40 font-bold">
              STAGE CEREMONY
            </span>
            <span className="p-1.5 rounded-full bg-slate-900/90 text-emerald-400 group-hover:scale-110 transition-transform border border-emerald-500/30">
              <Eye className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="relative z-20 my-auto text-center space-y-4 px-1">
            <div className="flex items-center justify-center gap-3">
              <div className="relative">
                <img src={JAIVIN_AVATAR} alt="Jaivin JV" className="w-16 h-16 rounded-full border-2 border-emerald-400 object-cover shadow-lg" />
                <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded bg-emerald-500 text-[8px] font-bold text-slate-950">
                  Jaivin JV
                </span>
              </div>
              <div className="text-left space-y-0.5">
                <p className="text-xs font-bold text-white">Award Presentation On Stage</p>
                <p className="text-[10px] text-emerald-300 font-mono">CEO Krishnadas Pisharam presenting</p>
                <p className="text-[9px] text-slate-300">{img.event}</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
              <p className="text-[10px] font-mono text-amber-400 font-bold">STAGE DISPLAY SLIDE:</p>
              <p className="text-xs font-serif font-bold text-white tracking-wide">"{img.titleText}"</p>
            </div>
          </div>

          <div className="relative z-20 pt-2 border-t border-slate-800 flex justify-between items-center text-[9px] font-mono text-slate-300">
            <span>Date: {img.dateStr}</span>
            <span className="text-emerald-300 font-bold">Click for Full Photo →</span>
          </div>
        </div>
      );
    }

    if (img.type === 'team-certificate') {
      return (
        <div 
          onClick={onClick}
          className="relative aspect-[3/4] rounded-2xl bg-white border-8 border-slate-900 hover:border-indigo-500 transition-all p-5 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-xl text-left"
        >
          <div className="relative z-20 flex justify-between items-center">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 font-mono text-[10px] font-bold">
              <Award className="w-3 h-3 text-indigo-600" />
              <span>{img.awardNumber}</span>
            </div>
            <span className="p-1.5 rounded-full bg-slate-100 text-slate-700 group-hover:scale-110 transition-transform border border-slate-300">
              <Maximize2 className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="relative z-20 my-auto space-y-3 px-1 text-center">
            <p className="text-indigo-900 font-serif font-bold text-xs sm:text-sm tracking-wide uppercase leading-snug">
              {img.titleText}
            </p>

            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="text-[9px] font-mono text-indigo-700 font-bold">11 TEAM MEMBERS HONORED:</p>
              <div className="flex flex-wrap justify-center gap-1 max-h-24 overflow-y-auto pr-1">
                {img.teamMembers.map((member, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 rounded text-[9px] font-mono ${
                      member.highlight
                        ? 'bg-amber-400 text-slate-950 font-bold border border-amber-300 shadow-sm'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {member.name} {member.highlight ? '🏆' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-20 pt-2 border-t border-slate-200 flex justify-between items-end text-[9px] font-mono text-slate-600">
            <div>
              <p className="text-indigo-700 font-bold">{img.companyName}</p>
              <p className="text-[8px] text-slate-500">{img.companyTagline}</p>
            </div>
            <div className="text-right">
              <p className="text-slate-800 font-semibold">Signed by HR & CEO ✓</p>
              <p className="text-slate-500">{img.dateStr}</p>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500/20 selection:text-emerald-900 relative overflow-x-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-80" />

      {/* Ambient Soft Glows for Light Theme */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Navigation Header - White Glassmorphism */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/85 border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={JAIVIN_AVATAR}
                alt="Jaivin JV"
                className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 group-hover:scale-105 transition-transform shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight text-slate-900 flex items-center gap-1.5">
                JAIVIN JV <span className="text-emerald-600 font-mono text-xs">.DEV</span>
              </div>
              <p className="text-[11px] text-slate-500 font-mono">Senior Full-Stack Engineer & SaaS Founder</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#hero" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#awards" className="hover:text-amber-600 transition-colors flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-500" /> Honors
            </a>
            <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects & SaaS</a>
            <a href="#skills" className="hover:text-emerald-600 transition-colors">Tech Stack</a>
            <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4" /> CV / Resume
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-8 pb-20">

        {/* Hero Section */}
        {}
        <section id="hero" className="pt-6 md:pt-12 pb-8 flex flex-col items-center text-center relative">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            <span className="font-semibold">AVAILABLE FOR REMOTE / US & GLOBAL FULL-TIME & CONTRACTS</span>
          </div>

          <div className="relative mb-6 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
            <img
              src={JAIVIN_AVATAR}
              alt="Jaivin JV"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-white shadow-2xl"
            />
            <div className="absolute bottom-2 right-2 bg-white border border-amber-300 text-amber-600 p-2 rounded-full shadow-lg" title="Best Performer Award Winner">
              <Trophy className="w-5 h-5" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.15]">
            Jaivin JV
          </h1>
          
          <p className="mt-3 text-xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
            Senior Full-Stack Engineer & SaaS Founder
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
            Self-taught Senior Engineer with <span className="text-emerald-700 font-bold">4.5+ years of production experience</span> architecting enterprise web apps, AI workflows, real-time logistics networks, and offline-first SaaS engines. Founder of <a href="https://pocketpos.io" target="_blank" rel="noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-semibold">Pocket POS (pocketpos.io)</a> and Best Performer Award Winner 2024.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-mono">
            <div className="px-3.5 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 flex items-center gap-2 shadow-sm font-semibold">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>Best Performer Award 2024</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-800 flex items-center gap-2 shadow-sm font-semibold">
              <Boxes className="w-4 h-4 text-indigo-600" />
              <span>Pocket POS Founder</span>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2 shadow-sm font-semibold">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>Offline-First Architect</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              Explore Featured SaaS & Projects <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-emerald-500 text-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:bg-slate-50"
            >
              <Mail className="w-4 h-4 text-emerald-600" /> Get In Touch
            </a>
          </div>
        </section>

        {/* Global Impact Metrics Section */}
        {}
        <section id="impact" className="scroll-mt-24 space-y-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all">
              <Clock className="w-6 h-6 text-emerald-600 mx-auto" />
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">4.5+ Yrs</div>
              <div className="text-xs text-slate-500 font-medium">Production Experience</div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all">
              <Globe className="w-6 h-6 text-cyan-600 mx-auto" />
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">10+</div>
              <div className="text-xs text-slate-500 font-medium">Production Systems Delivered</div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:shadow-md hover:border-amber-300 transition-all">
              <Trophy className="w-6 h-6 text-amber-500 mx-auto" />
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">2 Awards</div>
              <div className="text-xs text-slate-500 font-medium">2024 & 2023 Executive Honors</div>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all">
              <ShieldCheck className="w-6 h-6 text-indigo-600 mx-auto" />
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">SaaS Founder</div>
              <div className="text-xs text-slate-500 font-medium">Pocket POS (pocketpos.io)</div>
            </div>
          </div>
        </section>

        {/* Awards & Certificates Section */}
        {}
        <section id="awards" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold flex items-center justify-center gap-1.5">
              <Trophy className="w-4 h-4" /> Honours & Company Recognitions
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Executive Awards Gallery</p>
            <p className="text-slate-600 text-sm">Recognized by Srishti Innovative leadership (CEO Krishnadas Pisharam & HR Manager Reeja Suresh) for engineering mastery, leadership, and project execution.</p>
          </div>

          <div className="space-y-8">
            {AWARDS_DATA.map((award) => (
              <div
                key={award.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1.5 font-bold">
                        <Trophy className="w-3.5 h-3.5 text-amber-600" /> {award.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-500">{award.formattedDate}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {award.title}
                    </h3>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <p className="text-[11px] text-slate-500 font-mono font-bold">ORGANIZATION & SIGNATORIES</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-800">
                        {award.organization} &bull; <span className="text-amber-700">{award.presentedBy}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-amber-500 pl-4 py-1 leading-relaxed">
                      "{award.citation}"
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {award.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => openAwardLightbox(award, 0)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-amber-500/20"
                      >
                        <Eye className="w-4 h-4" /> View High-Res Certificate & Presentation Photos
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {award.images.map((img, imgIdx) => (
                      <AwardCardVisual
                        key={imgIdx}
                        img={img}
                        onClick={() => openAwardLightbox(award, imgIdx)}
                      />
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects & Case Studies */}
        {}
        <section id="projects" className="scroll-mt-24 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">Featured Work & SaaS</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Major Systems & Products</p>
            <p className="text-slate-600 text-sm">Deep-dive into flagship products, offline-first architectures, AI workflows, and custom recommendation engines built by Jaivin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 transition-all flex flex-col justify-between group shadow-md hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Landing Page Browser Window Preview Mockup */}
                  <div className="rounded-2xl border border-slate-200 bg-slate-900 overflow-hidden shadow-inner group-hover:border-emerald-500/50 transition-colors">
                    <div className="bg-slate-800/90 px-3 py-2 flex items-center justify-between border-b border-slate-700/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-slate-700/80 text-[10px] font-mono text-emerald-400 hover:text-emerald-300 truncate max-w-[170px] sm:max-w-[200px] flex items-center gap-1 transition-colors"
                          title={project.liveUrl}
                        >
                          <Globe className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                          <ExternalLink className="w-2.5 h-2.5 ml-auto text-slate-400 shrink-0" />
                        </a>
                      )}
                    </div>

                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="block relative aspect-[16/9] overflow-hidden bg-slate-950 group/img"
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between z-10">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-900/90 text-emerald-400 border border-emerald-500/40 backdrop-blur-sm">
                          LIVE PRODUCT SHOWCASE
                        </span>
                        <span className="text-[10px] font-mono text-white flex items-center gap-1 drop-shadow">
                          Preview <ArrowRight className="w-3 h-3 text-emerald-400" />
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">{project.region}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-emerald-700 font-mono font-semibold mt-0.5">{project.role}</p>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Math Formula snippet if present */}
                  {project.mathModel && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-indigo-200 font-mono text-[11px] text-indigo-900">
                      <p className="text-[9px] text-slate-500 uppercase font-bold">Vector Equation Model:</p>
                      <code>{project.mathModel}</code>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    View Engineering Case Study <ChevronRight className="w-4 h-4" />
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-emerald-600 text-white text-[11px] font-mono font-semibold flex items-center gap-1 transition-colors shadow-sm"
                    >
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Enterprise Portfolio Grid */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-emerald-600" /> Additional Enterprise & Client Systems (10+ Portfolio)
                </h3>
                <p className="text-xs text-slate-500">Additional production applications engineered across various international sectors.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MORE_PROJECTS.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800 text-sm">{item.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-semibold">{item.tag}</span>
                  </div>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <section aria-labelledby="project-proof-heading" className="space-y-6 pt-4">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 id="project-proof-heading" className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold">Customer Outcomes & Brand Reach</h3>
              <p className="text-slate-600 text-sm">Public customer stories, operating figures, and brand details connected to featured products. Metrics and quotes are attributed to their publishers.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <article className="p-6 rounded-3xl bg-white border border-indigo-200 shadow-md space-y-5">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-bold">aiAvenu · Public customer stories</p>
                  <h4 className="mt-2 text-xl font-extrabold text-slate-900">Recognized hiring teams</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">aiAvenu lists customer brands including MetLife, Chick-fil-A, Aramark, Signal, Novitium Energy, Papa John's, and Great Clips.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100">
                    <p className="text-2xl font-extrabold text-indigo-700">20–30 hrs</p>
                    <p className="text-[11px] text-slate-600 mt-1">saved per week at Signal Tampa, reported by aiAvenu</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                    <p className="text-2xl font-extrabold text-emerald-700">~$40K</p>
                    <p className="text-[11px] text-slate-600 mt-1">annual savings reported for Chick-fil-A Dorchester & Ladson Road</p>
                  </div>
                </div>

                <blockquote className="border-l-2 border-indigo-400 pl-4 text-sm italic text-slate-700 leading-relaxed">
                  “We've been using Avenu for a while now, and it has completely transformed our hiring process.”
                  <footer className="mt-2 text-xs not-italic font-semibold text-slate-500">Mike Daly, CEO of Signal Tampa · published by aiAvenu</footer>
                </blockquote>

                <a href="https://www.avenu.ai/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900">
                  View aiAvenu customer stories <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </article>

              <article className="p-6 rounded-3xl bg-white border border-orange-200 shadow-md space-y-5">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-orange-600 font-bold">ASMO · Control tower operations</p>
                  <h4 className="mt-2 text-xl font-extrabold text-slate-900">Aramco × DHL joint venture</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">ASMO's September 2026 update names Aramco, AMTPJ, JESCO, and Tenaris in its pipe-transport network.</p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100">
                    <p className="text-xl font-extrabold text-orange-700">78%</p>
                    <p className="text-[10px] text-slate-600 mt-1">of inbound OCTG pipe volume</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100">
                    <p className="text-xl font-extrabold text-orange-700">~100</p>
                    <p className="text-[10px] text-slate-600 mt-1">trips per day</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-orange-50 border border-orange-100">
                    <p className="text-xl font-extrabold text-orange-700">~75</p>
                    <p className="text-[10px] text-slate-600 mt-1">average vehicles</p>
                  </div>
                </div>

                <blockquote className="border-l-2 border-orange-400 pl-4 text-sm italic text-slate-700 leading-relaxed">
                  “This collaboration strengthens the resilience and reliability of local supply.”
                  <footer className="mt-2 text-xs not-italic font-semibold text-slate-500">JESCO General Manager · quoted by ASMO</footer>
                </blockquote>

                <a href="https://www.asmo.com/en/news-insights/asmo-commences-pipe-transportation-operations-for-amtpj-jesco-and-tenaris/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 hover:text-orange-900">
                  View ASMO customer announcement <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </article>

              <article className="p-6 rounded-3xl bg-white border border-rose-200 shadow-md space-y-5">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-rose-600 font-bold">Sadia · Regional e-commerce</p>
                  <h4 className="mt-2 text-xl font-extrabold text-slate-900">A household food brand</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">Sadia says it has served the Middle East since the 1970s and operates in more than 40 countries across the region, including North Africa and the Levant.</p>
                </div>

                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-100 text-center">
                  <p className="text-4xl font-extrabold text-rose-700">40+</p>
                  <p className="text-xs font-semibold text-slate-700 mt-1">countries in Sadia's stated regional footprint</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">The portfolio includes Sadia's Arabic and English storefront experience, with responsive layouts for regional shoppers.</p>

                <a href="https://www.sadia-life.com/en/about-us/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:text-rose-900">
                  Read Sadia's company story <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </article>
            </div>
          </section>
        </section>

        {/* Tech Stack Matrix Section */}
        {}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">Core Technical Skills</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Jaivin's Engineering Stack</p>
            <p className="text-slate-600 text-sm">Full-stack capabilities across web, mobile, databases, vector search, and edge server deployments.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-xl bg-white border border-slate-200 shadow-sm w-fit mx-auto">
            {[
              { id: 'all-skills', label: 'All Technologies' },
              { id: 'frontend', label: 'Frontend & Mobile' },
              { id: 'backend', label: 'Backend & Cloud' },
              { id: 'databases', label: 'Databases & Modeling' },
              { id: 'realtime', label: 'Real-time & AI' },
              { id: 'devops', label: 'DevOps & Server' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-2 rounded-xl bg-slate-100">{skill.icon}</span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">{skill.name}</h3>
                        <span className="text-[11px] text-slate-500 font-mono">{skill.exp} Exp</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5 mt-4">
                    <div className="flex justify-between text-xs text-slate-500 font-mono">
                      <span>Proficiency</span>
                      <span className="text-emerald-700 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Career Timeline */}
        {}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">Work History</h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">4.5+ Years Work Experience</p>
          </div>

          <div className="relative border-l-2 border-slate-300 ml-4 sm:ml-8 space-y-10">
            {TIMELINE_DATA.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600" />
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <span className="text-xs font-mono text-emerald-700 font-bold">{item.period}</span>
                  <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                  <p className="text-xs text-slate-500 font-mono font-medium">{item.company} &bull; {item.location}</p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.description}</p>
                  <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        {}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg max-w-3xl mx-auto text-center space-y-6">
            <div className="relative w-20 h-20 mx-auto">
              <img
                src={JAIVIN_AVATAR}
                alt="Jaivin JV"
                className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500 shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Let's Connect & Work Together</h2>
              <p className="text-xs text-slate-500 mt-1">Available for Senior Full-Stack Roles, SaaS MVP Engineering & Global Freelance Contracts.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={handleCopyEmail}
                className="px-6 py-3 rounded-xl bg-slate-100 border border-slate-300 hover:border-emerald-500 text-slate-800 text-xs font-mono font-semibold flex items-center gap-2 shadow-sm transition-all"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                jaivin.mindset@gmail.com
              </button>
              <a
                href="https://github.com/Jaivin-hub"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-mono flex items-center gap-2 hover:bg-slate-800 shadow-sm transition-all"
              >
                <Github className="w-4 h-4 text-emerald-400" /> GitHub Profile
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      {}
      <footer className="border-t border-slate-200 bg-white py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <img src={JAIVIN_AVATAR} alt="Jaivin JV" className="w-6 h-6 rounded-full" />
            <span>&copy; {new Date().getFullYear()} Jaivin JV. Senior Full-Stack Engineer & SaaS Founder.</span>
          </div>
          <a href="#hero" className="hover:text-emerald-600 font-mono transition-colors">Back to top ↑</a>
        </div>
      </footer>

      {/* Lightbox Modal for Awards */}
      {}
      {selectedAwardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white border border-amber-300 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative text-left shadow-2xl">
            <button
              onClick={() => setSelectedAwardModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 z-30"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-100 text-amber-900 border border-amber-300 font-bold">
                {selectedAwardModal.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{selectedAwardModal.title}</h3>
              <p className="text-xs text-amber-700 font-mono font-semibold">
                Issued by {selectedAwardModal.organization} on {selectedAwardModal.formattedDate}
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-50 p-4 min-h-[380px] flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <AwardCardVisual img={selectedAwardModal.images[activeImageIndex]} />
                </div>
              </div>

              {selectedAwardModal.images.length > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {selectedAwardModal.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                        activeImageIndex === idx
                          ? 'bg-amber-500 text-white font-bold border border-amber-400 shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>View {img.caption}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <p className="font-bold text-amber-700 font-mono">OFFICIAL AWARD CITATION:</p>
              <p className="italic leading-relaxed">"{selectedAwardModal.citation}"</p>
              <p className="text-[11px] text-slate-500 font-mono pt-1 border-t border-slate-200">
                Presented By: {selectedAwardModal.presentedBy}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedAwardModal(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 text-xs font-bold"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 relative text-left shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 pr-8">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                {selectedProject.badge}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 pt-2">{selectedProject.title}</h3>
              <p className="text-xs text-emerald-700 font-mono font-semibold">{selectedProject.role} &bull; {selectedProject.type}</p>
            </div>

            {selectedProject.imageUrl && (
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-64 object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}

            {selectedProject.liveUrl && (
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300 truncate pr-2">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate text-slate-200 font-semibold">{selectedProject.liveUrl}</span>
                </div>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] shrink-0 flex items-center gap-1"
                >
                  Visit Live <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="space-y-1">
                <h4 className="font-bold text-emerald-700 font-mono uppercase text-xs">Problem Statement</h4>
                <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-cyan-700 font-mono uppercase text-xs">Architecture & Approach</h4>
                <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">{selectedProject.architecture}</p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-indigo-700 font-mono uppercase text-xs">Engineering Highlights</h4>
                <ul className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2 font-mono text-xs">
                  {selectedProject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">&gt;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm hover:bg-emerald-700"
                >
                  Visit Live Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : <div />}
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-slate-200 text-slate-800 hover:bg-slate-300 text-xs font-bold"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 space-y-6 relative text-left shadow-2xl">
            <button
              onClick={() => setResumeModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <img src={JAIVIN_AVATAR} alt="Jaivin JV" className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-sm" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">Jaivin JV &bull; Executive Summary</h3>
                <p className="text-xs text-slate-500">Senior Full-Stack Engineer & SaaS Founder (4.5+ Yrs Exp)</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-3 text-slate-700 font-mono">
              <p className="text-emerald-700 font-bold">&gt; CAREER HIGHLIGHTS:</p>
              <p>&bull; Founder of Pocket POS (pocketpos.io) — Multi-Tenant Retail Offline-First SaaS</p>
              <p>&bull; Best Performer & Commitment Award 2024 at Srishti Innovative</p>
              <p>&bull; Exceptional Contribution in Implementation of Avenu Project Award 2023</p>
              <p>&bull; Primary Tech: React, Next.js, Node.js, Express, TypeScript, MongoDB, Cloudflare, PWA</p>
              <p>&bull; Delivered 10+ production systems across global healthcare, logistics, e-commerce, and SaaS</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setResumeModalOpen(false)}
                className="text-xs text-slate-500 hover:text-slate-900 font-medium"
              >
                Close
              </button>
              <button
                onClick={handleCopyEmail}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
              >
                {copiedEmail ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                {copiedEmail ? 'Email Copied!' : 'Contact Jaivin JV'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
