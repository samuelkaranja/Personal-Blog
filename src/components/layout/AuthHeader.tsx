const AuthHeader = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-lg text-black">
          debugged
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Back to Blog
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Support
          </button>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
