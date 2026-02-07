import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Star } from "lucide-react";
import interiorImg from "../assets/images/interior-hero.jpg";
import { menuData } from "../data/menuData"; // Import your data

gsap.registerPlugin(ScrollTrigger);

// --- HERO SECTION ---
const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Reveal
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
      );

      // Parallax Effect
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

// --- INFINITE MARQUEE ---
const Marquee = () => {
  return (
    <div className="bg-red-600 py-4 overflow-hidden rotate-1 relative z-20 -mt-10 mb-20 border-y-4 border-black">
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

// --- BESTSELLER HORIZONTAL SCROLL ---
const Bestsellers = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  // Filter only items marked as bestseller
  const bestsellers = menuData.filter((item) => item.bestseller).slice(0, 5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-100vw", // Move left by 1 full viewport width (adjust based on content)
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top", // Scroll distance
            scrub: 1,
            pin: true,
          },
        },
      );
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-neutral-950 overflow-hidden">
      <div className="h-screen flex items-center relative">
        {/* Static Title */}
        <div className="absolute top-10 left-10 md:left-20 z-10">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 uppercase tracking-tighter">
            Crowd <br /> Favorites
          </h2>
          <p className="text-red-500 font-mono mt-2">
            Top rated by 1.1k+ customers
          </p>
        </div>

        {/* Scrolling Cards */}
        <div
          ref={sectionRef}
          className="flex gap-10 pl-[5vw] md:pl-[40vw] w-[200vw]"
        >
          {bestsellers.map((item) => (
            <div
              key={item.id}
              className="w-[80vw] md:w-[25vw] flex-shrink-0 group"
            >
              <div className="relative h-[50vh] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=500";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white uppercase leading-none mb-2">
                    {item.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-mono text-xl">
                      ₹
                      {typeof item.price === "object"
                        ? item.price.full
                        : item.price}
                    </span>
                    <div className="bg-white/10 p-2 rounded-full text-yellow-400">
                      <Star size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* "See More" Card */}
          <div className="w-[80vw] md:w-[20vw] flex-shrink-0 flex items-center justify-center">
            <Link to="/menu" className="group flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <ArrowRight size={40} className="text-white" />
              </div>
              <span className="text-white text-xl font-bold uppercase tracking-widest">
                View Full Menu
              </span>
            </Link>
          </div>
        </div>
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
          {/* Large Left Image */}
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

          {/* Right Stack */}
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
    <div className="bg-black">
      <Hero />
      <Marquee />
      <Bestsellers />
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
