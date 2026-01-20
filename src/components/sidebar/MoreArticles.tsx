const MoreArticles = () => {
  return (
    <div className="bg-[#101622] rounded-xl p-4 space-y-4">
      <h4 className="text-sm font-semibold">More from codedebugged</h4>

      {["Design System with Tailwind", "TypeScript 5.4 Overview"].map(
        (title) => (
          <div key={title} className="flex gap-3 items-center">
            <div className="w-12 h-12 bg-white/10 rounded-lg" />
            <p className="text-sm text-gray-300">{title}</p>
          </div>
        ),
      )}
    </div>
  );
};

export default MoreArticles;
