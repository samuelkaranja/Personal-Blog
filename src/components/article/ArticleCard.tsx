type ArticleCardProps = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

const ArticleCard = ({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
}: ArticleCardProps) => {
  return (
    <article className="bg-[#121A2A] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 hover:bg-white/5 transition">
      <img
        src={image}
        alt={title}
        className="w-full sm:w-48 h-40 rounded-xl object-cover"
      />

      <div className="flex-1">
        <span className="text-xs uppercase text-[#2563EB] font-medium">
          {category}
        </span>

        <h2 className="mt-2 text-lg sm:text-xl font-semibold text-white hover:cursor-pointer hover:underline">
          {title}
        </h2>

        <p className="mt-2 text-sm text-[#94A3B8] line-clamp-2">{excerpt}</p>

        <div className="mt-4 text-xs text-[#94A3B8] flex gap-4">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
