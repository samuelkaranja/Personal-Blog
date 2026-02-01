import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  label: string;
  icon: ReactNode;
  active?: boolean;
  route?: string;
}

const SidebarItem = ({ label, icon, active, route }: SidebarItemProps) => {
  return (
    <Link
      to={{
        pathname: route,
      }}
      className={`
        flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium
        transition-all duration-200
        ${
          active
            ? "bg-blue-50 text-blue-600 shadow-sm"
            : "text-gray-600 hover:bg-gray-100"
        }
      `}
    >
      <span className={`${active ? "text-blue-600" : "text-gray-400"}`}>
        {icon}
      </span>

      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
