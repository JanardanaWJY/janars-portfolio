export const siteMeta = {
  name: "I Putu Janardana Wijaya",
  shortName: "Janars",
  role: "System Analyst with a growing focus on data analytics",
  location: "South Tangerang, Indonesia",
  email: "janardnwjy@gmail.com",
};

export const quickStats = [
  {
    label: "Current role",
    value: "System Analyst at PLN Icon Plus",
  },
  {
    label: "Main focus",
    value: "Requirements, workflows, and data flows",
  },
  {
    label: "Analytics project",
    value: "36,105 lending records analyzed",
  },
];

export const serviceCards = [
  {
    icon: "spark",
    title: "Requirement Analysis",
    description:
      "Turning messy stakeholder requests into structured requirements, documentation, and clearer delivery direction.",
    tools: ["Requirement Matrix", "User Journey", "System Spec"],
  },
  {
    icon: "flow",
    title: "Process Mapping",
    description:
      "Mapping workflows, swimlanes, and enterprise data movement so teams can align faster and reduce ambiguity.",
    tools: ["DFD", "Swimlane", "Activity Diagram"],
  },
  {
    icon: "chart",
    title: "Data Thinking",
    description:
      "Using analytics tools to clean data, find patterns, and communicate insights in a way stakeholders can act on.",
    tools: ["Python", "SQL", "Tableau"],
  },
];

export const strengths = [
  {
    title: "Structured communication",
    description:
      "I like being the person who makes business context and technical direction easier to align.",
  },
  {
    title: "System-level thinking",
    description:
      "I naturally look for relationships between workflows, ownership, dependencies, and reporting needs.",
  },
  {
    title: "Detail without losing the big picture",
    description:
      "From database structure to reporting flow, I try to keep both execution detail and business value in view.",
  },
];

export const timeline = [
  {
    icon: "briefcase",
    company: "PLN Icon Plus",
    role: "System Analyst",
    period: "Jun 2026 - Present",
    highlight: "Supporting IBM Maximo and IBM MAS integration analysis.",
    summary:
      "My current work is centered on understanding requirements, mapping operational dependencies, and documenting enterprise data flows for more reliable integration planning.",
    tools: ["IBM MAS", "Python", "Requirement Matrix", "DFD"],
    bullets: [
      "Analyze business requirements across operational modules and connected systems.",
      "Map inbound and outbound enterprise data flows to surface sources, destinations, and gaps.",
      "Prepare cleaner asset-related datasets before migration and integration work.",
    ],
    assetSrc: "/assets/timeline/pln-icon-plus-work.png",
    assetHint: "Upload public/assets/timeline/pln-icon-plus-work.png",
  },
  {
    icon: "layers",
    company: "PT Halotax Solusi Indonesia",
    role: "Freelance System Analyst & Web Developer",
    period: "Sep 2025 - Jan 2026",
    highlight: "From business discussion to feature and workflow design.",
    summary:
      "I helped shape internal system requirements and supported implementation planning for both tax-focused internal products and a PS rental operations system.",
    tools: ["PostgreSQL", "User Journey", "Activity Diagram", "Draw.io"],
    bullets: [
      "Structured requirements through stakeholder discussions, user journeys, and system specifications.",
      "Designed PostgreSQL-backed workflows for consultation, article, and AI chatbot modules.",
      "Built administrative features for transaction recording and operational monitoring in a rental system.",
    ],
    assetSrc: "/assets/timeline/halotax-system-flow.png",
    assetHint: "Upload public/assets/timeline/halotax-system-flow.png",
  },
  {
    icon: "database",
    company: "PT SUCOFINDO",
    role: "System Analyst Intern",
    period: "Sep 2024 - Feb 2025",
    highlight: "Redesigning spreadsheet-heavy sales operations into a clearer system blueprint.",
    summary:
      "This experience strengthened how I analyze operational pain points, organize fragmented data, and propose more scalable system structures.",
    tools: ["ERD", "Excel", "Swimlane", "Role Mapping"],
    bullets: [
      "Reviewed spreadsheet-heavy sales workflows across TKDN and Non-TKDN segments.",
      "Designed swimlanes, access structures, activity diagrams, and an ERD for a centralized system.",
      "Proposed a web-based solution with better dashboard visibility and more consistent data management.",
    ],
    assetSrc: "/assets/timeline/sucofindo-dashboard-plan.png",
    assetHint: "Upload public/assets/timeline/sucofindo-dashboard-plan.png",
  },
];

export const featuredProjects = [
  {
    icon: "chart",
    title: "Credit Risk Assessment in Digital Lending",
    subtitle: "Analytics Project",
    associatedWith: "Associated with RevoU",
    period: "Feb 2026 - Jun 2026",
    summary:
      "An end-to-end analytics project built to identify high-risk customer profiles in digital lending and turn the findings into a practical monitoring dashboard.",
    role:
      "Owned the full workflow independently, from data preparation and exploratory analysis to dashboard-ready insight communication.",
    tools: ["Python", "Tableau", "Data Preprocessing", "EDA"],
    details: [
      "Prepared a 36,105-customer dataset by handling missing values and structuring customer-level risk indicators.",
      "Analyzed repayment behavior across income, employment type, age group, and family size to spot meaningful risk patterns.",
      "Designed a Tableau dashboard to make portfolio risk and high-risk customer segments easier to monitor.",
    ],
    result:
      "Delivered a Tableau dashboard that helps surface high-risk customer behavior patterns and supports clearer risk monitoring.",
    assetSrc: "/assets/projects/credit-risk-dashboard.png",
    assetHint: "Upload public/assets/projects/credit-risk-dashboard.png",
    links: [
      {
        label: "View dashboard",
        href: "https://public.tableau.com/app/profile/janardana.wijaya/viz/CreditRiskMonitoringDashboard/Dashboard1",
      },
    ],
  },
  {
    icon: "database",
    title: "Evaluating Knowledge Distillation for Handling Data Imbalance in IndoBERT Sentiment Analysis for Indonesian Elections",
    subtitle: "Research Project",
    associatedWith: "Associated with BINUS University",
    period: "Jan 2025 - Aug 2025",
    summary:
      "A research project exploring how knowledge distillation could improve minority-class performance in imbalanced Indonesian election sentiment analysis.",
    role:
      "Contributed across data gathering, preprocessing, model training, validation, and scientific paper writing.",
    tools: ["Python", "IndoBERT", "Knowledge Distillation", "Model Validation"],
    details: [
      "Collected and prepared Indonesian Twitter data for an intentionally imbalanced sentiment analysis setup.",
      "Trained teacher-student model pairs using IndoBERT Base and IndoBERT Lite.",
      "Tested multiple alpha and temperature configurations to evaluate minority-class performance gains.",
    ],
    result:
      "Improved minority-class positive F1-score from 0.68 to 0.73, while the best student model also raised overall accuracy from 0.87 to 0.88.",
    assetSrc: "/assets/projects/knowledge-distillation-paper.png",
    assetHint: "Upload public/assets/projects/knowledge-distillation-paper.png",
    links: [
      {
        label: "View paper",
        href: "https://ieeexplore.ieee.org/document/11213839/",
      },
      {
        label: "Source code & dataset",
        href: "https://github.com/JanardanaWJY/sentiment-analysis-for-indonesia-elections",
      },
      {
        label: "View certificate",
        href: "https://www.linkedin.com/in/i-putu-janardana-wijaya-41473b224/overlay/Project/1188109965/treasury/?profileId=ACoAADhZk5ABdGG7MVq_BmLZeMtFLts0w4TeeQc&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_projects_details%3BcEGJlwNmQXiFH2r%2FEusSDg%3D%3D",
      },
    ],
  },
  {
    icon: "chart",
    title: "Exploring the Performance of BERT Models for Multi-Label Hate Speech Detection on Indonesian Twitter",
    subtitle: "Research Project",
    associatedWith: "Associated with BINUS University",
    period: "Mar 2023 - Sep 2023",
    summary:
      "A comparative NLP research project evaluating BERT-based models for multi-label hate speech detection on Indonesian Twitter data.",
    role:
      "Worked collaboratively across data gathering, preprocessing, model training, validation, and paper writing.",
    tools: ["Python", "IndoBERT", "mBERT", "Model Evaluation"],
    details: [
      "Ran comparative experiments across IndoBERT and mBERT using multiple hyperparameter settings.",
      "Evaluated performance with F1 score, ROC-AUC, and accuracy to identify the stronger model for Indonesian hate speech detection.",
      "Documented the findings in a research paper that was later published through IEEE.",
    ],
    result:
      "IndoBERT consistently outperformed mBERT, reaching average metrics of F1 0.91, ROC-AUC 0.94, and accuracy 0.84, with the best setup achieving F1 0.98 and accuracy 0.88.",
    assetSrc: "/assets/projects/hate-speech-paper.png",
    assetHint: "Upload public/assets/projects/hate-speech-paper.png",
    links: [
      {
        label: "View paper",
        href: "https://ieeexplore.ieee.org/document/10284596",
      },
      {
        label: "Source code",
        href: "https://github.com/JanardanaWJY/hate-speech-detection",
      },
    ],
  },
  {
    icon: "layers",
    title: "Prototype Website for an Inventory Management",
    subtitle: "Personal Project",
    associatedWith: "Personal build",
    period: "Jun 2024 - Jul 2024",
    summary:
      "A full-stack practice project built to strengthen my readiness for job applications while learning backend development for the first time.",
    role:
      "Built the project independently from frontend to backend, using it as a hands-on way to learn server-side development and full-stack delivery.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Express", "MariaDB"],
    details: [
      "Implemented authentication, product CRUD, stock movement recording, and item-level activity tracking.",
      "Built the frontend with React and TypeScript, then connected it to an Express and MariaDB backend.",
      "Added multi-language support, dark mode, and demo mode to make the app easier to present and extend.",
    ],
    result:
      "Delivered a functional inventory management app that handles product and stock movement workflows in a more structured way.",
    assetSrc: "/assets/projects/inventory-management-app.png",
    assetHint: "Upload public/assets/projects/inventory-management-app.png",
    links: [
      {
        label: "Source code",
        href: "https://github.com/JanardanaWJY/inventory-management",
      },
      {
        label: "Live demo",
        href: "https://inventory-management-phi-blush.vercel.app/demo",
      },
    ],
  },
];

export const supportingProjects = [
  {
    icon: "spark",
    title: "Android Application and Hanback Board Integration",
    subtitle: "Supporting Technical Project",
    associatedWith: "Associated with Dankook University",
    period: "Mar 2024 - May 2024",
    summary:
      "A hardware-integrated Android game project combining mobile development, native code, and board-level input-output interaction.",
    role:
      "Led the coding and experimentation work, including Android development in Java, JNI and native C++ integration, gameplay logic, timer flow, and Hanback Board communication.",
    tools: ["Android Studio", "Java", "C++", "JNI", "CMake", "Hanback Board"],
    result:
      "Built a SpongeBob-themed Android Tic-Tac-Toe app integrated with Hanback Board hardware, including LED countdown feedback and LCD-based game status display.",
    assetSrc: "/assets/projects/android-hanback-board.png",
    assetHint: "Upload public/assets/projects/android-hanback-board.png",
    links: [
      {
        label: "Source code",
        href: "https://github.com/JanardanaWJY/Spongebob-Tictactoe",
      },
      {
        label: "Demo video",
        href: "https://www.youtube.com/watch?v=fpQYpuJERmo",
      },
    ],
  },
];

export const education = [
  {
    school: "BINUS University",
    detail: "Bachelor of Computer Science",
    meta: "Sep 2021 - Sep 2025 | GPA 3.73/4.00",
  },
  {
    school: "Dankook University",
    detail: "Exchange Program in Mobile Systems Engineering",
    meta: "Mar 2024 - Jun 2024 | GPA 3.90/4.50",
  },
  {
    school: "RevoU",
    detail: "Full Stack Data Analytics",
    meta: "Feb 2026 - Jun 2026",
  },
];

export const skillGroups = [
  {
    icon: "flow",
    title: "Analysis",
    items: [
      "Requirement Gathering",
      "Business Process Mapping",
      "Data Flow Mapping",
      "Swimlane Diagram",
      "ERD",
      "User Journey Mapping",
    ],
  },
  {
    icon: "database",
    title: "Data",
    items: ["Python", "SQL", "PostgreSQL", "Pandas", "NumPy", "Tableau"],
  },
  {
    icon: "layers",
    title: "Tools",
    items: ["Git", "GitHub", "Excel", "Google Sheets", "Jupyter Notebook", "Figma"],
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/JanardanaWJY",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/i-putu-janardana-wijaya-41473b224/",
    icon: "linkedin",
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/janardnwjy",
    icon: "link",
  },
];
