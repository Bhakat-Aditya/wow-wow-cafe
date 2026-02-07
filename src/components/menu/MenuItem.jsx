const MenuItem = ({ item }) => {
  const hasVariants = typeof item.price === "object";
  // Use first variant price for display if object
  const displayPrice = hasVariants ? item.price.full : item.price;

  return (
    <div className="group flex gap-4 md:gap-6 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
      {/* Image Thumb */}
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shrink-0 shadow-lg bg-neutral-800">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300";
          }}
        />
      </div>

      {/* Info */}
      <div className="flex-grow pt-1">
        <div className="flex justify-between items-baseline border-b border-dashed border-white/10 pb-2 mb-2">
          <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide group-hover:text-orange-500 transition-colors">
            {item.name}
          </h3>
          <span className="text-orange-400 font-mono font-bold text-lg whitespace-nowrap ml-4">
            ₹{displayPrice}
          </span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-3">
          {item.description ||
            "A delicious classic prepared with fresh ingredients."}
        </p>

        {/* Tags/Variants */}
        <div className="flex gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
          {item.bestseller && (
            <span className="text-yellow-500">★ Bestseller</span>
          )}
          {hasVariants && (
            <span>
              • {item.variantLabels?.full || "Full"} /{" "}
              {item.variantLabels?.half || "Half"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
