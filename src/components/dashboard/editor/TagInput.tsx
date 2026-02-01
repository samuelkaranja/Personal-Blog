const TagInput = () => {
  return (
    <div>
      <label className="text-sm text-black font-medium">Tags</label>
      <input
        className="mt-1 w-full border border-gray-600 rounded px-3 py-2 text-black text-sm placeholder:text-black"
        placeholder="Add tag..."
      />
      <div className="flex gap-2 mt-3">
        {["React", "Next.js", "Frontend"].map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
          >
            {tag} ✕
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
