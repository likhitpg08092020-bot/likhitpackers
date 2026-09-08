import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black text-[#3b1c90] mb-6 uppercase tracking-tight">About Us</h1>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-10 rounded-full"></div>
          
          <div className="flex justify-center mb-12">
            <div className="w-[300px] h-[300px] border border-slate-100 shadow-xl p-1 bg-white">
              <img src="/owner.jpg" alt="Founder" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="text-left space-y-6 text-slate-700 font-medium text-lg">
            <p className="font-bold text-xl text-center text-slate-900 mb-8">
              Likhit Packers and Movers: Your Trusted Moving Partner<br/>
              <span className="text-base text-slate-500 font-normal">Established: 2024 | Location: Koppal, Karnataka</span>
            </p>
            <p>
              Likhit Packers and Movers is a premier logistics and relocation service provider based in Koppal, Karnataka. Founded in 2024, our mission is to simplify the moving process for individuals and businesses alike. With a strong commitment to customer satisfaction, we offer a range of tailored services to meet your unique needs.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
