import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import ParallaxHero from './components/ParallaxHero';
import StorySection from './components/StorySection';
import HorizontalGallery from './components/HorizontalGallery';
import Footer from './components/Footer';

import { curatedStories } from './data/images';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <div className="font-['Outfit'] bg-gray-950 text-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation />

      <main>
        <ParallaxHero />

        <div className="relative z-10 bg-gray-950">
          {curatedStories.map((story, index) => (
            <StorySection key={story.title} story={story} index={index} />
          ))}
        </div>

        <HorizontalGallery />
      </main>

      <Footer />
    </div>
  )
}

export default App
