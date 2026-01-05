import { type Component, For, onMount } from 'solid-js';
import './styles.scss';

interface Stack {
    name: string;
    icon: string;
    category: string;
}

const stacks: Stack[] = [
    // Frontend
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Solid.js', icon: '💎', category: 'Frontend' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend' },
    { name: 'TypeScript', icon: '🔷', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'SCSS', icon: '🎨', category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'Go', icon: '🐹', category: 'Backend' },
    { name: 'GraphQL', icon: '◈', category: 'Backend' },

    // Database & Cloud
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Redis', icon: '🔴', category: 'Database' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Figma', icon: '🎯', category: 'Design' },
    { name: 'Git', icon: '📦', category: 'Tools' },
    { name: 'Linux', icon: '🐧', category: 'System' },
];

const Stacks: Component = () => {
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
        <section id="stacks" class="stacks" ref={sectionRef}>
            <div class="stacks__container">
                <div class="stacks__header reveal">
                    <span class="stacks__label">Skills & Tools</span>
                    <h2 class="stacks__title">Tech Stack</h2>
                    <p class="stacks__subtitle">
                        Technologies I work with to bring ideas to life
                    </p>
                </div>

                <div class="stacks__grid">
                    <For each={stacks}>
                        {(stack, index) => (
                            <div
                                class="stack-card reveal-scale"
                                style={{ 'transition-delay': `${index() * 0.03}s` }}
                            >
                                <span class="stack-card__icon">{stack.icon}</span>
                                <span class="stack-card__name">{stack.name}</span>
                                <span class="stack-card__category">{stack.category}</span>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
};

export default Stacks;
