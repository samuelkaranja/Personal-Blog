import FeaturedImage from "./FeaturedImage";
import TagInput from "./TagInput";

const PostSettings = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-lg text-black">Post Settings</h3>

      {/* Slug */}
      <div>
        <label className="text-sm text-black font-medium">Article Slug</label>
        <input
          type="text"
          className="mt-1 w-full border border-gray-300 text-black rounded px-3 py-2 text-sm placeholder:text-gray-500"
          placeholder="/mastering-react-server-components"
        />
      </div>

      <TagInput />
      <FeaturedImage />

      {/* Meta */}
      <div>
        <label className="text-sm text-black font-medium">
          Meta Description
        </label>
        <textarea
          className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
          maxLength={160}
          rows={4}
          placeholder="Brief summary for search engines..."
        />
      </div>

      {/* Comments */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-black">Allow Comments</span>
        <input type="checkbox" defaultChecked />
      </div>

      <button className="w-full border border-red-500 text-red-500 py-2 rounded hover:cursor-pointer">
        Move to Trash
      </button>
    </div>
  );
};

export default PostSettings;
