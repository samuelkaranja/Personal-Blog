import Code from "../../../assets/code.jpg";

const FeaturedImage = () => {
  return (
    <div>
      <label className="text-sm text-black font-medium">Featured Image</label>
      <div className="mt-2 border border-gray-300 rounded-lg overflow-hidden">
        <img src={Code} alt="Featured" className="w-full h-40 object-cover" />
        <button className="w-full py-2 text-sm text-black hover:bg-gray-50">
          Replace Image
        </button>
      </div>
    </div>
  );
};

export default FeaturedImage;
