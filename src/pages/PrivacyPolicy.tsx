import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navbar />
    <main className="flex-1 pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">This page will contain the privacy policy for DRF Dyamic Resources LLC.</p>
        <Link to="/" className="text-primary hover:underline text-sm">&larr; Back to Home</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
