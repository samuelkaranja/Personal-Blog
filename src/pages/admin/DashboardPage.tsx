import RecentArticles from "../../components/dashboard/articles/RecentArticles";
import TopHeader from "../../components/dashboard/header/TopHeader";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import StatsGrid from "../../components/dashboard/stats/StatsGrid";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 space-y-6">
        <TopHeader />

        <StatsGrid />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-9">
            <RecentArticles />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
