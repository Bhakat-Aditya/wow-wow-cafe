import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import interiorImg from "../assets/images/interior-hero.jpg";

// Component Imports
import BestsellerSlider from "../components/home/BestsellerSlider";
import MiniGallery from "../components/home/MiniGallery";

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
      {/* Background with Darker Overlay for Elegance */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${interiorImg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center px-4">
        <p className="text-orange-500 font-bold tracking-[0.2em] uppercase mb-4 animate-fadeIn">
          Est. 2026
        </p>
        <h1
          ref={textRef}
          className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none"
        >
          Wow Wow <br />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            Cafe
          </span>
        </h1>
      </div>

      <div className="absolute bottom-10 z-10 animate-bounce text-white/50 font-mono text-xs uppercase tracking-widest">
        Scroll to Explore
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-black w-full overflow-x-hidden">
      <Hero />

      {/* The Pinned Section */}
      <BestsellerSlider />

      {/* --- LAYOUT FIX --- */}
      {/* This wrapper ensures everything sits ON TOP of the slider after it finishes */}
      <div className="relative z-20 bg-black shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <MiniGallery />

        {/* Updated CTA Section */}
        <div className="bg-neutral-900 py-32 px-6 text-center border-t border-white/5">
          <p className="text-orange-500 font-bold uppercase tracking-widest mb-4">
            What are you waiting for?
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-10">
            Taste the Magic
          </h2>
          <Link
            to="/menu"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-orange-600 font-mono rounded-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 hover:bg-orange-700 uppercase tracking-widest"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
