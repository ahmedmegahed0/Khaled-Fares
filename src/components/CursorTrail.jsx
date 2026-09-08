import { useEffect, useState } from 'react';

export default function CursorTrail() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Only run on non-touch devices
        if (!window.matchMedia("(pointer: fine)").matches) return;

        let lastTime = 0;
        
        const handleMouseMove = (e) => {
            const now = Date.now();
            // Limit particle generation to every 30ms to prevent performance issues
            if (now - lastTime < 30) return;
            lastTime = now;

            const newParticle = {
                id: now,
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 4 + 2, // 2px to 6px
                offsetX: (Math.random() - 0.5) * 20, // random drift
                offsetY: Math.random() * 20 + 10 // random fall
            };

            setParticles(prev => [...prev.slice(-20), newParticle]); // keep max 20 particles
            
            // Remove particle after animation
            setTimeout(() => {
                setParticles(prev => prev.filter(p => p.id !== now));
            }, 1000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {particles.map(p => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-[#d4af37] mix-blend-screen animate-particle-fade pointer-events-none"
                    style={{
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                        boxShadow: '0 0 4px #d4af37, 0 0 8px #fcf9f2',
                        '--offsetX': `${p.offsetX}px`,
                        '--offsetY': `${p.offsetY}px`
                    }}
                />
            ))}
        </div>
    );
}
