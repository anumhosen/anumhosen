import React from 'react';

export default function ProjectFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/40'
                : 'bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
