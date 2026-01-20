const ProTip = () => {
  return (
    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
      <h4 className="text-blue-400 font-semibold mb-2">💡 Pro Tip</h4>
      <p className="text-sm text-gray-300">
        Always use <code className="text-blue-400">minmax(0, 1fr)</code> instead
        of just <code className="text-blue-400">1fr</code>.
      </p>
    </div>
  );
};

export default ProTip;
