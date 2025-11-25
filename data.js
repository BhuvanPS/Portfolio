const personalDetails = {
    name: "Bhuvan Subramani",
    brand: "Bhuvan.dev",
    title: "Bhuvan Subramani - Data Science & Software Engineering Portfolio",
    metaDescription: "Bhuvan Subramani - Data Scientist, AI/ML Engineer & Flutter Developer specializing in data analytics, machine learning, and mobile app development.",
    about: "Transforming data into actionable insights and building intelligent applications that solve real-world problems",
    socialLinks: [
        { url: "https://github.com/BhuvanPS", icon: "fa-brands fa-github", label: "GitHub Profile" },
        { url: "https://www.linkedin.com/in/bhuvan-ps", icon: "fa-brands fa-linkedin", label: "LinkedIn Profile" }
    ],
    resume: {
        url: "/Resume.pdf",
        filename: "Bhuvan_Purushothaman_Subramani_Resume.pdf"
    },
    profileImage: "avatar.webp",
    metrics: [
        { value: "8+", label: "End-to-End Projects" },
        { value: "5000+", label: "Active Users Impacted" },
        { value: "10+", label: "Data Pipelines Built" },
        { value: "5+", label: "Data Visualizations" }
    ],
    aboutLong: [
        "I'm <span class=\"font-semibold text-indigo-600 dark:text-indigo-400\">Bhuvan Purushothaman Subramani</span>, a Data Scientist and Software Engineer who transforms complex data into scalable solutions. I've delivered <span class=\"font-semibold\">$15M+ in business impact</span>, built systems serving <span class=\"font-semibold\">5,000+ users</span>, and architected ML pipelines achieving <span class=\"font-semibold\">85%+ accuracy</span> across healthcare, finance, and retail.",
        "What sets me apart? I bridge the gap between cutting-edge AI research and production-ready applications—from real-time analytics on Microsoft Fabric to AI-powered mobile apps on Google Play. Currently pursuing my <span class=\"font-semibold\">Master's in Data Science at Deakin University</span>, I don't just build models—I deliver measurable outcomes that drive revenue, reduce costs, and enhance user experiences."
    ],
    services: [
        { title: "Data Analysis & Visualization", desc: "Power BI dashboards, statistical analysis, and actionable business insights", icon: "fa-solid fa-chart-line" },
        { title: "Machine Learning & AI", desc: "Predictive modeling, Classification, Regression, and deep learning", icon: "fa-solid fa-brain" },
        { title: "Mobile App Development", desc: "Cross-platform Flutter apps with Firebase integration and AI features", icon: "fa-solid fa-mobile-alt" },
        { title: "Data Engineering", desc: "SQL optimization, data pipelines, and big data processing", icon: "fa-solid fa-database" }
    ],
    contact: {
        email: "psbhuvan2002@gmail.com",
        phone: "0451 412 465",
        linkedin: "linkedin.com/in/bhuvan-ps",
        linkedinUrl: "https://www.linkedin.com/in/bhuvan-ps",
        formAction: "https://formspree.io/f/mqanjrvw"
    }
};

const projects = [
    {
    "id": "hr-analytics-pro",
    "title": "Advanced HR Analytics Pro",
    "description": [
        "Built an enterprise-grade HR Analytics platform delivering real-time KPIs (attrition rate, satisfaction scores, cost metrics) with trend analysis for executive decision-making.",
        "Designed interactive workforce overview with demographic pyramids, age/gender distribution, and role analytics to optimize talent allocation.",
        "Delivered comprehensive compensation analysis featuring salary benchmarks, pay equity insights, and income-vs-experience trends to ensure competitive positioning.",
        "Created deep-dive attrition analysis with correlation matrices and retention factor identification, uncovering actionable drivers of employee turnover.",
    ],
    "image": "https://placehold.co/400x300/3B82F6/FFFFFF?text=HR+Analytics+Dashboard",
    "tags": ["R Shiny", "Machine Learning", "Predictive Analytics", "Data Visualization", "Plotly"],
    "category": ["data", "ml-ai"],
    "metrics": [
        "Real-time Risk Scoring",
        "Interactive Dashboard"
    ],
    "link": "https://bhuvanps.github.io/Portfolio/HR_Analysis/"
},
    {
        "id": "hyperscale-retail-command-center",
        "title": "HyperScale Retail Command Center",
        "description": [
            "Implemented end-to-end Real-Time Analytics on Microsoft Fabric, unifying historical sales and real-time order streams into a Medallion Architecture.",
            "Utilized PySpark for ETL and Facebook Prophet to generate accurate 30-day demand forecasts.",
            "Delivered stockout alerts in under one minute using Fabric Activator, enabling immediate business action."
        ],
        "image": "https://placehold.co/400x300/06B6D4/1E293B?text=Fabric+Command+Center",
        "tags": ["Microsoft Fabric", "PySpark", "Power BI", "Delta Lake", "Data Engineering"],
        "category": ["data", "ml-ai"],
        "metrics": [
            "Alert Latency < 1 Minute",
            "30 Day Forecast"
        ],
        "link": "https://bhuvanps.github.io/Portfolio/Hyperscale/"
    },
    {
        id: 'bank-loan-analysis',
        title: 'Bank Loan Performance Analysis',
        description: [
            "Designed a three-tier Power BI dashboard to monitor $435.8M in loans.",
            "Implemented complex DAX measures for MTD/MoM tracking and performance analysis.",
            "Achieved 86.2% Good Loan rate by providing data-driven insights on risk exposure and debt consolidation strategy."
        ],
        image: 'https://placehold.co/400x300/6366F1/FFFFFF?text=Power+BI+Dashboard',
        tags: ['Power BI', 'DAX', 'Financial Analysis', 'KPIs'],
        category: ['data'],
        metrics: ['$435.8M Portfolio', '86.2% Success Rate'],
        link: 'https://bhuvanps.github.io/Portfolio/Loan_Analysis_Report/'
    },
    {
        id: 'fraud-detection',
        title: 'Financial Fraud Detection System',
        description: [
            "Built a Big Data Analytics solution in Python processing 1M nodes and 10M edges.",
            "Enhanced fraud detection accuracy by 15% and reduced false positives using advanced graph algorithms.",
            "Strengthened security measures by identifying complex fraud patterns in transaction networks."
        ],
        image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=Fraud+Detection',
        tags: ['Python', 'Big Data', 'Machine Learning', 'Graph Analytics'],
        category: ['ml-ai', 'data'],
        metrics: ['1M+ Nodes', '15% Accuracy Boost'],
        link: '#'
    },
    {
        id: 'liver-cirrhosis-prediction',
        title: 'Liver Cirrhosis Survival Prediction',
        description: [
            "Developed an SVC multiclass classification model predicting patient outcomes (Death, Transplant, No Transplant).",
            "Achieved 85.5% accuracy using feature engineering, class weighting, and cross-validation on clinical data.",
            "Provided critical insights for early medical intervention and resource allocation."
        ],
        image: 'https://placehold.co/400x300/EC4899/FFFFFF?text=Healthcare+ML',
        tags: ['Python', 'SVC', 'Healthcare', 'Classification'],
        category: ['ml-ai'],
        metrics: ['85.5% Accuracy', '3-Class Problem'],
        link: 'https://bhuvanps.github.io/Portfolio/prediction/'
    },
    {
        id: 'wine-quality-prediction',
        title: 'Wine Quality Prediction Model',
        description: [
            "Developed ML model in R comparing WAM, WPM, OWA, and Choquet Integral algorithms.",
            "Selected Choquet model as optimal after performing feature selection and skewness correction.",
            "Delivered comprehensive importance interpretation to understand key quality drivers."
        ],
        image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Wine+Quality+R',
        tags: ['R', 'Machine Learning', 'Feature Engineering'],
        category: ['ml-ai', 'data'],
        metrics: ['4 Models Compared', 'Feature Optimization'],
        link: '#'
    },
    {
        id: 'game-theory-solver',
        title: 'Game Theory Solver (R Shiny)',
        description: [
            "Created an interactive R Shiny application for solving two-player zero-sum games.",
            "Calculates optimal strategies (pure/mixed) and game values in real-time.",
            "Features a custom UI and educational content to demonstrate game theory concepts."
        ],
        image: 'https://placehold.co/400x300/3B82F6/FFFFFF?text=R+Shiny+App',
        tags: ['R Shiny', 'Game Theory', 'Optimization', 'Interactive UI'],
        category: ['data'],
        metrics: ['Real-time Solving', 'Interactive Dashboard'],
        link: '#'
    },
    {
        id: 'victoria-transit',
        title: 'Victoria Green Transit Strategy',
        description: [
            "Formulated a data-driven urban mobility strategy generating $15M in regenerative economy potential.",
            "Reduced environmental impact by 25% through smart infrastructure analysis and movement optimization.",
            "Proposed actionable steps for sustainable city planning and transit development."
        ],
        image: 'https://placehold.co/400x300/059669/FFFFFF?text=Transit+Strategy',
        tags: ['Data Analytics', 'Urban Planning', 'Sustainability'],
        category: ['data'],
        metrics: ['$15M Impact', '25% Emission Reduction'],
        link: '#'
    },
    {
        id: 'c-meds-app',
        title: 'C-Meds: AI Medication Reminder',
        description: [
            "Launched AI-powered Flutter app on Google Play, featuring custom reminders and medication tracking.",
            "Reduced prescription entry time by 90% via high-accuracy auto-scanner.",
            "Coordinated QA testing for multi-device reliability, ensuring a seamless user experience."
        ],
        image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=C-Meds+App',
        tags: ['Flutter', 'Dart', 'AI/ML', 'Firebase', 'Mobile'],
        category: ['mobile', 'ml-ai'],
        metrics: ['90% Time Saved', 'Cross-platform'],
        link: '#'
    },
    {
        id: 'e-cell-app',
        title: 'E-Cell Sastra Mobile Platform',
        description: [
            "Led development and Play Store launch, managing 1000+ event registrations.",
            "Implemented networking features that reduced manual communication by 40%.",
            "Achieved 500+ downloads and enhanced user engagement through a streamlined mobile interface."
        ],
        image: 'https://placehold.co/400x300/6366F1/FFFFFF?text=E-Cell+App',
        tags: ['Flutter', 'Dart', 'Firebase', 'Event Management'],
        category: ['mobile'],
        metrics: ['1000+ Registrations', '500+ Downloads'],
        link: '#'
    },
    {
        id: 'ai-appointment-booking',
        title: 'AI Appointment Booking System',
        description: [
            "Engineered AI-powered scheduling solution, improving booking efficiency by 20%.",
            "Streamlined processes with intuitive UI and seamless platform integration.",
            "Collaborated cross-functionally to ensure optimal deployment and user adoption."
        ],
        image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=AI+Booking',
        tags: ['AI', 'Flutter', 'System Integration', 'UX Design'],
        category: ['mobile', 'ml-ai'],
        metrics: ['20% Efficiency Gain', 'Cross-platform'],
        link: '#'
    }
];

const skillData = {
    'Languages & Frameworks': [
        { name: 'Flutter', iconClass: 'fa-brands fa-dev', color: 'blue-500' },
        { name: 'Dart', iconClass: 'fa-solid fa-code', color: 'blue-700' },
        { name: 'Python', iconClass: 'fa-brands fa-python', color: 'green-600' },
        { name: 'R', iconClass: 'fa-solid fa-chart-line', color: 'blue-600' },
        { name: 'HTML', iconClass: 'fa-brands fa-html5', color: 'orange-500' },
        { name: 'CSS', iconClass: 'fa-brands fa-css3-alt', color: 'blue-400' },
        { name: 'JavaScript', iconClass: 'fa-brands fa-js', color: 'yellow-500' },
    ],
    'Databases': [
        { name: 'Firebase', iconClass: 'fa-solid fa-fire', color: 'red-500' },
        { name: 'MongoDB', iconClass: 'fa-solid fa-leaf', color: 'gray-700' },
        { name: 'SQL', iconClass: 'fa-solid fa-database', color: 'blue-800' }
    ],
    'Tools & Platforms': [
        { name: 'Power BI', iconClass: 'fa-solid fa-chart-bar', color: 'yellow-600' },
        { name: 'Vertex AI', iconClass: 'fa-solid fa-brain', color: 'green-500' },
        { name: 'Git', iconClass: 'fa-solid fa-code-branch', color: 'gray-900' },
        { name: 'GitHub', iconClass: 'fa-brands fa-github', color: 'gray-700' },
        { name: 'Google Cloud', iconClass: 'fa-brands fa-google', color: 'blue-500' },
        { name: 'R Shiny', iconClass: 'fa-solid fa-chart-area', color: 'blue-600' },
        { name: 'API Development', iconClass: 'fa-solid fa-server', color: 'purple-500' },
    ],
    'Other Skills': [
        { name: 'Machine Learning', iconClass: 'fa-solid fa-robot', color: 'purple-600' },
        { name: 'Deep Learning', iconClass: 'fa-solid fa-brain', color: 'pink-600' },
        { name: 'Data Visualization', iconClass: 'fa-solid fa-chart-pie', color: 'blue-500' },
        { name: 'Statistical Analysis', iconClass: 'fa-solid fa-calculator', color: 'indigo-600' },
        { name: 'Feature Engineering', iconClass: 'fa-solid fa-sliders', color: 'green-600' },
        { name: 'Big Data Analytics', iconClass: 'fa-solid fa-database', color: 'purple-700' },
        { name: 'Project Management', iconClass: 'fa-solid fa-clipboard-list', color: 'indigo-500' },
        { name: 'Agile Methodologies', iconClass: 'fa-solid fa-redo-alt', color: 'pink-500' },
        { name: 'Communication', iconClass: 'fa-solid fa-comments', color: 'blue-400' },
        { name: 'Leadership', iconClass: 'fa-solid fa-users-cog', color: 'red-600' },
        { name: 'Critical Thinking', iconClass: 'fa-solid fa-brain', color: 'purple-500' },
        { name: 'Problem Solving', iconClass: 'fa-solid fa-lightbulb', color: 'yellow-500' },
        { name: 'Teamwork', iconClass: 'fa-solid fa-hands-helping', color: 'green-500' },
    ],
};

const journeyData = {
    experience: [
        {
            title: "AI Team Lead",
            company: "Gopher Industries, Melbourne",
            period: "06/2025 – Present",
            description: [
                "Led the development of synthetic data generation pipelines to support internal ML research and model validation",
                "Managed a small AI team and optimized data workflows for improved efficiency",
                "Improved dataset quality for downstream analytics and model training"
            ],
            highlights: [
                "Synthetic Data Generation",
                "Team Leadership",
                "ML Pipeline Optimization"
            ]
        },
        {
            title: 'Software Consultant (Remote)',
            company: 'RADSTEC, California',
            period: '05/2024 – 12/2024',
            description: [
                "Engineered AI appointment booking solution improving efficiency by 20%",
                "Collaborated cross-functionally for seamless integration with existing systems",
                "Optimized user experience through intuitive UI design"
            ],
            highlights: ['AI Integration', '20% Efficiency Boost', 'Cross-functional Leadership']
        },
        {
            title: 'Flutter Development Intern',
            company: 'CUROWEBS, Coimbatore',
            period: '01/2024 – 05/2024',
            description: [
                "Designed and launched C-Meds on Google Play Store",
                "Implemented AI auto-scanner reducing prescription entry time by 90%",
                "Coordinated QA testing for multi-device reliability"
            ],
            highlights: ['Play Store Launch', '90% Time Reduction', 'AI Implementation']
        },
        {
            title: 'Technical Coordinator',
            company: 'E-CELL SASTRA',
            period: '07/2023 – 12/2023',
            description: [
                "Led mobile app development achieving 500+ downloads",
                "Reduced manual communication by 40% through networking features",
                "Managed event registrations for 1000+ participants"
            ],
            highlights: ['500+ Downloads', '40% Communication Improvement', 'Team Leadership']
        }
    ],
    education: [
        {
            degree: 'Master of Data Science',
            institution: 'Deakin University, Melbourne',
            period: 'Present',
            description: 'Specializing in advanced analytics, machine learning, statistical methods, and data visualization.'
        },
        {
            degree: 'B.Tech (Hons) Computer Science & Engineering',
            institution: 'SASTRA Deemed University',
            period: 'Graduated 06/2024',
            description: 'CGPA: 8.62/10. Strong foundation in data structures, algorithms, and software engineering.'
        }
    ],
    certificates: [
        { name: 'Getting Started with Artificial Intelligence', issuer: 'IBM SkillsBuild' },
        { name: 'Industrial Internet Of Things', issuer: 'NPTEL' },
        { name: 'Privacy and Security in Online Social Media', issuer: 'NPTEL' },
        { name: 'Flutter and Dart', issuer: 'NPTEL' },
        { name: 'Deep Learning', issuer: 'NPTEL' }
    ]
};
// Freeze data objects to prevent accidental mutations
Object.freeze(personalDetails);
Object.freeze(projects);
Object.freeze(skillData);
Object.freeze(journeyData);
