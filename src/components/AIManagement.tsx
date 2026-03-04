import { useFadeIn } from "@/hooks/use-fade-in";
import { Phone, AlertTriangle, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "24/7 AI Phone Answering",
    desc: "Our AI answers every tenant call day or night. No missed calls, no voicemails, no waiting. Tenants always reach someone immediately.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Response System",
    desc: "When a tenant reports an emergency our AI system immediately escalates the issue, notifies the appropriate contacts, and coordinates a response — even at 2am.",
  },
  {
    icon: MessageSquare,
    title: "Automated Tenant Communication",
    desc: "Rent reminders, maintenance updates, lease renewals and general inquiries are all handled automatically keeping tenants informed at every step.",
  },
];

const AIManagement = () => {
  const ref = useFadeIn();

  return (
    <section id="ai" className="py-20 bg-accent">
      <div ref={ref} className="section-fade-in container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Always On. Always Available.
        </h2>
        <p className="text-muted-foreground text-lg mb-14">
          Powered by AI. Built for Tenants.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 ai-icon-glow">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIManagement;
