"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { User, Package, MapPin, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

export default function AccountPage() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [joinedDate, setJoinedDate] = useState<string>("Loading...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/login"); // Redirect to login if not authenticated
        return;
      }
      
      setUserEmail(session.user.email || null);
      
      if (session.user.created_at) {
        const date = new Date(session.user.created_at);
        setJoinedDate(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
      }
      setLoading(false);
    }
    
    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-xl font-bold text-slate-500 animate-pulse">Loading profile...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-black text-[#3b1c90] uppercase tracking-tight">My Profile</h1>
            <button onClick={handleLogout} className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold rounded-lg transition-colors">
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Sidebar Profile Info */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center">
                <div className="w-24 h-24 bg-[#e81cff] rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg text-white">
                  <User className="w-12 h-12" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 line-clamp-1" title={userEmail?.split('@')[0] || 'Customer'}>
                  {userEmail?.split('@')[0] || 'Valued Customer'}
                </h2>
                <p className="text-slate-500 font-medium mb-6 break-all">
                  {userEmail}
                </p>
                <div className="border-t border-slate-100 pt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Phone:</span>
                    <span className="font-bold text-slate-800">Add in Settings</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Joined:</span>
                    <span className="font-bold text-slate-800">{joinedDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Dashboard */}
            <div className="md:col-span-2 space-y-8">
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">0</div>
                    <div className="text-sm font-medium text-slate-500 uppercase">Active Moves</div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">0</div>
                    <div className="text-sm font-medium text-slate-500 uppercase">Past Moves</div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-[#facc15]" /> Recent Activity
                </h3>
                <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                  <Package className="w-12 h-12 text-slate-300 mb-4" />
                  <p className="text-lg font-bold text-slate-800 mb-2">No active bookings found</p>
                  <p className="text-slate-500 mb-6 max-w-sm">You haven't requested any moving services yet. Get a free quote to start your journey!</p>
                  <Link to="/quote">
                    <button className="bg-[#facc15] hover:bg-[#eab308] text-[#1e1b4b] font-black px-6 py-3 rounded-xl uppercase tracking-wider transition-colors shadow-sm">
                      Book a Service
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
