import { useState } from "react";
import SidebarItem from "./SidebarItem";
import {
  LayoutGrid,
  FileText,
  BarChart2,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Code from "../../../assets/code.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <LayoutGrid size={18} />, active: true },
    { label: "All Posts", icon: <FileText size={18} /> },
    { label: "Analytics", icon: <BarChart2 size={18} /> },
    { label: "Comments", icon: <MessageSquare size={18} /> },
    { label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-[#0b1220] border-r flex flex-col justify-between
          p-4 z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:block
        `}
      >
        {/* Top section: close button, profile, menu */}
        <div className="flex flex-col">
          {/* Close button (mobile) */}
          <div className="flex justify-end lg:hidden mb-4">
            <button onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Profile */}
          <div className="px-2 mb-6 flex items-center gap-3">
            <img
              src={Code}
              alt="profile"
              className="w-11 h-11 rounded-full object-cover"
            />
            <div>
              <Link
                to="/"
                className="font-semibold leading-tight hover:underline"
              >
                debugged
              </Link>
              <span className="text-xs text-gray-500 block">
                Front-End Engineer
              </span>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                active={item.active}
              />
            ))}
          </nav>
        </div>

        {/* Bottom section: Sign Out */}
        <div className="px-2 py-4 border-t">
          <button className="flex items-center gap-3 text-sm text-gray-500 hover:text-red-500 transition">
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
