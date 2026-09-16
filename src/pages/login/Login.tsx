import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const axiosInstance = useAxios();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/dashboard";

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    try {
      const result = await signIn(email, password);
      const user = result.user;

      await axiosInstance.post("/api/users", {
        firebaseUid: user.uid,
        name: user.displayName || "User",
        email: user.email,
        phone: "",
      });

      navigate(from, { replace: true });
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const result = await signInWithGoogle();
      const user = result.user;

      await axiosInstance.post("/api/users", {
        firebaseUid: user.uid,
        name: user.displayName || "User",
        email: user.email,
        phone: "",
      });

      navigate(from, { replace: true });
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Google login failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-black px-6 py-8 text-center">
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

            <p className="text-gray-400 mt-2">Login to your TurfCast account</p>
          </div>

          <div className="p-6 sm:p-8">
            {/* Error */}
            {error && (
              <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full h-12 flex items-center justify-center gap-3 border border-gray-300 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FcGoogle className="text-xl" />

              <span>{loading ? "Signing in..." : "Continue with Google"}</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition disabled:bg-gray-100"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm text-gray-500 hover:text-black transition"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition disabled:bg-gray-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Register */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-black hover:text-yellow-600 transition"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          © {new Date().getFullYear()} TurfCast. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
