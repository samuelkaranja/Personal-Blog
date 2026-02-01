type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const EditorLayout = ({ children, sidebar }: Props) => {
  return (
    <div className="flex min-h-screen bg-white rounded-xl">
      {/* Main Content */}

      <main className="flex-1 px-4 md:px-12 lg:px-20 py-8">{children}</main>

      {/* Sidebar */}
      <aside className="hidden lg:block w-[360px] border-l px-6 py-8">
        {sidebar}
      </aside>
    </div>
  );
};

export default EditorLayout;
