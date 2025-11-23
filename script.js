

function createSkillCard(skill) {
    const div = document.createElement('div');
    div.className = 'skill-card group relative overflow-hidden flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:-translate-y-2 hover:scale-105';
    div.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="relative mb-4 h-20 w-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-${skill.color}/20 to-${skill.color}/10 dark:from-${skill.color}/30 dark:to-${skill.color}/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-${skill.color}/50">
            <i class="${skill.iconClass} text-4xl text-${skill.color} group-hover:scale-110 transition-transform duration-300"></i>
        </div>
        <span class="relative font-semibold text-gray-800 dark:text-gray-200 text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">${skill.name}</span>
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
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

        btn.className = `skill-tab relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${isActive
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105'
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600'
            }`;
        btn.textContent = category;

        btn.addEventListener('click', () => {
            if (currentSkillCategory === category) return;

            currentSkillCategory = category;

            // Update tab styles
            document.querySelectorAll('.skill-tab').forEach(t => {
                if (t.textContent === category) {
                    t.className = 'skill-tab relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105';
                } else {
                    t.className = 'skill-tab relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600';
                }
            });

            renderSkills(category);
        });

        tabsContainer.appendChild(btn);
    });
}

function renderJourneySection() {
    const container = document.getElementById('journey-section');

    // Experience Section with Timeline Design
    const experienceSection = document.createElement('div');
    experienceSection.className = 'relative';

    const initialShowCount = 3;
    const totalExperiences = journeyData.experience.length;
    const hasMore = totalExperiences > initialShowCount;

    experienceSection.innerHTML = `
        <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fa-solid fa-briefcase text-xl text-white"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-800 dark:text-gray-200 ml-4">Experience</h3>
        </div>
        <div class="space-y-6 relative before:absolute before:left-0 before:top-[2rem] before:bottom-[2rem] before:w-0.5 before:bg-indigo-200 before:dark:bg-indigo-800" id="experience-timeline">
            ${journeyData.experience.map((exp, index) => `
                <div class="relative pl-8 experience-item ${index >= initialShowCount ? 'hidden' : ''}" data-index="${index}">
                    <div class="absolute left-0 top-[2rem] w-4 h-4 bg-indigo-600 dark:bg-indigo-500 rounded-full -ml-[7px] ring-4 ring-white dark:ring-gray-900 shadow-md z-10"></div>
                    <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 group">
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                            <div class="flex-1">
                                <h4 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">${exp.title}</h4>
                                <p class="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">${exp.company}</p>
                            </div>
                            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                                <i class="fa-solid fa-calendar-alt mr-2"></i>
                                <span class="font-medium">${exp.period}</span>
                            </div>
                        </div>
                        <ul class="space-y-2 mb-4">
                            ${exp.description.map(item => `
                                <li class="flex items-start text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <i class="fa-solid fa-circle text-indigo-500 dark:text-indigo-400 text-[6px] mr-3 mt-2 flex-shrink-0"></i>
                                    <span>${item}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div class="flex flex-wrap gap-2">
                            ${exp.highlights.map(h => `<span class="inline-flex items-center text-xs font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-700"><i class="fa-solid fa-check-circle mr-1.5 text-indigo-500 dark:text-indigo-400"></i>${h}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        ${hasMore ? `
            <div class="mt-8 text-center">
                <button id="view-more-experience" class="group relative px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                    <span class="relative z-10 flex items-center">
                        <span id="view-more-text">View More Experiences</span>
                        <i class="fa-solid fa-chevron-down ml-2 transition-transform duration-300" id="view-more-icon"></i>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>
        ` : ''}
    `;
    container.appendChild(experienceSection);

    // Add event listener for View More button
    if (hasMore) {
        const viewMoreBtn = document.getElementById('view-more-experience');
        const viewMoreText = document.getElementById('view-more-text');
        const viewMoreIcon = document.getElementById('view-more-icon');
        let isExpanded = false;

        viewMoreBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            const hiddenItems = document.querySelectorAll('.experience-item.hidden');

            if (isExpanded) {
                hiddenItems.forEach(item => {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                });
                viewMoreText.textContent = 'View Less';
                viewMoreIcon.style.transform = 'rotate(180deg)';
            } else {
                document.querySelectorAll(`.experience-item[data-index="${initialShowCount}"], .experience-item[data-index="${initialShowCount + 1}"], .experience-item[data-index="${initialShowCount + 2}"]`).forEach(item => {
                    item.classList.add('hidden');
                });
                viewMoreText.textContent = 'View More Experiences';
                viewMoreIcon.style.transform = 'rotate(0deg)';
                // Scroll to experience section
                document.getElementById('experience-timeline').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Education Section with Enhanced Cards
    const educationSection = document.createElement('div');
    educationSection.className = 'mt-12';
    educationSection.innerHTML = `
        <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fa-solid fa-graduation-cap text-xl text-white"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-800 dark:text-gray-200 ml-4">Education</h3>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
            ${journeyData.education.map(edu => `
                <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-bl-full"></div>
                    <div class="relative">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-full">
                                <i class="fa-solid fa-calendar-alt mr-2"></i>
                                <span class="font-medium">${edu.period}</span>
                            </div>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">${edu.degree}</h4>
                        <p class="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3 flex items-center">
                            <i class="fa-solid fa-university mr-2 text-base"></i>
                            ${edu.institution}
                        </p>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">${edu.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    container.appendChild(educationSection);

    // Certifications Section with Grid Layout
    const certSection = document.createElement('div');
    certSection.className = 'mt-12';
    certSection.innerHTML = `
        <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fa-solid fa-award text-xl text-white"></i>
            </div>
            <h3 class="text-3xl font-bold text-gray-800 dark:text-gray-200 ml-4">Certifications</h3>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${journeyData.certificates.map(cert => `
                <div class="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-5 border-2 border-gray-100 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
                    <div class="flex items-start space-x-3">
                        <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <i class="fa-solid fa-certificate text-white"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="font-semibold text-gray-900 dark:text-white text-sm leading-snug mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">${cert.name}</h4>
                            <p class="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                                <i class="fa-solid fa-building mr-1.5"></i>
                                ${cert.issuer}
                            </p>
                        </div>
                    </div>
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
            'data': 'bg-blue-700',
            'ml-ai': 'bg-purple-700',
            'mobile': 'bg-green-700'
        };
        return `<span class="${colors[cat]} text-white text-xs px-2 py-1 rounded-full font-medium">${cat.toUpperCase().replace('-', '/')}</span>`;
    }).join('')}
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">${project.title}</h3>
            ${Array.isArray(project.description)
            ? `<ul class="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed list-disc list-inside space-y-1">
                    ${project.description.map(item => `<li>${item}</li>`).join('')}
                   </ul>`
            : `<p class="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">${project.description}</p>`
        }
            
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
    const viewMoreContainer = document.getElementById('view-more-projects-container');
    container.innerHTML = '';

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category.includes(filter));

    const initialShowCount = filter === 'all' ? 9 : filteredProjects.length;
    const hasMore = filter === 'all' && filteredProjects.length > initialShowCount;

    filteredProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        if (index >= initialShowCount) {
            card.classList.add('hidden', 'project-hidden');
        }
        card.setAttribute('data-project-index', index);
        container.appendChild(card);
    });

    // Show or hide View More button
    if (viewMoreContainer) {
        if (hasMore) {
            viewMoreContainer.classList.remove('hidden');
            // Reset button state
            const viewMoreBtn = document.getElementById('view-more-projects');
            const viewMoreText = document.getElementById('view-more-projects-text');
            const viewMoreIcon = document.getElementById('view-more-projects-icon');
            if (viewMoreBtn) {
                viewMoreBtn.dataset.expanded = 'false';
                viewMoreText.textContent = 'View More Projects';
                viewMoreIcon.style.transform = 'rotate(0deg)';
            }
        } else {
            viewMoreContainer.classList.add('hidden');
        }
    }
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

    // Initialize View More Projects button
    const viewMoreBtn = document.getElementById('view-more-projects');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            const isExpanded = viewMoreBtn.dataset.expanded === 'true';
            const hiddenProjects = document.querySelectorAll('.project-hidden');
            const viewMoreText = document.getElementById('view-more-projects-text');
            const viewMoreIcon = document.getElementById('view-more-projects-icon');

            if (!isExpanded) {
                // Show all projects
                hiddenProjects.forEach(project => {
                    project.classList.remove('hidden');
                    project.style.animation = 'fadeInUp 0.5s ease forwards';
                });
                viewMoreText.textContent = 'View Less';
                viewMoreIcon.style.transform = 'rotate(180deg)';
                viewMoreBtn.dataset.expanded = 'true';
            } else {
                // Hide projects beyond 9
                hiddenProjects.forEach(project => {
                    project.classList.add('hidden');
                });
                viewMoreText.textContent = 'View More Projects';
                viewMoreIcon.style.transform = 'rotate(0deg)';
                viewMoreBtn.dataset.expanded = 'false';
                // Scroll to projects section
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
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

    function updateHomeBackground(isDark) {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.style.backgroundImage = isDark ? "url('bg.webp')" : "url('bglight.webp')";
        }
    }

    if (isDark) {
        document.documentElement.classList.add('dark');
        sunIcons.forEach(icon => icon.classList.remove('hidden'));
        moonIcons.forEach(icon => icon.classList.add('hidden'));
    }
    updateHomeBackground(isDark);

    function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
        const isDarkNow = document.documentElement.classList.contains('dark');
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');

        sunIcons.forEach(icon => icon.classList.toggle('hidden'));
        moonIcons.forEach(icon => icon.classList.toggle('hidden'));
        updateHomeBackground(isDarkNow);
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
        const formAction = form.action;

        try {
            const response = await fetch(formAction, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                msgBox.textContent = "Message sent successfully!";
                msgBox.classList.remove('bg-red-500');
                msgBox.classList.add('bg-green-500');
                msgBox.classList.remove('hidden', 'scale-0', 'opacity-0');
                msgBox.classList.add('scale-100', 'opacity-100');
                form.reset();
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    console.error(data["errors"].map(error => error["message"]).join(", "))
                }
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
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

function renderPersonalDetails() {
    // Meta & Title
    document.title = personalDetails.title;
    document.querySelector('meta[name="description"]').content = personalDetails.metaDescription;

    // Navbar
    document.getElementById('nav-brand').textContent = personalDetails.brand;

    // Hero Section
    document.getElementById('hero-name').textContent = personalDetails.name;
    document.getElementById('hero-desc').textContent = personalDetails.about;
    document.getElementById('profile-img').src = personalDetails.profileImage;
    document.getElementById('profile-img').alt = personalDetails.name;

    // Social Links
    const socialContainer = document.getElementById('hero-socials');
    socialContainer.innerHTML = personalDetails.socialLinks.map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}"
           class="text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
            <i class="${link.icon} text-4xl drop-shadow-md"></i>
        </a>
    `).join('');

    // Resume
    const resumeBtn = document.getElementById('resume-btn');
    resumeBtn.href = personalDetails.resume.url;
    resumeBtn.download = personalDetails.resume.filename;

    // Metrics
    const metricsContainer = document.getElementById('hero-metrics');
    metricsContainer.innerHTML = personalDetails.metrics.map(metric => `
        <div class="metric-card rounded-lg p-4 text-center">
            <div class="text-3xl font-bold text-indigo-700 dark:text-yellow-300">${metric.value}</div>
            <div class="text-sm text-gray-700 dark:text-gray-200">${metric.label}</div>
        </div>
    `).join('');

    // About Section
    const aboutContainer = document.getElementById('about-content');
    aboutContainer.innerHTML = `
        <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Who I Am</h3>
        ${personalDetails.aboutLong.map(p => `<p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">${p}</p>`).join('')}
    `;

    const servicesContainer = document.getElementById('about-services');
    servicesContainer.innerHTML = `
        <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">What I Offer</h3>
        <div class="space-y-4">
            ${personalDetails.services.map(service => `
                <div class="flex items-start space-x-3">
                    <i class="${service.icon} text-2xl text-indigo-600 dark:text-indigo-400 mt-1"></i>
                    <div>
                        <h4 class="font-semibold text-gray-800 dark:text-gray-200">${service.title}</h4>
                        <p class="text-gray-600 dark:text-gray-400 text-sm">${service.desc}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Contact Section
    document.getElementById('contactForm').action = personalDetails.contact.formAction;

    document.getElementById('contact-info').innerHTML = `
        <div class="flex flex-col items-center">
            <i class="fa-solid fa-envelope text-3xl mb-2 text-indigo-300"></i>
            <a href="mailto:${personalDetails.contact.email}" class="text-indigo-300 hover:underline">${personalDetails.contact.email}</a>
        </div>
        <div class="flex flex-col items-center">
            <i class="fa-solid fa-phone text-3xl mb-2 text-indigo-300"></i>
            <span>${personalDetails.contact.phone}</span>
        </div>
        <div class="flex flex-col items-center">
            <i class="fa-brands fa-linkedin text-3xl mb-2 text-indigo-300"></i>
            <a href="${personalDetails.contact.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="text-indigo-300 hover:underline">${personalDetails.contact.linkedin}</a>
        </div>
        </div>
    `;

    // Footer
    document.getElementById('footer-name').textContent = personalDetails.name;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    initializeSkillTabs();
    // Initialize Personal Details
    renderPersonalDetails();
    // Initialize Chatbot
    initializeChatbot();
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

function initializeChatbot() {
    const chatWidget = document.getElementById('chat-widget');
    const chatWindow = document.getElementById('chat-window');
    const chatToggle = document.getElementById('chat-toggle');
    const closeChat = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const toggleIcon = chatToggle.querySelector('i');

    let isOpen = false;

    function toggleChat() {
        isOpen = !isOpen;
        if (isOpen) {
            chatWindow.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                chatWindow.classList.remove('opacity-0', 'scale-95');
                chatWindow.classList.add('opacity-100', 'scale-100');
            }, 10);
            toggleIcon.classList.remove('fa-message');
            toggleIcon.classList.add('fa-times');
            chatInput.focus();
        } else {
            chatWindow.classList.remove('opacity-100', 'scale-100');
            chatWindow.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                chatWindow.classList.add('hidden');
            }, 300);
            toggleIcon.classList.remove('fa-times');
            toggleIcon.classList.add('fa-message');
        }
    }

    chatToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', toggleChat);

    function addMessage(text, isUser = false) {
        const div = document.createElement('div');
        div.className = `flex items-start space-x-2 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`;

        const icon = isUser ?
            `<div class="w-8 h-8 bg-gray-200 dark:bg-slate-700 rounded-full flex-shrink-0 flex items-center justify-center">
                <i class="fa-solid fa-user text-gray-500 dark:text-gray-400 text-xs"></i>
             </div>` :
            `<div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex-shrink-0 flex items-center justify-center">
                <i class="fa-solid fa-robot text-indigo-600 dark:text-indigo-400 text-xs"></i>
             </div>`;

        const messageClass = isUser ?
            'bg-indigo-600 text-white rounded-tr-none' :
            'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-tl-none border border-gray-100 dark:border-slate-700';

        div.innerHTML = `
            ${icon}
            <div class="${messageClass} p-3 rounded-2xl shadow-sm max-w-[85%] prose dark:prose-invert prose-sm">
                ${isUser ? `<p class="text-sm">${text}</p>` : marked.parse(text)}
            </div>
        `;

        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addTypingIndicator() {
        const div = document.createElement('div');
        div.id = 'typing-indicator';
        div.className = 'flex items-start space-x-2';
        div.innerHTML = `
            <div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex-shrink-0 flex items-center justify-center">
                <i class="fa-solid fa-robot text-indigo-600 dark:text-indigo-400 text-xs"></i>
            </div>
            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-slate-700">
                <div class="flex space-x-1">
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                </div>
            </div>
        `;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, true);
        chatInput.value = '';

        // Show typing indicator
        addTypingIndicator();

        try {
            const response = await fetch('https://rag-chatbot-w241.onrender.com/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();

            // Remove typing indicator and add bot response
            removeTypingIndicator();

            if (data.error) {
                addMessage("Sorry, I encountered an error. Please try again later.");
                console.error('Chat error:', data.error);
            } else {
                addMessage(data.response);
            }
        } catch (error) {
            removeTypingIndicator();
            addMessage("Sorry, I cannot connect to the server. Please ensure the backend is running.");
            console.error('Network error:', error);
        }
    });
}
