export default function QuoteSection() {
    return (
        <section className="py-24 relative z-10 flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop text-center">
            <div className="max-w-3xl mx-auto flex flex-col items-center reveal">
                <span className="material-symbols-outlined text-[#d4af37] text-4xl mb-8 opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                </span>
                
                <h2 className="font-serif-elegant text-3xl md:text-5xl leading-relaxed text-[#1c2833] italic mb-10">
                    "I have found the one whom my soul loves."
                </h2>
                
                <div className="flex items-center gap-6 w-full justify-center opacity-80">
                    <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent to-[#d4af37]/70"></div>
                    <span className="text-[#1c2833] text-xs font-label-caps tracking-[0.3em] uppercase">Khaled &amp; Hoda</span>
                    <div className="h-[1px] w-16 md:w-24 bg-gradient-to-l from-transparent to-[#d4af37]/70"></div>
                </div>
            </div>
        </section>
    );
}
