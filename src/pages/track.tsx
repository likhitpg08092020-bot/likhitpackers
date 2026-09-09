"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Search, MapPin, Truck, CheckCircle2, Clock } from "lucide-react";

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "not_found">("idle");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    setStatus("loading");
    // Simulate API call to track shipment
    setTimeout(() => {
      if (trackingId.length > 5) {
        setStatus("found");
      } else {
        setStatus("not_found");
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center">
        
        <div className="text-center max-w-2xl mb-12">
          <h1 className="text-5xl font-black text-[#3b1c90] mb-6 uppercase tracking-tight">Track Your Move</h1>
          <div className="w-16 h-1 bg-[#d4af37] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 font-medium">
            Enter your unique Booking ID below to get real-time status updates on your packing and relocation process.
          </p>
        </div>

        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
              <input 
                type="text" 
                placeholder="Enter Booking ID (e.g., LIKHIT-8492)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="w-full h-16 pl-14 pr-6 rounded-xl border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-[#3b1c90] outline-none text-lg font-bold uppercase tracking-wide"
              />
            </div>
            <button type="submit" disabled={status === "loading"} className="h-16 px-10 bg-[#facc15] hover:bg-[#eab308] text-[#1e1b4b] font-black text-lg rounded-xl shadow-md uppercase tracking-wider transition-all disabled:opacity-70 whitespace-nowrap flex items-center justify-center">
              {status === "loading" ? "Searching..." : "Track Now"}
            </button>
          </form>

          {status === "not_found" && (
            <div className="text-center py-12 border-2 border-dashed border-red-100 bg-red-50 rounded-2xl">
              <h3 className="text-2xl font-bold text-red-600 mb-2">Tracking ID Not Found</h3>
              <p className="text-slate-600">Please check your Booking ID and try again, or contact our support.</p>
            </div>
          )}

          {status === "found" && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Booking ID</p>
                  <p className="text-2xl font-black text-slate-900 uppercase">{trackingId}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
                    <Truck className="w-4 h-4" /> In Transit
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-[1.15rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-slate-200">
                
                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute -left-5 md:left-1/2 md:static">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-slate-900">Booking Confirmed</h4>
                      <time className="text-xs font-bold text-slate-400">10:00 AM</time>
                    </div>
                    <p className="text-sm text-slate-600">Your move details have been verified and scheduled.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute -left-5 md:left-1/2 md:static">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-slate-900">Packing Started</h4>
                      <time className="text-xs font-bold text-slate-400">02:30 PM</time>
                    </div>
                    <p className="text-sm text-slate-600">Our team has arrived and packing is in progress.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute -left-5 md:left-1/2 md:static ring-4 ring-blue-100">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-blue-50 border border-blue-100 p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-blue-900">In Transit</h4>
                      <time className="text-xs font-bold text-blue-500">In Progress</time>
                    </div>
                    <p className="text-sm text-blue-700">Goods are safely loaded and on the way to destination.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute -left-5 md:left-1/2 md:static">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white border border-slate-100 p-4 rounded-xl shadow-sm opacity-60">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-slate-700">Delivered</h4>
                      <time className="text-xs font-bold text-slate-400">Pending</time>
                    </div>
                    <p className="text-sm text-slate-500">Goods unloaded and unpacked at destination.</p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
