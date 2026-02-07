import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ZoomIn } from "lucide-react";
import { galleryData, galleryCategories } from "../data/galleryData";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const filteredImages =
    filter === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          overwrite: "auto",
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, [filter]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white pt-24 pb-10 px-4 md:px-10"
    >
      {/* Header */}
      <div className="mb-12 border-b border-white/20 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
            Gallery
          </h1>
          <p className="text-gray-500 text-sm md:text-lg mt-2 font-mono tracking-widest uppercase">
            Snapshots of Life • Est. 2026
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                filter === cat
                  ? "bg-white text-black border-white"
                  : "bg-black text-gray-500 border-gray-800 hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Uniform Grid - No Gaps, All Squares */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            // 'aspect-square' forces it to be a box. 'w-full' fills the grid cell.
            className="gallery-item relative group cursor-pointer bg-neutral-900 overflow-hidden aspect-square border border-white/5"
          >
            <img
              src={img.src}
              alt={img.alt}
              // 'object-cover' ensures no gaps, it cuts off excess edges
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800";
              }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ZoomIn
                  className="mx-auto mb-2 text-white drop-shadow-lg"
                  size={24}
                />
                <p className="text-white font-bold uppercase tracking-widest text-xs drop-shadow-md">
                  {img.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors">
            <X size={40} />
          </button>
          <div
            className="max-w-5xl w-full max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain mx-auto shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                {selectedImage.alt}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
