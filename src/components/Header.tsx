"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    // Listen for auth changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 flex h-28 items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="Likhit Packers & Movers" className="h-24 w-auto drop-shadow-sm" />
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-wrap justify-center ml-8 mr-auto">
          <Link to="/" className="text-sm font-bold text-slate-900">Home</Link>
          <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">About</Link>
          <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Services</Link>
          <Link to="/gallery" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Gallery</Link>
          <Link to="/faq" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">FAQ</Link>
          <Link to="/blog" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Blog</Link>
          <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Contact</Link>
          <Link to="/quote" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Get a quote</Link>
          <Link to="/careers" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Careers</Link>
          <Link to="/testimonials" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Testimonials</Link>
        </nav>
        <div className="flex items-center gap-4 shrink-0">
          <button className="text-slate-600 hover:text-orange-500 transition-colors hidden xl:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </button>
          
          <div className="hidden xl:flex items-center gap-2 text-slate-600 font-bold text-sm border-l border-slate-200 pl-4 mr-2">
            {isLoggedIn ? (
              <Link to="/account" className="hover:text-[#3b1c90] text-orange-500 transition-colors flex items-center gap-1">
                My Account
              </Link>
            ) : (
              <>
                <Link to="/login" className="hover:text-orange-500 transition-colors">Login</Link>
                <span className="text-slate-300">/</span>
                <Link to="/login?mode=register" className="hover:text-orange-500 transition-colors">Register</Link>
              </>
            )}
          </div>

          <Link to="/quote">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-sm px-6">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
