import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      location: "Moved from Hubli to Bangalore",
      text: "Excellent service! The packing team arrived exactly on time and packed all my fragile items, including a large TV, with utmost care. Everything reached Bangalore without a single scratch.",
      rating: 5
    },
    {
      name: "Priya Desai",
      location: "Local Shifting in Shivamogga",
      text: "Likhit Packers made my local shifting so easy. Their staff is very polite and professional. They dismantled my bed and wardrobe and reassembled it perfectly at the new house. Highly recommended!",
      rating: 5
    },
    {
      name: "Anil Kumar",
      location: "Office Relocation, Bellary",
      text: "We used them for our corporate office relocation. They handled the computers and servers very carefully. The entire move was completed over the weekend ensuring no downtime for our business.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      location: "Car Transport to Hyderabad",
      text: "I was worried about sending my car, but their vehicle transport service is top-notch. I received daily updates, and the car was delivered right to my doorstep in perfect condition.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      location: "Moved to Pune",
      text: "Very reasonable pricing compared to others, but no compromise on quality. The corrugated boxes and bubble wrap used were of premium quality. Will definitely use them again.",
      rating: 4
    },
    {
      name: "Karthik M.",
      location: "Warehousing Service",
      text: "I needed to store my household items for 3 months while I was abroad. Their storage facility is secure and clean. When I got my items back, they were exactly as I left them.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-24 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Testimonials</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-slate-300">
            Don't just take our word for it. Read what our satisfied customers have to say about their moving experiences with us.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-slate-100 -z-0" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-orange-500 fill-orange-500' : 'text-slate-200 fill-slate-200'}`} />
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 italic">"{review.text}"</p>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <p className="text-sm text-slate-500">{review.location}</p>
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