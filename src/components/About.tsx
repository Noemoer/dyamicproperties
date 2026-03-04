import { useFadeIn } from "@/hooks/use-fade-in";
import aboutImg from "@/assets/about.jpg";

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-20 bg-background">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              About DRF Dyamic Resources
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              DRF Dyamic Resources LLC is a St. Louis-based real estate investment and property management company. We acquire single-family rental properties, maintain them to a high standard, and manage every aspect of the tenant experience using modern AI-powered systems. We specialize in affordable quality housing including Section 8 / Housing Choice Voucher properties. Our AI systems work around the clock so tenants always have someone — or something — ready to help.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="AI-powered property technology"
              className="rounded-2xl w-full max-w-lg object-cover aspect-square shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
