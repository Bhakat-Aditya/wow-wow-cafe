import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Star } from "lucide-react";
import { menuData } from "../../data/menuData";

gsap.registerPlugin(ScrollTrigger);

const BestsellerSlider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  // Filter items
  const bestsellers = menuData.filter((item) => item.bestseller).slice(0, 5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logic: Pin the container, animate the content to the left
      gsap.to(sectionRef.current, {
        x: () => -(sectionRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${sectionRef.current.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true, // Fixes resize issues
          anticipatePin: 1,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-neutral-950 overflow-hidden relative">
      <div className="h-screen flex items-center w-full">
        {/* Static Title (Absolute Positioned) */}
        <div className="absolute top-10 left-10 md:left-20 z-10 pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 uppercase tracking-tighter">
            Crowd <br /> Favorites
          </h2>
          <p className="text-red-500 font-mono mt-2 text-lg">
            Top rated by 1.1k+ customers
          </p>
        </div>

        {/* The Scrolling Track */}
        <div ref={sectionRef} className="flex gap-10 pl-[5vw] md:pl-[40vw]">
          {bestsellers.map((item) => (
            <div
              key={item.id}
              className="w-[80vw] md:w-[25vw] flex-shrink-0 group"
            >
              <div className="relative h-[50vh] rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
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
                    <span className="text-red-500 font-mono text-xl font-bold">
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

          {/* "View All" Card at the end */}
          <div className="w-[80vw] md:w-[20vw] flex-shrink-0 flex items-center justify-center pr-20">
            <Link to="/menu" className="group flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                <ArrowRight size={40} className="text-white" />
              </div>
              <span className="text-white text-xl font-bold uppercase tracking-widest whitespace-nowrap">
                View Full Menu
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestsellerSlider;
