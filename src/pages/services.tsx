import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black text-[#3b1c90] mb-6 uppercase tracking-tight">Our Services</h1>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            At Likhit Packers and Movers, we offer a comprehensive range of services to meet all your relocation needs. From Residential and Commercial moving, to safe Vehicle Transportation and secure Warehousing.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
