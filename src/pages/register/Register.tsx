import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const password = (
      form.elements.namedItem("password") as HTMLInputElement
    ).value;

    try {
      const result = await createUser(email, password);
      const user = result.user;

      await updateUserProfile({
        displayName: name,
      });

      await axiosInstance.post("/api/users", {
        firebaseUid: user.uid,
        name,
        email: user.email,
        phone: "",
      });

      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Registration failed. Please try again."
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

            <h1 className="text-3xl font-bold text-white">
              Create Account
            </h1>

            <p className="text-gray-400 mt-2">
              Join TurfCast and get started
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {/* Error */}
            {error && (
              <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  disabled={loading}
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition disabled:bg-gray-100"
                />
              </div>

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
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  required
                  minLength={6}
                  disabled={loading}
                  className="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition disabled:bg-gray-100"
                />

                <p className="text-xs text-gray-400 mt-2">
                  Password must be at least 6 characters.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {/* Login */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-black hover:text-yellow-600 transition"
              >
                Login
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

export default Register;