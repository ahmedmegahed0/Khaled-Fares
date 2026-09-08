import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const elementsList = ['🤍', '✨', '💍', 'F & D', '🌸', '🕊️'];

export default function FloatingElements() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Generate 15 floating items
        const newItems = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            content: elementsList[Math.floor(Math.random() * elementsList.length)],
            x: Math.random() * 100, // random start horizontal position (vw)
            duration: Math.random() * 20 + 15, // float down duration: 15s to 35s
            delay: Math.random() * 10, // random start delay
            size: Math.random() * 1.5 + 1, // 1rem to 2.5rem
            rotate: Math.random() * 360,
            drift: (Math.random() - 0.5) * 40 // drift left or right by up to 20vw
        }));
        setItems(newItems);
    }, []);

    // Only show after initial render to avoid hydration mismatch if SSR (though this is SPA)
    if (items.length === 0) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ 
                        y: -100, 
                        x: `${item.x}vw`,
                        rotate: item.rotate,
                        opacity: 0,
                        scale: item.size
                    }}
                    animate={{ 
                        y: ['-5vh', '105vh'], // fall from top to bottom
                        x: [`${item.x}vw`, `${item.x + item.drift}vw`], // drift left/right
                        rotate: item.rotate + 180, // slowly rotate while falling
                        opacity: [0, 1, 1, 0] // fade in, stay visible, fade out at bottom
                    }}
                    transition={{ 
                        duration: item.duration, 
                        repeat: Infinity, 
                        delay: item.delay,
                        ease: "linear"
                    }}
                    className={`absolute ${item.content === 'F & D' ? 'font-script text-[#d4af37]' : ''}`}
                    style={{
                        fontSize: item.content === 'F & D' ? '2rem' : `${item.size}rem`,
                        filter: item.content !== 'F & D' ? 'sepia(0.5) opacity(0.8)' : 'none',
                    }}
                >
                    {item.content}
                </motion.div>
            ))}
        </div>
    );
}
