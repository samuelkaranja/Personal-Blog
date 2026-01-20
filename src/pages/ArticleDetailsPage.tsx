import {
  ArticleContent,
  ArticleHero,
  ArticlePagination,
  ArticleTags,
  MoreArticles,
  ReadingProgress,
  ShareArticle,
} from "../components";

const ArticleDetailsPage = () => {
  return (
    <main className="bg-[#0b1220] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        {/* Main Content */}
        <section className="space-y-12">
          <ArticleHero />
          <ArticleContent />
          <ArticleTags />
          <ArticlePagination />
        </section>

        {/* Sidebar */}
        <aside className="space-y-6 hidden lg:block">
          <ShareArticle />
          <MoreArticles />
          <ReadingProgress />
        </aside>
      </div>
    </main>
  );
};

export default ArticleDetailsPage;
