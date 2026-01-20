const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-64 flex-col bg-[#0B1220] border-r border-white/5 p-6">
      <div className="mb-10">
        <p className="text-white font-semibold">debugged</p>
        <p className="text-xs text-[#94A3B8]">Front-End Engineer</p>
      </div>

      <nav className="space-y-2 text-sm">
        <button className="w-full text-left px-4 py-2 rounded-lg text-[#94A3B8] hover:bg-white/5">
          Dashboard
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-[#2563EB] text-white">
          Articles
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg text-[#94A3B8] hover:bg-white/5">
          Media
        </button>
        <button className="w-full text-left px-4 py-2 rounded-lg text-[#94A3B8] hover:bg-white/5">
          Settings
        </button>
      </nav>

      <div className="mt-auto text-sm text-[#94A3B8]">Logout</div>
    </aside>
  );
};

export default Sidebar;
