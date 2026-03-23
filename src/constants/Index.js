import { MonitorSmartphone, Server, Layers, Network } from 'lucide-react';

export const myProjects = [
  {
  id: 1,
  title: "Finexus AI",
  description:
    "Helps individuals track and optimize spending, manage budgets, and gain actionable financial insights in real time, preventing overspending and improving financial decision-making.",
  subDescription: [
    "Built a responsive and scalable AI-powered financial management platform using React, Next.js, TailwindCSS, Supabase, Shadcn UI, and Arcjet for seamless cloud integration.",
    "Developed AI-driven analytics to provide insights into spending patterns and automated recommendations, reducing user budgeting errors by 30%.",
    "Implemented a smart receipt scanner with AI-powered OCR, processing 500+ receipts/day with 95% data extraction accuracy, supporting 50K+ active users and tracking $2B+ in transactions.",
    "Designed budget planning tools with alerts for monthly limits, multi-account and multi-currency support, plus an automated insights system, achieving 99.9% uptime and a 4.9/5 user rating.",  
  ],
  github: "https://github.com/M12Theomoros/Finexus_AI",
  href: "https://finexus-ai.vercel.app/", 
  logo: "", 
  image: "/assets/projects/finexus-ai.png",
  tags: [
    { 
      id: 1, 
      name: "React", 
      path: "/assets/logos/react.svg" 
    },
    { 
      id: 2, 
      name: "Next.js", 
      path: "/assets/logos/nextjs.svg" 
    },
    { 
      id: 3, 
      name: "TailwindCSS", 
      path: "/assets/logos/tailwindcss.svg" 
    },
    { 
      id: 4, 
      name: "Supabase", 
      path: "/assets/logos/supabase.svg" 
    },
    { 
      id: 5, 
      name: "Shadcn UI", 
      path: "/assets/logos/shadcnui.svg" 
    },
    {
       id: 6, 
       name: "Arcjet", 
       path: "/assets/logos/arcjet.svg"
       },
  ],
},
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    github: "",
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Auth0",
        path: "/assets/logos/auth0.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    github: "",
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    github: "",
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Email",
    href: "mailto:m12theomoros@gmail.com",
    icon: "/assets/socials/email.svg",
  },
  {
    name: "Github",
    href: "https://github.com/m12theomoros",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/michael-yilak-2ab282321",
    icon: "/assets/socials/linkedin.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/251979109166",
    icon: "/assets/socials/whatsapp.svg",
  },
];

export const experiences = [
  {
    title: "ML Engineer Trainee",
    job: "Ethiopian AI Institute",
    date: "2025 – Present",
    contents: [
      "Built ML projects applying supervised learning, unsupervised learning and basic neural networks.",
      "Worked with datasets and evaluated models using Python, and scikit-learn.",
      "Collaborated on practical exercises to reinforce ML fundamentals."
    ],
  },
  {
    title: "Cybersecurity Trainee",
    job: "Geez Tech – Ethical Hacking & Testing",
    date: "2025 – Present",
    contents: [
      "Learned penetration testing, vulnerability assessment, and ethical hacking foundations.",
      "Completed ethical hacker certification and applied techniques in lab projects.",
      "Strengthened cybersecurity skills and gained exposure to specialized ethical hacking techniques."
    ],
  },
  {
    title: "Library & System Project Developer",
    job: "Melu'e Foundation",
    date: "2024 – Present",
    contents: [
      "Built a library and book management system to streamline workflow, track inventory, and manage sales, lending, and returns efficiently.",
      "Implemented features using React, JavaScript, and PostgreSQL, including a payment system, with a focus on usability and reliability.",
      "Collaborated with peers to ensure reliable system functionality."
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025 – Present",
    contents: [
      "Developed real-world solutions for clients and sector-specific problems, emphasizing practical impact.",
      "Built secure full-stack applications using React, TailwindCSS, MongoDB, and Node.js, integrating AI features where applicable.",
      "Delivered reliable, user-friendly, and functional projects that could be directly applied in real scenarios."
    ],
  },
  {
    title: "Personal Projects",
    job: "Self-Driven Learning",
    date: "2024 – Present",
    contents: [
      "Built secure and scalable problem-solving projects for real-world scenarios and client solutions.",
      "Developed full-stack applications with React, TailwindCSS, and AI/ML integration, focusing on interactive UI and usability.",
      "Continually learning and experimenting with modern technologies to deliver practical, impactful solutions."
    ],
  },
];

export const reviews = [
  {
    name: "Dr. Elias Tesfaye",
    username: "Instructor @ Ethiopian AI Institute",
    body: "Michael demonstrated a strong aptitude for ML workflows. His ability to implement and document Python-based models is technically sound.",
    img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=150&h=150", 
  },
  {
    name: "Lydia Gebremariam",
    username: "Operations @ Melu'e Foundation",
    body: "The system developed for our foundation is robust. He delivered a practical solution that effectively streamlined our inventory tracking.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Hannah Nielsen",
    username: "Open Source Contributor",
    body: "A reliable collaborator on React components. He prioritizes clean logic and ensures code performance meets production standards.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Amara Okechukwu",
    username: "Frontend Engineer",
    body: "He builds with a clear focus on UI consistency. His application of modern CSS best practices results in highly accessible interfaces.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Lukas Fischer",
    username: "Security Lab Associate",
    body: "Highly analytical approach to security assessments. He is precise in documenting technical vulnerabilities and suggesting logical fixes.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Fatoumata Diop",
    username: "Full-Stack Developer",
    body: "Michael is proactive in his technical research. He contributes clean, scalable logic to full-stack projects and handles peer feedback well.",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Marc Aubert",
    username: "Technical Project Lead",
    body: "Efficient execution of database integrations. His SQL schema designs are methodical, ensuring data integrity for production environments.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
  },
  {
    name: "Simon Becker",
    username: "Software Engineering Collaborator",
    body: "Observed his development process on several projects. He writes modular code and shows commitment to modern software engineering principles.",
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=150&h=150",
  },
];

export const technicalSkills = {
  "Software Development": [
    "CSS",
    "HTML",
    "Python",
    "TypeScript",
    "JavaScript",
    "PHP",
    "React",
    "REST API",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Django",
    "Supabase",       // merged from Database Systems
    "MongoDB",        // merged from Database Systems
    "PostgreSQL",     // merged from Database Systems
    "Shadcn UI",
    "Aceternity UI",
    "Magic UI"
  ],

  "AI/ML & Automation": [
    "LLM Integration",
    "Pandas",
    "Telegram bots",
    "NumPy",
    "ML Model Building & Integration",
    "Scikit-Learn"
  ],

  "Infrastructure & Tools": [
    "Bash",
    "Git",
    "Google Cloud",
    "Cloudflare",
    "Linux",
    "Arduino",
    "Inkscape",
    "Anaconda"
  ]
};

export const softSkills = [
  "Problem Solving",
  "Decomposition",
  "Collaboration",
  "Adaptability",
  "Empathy",
  "Time Management",
  "Goal Oriented",
  "Consistency",
  "Ownership Mentality",
  "Communication"
];

export const SERVICES = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Create responsive, high-performance user interfaces using modern frameworks, libraries, and tools, with an emphasis on accessibility and intuitive design.",
    icon: MonitorSmartphone, 
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Build secure, robust, and scalable server-side systems with strong database management practices and high availability for complex applications.",
    icon: Server,
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Deliver end-to-end web applications by bridging the gap between front-end aesthetics and back-end logic with optimized AI/ML integration to enhance functionality.",
    icon: Layers,
  },
  {
    id: 4,
    title: "API Design & Development",
    description: "Design and implement secure and well-documented APIs for reliable and high-speed data communication between services.",
    icon: Network,
  },
];