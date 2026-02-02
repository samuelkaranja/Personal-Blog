import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/5 bg-bg">
      <nav className="flex items-center justify-between h-16 px-4 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-lg underline italic"
        >
          DEBUGGED
        </Link>

        {/* Desktop Links */}
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

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <input
            placeholder="Search articles..."
            className="bg-[#121A2A] text-sm rounded-lg px-3 py-2 text-white placeholder-[#94A3B8] outline-none"
          />
          <button className="bg-[#135bec] text-white font-bold px-4 py-2 rounded-lg text-sm">
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-sm text-[#94A3B8]">
          <Link to="/" className="block hover:underline">
            Home
          </Link>
          <Link to="/articles" className="block hover:underline">
            Articles
          </Link>
          <Link to="/admin/dashboard" className="block hover:underline">
            Dashboard
          </Link>

          <input
            placeholder="Search articles..."
            className="w-full bg-[#121A2A] text-sm rounded-lg px-3 py-2 text-white placeholder-[#94A3B8] outline-none"
          />

          <button className="w-full bg-[#135bec] text-white font-bold px-4 py-2 rounded-lg text-sm">
            Contact Me
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;

