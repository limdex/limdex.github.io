import { type Component, createSignal, onMount } from 'solid-js';
import './styles.scss';

const Navbar: Component = () => {
    const [scrolled, setScrolled] = createSignal(false);
    const [activeSection, setActiveSection] = createSignal('home');

    onMount(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'projects', 'stacks', 'contacts'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'stacks', label: 'Stacks' },
        { id: 'contacts', label: 'Contacts' },
    ];

    return (
        <nav class={`navbar ${scrolled() ? 'navbar--scrolled' : ''}`}>
            <div class="navbar__container">
                <a href="#home" class="navbar__logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
                    <span class="navbar__logo-text">Portfolio</span>
                </a>

                <ul class="navbar__menu">
                    {navItems.map((item) => (
                        <li class="navbar__item">
                            <a
                                href={`#${item.id}`}
                                class={`navbar__link ${activeSection() === item.id ? 'navbar__link--active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
