import { type Component, For, onMount } from 'solid-js';
import './styles.scss';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform with real-time inventory management, secure payment processing, and AI-powered product recommendations.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI/ML'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative project management tool with real-time updates, team chat, and analytics.',
        tags: ['Vue.js', 'Firebase', 'Tailwind'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 3,
        title: 'AI Content Generator',
        description: 'Smart content creation platform powered by GPT-4 for marketing copy and blog posts.',
        tags: ['Next.js', 'OpenAI', 'PostgreSQL'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 4,
        title: 'Finance Dashboard',
        description: 'Interactive financial analytics with real-time data visualization and reporting.',
        tags: ['Solid.js', 'D3.js', 'Python'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 5,
        title: 'Social Media App',
        description: 'Modern social networking platform with stories, live streaming, and discovery.',
        tags: ['React Native', 'GraphQL', 'AWS'],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 6,
        title: 'Healthcare Portal',
        description: 'Patient management system with telemedicine integration and health tracking.',
        tags: ['Angular', 'NestJS', 'Docker'],
        liveUrl: '#',
        githubUrl: '#',
    },
];

const Projects: Component = () => {
    let sectionRef: HTMLElement | undefined;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef) {
            const elements = sectionRef.querySelectorAll('.reveal, .reveal-scale');
            elements.forEach((el) => observer.observe(el));
        }
    });

    const featuredProject = projects.find(p => p.featured);
    const regularProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" class="projects" ref={sectionRef}>
            <div class="projects__container">
                <div class="projects__header reveal">
                    <span class="projects__label">Portfolio</span>
                    <h2 class="projects__title">Featured Projects</h2>
                    <p class="projects__subtitle">
                        A selection of my recent work. Each project is crafted with attention to detail, performance, and user experience.
                    </p>
                </div>

                {/* Featured Project */}
                {featuredProject && (
                    <article class="project-featured projects__featured reveal">
                        <div class="project-featured__image-wrapper">
                            <div class="project-featured__visual">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                </svg>
                            </div>
                        </div>
                        <div class="project-featured__content">
                            <span class="project-featured__badge">Featured Project</span>
                            <h3 class="project-featured__title">{featuredProject.title}</h3>
                            <p class="project-featured__description">{featuredProject.description}</p>
                            <div class="project-featured__tags">
                                <For each={featuredProject.tags}>
                                    {(tag) => <span class="project-featured__tag">{tag}</span>}
                                </For>
                            </div>
                            <div class="project-featured__actions">
                                {featuredProject.liveUrl && (
                                    <a href={featuredProject.liveUrl} class="project-featured__link project-featured__link--primary">
                                        View Live
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                )}
                                {featuredProject.githubUrl && (
                                    <a href={featuredProject.githubUrl} class="project-featured__link project-featured__link--secondary">
                                        Source Code
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                )}

                {/* Regular Projects Grid */}
                <div class="projects__grid">
                    <For each={regularProjects}>
                        {(project, index) => (
                            <article class="project-card reveal-scale" style={{ 'transition-delay': `${index() * 0.1}s` }}>
                                <div class="project-card__image">
                                    <div class="project-card__visual">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                        </svg>
                                    </div>
                                    <div class="project-card__overlay">
                                        <div class="project-card__links">
                                            {project.liveUrl && (
                                                <a href={project.liveUrl} class="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="View live site">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a href={project.githubUrl} class="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="View source code">
                                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div class="project-card__content">
                                    <h3 class="project-card__title">{project.title}</h3>
                                    <p class="project-card__description">{project.description}</p>
                                    <div class="project-card__tags">
                                        <For each={project.tags}>
                                            {(tag) => <span class="project-card__tag">{tag}</span>}
                                        </For>
                                    </div>
                                </div>
                            </article>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
};

export default Projects;
