import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { menuData, categories } from "../data/menuData";
import MenuItem from "../components/menu/MenuItem";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-28 pb-20 px-4 md:px-10">
      {/* Elegant Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-orange-500 font-mono text-sm uppercase tracking-[0.3em] block mb-2">
          Culinary Delights
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
          The Menu
        </h1>
        <p className="text-gray-400 text-lg font-light">
          A curated selection of local favorites and classic dishes,{" "}
          <br className="hidden md:block" />
          prepared with passion in the heart of Midnapore.
        </p>
      </div>

      {/* Category Dropdown (Sticky) */}
      <div className="sticky top-20 z-30 bg-black/90 backdrop-blur-md py-6 mb-12 border-y border-white/10 flex justify-center">
        <div className="relative w-full max-w-xs md:max-w-sm">
          {/* Custom Styled Select */}
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full appearance-none bg-neutral-900 text-white border border-white/20 py-4 pl-6 pr-12 font-bold uppercase tracking-widest focus:outline-none focus:border-orange-500 transition-colors cursor-pointer rounded-none"
          >
            <option value="All">All Items</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Dropdown Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-orange-500">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      {/* Grid Layout - List Style */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-gray-500 font-mono uppercase tracking-widest">
          No items found in this section.
        </div>
      )}
    </div>
  );
};

export default Menu;
