import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getLocationData } from '@/data/locationsData';
import { Button } from '@/components/ui/button';
import { MapPin, ShieldCheck, Clock, Truck, CheckCircle2, ChevronRight } from 'lucide-react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function LocationDetail() {
  const { city } = useParams<{ city: string }>();
  const data = getLocationData(city || '');

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center min-h-[50vh] flex flex-col items-center justify-center flex-1">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Location Not Found</h1>
          <p className="text-slate-600 mb-8">We couldn't find the location page you're looking for.</p>
          <Link to="/locations">
            <Button className="bg-orange-500 hover:bg-orange-600">View All Locations</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.seoDescription} />
        <link rel="canonical" href={`https://www.likhitpackers.in/locations/${data.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/hero-bg.jpg" alt="Moving Truck" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold mb-6 border border-orange-500/30">
              <MapPin className="w-4 h-4" /> Trusted in {data.cityName}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              {data.heroSubtitle}. We ensure zero damage, timely delivery, and a hassle-free moving experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:+919900231434">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white px-8 py-6 text-lg rounded-xl transition-all">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
          
          {/* Enquiry Form Snippet */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-slate-800 lg:ml-auto w-full max-w-md">
            <h3 className="text-2xl font-bold mb-2">Request a Callback</h3>
            <p className="text-slate-500 mb-6 text-sm">Fill details below and our {data.cityName} team will contact you shortly.</p>
            <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value={(import.meta.env as any).VITE_WEB3FORMS_KEY || ""} />
              <input type="hidden" name="subject" value={`New moving enquiry from ${data.cityName} page`} />
              
              <div>
                <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" required />
              </div>
              <div>
                <input type="tel" name="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="moving_from" placeholder="Moving From" defaultValue={data.cityName} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" required />
                <input type="text" name="moving_to" placeholder="Moving To" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" required />
              </div>
              <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-xl font-bold text-lg mt-2">
                Get Quotation
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* About Local City */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Choose Likhit Packers and Movers in {data.cityName}?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {data.aboutText}
          </p>
        </div>
      </section>

      {/* Local Moving Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Packers and Movers Services in {data.cityName}
            </h2>
            <p className="text-slate-600 text-lg">
              We provide a comprehensive range of shifting services designed to handle every aspect of your relocation locally or across India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages / Pricing */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Estimated Shifting Charges in {data.cityName}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-2 bg-slate-900 text-white font-bold p-6">
              <div>Service Type</div>
              <div className="text-right">Estimated Cost</div>
            </div>
            <div className="divide-y divide-slate-100">
              {data.pricing.map((item, idx) => (
                <div key={idx} className="grid grid-cols-2 p-6 hover:bg-slate-50 transition-colors">
                  <div className="font-semibold text-slate-800">{item.type}</div>
                  <div className="text-right text-orange-600 font-bold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-6 text-center italic">
            * Please note: The above prices are indicative and subject to change based on actual distance, floor level, volume of goods, and packing materials required.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How It Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { step: 1, title: "Submit Enquiry" },
              { step: 2, title: "Free Survey" },
              { step: 3, title: "Get Quotation" },
              { step: 4, title: "Expert Packing" },
              { step: 5, title: "Safe Transit" },
              { step: 6, title: "Delivery & Unpack" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-16 h-16 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-orange-500/20">
                  {item.step}
                </div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                {item.step !== 6 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-slate-700 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {data.faq.map((q, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <span className="text-orange-500">Q.</span> {q.question}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-8">
                  {q.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Other Nearby Service Areas in Karnataka</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.nearbyLinks.map(link => (
              <Link 
                key={link.slug} 
                to={`/locations/${link.slug}`}
                className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-600 hover:border-orange-500 hover:text-orange-500 transition-all font-medium flex items-center gap-2"
              >
                {link.name} <ChevronRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
