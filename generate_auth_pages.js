const fs = require('fs');
const path = require('path');

const pages = [
  {
    name: 'login',
    title: 'Login',
    content: 'Access your account to track bookings and manage your moves.'
  },
  {
    name: 'register',
    title: 'Register',
    content: 'Create an account to book and track your moving services easily.'
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
