import { useFadeIn } from "@/hooks/use-fade-in";

const Hero = () => {
  const ref = useFadeIn();

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      <div ref={ref} className="section-fade-in container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Acquiring, Managing & Modernizing Rental Properties in St. Louis, MO
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          AI-powered property management. Quality single-family homes. Section 8 welcome. 24/7 tenant support — always on, always available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#properties"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View Our Properties
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
