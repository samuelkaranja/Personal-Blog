type Props = {
  value: string;
  onChange: (value: string) => void;
};

const TitleInput = ({ value, onChange }: Props) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter article title..."
      className="w-full text-4xl text-black font-semibold outline-none placeholder:text-black mb-7"
    />
  );
};

export default TitleInput;
