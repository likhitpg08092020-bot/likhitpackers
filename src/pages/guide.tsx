import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Clock, ShieldCheck, Box } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Guide() {
  const steps = [
    {
      title: "1. 4 Weeks Before Moving: Declutter & Plan",
      desc: "Sort your belongings into keep, donate, and discard. Create an inventory list and schedule your moving date with Likhit Packers and Movers."
    },
    {
      title: "2. 2 Weeks Before Moving: Notify Utilities & Service Providers",
      desc: "Transfer or cancel internet, electricity, water, and gas subscriptions. Update your billing address with banks and subscription services."
    },
    {
      title: "3. 1 Week Before Moving: Prepare Essentials Box",
      desc: "Pack a personal bag with medications, chargers, important documents, fresh clothes, toiletries, and valuables you want to carry personally."
    },
    {
      title: "4. Moving Day: Supervise & Relax",
      desc: "Our professional crew will arrive with multi-layer packing materials to dismantle furniture, pack electronics safely, and load the transport vehicle."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEO 
        title="Comprehensive Moving Guide & Checklist | Likhit Packers and Movers"
        description="Follow our complete step-by-step moving guide and checklist for a seamless, damage-free household relocation in Karnataka."
        canonical="/guide"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-24 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Moving Guide & Checklist</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-slate-300">
            A step-by-step roadmap to make your home or office relocation completely stress-free.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6 items-start">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center shrink-0 font-black text-lg">
                  {idx + 1}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-10 rounded-2xl border border-orange-200 text-center shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready for a Smooth Move?</h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">Get an instant free estimate from our relocation specialists today.</p>
            <Link to="/quote">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                Get Free Moving Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
