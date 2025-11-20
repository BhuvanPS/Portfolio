const projects = [
    {
        id: 'bank-loan-analysis',
        title: 'Bank Loan Performance Analysis',
        description: 'Designed a three-tier Power BI dashboard monitoring $435.8M in loans. Implemented complex DAX measures for MTD/MoM tracking. Achieved 86.2% Good Loan rate with data-driven insights on risk exposure and debt consolidation strategy.',
        image: 'https://placehold.co/400x300/6366F1/FFFFFF?text=Power+BI+Dashboard',
        tags: ['Power BI', 'DAX', 'Financial Analysis', 'KPIs'],
        category: ['data'],
        metrics: ['$435.8M Portfolio', '86.2% Success Rate'],
        link: 'https://bhuvanps.github.io/Portfolio/Loan_Analysis_Report/'
    },
    {
        id: 'fraud-detection',
        title: 'Financial Fraud Detection System',
        description: 'Built a Big Data Analytics solution in Python processing 1M nodes and 10M edges. Enhanced fraud detection accuracy by 15%, reduced false positives, and strengthened security measures using advanced graph algorithms.',
        image: 'https://placehold.co/400x300/8B5CF6/FFFFFF?text=Fraud+Detection',
        tags: ['Python', 'Big Data', 'Machine Learning', 'Graph Analytics'],
        category: ['ml-ai', 'data'],
        metrics: ['1M+ Nodes', '15% Accuracy Boost'],
        link: '#'
    },
    {
        id: 'liver-cirrhosis-prediction',
        title: 'Liver Cirrhosis Survival Prediction',
        description: 'Developed an SVC multiclass classification model predicting patient outcomes (Death, Transplant, No Transplant). Achieved 85.5% accuracy using feature engineering, class weighting, and cross-validation on clinical data.',
        image: 'https://placehold.co/400x300/EC4899/FFFFFF?text=Healthcare+ML',
        tags: ['Python', 'SVC', 'Healthcare', 'Classification'],
        category: ['ml-ai'],
        metrics: ['85.5% Accuracy', '3-Class Problem'],
        link: 'https://bhuvanps.github.io/Portfolio/prediction/'
    },
    {
        id: 'wine-quality-prediction',
        title: 'Wine Quality Prediction Model',
        description: 'Developed ML model in R comparing WAM, WPM, OWA, and Choquet Integral algorithms. Selected Choquet model as optimal. Performed feature selection, skewness correction, and comprehensive importance interpretation.',
        image: 'https://placehold.co/400x300/10B981/FFFFFF?text=Wine+Quality+R',
        tags: ['R', 'Machine Learning', 'Feature Engineering'],
        category: ['ml-ai', 'data'],
        metrics: ['4 Models Compared', 'Feature Optimization'],
        link: '#'
    },
    {
        id: 'game-theory-solver',
        title: 'Game Theory Solver (R Shiny)',
        description: 'Interactive R Shiny application solving two-player zero-sum games. Calculates optimal strategies (pure/mixed) and game values. Features custom UI, educational content, and real-time payoff matrix analysis.',
        image: 'https://placehold.co/400x300/3B82F6/FFFFFF?text=R+Shiny+App',
        tags: ['R Shiny', 'Game Theory', 'Optimization', 'Interactive UI'],
        category: ['data'],
        metrics: ['Real-time Solving', 'Interactive Dashboard'],
        link: '#'
    },
    {
        id: 'victoria-transit',
        title: 'Victoria Green Transit Strategy',
        description: 'Data-driven urban mobility strategy generating $15M in regenerative economy potential. Reduced environmental impact by 25% through smart infrastructure analysis and movement optimization.',
        image: 'https://placehold.co/400x300/059669/FFFFFF?text=Transit+Strategy',
        tags: ['Data Analytics', 'Urban Planning', 'Sustainability'],
        category: ['data'],
        metrics: ['$15M Impact', '25% Emission Reduction'],
        link: '#'
    },
    {
        id: 'c-meds-app',
        title: 'C-Meds: AI Medication Reminder',
        description: 'AI-powered Flutter app on Google Play with significant downloads. Features custom reminders, medication tracking, and 90% faster prescription entry via high-accuracy auto-scanner. Coordinated QA testing for multi-device reliability.',
        image: 'https://placehold.co/400x300/F59E0B/FFFFFF?text=C-Meds+App',
        tags: ['Flutter', 'Dart', 'AI/ML', 'Firebase', 'Mobile'],
        category: ['mobile', 'ml-ai'],
        metrics: ['90% Time Saved', 'Multi-platform'],
        link: '#'
    },
    {
        id: 'e-cell-app',
        title: 'E-Cell Sastra Mobile Platform',
        description: 'Led development and Play Store launch managing 1000+ event registrations. Implemented networking features reducing manual communication by 40%. Achieved 500+ downloads with enhanced user engagement.',
        image: 'https://placehold.co/400x300/6366F1/FFFFFF?text=E-Cell+App',
        tags: ['Flutter', 'Dart', 'Firebase', 'Event Management'],
        category: ['mobile'],
        metrics: ['1000+ Registrations', '500+ Downloads'],
        link: '#'
    },
    {
        id: 'ai-appointment-booking',
        title: 'AI Appointment Booking System',
        description: 'Engineered AI-powered scheduling solution improving booking efficiency by 20%. Streamlined processes with intuitive UI and seamless platform integration. Collaborated cross-functionally for optimal deployment.',
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
        { name: 'C#', iconClass: 'fa-solid fa-code', color: 'purple-600' },
        { name: 'HTML', iconClass: 'fa-brands fa-html5', color: 'orange-500' },
        { name: 'CSS', iconClass: 'fa-brands fa-css3-alt', color: 'blue-400' },
        { name: 'JavaScript', iconClass: 'fa-brands fa-js', color: 'yellow-500' },
    ],
    'Databases': [
        { name: 'Firebase', iconClass: 'fa-solid fa-fire', color: 'red-500' },
        { name: 'MongoDB', iconClass: 'fa-solid fa-leaf', color: 'gray-700' },
        { name: 'SQL', iconClass: 'fa-solid fa-database', color: 'blue-800' },
        { name: 'PostgreSQL', iconClass: 'fa-solid fa-database', color: 'blue-700' },
    ],
    'Tools & Platforms': [
        { name: 'Power BI', iconClass: 'fa-solid fa-chart-bar', color: 'yellow-600' },
        { name: 'Vertex AI', iconClass: 'fa-solid fa-brain', color: 'green-500' },
        { name: 'Git', iconClass: 'fa-solid fa-code-branch', color: 'gray-900' },
        { name: 'GitHub', iconClass: 'fa-brands fa-github', color: 'gray-700' },
        { name: 'Google Cloud', iconClass: 'fa-brands fa-google', color: 'blue-500' },
        { name: 'R Shiny', iconClass: 'fa-solid fa-chart-area', color: 'blue-600' },
        { name: 'Jupyter', iconClass: 'fa-solid fa-book', color: 'orange-600' },
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
    ],
};

const journeyData = {
    experience: [
        {
            title: 'Software Consultant',
            company: 'RADSTEC',
            period: '05/2024 – 07/2024',
            description: 'Engineered AI appointment booking solution improving efficiency by 20%. Collaborated cross-functionally for seamless integration.',
            highlights: ['AI Integration', '20% Efficiency Boost', 'Cross-functional Leadership']
        },
        {
            title: 'Flutter Development Intern',
            company: 'CUROWEBS, Coimbatore',
            period: '01/2024 – 05/2024',
            description: 'Designed and launched C-Meds on Google Play. Implemented AI auto-scanner reducing prescription entry time by 90%.',
            highlights: ['Play Store Launch', '90% Time Reduction', 'AI Implementation']
        },
        {
            title: 'Technical Coordinator',
            company: 'E-CELL SASTRA',
            period: '07/2023 – 12/2023',
            description: 'Led mobile app development achieving 500+ downloads. Reduced manual communication by 40% through networking features.',
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

function createSkillCard(skill) {
    const div = document.createElement('div');
    div.className = 'skill-card group flex flex-col items-center justify-center rounded-xl bg-white dark:bg-gray-800 p-5 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1';
    div.innerHTML = `
        <div class="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700/50 group-hover:scale-110 transition-transform duration-300">
            <i class="${skill.iconClass} text-3xl text-${skill.color}"></i>
        </div>
        <span class="font-medium text-gray-700 dark:text-gray-300 text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${skill.name}</span>
    `;
    return div;
}

let currentSkillCategory = 'Languages & Frameworks';

function renderSkills(category = currentSkillCategory) {
    const container = document.getElementById('skills-grid');
    container.innerHTML = '';

    const skills = skillData[category];

    skills.forEach((skill, index) => {
        const card = createSkillCard(skill);
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 50}ms`;
        container.appendChild(card);
    });
}

function initializeSkillTabs() {
    const tabsContainer = document.getElementById('skill-tabs');
    const categories = Object.keys(skillData);

    tabsContainer.innerHTML = '';

    categories.forEach(category => {
        const btn = document.createElement('button');
        const isActive = category === currentSkillCategory;

        btn.className = `skill-tab px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${isActive
            ? 'bg-indigo-600 text-white shadow-lg scale-105'
            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`;
        btn.textContent = category;

        btn.addEventListener('click', () => {
            if (currentSkillCategory === category) return;

            currentSkillCategory = category;

            // Update tab styles
            document.querySelectorAll('.skill-tab').forEach(t => {
                if (t.textContent === category) {
                    t.className = 'skill-tab px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 bg-indigo-600 text-white shadow-lg scale-105';
                } else {
                    t.className = 'skill-tab px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700';
                }
            });

            renderSkills(category);
        });

        tabsContainer.appendChild(btn);
    });
}

function renderJourneySection() {
    const container = document.getElementById('journey-section');

    const experienceSection = document.createElement('div');
    experienceSection.className = 'bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700';
    experienceSection.innerHTML = `
        <div class="flex items-center mb-6">
            <i class="fa-solid fa-briefcase text-3xl text-indigo-600 dark:text-indigo-400 mr-4"></i>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Experience</h3>
        </div>
        <div class="space-y-6">
            ${journeyData.experience.map(exp => `
                <div class="border-l-4 border-indigo-500 pl-4 py-2 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-r">
                    <h4 class="text-xl font-semibold text-gray-800 dark:text-gray-200">${exp.title}</h4>
                    <p class="text-md font-medium text-indigo-700 dark:text-indigo-400 mb-1">${exp.company}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2"><i class="fa-solid fa-calendar-alt mr-1"></i>${exp.period}</p>
                    <p class="text-gray-700 dark:text-gray-300 text-sm mb-2">${exp.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${exp.highlights.map(h => `<span class="text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">${h}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    container.appendChild(experienceSection);

    const educationSection = document.createElement('div');
    educationSection.className = 'bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700';
    educationSection.innerHTML = `
        <div class="flex items-center mb-6">
            <i class="fa-solid fa-graduation-cap text-3xl text-indigo-600 dark:text-indigo-400 mr-4"></i>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Education</h3>
        </div>
        <div class="space-y-6">
            ${journeyData.education.map(edu => `
                <div class="border-l-4 border-indigo-500 pl-4 py-2 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-r">
                    <h4 class="text-xl font-semibold text-gray-800 dark:text-gray-200">${edu.degree}</h4>
                    <p class="text-md font-medium text-indigo-700 dark:text-indigo-400 mb-1">${edu.institution}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mb-2"><i class="fa-solid fa-calendar-alt mr-1"></i>${edu.period}</p>
                    <p class="text-gray-700 dark:text-gray-300 text-sm">${edu.description}</p>
                </div>
            `).join('')}
        </div>
    `;
    container.appendChild(educationSection);

    const certSection = document.createElement('div');
    certSection.className = 'bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700';
    certSection.innerHTML = `
        <div class="flex items-center mb-6">
            <i class="fa-solid fa-award text-3xl text-indigo-600 dark:text-indigo-400 mr-4"></i>
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">Certifications</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
            ${journeyData.certificates.map(cert => `
                <div class="border-l-4 border-indigo-500 pl-4 py-2 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300 rounded-r">
                    <h5 class="font-semibold text-gray-800 dark:text-gray-200">${cert.name}</h5>
                    <p class="text-sm text-indigo-600 dark:text-indigo-400">${cert.issuer}</p>
                </div>
            `).join('')}
        </div>
    `;
    container.appendChild(certSection);
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.category.join(' ')} bg-gray-50 dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300`;
    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
            <div class="absolute top-3 right-3 flex gap-2">
                ${project.category.map(cat => {
        const colors = {
            'data': 'bg-blue-500',
            'ml-ai': 'bg-purple-500',
            'mobile': 'bg-green-500'
        };
        return `<span class="${colors[cat]} text-white text-xs px-2 py-1 rounded-full font-medium">${cat.toUpperCase().replace('-', '/')}</span>`;
    }).join('')}
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">${project.title}</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">${project.description}</p>
            
            ${project.metrics ? `
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.metrics.map(metric => `
                        <span class="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs px-3 py-1 rounded-full font-semibold">
                            <i class="fa-solid fa-chart-line mr-1"></i>${metric}
                        </span>
                    `).join('')}
                </div>
            ` : ''}
            
            <div class="flex flex-wrap gap-2 mb-5">
                ${project.tags.map(tag => `
                    <span class="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">${tag}</span>
                `).join('')}
            </div>
            
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
                View Project <i class="fa-solid fa-arrow-right ml-2"></i>
            </a>
        </div>
    `;
    return card;
}

function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category.includes(filter));

    filteredProjects.forEach(project => {
        container.appendChild(createProjectCard(project));
    });
}

function initializeProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-indigo-600', 'text-white');
                b.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            });
            btn.classList.add('active', 'bg-indigo-600', 'text-white');
            btn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');

            const filter = btn.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
}

function initializeDarkMode() {
    const toggles = [
        document.getElementById('darkModeToggleDesktop'),
        document.getElementById('darkModeToggleMobile')
    ];
    const sunIcons = document.querySelectorAll('.fa-sun');
    const moonIcons = document.querySelectorAll('.fa-moon');

    const isDark = localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
        document.documentElement.classList.add('dark');
        sunIcons.forEach(icon => icon.classList.remove('hidden'));
        moonIcons.forEach(icon => icon.classList.add('hidden'));
    }

    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        const isDarkNow = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');

        sunIcons.forEach(icon => icon.classList.toggle('hidden'));
        moonIcons.forEach(icon => icon.classList.toggle('hidden'));
    }

    toggles.forEach(toggle => {
        if (toggle) toggle.addEventListener('click', toggleDarkMode);
    });
}

function initializeMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuButton');
    const overlay = document.getElementById('mobileMenuOverlay');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            overlay.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            overlay.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
}

function initializeSmoothScrolling() {
    document.querySelectorAll('.nav-link, .nav-link-mobile, .scroll-button').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.getElementById(this.dataset.section);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initializeBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.remove('hidden');
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
            setTimeout(() => btn.classList.add('hidden'), 300);
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function handleContactForm() {
    const form = document.getElementById('contactForm');
    const msgBox = document.getElementById('messageBox');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                msgBox.textContent = "Message sent successfully!";
                msgBox.classList.remove('bg-red-500');
                msgBox.classList.add('bg-green-500');
                msgBox.classList.remove('hidden', 'scale-0', 'opacity-0');
                msgBox.classList.add('scale-100', 'opacity-100');
                form.reset();
            } else {
                // Error from server
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Network error or other
            msgBox.textContent = "Oops! There was a problem sending your message.";
            msgBox.classList.remove('bg-green-500');
            msgBox.classList.add('bg-red-500');
            msgBox.classList.remove('hidden', 'scale-0', 'opacity-0');
            msgBox.classList.add('scale-100', 'opacity-100');
        }

        setTimeout(() => {
            msgBox.classList.remove('scale-100', 'opacity-100');
            msgBox.classList.add('scale-0', 'opacity-0');
            setTimeout(() => msgBox.classList.add('hidden'), 300);
        }, 5000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    initializeSkillTabs();
    renderSkills();
    renderJourneySection();
    renderProjects();
    initializeProjectFilters();
    initializeDarkMode();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeBackToTop();
    handleContactForm();
});
