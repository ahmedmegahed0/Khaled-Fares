import { useState, useEffect } from 'react';
import ribbonImg from '../assets/ribbon.png';
import waxSealImg from '../assets/wax_seal.png';

export default function WelcomeScreen({ onOpen }) {
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        if (!isOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpened]);

    const handleOpen = () => {
        setIsOpened(true);
        // Start the music via the parent's callback
        if (onOpen) onOpen();
    };

    return (
        <div 
            className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#fcf9f2] transition-all duration-1000 ease-in-out ${isOpened ? 'opacity-0 pointer-events-none translate-y-[-10px]' : 'opacity-100 pointer-events-auto translate-y-0'}`}
        >
            {/* Background texture via CSS is applied globally, but let's add subtle noise if needed, or just let it inherit */}

            {/* Decorative Ribbon */}
            <img 
                src={ribbonImg} 
                alt="Ribbon" 
                className="absolute top-[20%] left-0 w-full max-w-4xl opacity-90 blend-multiply pointer-events-none -translate-x-1/4 -rotate-6"
            />
            
            <img 
                src={ribbonImg} 
                alt="Ribbon" 
                className="absolute bottom-[20%] right-0 w-full max-w-4xl opacity-90 blend-multiply pointer-events-none translate-x-1/4 rotate-[170deg]"
            />

            <div className="relative z-10 flex flex-col items-center text-center p-10 md:p-16 bg-[#fcf9f2]/95 backdrop-blur-md border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-lg w-[90%]">
                {/* Elegant border corners */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/60"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#d4af37]/60"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#d4af37]/60"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#d4af37]/60"></div>
                <div className="flex flex-col items-center mb-10">
                    <span className="font-serif-elegant italic text-xl text-[#2c3e50]/70 mb-4">You are cordially invited to the engagement of</span>
                    <h1 className="font-serif-elegant text-5xl md:text-6xl font-normal text-[#1c2833] mb-4 tracking-wide text-center">
                        Khaled <span className="text-[#d4af37] italic font-script px-2 text-6xl">&amp;</span> Hoda
                    </h1>
                </div>

                <button 
                    onClick={handleOpen}
                    className="group relative px-12 py-4 bg-[#1c2833] text-[#d4af37] font-label-caps uppercase tracking-[0.3em] text-xs hover:bg-[#d4af37] hover:text-[#1c2833] transition-all duration-500 rounded-sm overflow-hidden shadow-[0_10px_30px_rgba(28,40,51,0.2)]"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] group-hover:-translate-y-1 transition-transform duration-300">
                            drafts
                        </span>
                        Open Invitation
                    </span>
                    {/* Hover effect shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
            </div>
        </div>
    );
}
