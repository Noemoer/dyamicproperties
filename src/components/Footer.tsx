import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="footer" className="bg-primary text-primary-foreground py-12">
    <div className="container mx-auto px-4 text-center space-y-3 text-sm">
      <p className="font-heading font-semibold text-base">DRF Dyamic Resources LLC</p>
      <p className="opacity-80">AI-Powered Property Management — St. Louis, MO</p>
      <p className="opacity-70">DRF Dyamic Resources LLC — Operating as Dyamic Properties</p>
      <p className="opacity-80">
        <a href="mailto:info@dyamicresources.com" className="hover:underline">info@dyamicresources.com</a>
        {" · "}
        <a href="https://dyamicproperties.com" target="_blank" rel="noopener noreferrer" className="hover:underline">dyamicproperties.com</a>
      </p>
      <div className="flex justify-center gap-6 pt-2 opacity-70">
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
      </div>
      <p className="opacity-50 pt-2">© 2025 DRF Dyamic Resources LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
