import { Link } from "react-router-dom";
import { Phone, Facebook, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="h-px bg-gold/30" />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Krunsberg Property Services" className="h-16 w-auto mb-4" />
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Dependable property improvement, maintenance, and repair solutions in Pulaski, VA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-gold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-gold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:3368173875" className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                336-817-3875
              </a>
              <div className="flex items-center gap-2 font-body text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold" />
                Pulaski, VA & Surrounding Areas
              </div>
              <a
                href="https://www.facebook.com/people/Krunsberg-Property-Services/61587253469663/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Facebook className="w-4 h-4 text-gold" />
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Krunsberg Property Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
