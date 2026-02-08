import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ZoomIn } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);

  // 1. AUTOMATICALLY LOAD IMAGES
  // This looks inside 'src/assets/gallery' and grabs all images.
  // { eager: true } means they load immediately.
  const images = import.meta.glob(
    "../assets/gallery/*.{png,jpg,jpeg,svg,webp}",
    {
      eager: true,
    },
  );

  // 2. CONVERT TO DATA ARRAY
  const galleryData = useMemo(() => {
    return Object.keys(images).map((path, index) => {
      // Get the filename to use as the Title/Alt
      const fileName = path.split("/").pop().split(".")[0];
      // specific formatting: "my-cool-pic" -> "My Cool Pic"
      const formattedTitle = fileName.replace(/[-_]/g, " ");

      return {
        id: index,
        src: images[path].default, // The actual image URL
        category: "All", // Default category
        alt: formattedTitle, // Title derived from filename
      };
    });
  }, []);

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
  }, [galleryData]); // Re-run animation if data changes

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
            Snapshots of Life • {galleryData.length} Photos
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryData.map((img) => (
          <div
            key={img.id}
            className="gallery-item relative group bg-neutral-900 overflow-hidden aspect-square border border-white/5"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Empty State Warning */}
      {galleryData.length === 0 && (
        <div className="text-white text-center py-20">
          No images found in src/assets/gallery
        </div>
      )}
    </div>
  );
};

export default Gallery;
