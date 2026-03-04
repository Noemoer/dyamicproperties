import { useFadeIn } from "@/hooks/use-fade-in";
import { Bot, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: Bot, title: "AI Powered", desc: "24/7 automated tenant support and emergency response." },
  { icon: Heart, title: "Section 8 Friendly", desc: "Proudly working with Housing Choice Voucher holders in St. Louis." },
  { icon: MapPin, title: "Locally Owned", desc: "St. Louis based, community focused, owner operated." },
];

const WhyChoose = () => {
  const ref = useFadeIn();

  return (
    <section className="py-20 bg-background">
      <div ref={ref} className="section-fade-in container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-14">
          Why Choose DRF
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.title} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
