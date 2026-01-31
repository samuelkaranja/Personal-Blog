import { useState } from "react";
import PasswordInput from "../../auth/PasswordInput";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signIn(email, password);
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white text-black rounded-xl border shadow-sm p-6">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          📘
        </div>
      </div>

      <div className="text-center">
        <Link to="/" className="text-2xl font-semibold mb-1 hover:underline">
          debugged
        </Link>
        <p className="text-sm text-gray-500 mb-6">Author Dashboard Access</p>
      </div>

      {error && (
        <p className="text-sm text-center mb-3 text-red-600">{error}</p>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="text-md font-medium">Email Address</label>
          <input
            type="email"
            required
            placeholder="name@debugged.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-emerald-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="rounded" />
            Remember this device
          </label>
          <a href="#" className="text-blue-600">
            Forgot Password?
          </a>
        </div> */}

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In to Dashboard"}
        </button>
      </form>

      <p className="mt-6 text-xs text-center text-gray-500">
        Unauthorized access is strictly prohibited.
        <br />
        Protected by industry-standard encryption.
      </p>
    </div>
  );
};

export default LoginForm;
