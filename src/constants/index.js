const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Work",
    link: "#experience",
  },
    {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },

  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/image1.png",
  },
  {
    imgPath: "/images/logos/image2.png",
  },
  {
    imgPath: "/images/logos/image3.png",
  },
  {
    imgPath: "/images/logos/git.svg",
  },
  {
    imgPath: "/images/logos/image5.png",
  },
  {
    imgPath: "/images/logos/image6.png",
  },
  {
    imgPath: "/images/logos/three.png",
  },
  {
    imgPath: "/images/logos/image8.png",
  },
  {
    imgPath: "/images/logos/image9.png",
  },
  {
    imgPath: "/images/logos/image10.png",
  },
  {
    imgPath: "/images/logo3.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Three.js",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: ["Full Stack Developer"],
    logoPath: "/images/image.jpg",
    title: "Neoryde",
    date: "July 2025 - Present",
    responsibilities: [
      "Contributing to a travel app enhancing productivity and safety for women in IT.",
      "Developing features using React.js, NestJS, and PostgreSQL in a full-stack setup.",
      "Gaining exposure to the product lifecycle and SaaS platform workflows.",
    ],
  },
  {
    review: ["Web Developer"],
    logoPath: "/images/logo2.png",
    title: "Atlanwa Technologies",
    date: "December 2024 - January 2025",
    responsibilities: [
      "Developed a responsive HR Dashboard using HTML, CSS, JavaScript, and Python.",
      "Designed data visualizations, improving analytical insights by 30%.",
      "Optimized dashboard performance, achieving 99% cross-browser compatibility.",
    ],
  },
  // {
  //   review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/images/exp3.png",
  //   logoPath: "/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const projects = [
  {
    title: "CivicPulse Platform",
    description: "Developed a platform for citizens to report civic issues with geolocation.Implemented real-time heatmaps for issue visualization on the admin dashboard.Integrated AI model to classify and route issues based on type and severity.",
    techStack: ["React.js", "Node.js", "Express.js", "Firebase"],
    imgPath: "/images/project1.png",
    githubLink: "https://github.com/jann357/civicPulse",
  },
  {
    title: "SQL Data Warehouse",
    description: " Designed multi-layer architecture (Bronze, Silver, Gold) to organize raw to refined data.Built ETL pipelines using T-SQL and stored procedures for automated processing.Modeled star schema for efficient analytical querying and reporting.",
    imgPath: "/images/project4.png",
    techStack: ["SQL Server", "T-SQL", "SSMS", "Git"],
    githubLink: "https://github.com/mgayathri3/datawarehouse-project",
  },
  {
    title: "Cab Assignment Dashboard",
    description: "Built a cab assignment dashboard to streamline transport allocation for IT employees.Integrated driver availability & route optimization, reducing allocation time by 25%.Maintained 99% uptime and implemented clean, scalable backend architecture.",
    imgPath: "/images/project5.png", 
    techStack: ["React.js", "NestJS", "PostgreSQL"],
    githubLink: "https://github.com/neoryde-platform/neoryde-fe",
  },
  {
    title: "HR Management Dashboard",
    description: "Built a full-stack web app to manage employee data with CRUD functionalities.Integrated performance tracking metrics and automated report generation.Implemented secure login, session management, and role-based access.",
    imgPath: "/images/project2.png",
    techStack: ["Python", "FLask", "MySQL", "HTML","CSS","JavaScript"],
    githubLink:"https://github.com/SAMSDP/HR_Dashboard",
  },
  {
    title: "Automated WhatsApp News Bot",
    description: "Built a bot to scrape, summarize, and deliver personalized news to users via WhatsApp.Used OpenAI API for NLP-based summarization and scheduling with Flask.Integrated Twilio API for WhatsApp messaging and PostgreSQL for storing user preferences.",
    imgPath: "/images/project3.png",
    techStack: ["Python", "FLask", "Twilio API", "Open API","BeautifulSoup","PostgreSQL"],
    githubLink: "https://github.com/mgayathri3/Automated-WhatsApp-News-Delivery-Bot-",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  projects,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
