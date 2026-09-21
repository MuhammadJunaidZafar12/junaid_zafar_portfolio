import ecommerceImage from '../assets/ecommerce-mern.jpg';
import foodFusionImage from '../assets/food-fusion.jpg';
import foodPandaImage from '../assets/food-panda.jpg';
import heartDiseaseImage from '../assets/heart-disease.jpg';
import spotifyImage from '../assets/spotify-music-app.svg';
import resumeFile from '../assets/Junaid Zafar - Full Stack Developer - Resume.pdf';

export const portfolioData = {
  personal: {
    name: "Muhammad Junaid Zafar",
    firstName: "Junaid",
    shortName: "JUNAID ZAFAR",
    displayTitle: "Full Stack Developer",
    roles: ["Full Stack Developer", "MERN Stack Developer", "Backend Developer", "Web Developer"],
    headline: "Building modern, scalable web applications with MERN, Next.js, REST APIs, real-time systems, and Python/FastAPI.",
    email: "junaidzafar434@gmail.com",
    phone: "+92 346 1255799",
    location: "Lahore, Pakistan",
    linkedinUrl: "https://linkedin.com/in/junaid-zafar70",
    githubUrl: "https://github.com/MuhammadJunaidZafar12",
    resumeUrl: resumeFile,
    bio: "BS Computer Science graduate from National University of Computer and Emerging Sciences (CGPA: 3.2/4.0) with hands-on professional experience in full-stack development. I specialize in the MERN stack — building scalable RESTful APIs, responsive React/Next.js frontends, MongoDB databases, and JWT-based authentication systems. I have integrated real-time features using Socket.IO, built admin and owner dashboards, and combined Python FastAPI with machine learning models in production applications. I care about writing clean, maintainable code and delivering solid end-to-end engineering."
  },

  socials: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/junaid-zafar70",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/MuhammadJunaidZafar12",
      icon: "github"
    }
  ],

  marquee: [
    "FULL STACK DEVELOPER",
    "MERN STACK",
    "REACT.JS",
    "NEXT.JS",
    "NODE.JS",
    "EXPRESS.JS",
    "MONGODB",
    "REST APIS",
    "SOCKET.IO",
    "FASTAPI",
    "PYTHON",
    "JWT AUTH",
    "REAL-TIME APPS",
    "ADMIN DASHBOARDS",
    "BSCS GRADUATE"
  ],

  skills: [
    { name: "HTML5", category: "Frontend Development" },
    { name: "CSS3", category: "Frontend Development" },
    { name: "JavaScript (ES6+)", category: "Frontend Development" },
    { name: "React.js", category: "Frontend Development" },
    { name: "Next.js", category: "Frontend Development" },
    { name: "Tailwind CSS", category: "Frontend Development" },
    { name: "Material UI (MUI)", category: "Frontend Development" },
    { name: "Redux", category: "Frontend Development" },
    { name: "Redux Toolkit", category: "Frontend Development" },
    { name: "Node.js", category: "Backend Development" },
    { name: "Express.js", category: "Backend Development" },
    { name: "REST APIs", category: "Backend Development" },
    { name: "FastAPI", category: "Backend Development" },
    { name: "JWT Authentication", category: "Backend Development" },
    { name: "MongoDB", category: "Databases" },
    { name: "Mongoose", category: "Databases" },
    { name: "MySQL", category: "Databases" },
    { name: "JavaScript", category: "Programming Languages" },
    { name: "Python", category: "Programming Languages" },
    { name: "Java", category: "Programming Languages" },
    { name: "C++", category: "Programming Languages" },
    { name: "Git", category: "Tools & Technologies" },
    { name: "GitHub", category: "Tools & Technologies" },
    { name: "Postman", category: "Tools & Technologies" },
    { name: "Socket.IO", category: "Tools & Technologies" },
    { name: "Leaflet", category: "Tools & Technologies" },
    { name: "React Leaflet", category: "Tools & Technologies" },
    { name: "Cloudinary", category: "Tools & Technologies" },
    { name: "Responsive Web Design", category: "Additional Skills" },
    { name: "API Integration", category: "Additional Skills" },
    { name: "Authentication & Authorization", category: "Additional Skills" },
    { name: "Role-Based Access Control (RBAC)", category: "Additional Skills" },
    { name: "CRUD Operations", category: "Additional Skills" },
    { name: "Real-Time Applications", category: "Additional Skills" },
    { name: "Geolocation & Maps Integration", category: "Additional Skills" }
  ],

  services: [
    {
      id: "mern-dev",
      title: "Full Stack MERN Development",
      description: "End-to-end web application development using MongoDB, Express.js, React.js, and Node.js — from REST API design and database schema to responsive frontend with authentication and admin dashboards.",
      icon: "layers"
    },
    {
      id: "api-backend",
      title: "API & Backend Development",
      description: "Scalable, secure REST APIs with Node.js and Express 5, JWT authentication, role-based access control, and structured MongoDB database design for production-grade applications.",
      icon: "server"
    },
    {
      id: "react-frontend",
      title: "React / Next.js Frontend",
      description: "Modern, performant user interfaces built with React 19, Next.js, Redux Toolkit, Tailwind CSS, and Material UI — fully responsive and production-ready.",
      icon: "code"
    },
    {
      id: "python-ml",
      title: "Python / FastAPI & ML Integration",
      description: "Machine learning model integration with Python, FastAPI, and scikit-learn — connecting predictive systems to MERN backends with clean REST endpoints and structured JSON responses.",
      icon: "cpu"
    }
  ],

  experience: [
    {
      id: "exp-digiunction",
      role: "Full Stack Development Intern → Developer",
      company: "Digiunction",
      duration: "15 Jan 2026 – 01 July 2026",
      location: "On-site",
      type: "Internship → Job",
      techStack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Git"],
      responsibilities: [
        "Built full-stack web applications using React, Next.js, Node.js, and MongoDB across multiple client projects.",
        "Developed and maintained RESTful APIs, admin routes, and database schemas for e-commerce and dashboard applications.",
        "Integrated frontend and backend systems, performed bug fixing, and collaborated via Git/GitHub in a team environment.",
        "Contributed to admin dashboard development, owner dashboards, and e-commerce platforms."
      ]
    },
    {
      id: "Freelancer",
      role: "Full Stack Developer (MERN + Next.js)",
      company: "Frelance Projects",
      companyUrl: null,
      duration: "2025 – Present",
      location: "Remote",
      type: "Contract",
      techStack: ["React", "Next.js", "Node.js", "REST APIs", "Git"],
      responsibilities: [
        "Developed and delivered custom web applications for clients using React, Next.js, and Node.js.",
        "Implemented responsive designs, user authentication, and API integrations based on client requirements.",
        "Provided ongoing maintenance and updates for deployed applications, ensuring performance and security."  
      ]
    },
  ],

  projects: [
    {
      id: "foodpanda-clone",
      title: "FoodPanda Clone",
      category: "Full Stack Marketplace",
      tagline: "Production-grade food & grocery delivery platform",
      description: "A comprehensive full-stack food delivery marketplace built with React 19, Node.js, Express 5, MongoDB, and Socket.IO. Features multi-role system (Customer, Restaurant Owner, Admin), live GPS rider tracking with Leaflet Maps, real-time order state synchronization via Socket.IO, smart cart with GST calculations, and a complete restaurant approval workflow.",
      techStack: ["React 19", "Node.js", "Express 5", "MongoDB", "Mongoose", "Redux Toolkit", "Socket.IO", "Leaflet Maps", "Material UI", "Tailwind CSS"],
      keyFeatures: [
        "Customer: GPS location, restaurant/cuisine/dietary filtering, live rider tracking, order placement",
        "Owner Dashboard: restaurant CRUD, product management, order management, analytics",
        "Admin Dashboard: restaurant approval workflow, role-based access control",
        "Real-time: Socket.IO for synchronized order states and live GPS rider tracking",
        "Maps: Leaflet Maps with reverse geocoding and pin-drop location"
      ],
      githubUrl: "https://github.com/MuhammadJunaidZafar12/Food-Panda-Website",
      liveUrl: "https://food-panda-website-m3zx.vercel.app/",
      image: foodPandaImage,
      featured: true,
      badge: "Featured Project"
    },
    {
      id: "cardioguard",
      title: "CardioGuard",
      category: "Healthcare · ML + MERN",
      tagline: "Heart disease detection system powered by Machine Learning",
      description: "An end-to-end healthcare application combining MERN stack with Next.js and a Python FastAPI machine learning backend. Patients submit health data and receive heart disease risk predictions (trained on UCI Kaggle dataset). Includes admin dashboard, prediction history, PDF report generation, and JWT authentication.",
      techStack: ["MERN Stack", "Next.js", "Python", "FastAPI", "Machine Learning", "MongoDB", "JWT", "PDF Reports"],
      keyFeatures: [
        "ML models: XGBoost, Random Forest, Gradient Boosting, Logistic Regression — 96.16% accuracy",
        "FastAPI prediction endpoint: probability, confidence score, risk level",
        "Patient management, full prediction history, PDF report generation",
        "Admin dashboard with charts and analytics, JWT auth",
        "Node.js backend communicates with FastAPI ML service"
      ],
      githubUrl: "https://github.com/MuhammadJunaidZafar12/Heart-Disease-Detection--FYP",
      liveUrl: "https://heart-disease-detection-fyp-fronten-seven.vercel.app",
      image: heartDiseaseImage,
      featured: true,
      badge: "ML + MERN"
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Website",
      category: "Full Stack Web App",
      tagline: "Full-featured online store with admin dashboard",
      description: "A complete e-commerce web application built during professional experience at Digiunction. Features product catalog, cart, order management, secure checkout, and a full admin panel for inventory and order tracking.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
      keyFeatures: [
        "Product catalog with search and category filtering",
        "Cart management and order placement with status tracking",
        "JWT authentication with role-based access (admin/customer)",
        "Admin dashboard: product CRUD, order management, user management",
        "Responsive design across all device sizes"
      ],
      githubUrl: "https://github.com/MuhammadJunaidZafar12/E-Commerce-Website",
      liveUrl: null,
      image: ecommerceImage,
      featured: false,
      badge: "Professional"
    },
    {
      id: "Food Fusion Website",
      title: "Food Fusion Website",
      category: "Portfolio & Dashboard",
      tagline: "Modern food delivery platform",
      description: "Developed a responsive fast food website using HTML, CSS, and JavaScript, featuring an interactive menu, orderplacement functionality, and engaging UI animations to enhance user experience.",
      techStack: ["HTML", "CSS", "JavaScript", "Git"],
      keyFeatures: [
        "Responsive Navigation Bar – desktop aur mobile-friendly navigation.",
        "Home/Landing Page – attractive hero section with food-related content.",
        "Food Menu – different food items with images, names, descriptions and prices.",
        "Food Categories – Organize the Food Into Categories.",
        "Search Functionality through JavaScript.",
        "Interactive Food Cards – hover effects and interactive UI elements."
      ],
      githubUrl: "https://github.com/MuhammadJunaidZafar12/Food-Fusion-Website",
      liveUrl: null,
      image: foodFusionImage,
      featured: false,
      badge: "HTML/CSS/JS Project"
    },
    {
      id: "Spotify Music Web App",
      title: "Spotify Music Web App",
      category: "Portfolio & Dashboard",
      tagline: "Modern music streaming platform",
      description: "Developed a responsive music streaming website using React, Node.js, and MongoDB, featuring a sleek UI, playlist management, and seamless playback functionality.",
      techStack: ["HTML", "CSS", "JavaScript", "Git"],
      keyFeatures: [
        "Responsive Navigation Bar – desktop aur mobile-friendly navigation.",
        "Home/Landing Page – attractive hero section with music-related content.",
        "Music Library – different songs and albums with images, names, descriptions and prices.",
        "Music Categories – tracks ko different categories mein organize kiya.",
        "Search Functionality through JavaScript.",
        "Interactive Music Cards – hover effects and interactive UI elements."
      ],
      githubUrl: "https://github.com/MuhammadJunaidZafar12/Spotify-Web-Player",
      liveUrl: null,
      image: spotifyImage,
      featured: false,
      badge: "HTML/CSS/JS Project"
    }
  ],

  education: [
    {
      id: "edu-bscs",
      degree: "Bachelor of Science in Computer Science",
      short: "BSCS",
      institution: "National University of Computer and Emerging Sciences (FAST)",
      short_institution: "FAST",
      cgpa: "3.2 / 4.0",
      status: "Graduated",
      focus: ["Data Structures & Algorithms", "Database Systems", "Software Engineering", "Computer Networks", "Operating Systems"],
    }
  ],

  testimonials: [
    {
      id: 't1',
      name: 'Ahmed Raza',
      location: 'Lahore, Pakistan',
      initials: 'AR',
      rating: 5,
      quote: 'Junaid built our Shopify store from the ground up and was proactive about performance and SEO the whole way through. Delivered on time, every time.'
    },
    {
      id: 't2',
      name: 'Hassan Iqbal',
      location: 'Faisalabad, Pakistan',
      initials: 'HI',
      rating: 5,
      quote: 'Clear communicator, strong technical skills, and genuinely cares about getting the details right. Our site\'s load times improved massively after he took over.'
    },
    {
      id: 't3',
      name: 'Sara Malik',
      location: 'Jersey City, United States',
      initials: 'SM',
      rating: 5,
      quote: 'Junaid understood our requirements quickly and turned around clean, maintainable code. He\'s now our go-to developer for anything MERN or Next.js.'
    },
    {
      id: 't4',
      name: 'James Whitfield',
      location: 'Boston, United States',
      initials: 'JW',
      rating: 5,
      quote: 'Hired Junaid for a custom dashboard build and the experience was smooth end to end. The final product loads fast and matches our spec exactly.'
    },
    {
      id: 't5',
      name: 'Bilal Sheikh',
      location: 'Lahore, Pakistan',
      initials: 'BS',
      rating: 5,
      quote: 'Reliable and responsive freelancer. Junaid handled our backend migration without any downtime and was easy to reach throughout the project.'
    }
  ]
};
