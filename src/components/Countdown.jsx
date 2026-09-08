import { useEffect, useState } from "react";

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: '--', hours: '--', minutes: '--', seconds: '--' });

    useEffect(() => {
        const targetDate = new Date("September 11, 2026 16:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const gap = targetDate - now;

            if (gap < 0) {
                setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const d = Math.floor(gap / day);
            const h = Math.floor((gap % day) / hour);
            const m = Math.floor((gap % hour) / minute);
            const s = Math.floor((gap % minute) / second);

            setTimeLeft({
                days: d < 10 ? '0' + d : d,
                hours: h < 10 ? '0' + h : h,
                minutes: m < 10 ? '0' + m : m,
                seconds: s < 10 ? '0' + s : s
            });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-stack-xl relative z-10">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
                <p className="font-script text-4xl md:text-5xl text-[#d4af37] mb-8 reveal">The Countdown Begins</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    <div className="w-24 md:w-32 flex flex-col items-center reveal">
                        <span className="font-serif-elegant text-5xl md:text-7xl text-[#1c2833] mb-2">{timeLeft.days}</span>
                        <span className="font-label-caps text-xs tracking-[0.3em] text-[#2c3e50]/70 uppercase">Days</span>
                    </div>
                    <div className="w-24 md:w-32 flex flex-col items-center reveal" style={{ transitionDelay: '100ms' }}>
                        <span className="font-serif-elegant text-5xl md:text-7xl text-[#1c2833] mb-2">{timeLeft.hours}</span>
                        <span className="font-label-caps text-xs tracking-[0.3em] text-[#2c3e50]/70 uppercase">Hours</span>
                    </div>
                    <div className="w-24 md:w-32 flex flex-col items-center reveal" style={{ transitionDelay: '200ms' }}>
                        <span className="font-serif-elegant text-5xl md:text-7xl text-[#1c2833] mb-2">{timeLeft.minutes}</span>
                        <span className="font-label-caps text-xs tracking-[0.3em] text-[#2c3e50]/70 uppercase">Mins</span>
                    </div>
                    <div className="w-24 md:w-32 flex flex-col items-center reveal" style={{ transitionDelay: '300ms' }}>
                        <span className="font-serif-elegant text-5xl md:text-7xl text-[#1c2833] mb-2">{timeLeft.seconds}</span>
                        <span className="font-label-caps text-xs tracking-[0.3em] text-[#2c3e50]/70 uppercase">Secs</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
