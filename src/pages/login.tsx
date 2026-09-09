"use client";

import { useState, Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock, Mail, KeyRound, ArrowRight, UserCheck, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

function AuthForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") === "register" ? "register" : "login";
  
  const [mode, setMode] = useState<"login" | "register" | "otp">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (mode === "register") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setErrorMsg(error.message);
      } else {
        setMode("otp"); // Supabase sent confirmation email/OTP
      }
    } else if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        setErrorMsg(error.message);
      } else {
        navigate("/account");
      }
    }
    setLoading(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "signup"
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate("/account");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-20 flex items-center justify-center">
        
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-[#1e1b4b] p-8 text-center text-white">
            <h1 className="text-3xl font-black uppercase tracking-wider mb-2">
              {mode === "otp" ? "Verify Account" : mode === "login" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-slate-300 font-medium">
              {mode === "otp" 
                ? "Enter the code sent to your email" 
                : mode === "login" 
                  ? "Login to track your moves" 
                  : "Sign up for exclusive moving benefits"}
            </p>
          </div>

          <div className="p-8">
            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm font-bold border border-red-100">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p>{errorMsg}</p>
              </div>
            )}

            {mode === "otp" ? (
              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">OTP Verification Code</label>
                  <div className="relative">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="text" 
                      required
                      placeholder="123456"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full h-14 pl-12 pr-5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none font-bold tracking-[0.5em] text-center text-lg" 
                    />
                  </div>
                </div>
                <button disabled={loading} type="submit" className="w-full h-14 bg-[#facc15] hover:bg-[#eab308] text-[#1e1b4b] font-black text-lg rounded-xl shadow-md uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? "Verifying..." : "Verify OTP"} <UserCheck className="w-5 h-5" />
                </button>
                <div className="text-center">
                  <button type="button" onClick={() => setMode("register")} className="text-sm font-bold text-slate-500 hover:text-[#3b1c90]">
                    Back to Sign Up
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Toggle */}
                <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
                  <button 
                    type="button" 
                    onClick={() => { setMode("login"); setErrorMsg(""); }}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-colors ${mode === "login" ? "bg-white text-[#3b1c90] shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Login
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setMode("register"); setErrorMsg(""); }}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-colors ${mode === "register" ? "bg-white text-[#3b1c90] shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Sign Up
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Gmail Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="email" 
                      required
                      placeholder="you@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-14 pl-12 pr-5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-14 pl-12 pr-5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" 
                    />
                  </div>
                </div>

                <button disabled={loading} type="submit" className="w-full h-14 bg-[#e81cff] hover:bg-[#d014e5] text-white font-black text-lg rounded-xl shadow-md uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? "Processing..." : mode === "login" ? "Login" : "Submit"} <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <AuthForm />
    </Suspense>
  );
}