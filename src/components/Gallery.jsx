import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

import mem1 from "../assets/memory1.jpeg";
import mem2 from "../assets/memory2.jpeg";
import mem3 from "../assets/memory3.jpeg";
import mem4 from "../assets/memory4.jpeg";
import mem5 from "../assets/memory5.jpeg";

const initialPhotos = [
    { id: 1, image: mem1, caption: "The beginning of us", rotation: -2 },
    { id: 2, image: mem2, caption: "Every smile together", rotation: 2 },
    { id: 3, image: mem3, caption: "Endless laughter", rotation: -1 },
    { id: 4, image: mem4, caption: "A step closer", rotation: 3 },
    { id: 5, image: mem5, caption: "Building our future", rotation: -3 },
];

export default function Gallery() {
    const [cards, setCards] = useState(initialPhotos);

    const handleDragEnd = (event, info) => {
        // If swiped left or right far enough
        if (Math.abs(info.offset.x) > 100) {
            setCards((prev) => {
                const newCards = [...prev];
                // Remove the top card (last in array)
                const topCard = newCards.pop();
                // Put it at the bottom (first in array)
                newCards.unshift(topCard);
                return newCards;
            });
        }
    };

    return (
        <section className="py-stack-xl relative z-10 overflow-hidden" id="gallery">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center">
                <div className="text-center mb-16 reveal relative z-20">
                    <h2 className="font-script text-6xl md:text-8xl text-[#1c2833] mb-4">Scrapbook Memories</h2>
                    <p className="text-[#2c3e50]/80 font-serif-elegant text-xl italic max-w-md mx-auto bg-[#fcf9f2]/80 px-4 py-2 rounded-full backdrop-blur-sm border border-[#d4af37]/30">
                        Swipe left or right to flip through...
                    </p>
                </div>
                
                {/* Card Stack Container */}
                <div className="w-full h-[60vh] md:h-[80vh] relative reveal flex justify-center items-center">
                    {cards.map((photo, index) => {
                        const isTop = index === cards.length - 1;
                        // Calculate offset from top (0 for top card, 1 for second, etc.)
                        const offsetFromTop = cards.length - 1 - index;
                        
                        return (
                            <motion.div
                                key={photo.id}
                                drag={isTop ? "x" : false}
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                onDragEnd={isTop ? handleDragEnd : undefined}
                                initial={false}
                                animate={{
                                    y: offsetFromTop * 15,
                                    scale: 1 - offsetFromTop * 0.05,
                                    rotate: isTop ? photo.rotation : photo.rotation + (offsetFromTop % 2 === 0 ? 2 : -2),
                                    zIndex: index,
                                    opacity: offsetFromTop > 3 ? 0 : 1 // Hide cards that are too far back
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                whileDrag={{ scale: 1.05, cursor: "grabbing" }}
                                className={`absolute w-[80vw] sm:w-[350px] bg-white p-4 pb-16 md:p-6 md:pb-24 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-[#e4e4cc] ${isTop ? "cursor-grab" : ""}`}
                            >
                                <img 
                                    src={photo.image} 
                                    alt={photo.caption} 
                                    className="w-full h-[70vw] sm:h-[320px] object-cover sepia-[0.15] border border-gray-100 pointer-events-none" 
                                />
                                <div className="absolute bottom-4 md:bottom-8 left-0 w-full text-center px-4 pointer-events-none">
                                    <p className="font-script text-3xl md:text-4xl text-[#1c2833]">{photo.caption}</p>
                                </div>
                                
                                {/* Tape piece effect (only visible on top few cards for realism) */}
                                {offsetFromTop < 2 && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm rotate-[-4deg] shadow-sm border border-white/20 pointer-events-none"></div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
