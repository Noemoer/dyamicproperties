import { useFadeIn } from "@/hooks/use-fade-in";
import { MapPin } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-14 bg-secondary">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-foreground bg-primary px-3 py-1 rounded mb-4">
              Who We Are
            </span>
            <h2
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4"
            >
              About DRF Dyamic Resources
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              DRF Dyamic Resources LLC is a St. Louis-based real estate investment and property management company. We acquire single-family rental properties, maintain them to a high standard, and manage every aspect of the tenant experience using modern AI-powered systems. We specialize in affordable quality housing including Section 8 / Housing Choice Voucher properties. Our AI systems work around the clock so tenants always have someone — or something — ready to help.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={aboutImg}
                alt="AI-powered property technology"
                className="rounded-2xl w-full max-w-lg object-cover aspect-square shadow-lg border-2 border-primary/20"
              />
              {/* Floating stat badge */}
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                St. Louis, MO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
