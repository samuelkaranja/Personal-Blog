const ArticleTags = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {["#CSS", "#Frontend", "#WebDesign"].map((tag) => (
        <span key={tag} className="px-3 py-1 text-xs bg-white/10 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default ArticleTags;
