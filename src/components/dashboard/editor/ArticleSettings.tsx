const ArticleSettings = () => {
  return (
    <div className="bg-card rounded-xl p-4 space-y-4">
      <h3 className="text-white font-medium">Article Settings</h3>

      <select className="w-full bg-[#0B1220] rounded-lg px-3 py-2 text-sm text-white">
        <option>Tutorial</option>
        <option>Article</option>
      </select>

      <input
        placeholder="react, tailwind, hooks"
        className="w-full bg-[#0B1220] rounded-lg px-3 py-2 text-sm text-white"
      />

      <input
        placeholder="blog/how-to-build-hooks"
        className="w-full bg-[#0B1220] rounded-lg px-3 py-2 text-sm text-white"
      />

      <label className="flex items-center gap-3 text-sm text-muted">
        <input type="checkbox" defaultChecked />
        Allow Comments
      </label>
    </div>
  );
};

export default ArticleSettings;
