import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [cursorText, setCursorText] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleHoverStart = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('[data-cursor]')) {
                const element = target.closest('[data-cursor]') as HTMLElement;
                setCursorText(element.getAttribute('data-cursor') || "");
                setIsHovered(true);
            }
        };

        const handleHoverEnd = () => {
            setIsHovered(false);
            setCursorText("");
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHoverStart);
        // window.addEventListener('mouseout', handleHoverEnd); // Often better handled by mouseover on non-interactive elements

        // For now simple global listener for mouseover is okay, but mouseleave needs specific targets or check
        window.addEventListener('mouseout', (e) => {
            if (!(e.target as HTMLElement).closest('[data-cursor]')) {
                handleHoverEnd();
            }
        })

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHoverStart);
            window.removeEventListener('mouseout', handleHoverEnd);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                backgroundColor: isHovered ? '#fff' : 'transparent',
                border: '1px solid white',
                scale: isHovered ? 3 : 1,
            }}
        >
            <span className="text-[4px] font-bold text-black uppercase tracking-widest">{cursorText}</span>
        </motion.div>
    );
}
