/**
 * Portfolio App
 * Modular architecture for better maintainability and performance
 */

const PortfolioApp = (() => {
    // ==========================================
    // Utilities
    // ==========================================
    const Utils = {
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        throttle(func, limit) {
            let inThrottle;
            return function (...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            }
        },

        createElement(tag, className, innerHTML) {
            const el = document.createElement(tag);
            if (className) el.className = className;
            if (innerHTML) el.innerHTML = innerHTML;
            return el;
        }
    };

    // ==========================================
    // State Management
    // ==========================================
    const State = {
        currentSkillCategory: 'Languages & Frameworks',
        isDarkMode: false
    };

    // ==========================================
    // UI Module
    // ==========================================
    const UI = {
        init() {
            this.renderPersonalDetails();
            this.initializeDarkMode();
            this.initializeMobileMenu();
            this.initializeSmoothScrolling();
            this.initializeBackToTop();
            this.handleContactForm();
            this.updateCopyright();
        },

        updateCopyright() {
            const el = document.getElementById('currentYear');
            if (el) el.textContent = new Date().getFullYear();
        },

        renderPersonalDetails() {
            // Meta & Title
            document.title = personalDetails.title;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.content = personalDetails.metaDescription;

            // Navbar
            const navBrand = document.getElementById('nav-brand');
            if (navBrand) navBrand.textContent = personalDetails.brand;

            // Hero Section
            const heroName = document.getElementById('hero-name');
            if (heroName) heroName.textContent = personalDetails.name;

            const heroDesc = document.getElementById('hero-desc');
            if (heroDesc) heroDesc.textContent = personalDetails.about;

            const profileImg = document.getElementById('profile-img');
            if (profileImg) {
                profileImg.src = personalDetails.profileImage;
                profileImg.alt = personalDetails.name;
            }

            // Social Links
            const socialContainer = document.getElementById('hero-socials');
            if (socialContainer) {
                socialContainer.innerHTML = personalDetails.socialLinks.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}"
                       class="text-gray-700 dark:text-white/80 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                        <i class="${link.icon} text-4xl drop-shadow-md"></i>
                    </a>
                `).join('');
            }

            // Resume
            const resumeBtn = document.getElementById('resume-btn');
            if (resumeBtn) {
                resumeBtn.href = personalDetails.resume.url;
                resumeBtn.download = personalDetails.resume.filename;
            }

            // Metrics
            const metricsContainer = document.getElementById('hero-metrics');
            if (metricsContainer) {
                metricsContainer.innerHTML = personalDetails.metrics.map(metric => `
                    <div class="metric-card rounded-lg p-4 text-center">
                        <div class="text-3xl font-bold text-indigo-700 dark:text-yellow-300">${metric.value}</div>
                        <div class="text-sm text-gray-700 dark:text-gray-200">${metric.label}</div>
                    </div>
                `).join('');
            }

            // About Section
            const aboutContainer = document.getElementById('about-content');
            if (aboutContainer) {
                aboutContainer.innerHTML = `
                    <h3 class="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Who I Am</h3>
                    ${personalDetails.aboutLong.map(p => `<p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">${p}</p>`).join('')}
                `;
            }

            const servicesContainer = document.getElementById('about-services');
            if (servicesContainer) {
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
            }

            // Contact Section
            const contactForm = document.getElementById('contactForm');
            if (contactForm) contactForm.action = personalDetails.contact.formAction;

            // Render Contact Info List (Left Column)
            const contactInfoList = document.getElementById('contact-info-list');
            if (contactInfoList) {
                contactInfoList.innerHTML = `
                    <a href="mailto:${personalDetails.contact.email}" class="flex items-center space-x-4 group">
                        <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                            <i class="fa-solid fa-envelope text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-indigo-200">Email</p>
                            <p class="font-medium group-hover:text-white transition-colors">${personalDetails.contact.email}</p>
                        </div>
                    </a>
                    
                    <div class="flex items-center space-x-4 group">
                        <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                            <i class="fa-solid fa-phone text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-indigo-200">Phone</p>
                            <p class="font-medium group-hover:text-white transition-colors">${personalDetails.contact.phone}</p>
                        </div>
                    </div>
                    
                    <a href="${personalDetails.contact.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-4 group">
                        <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                            <i class="fa-brands fa-linkedin text-xl"></i>
                        </div>
                        <div>
                            <p class="text-sm text-indigo-200">LinkedIn</p>
                            <p class="font-medium group-hover:text-white transition-colors">${personalDetails.contact.linkedin}</p>
                        </div>
                    </a>
                `;
            }

            // Render Social Links in Contact Section
            const contactSocials = document.getElementById('contact-socials');
            if (contactSocials) {
                contactSocials.innerHTML = personalDetails.socialLinks.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}"
                       class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                        <i class="${link.icon} text-lg"></i>
                    </a>
                `).join('');
            }

            // Footer
            const footerName = document.getElementById('footer-name');
            if (footerName) footerName.textContent = personalDetails.name;
        },

        initializeDarkMode() {
            const toggles = [
                document.getElementById('darkModeToggleDesktop'),
                document.getElementById('darkModeToggleMobile')
            ];
            const sunIcons = document.querySelectorAll('.fa-sun');
            const moonIcons = document.querySelectorAll('.fa-moon');

            State.isDarkMode = localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

            const updateHomeBackground = (isDark) => {
                const homeSection = document.getElementById('home');
                if (homeSection) {
                    homeSection.style.backgroundImage = isDark ? "url('bg.webp')" : "url('bglight.webp')";
                }
            };

            const applyTheme = (isDark) => {
                if (isDark) {
                    document.documentElement.classList.add('dark');
                    sunIcons.forEach(icon => icon.classList.remove('hidden'));
                    moonIcons.forEach(icon => icon.classList.add('hidden'));
                } else {
                    document.documentElement.classList.remove('dark');
                    sunIcons.forEach(icon => icon.classList.add('hidden'));
                    moonIcons.forEach(icon => icon.classList.remove('hidden'));
                }
                updateHomeBackground(isDark);
            };

            applyTheme(State.isDarkMode);

            const toggleDarkMode = () => {
                State.isDarkMode = !State.isDarkMode;
                localStorage.setItem('theme', State.isDarkMode ? 'dark' : 'light');
                applyTheme(State.isDarkMode);
            };

            toggles.forEach(toggle => {
                if (toggle) toggle.addEventListener('click', toggleDarkMode);
            });
        },

        initializeMobileMenu() {
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
        },

        initializeSmoothScrolling() {
            document.body.addEventListener('click', (e) => {
                const target = e.target.closest('.nav-link, .nav-link-mobile, .scroll-button');
                if (target) {
                    e.preventDefault();
                    const sectionId = target.dataset.section;
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        },

        initializeBackToTop() {
            const btn = document.getElementById('backToTopBtn');
            if (!btn) return;

            const handleScroll = Utils.throttle(() => {
                if (window.scrollY > 300) {
                    btn.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    requestAnimationFrame(() => {
                        btn.classList.add('show');
                    });
                } else {
                    btn.classList.remove('show');
                    setTimeout(() => btn.classList.add('hidden'), 300);
                }
            }, 200);

            window.addEventListener('scroll', handleScroll);

            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        },

        handleContactForm() {
            const form = document.getElementById('contactForm');
            const msgBox = document.getElementById('messageBox');
            if (!form || !msgBox) return;

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
    };

    // ==========================================
    // Skills Module
    // ==========================================
    const Skills = {
        init() {
            this.renderTabs();
            this.renderSkills();
        },

        createSkillCard(skill) {
            return `
                <div class="skill-card group relative overflow-hidden flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:-translate-y-2 hover:scale-105" style="opacity: 0; animation: fadeInUp 0.5s ease forwards">
                    <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="relative mb-4 h-20 w-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-${skill.color}/20 to-${skill.color}/10 dark:from-${skill.color}/30 dark:to-${skill.color}/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-${skill.color}/50">
                        <i class="${skill.iconClass} text-4xl text-${skill.color} group-hover:scale-110 transition-transform duration-300"></i>
                    </div>
                    <span class="relative font-semibold text-gray-800 dark:text-gray-200 text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">${skill.name}</span>
                    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
            `;
        },

        renderSkills(category = State.currentSkillCategory) {
            const container = document.getElementById('skills-grid');
            if (!container) return;

            const skills = skillData[category];
            const fragment = document.createDocumentFragment();

            // Using innerHTML on container is cleaner for batch updates than appending individual nodes
            // But to use DocumentFragment effectively with template strings, we can build a big string
            // or create elements. Here, building a string is faster for initial render.
            // However, to support the animation delay logic easily:

            container.innerHTML = skills.map((skill, index) => {
                // Inject animation delay inline
                const delay = index * 50;
                return this.createSkillCard(skill).replace('animation: fadeInUp 0.5s ease forwards', `animation: fadeInUp 0.5s ease forwards ${delay}ms`);
            }).join('');
        },

        renderTabs() {
            const tabsContainer = document.getElementById('skill-tabs');
            if (!tabsContainer) return;

            const categories = Object.keys(skillData);
            const fragment = document.createDocumentFragment();

            categories.forEach(category => {
                const btn = document.createElement('button');
                const isActive = category === State.currentSkillCategory;

                const baseClasses = 'skill-tab relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300';
                const activeClasses = 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105';
                const inactiveClasses = 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600';

                btn.className = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
                btn.textContent = category;
                btn.dataset.category = category; // For event delegation

                fragment.appendChild(btn);
            });

            tabsContainer.innerHTML = '';
            tabsContainer.appendChild(fragment);

            // Event Delegation for Tabs
            tabsContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.skill-tab');
                if (!btn) return;

                const category = btn.dataset.category;
                if (State.currentSkillCategory === category) return;

                State.currentSkillCategory = category;

                // Update UI
                const allTabs = tabsContainer.querySelectorAll('.skill-tab');
                allTabs.forEach(tab => {
                    const isTabActive = tab.dataset.category === category;
                    const baseClasses = 'skill-tab relative px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300';
                    const activeClasses = 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105';
                    const inactiveClasses = 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600';

                    tab.className = `${baseClasses} ${isTabActive ? activeClasses : inactiveClasses}`;
                });

                this.renderSkills(category);
            });
        }
    };

    // ==========================================
    // Journey Module (Experience, Education, Certs)
    // ==========================================
    const Journey = {
        init() {
            this.render();
        },

        render() {
            const container = document.getElementById('journey-section');
            if (!container) return;

            const fragment = document.createDocumentFragment();

            // Experience
            const expSection = this.createExperienceSection();
            fragment.appendChild(expSection);

            // Education
            const eduSection = this.createEducationSection();
            fragment.appendChild(eduSection);

            // Certifications
            const certSection = this.createCertSection();
            fragment.appendChild(certSection);

            container.innerHTML = '';
            container.appendChild(fragment);

            this.setupViewMoreExperience();
        },

        createExperienceSection() {
            const div = document.createElement('div');
            div.className = 'relative';
            const initialShowCount = 3;
            const totalExperiences = journeyData.experience.length;
            const hasMore = totalExperiences > initialShowCount;

            div.innerHTML = `
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
            return div;
        },

        createEducationSection() {
            const div = document.createElement('div');
            div.className = 'mt-12';
            div.innerHTML = `
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
            return div;
        },

        createCertSection() {
            const div = document.createElement('div');
            div.className = 'mt-12';
            div.innerHTML = `
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
            return div;
        },

        setupViewMoreExperience() {
            const viewMoreBtn = document.getElementById('view-more-experience');
            if (!viewMoreBtn) return;

            const viewMoreText = document.getElementById('view-more-text');
            const viewMoreIcon = document.getElementById('view-more-icon');
            let isExpanded = false;
            const initialShowCount = 3;

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
                    // Re-hide items beyond initial count
                    const allItems = document.querySelectorAll('.experience-item');
                    allItems.forEach((item, index) => {
                        if (index >= initialShowCount) {
                            item.classList.add('hidden');
                        }
                    });
                    viewMoreText.textContent = 'View More Experiences';
                    viewMoreIcon.style.transform = 'rotate(0deg)';
                    document.getElementById('experience-timeline').scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    };

    // ==========================================
    // Projects Module
    // ==========================================
    const Projects = {
        init() {
            this.render();
            this.initializeFilters();
        },

        createCard(project) {
            const card = document.createElement('div');
            card.className = `project-card ${project.category.join(' ')} group relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 overflow-hidden`;

            const categoryColors = {
                'data': 'from-blue-500 to-cyan-500',
                'ml-ai': 'from-purple-500 to-pink-500',
                'mobile': 'from-green-500 to-emerald-500'
            };
            const mainCategory = project.category[0] || 'data';
            const gradientClass = categoryColors[mainCategory] || 'from-indigo-500 to-purple-500';

            card.innerHTML = `
                <!-- Top Gradient Bar -->
                <div class="h-1.5 bg-gradient-to-r ${gradientClass}"></div>
                
                <div class="p-7 flex flex-col h-full relative">
                    <!-- Header: Title & Link -->
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <div class="flex gap-2 mb-3">
                                ${project.category.map(cat => {
                const colors = {
                    'data': 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/20',
                    'ml-ai': 'text-purple-700 bg-purple-50 dark:text-purple-300 dark:bg-purple-900/20',
                    'mobile': 'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/20'
                };
                const colorClass = colors[cat] || 'text-gray-600 bg-gray-50 dark:text-gray-300 dark:bg-gray-800';
                return `<span class="${colorClass} text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-black/5 dark:border-white/5">${cat.replace('-', ' ')}</span>`;
            }).join('')}
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                ${project.title}
                            </h3>
                        </div>
                        <a href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="View Project: ${project.title}"
                           class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-700/50 text-gray-400 hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 transform group-hover:rotate-45">
                            <i class="fa-solid fa-link text-sm"></i>
                        </a>
                    </div>

                    <!-- Content Grid -->
                    <div class="flex-grow space-y-6">
                        
                        <!-- Result (Metrics) -->
                        ${project.metrics ? `
                            <div class="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700/50">
                                <div class="flex items-center gap-2 mb-3">
                                    <i class="fa-solid fa-trophy text-yellow-500 text-xs"></i>
                                    <p class="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Impact & Results</p>
                                </div>
                                <div class="grid grid-cols-2 gap-3">
                                    ${project.metrics.map(metric => `
                                        <div class="flex items-center space-x-2">
                                            <i class="fa-solid fa-chart-line text-indigo-500 text-xs"></i>
                                            <span class="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">${metric}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}

                        <!-- Action (Solution) -->
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <i class="fa-solid fa-rocket text-indigo-500 text-xs"></i>
                                <p class="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">The Solution</p>
                            </div>
                            ${Array.isArray(project.description)
                    ? `<ul class="space-y-2">
                                    ${project.description.map(item => `
                                        <li class="flex items-start text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 mr-2.5 flex-shrink-0"></span>
                                            ${item}
                                        </li>
                                    `).join('')}
                               </ul>`
                    : `<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">${project.description}</p>`
                }
                        </div>
                    </div>

                    <!-- Footer: Tech Stack -->
                    <div class="mt-8 pt-5 border-t border-gray-100 dark:border-gray-700">
                        <div class="flex items-center gap-2 mb-3">
                            <i class="fa-solid fa-layer-group text-gray-400 text-xs"></i>
                            <p class="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Tech Stack</p>
                        </div>
                        <div class="flex flex-wrap gap-1.5">
                            ${project.tags.map(tag => `
                                <span class="text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors cursor-default">
                                    ${tag}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            return card;
        },

        render(filter = 'all') {
            const container = document.getElementById('projects-container');
            if (!container) return;

            container.innerHTML = '';

            const filteredProjects = filter === 'all'
                ? projects
                : projects.filter(p => p.category.includes(filter));

            const initialShowCount = filter === 'all' ? 9 : filteredProjects.length;
            const hasMore = filter === 'all' && filteredProjects.length > initialShowCount;

            const fragment = document.createDocumentFragment();

            filteredProjects.forEach((project, index) => {
                const card = this.createCard(project);
                if (index >= initialShowCount) {
                    card.classList.add('hidden', 'project-hidden');
                }
                card.setAttribute('data-project-index', index);
                fragment.appendChild(card);
            });

            container.appendChild(fragment);

            this.updateViewMoreButton(hasMore);
        },

        updateViewMoreButton(hasMore) {
            const viewMoreContainer = document.getElementById('view-more-projects-container');
            if (!viewMoreContainer) return;

            if (hasMore) {
                viewMoreContainer.classList.remove('hidden');
                const viewMoreBtn = document.getElementById('view-more-projects');
                const viewMoreText = document.getElementById('view-more-projects-text');
                const viewMoreIcon = document.getElementById('view-more-projects-icon');

                if (viewMoreBtn) {
                    viewMoreBtn.dataset.expanded = 'false';
                    viewMoreText.textContent = 'View More Projects';
                    viewMoreIcon.style.transform = 'rotate(0deg)';

                    // Remove old listeners to prevent duplicates (simple approach: clone and replace)
                    const newBtn = viewMoreBtn.cloneNode(true);
                    viewMoreBtn.parentNode.replaceChild(newBtn, viewMoreBtn);

                    newBtn.addEventListener('click', () => {
                        const isExpanded = newBtn.dataset.expanded === 'true';
                        const hiddenProjects = document.querySelectorAll('.project-hidden');
                        const text = document.getElementById('view-more-projects-text');
                        const icon = document.getElementById('view-more-projects-icon');

                        if (!isExpanded) {
                            hiddenProjects.forEach(project => {
                                project.classList.remove('hidden');
                                project.style.animation = 'fadeInUp 0.5s ease forwards';
                            });
                            text.textContent = 'View Less';
                            icon.style.transform = 'rotate(180deg)';
                            newBtn.dataset.expanded = 'true';
                        } else {
                            hiddenProjects.forEach(project => {
                                project.classList.add('hidden');
                            });
                            text.textContent = 'View More Projects';
                            icon.style.transform = 'rotate(0deg)';
                            newBtn.dataset.expanded = 'false';
                            document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    });
                }
            } else {
                viewMoreContainer.classList.add('hidden');
            }
        },

        initializeFilters() {
            const filterContainer = document.getElementById('project-filters');
            if (!filterContainer) return;

            filterContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.filter-btn');
                if (!btn) return;

                // Update active state
                const allBtns = filterContainer.querySelectorAll('.filter-btn');
                allBtns.forEach(b => {
                    b.classList.remove('active', 'bg-indigo-600', 'text-white');
                    b.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
                });
                btn.classList.add('active', 'bg-indigo-600', 'text-white');
                btn.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');

                const filter = btn.getAttribute('data-filter');
                this.render(filter);
            });
        }
    };

    // ==========================================
    // Chatbot Module
    // ==========================================
    const Chatbot = {
        init() {
            this.cacheDOM();
            this.bindEvents();
        },

        cacheDOM() {
            this.dom = {
                toggle: document.getElementById('chat-toggle'),
                window: document.getElementById('chat-window'),
                close: document.getElementById('close-chat'),
                form: document.getElementById('chat-form'),
                input: document.getElementById('chat-input'),
                messages: document.getElementById('chat-messages'),
                toggleIcon: document.getElementById('chat-toggle')?.querySelector('i')
            };
        },

        bindEvents() {
            if (!this.dom.toggle) return;

            this.dom.toggle.addEventListener('click', () => this.toggleChat());
            this.dom.close.addEventListener('click', () => this.toggleChat());
            this.dom.form.addEventListener('submit', (e) => this.handleSubmit(e));
        },

        isOpen: false,

        toggleChat() {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.dom.window.classList.remove('hidden');
                setTimeout(() => {
                    this.dom.window.classList.remove('opacity-0', 'scale-95');
                    this.dom.window.classList.add('opacity-100', 'scale-100');
                }, 10);
                this.dom.toggleIcon.classList.remove('fa-message');
                this.dom.toggleIcon.classList.add('fa-times');
                this.dom.input.focus();
            } else {
                this.dom.window.classList.remove('opacity-100', 'scale-100');
                this.dom.window.classList.add('opacity-0', 'scale-95');
                setTimeout(() => {
                    this.dom.window.classList.add('hidden');
                }, 300);
                this.dom.toggleIcon.classList.remove('fa-times');
                this.dom.toggleIcon.classList.add('fa-message');
            }
        },

        addMessage(text, isUser = false) {
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

            this.dom.messages.appendChild(div);
            this.dom.messages.scrollTop = this.dom.messages.scrollHeight;
        },

        addTypingIndicator() {
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
            this.dom.messages.appendChild(div);
            this.dom.messages.scrollTop = this.dom.messages.scrollHeight;
        },

        removeTypingIndicator() {
            const indicator = document.getElementById('typing-indicator');
            if (indicator) indicator.remove();
        },

        async handleSubmit(e) {
            e.preventDefault();
            const message = this.dom.input.value.trim();
            if (!message) return;

            this.addMessage(message, true);
            this.dom.input.value = '';
            this.addTypingIndicator();

            try {
                const response = await fetch('https://rag-chatbot-w241.onrender.com/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message })
                });

                const data = await response.json();
                this.removeTypingIndicator();
                this.addMessage(data.response);
            } catch (error) {
                console.error('Chat Error:', error);
                this.removeTypingIndicator();
                this.addMessage("Sorry, I'm having trouble connecting right now. Please try again later.");
            }
        }
    };

    // ==========================================
    // Initialization
    // ==========================================
    const init = () => {
        UI.init();
        Skills.init();
        Journey.init();
        Projects.init();
        Chatbot.init();
    };

    return { init };
})();

// Initialize App when DOM is ready
document.addEventListener('DOMContentLoaded', PortfolioApp.init);
