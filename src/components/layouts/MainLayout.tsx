import { Outlet } from "react-router-dom";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

const MainLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <NavBar />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
