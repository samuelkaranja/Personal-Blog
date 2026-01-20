const categories = [
  "All",
  "React",
  "TypeScript",
  "Next.js",
  "UX Design",
  "Engineering",
  "Architecture",
];

const CategoryFilter = () => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4">
      {categories.map((cat, index) => (
        <button
          key={cat}
          className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm transition
            ${
              index === 0
                ? "bg-[#2563EB] text-white"
                : "bg-[#121A2A] text-[#94A3B8] hover:text-white"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
