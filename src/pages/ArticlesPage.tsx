import { ArticlesHeader, ArticlesSearch } from "../components";
import ArticlesList from "../components/article/ArticlesList";
import Pagination from "../components/article/Pagination";

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-bg">
      <ArticlesHeader />
      <ArticlesSearch />
      <ArticlesList />
      <Pagination />
    </div>
  );
};

export default ArticlesPage;
