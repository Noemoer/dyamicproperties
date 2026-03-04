import { useState } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { GlassButton } from "@/components/ui/liquid-glass";

const Tenants = () => {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: "", email: "", phone: "", voucher: "", bedrooms: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will follow up with you shortly.");
  };

  return (
    <section id="tenants" className="py-20 bg-secondary">
      <div ref={ref} className="section-fade-in container mx-auto px-4 max-w-xl text-center" id="contact">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Interested in One of Our Properties?
        </h2>
        <p className="text-muted-foreground mb-10">
          We welcome Section 8 voucher holders. Fill out the form below to join our inquiry list. Our AI system will follow up with you promptly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            name="name"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <select
            name="voucher"
            required
            value={form.voucher}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Do you have a Section 8 voucher?</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <select
            name="bedrooms"
            required
            value={form.bedrooms}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Bedrooms Needed</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
          <GlassButton fullWidth type="submit">
            Submit
          </GlassButton>
        </form>
      </div>
    </section>
  );
};

export default Tenants;
