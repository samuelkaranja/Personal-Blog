interface Props {
  title: string;
  subtitle: string;
  status: "Published" | "Draft" | "Scheduled";
  date: string;
  views?: string;
  image?: string;

  onEdit?: () => void;
  onDelete?: () => void;
}

const statusStyles = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-orange-100 text-orange-700",
  Scheduled: "bg-blue-100 text-blue-700",
};

const ArticleRow = ({
  title,
  subtitle,
  status,
  date,
  views,
  image,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-[3fr_1.2fr_1.2fr_0.8fr_1fr] gap-4 items-center">
      {/* Title */}
      <div className="flex gap-3 items-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-10 h-10 rounded-md object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">
            📄
          </div>
        )}

        <div>
          <p className="font-medium text-gray-900 leading-snug">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>

      {/* Status */}
      <span
        className={`text-xs font-medium px-3 py-1 rounded-full w-fit ${statusStyles[status]}`}
      >
        {status}
      </span>

      {/* Date */}
      <span className="text-sm text-gray-600">{date}</span>

      {/* Views */}
      <span className="text-sm text-gray-900">{views ?? "—"}</span>

      {/* Actions */}
      <div className="flex gap-3 justify-start md:justify-end">
        <button
          onClick={onEdit}
          className="text-sm text-blue-600 hover:underline"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="text-sm text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ArticleRow;
