import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Helmet>
        <title>Register | Likhit Packers and Movers</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-md mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
          <h1 className="text-3xl font-black text-slate-900 mb-4">Create Account</h1>
          <p className="text-slate-600 mb-8">
            Create an account or login to book and track your moving services easily.
          </p>
          <Link to="/login?mode=register">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-xl text-lg font-bold">
              Proceed to Sign Up
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}