import heroImg from "../assets/hero.jpeg";
import frameImg from "../assets/frame.png";

export default function Hero() {
    return (
        <header className="relative min-h-[90vh] w-full flex flex-col md:flex-row items-center justify-center px-margin-mobile md:px-margin-desktop py-stack-xl gap-12 lg:gap-24 z-10 max-w-container-max mx-auto">
            <div className="w-full text-center reveal pt-20 md:pt-0">
                <p className="font-label-caps text-label-caps tracking-[0.4em] mb-6 uppercase text-[#a58623] font-bold">Engagement Celebration</p>
                <h1 className="font-script text-7xl md:text-9xl mb-4 text-[#1c2833] leading-tight">Khaled</h1>
                <h1 className="font-script text-5xl md:text-7xl mb-4 text-[#d4af37] leading-tight">&amp;</h1>
                <h1 className="font-script text-7xl md:text-9xl mb-8 text-[#1c2833] leading-tight">Huda</h1>
                
                <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8 opacity-70"></div>
                
                <div className="mx-auto max-w-sm md:max-w-md bg-[#ffffff]/60 backdrop-blur-xl border border-[#d4af37]/40 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(28,40,51,0.08)] relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                    {/* Glassmorphism Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-[#d4af37]/60 rounded-tl-xl transition-all duration-500 group-hover:scale-110"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-[#d4af37]/60 rounded-br-xl transition-all duration-500 group-hover:scale-110"></div>
                    
                    <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                        {/* Date Section */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-3 group-hover:bg-[#d4af37]/20 transition-colors duration-500">
                                <span className="material-symbols-outlined text-[#d4af37] text-[20px]">calendar_today</span>
                            </div>
                            <p className="font-serif-elegant text-2xl md:text-3xl text-[#1c2833] font-medium tracking-wide">Friday, September 11, 2026</p>
                            <p className="font-label-caps text-xs tracking-[0.25em] text-[#2c3e50]/60 uppercase mt-2">11/9/2026</p>
                        </div>
                        
                        {/* Divider */}
                        <div className="flex items-center gap-3 w-full justify-center">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]/50"></div>
                            <span className="text-[#d4af37] text-xs">✦</span>
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]/50"></div>
                        </div>
                        
                        {/* Location Section */}
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-3 group-hover:bg-[#d4af37]/20 transition-colors duration-500">
                                <span className="material-symbols-outlined text-[#d4af37] text-[20px]">location_on</span>
                            </div>
                            <p className="font-serif-elegant text-2xl md:text-3xl text-[#1c2833] font-medium">At Home</p>
                        </div>
                    </div>
                </div>
            </div>
            

        </header>
    );
}
