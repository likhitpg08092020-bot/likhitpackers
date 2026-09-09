import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/servicesData';
import { Truck, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center flex-1">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button className="bg-orange-500 hover:bg-orange-600">View All Services</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Helmet>
        <title>{service.title} | Likhit Packers and Movers</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      <Header />

      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {service.description}
            </p>
            <div className="mt-8">
              <Link to="/quote">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
                  Get Free Quotation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our {service.title}?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-slate-600"><strong>Professional Team:</strong> Our experienced crew handles your specific requirement with utmost care and efficiency.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-slate-600"><strong>Safe & Secure:</strong> We prioritize the safety of your goods, using top-tier packing materials and modern equipment.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-slate-600"><strong>On-Time Delivery:</strong> We value your time and strictly adhere to our committed schedules.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-slate-600"><strong>Transparent Pricing:</strong> No hidden charges. You get exactly what you pay for with zero surprises.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
