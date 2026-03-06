import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { GlassFilter } from "@/components/ui/liquid-glass";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Properties", href: "/#properties" },
  { label: "AI Management", href: "/#ai" },
  { label: "Tenants", href: "/#tenants" },
  { label: "Contact", href: "/#footer" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const [path, hash] = href.split("#");
    if (location.pathname === "/") {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + (hash ? `#${hash}` : ""));
    }
    setOpen(false);
  };

  return (
    <>
      <GlassFilter />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="/" className="flex-shrink-0" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
            <img src={logo} alt="DRF Dyamic Resources" className="h-[50px] w-auto" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group"
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors px-4 py-2 rounded-xl group-hover:bg-accent/40 group-hover:backdrop-blur-sm group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_1px_1px_1px_rgba(255,255,255,0.4)] inline-block"
                  style={{ transition: "all 0.3s ease" }}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="flex flex-col px-4 py-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-xl hover:bg-accent/60"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
