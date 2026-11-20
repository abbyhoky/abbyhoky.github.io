export type ResearchItem = {
  slug: string; title: string; area: string[]; status: string; year: string;
  summary: string; overview: string; questions: string[]; methodology: string[];
  contributions: string[]; role: string[]; skills: string[]; outputs: string[];
};
export const research: ResearchItem[] = [
  {
    slug: "ai-tutors-shadow-education",
    title: "AI Tutors and Shadow Education",
    area: ["Human-AI Interaction", "AI in Education"],
    status: "Accepted at ICEEL 2026",
    year: "2025–2026",
    summary: "A qualitative study of students’ attitudes and learning practices with AI and human private tutors in HKDSE English writing preparation.",
    overview: "This study investigates how secondary students in Hong Kong understand and use AI tutors alongside human private tutors when preparing for HKDSE English writing. It considers how learners describe the roles, affordances and limits of each form of support.",
    questions: [
      "How do students describe their experiences of using generative AI and human private tutors for HKDSE English writing preparation?",
      "How do students compare the support, trust and learning value offered by AI and human tutors?",
      "What do these practices suggest about AI literacy and the changing role of supplementary tutoring?"
    ],
    methodology: ["Semi-structured interviews with secondary school students.", "Qualitative thematic analysis informed by a Human-AI Interaction perspective."],
    contributions: ["Examines how students position AI tutors in relation to established shadow-education practices.", "Offers a learner-centred perspective on AI adoption, tutoring roles and AI literacy."],
    role: ["Designed and conducted semi-structured interviews.", "Analysed interview data through thematic analysis.", "Developed the study as a master’s thesis."],
    skills: ["Interview design", "Thematic analysis", "Human-AI Interaction", "Qualitative research", "Academic writing"],
    outputs: ["Full paper accepted for presentation and publication at ICEEL 2026. Full bibliographic details to be added when available."]
  },
  {
    slug: "vr-fire-safety-training",
    title: "Understanding Hong Kong Ethnic Minority Perspectives on VR-based Fire Safety Training",
    area: ["Human-Computer Interaction", "Inclusive Learning"],
    status: "CHI 2026 submission",
    year: "2025",
    summary: "Explores whether VR can support more culturally accessible fire-safety training for ethnic minority communities in Hong Kong.",
    overview: "This research investigates the inclusivity of fire-safety training for ethnic minority communities in Hong Kong, examining virtual reality as a potentially culturally accessible training medium.",
    questions: [
      "How do ethnic minority participants perceive VR-based fire-safety training?",
      "What barriers and acceptance factors shape engagement with this learning medium?",
      "How might safety-training technologies better account for cultural and linguistic diversity?"
    ],
    methodology: ["Qualitative interviews and focus-group data.", "Thematic analysis and qualitative coding to identify perceptions, barriers and technology-acceptance factors."],
    contributions: ["Synthesises perspectives related to cultural inclusivity, usability and engagement.", "Contributes design recommendations for inclusive safety-training technologies for diverse communities."],
    role: ["Contributed to qualitative coding and thematic analysis.", "Collaborated on synthesising findings concerning cultural inclusivity, usability and user engagement."],
    skills: ["Qualitative coding", "Thematic analysis", "HCI research", "Inclusive design", "Research synthesis"],
    outputs: ["Co-authored full paper submitted to CHI 2026. Submission status should be updated when the decision is public."]
  },
  {
    slug: "active-ai-content-farms",
    title: "The Age of Active AI-driven Content Farm",
    area: ["Internet Governance", "AI Ethics", "Human-Computer Interaction"],
    status: "CHI Workshop submission",
    year: "2024",
    summary: "Investigates AI-generated content farms, SEO manipulation and the risks they pose to information ecosystems and machine-learning datasets.",
    overview: "The project examines how AI-generated content farms use search-engine optimisation and traffic monetisation strategies, and how large-scale low-quality content may affect search integrity and machine-learning data quality.",
    questions: [
      "How do AI-driven content farms produce and monetise large volumes of SEO-oriented content?",
      "What risks do these practices pose to search quality, information ecosystems and training datasets?",
      "Which technical and governance interventions may help mitigate these risks?"
    ],
    methodology: ["Analysis of SEO manipulation techniques and traffic-monetisation strategies.", "Exploration of technical and regulatory responses through research and policy review."],
    contributions: ["Frames content farms as an information-governance and data-quality challenge.", "Explores algorithmic filtering, content provenance and machine-unlearning approaches as possible interventions."],
    role: ["Contributed to investigation of AI-generated low-quality content and its ecosystem-level risks.", "Analysed mitigation approaches and supported the workshop-paper contribution."],
    skills: ["Internet governance", "Policy review", "AI ethics", "Research synthesis", "Technical analysis"],
    outputs: ["Contributed to a workshop paper submitted to the CHI 2025 Workshop. Confirm final publication details before listing."]
  }
];

export type ProjectItem = {
  slug: string; title: string; subtitle: string; year: string; tags: string[];
  summary: string; overview: string; problem: string; solution: string;
  stack: string[]; contributions: string[]; process: string[]; lessons: string[]; outcomes: string[];
};
export const projects: ProjectItem[] = [
  {
    slug: "clone-your-teacher", title: "Clone Your Teacher", subtitle: "AI teacher in a 3D metaverse learning environment", year: "2026",
    tags: ["AI in Education", "Unity", "Generative AI"],
    summary: "An AI-powered educational platform exploring personalised learning and conversational support in an immersive environment.",
    overview: "Clone Your Teacher explores how conversational AI can support personalised learning and student engagement in a 3D learning environment.",
    problem: "Learners may need timely, responsive support beyond the moments when a teacher is available. The project explores how an AI-mediated learning experience might address that need while keeping learner needs central.",
    solution: "A prototype learning platform combining a 3D environment with conversational AI functionality and adaptive feedback.",
    stack: ["Unity", "C#", "Generative AI"],
    contributions: ["Designed and developed the educational platform.", "Conducted user research and prototype testing to identify learner needs.", "Implemented conversational AI functionality for feedback and learning support."],
    process: ["Learner-needs research", "Prototype design and development", "Conversational AI integration", "Prototype testing and refinement"],
    lessons: ["The quality of an AI learning experience depends on the interaction design around the model, not only the model response.", "Prototype testing helps expose where learners need clearer guidance and feedback."],
    outcomes: ["Developed an AI-powered educational prototype. Add evaluation results, screenshots and a public demo link when cleared for release."]
  },
  {
    slug: "undaunted", title: "Undaunted", subtitle: "3D local multiplayer party game", year: "2023–present",
    tags: ["Game Development", "Unity", "Blender"],
    summary: "A 3D local multiplayer party game designed for up to four concurrent players and public showcase.",
    overview: "Undaunted is a 3D local multiplayer party game developed through interdisciplinary collaboration across design, programming and art.",
    problem: "The project set out to create an accessible shared-play experience that encourages social interaction among players in the same space.",
    solution: "A collection of multiplayer gameplay systems designed to support up to four concurrent local players.",
    stack: ["Unity", "C#", "Blender"],
    contributions: ["Produced and coordinated development of the game.", "Managed collaboration across design, programming and art teams.", "Designed and implemented gameplay systems to support engagement and social interaction."],
    process: ["Gameplay concept and prototyping", "Interdisciplinary production planning", "Systems implementation", "Showcase preparation and iteration"],
    lessons: ["Multiplayer game development requires clear communication across disciplines.", "Public showcases provide valuable opportunities to observe how people approach shared play."],
    outcomes: ["Invited to showcase at the Digital Entertainment Leadership Forum 2024 (Cyberport Hong Kong), Innovation@Community Carnival and SIG Playful Media Showcase 2024."]
  },
  {
    slug: "songs-of-sugar", title: "Songs of Sugar", subtitle: "AR educational mobile experience", year: "2023",
    tags: ["Augmented Reality", "Educational Media", "Unity"],
    summary: "An AR mobile experience created for the University of Edinburgh’s Living Histories of Sugar research.",
    overview: "Songs of Sugar is an AR educational mobile experience developed in connection with the University of Edinburgh’s Living Histories of Sugar research project.",
    problem: "The project explored how an interactive mobile experience could make research themes more engaging and accessible to audiences.",
    solution: "An AR experience with user-centred interfaces and interaction flows designed to support learning engagement.",
    stack: ["Unity", "Figma"],
    contributions: ["Designed UX/UI for the AR mobile experience.", "Created user-centred interfaces and interaction flows.", "Collaborated with teams from Abertay University and Outplay Entertainment.", "Conducted user testing and iterative design improvements."],
    process: ["Experience and interaction planning", "UX/UI design", "Cross-disciplinary development collaboration", "User testing and iteration"],
    lessons: ["AR experiences need clear interaction cues and accessible flows.", "Testing with users helps connect the intended learning experience with real use."],
    outcomes: ["Developed during an undergraduate visiting-student placement at Abertay University. Add project imagery and demo details when available."]
  },
  {
    slug: "web-of-lies", title: "Web of LIES", subtitle: "Visual novel game-based anti-scam learning framework", year: "2025",
    tags: ["Game-based Learning", "Unity", "C#"],
    summary: "A branching-narrative framework that teaches anti-scam awareness to non-local university students in Hong Kong.",
    overview: "Web of LIES is an interactive game-based learning framework using branching narratives to teach anti-scam awareness.",
    problem: "Scam-awareness instruction can benefit from opportunities to practise recognising suspicious situations and discussing decisions in a low-risk environment.",
    solution: "A visual-novel framework that combines branching narratives, real-time voting and collaborative storytelling for classroom participation.",
    stack: ["Unity", "C#"],
    contributions: ["Designed and delivered the interactive framework.", "Created branching narrative structures.", "Integrated real-time voting and collaborative storytelling mechanics."],
    process: ["Learning-framework design", "Narrative and interaction prototyping", "Unity implementation", "Classroom interaction planning"],
    lessons: ["Narrative choices can make abstract risk scenarios more concrete.", "Collaborative voting can turn individual judgement into a discussion opportunity."],
    outcomes: ["Delivered an interactive framework for anti-scam awareness among non-local university students in Hong Kong."]
  },
  {
    slug: "tutordeo", title: "Tutordeo", subtitle: "Peer-learning educational platform", year: "2021–2022",
    tags: ["Product Design", "User Research", "Figma"],
    summary: "A peer-learning platform concept that enables children to learn from and teach one another.",
    overview: "Tutordeo is an educational platform concept focused on reciprocal peer learning among children.",
    problem: "The project explored how a digital product might help children participate in learning as both learners and peer explainers.",
    solution: "A product concept and prototype shaped through ideation, UX design and user research.",
    stack: ["Product Design", "User Research", "Figma"],
    contributions: ["Contributed as a core team member.", "Supported product ideation and user-experience design.", "Helped develop the platform from concept to prototype.", "Collaborated on product requirements and engagement strategies."],
    process: ["Product ideation", "User research", "UX design and prototyping", "Cross-functional refinement"],
    lessons: ["Peer-learning products need to support both sides of the learning relationship.", "Early product decisions benefit from grounding in user needs."],
    outcomes: ["Project supported by HK Tech 300 and the Hong Kong Science and Technology Parks Ideation Programme."]
  }
];

export const talks = [
  { event: "Game Development Talk Series", role: "Invited Speaker", audience: "Educators, researchers and students", summary: "Discussed educational applications of games and interactive media with Professor Jussi Pekka Holopainen.", year: "2025" },
  { event: "Youth, AI and the Power of Co-creation", role: "Invited Speaker · Microsoft Student Ambassador", audience: "Public and student audiences", summary: "Shared perspectives on youth engagement with AI, digital creativity, AI literacy and responsible AI use.", year: "2026" },
  { event: "Hong Kong International Visual Arts Education Symposium", role: "Trilingual Programme Facilitator & Teaching Assistant", audience: "Symposium participants and workshop learners", summary: "Facilitated an AI in game development workshop in English, Cantonese and Mandarin.", year: "2026" },
  { event: "AI GameMakers Program", role: "Instructor", audience: "Student participants in Shanghai", summary: "Delivered hands-on training in AI and game development through the Arts Technology Lab, HKU.", year: "2025–present" },
  { event: "Tech Titan HK", role: "STEM Tutor", audience: "Primary and secondary students (Grades 1–10)", summary: "Teach programming, robotics, design and technology through project-based and interactive learning approaches.", year: "2024–present" }
];

export const currentResearch = [
  { title: "Understanding Generative AI as a Design Material", description: "A funded project exploring generative AI through speculative design research and its use as a material for design practice." },
  { title: "Responsible Adoption and Regulation of Generative AI", description: "A funded project examining responsible adoption and the regulation of generative AI, including questions relevant to professional and legal contexts." },
  { title: "Human-AI Collaboration and Agency Research", description: "A mixed-methods study investigating collaborative control, agency and embodied learning." }
];
