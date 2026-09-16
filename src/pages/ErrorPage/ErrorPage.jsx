import { Link } from "react-router";
import { FiHome, FiAlertTriangle } from "react-icons/fi";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
            <FiAlertTriangle className="text-yellow-500 text-4xl" />
          </div>
        </div>

        <p className="text-yellow-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          Something went wrong
        </p>

        <h1 className="text-7xl sm:text-8xl font-bold text-white mb-4">
          4<span className="text-yellow-500">0</span>4
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="
            inline-flex items-center gap-2
            px-7 py-3
            rounded-md
            bg-yellow-500
            text-black
            font-semibold
            uppercase
            text-sm
            border border-yellow-400
            transition-all duration-300
            hover:bg-black
            hover:text-yellow-500
            hover:shadow-[0_0_25px_rgba(234,179,8,0.45)]
          "
        >
          <FiHome />
          Back to Home
        </Link>

        <p className="mt-10 text-xs text-gray-600 uppercase tracking-widest">
          TurfCast • Capture Every Moment
        </p>
      </div>
    </div>
  );
}