import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MoveRight, PhoneCall } from 'lucide-react';
import { GlassButton, GlassFilter } from '@/components/ui/liquid-glass';

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ['Acquiring', 'Managing', 'Modernizing'], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber(prev => prev === titles.length - 1 ? 0 : prev + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="w-full pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      <GlassFilter />
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <span className="inline-block rounded-full bg-secondary text-secondary-foreground px-4 py-1.5 text-sm font-medium tracking-tight">
              AI-Powered Property Management
            </span>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-heading font-bold">
              <span className="text-foreground">We are</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1" style={{ height: '80px' }}>
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-primary"
                    initial={{ opacity: 0, y: -150 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              Rental Properties in St. Louis, MO
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              DRF Dyamic Resources LLC combines real estate investment with AI-powered property management. Quality single-family homes, Section 8 welcome, and 24/7 tenant support — always on, always available.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <GlassButton href="#properties">
              View Our Properties
              <MoveRight className="w-4 h-4" />
            </GlassButton>
            <GlassButton href="#contact">
              Contact Us
              <PhoneCall className="w-4 h-4" />
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
