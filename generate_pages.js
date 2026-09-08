const fs = require('fs');
const path = require('path');

const pages = [
  {
    name: 'gallery',
    title: 'Our Gallery',
    content: 'View our past moves, packing processes, and our fleet in action.'
  },
  {
    name: 'faq',
    title: 'Frequently Asked Questions',
    content: 'Find answers to common questions about our moving, packing, and relocation services.'
  },
  {
    name: 'blog',
    title: 'Moving Tips & Blog',
    content: 'Read our latest articles on how to plan a stress-free move.'
  },
  {
    name: 'careers',
    title: 'Careers',
    content: 'Join the Likhit Packers and Movers team. We are always looking for dedicated professionals.'
  },
  {
    name: 'testimonials',
    title: 'Client Testimonials',
    content: 'Read what our satisfied customers have to say about our packing and moving services.'
  }
];

const template = (title, content) => `import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black text-[#3b1c90] mb-6 uppercase tracking-tight">${title}</h1>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-10 rounded-full"></div>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            ${content}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}`;

pages.forEach(p => {
  const dir = path.join('src', 'app', p.name);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p.title, p.content));
});
