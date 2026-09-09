import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Account from './pages/account';
import Blog from './pages/blog';
import Careers from './pages/careers';
import Contact from './pages/contact';
import Faq from './pages/faq';
import Gallery from './pages/gallery';
import Guide from './pages/guide';
import Locations from './pages/locations';
import Login from './pages/login';
import Quote from './pages/quote';
import Register from './pages/register';
import Services from './pages/services';
import Testimonials from './pages/testimonials';
import Track from './pages/track';

import { MessageCircle, Mail } from 'lucide-react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/track" element={<Track />} />
      </Routes>

      {/* Left Floating Action Button (Mail Chat) */}
      <div className="fixed bottom-6 left-6 z-[99]">
        <a href="mailto:likhitpg08092020@gmail.com?subject=Chat Inquiry from Website" className="w-14 h-14 bg-[#facc15] hover:bg-[#eab308] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group relative cursor-pointer">
          <Mail className="w-7 h-7 text-white fill-white" />
          <span className="absolute left-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat via Email
          </span>
        </a>
      </div>

      {/* Right Floating Action Button (WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-[99] flex flex-col gap-4">
        <a 
          href="https://wa.me/919900231434" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group relative cursor-pointer"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Us
          </span>
        </a>
      </div>
    </>
  );
}

export default App;
