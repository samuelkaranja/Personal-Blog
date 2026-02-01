import RecentArticles from "../../components/dashboard/articles/RecentArticles";
import TopHeader from "../../components/dashboard/header/TopHeader";
import StatsGrid from "../../components/dashboard/stats/StatsGrid";

const DashboardPage = () => {
  return (
    <>
      <TopHeader />
      <StatsGrid />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-9">
          <RecentArticles />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
