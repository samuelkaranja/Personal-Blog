import StatsCard from "./StatsCard";
import { FileText, Eye, MessageSquare } from "lucide-react";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {/* Total Posts */}
      <StatsCard
        title="Total Posts"
        value="124"
        subtitle="+12% this month"
        icon={<FileText className="w-6 h-6 text-blue-600" />}
        iconBg="bg-blue-100"
      />

      {/* Total Views */}
      <StatsCard
        title="Total Views"
        value="48.2k"
        subtitle="+5.4% today"
        icon={<Eye className="w-6 h-6 text-purple-600" />}
        iconBg="bg-purple-100"
      />

      {/* Comments */}
      <StatsCard
        title="Comments"
        value="892"
        subtitle="24 unread"
        icon={<MessageSquare className="w-6 h-6 text-orange-600" />}
        iconBg="bg-orange-100"
      />

      {/* Drafts vs Published */}
      <div className="bg-white border rounded-2xl p-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Drafts vs Published
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-gray-700">Published</span>
              <span className="ml-auto font-semibold">87</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span>Drafts</span>
              <span className="ml-auto font-semibold">37</span>
            </div>
          </div>
        </div>

        {/* Donut progress (CSS-based) */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-r-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-black">
            70%
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
