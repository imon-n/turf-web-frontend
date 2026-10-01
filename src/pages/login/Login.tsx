"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const axiosInstance = useAxios();
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/dashboard";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const syncUser = async (user: any) => {
    await axiosInstance.post("/api/users", { firebaseUid: user.uid, name: user.displayName || "User", email: user.email, phone: "" });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setError(""); setLoading(true);
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    try { const result = await signIn(email, password); await syncUser(result.user); router.replace(from); }
    catch (err: any) { setError(err?.response?.data?.message || err?.message || "Login failed. Please try again."); }
    finally { setLoading(false); }
  };
  const handleGoogleLogin = async () => {
    setError(""); setLoading(true);
    try { const result = await signInWithGoogle(); await syncUser(result.user); router.replace(from); }
    catch (err: any) { setError(err?.response?.data?.message || err?.message || "Google login failed. Please try again."); }
    finally { setLoading(false); }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10"><div className="w-full max-w-md"><div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"><div className="bg-black px-6 py-8 text-center"><h1 className="text-3xl font-bold text-white">Welcome Back</h1><p className="text-gray-400 mt-2">Login to your TurfCast account</p></div><div className="p-6 sm:p-8">
      {error && <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{error}</div>}
      <button type="button" onClick={handleGoogleLogin} disabled={loading} className="w-full h-12 flex items-center justify-center gap-3 border border-gray-300 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-50 transition disabled:opacity-50"><FcGoogle className="text-xl" /><span>{loading ? "Signing in..." : "Continue with Google"}</span></button>
      <div className="flex items-center gap-4 my-6"><div className="flex-1 h-px bg-gray-200"/><span className="text-sm text-gray-400">OR</span><div className="flex-1 h-px bg-gray-200"/></div>
      <form onSubmit={handleLogin} className="space-y-5"><div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label><input id="email" name="email" type="email" placeholder="Enter your email" required disabled={loading} className="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-yellow-400"/></div><div><label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label><input id="password" name="password" type="password" placeholder="Enter your password" required disabled={loading} className="w-full h-12 px-4 border border-gray-300 rounded-xl outline-none focus:border-yellow-400"/></div><button type="submit" disabled={loading} className="w-full h-12 bg-yellow-400 text-black rounded-xl font-semibold hover:bg-yellow-300 disabled:opacity-50">{loading ? "Logging in..." : "Login"}</button></form>
      <p className="text-center text-sm text-gray-500 mt-6">Don't have an account? <Link href="/register" className="font-semibold text-black hover:text-yellow-600">Create an account</Link></p></div></div><p className="text-center text-xs text-gray-400 mt-5">© {new Date().getFullYear()} TurfCast. All rights reserved.</p></div></div>
  );
};
export default Login;
