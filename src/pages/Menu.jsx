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
    <div className="min-h-screen bg-neutral-900 pt-10 pb-10 px-4 md:px-10">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
        Our Menu
      </h1>

      {/* Category Filter */}
      <div className="flex overflow-x-auto gap-4 pb-4 mb-8 justify-start md:justify-center">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-6 py-2 rounded-full border ${activeCategory === "All" ? "bg-red-500 border-red-500 text-white" : "border-white/20 text-gray-400"}`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-full border ${activeCategory === cat ? "bg-red-500 border-red-500 text-white" : "border-white/20 text-gray-400"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
