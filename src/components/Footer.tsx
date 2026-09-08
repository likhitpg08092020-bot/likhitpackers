import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const branches = [
  "Hubli", "Bellary", "Bagalkot", "Bangalore Urban", "Bengaluru Rural",
  "Belagavi", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru",
  "Chitradurga", "Dakshina Kannada", "Davanagere", "Gadag", "Hassan",
  "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Mandya", "Mysuru",
  "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi",
  "Uttara Kannada", "Vijayapura"
];

export function Footer() {
  return (
    <footer className="bg-[#1e1b4b] text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Column */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-[#facc15] mb-6 uppercase tracking-wider">About</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium uppercase text-justify">
              WE ARE PACKERS AND MOVERS MISSION IS TO SIMPLIFY THE MOVING PROCESS FOR INDIVIDUALS AND BUSINESSES ALIKE. WITH A STRONG COMMITMENT TO CUSTOMER SATISFACTION, WE OFFER A RANGE OF TAILORED SERVICES TO MEET YOUR UNIQUE NEEDS.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/people/Likhit-packers-and-movers/61566452786416/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#facc15] hover:text-[#1e1b4b] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/919900231434" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#facc15] hover:text-[#1e1b4b] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/likhit_packers_movers/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#facc15] hover:text-[#1e1b4b] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="font-bold text-[#facc15] mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Get a quote</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-[#facc15] mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-300 font-medium">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#facc15] shrink-0" />
                <span>KINNAL ROAD, KALYAN NAGAR, 1ST CROSS, 3RD PHASE RIGHT NEAR RAILWAY TRACK KOPPAL-583231</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-[#facc15] shrink-0" />
                <span>+91 9900231434</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-[#facc15] shrink-0" />
                <span>likhitpg08092020@gmail.com</span>
              </li>
            </ul>
          </div>
          
          {/* Branches Column */}
          <div>
            <h4 className="font-bold text-[#facc15] mb-6 uppercase tracking-wider">Branch Locations</h4>
            <div className="h-64 overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-2 text-sm text-slate-300 font-medium">
                {branches.map(branch => (
                  <li key={branch}>
                    <Link href={`/locations/${branch.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors">
                      Packers and Movers in {branch}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm font-medium text-slate-400">
          <p>Copyright 2024 - Likhit packers and movers</p>
        </div>
      </div>
    </footer>
  );
}
