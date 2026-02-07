import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import interiorImg from "../assets/images/interior-hero.jpg";
import BestsellerSlider from "../components/home/BestsellerSlider"; // Import here


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

// --- MINI GALLERY ---
const MiniGallery = () => {
  return (
    <div className="bg-black py-20 px-4 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              The Vibe
            </h2>
            <p className="text-gray-500 mt-2">
              Moments captured at Wow Wow Cafe
            </p>
          </div>
          <Link
            to="/gallery"
            className="text-red-500 font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 mt-4 md:mt-0"
          >
            See All Photos <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[400px]">
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src="/images/gallery/interior-1.jpg"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000";
              }}
            />
            <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider">
              Interior
            </div>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/gallery/food-1.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=500";
                }}
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/images/gallery/vibes-1.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80&w=500";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <Hero />
      <Marquee />

      {/* Insert Component Here */}
      <BestsellerSlider />

      <MiniGallery />

      {/* Final CTA */}
      <div className="bg-red-600 text-black py-20 text-center">
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
