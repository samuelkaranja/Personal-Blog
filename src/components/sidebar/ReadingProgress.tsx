const ReadingProgress = () => {
  return (
    <div className="bg-[#101622] rounded-xl p-4">
      <h4 className="text-sm font-semibold mb-2">Your Progress</h4>
      <div className="w-full h-2 bg-white/10 rounded-full">
        <div className="h-2 w-[45%] bg-blue-500 rounded-full" />
      </div>
      <p className="text-xs text-gray-400 mt-2">45% completed</p>
    </div>
  );
};

export default ReadingProgress;
