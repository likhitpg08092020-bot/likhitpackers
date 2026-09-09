import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Target, Shield, Users } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-24 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">About Us</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
            Likhit Packers and Movers is a premier logistics and relocation service provider based in Karnataka. Founded with a mission to simplify the moving process, we offer tailored services for both individuals and businesses.
          </p>
        </section>

        {/* Content Section */}
        <section className="py-20 container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Journey</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Established in 2024, Likhit Packers and Movers quickly grew to become one of the most trusted relocation companies. We realized that shifting homes or offices is often incredibly stressful, so we built our entire business model around reliability, transparency, and supreme care for our clients' belongings.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Today, we handle hundreds of relocations monthly across India, leveraging a robust network of transport vehicles, highly trained packing professionals, and secure warehousing facilities.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  <span className="text-slate-700">100% Safe and Secure packing materials used</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  <span className="text-slate-700">Trained, professional, and courteous moving staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  <span className="text-slate-700">Door-to-door transit insurance available</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="Moving House" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Warehouse Storage" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-white py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <Shield className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Integrity & Safety</h3>
                <p className="text-slate-600">We treat your belongings as if they were our own. Safety is guaranteed from origin to destination.</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <Target className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Customer First</h3>
                <p className="text-slate-600">Your satisfaction is our primary metric of success. We are dedicated to providing a stress-free experience.</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                <Users className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Professional Team</h3>
                <p className="text-slate-600">Our workforce undergoes rigorous training in modern packing techniques and safe handling procedures.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
