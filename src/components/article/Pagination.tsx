const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-2 py-12">
      <button className="px-3 py-1.5 rounded-lg bg-[#121A2A] text-[#94A3B8]">
        Previous
      </button>

      <button className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white">
        1
      </button>
      <button className="px-3 py-1.5 rounded-lg bg-[#121A2A] text-[#94A3B8]">
        2
      </button>
      <button className="px-3 py-1.5 rounded-lg bg-[#121A2A] text-[#94A3B8]">
        3
      </button>

      <span className="text-muted">...</span>

      <button className="px-3 py-1.5 rounded-lg bg-[#121A2A] text-[#94A3B8]">
        8
      </button>

      <button className="px-3 py-1.5 rounded-lg bg-[#121A2A] text-[#94A3B8]">
        Next
      </button>
    </div>
  );
};

export default Pagination;
