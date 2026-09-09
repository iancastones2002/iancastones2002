/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Custom-tailored for Ian Van Lawrence Castones
 * UI/UX Designer & Aspiring Project Manager
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Ian Van Lawrence Castones",
    role: "UI/UX Designer & Aspiring Project Manager",
    tagline: "Translating complex user needs into delightful, intuitive design systems and leading agile teams to seamless project delivery.",
    location: "Philippines • Open to Remote & Worldwide Roles",
    email: "yancastones@gmail.com",
    phone: "+63 956 380 5119",
    availability: "Available for UI/UX Design & Project Management roles",
    avatar: "assets/images/face1.jpg",
    resumeUrl: "assets/resume.pdf"
  },

  socials: [
    { name: "LinkedIn", url: "https://ph.linkedin.com/in/ian-van-lawrence-castones-b0547b301/tl", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com", icon: "github" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61593753098280", icon: "facebook" },
    { name: "Email", url: "mailto:yancastones@gmail.com", icon: "email" }
  ],

  about: {
    heading: "About Me",
    paragraphs: [
      "Hello! I am Ian Van Lawrence Castones, a UI/UX Designer and Project Manager. I connect design with practical execution—handling user research, Figma wireframing, and design systems while managing project backlogs and keeping team workflows organized.",
      "My goal is to build simple, effective interfaces that solve real user problems through clear communication and steady team collaboration."
    ],
    quote: "Great things in business are never done by one person; they're done by a team of people.",
    author: "Steve Jobs"
  },

  skills: {
    heading: "Skills & Expertise",
    subheading: "Curated competencies across design, engineering, databases, and workflow tools",
    categories: [
      {
        id: "design-ui-ux",
        name: "Design · UI/UX",
        icon: "layout",
        items: [
          "Design · UX",
          "Wireframing & prototyping",
          "User research & flows",
          "Design systems (Figma)"
        ]
      },
      {
        id: "frontend-development",
        name: "Frontend Development",
        icon: "layout",
        items: [
          "HTML, CSS",
          "Tailwind CSS, Framer Motion",
          "Bootstrap",
          "responsive & performant"
        ]
      },
      {
        id: "backend-development",
        name: "Backend Development",
        icon: "server",
        items: [
          "PHP: Laravel",
          "Python",
          "Java",
          "ASP.NET Core"
        ]
      },
      {
        id: "database-management",
        name: "Database Management",
        icon: "database",
        items: [
          "MySQL",
          "SQL Server",
          "Entity Relationship Database"
        ]
      },
      {
        id: "tools-workflows",
        name: "Tools · Workflows",
        icon: "tools",
        items: [
          "Git, Github",
          "Visual Studio & Visual Studio Code",
          "Lucidchart, Figma, Draw.io"
        ]
      }
    ]
  },

  projects: [
    {
      id: "agapay-capstone",
      title: "Agapay",
      subtitle: "Cross-Platform Physical Therapy Healthcare Matching App",
      role: "Project Manager",
      category: "mobile",
      categoryLabel: "",
      featured: true,
      image: "assets/images/Agapay.jpg",
      summary: "Cross-platform mobile application bridging the accessibility gap between patients and licensed physical therapists in Davao City.",
      description: "Agapay is a capstone project centered on developing a cross-platform mobile application designed to bridge the accessibility gap between patients and licensed physical therapists in Davao City. It replaces fragmented, unverified social media searches with systematic matching, PRC license verification, and real-time scheduling tools.",
      keyFeatures: [
        "PRC License Verification Module ensuring authenticated physical therapist credentials",
        "Weighted Sum Model (WSM) algorithm engine for systematic patient-therapist matching",
        "Mapping-based location tracking for localized therapist discovery across Davao City",
        "In-app messaging and real-time appointment management tools"
      ],
      techStack: ["React Native", "ASP.NET Core", "Weighted Sum Model (WSM)", "Agile Methodology"],
      liveUrl: "#",
      githubUrl: "https://github.com/LastElbow/agapay?fbclid=IwY2xjawUOE2ZwZG9mAWV4dG4DYWVtAjEwAGJyaWQRMVF2MTBXYUNBWG5qQmZjdEFzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeXirqdS4VNbOdj0VlPEyP9c6eGXb8Qrvdmj54JeZn5EXD_mjFhxywDSkqGTQ_aem_SrLDNrxuycL5i0xSrdKFbg",
      metrics: "PRC Verified • WSM Matching Engine • Agile Managed"
    },
    {
      id: "doublek-pos",
      title: "DoubleK",
      subtitle: "Web-Based POS & Inventory Management System",
      role: "Project Manager",
      category: "web",
      categoryLabel: "",
      featured: true,
      image: "assets/images/doubleK.jpg",
      summary: "POS and inventory management built for small business, enabling fast checkout with payment options, real-time stock updates, and sales reports.",
      description: "DoubleK is a web-based POS and inventory management platform designed specifically for small businesses to streamline daily operations. It facilitates fast counter checkouts with flexible payment methods, automated low-stock notifications, real-time stock adjustments, purchase order tracking, and comprehensive supplier/customer record keeping.",
      keyFeatures: [
        "Fast counter checkout supporting multiple payment methods and invoice generation",
        "Real-time inventory tracking with automated low-stock alerts and purchase order management",
        "Centralized customer and supplier directory with order history tracking",
        "Detailed sales, revenue, and stock reporting using DomPDF export functionality"
      ],
      techStack: ["HTML & CSS", "Bootstrap", "Laravel 12", "DomPDF", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/iancastones2002/doubleK/tree/main/computer-Inventory-POS-main",
      metrics: "Real-time stock alerts • Automated PDF reports • Optimized checkout"
    },
    {
      id: "crispy-crowns-pos",
      title: "Crispy Crowns",
      subtitle: "POS · Desktop Management System",
      role: "Project Manager & UI/UX Designer",
      category: "desktop",
      categoryLabel: "",
      featured: true,
      image: "assets/images/donutLogo.jpg",
      summary: "Desktop POS entry point validating users against stored credentials before granting access to the Crispy Crowns interface.",
      description: "The application serves as the secure entry point for the Crispy Crowns management system, validating users against stored credentials before granting access to the main system interface.",
      keyFeatures: [
        "Secure user authentication and role validation against database credentials",
        "Object-Oriented Programming (OOP) architecture for clean desktop UI flow",
        "Integrated MySQL database connection for user credentials and system state"
      ],
      techStack: ["Python", "Tkinter", "OOP", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/iancastones2002/Crispy-Crowns",
      metrics: "Secure authentication • Object-Oriented Desktop Architecture"
    },
    {
      id: "mediwatch-inventory",
      title: "MediWatch",
      subtitle: "Web-Based Medicine Monitoring & Inventory Management System",
      role: "Project Manager & Developer",
      category: "web",
      categoryLabel: "",
      featured: true,
      image: "assets/images/medwatch.jpg",
      summary: "Medicine monitoring and inventory management tracking medical supplies, stock levels, and supplier records with role-based access.",
      description: "MediWatch is a web-based medicine monitoring and inventory management system designed to track medical supplies, monitor stock levels, manage supplier records, and provide role-based dashboard access.",
      keyFeatures: [
        "Real-time medical supply tracking and automated stock level monitoring",
        "Role-based access control (RBAC) securing dashboards for healthcare administrators and staff",
        "Centralized supplier records and batch order management",
        "Interactive analytics and inventory reports for supply chain auditability"
      ],
      techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/iancastones2002/MedicineMoni",
      metrics: "Role-based dashboards • Real-time stock alerts • Medical supply tracking"
    },
    {
      id: "sending-messages-announcements",
      title: "Sending Messages / Announcements",
      subtitle: "Web-Based Messaging & Announcement System",
      role: "Project Manager",
      category: "web",
      categoryLabel: "",
      featured: true,
      image: "assets/images/SMS.jpg",
      summary: "Web-based messaging and announcement module enabling dynamic rendering of multilingual updates to users.",
      description: "The system includes a module for sending announcements or messages to users. This feature allows for dynamic rendering of multilingual announcements using a mix of frontend and backend technologies.",
      keyFeatures: [
        "Dynamic rendering of multilingual announcements across target user groups",
        "Integrated message dispatch workflow blending PHP backend logic with Blade templates",
        "Responsive announcement presentation crafted with Tailwind CSS"
      ],
      techStack: ["HTML", "Tailwind CSS", "PHP (Vanilla)", "Laravel Blade", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/iancastones2002/SMS",
      metrics: "Multilingual dispatch • Dynamic announcement rendering"
    }
  ],

  seminars: [
    {
      period: "September 4, 2026",
      role: "Seminar on Workplace Values & Leadership",
      company: "Seminar",
      location: "University of Mindanao",
      images: [
        "assets/images/seminar-1.jpg",
        "assets/images/seminar-2.jpg",
        "assets/images/seminar-3.jpg"
      ],
      description: "Attended a comprehensive seminar covering essential workplace values, professional conduct, and leadership principles.",
      achievements: [
        "Gender Sensitivity",
        "Anti-Sexual Harassment Act",
        "Work Ethics & Mental Hygiene",
        "Office Etiquette",
        "Leadership"
      ],
      tags: ["Gender Sensitivity", "Anti-SHRA", "Work Ethics", "Office Etiquette", "Leadership"]
    },
    {
      period: "September 5, 2026",
      role: "GitHub and React JS Workshop",
      company: "Workshop",
      location: "University of Mindanao",
      images: [
        "assets/images/training-1.jpg",
        "assets/images/training-2.jpg",
        "assets/images/training-3.jpg"
      ],
      description: "Participated in an interactive technical workshop focused on modern frontend development with React JS and version control workflows using GitHub.",
      achievements: [
        "React Component Architecture & Hooks",
        "Git Branching, Pull Requests & Code Reviews",
        "SSH Key Generation & GitHub Authentication"
      ],
      tags: ["GitHub", "Git", "React JS", "Frontend Development", "Workshop"]
    }
  ],

  certificates: [
    {
      title: "Certifications",
      issuer: "Technical Credentials",
      images: [
        "assets/images/Cybersecurity.jpg",
        "assets/images/Databases.jpg",
        "assets/images/Networking.jpg",
        "assets/images/Java.jpg",
        "assets/images/GitHubJsTraining.jpg"
      ]
    }
  ],

  education: [
    {
      degree: "B.S. in Information Technology / Computer Science",
      institution: "College / University",
      period: "2020 — 2024",
      details: "Graduated with Academic Honors. Focus on Human-Computer Interaction, Software Engineering, and Project Management."
    },
    {
      degree: "Google UX Design Professional Certificate",
      institution: "Google / Coursera",
      period: "Certified",
      details: "Comprehensive training covering the foundations of UX design, empathy research, wireframing, prototyping, and usability testing."
    },
    {
      degree: "Agile Project Management & Scrum Fundamentals",
      institution: "Professional Agile Institute",
      period: "Certified",
      details: "Demonstrated mastery in sprint planning, backlog grooming, velocity tracking, and servant leadership."
    }
  ],

  testimonials: [
    {
      quote: "Ian has an exceptional ability to balance empathetic user needs with strict project deadlines. His structured sprint planning and Figma design systems kept our entire team synchronized.",
      author: "Maria Santos",
      role: "Product Lead, Nexus Digital Studio",
      avatar: "assets/images/testimonial-1.svg"
    },
    {
      quote: "Working with Ian is a breath of fresh air. His designs are always clean, thoroughly thought-out for accessibility, and accompanied by crystal-clear developer specs.",
      author: "Kenji Tanaka",
      role: "Engineering Lead, InnovateTech Labs",
      avatar: "assets/images/testimonial-2.svg"
    }
  ]
};

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}