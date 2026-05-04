export const site = {
  name: "DreamStarters International School",
  shortName: "DreamStarters",
  tagline: "Together we build the future",
  location: "Trivandrum, Kerala",
  phone: "+91 77336 495754",
  email: "info@dreamstarters.school",
  description:
    "Premium experiential learning school focusing on AI, robotics, leadership and real-world skills.",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/dreamstarters.school" },
    { label: "Facebook", href: "https://www.facebook.com/share/1CbinFRoMU/?mibextid=wwXIfr" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "YouTube", href: "https://www.youtube.com/@dreamstarters_school?si=OJbarL9wUGslZoGr" }
  ]
};

export const navItems = [
  { label: "About", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "iPlay", href: "/programs/iplay" },
      { label: "iDiscover", href: "/programs/idiscover" },
      { label: "iLead", href: "/programs/ilead" }
    ]
  },
  { label: "Personalisation", href: "/personalisation" },
  { label: "Schools", href: "/schools" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const heroSlides = [
  {
    eyebrow: "DreamStarters Learning Journey",
    title: "From First Steps to Future Leaders",
    subtitle: "Where Learning Meets Life",
    image: "/images/new/games.jpeg",
    href: "/programs"
  },
  {
    eyebrow: "Experiential Learning",
    title: "Children Learn by Doing, Building and Discovering",
    subtitle: "Projects, visits, hands-on activities and guided self-exploration.",
    image: "/images/new/lunch.jpeg",
    href: "/personalisation"
  },
  {
    eyebrow: "Future-Ready Education",
    title: "From the Right Age",
    subtitle: "A complete pathway for confident communicators and independent learners.",
    image: "/images/new/chess2.jpeg",
    href: "/admissions"
  }
];

export const programs = [
  {
    slug: "iplay",
    title: "iPlay",
    subtitle: "PreKG - Grade 2",
    ages: "2 to 7.5 years",
    image: "/images/new/games.jpeg",
    href: "/programs/iplay",
    summary:
      "A research-backed early years program focused on brain development, phonics, languages, numeracy, science, arts, sport and early technology.",
    highlights: [
      "Brain development in the crucial first eight years",
      "Phonics, English, Malayalam, Hindi, mathematics and science",
      "Abacus, chess, Rubik's cube, vertical coding, AI basics and robotics",
      "Karate, swimming, biking, music, dance and multi-sport exposure"
    ],
    outcomes: [
      "Confident school performers",
      "Strong foundational readers",
      "Early logical thinkers",
      "Future-ready young leaders"
    ]
  },
  {
    slug: "idiscover",
    title: "iDiscover",
    subtitle: "Grade 3 - Grade 7",
    ages: "7.5 to 12.5 years",
    image: "/images/new/chess2.jpeg",
    href: "/programs/idiscover",
    summary:
      "A project-based middle years pathway where learners complete authentic projects across carpentry, design, farming, robotics, engineering, healthcare and more.",
    highlights: [
      "30-40 real-world projects across multiple domains",
      "Meetings with experts, professionals and field mentors",
      "Personalised textbooks for mastery in maths and English",
      "Self-learning routines that build independence and teamwork"
    ],
    outcomes: [
      "Independent self-learners",
      "Collaborative project makers",
      "Critical and creative thinkers",
      "Students who discover their passions"
    ]
  },
  {
    slug: "ilead",
    title: "iLead",
    subtitle: "Grade 8 - Grade 12",
    ages: "12.5 to 17.5 years",
    image: "/images/new/pc.jpeg",
    href: "/programs/ilead",
    summary:
      "A senior pathway that helps learners prepare for careers through Cambridge subject choices, mentorship, internships, portfolios and entrance preparation.",
    highlights: [
      "Career pathways across 18 fields",
      "Cambridge subjects, portfolios and statement-of-purpose guidance",
      "Mentored self-learning courses and real-life projects",
      "Internships, competitions, hackathons and innovation challenges"
    ],
    outcomes: [
      "Career-aware learners",
      "Portfolio-ready applicants",
      "Advanced problem solvers",
      "Future entrepreneurs and innovators"
    ]
  }
];

export const storyPoints = [
  {
    title: "Born from a real family need",
    text:
      "DreamStarters began with the founder's inspiration from a young nephew who, despite being loved, often felt lonely in a small family setup. The vision became clear: create a school where no child feels alone."
  },
  {
    title: "A second home for children",
    text:
      "The school is designed as a place of laughter, friendship, development and discovery, where children grow confident, curious and happy alongside peers of the same age."
  },
  {
    title: "Experiential by design",
    text:
      "Learning blends academics, creative arts, martial arts, sports and brain-development programs so children understand how, why and where knowledge applies in life."
  },
  {
    title: "Future-ready from the early years",
    text:
      "AI, coding, robotics, abacus, chess, entrepreneurship basics and leadership experiences help learners prepare for a fast-changing world."
  }
];

export const experientialCards = [
  {
    title: "Learning Through Projects",
    text: "Age-appropriate projects build creativity, teamwork and real understanding of concepts."
  },
  {
    title: "Real-World Exposure",
    text: "Visits, outdoor experiences and expert interactions connect classroom learning to life."
  },
  {
    title: "Hands-On Learning",
    text: "Practical activities make learning active, memorable and deeply engaging."
  },
  {
    title: "Self Exploration",
    text: "Children are encouraged to think, question and discover solutions independently."
  }
];

export const whyChoose = [
  {
    title: "Confident communicators",
    text: "Strong phonics, multilingual exposure and presentation opportunities help children express themselves clearly."
  },
  {
    title: "Independent learners",
    text: "Personalised learning plans and self-learning habits help children plan, practise and progress."
  },
  {
    title: "Problem solvers",
    text: "Projects, robotics, coding, maths applications and field challenges build analytical confidence."
  },
  {
    title: "Future-ready individuals",
    text: "Leadership, life skills, technology and wellbeing prepare children for school, career and life."
  }
];

export const learningJourney = [
  {
    stage: "Infants",
    age: "Up to 1 year",
    focus: "Care, comfort and sensory development",
    transformation: "From dependency to emotional security and awareness"
  },
  {
    stage: "Wobblers",
    age: "1 - 2 years",
    focus: "Exploration, movement and early communication",
    transformation: "From observation to active exploration and first expressions"
  },
  {
    stage: "Toddlers",
    age: "2 - 3 years",
    focus: "Communication, social skills and routine building",
    transformation: "From basic speech to confident bonding"
  },
  {
    stage: "iPlay I",
    age: "3 - 4 years",
    focus: "Pre-KG foundation, creativity and confidence",
    transformation: "From play to purposeful learning"
  },
  {
    stage: "iPlay II",
    age: "4 - 5 years",
    focus: "LKG concept clarity, languages, maths, science and IT awareness",
    transformation: "From understanding to structured thinking"
  },
  {
    stage: "iPlay III",
    age: "5 - 6 years",
    focus: "UKG readiness with abacus, chess, Rubik's cube and coding",
    transformation: "From guided learners to independent thinkers"
  },
  {
    stage: "iPlay IV",
    age: "6 - 7 years",
    focus: "Grade 1 academics with robotics, AI basics, programming and karate",
    transformation: "From learners to confident school performers"
  },
  {
    stage: "iPlay V",
    age: "7 - 8 years",
    focus: "Grade 2 leadership, life skills, swimming, biking and money basics",
    transformation: "From confident students to future-ready leaders"
  }
];

export const eightCs = [
  "Communication Skills",
  "Complex Problem Solving",
  "Critical and Lateral Thinking",
  "Creativity",
  "Continuous Learning",
  "Change Adaptability",
  "Collaboration",
  "Confidence"
];

export const admissionSteps = [
  {
    step: "01",
    title: "Understand the DreamStarters system",
    text: "Explore the curriculum, learning model and program pathway to understand how the school works."
  },
  {
    step: "02",
    title: "Visit us",
    text: "Schedule a one-on-one session with the team to discuss curriculum, campus facilities and available locations."
  },
  {
    step: "03",
    title: "Get to know the child",
    text: "The team meets your child to understand interests, comfort, readiness and learning needs."
  },
  {
    step: "04",
    title: "Admission decision",
    text: "After the interaction, the school confirms the admission decision within a week."
  },
  {
    step: "05",
    title: "Submit the application",
    text: "Complete the digital admission form and share required documents to confirm the seat."
  }
];

export const schoolFeatures = [
  {
    title: "Six iPlay schools",
    text: "PreKG to Grade 2 locations across Trivandrum for easier access in the early years."
  },
  {
    title: "Main campus",
    text: "A serene, spacious campus designed for labs, dance, music, play and project-based learning."
  },
  {
    title: "20 learning modalities",
    text: "Spaces planned around personalised learning and different modes of exploration."
  },
  {
    title: "Transport and care",
    text: "Air-conditioned transport with app-style tracking and lady support staff."
  },
  {
    title: "Healthy food",
    text: "Balanced snacks and lunch are provided so families start mornings with less stress."
  },
  {
    title: "Safe environment",
    text: "A secure, hygienic and caring space where children can thrive."
  }
];

export const careers = [
  {
    title: "iTeach Teacher Training and Hiring Program",
    text:
      "A fast-paced training pathway for freshers, early-career educators and career changers who are passionate about child development, learning and teaching."
  },
  {
    title: "Live classroom experience",
    text:
      "Participants receive guided sessions, live classes, mentor interaction and approximately 250-300 hours of classroom training."
  },
  {
    title: "Who excels",
    text:
      "Problem solvers, proactive self-learners, team players and strong communicators who can take feedback and act professionally."
  }
];

export const faqs = [
  {
    question: "What makes DreamStarters different from ordinary schools?",
    answer:
      "DreamStarters combines personalised learning plans, project-based learning, innovation-based learning, brain-development programs, arts, sports and future skills such as AI, coding and robotics."
  },
  {
    question: "What are the three main programs?",
    answer:
      "iPlay covers PreKG to Grade 2, iDiscover covers Grade 3 to Grade 7, and iLead covers Grade 8 to Grade 12."
  },
  {
    question: "Why does DreamStarters focus so much on early years?",
    answer:
      "The first eight years are crucial for confidence, personality and brain development. DreamStarters uses play, language, movement, academics and hands-on learning at the right stages."
  },
  {
    question: "Does the school teach AI, coding and robotics?",
    answer:
      "Yes. These are introduced in age-appropriate ways, beginning with early digital awareness and progressing into coding, AI basics, robotics and programming."
  },
  {
    question: "How does admission work?",
    answer:
      "Families first understand the school model, visit the campus, meet the team, complete a child interaction and then submit the digital application after the admission decision."
  },
  {
    question: "Is food included?",
    answer:
      "The school provides balanced snacks and lunch, reducing the morning burden on families while supporting child wellbeing."
  }
];

export const galleryItems = [
  {
    title: "Early years exploration",
    image: "/images/program-iplay.png",
    text: "Play, movement and sensory discovery."
  },
  {
    title: "Project studios",
    image: "/images/program-idiscover.png",
    text: "Learners build, test and present ideas."
  },
  {
    title: "Leadership pathway",
    image: "/images/program-ilead.png",
    text: "Mentorship, portfolios and future pathways."
  },
  {
    title: "Arts and sports",
    image: "/images/foundation-arts-sports.png",
    text: "Dance, music and multi-sport foundations."
  }
];
