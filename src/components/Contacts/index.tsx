import { type Component, For, onMount } from 'solid-js';
import './styles.scss';

interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com',
        icon: 'github',
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: 'linkedin',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'twitter',
    },
    {
        name: 'Dribbble',
        url: 'https://dribbble.com',
        icon: 'dribbble',
    },
];

const iconPaths: Record<string, string> = {
    github: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    linkedin: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    dribbble: 'M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.18 10.18 0 004.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.161 10.161 0 006.29 2.166c1.42 0 2.77-.29 4.006-.816zM3.616 18.075c.235-.407 3.03-5.062 8.3-6.78.133-.043.267-.082.4-.12-.25-.562-.51-1.12-.79-1.67-5.14 1.54-10.13 1.476-10.58 1.466l-.007.39c0 2.6.98 4.98 2.59 6.78v-.065zm-1.63-9.88c.46 0 4.87.02 9.71-1.26-1.74-3.095-3.62-5.69-3.9-6.07a10.17 10.17 0 00-5.81 7.33zM10.72 3.26c.29.39 2.2 2.98 3.92 6.16 3.73-1.4 5.31-3.52 5.54-3.86a10.15 10.15 0 00-9.46-2.3zM21.06 7.4c-.27.38-2.08 2.69-5.99 4.27.21.43.4.86.58 1.29l.2.48c3.41-.43 6.8.26 7.14.34-.02-2.35-.79-4.52-1.93-6.38z',
};

const Contacts: Component = () => {
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

    return (
        <section id="contacts" class="contacts" ref={sectionRef}>
            <div class="contacts__container">
                <div class="contacts__header reveal">
                    <span class="contacts__label">Get in Touch</span>
                    <h2 class="contacts__title">Let's Connect</h2>
                    <p class="contacts__subtitle">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </div>

                <div class="contacts__links reveal">
                    <For each={socialLinks}>
                        {(link, index) => (
                            <a
                                href={link.url}
                                class="social-link reveal-scale"
                                style={{ 'transition-delay': `${index() * 0.1}s` }}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                            >
                                <div class="social-link__icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d={iconPaths[link.icon]} />
                                    </svg>
                                </div>
                                <span class="social-link__name">{link.name}</span>
                            </a>
                        )}
                    </For>
                </div>

                <div class="contacts__cta reveal">
                    <a href="mailto:hello@example.com" class="contacts__email-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span>hello@example.com</span>
                    </a>
                </div>

                <footer class="contacts__footer reveal">
                    <p>© 2024 John Doe. All rights reserved.</p>
                    <p>Built with Solid.js & ❤️</p>
                </footer>
            </div>
        </section>
    );
};

export default Contacts;
