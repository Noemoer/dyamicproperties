import { useFadeIn } from "@/hooks/use-fade-in";
import { Search, Settings, Wrench, Bot } from "lucide-react";

const cards = [
  {
    icon: Search,
    title: "Acquire",
    desc: "We identify and purchase single-family properties in the St. Louis metro area focusing on neighborhoods where quality affordable housing is needed most.",
  },
  {
    icon: Settings,
    title: "Manage",
    desc: "From lease agreements to maintenance requests we handle everything in-house using AI-assisted systems for faster response times and better documentation.",
  },
  {
    icon: Wrench,
    title: "Maintain",
    desc: "Every home in our portfolio is maintained to meet and exceed housing authority standards.",
  },
  {
    icon: Bot,
    title: "AI-Powered Support",
    desc: "Our AI phone system answers tenant calls 24/7, handles routine inquiries, routes emergency requests instantly, and ensures no tenant is ever left without a response.",
  },
];

const WhatWeDo = () => {
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-secondary">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          What We Do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
