import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MessageCircle, BotMessageSquare, Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Likhit Packers & Movers | Moving Your World, Safely.",
  description: "Premium Packers and Movers service in Karnataka. Get a free quote for your relocation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative">
        {children}
        
        {/* Left Floating Action Button (Mail Chat) */}
        <div className="fixed bottom-6 left-6 z-[99]">
          <a href="mailto:likhitpg08092020@gmail.com?subject=Chat Inquiry from Website" className="w-14 h-14 bg-[#facc15] hover:bg-[#eab308] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group relative cursor-pointer">
            <Mail className="w-7 h-7 text-white fill-white" />
            <span className="absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Chat via Email
            </span>
          </a>
        </div>

        {/* Right Floating Action Button (WhatsApp) */}
        <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-4">
          <a 
            href="https://wa.me/919900231434" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group relative cursor-pointer"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              WhatsApp Us
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}
