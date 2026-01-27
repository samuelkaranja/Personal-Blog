import { type ReactNode } from "react";

interface SidebarItemProps {
  label: string;
  icon: ReactNode;
  active?: boolean;
}

const SidebarItem = ({ label, icon, active }: SidebarItemProps) => {
  return (
    <button
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
    </button>
  );
};

export default SidebarItem;
