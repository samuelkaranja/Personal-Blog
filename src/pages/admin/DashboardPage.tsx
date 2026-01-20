import {
  ArticleEditor,
  ArticleSettings,
  EditorBreadcrumb,
  FeaturedImage,
  Sidebar,
  Topbar,
} from "../../components";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#0B1220] flex">
      {/* <Sidebar /> */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* <Topbar /> */}
        <Topbar />

        <main className="flex-1 p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Editor */}
          <div className="bg-[#121A2A] rounded-2xl p-6">
            <EditorBreadcrumb />
            <ArticleEditor />
            {/* <EditorBreadcrumb />
            <EditorTitleInput />
            <EditorToolbar />
            <EditorTextarea />
            <EditorStats /> */}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            <FeaturedImage />
            <ArticleSettings />
            {/* <FeaturedImage />
            <ArticleSettings />
            <DraftsList /> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
