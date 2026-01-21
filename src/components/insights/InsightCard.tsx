import { Link } from "react-router-dom";

type Props = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const InsightCard = ({ title, category, date, readTime, image }: Props) => {
  return (
    <div className="bg-[#121A2A] rounded-xl overflow-hidden hover:translate-y-[-4px] transition">
      <img src={image} className="h-44 w-full object-cover" />
      <div className="p-4">
        <span className="text-xs text-[#2563EB] uppercase block mb-2">
          {category}
        </span>
        <Link
          to="/details"
          className="mt-2 text-white font-semibold text-xl hover:underline hover:cursor-pointer"
        >
          {title}
        </Link>
        <p className="mt-2 text-xs text-[#94A3B8]">
          {date} • {readTime}
        </p>
      </div>
    </div>
  );
};

export default InsightCard;
