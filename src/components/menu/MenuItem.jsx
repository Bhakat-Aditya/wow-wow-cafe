import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const MenuItem = ({ item, index }) => {
  const hasVariants = typeof item.price === "object";
  const [variant, setVariant] = useState("full");
  const cardRef = useRef(null);

  const currentPrice = hasVariants ? item.price[variant] : item.price;

  // Hover Animations
  const onEnter = () => {
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 30px -10px rgba(239, 68, 68, 0.3)",
      duration: 0.3,
    });
  };

  const onLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-3xl p-4 overflow-hidden shadow-xl"
    >
      {/* Neon Glow Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-3xl transition-colors duration-500 pointer-events-none z-10" />

      {/* Image Container with Zoom Effect */}
      <div className="h-56 w-full rounded-2xl overflow-hidden mb-5 relative z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60" />
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500";
          }}
        />

        {/* Bestseller Badge - Floating */}
        {item.bestseller && (
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
              ★ Top Pick
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-black text-white leading-none tracking-tight uppercase group-hover:text-red-500 transition-colors">
            {item.name}
          </h3>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-light">
          {item.description ||
            "Crispy, delicious, and made with love. The perfect bite for your cravings."}
        </p>

        {/* Action Bar */}
        <div className="flex items-center justify-between mt-4 bg-white/5 p-2 rounded-xl backdrop-blur-sm border border-white/5">
          {/* Price */}
          <span className="text-red-400 font-mono font-bold text-xl px-2">
            ₹{currentPrice}
          </span>

          {/* Variant Toggles */}
          {hasVariants ? (
            <div className="flex bg-black/50 rounded-lg p-1">
              {["half", "full"].map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all duration-300 ${
                    variant === v
                      ? "bg-red-600 text-white shadow-lg"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {item.variantLabels?.[v] || v}
                </button>
              ))}
            </div>
          ) : (
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-lg">
              {item.pcs || "Plate"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
