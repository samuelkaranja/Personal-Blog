import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <header className="border-b border-white/5 bg-bg">
      <nav className="flex items-center justify-between h-16 px-10">
        <Link to="/" className="text-white font-bold text-lg underline italic">
          DEBUGGED
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#94A3B8]">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/articles" className="hover:underline">
            Articles
          </Link>
          <Link to="/admin/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <input
            placeholder="Search articles..."
            className="hidden sm:block bg-[#121A2A] text-sm rounded-lg px-3 py-3 text-white placeholder-[#94A3B8] outline-none"
          />
          <button className="bg-[#135bec] text-white font-bold px-4 py-2 rounded-lg text-sm">
            Contact Me
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
