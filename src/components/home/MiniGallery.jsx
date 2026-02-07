import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MiniGallery = () => {
  // Define 4 distinct images (can be from your galleryData or unsplash)
  const previewImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
      label: "Interior",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      label: "Food",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2",
      label: "Vibes",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      label: "Ambience",
    },
  ];

  return (
    <div className="relative z-10 bg-black py-20 px-4 md:px-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              The Vibe
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-red-500 font-bold uppercase tracking-widest flex items-center gap-2 mt-4 md:mt-0"
          >
            See All Photos <ArrowRight size={18} />
          </Link>
        </div>

        {/* Updated Grid for 4 Similar Sized Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewImages.map((img) => (
            <div
              key={img.id}
              className="relative group overflow-hidden rounded-2xl border border-white/10 aspect-square"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-widest">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniGallery;
