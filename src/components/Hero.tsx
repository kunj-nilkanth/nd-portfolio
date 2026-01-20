import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-neutral-950 z-10" />
                <img
                    src="/images/Koenigsegg Jesko Absolut Header V3.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-2xl"
                >
                    Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Mastery</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-neutral-300 max-w-2xl font-light tracking-wide"
                >
                    Capturing moments that tell a thousand stories.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 flex flex-col items-center gap-2"
                >
                    <span className="text-xs tracking-widest uppercase text-neutral-500">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
