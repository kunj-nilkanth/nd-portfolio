import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { ImageStory } from '../data/images';

interface StorySectionProps {
    story: ImageStory;
    index: number;
}

export default function StorySection({ story, index }: StorySectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    const isEven = index % 2 === 0;

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center p-8 bg-gray-950">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
            >
                <img
                    src={`/images/${story.src}`}
                    alt={story.title}
                    className="w-full h-full object-cover grayscale opacity-50 blur-sm"
                />
            </motion.div>

            <div className="container mx-auto z-10 flex flex-col md:flex-row items-center justify-center h-full gap-12 md:gap-24">

                {/* Main Image */}
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]) }}
                    className={`w-full md:w-1/2 aspect-[4/5] overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}
                >
                    <img
                        src={`/images/${story.src}`}
                        alt={story.title}
                        data-cursor="View"
                        className="w-full h-full object-cover shadow-2xl transition-transform duration-700 hover:scale-105"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    style={{ opacity, y }}
                    className={`w-full md:w-1/3 flex flex-col gap-6 ${isEven ? 'md:order-2 text-left' : 'md:order-1 text-right md:text-right'}`}
                >
                    <span className="text-orange-500 font-mono tracking-widest text-sm uppercase">0{index + 1} — {story.mood}</span>
                    <h2 className="text-5xl md:text-7xl font-bold font-['Outfit'] leading-none tracking-tight text-white">{story.title}</h2>
                    <p className="text-gray-400 text-lg font-light leading-relaxed">{story.description}</p>
                </motion.div>

            </div>
        </section>
    );
}
