import { type Component, onMount, onCleanup } from 'solid-js';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stacks from './components/Stacks';
import Contacts from './components/Contacts';
import './App.scss';

const App: Component = () => {
  onMount(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    onCleanup(() => {
      lenis.destroy();
    });
  });

  return (
    <div class="app">
      <Navbar />
      <main class="main">
        <Hero />
        <Projects />
        <Stacks />
        <Contacts />
      </main>
    </div>
  );
};

export default App;
