import { type Component, onMount } from 'solid-js';
import './styles.scss';

const Hero: Component = () => {
    let heroRef: HTMLElement | undefined;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef) {
            const elements = heroRef.querySelectorAll('.reveal');
            elements.forEach((el) => observer.observe(el));
        }
    });

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" class="hero" ref={heroRef}>
            <div class="hero__bg">
                <div class="hero__gradient" />
                <div class="hero__orb hero__orb--1" />
                <div class="hero__orb hero__orb--2" />
                <div class="hero__orb hero__orb--3" />
                <div class="hero__grid" />
            </div>

            <div class="hero__container">
                <div class="hero__content">
                    <div class="hero__profile reveal">
                        <div class="hero__avatar">
                            <div class="hero__avatar-placeholder">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="hero__text reveal delay-1">
                        <span class="hero__greeting">Welcome to my world</span>
                        <h1 class="hero__name">John Doe</h1>
                        <p class="hero__tagline">
                            Full Stack Developer & UI Designer crafting
                            <span class="hero__highlight"> exceptional digital experiences</span> that push the boundaries of what's possible
                        </p>
                    </div>

                    <div class="hero__actions reveal delay-2">
                        <button class="hero__cta" onClick={scrollToProjects}>
                            Explore My Work
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                        </button>
                        <a href="#contacts" class="hero__secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* <div class="hero__scroll-indicator reveal delay-3">
                    <div class="hero__mouse">
                        <div class="hero__wheel" />
                    </div>
                    <span>Scroll to explore</span>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
