const Topbar = () => {
  return (
    <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 lg:px-6">
      <h1 className="text-white font-semibold">Editor</h1>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-[#121A2A] rounded-lg text-sm text-white">
          Save Draft
        </button>
        <button className="px-4 py-2 bg-[#2563EB] rounded-lg text-sm text-white">
          Publish to Backend
        </button>
      </div>
    </header>
  );
};

export default Topbar;
