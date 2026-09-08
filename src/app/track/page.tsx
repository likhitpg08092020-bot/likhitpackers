import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Track() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Track Your Move</h1>
        <p className="text-slate-600">Enter your tracking ID below.</p>
      </main>
      <Footer />
    </div>
  );
}
