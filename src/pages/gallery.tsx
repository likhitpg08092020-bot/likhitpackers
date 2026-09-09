import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80", title: "Residential Relocation" },
    { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80", title: "Warehousing Storage" },
    { src: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&w=800&q=80", title: "Secure Cardboard Packing" },
    { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80", title: "Commercial Relocation" },
    { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80", title: "Safe Loading" },
    { src: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?auto=format&fit=crop&w=800&q=80", title: "Home Packing" },
    { src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80", title: "Transport Planning" },
    { src: "https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=800&q=80", title: "Fleet Management" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-24 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Our Gallery</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-slate-300">
            A visual journey of our work. See how we pack, load, and transport your valuables with utmost care and professionalism.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg">{img.title}</h3>
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