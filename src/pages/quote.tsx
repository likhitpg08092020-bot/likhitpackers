"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, MapPin, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    movingFrom: '',
    movingTo: '',
    movingDate: '',
    serviceRequired: 'Home Shifting (1 BHK, 2 BHK, etc.)',
    propertySize: '1 BHK'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
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
          subject: `New Quote Request from ${formData.name}`,
          from_name: "Likhit Packers Website",
          ...formData,
        }),
      });

      const result = await response.json();
      
      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        console.error(result);
        alert('Failed to submit quote request. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HEADER (Simplified for subpages) */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 flex h-28 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Likhit Packers & Movers" className="h-24 w-auto drop-shadow-sm" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">Home</Link>
            <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900">Services</Link>
            <Link to="/track" className="text-sm font-medium text-slate-600 hover:text-slate-900">Track My Move</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-slate-900">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 mr-4 text-slate-600 font-medium text-sm">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+91 9900231434</span>
            </div>
            <Link to="/quote">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-sm">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Request a Quote</h1>
            <p className="text-lg text-slate-600">Provide your details below to get a customized moving estimate.</p>
          </div>

          {!isSubmitted ? (
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12">
              
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-12 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 -z-10 rounded-full"></div>
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-orange-500 -z-10 rounded-full transition-all duration-500" 
                  style={{ width: step === 1 ? '0%' : '100%' }}
                ></div>
                
                <div className="flex flex-col items-center gap-2 bg-white px-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'bg-slate-100 text-slate-400'}`}>
                    1
                  </div>
                  <span className={`text-xs font-bold ${step >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>Contact Info</span>
                </div>

                <div className="flex flex-col items-center gap-2 bg-white px-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' : 'bg-slate-100 text-slate-400'}`}>
                    2
                  </div>
                  <span className={`text-xs font-bold ${step >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>Location & Goods</span>
                </div>
              </div>

              {step === 1 ? (
                <form onSubmit={handleNext} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Your Details</h3>
                  
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Mobile Number</label>
                    <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter 10-digit mobile number" className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Email Address <span className="text-slate-400 font-normal">(Optional)</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" />
                  </div>

                  <div className="pt-6">
                    <Button type="submit" className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-lg group">
                      Next Step <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Location and Goods Detail</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-bold text-slate-700 mb-2 block">Moving From</label>
                      <input required type="text" name="movingFrom" value={formData.movingFrom} onChange={handleChange} placeholder="Pickup City / Area" className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-slate-700 mb-2 block">Moving To</label>
                      <input required type="text" name="movingTo" value={formData.movingTo} onChange={handleChange} placeholder="Destination City / Area" className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Preferred Moving Date</label>
                    <input required type="date" name="movingDate" value={formData.movingDate} onChange={handleChange} className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all text-slate-600" />
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Service Required</label>
                    <select name="serviceRequired" value={formData.serviceRequired} onChange={handleChange} className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all text-slate-700">
                      <option>Home Shifting (1 BHK, 2 BHK, etc.)</option>
                      <option>Office Shifting</option>
                      <option>Commercial Goods Moving</option>
                      <option>Vehicle Transportation (Car/Bike)</option>
                      <option>Packing Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-bold text-slate-700 mb-2 block">Property Size / Goods Details</label>
                    <select name="propertySize" value={formData.propertySize} onChange={handleChange} className="w-full h-14 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all text-slate-700">
                      <option>1 BHK</option>
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>4 BHK / Villa</option>
                      <option>Small Office</option>
                      <option>Large Office</option>
                      <option>Car / Bike Only</option>
                      <option>Other / Custom</option>
                    </select>
                  </div>

                  <div className="pt-6 flex gap-4">
                    <Button type="button" onClick={() => setStep(1)} variant="outline" className="w-14 h-14 border-slate-200 text-slate-500 hover:text-slate-900 rounded-xl shrink-0">
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg shadow-lg shadow-orange-500/25 disabled:opacity-50">
                      {isSubmitting ? 'Sending Request...' : 'Request Free Quote'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-16 text-center animate-in zoom-in-95 duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Request Received!</h2>
              <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                Thank you. Your quotation request has been received by Likhit Packers & Movers. Our team will contact you shortly.
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 inline-block text-left border border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-1">Reference Number</span>
                <span className="text-xl font-mono font-bold text-slate-900">LPM-Q-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div>
                <Link to="/">
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white h-12 px-8 rounded-xl font-bold">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-8 border-t border-slate-100 text-center text-sm font-medium text-slate-500">
        <div className="container mx-auto">
          © 2026 Likhit Packers & Movers. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
