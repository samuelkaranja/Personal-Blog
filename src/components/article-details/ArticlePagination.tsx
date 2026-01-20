const ArticlePagination = () => {
  return (
    <div className="flex justify-between gap-4">
      <button className="bg-[#101622] px-4 py-2 rounded-lg text-sm">
        ← Previous
      </button>
      <button className="bg-[#101622] px-4 py-2 rounded-lg text-sm">
        Next →
      </button>
    </div>
  );
};

export default ArticlePagination;
