"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ChevronDown, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const accessKey = (import.meta.env as any).VITE_WEB3FORMS_KEY || "";
    if (!accessKey) {
      alert("System Error: Web3Forms Access Key is missing.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact Message from ${data.name}`,
          from_name: "Likhit Packers Website",
          to: "likhitpg08092020@gmail.com",
          ...data,
        }),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 flex h-28 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Likhit Packers & Movers" className="h-24 w-auto drop-shadow-sm" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">Home</Link>
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900">About</Link>
            <div className="flex items-center gap-1 group cursor-pointer">
              <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Services</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-transform group-hover:rotate-180" />
            </div>
            <Link to="/track" className="text-sm font-medium text-slate-600 hover:text-slate-900">Track My Move</Link>
            <Link to="/locations" className="text-sm font-medium text-slate-600 hover:text-slate-900">Locations</Link>
            <Link to="/guide" className="text-sm font-medium text-slate-600 hover:text-slate-900">Moving Guide</Link>
            <Link to="/contact" className="text-sm font-semibold text-slate-900">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 mr-4 text-slate-600 font-medium text-sm">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+91 9900231434</span>
            </div>
            <Button variant="outline" className="hidden sm:inline-flex border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold rounded-lg">
              Track Move
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-sm shadow-orange-500/20">
              Get Free Quote
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-4 block">We'd love to hear from you</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-slate-600">
              At Likhit Packers and Movers, we're here to help! For inquiries, quotes, or to schedule your move, reach out to us via phone, email, or our convenient live chat. Your seamless moving experience starts with us—don't hesitate to get in touch!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Reach us through</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Office Address</h4>
                      <p className="text-slate-600 leading-relaxed max-w-xs">
                        Kinnal Road, Kalyan Nagar, 1st Cross, 3rd Phase right near Railway Track<br />Koppal - 583231
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                      <p className="text-slate-600 leading-relaxed">
                        <a href="tel:+919900231434" className="hover:text-blue-600 transition-colors">+91 9900231434</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600 leading-relaxed">
                        <a href="mailto:likhitpg08092020@gmail.com" className="hover:text-green-600 transition-colors">likhitpg08092020@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Social Networks</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/people/Likhit-packers-and-movers/61566452" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 hover:border-blue-500 hover:text-blue-600 transition-all text-blue-600 font-bold text-sm">
                    FB
                  </a>
                  <a href="https://www.instagram.com/likhit_packers_movers/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 hover:border-pink-500 hover:text-pink-600 transition-all text-pink-600 font-bold text-sm">
                    IG
                  </a>
                  <a href="https://wa.me/919900231434" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 hover:border-green-500 hover:text-green-600 transition-all text-green-600">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Full Name</label>
                  <input type="text" name="name" required placeholder="Your Name" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Phone Number</label>
                    <input type="text" name="phone" required placeholder="Your Phone" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Email Address</label>
                    <input type="email" name="email" required placeholder="Your Email" className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Message</label>
                  <textarea name="message" required placeholder="How can we help you?" rows={4} className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none"></textarea>
                </div>
                <Button type="submit" className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl mt-2">
                  Send Message
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-200 text-slate-600">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Likhit Packers & Movers" className="h-28 w-auto drop-shadow-sm" />
            </div>
            <p className="text-sm text-slate-500 mb-8 max-w-xs leading-relaxed">
              Professional Moving. Trusted Delivery.<br/>Based in Koppal, serving all of Karnataka with reliable logistics solutions.
            </p>
            <div className="space-y-3 text-sm font-medium">
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-slate-400" /> Kinnal Road, Kalyan Nagar, Koppal</p>
              <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-slate-400" /> +91 9900231434</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/process" className="hover:text-orange-500 transition-colors">How We Work</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors font-bold text-slate-900">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services/home-relocation" className="hover:text-orange-500 transition-colors">Home Relocation</Link></li>
              <li><Link to="/services/office-relocation" className="hover:text-orange-500 transition-colors">Office Relocation</Link></li>
              <li><Link to="/services/vehicle-transport" className="hover:text-orange-500 transition-colors">Vehicle Transport</Link></li>
              <li><Link to="/services/packing" className="hover:text-orange-500 transition-colors">Packing & Unpacking</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Customer</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/track" className="hover:text-orange-500 transition-colors flex items-center gap-2">Track My Move</Link></li>
              <li><Link to="/quote" className="hover:text-orange-500 transition-colors">Get a Quote</Link></li>
              <li><Link to="/guide" className="hover:text-orange-500 transition-colors">Moving Guide</Link></li>
              <li><Link to="/faq" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Branch Locations */}
        <div className="container mx-auto px-4 md:px-6 pt-12 pb-4">
          <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs border-b border-slate-100 pb-2">Our Branch Locations in Karnataka</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium text-slate-500">
            <Link to="/packers-and-movers-in-hubli/" className="hover:text-orange-500 transition-colors">Hubli</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-bellary/" className="hover:text-orange-500 transition-colors">Bellary</Link>
            <span>|</span>
            <Link to="/likhit-packers-and-movers-in-bagalkot/" className="hover:text-orange-500 transition-colors">Bagalkot</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-bangalore-south/" className="hover:text-orange-500 transition-colors">Bangalore Urban</Link>
            <span>|</span>
            <Link to="/packers-and-movers-bengaluru-rural/" className="hover:text-orange-500 transition-colors">Bengaluru Rural</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-belagavi/" className="hover:text-orange-500 transition-colors">Belagavi</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-bidar/" className="hover:text-orange-500 transition-colors">Bidar</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-chamarajanagar/" className="hover:text-orange-500 transition-colors">Chamarajanagar</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-chikballapur/" className="hover:text-orange-500 transition-colors">Chikballapur</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-chikkamagaluru/" className="hover:text-orange-500 transition-colors">Chikkamagaluru</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-chitradurga/" className="hover:text-orange-500 transition-colors">Chitradurga</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-dakshina-kannada/" className="hover:text-orange-500 transition-colors">Dakshina Kannada</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-davanagere/" className="hover:text-orange-500 transition-colors">Davanagere</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-gadag/" className="hover:text-orange-500 transition-colors">Gadag</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-hassan/" className="hover:text-orange-500 transition-colors">Hassan</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-haveri/" className="hover:text-orange-500 transition-colors">Haveri</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-kalaburagi/" className="hover:text-orange-500 transition-colors">Kalaburagi</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-kodagu/" className="hover:text-orange-500 transition-colors">Kodagu</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-kolar/" className="hover:text-orange-500 transition-colors">Kolar</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-mandya/" className="hover:text-orange-500 transition-colors">Mandya</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-mysuru/" className="hover:text-orange-500 transition-colors">Mysuru</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-raichur/" className="hover:text-orange-500 transition-colors">Raichur</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-ramanagara/" className="hover:text-orange-500 transition-colors">Ramanagara</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-shivamogga/" className="hover:text-orange-500 transition-colors">Shivamogga</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-tumakuru/" className="hover:text-orange-500 transition-colors">Tumakuru</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-udupi/" className="hover:text-orange-500 transition-colors">Udupi</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-uttara-kannada/" className="hover:text-orange-500 transition-colors">Uttara Kannada</Link>
            <span>|</span>
            <Link to="/packers-and-movers-in-vijayapura/" className="hover:text-orange-500 transition-colors">Vijayapura</Link>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 Likhit Packers & Movers. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms & Conditions</Link>
            <Link to="/cancellation" className="hover:text-slate-900 transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
