import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleDetailsPage, ArticlesPage, HomePage } from "./pages";
import DashboardPage from "./pages/admin/DashboardPage";
import MainLayout from "./components/layouts/MainLayout";
import LoginPage from "./pages/admin/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/details" element={<ArticleDetailsPage />} />
          </Route>

          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/login" element={<LoginPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
