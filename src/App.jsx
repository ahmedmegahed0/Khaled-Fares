import { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import QuoteSection from './components/QuoteSection';

import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import CursorTrail from './components/CursorTrail';
import FloatingElements from './components/FloatingElements';

// Generated Assets
import floralImg from './assets/floral.png';
import ribbonImg from './assets/ribbon.png';
import songFile from './assets/song.mp3';

function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // When the user clicks "Open Invitation", start the music immediately
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Autoplay failed after interaction:", err);
      });
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Reveal on Scroll
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="font-serif-elegant text-[#2c3e50] overflow-x-hidden relative min-h-screen flex flex-col">
      <CursorTrail />
      <FloatingElements />
      {/* Scrapbook Props placed around the canvas */}
      <img src={floralImg} alt="" className="absolute top-0 right-0 w-[60vw] md:w-[40vw] max-w-2xl opacity-90 blend-multiply pointer-events-none -translate-y-20 translate-x-10 z-0" />
      <img src={ribbonImg} alt="" className="absolute top-[30vh] left-0 w-[50vw] md:w-[35vw] max-w-xl opacity-95 blend-multiply pointer-events-none -translate-x-10 z-0" />
      <img src={floralImg} alt="" className="absolute top-[80vh] left-0 w-[50vw] md:w-[40vw] max-w-2xl opacity-90 blend-multiply pointer-events-none -scale-x-100 -translate-x-10 z-0" />
      <img src={ribbonImg} alt="" className="absolute bottom-0 right-0 w-[40vw] md:w-[30vw] max-w-xl opacity-95 blend-multiply pointer-events-none -scale-y-100 translate-x-10 z-0" />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <Hero />
        <Countdown />
        <QuoteSection />

        <div className="mt-auto">
          <Footer isPlaying={isPlaying} toggleMusic={toggleMusic} />
        </div>
      </div>

      <WelcomeScreen onOpen={handleOpenInvitation} />

      {/* Global Audio Player */}
      <audio 
        ref={audioRef}
        src={songFile}
        loop
        preload="auto"
        className="hidden"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default App;
