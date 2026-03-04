import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import AIManagement from "@/components/AIManagement";
import Properties from "@/components/Properties";
import Tenants from "@/components/Tenants";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <AIManagement />
      <Properties />
      <Tenants />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default Index;
