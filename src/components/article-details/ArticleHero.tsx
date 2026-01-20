import Software from "../../assets/software.webp";

const ArticleHero = () => {
  return (
    <div className="relative h-96 rounded-2xl overflow-hidden 'bg-gradient-to-br' from-cyan-500/20 to-blue-500/10">
      {/* Background Image */}
      <img
        src={Software}
        alt="CSS Grid"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-10 space-y-4">
        <span className="text-xs uppercase tracking-wide text-blue-400">
          Development
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold">
          Mastering CSS Grid in 2024
        </h1>

        <p className="text-sm text-gray-300">
          codedebugged • Published Oct 12, 2024 • 8 min read
        </p>
      </div>
    </div>
  );
};

export default ArticleHero;
