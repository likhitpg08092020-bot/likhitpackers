"use client";

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Menu, X, Search, User } from "lucide-react";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Get a quote", path: "/quote" },
    { name: "Careers", path: "/careers" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 flex h-28 items-center justify-between">
        <Link to="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="Likhit Packers & Movers" className="h-16 md:h-24 w-auto drop-shadow-sm" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-wrap justify-center ml-8 mr-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${location.pathname === link.path ? 'text-slate-900 font-bold' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button className="text-slate-600 hover:text-orange-500 transition-colors hidden xl:block">
            <Search className="w-5 h-5" />
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

          <Link to="/quote" className="hidden sm:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-sm px-6">
              Get a Quote
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-orange-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-28 left-0 w-full bg-white border-b border-slate-100 shadow-lg max-h-[calc(100vh-7rem)] overflow-y-auto">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`p-3 border-b border-slate-50 font-medium ${location.pathname === link.path ? 'text-orange-500 font-bold bg-orange-50/50' : 'text-slate-700'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="p-3 mt-2 flex flex-col gap-3">
              {isLoggedIn ? (
                <Link to="/account" className="flex items-center gap-2 font-bold text-[#3b1c90]">
                  <User className="w-4 h-4" /> My Account
                </Link>
              ) : (
                <div className="flex gap-4">
                  <Link to="/login" className="font-bold text-slate-700">Login</Link>
                  <span className="text-slate-300">|</span>
                  <Link to="/login?mode=register" className="font-bold text-slate-700">Register</Link>
                </div>
              )}
            </div>
            
            <div className="p-3 sm:hidden">
              <Link to="/quote">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
