import { useFadeIn } from "@/hooks/use-fade-in";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";

const properties = [
  {
    img: property1,
    address: "475 N 24th St, East Saint Louis, IL 62205",
    beds: 3,
    baths: 1,
  },
  {
    img: property2,
    address: "830 N 83rd St, East Saint Louis, IL 62203",
    beds: 3,
    baths: 1,
  },
];

const Properties = () => {
  const ref = useFadeIn();

  return (
    <section id="properties" className="py-20 bg-background">
      <div ref={ref} className="section-fade-in container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          Our Portfolio
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {properties.map((p) => (
            <div
              key={p.address}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all border border-border"
            >
              <div className="h-56 overflow-hidden">
                <img src={p.img} alt={p.address} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-foreground font-semibold text-sm mb-2">{p.address}</p>
                <p className="text-muted-foreground text-sm mb-3">
                  {p.beds} Bed · {p.baths} Bath
                </p>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-success text-success-foreground">
                  Section 8 Accepted
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
