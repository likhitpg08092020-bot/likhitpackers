import Link from "next/link";
import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 flex h-28 items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="Likhit Packers & Movers" className="h-24 w-auto drop-shadow-sm" />
        </Link>
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-wrap justify-center ml-8 mr-auto">
          <Link href="/" className="text-sm font-bold text-slate-900">Home</Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Services</Link>
          <Link href="/gallery" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Gallery</Link>
          <Link href="/faq" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">FAQ</Link>
          <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Contact</Link>
          <Link href="/quote" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Get a quote</Link>
          <Link href="/careers" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Careers</Link>
          <Link href="/testimonials" className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors">Testimonials</Link>
        </nav>
        <div className="flex items-center gap-4 shrink-0">
          <button className="text-slate-600 hover:text-orange-500 transition-colors hidden xl:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </button>
          <div className="hidden xl:flex items-center gap-2 text-slate-600 font-bold text-sm border-l border-slate-200 pl-4 mr-2">
            <Link href="/login" className="hover:text-orange-500 transition-colors">Login</Link>
            <span className="text-slate-300">/</span>
            <Link href="/login?mode=register" className="hover:text-orange-500 transition-colors">Register</Link>
          </div>
          <Link href="/quote">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-sm px-6">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
