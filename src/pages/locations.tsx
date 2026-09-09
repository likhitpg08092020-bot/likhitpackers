import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { cities } from "@/data/locationsData";
import { MapPin, ChevronRight } from "lucide-react";

export default function Locations() {
  return (
    <>
      <Helmet>
        <title>Service Areas & Locations | Likhit Packers and Movers</title>
        <meta name="description" content="Likhit Packers and Movers serves all major districts and cities across Karnataka. Find dedicated local packers and movers in your city." />
        <link rel="canonical" href="https://www.likhitpackers.in/locations" />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Locations We Serve</h1>
            <p className="text-xl text-slate-300">
              Reliable, professional, and swift moving services across all 28 major districts and cities in Karnataka.
            </p>
          </div>
        </section>

        <main className="flex-1 container mx-auto px-4 py-16 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link 
                key={city.slug} 
                to={`/locations/${city.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-orange-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{city.name}</h2>
                  <p className="text-slate-500 text-sm mb-4">Packers and Movers in {city.name}</p>
                </div>
                <div className="flex items-center text-orange-500 font-semibold text-sm">
                  View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
