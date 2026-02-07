import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import interiorImg from "../assets/images/interior-hero.jpg";

// Component Imports
import BestsellerSlider from "../components/home/BestsellerSlider";
import MiniGallery from "../components/home/MiniGallery"; // Imported the new component

gsap.registerPlugin(ScrollTrigger);

// --- HERO SECTION ---
const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
      );

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -150,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${interiorImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <h1
        ref={textRef}
        className="relative z-10 text-7xl md:text-9xl font-black text-white uppercase tracking-tighter text-center leading-none"
      >
        Wow Wow <br /> <span className="text-red-600">Cafe</span>
      </h1>

      <div className="absolute bottom-10 z-10 animate-bounce text-white/50 font-mono text-sm uppercase tracking-widest">
        ↓ Scroll for Cravings
      </div>
    </div>
  );
};

// --- MARQUEE ---
const Marquee = () => {
  return (
    <div className="bg-red-600 py-4 overflow-hidden -rotate-1 relative z-20 -mt-10 mb-0 border-y-4 border-black">
      <div className="whitespace-nowrap flex gap-8 animate-marquee text-black font-black text-4xl uppercase tracking-tighter">
        {[...Array(10)].map((_, i) => (
          <span key={i}>
            Fresh Food • Good Vibes • Live Music • Wow Moments •
          </span>
        ))}
      </div>
    </div>
  );
};

// --- MAIN HOME COMPONENT ---
const Home = () => {
  return (
    // 'relative' here helps contain the flow
    <div className="bg-black w-full relative">
      <Hero />
      <Marquee />

      {/* Extracted Components */}
      <BestsellerSlider />
      <MiniGallery />

      {/* Final CTA (Kept here as it's the page closer) */}
      <div className="relative z-10 bg-red-600 text-black py-20 text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
          Hungry Yet?
        </h2>
        <Link
          to="/menu"
          className="inline-block bg-black text-white px-10 py-4 rounded-full text-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
