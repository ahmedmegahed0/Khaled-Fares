export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 py-4 transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="font-script text-3xl font-bold text-[#1c2833] tracking-tight">K&amp;H</div>
        <div className="hidden md:flex items-center gap-8">
          
        </div>
        <button className="bg-transparent text-[#1c2833] border border-[#1c2833]/30 px-6 py-2 rounded-sm font-label-caps text-xs tracking-widest hover:bg-[#1c2833] hover:text-[#d4af37] transition-all duration-300 active:scale-95">
          ADD TO CALENDAR
        </button>
      </div>
    </nav>
  );
}
