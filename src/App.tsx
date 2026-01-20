import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticleDetailsPage, ArticlesPage, HomePage } from "./pages";
import { Footer, NavBar } from "./components";
import DashboardPage from "./pages/admin/DashboardPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/details" element={<ArticleDetailsPage />} />
          <Route path="/admin/dashboard" element={<DashboardPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
