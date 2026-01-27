import { SearchCheck } from "lucide-react";
import ArticleRow from "./ArticleRow";

const RecentArticles = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
        <h2 className="font-semibold text-gray-900 text-2xl">
          Recent Articles
        </h2>

        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full sm:w-64 pl-9 pr-3 py-2 border border-gray-400 rounded-lg text-black text-sm focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
              <SearchCheck size={18} />
            </span>
          </div>

          <select className="border border-gray-400 rounded-lg px-3 py-2 text-sm text-black">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Scheduled</option>
          </select>
        </div>
      </div>

      {/* Table Header (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-[3fr_1.2fr_1.2fr_0.8fr_1fr] px-6 py-5 text-md font-medium text-gray-500 border-b border-gray-300">
        <span>Title</span>
        <span>Status</span>
        <span>Date</span>
        <span>Views</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <div className="divide-y mt-3">
        <ArticleRow
          title="Mastering React Server Components"
          subtitle="codedebugged.com/react-server-components"
          status="Published"
          date="Oct 24, 2023"
          views="1,204"
        />

        <ArticleRow
          title="Building a Design System with Tailwind"
          subtitle="Draft · Last edited 2 hours ago"
          status="Draft"
          date="Oct 28, 2023"
          views="1,204"
        />

        <ArticleRow
          title="The Future of Front-End in 2024"
          subtitle="codedebugged.com/future-frontend-2024"
          status="Scheduled"
          date="Nov 02, 2023"
          views="1,204"
        />

        <ArticleRow
          title="The Future of Front-End in 2024"
          subtitle="codedebugged.com/future-frontend-2024"
          status="Scheduled"
          date="Nov 02, 2023"
          views="1,204"
        />

        <ArticleRow
          title="The Future of Front-End in 2024"
          subtitle="codedebugged.com/future-frontend-2024"
          status="Scheduled"
          date="Nov 02, 2023"
          views="1,204"
        />
      </div>

      {/* Footer */}
      <div className="px-6 py-4 text-sm text-gray-500 flex justify-between items-center">
        <span>Showing 1 to 10 of 124 articles</span>

        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-lg">Previous</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
            1
          </button>
          <button className="px-3 py-1 border rounded-lg">2</button>
          <button className="px-3 py-1 border rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
};

export default RecentArticles;
