const TopHeader = () => {
  return (
    <header className="bg-[#0b1220] border-b px-4 md:px-6 py-4 flex items-center justify-between rounded-2xl">
      {/* Left */}
      <h1 className="text-lg md:text-3xl font-semibold text-white">Overview</h1>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-500 hover:bg-gray-50">
          🔔
        </button>

        {/* Create Post */}
        <button className="bg-emerald-600 hover:bg-blue-700 text-white px-4 md:px-5 h-10 rounded-lg text-sm font-medium flex items-center gap-2">
          <span className="text-xl">+</span> Create New Post
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
