import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ value, onChange }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="text-md font-medium">Password</label>
      <div className="relative mt-1">
        <input
          type={show ? "text" : "password"}
          required
          value={value}
          onChange={onChange}
          placeholder="**********"
          className="w-full border rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
