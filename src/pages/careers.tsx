import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Briefcase, Send } from "lucide-react";

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-24 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Careers</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-slate-300">
            Join our growing team of logistics professionals and help us redefine the relocation industry in India.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">We are always looking for talent!</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We currently have openings for skilled packers, drivers (heavy & light commercial vehicles), and customer support executives at our Hubli and Bangalore branches.
            </p>
            <div className="inline-flex items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-200 w-full max-w-md">
              <div className="text-left">
                <p className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-1">Send your resume to</p>
                <a href="mailto:likhitpg08092020@gmail.com" className="text-xl font-bold text-orange-500 flex items-center gap-2 hover:underline">
                  <Send className="w-5 h-5" />
                  likhitpg08092020@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}