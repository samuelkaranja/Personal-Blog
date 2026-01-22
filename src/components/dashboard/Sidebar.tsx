import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-64 flex-col bg-[#0B1220] border-r border-white/5 p-6">
      <div className="mb-10">
        <Link to="/" className="text-2xl text-white font-semibold underline">
          debugged
        </Link>
        <p className="text-md text-[#94A3B8] mt-2">Front-End Engineer</p>
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

      <div className="mt-auto text-md font-bold text-white text-center bg-red-600 p-2 rounded">
        Logout
      </div>
    </aside>
  );
};

export default Sidebar;
