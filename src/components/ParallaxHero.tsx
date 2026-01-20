import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-gray-950 z-10" />
                <img
                    src="/images/Koenigsegg Jesko Absolut Header V3.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover object-center scale-110"
                />
            </motion.div>

            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-20 text-center px-4 mix-blend-overlay"
            >
                <h1
                    className="text-[12vw] leading-none font-bold tracking-tighter text-white/90 uppercase"
                >
                    Visionary
                </h1>
                <p className="text-xl md:text-2xl font-light tracking-[0.5em] text-white/80 mt-4 uppercase">
                    Photography Portfolio
                </p>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent opacity-50" />
            </motion.div>
        </div>
    );
}
