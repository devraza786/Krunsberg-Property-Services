import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Krunsberg Property Services" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm uppercase tracking-widest transition-colors hover:text-gold ${
                location.pathname === link.to ? "text-gold" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:3368173875"
            className="flex items-center gap-2 text-gold font-body text-sm font-semibold hover:text-gold-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            336-817-3875
          </a>
          <a
            href="https://www.facebook.com/people/Krunsberg-Property-Services/61587253469663/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground hover:text-gold transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy border-t border-gold/20 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm uppercase tracking-widest transition-colors ${
                    location.pathname === link.to ? "text-gold" : "text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:3368173875"
                className="flex items-center gap-2 text-gold font-body text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                336-817-3875
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
