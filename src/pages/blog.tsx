import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "10 Essential Tips for a Stress-Free Home Relocation",
      excerpt: "Moving to a new home doesn't have to be overwhelming. Follow our top 10 tips to ensure a smooth, organized, and stress-free shifting experience.",
      date: "Oct 15, 2024",
      author: "Likhit Team",
      image: "https://images.unsplash.com/photo-1554196038-950a8ab51827?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "How to Pack Fragile Items Safely During Transit",
      excerpt: "Glassware, electronics, and artwork require special attention. Learn professional techniques for wrapping and boxing your most delicate belongings.",
      date: "Oct 02, 2024",
      author: "Logistics Expert",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Ultimate Office Relocation Checklist",
      excerpt: "Planning a corporate move? Minimize downtime and keep your team productive with our comprehensive office shifting checklist.",
      date: "Sep 28, 2024",
      author: "Commercial Moving Div.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-24 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Our Blog</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto text-slate-300">
            Insights, tips, and guides on packing, moving, and making your relocation as seamless as possible.
          </p>
        </section>

        <section className="py-20 container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1">{post.excerpt}</p>
                  <Link to="#" className="text-orange-500 font-bold flex items-center group-hover:underline">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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