// Central config: edit text, links and paths here. No other file holds personal content.

export const portfolio = {
  name: "Muhammad Awais",
  monogram: "MA.",
  headline: "Aspiring SOC Analyst (Blue Team) | BS IT Student | Full-Stack Developer",
  tagline: "[ 01 — ARCHITECTING DIGITAL DEFENSES & SYSTEMS ]",
  statement:
    "Aspiring SOC Analyst & Full-Stack Developer bridging secure infrastructure design at the University of Agriculture, Faisalabad.",
  location: "Faisalabad, Punjab, Pakistan",
  status: "Faisalabad, PK • Active Lab",
  phone: "+92 349 2344361",
  phoneHref: "https://wa.me/923492344361",
  email: "mymail03235@gmail.com",
  github: "https://github.com/iawaish1272-rgb",
  // TODO: replace with your real LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/muhammad-awais",
  photo: "/images/profile.jpg",
  cv: {
    href: "/cv/Muhammad_Awais_CV_Cybersecurity.pdf",
    fileName: "Muhammad_Awais_CV_Cybersecurity.pdf",
  },
  nav: [
    { label: "Index", href: "#index" },
    { label: "Expertise", href: "#expertise" },
    { label: "Selected Works", href: "#works" },
    { label: "Chronicle", href: "#chronicle" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Skill = { name: string; note: string };
export type Discipline = { id: string; label: string; intro: string; skills: Skill[] };

export const expertise: Discipline[] = [
  {
    id: "soc",
    label: "Security Operations",
    intro:
      "Blue Team practice built in a home lab: read the alert, gather evidence, decide, and write it up clearly.",
    skills: [
      { name: "Alert Triage", note: "True/false positive analysis with incident notes." },
      { name: "Incident Investigation", note: "Evidence from logs, IOC lookups on IP, domain and hash." },
      { name: "Splunk", note: "SPL searches, stats, time-based charts and dashboards." },
      { name: "Wazuh SIEM", note: "Open-source SIEM, explored hands-on (basics)." },
      { name: "Wireshark", note: "Display filters, Follow TCP Stream, packet analysis." },
      { name: "Nmap Recon", note: "Service/version detection, scripts, OS detection, SYN scans." },
      { name: "Windows Server & Active Directory", note: "Domain controller, OUs, groups, Group Policy." },
      { name: "NIST Incident Lifecycle", note: "Structured response workflow; MITRE ATT&CK (intro)." },
    ],
  },
  {
    id: "dev",
    label: "Full-Stack Engineering",
    intro:
      "Building web applications end to end, which makes web application security easier to reason about.",
    skills: [
      { name: "MERN Stack", note: "MongoDB, Express.js, React.js and Node.js." },
      { name: "RESTful APIs", note: "Products, users and orders with full CRUD." },
      { name: "Google Gemini AI", note: "AI-driven feature integrated into an e-commerce app." },
      { name: "Python & Bash Automation", note: "TCP port scanner (socket) and system information script." },
      { name: "Git & GitHub", note: "Version control, VS Code, Postman workflow." },
      { name: "Responsive Tailwind UI", note: "React.js, HTML5, CSS3, Tailwind CSS, Bootstrap." },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  kind: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "soc-lab",
    title: "Home SOC Lab",
    kind: "Splunk & Wazuh",
    summary: "Custom log ingestion, SPL query metrics and a threat telemetry dashboard.",
    stack: ["Splunk Free", "Wazuh", "Linux logs"],
    highlights: [
      "Loaded Linux logs and sample data into Splunk Free.",
      "Wrote SPL searches: keyword filters, stats and time-based charts.",
      "Built a Splunk dashboard to monitor the data.",
      "Explored Wazuh as an open-source SIEM.",
    ],
  },
  {
    id: "wireshark",
    title: "Wireshark Network Traffic & Credential Lab",
    kind: "Packet analysis",
    summary: "Kali Linux packet capture and a demonstration of unencrypted HTTP risk.",
    stack: ["Wireshark", "Kali Linux", "VirtualBox"],
    highlights: [
      "Captured live traffic in a Kali VM.",
      "Used display filters (http, dns, ip.addr) and Follow TCP Stream.",
      "Showed on a purpose-built test site why unencrypted HTTP exposes login data.",
    ],
  },
  {
    id: "mern",
    title: "MERN Stack E-Commerce Engine + Gemini AI",
    kind: "Full-stack",
    summary: "Product CRUD architecture paired with an AI-driven feature.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Gemini API"],
    highlights: [
      "RESTful APIs for products, users and orders with full CRUD.",
      "Responsive React.js and Tailwind CSS interface.",
      "Google Gemini API integrated for an AI-driven feature.",
    ],
  },
  {
    id: "tryhackme",
    title: "TryHackMe Incident Response Triage",
    kind: "Alert investigation",
    summary: "Structured alert scoping, IOC reputation lookups and verdict reporting.",
    stack: ["TryHackMe", "IOC lookups", "NIST lifecycle"],
    highlights: [
      "Understand the alert and what triggered it.",
      "Gather evidence from logs.",
      "Check IP, domain and hash reputation.",
      "Decide true or false positive.",
      "Write an incident note with the verdict.",
    ],
  },
  {
    id: "ad-lab",
    title: "Windows Server 2022 Active Directory Lab",
    kind: "Enterprise infrastructure",
    summary: "A VirtualBox domain with a domain controller, OUs and group policy.",
    stack: ["Windows Server 2022", "Active Directory", "VirtualBox"],
    highlights: [
      "Built a Windows Server 2022 domain with a domain controller.",
      "Created organizational units, users and security groups.",
      "Applied basic Group Policy.",
    ],
  },
];

export const experience = [
  {
    role: "Sales Agent",
    org: "UK-Based Company (Remote / Call Centre)",
    period: "3 months",
    points: [
      "Outbound calls to UK business owners presenting Dojo card payment solutions, handling questions and objections in professional English.",
      "Met daily outreach targets and kept accurate call and lead records.",
      "Built the habit of calm, clear communication under pressure, which carries into incident handling.",
    ],
  },
  {
    role: "Science Teacher (Biology)",
    org: "Start Science Academy",
    period: "3 months",
    points: [
      "Taught Biology to 9th and 10th grade with lesson plans, assessments and doubt-clearing sessions.",
      "Explained complex topics with diagrams and real-life examples, the same approach used to explain technical topics simply.",
    ],
  },
];

export const education = [
  { title: "BS Information Technology", org: "University of Agriculture, Faisalabad (UAF)", period: "2024 – 2028 (in progress)" },
  { title: "Intermediate (Pre-Medical)", org: "Govt. Boys Associate College", period: "2024" },
  { title: "Matriculation (Science)", org: "Govt. Boys High School", period: "2022" },
];

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
];
