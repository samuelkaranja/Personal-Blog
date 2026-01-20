import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <header className="border-b border-white/5 bg-bg">
      <nav className="flex items-center justify-between h-16 px-10">
        <Link to="/" className="text-white font-bold text-lg underline italic">
          DEBUGGED
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/admin/dashboard">Dashboard</Link>
        </div>

        <div className="flex items-center gap-4">
          <input
            placeholder="Search articles..."
            className="hidden bg-[#1e293b] sm:block bg-card text-sm rounded-lg px-3 py-3 text-white placeholder-muted outline-none"
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
