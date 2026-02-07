// inside Home.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import interiorImg from "../assets/images/interior-hero.jpg"; // The balloon image

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial Load Animation
    tl.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
    );

    // Scroll Animation
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -150, // Text moves up faster than background
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${interiorImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Dark overlay for readability */}
      </div>

      {/* Big Text */}
      <h1
        ref={textRef}
        className="relative z-10 text-7xl md:text-9xl font-bold text-white uppercase tracking-tighter text-center leading-none"
      >
        Wow Wow <br /> <span className="text-red-500">Cafe</span>
      </h1>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-10 animate-bounce text-white">
        ↓ Scroll for Cravings
      </div>
    </div>
  );
};
