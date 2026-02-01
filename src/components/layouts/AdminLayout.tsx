import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 space-y-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
