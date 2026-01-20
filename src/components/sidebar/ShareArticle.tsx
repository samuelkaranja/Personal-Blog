const ShareArticle = () => {
  return (
    <div className="bg-[#101622] rounded-xl p-4">
      <h4 className="text-sm font-semibold mb-3">Share Article</h4>
      <div className="flex gap-3">
        <button className="p-2 rounded-lg bg-white/10">🔗</button>
        <button className="p-2 rounded-lg bg-white/10">🐦</button>
        <button className="p-2 rounded-lg bg-white/10">📘</button>
      </div>
    </div>
  );
};

export default ShareArticle;
