import { type ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
  iconBg: string;
}

const StatsCard = ({
  title,
  value,
  subtitle,
  icon,
  iconBg,
}: StatsCardProps) => {
  return (
    <div className="bg-white border rounded-2xl p-5 flex items-center justify-between">
      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {title}
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mt-1">{value}</h2>

        {subtitle && <p className="text-sm text-green-600 mt-1">{subtitle}</p>}
      </div>

      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default StatsCard;
