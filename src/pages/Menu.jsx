import { useState } from "react";
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

      {/* Category Tabs */}
      <div className="sticky top-20 z-30 bg-black/80 backdrop-blur-md py-4 mb-12 border-y border-white/10">
        <div className="flex overflow-x-auto gap-8 justify-start md:justify-center px-4 no-scrollbar">
          <button
            onClick={() => setActiveCategory("All")}
            className={`whitespace-nowrap pb-1 text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${
              activeCategory === "All"
                ? "text-orange-500 border-orange-500"
                : "text-gray-500 border-transparent hover:text-white"
            }`}
          >
            All Items
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap pb-1 text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${
                activeCategory === cat
                  ? "text-orange-500 border-orange-500"
                  : "text-gray-500 border-transparent hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
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
