import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { allImages } from '../data/images';

export default function HorizontalGallery() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-gray-950">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4 px-12 md:gap-12 md:px-24">
                    {/* Title Card */}
                    <div className="flex-shrink-0 w-[80vw] md:w-[40vw] h-[60vh] flex flex-col justify-end p-8 border border-white/10 rounded-sm">
                        <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-800">
                            Archive
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-sm">
                            A collection of uncurated moments, experiments, and visual thoughts.
                        </p>
                    </div>

                    {allImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative flex-shrink-0 w-[80vw] md:w-[35vw] aspect-[3/4] md:aspect-[4/5] overflow-hidden group bg-gray-900"
                        >
                            <img
                                src={`/images/${img}`}
                                alt={`Archive ${i}`}
                                data-cursor="Zoom"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                            />
                            <span className="absolute bottom-4 left-4 text-xs font-mono text-white/50">{`IMG_${i.toString().padStart(3, '0')}`}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
