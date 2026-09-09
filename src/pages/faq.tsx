import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HelpCircle } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      q: "How much in advance should I book my move?",
      a: "We recommend booking at least 1-2 weeks in advance for local moves, and 2-4 weeks for interstate or long-distance moves to ensure vehicle availability and proper planning."
    },
    {
      q: "Do you provide packing materials?",
      a: "Yes, we provide premium multi-layer packing materials including bubble wrap, corrugated sheets, stretch film, and specialized cardboard boxes to ensure maximum safety."
    },
    {
      q: "Are my goods insured during transit?",
      a: "Absolutely. We offer comprehensive door-to-door transit insurance to protect your belongings against unforeseen circumstances during the relocation."
    },
    {
      q: "How is the shifting cost calculated?",
      a: "The cost depends on the volume of goods, the distance between the origin and destination, the type of vehicle required, and any specific packing requirements (like fragile items)."
    },
    {
      q: "Will you dismantle and reassemble my furniture?",
      a: "Yes, our trained professionals will carefully dismantle large furniture (beds, dining tables, wardrobes) at the origin and expertly reassemble them at your new home."
    },
    {
      q: "Do you offer vehicle transportation?",
      a: "Yes, we provide secure door-to-door car and bike transport services to anywhere in India using dedicated carriers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-24 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Frequently Asked Questions</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-slate-300">
            Find answers to the most common questions about our packing, moving, and transportation services.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <HelpCircle className="w-8 h-8 text-orange-500 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}