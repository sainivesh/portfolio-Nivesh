/** Portfolio content — Nivesh Bagavatham */
export const site = {
  name: "Nivesh Bagavatham",
  shortName: "Nivesh",
  role: "Data Analyst",
  tagline: "Curious by nature. Hands-on with tech. Always building.",
  brand: "insight.layer",
  location: "Hyderabad, India · 2+ years in analytics",
  availability: "Open to remote & hybrid opportunities",
  email: "bagavathamnivesh.work@gmail.com",

  hero: {
    lineBefore: "Turning",
    highlight: "raw data",
    lineAfter: "into trusted insight teams can act on.",
  },

  thesis:
    "I explore technology, experiment with ideas, and turn them into useful solutions—a builder at the intersection of code, data, and problem-solving. I learn fast, experiment often, and create with tools across the SAS platform and Python.",

  thesisComment: "// explore → build → validate → deliver",

  about: {
    sectionTitle: "How I work",
    principles: [
      {
        title: "Curious by nature",
        body: "Hands-on with technology—I learn by building, whether that is SAS workflows, Python automation, or a side project on GitHub.",
      },
      {
        title: "Always building",
        body: "From data prep and reporting to optimization and ML experiments, I focus on outputs that are clear, repeatable, and useful for real decisions.",
      },
    ],
  },

  footerTagline: "Hyderabad · SAS & Python · always learning",

  resume: {
    /** Place your PDF at public/resume.pdf */
    href: "/resume.pdf",
    label: "Download resume",
  },

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sainivesh/" },
    { label: "GitHub", href: "https://github.com/sainivesh" },
  ] as const,
};

export const skills = [
  { name: "SAS Viya", layer: "Platform" },
  { name: "SAS Enterprise Guide", layer: "Development" },
  { name: "SAS DI Studio", layer: "ETL" },
  { name: "SAS Visual Analytics", layer: "Reporting" },
  { name: "SAS Visual Investigator", layer: "Investigation" },
  { name: "SAS Management Console", layer: "Operations" },
  { name: "Base SAS · Macros · PROC SQL", layer: "Foundation" },
  { name: "PROC OPTMODEL · ESP", layer: "Advanced" },
  { name: "Python", layer: "Automation" },
  { name: "SQL · Power BI", layer: "Data & BI" },
  { name: "Git · REST APIs", layer: "Integration" },
] as const;

export const projects = [
  {
    title: "SAS Viya MCP for SAS Viya for Learners",
    description:
      "Built an MCP integration layer connecting SAS Viya capabilities with AI-assisted workflows—authentication, configuration management, and smoother interaction with SAS environments.",
    tags: ["SAS Viya", "MCP", "Python", "APIs"],
    link: "https://github.com/sainivesh/SAS-Viya-MCP-for-SAS-Viya-for-Learners",
    linkLabel: "View on GitHub",
    ref: "github.com/sainivesh",
  },
  {
    title: "Petroleum distribution optimization",
    description:
      "Operations research project modeling efficient transportation paths between depots, terminals, plants, and retail outlets across India using sales and logistics data.",
    tags: ["Python", "Optimization", "OR", "Analytics"],
    link: null,
    linkLabel: null,
    ref: "MCA · Osmania University",
  },
  {
    title: "Phishing URL detector",
    description:
      "Web application that classifies phishing URLs with machine learning—URL pattern preprocessing and malicious vs. safe labeling for practical security awareness.",
    tags: ["Python", "ML", "HTML/CSS", "MCA Project"],
    link: null,
    linkLabel: null,
    ref: "Major project · 2025",
  },
] as const;

export const education = {
  degree: "Master of Computer Applications (MCA)",
  school: "Osmania University",
  year: "2025",
  location: "Hyderabad, India",
} as const;

export const experience = [
  {
    period: "Jun 2025 — Present",
    title: "SAS Data Analyst Intern",
    org: "Object Technology Solutions Inc. (OTSI)",
    detail:
      "SAS analytics, data processing, and reporting across delivery tasks. Contributing to automation and quality checks for more consistent outputs, plus analytical work that supports decision-making and internal stakeholders.",
  },
  {
    period: "Feb 2023 — Apr 2023",
    title: "SAS Programming / Data Analytics Intern",
    org: "Object Technology Solutions Inc. (OTSI)",
    detail:
      "Supported SAS-based data preparation, querying, and reporting. Cleaned, validated, and organized data for analysis and delivery; debugged and improved analytical scripts for smoother execution.",
  },
  {
    period: "2025",
    title: "MCA — Master of Computer Applications",
    org: "Osmania University, Hyderabad",
    detail:
      "Hands-on projects across Python, SAS, and data tooling—automation, forecasting, optimization, and ML. Major deliverables include petroleum logistics optimization and a phishing URL classifier.",
  },
] as const;

export const sections = {
  skills: {
    label: "02 — Stack",
    title: "Tools I work with daily",
    subtitle:
      "Enterprise analytics on SAS Viya, EG, DI Studio, VA, Visual Investigator, and SMC—plus Python, SQL, and Power BI for automation and extended analysis.",
  },
  projects: {
    label: "03 — Projects",
    title: "Things I have built",
    subtitle:
      "GitHub link for the SAS Viya MCP project only—other builds are documented here without live demos.",
  },
  experience: {
    label: "04 — Experience",
    title: "Where I have grown",
    subtitle:
      "Internships at OTSI plus academic projects in enterprise analytics, data management, and process automation.",
  },
  contact: {
    label: "05 — Contact",
    title: "Let's connect",
    subtitle:
      "Open to data analyst roles, SAS analytics opportunities, and collaborations across Hyderabad, remote, or hybrid.",
  },
} as const;

// Trigger build

