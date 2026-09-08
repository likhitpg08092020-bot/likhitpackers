"use client";

import { useState, Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Mail, KeyRound, ArrowRight, UserCheck } from "lucide-react";

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "register" ? "register" : "login";
  
  const [mode, setMode] = useState<"login" | "register" | "otp">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "register") {
      setMode("otp");
    } else if (mode === "login") {
      router.push("/account");
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate verification delay
    setTimeout(() => {
      router.push("/account");
    }, 500);
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
                <button type="submit" className="w-full h-14 bg-[#facc15] hover:bg-[#eab308] text-[#1e1b4b] font-black text-lg rounded-xl shadow-md uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                  Verify OTP <UserCheck className="w-5 h-5" />
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
                    onClick={() => setMode("login")}
                    className={`flex-1 py-3 text-sm font-bold rounded-lg transition-colors ${mode === "login" ? "bg-white text-[#3b1c90] shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Login
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setMode("register")}
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

                <button type="submit" className="w-full h-14 bg-[#e81cff] hover:bg-[#d014e5] text-white font-black text-lg rounded-xl shadow-md uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                  {mode === "login" ? "Login" : "Submit"} <ArrowRight className="w-5 h-5" />
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