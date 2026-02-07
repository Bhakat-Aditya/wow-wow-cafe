import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ZoomIn } from "lucide-react";
import { galleryData, galleryCategories } from "../data/galleryData";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null); // For Lightbox
  const containerRef = useRef(null);

  // Filter Logic
  const filteredImages =
    filter === "All"
      ? galleryData
      : galleryData.filter((img) => img.category === filter);

  // Animation on Filter Change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-item",
        { y: 100, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
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
      {/* Header - Pure B&W */}
      <div className="mb-20 border-b border-white/20 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white leading-none">
            Gallery
          </h1>
          <p className="text-gray-500 text-lg mt-2 font-mono tracking-widest uppercase">
            Est. 2026 • Midnapore
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className={`gallery-item relative group cursor-pointer bg-neutral-900 overflow-hidden ${
              img.size === "large" ? "md:row-span-2" : ""
            } ${img.size === "wide" ? "md:col-span-2" : ""}`}
          >
            {/* Image: Grayscale by default, Color on Hover */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop";
              }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ZoomIn className="mx-auto mb-2 text-white" size={32} />
                <p className="text-white font-bold uppercase tracking-widest text-sm">
                  {img.category}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal (The "Link Thing" to view full size) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors">
            <X size={48} />
          </button>

          <div
            className="max-w-5xl w-full max-h-screen overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain mx-auto shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                {selectedImage.alt}
              </h3>
              <p className="text-gray-500 font-mono text-sm mt-1">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20 border-t border-white/10 mt-10">
          <p className="text-gray-600 font-mono text-xl uppercase">
            No Archives Found.
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
