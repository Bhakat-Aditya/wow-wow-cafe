import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MiniGallery = () => {
  return (
    // Added 'relative z-10' to ensure it sits ABOVE the footer and slider
    <div className="relative z-10 bg-black py-20 px-4 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[400px]">
          {/* Large Left Image */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/10">
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
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
              <img
                src="/images/gallery/food-1.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=500";
                }}
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl border border-white/10">
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

export default MiniGallery;
