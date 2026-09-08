import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Locations() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Locations We Serve</h1>
        <p className="text-slate-600">We serve all of Karnataka.</p>
      </main>
      <Footer />
    </div>
  );
}
