import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Box, Truck, Monitor, ShieldCheck, MapPin, PackageOpen, Warehouse, Mail, Phone, CheckCircle2, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      
      <Header />

      <main className="flex-1">
        
        {/* 1. HERO SECTION */}
        <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          ></div>
          
          <div className="relative z-20 flex flex-col items-center w-full max-w-4xl mx-auto pt-10">
            <h2 className="text-[#facc15] font-black tracking-widest text-lg md:text-2xl uppercase mb-4 drop-shadow-md">
              LIKHIT PACKERS AND MOVERS
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-tight drop-shadow-xl mb-10 max-w-3xl">
              WE MAKE MOVING FAST & EASY
            </h1>
            
            <div className="bg-white text-slate-900 font-bold text-xl md:text-2xl px-8 py-3 rounded-full shadow-2xl mb-12 flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#3b1c90]" />
              +91 9900231434
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="#quote">
                <button className="bg-[#e81cff] hover:bg-[#d014e5] text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg uppercase tracking-wider transition-transform hover:scale-105">
                  Get a Quote
                </button>
              </Link>
              <a href="https://wa.me/919900231434" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-20 bg-white px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-black text-[#3b1c90] mb-16 tracking-tight">About</h2>
            <div className="flex justify-center mb-12">
              <div className="w-[300px] h-[300px] border border-slate-100 shadow-xl p-1 bg-white">
                <img src="/owner.jpg" alt="Founder" className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-6 font-serif">About Us</h3>
            <div className="text-left space-y-6 text-slate-700 font-medium text-lg max-w-3xl mx-auto">
              <p className="font-bold text-xl text-center text-slate-900 mb-8">
                Likhit Packers and Movers: Your Trusted Moving Partner<br/>
                <span className="text-base text-slate-500 font-normal">Established: 2024 | Location: Koppal, Karnataka</span>
              </p>
              <p>
                Likhit Packers and Movers is a premier logistics and relocation service provider based in Koppal, Karnataka. Founded in 2024, our mission is to simplify the moving process for individuals and businesses alike. With a strong commitment to customer satisfaction, we offer a range of tailored services to meet your unique needs.
              </p>
              <h4 className="text-2xl font-bold text-slate-900 pt-4">Our Services:</h4>
              <ul className="space-y-4">
                <li><strong className="text-slate-900">1. Residential Relocation:</strong> Moving to a new home can be overwhelming. We handle every aspect of your move, ensuring that your belongings are packed, transported, and unpacked with care.</li>
                <li><strong className="text-slate-900">2. Commercial Moving:</strong> We understand the complexities of relocating a business. Our team works efficiently to minimize downtime, allowing you to focus on your operations.</li>
                <li><strong className="text-slate-900">3. Packing Services:</strong> Our trained professionals use high-quality packing materials to ensure your items are secure during transit. We take the hassle out of packing so you can relax.</li>
                <li><strong className="text-slate-900">4. Vehicle Transportation:</strong> We provide safe and reliable vehicle transportation services, ensuring your car or bike reaches its destination without a scratch.</li>
              </ul>
              <h4 className="text-2xl font-bold text-slate-900 pt-4">Why Choose Us?</h4>
              <ul className="space-y-4">
                <li><strong className="text-slate-900">Experienced Team:</strong> Our skilled staff is trained in best practices for packing and moving, ensuring your items are in safe hands.</li>
                <li><strong className="text-slate-900">Customer-Centric Approach:</strong> We prioritize your needs and tailor our services to provide a seamless moving experience.</li>
                <li><strong className="text-slate-900">Transparent Pricing:</strong> We believe in honest pricing with no hidden fees, providing you with a clear estimate before the move begins.</li>
                <li><strong className="text-slate-900">Timely Delivery:</strong> We respect your time and strive to deliver your belongings securely and on schedule.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES GRID */}
        <section id="services" className="py-20 bg-slate-50 px-4 border-y border-slate-100">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-5xl font-black text-[#3b1c90] mb-4 tracking-tight">Services</h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-10 rounded-full"></div>
            
            <div className="max-w-4xl mx-auto text-left text-slate-700 font-medium text-lg mb-12 space-y-6">
              <p>
                At Likhit Packers and Movers, we offer a comprehensive range of services to meet all your relocation needs:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0" /> <span><strong>Residential Relocation:</strong> Seamless moving for households, ensuring your belongings are packed, transported, and unpacked with care.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0" /> <span><strong>Commercial Moving:</strong> Tailored solutions for businesses, minimizing downtime and facilitating efficient office transitions.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0" /> <span><strong>Packing Services:</strong> Professional packing using high-quality materials to secure your items during transit.</span></li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full border-[3px] border-dashed border-[#d4af37] flex items-center justify-center mb-6 p-4">
                  <Box className="w-14 h-14 text-[#3b1c90]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#3b1c90] mb-3">Packing Services</h3>
                <p className="text-slate-600 font-medium max-w-xs">Professional packing with high quality materials to ensure safety.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full border-[3px] border-dashed border-[#d4af37] flex items-center justify-center mb-6 p-4">
                  <Truck className="w-14 h-14 text-[#3b1c90]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#3b1c90] mb-3">Home Relocation</h3>
                <p className="text-slate-600 font-medium max-w-xs">End-to-end residential shifting solutions making your move hassle-free.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full border-[3px] border-dashed border-[#d4af37] flex items-center justify-center mb-6 p-4">
                  <Monitor className="w-14 h-14 text-[#3b1c90]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#3b1c90] mb-3">Office Relocation</h3>
                <p className="text-slate-600 font-medium max-w-xs">Safe and organized moving of IT equipment and furniture.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full border-[3px] border-dashed border-[#d4af37] flex items-center justify-center mb-6 p-4">
                  <ShieldCheck className="w-14 h-14 text-[#3b1c90]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#3b1c90] mb-3">Vehicle Transport</h3>
                <p className="text-slate-600 font-medium max-w-xs">Specialized carriers for secure transportation of your car or bike.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full border-[3px] border-dashed border-[#d4af37] flex items-center justify-center mb-6 p-4">
                  <PackageOpen className="w-14 h-14 text-[#3b1c90]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#3b1c90] mb-3">Unpacking Services</h3>
                <p className="text-slate-600 font-medium max-w-xs">Careful unpacking and arrangement of your belongings at destination.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[120px] h-[120px] rounded-full border-[3px] border-dashed border-[#d4af37] flex items-center justify-center mb-6 p-4">
                  <Warehouse className="w-14 h-14 text-[#3b1c90]" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#3b1c90] mb-3">Warehousing</h3>
                <p className="text-slate-600 font-medium max-w-xs">Secure storage facilities for short and long-term requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXTENDED SERVICES DETAILS */}
        <section className="py-20 bg-white px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-[#d4af37] pb-2 inline-block">Home shifting</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  At Likhit Packers and Movers, we specialize in providing seamless home shifting services tailored to your needs. Our expert team handles every detail of your move, ensuring that your belongings are packed securely and transported safely to your new home.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-[#d4af37] pb-2 inline-block">Office shifting</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Likhit Packers and Movers offers comprehensive office shifting services designed to minimize downtime and ensure a smooth transition to your new workspace. Our experienced team handles everything from packing equipment and furniture to safely transporting them to your new location.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-[#d4af37] pb-2 inline-block">Commercial moving</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Likhit Packers and Movers specializes in commercial moving services designed to facilitate smooth transitions for businesses of all sizes. We understand that relocating your office or business can be complex, so we offer tailored solutions to minimize downtime and ensure a seamless move.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-[#d4af37] pb-2 inline-block">Goods moving</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Likhit Packers and Movers offers reliable goods moving services to ensure your items are transported safely and efficiently. Whether you're relocating household items, office supplies, or specialized equipment, our experienced team is equipped to handle it all.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-[#d4af37] pb-2 inline-block">24/7 Support</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  At Likhit Packers and Movers, we understand that moving can be a stressful experience, which is why we offer 24/7 customer support.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 border-b-2 border-[#d4af37] pb-2 inline-block">Live Chat Assistance</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  At Likhit Packers and Movers, we prioritize your convenience, which is why we offer live chat assistance on our website. Our real-time chat feature allows you to connect instantly with our knowledgeable support team for any inquiries related to your moving needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. STEP BY STEP PROCESS (EXPANDED) */}
        <section className="py-24 relative overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')" }}></div>
          
          <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-widest uppercase text-center shadow-sm">
              HOW WE DO WORK?
            </h2>
            <h3 className="text-xl md:text-3xl font-bold text-[#facc15] mb-16 tracking-widest uppercase text-center">
              Step by Step Process
            </h3>
            
            <div className="w-full max-w-4xl bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
              <h4 className="text-3xl font-black text-[#3b1c90] mb-6 uppercase">Book Service</h4>
              <p className="text-slate-700 font-medium mb-6">
                Likhit Packers and Movers offers a comprehensive range of services to help you with your relocation needs. Their booking service ensures a smooth and hassle-free moving experience, whether it’s for home shifting, office relocation, or industrial goods transportation. Here’s a description of their services:
              </p>
              <ul className="space-y-3 font-medium text-slate-700 mb-8">
                <li><strong className="text-slate-900">Step 1:</strong> Contact Likhit Packers and Movers for a free consultation and quotation.</li>
                <li><strong className="text-slate-900">Step 2:</strong> Schedule a survey to assess the quantity and type of items.</li>
                <li><strong className="text-slate-900">Step 3:</strong> Select a suitable moving date and finalize the booking.</li>
                <li><strong className="text-slate-900">Step 4:</strong> Packers arrive on the scheduled date to pack, load, and transport your belongings.</li>
                <li><strong className="text-slate-900">Step 5:</strong> Unpacking and rearranging services can be availed upon delivery.</li>
              </ul>

              <h4 className="text-3xl font-black text-[#3b1c90] mb-6 uppercase pt-6 border-t border-slate-100">Packing / Loading</h4>
              <ul className="space-y-4 font-medium text-slate-700 mb-8">
                <li><strong className="text-slate-900">Pre-Move Assessment:</strong> The team evaluates your items and plans the packing and loading strategy.</li>
                <li><strong className="text-slate-900">Use of Quality Materials:</strong> Items are packed using appropriate materials like boxes, bubble wrap, and stretch wraps to ensure protection, especially for fragile and valuable goods.</li>
                <li><strong className="text-slate-900">Systematic Packing & Labeling:</strong> Heavy and non-fragile items are packed first, followed by delicate items. Everything is labeled for easy unpacking.</li>
                <li><strong className="text-slate-900">Disassembly (if needed):</strong> Large furniture is disassembled for safe transport.</li>
                <li><strong className="text-slate-900">Loading:</strong> Heavier items are loaded first into the vehicle, with fragile boxes on top. All items are secured with belts and straps to prevent shifting.</li>
                <li><strong className="text-slate-900">Final Check:</strong> The team inspects the load to ensure everything is packed and secured properly before departure.</li>
              </ul>

              <h4 className="text-3xl font-black text-[#3b1c90] mb-6 uppercase pt-6 border-t border-slate-100">Deliver Safely</h4>
              <ul className="space-y-4 font-medium text-slate-700">
                <li><strong className="text-slate-900">Timely Transport:</strong> Goods are transported as per the planned schedule.</li>
                <li><strong className="text-slate-900">Careful Unloading:</strong> Items are unloaded with care, following the same sequence as loading (heavy items first, fragile items last).</li>
                <li><strong className="text-slate-900">Reassembly (if required):</strong> Any disassembled furniture is reassembled at the destination.</li>
                <li><strong className="text-slate-900">Inspection:</strong> The team inspects all items for damage and checks if everything is delivered.</li>
                <li><strong className="text-slate-900">Unpacking (if opted):</strong> Items are unpacked and arranged as per your instructions.</li>
                <li><strong className="text-slate-900">Final Confirmation:</strong> You review and confirm the successful delivery of all goods.</li>
              </ul>
            </div>
            
            {/* Visual Process Cards from Image */}
            <div className="flex flex-col w-full max-w-4xl mx-auto gap-0 shadow-2xl rounded-[2rem] overflow-hidden">
              <div className="bg-[#b624b8] p-10 md:p-16 text-white flex flex-col items-center">
                <h3 className="text-3xl font-black mb-10 tracking-widest uppercase">Step 1: Survey</h3>
                <div className="w-full max-w-[300px] aspect-video bg-white rounded-xl mb-10 flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                  <img src="https://img.freepik.com/free-vector/cardboard-boxes-collection_1308-11116.jpg?w=826" alt="Survey Boxes" className="w-full h-full object-cover" />
                </div>
                <p className="text-lg font-medium text-white/95 leading-relaxed text-center">
                  Our executive will visit your premises to assess the volume of goods, understand your specific requirements, and provide a detailed quotation.
                </p>
              </div>
              <div className="bg-[#3b1c90] p-10 md:p-16 text-white flex flex-col items-center">
                <h3 className="text-3xl font-black mb-10 tracking-widest uppercase">Step 2: Packing</h3>
                <div className="w-48 h-48 bg-transparent rounded-2xl mb-10 flex items-center justify-center overflow-hidden">
                  <img src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png" alt="Packing Mover" className="w-full h-full object-contain filter invert opacity-95 drop-shadow-md" />
                </div>
                <p className="text-lg font-medium text-white/95 leading-relaxed text-center">
                  Once the quotation is approved, our expert packing team will arrive at your location. We use high-quality packing materials to ensure the safety of your belongings during transit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PRICING SECTION */}
        <section className="py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-extrabold text-[#3b1c90] tracking-tight leading-tight mb-4 uppercase">
              Rates, Charges For Packers And Movers In Koppal
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-12 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: "1 BHK", price: "INR 6500-10500", desc: "UPTO 50KM SERVICE" },
                { title: "2 BHK", price: "INR 11500-14500", desc: "UPTO 50KM SERVICE" },
                { title: "3 BHK", price: "INR 14500-17500", desc: "UPTO 50KM SERVICE" },
                { title: "4 BHK", price: "INR 20000-25000", desc: "UPTO 50KM SERVICE" },
                { title: "CAR TRANSPORTATION", price: "INR 8500-11000", desc: "UPTO 50KM SERVICE" },
                { title: "BIKE TRANSPORTATION", price: "INR 2500-6500", desc: "UPTO 50KM SERVICE" }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:border-[#d4af37] transition-all text-center flex flex-col items-center">
                  <h3 className="text-2xl font-black text-[#3b1c90] mb-4">{item.title}</h3>
                  <div className="text-xl font-bold text-slate-800 mb-2">{item.price}</div>
                  <p className="text-sm font-bold tracking-widest text-[#d4af37] uppercase mb-8">{item.desc}</p>
                  <Link to="/quote" className="mt-auto w-full">
                    <button className="w-full bg-[#3b1c90] text-white hover:bg-[#2a1468] font-black px-8 py-4 rounded-xl uppercase tracking-wider transition-colors">
                      CONTACT NOW
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link to="/pricing-details" className="text-lg font-bold text-[#d4af37] hover:text-[#b08e24] underline">Click here for more details</Link>
            </div>
          </div>
        </section>

        {/* 7. REQUEST A QUOTE (FORM) & CONTACT INFO */}
        <section id="quote" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Form Side */}
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
                <h2 className="text-3xl font-black text-[#3b1c90] mb-8 uppercase">Request a Quote</h2>
                <form className="space-y-6">
                  <div>
                    <input type="text" placeholder="Location and goods detail" className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" required />
                  </div>
                  <div>
                    <input type="text" placeholder="Name" className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" required />
                  </div>
                  <div>
                    <input type="tel" placeholder="Mobile" className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" required />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" className="w-full h-14 px-5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" required />
                  </div>
                  <button type="submit" className="w-full bg-[#e81cff] hover:bg-[#d014e5] text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg uppercase tracking-wider transition-transform hover:scale-105">
                    Next Step
                  </button>
                </form>
              </div>

              {/* Contact Info Side */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-black text-[#3b1c90] mb-6 uppercase">Contact Us</h2>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">We'd love to hear from you</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-10">
                  At Likhit Packers and Movers, we’re here to help! For inquiries, quotes, or to schedule your move, reach out to us via phone, email, or our convenient live chat. Your seamless moving experience starts with us—don’t hesitate to get in touch!
                </p>
                <div className="space-y-6 text-lg font-bold text-slate-800">
                  <div className="flex gap-4 items-start">
                    <MapPin className="w-6 h-6 text-[#d4af37] shrink-0 mt-1" />
                    <span>KINNAL ROAD, KALYAN NAGAR, 1ST CROSS, 3RD PHASE RIGHT NEAR RAILWAY TRACK KOPPAL-583231</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Phone className="w-6 h-6 text-[#d4af37] shrink-0" />
                    <span>+91 9900231434</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Mail className="w-6 h-6 text-[#d4af37] shrink-0" />
                    <span>likhitpg08092020@gmail.com</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. FAQ & WHY CHOOSE US & SEO TEXT */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl space-y-20">
            
            {/* FAQ Block */}
            <div>
              <h2 className="text-4xl font-black text-[#3b1c90] mb-10 uppercase text-center">FAQ</h2>
              <div className="space-y-4">
                
                {/* Q1 */}
                <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-bold text-slate-800 flex justify-between items-center mb-2">
                    Why Should I Choose Likhit Packers and movers?
                    <span className="text-[#d4af37] text-2xl group-hover:rotate-45 transition-transform">+</span>
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    We provide experienced professionals, transparent competitive pricing with no hidden charges, 24/7 customer support, and guaranteed safe, timely delivery of all your belongings.
                  </p>
                </div>

                {/* Q2 */}
                <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-bold text-slate-800 flex justify-between items-center mb-2">
                    Do you provide service for moving on weekend/holidays?
                    <span className="text-[#d4af37] text-2xl group-hover:rotate-45 transition-transform">+</span>
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Yes! We understand that weekends and holidays might be the most convenient time for you to move. Our services operate 365 days a year to accommodate your schedule.
                  </p>
                </div>

                {/* Q3 */}
                <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-bold text-slate-800 flex justify-between items-center mb-2">
                    How early should I book my moving date?
                    <span className="text-[#d4af37] text-2xl group-hover:rotate-45 transition-transform">+</span>
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    We recommend booking your move at least 1-2 weeks in advance to ensure availability, especially during weekends. However, we can also accommodate urgent and last-minute moving requests.
                  </p>
                </div>

                {/* Q4 */}
                <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <h3 className="text-xl font-bold text-slate-800 flex justify-between items-center mb-2">
                    Do you provide insurance for goods during transit?
                    <span className="text-[#d4af37] text-2xl group-hover:rotate-45 transition-transform">+</span>
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    Yes, we offer comprehensive transit insurance for your valuable belongings to give you complete peace of mind during the relocation process against any unforeseen circumstances.
                  </p>
                </div>

              </div>
            </div>

            {/* Why Choose Us SEO */}
            <div>
              <h2 className="text-3xl font-black text-[#3b1c90] mb-8 uppercase">Why Choose Likhit Packers and Movers?</h2>
              <ul className="space-y-4 font-medium text-slate-700 text-lg">
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0" /> Experienced professionals with expertise in safe handling and moving.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0" /> Competitive pricing with no hidden charges.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0" /> 24/7 customer support to address any concerns during the move.</li>
                <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0" /> Timely delivery with a commitment to customer satisfaction.</li>
              </ul>
            </div>

            {/* Koppal Guide */}
            <div>
              <h2 className="text-3xl font-black text-[#3b1c90] mb-8 uppercase">Koppal Guide to Best Packing and Moving Services</h2>
              <div className="prose prose-lg text-slate-700 max-w-none font-medium">
                <p>If you’re planning a move in or from <strong>Koppal</strong>, choosing the right packers and movers can make all the difference. Here’s a guide to help you select the best services for your relocation:</p>
                <h3 className="text-xl font-bold text-slate-900 mt-6">1. Research and Compare</h3>
                <ul>
                  <li>Look for licensed and experienced moving companies.</li>
                  <li>Compare quotes from multiple packers and movers to get competitive pricing.</li>
                  <li>Check online reviews and ratings to evaluate customer satisfaction.</li>
                </ul>
                <h3 className="text-xl font-bold text-slate-900 mt-6">2. Services Offered</h3>
                <ul>
                  <li><strong>Home Shifting:</strong> Safe packing, loading, transport, and unloading of household goods.</li>
                  <li><strong>Office Relocation:</strong> Specialized services for moving office equipment, files, and furniture.</li>
                  <li><strong>Vehicle Transportation:</strong> Safe transit of cars and bikes.</li>
                  <li><strong>Storage Services:</strong> Temporary or long-term warehousing solutions.</li>
                  <li><strong>Insurance:</strong> Comprehensive insurance for your items during transit.</li>
                </ul>
                <h3 className="text-xl font-bold text-slate-900 mt-6">3. Look for Custom Solutions</h3>
                <ul>
                  <li>Choose companies that provide customized packing for fragile or high-value items.</li>
                  <li>Ensure that they offer disassembly and reassembly of large furniture or appliances.</li>
                </ul>
                <h3 className="text-xl font-bold text-slate-900 mt-6">4. Quality of Packing Materials</h3>
                <p>The best movers use high-quality packing materials like sturdy boxes, bubble wrap, and foam to prevent damage.</p>
                <h3 className="text-xl font-bold text-slate-900 mt-6">5. Timely and Secure Delivery</h3>
                <p>Opt for movers with a proven track record of timely deliveries and secure handling of items during transport.</p>
                <h3 className="text-xl font-bold text-slate-900 mt-6">6. Customer Support</h3>
                <p>A good moving company offers 24/7 customer service to address any queries or issues during the move.</p>
                <h3 className="text-xl font-bold text-slate-900 mt-6">7. Verify Credentials</h3>
                <p>Ensure the company is licensed and has a valid GST registration, which ensures credibility and professionalism.</p>
                <p className="mt-4 font-bold">By following this guide, you can ensure a smooth and stress-free moving experience in Koppal with reliable packing and moving servic.</p>
              </div>
            </div>

            {/* Best Packers in Koppal */}
            <div>
              <h2 className="text-3xl font-black text-[#3b1c90] mb-8 uppercase">BEST PACKERS AND MOVERS IN KOPPAL</h2>
              <div className="prose prose-lg text-slate-700 max-w-none font-medium">
                <p>Likhit Packers and Movers is a reputed moving and packing service provider in Koppal, known for offering efficient relocation services across various sectors. They cater to both residential and commercial moving needs, ensuring a hassle-free experience for their customers. Below is an overview of their key services and qualities:</p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-6">Key Services:</h3>
                <ol>
                  <li><strong>Household Shifting:</strong> Likhit Packers and Movers specializes in safely packing and transporting household items, including furniture, appliances, and fragile goods.</li>
                  <li><strong>Office Relocation:</strong> They offer office shifting services with minimal downtime, ensuring the safe transportation of office equipment, documents, and furniture.</li>
                  <li><strong>Vehicle Transportation:</strong> Likhit Packers also provides vehicle moving services, including car and bike transportation across cities.</li>
                  <li><strong>Loading and Unloading:</strong> Their trained professionals handle the loading and unloading of goods with utmost care, preventing damage during transit.</li>
                  <li><strong>Storage and Warehousing:</strong> For clients who need temporary storage, they offer secure warehousing solutions for household goods and commercial consignments.</li>
                </ol>

                <h3 className="text-xl font-bold text-slate-900 mt-6">Strengths:</h3>
                <ul>
                  <li><strong>Trained Staff:</strong> Likhit Packers and Movers employs experienced and skilled workers who ensure that the packing, loading, and unloading processes are executed efficiently.</li>
                  <li><strong>Quality Packing Materials:</strong> They use high-quality packing materials, such as bubble wrap, cardboard boxes, and wrapping sheets, to protect goods during transportation.</li>
                  <li><strong>Timely Delivery:</strong> Known for their punctuality, Likhit Packers strives to complete relocations within the promised time frame, ensuring customer satisfaction.</li>
                  <li><strong>Affordability:</strong> They offer competitive pricing for their services, making them a popular choice for both budget-conscious individuals and businesses.</li>
                  <li><strong>Customer Support:</strong> Likhit Packers and Movers is praised for its responsive customer service, providing clients with regular updates on their shipment status.</li>
                </ul>
                <p className="font-bold mt-4">Their reliability, commitment to quality service, and professionalism have made them one of the best packers and movers in Koppal.</p>
              </div>
            </div>

            {/* Best Way to Contact */}
            <div>
              <h2 className="text-3xl font-black text-[#3b1c90] mb-8 uppercase">Best way to contact likhit packers and movers in koppal</h2>
              <div className="prose prose-lg text-slate-700 max-w-none font-medium">
                <p>The best ways to contact <strong>Likhit Packers and Movers</strong> in Koppal are:</p>
                <ol>
                  <li><strong>Phone Call:</strong> Reach out to them directly through their contact number for quick queries, quotes, or booking assistance.</li>
                  <li><strong>Website/Online Inquiry:</strong> Many moving companies, including Likhit Packers and Movers, have websites where you can fill out an inquiry form or use live chat for assistance.</li>
                  <li><strong>Email:</strong> You can send an email with details about your move, including your location, moving date, and items to be transported, and request a quotation.</li>
                  <li><strong>Visit Their Office:</strong> If you prefer in-person communication, visit their local office in Koppal for detailed discussions and direct booking.</li>
                  <li><strong>Social Media or Online Listings:</strong> Check their presence on social media platforms like Facebook or Google My Business for contact details, reviews, and updates.</li>
                </ol>
              </div>
            </div>

            {/* Map Details */}
            <div>
              <h2 className="text-3xl font-black text-[#3b1c90] mb-8 uppercase">Map & Location</h2>
              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                Kinnal Road in Kalyan Nagar, Koppal (Pin code: 583231) is situated in a suburban area near the railway track. Koppal is a district in the northern part of Karnataka, known for its historical significance and rich cultural heritage. The locality is a mix of residential and semi-industrial areas, with Kinnal Road connecting various parts of Koppal. It is relatively close to the city center, making it convenient for access to essential services and transportation, particularly due to its proximity to the railway track. The area is gradually developing with basic infrastructure and amenities.
              </p>
            </div>

            {/* Review Section */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
              <h2 className="text-3xl font-black text-[#3b1c90] mb-8 uppercase">Submit a Review</h2>
              <form className="space-y-6">
                <div>
                  <label className="font-bold text-slate-800 mb-2 block">Your overall rating</label>
                  <select className="w-full h-14 px-5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none">
                    <option>5 Stars</option>
                    <option>4 Stars</option>
                    <option>3 Stars</option>
                    <option>2 Stars</option>
                    <option>1 Star</option>
                  </select>
                </div>
                <div>
                  <input type="text" placeholder="Title of your review" className="w-full h-14 px-5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" required />
                </div>
                <div>
                  <textarea placeholder="Your review" rows={4} className="w-full p-5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" required></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your name" className="w-full h-14 px-5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" required />
                  <input type="email" placeholder="Your email" className="w-full h-14 px-5 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#3b1c90] outline-none" required />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="verify" required className="w-5 h-5" />
                  <label htmlFor="verify" className="text-slate-600 font-medium">This review is based on my own experience and is my genuine opinion.</label>
                </div>
                <button type="submit" className="bg-[#3b1c90] hover:bg-[#2a1468] text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg uppercase tracking-wider transition-colors">
                  Submit Review
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
