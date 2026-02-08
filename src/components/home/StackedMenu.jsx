import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackedMenu = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // --- CUSTOM IMAGE ARRAY ---
  // Replace these URLs and Names with your own images
  const myStackedImages = [
    {
      id: 1,
      name: "Classic Espresso",
      src: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600",
    },
    {
      id: 2,
      name: "Steamed Momos",
      src: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=600",
    },
    {
      id: 3,
      name: "Chicken Roll",
      src: "https://i.ytimg.com/vi/NRXIO1xpbRE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBlfXXnrS9GT7w8u5-cIYD5Pc0RTg",
    },
    {
      id: 4,
      name: "Peri Peri Fries",
      src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600",
    },
    {
      id: 5,
      name: "Cold Coffee",
      src: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // Initial scrambled state
      gsap.set(cards, {
        y: (i) => 200 * (i + 1), // Start further down
        x: (i) => (i % 2 === 0 ? -40 : 40), // Spread left and right
        rotation: (i) => (i % 2 === 0 ? -20 : 20), // More aggressive rotation
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500", // Length of the scroll experience
          pin: true,
          scrub: 1,
        },
      });

      // Animation: Cards fly in and stack
      tl.to(cards, {
        y: 0,
        x: 0,
        opacity: 1,
        rotation: (i) => (i % 2 === 0 ? -2 : 2) * (i + 1), // Settle into a neat but slightly messy stack
        stagger: 0.6,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen bg-black flex flex-col items-center justify-center overflow-hidden border-t border-white/5"
    >
      <div className="text-center mb-12 z-50">
        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
          Chef's <span className="text-orange-600">Specials</span>
        </h2>
        <p className="text-white/40 font-mono text-sm tracking-widest uppercase mt-2">
          The Perfect Stack
        </p>
      </div>

      <div className="relative w-[280px] h-[380px] md:w-[450px] md:h-[550px]">
        {myStackedImages.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute inset-0 bg-white p-3 pb-14 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-sm transform origin-bottom"
            style={{ zIndex: index }}
          >
            {/* Image Container */}
            <div className="w-full h-full overflow-hidden bg-neutral-900 border border-black/10">
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            {/* Polaroid Handwriting Style Label */}
            <div className="absolute bottom-3 left-6">
              <span className="text-black font-serif italic text-2xl md:text-3xl font-bold opacity-80">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedMenu;
