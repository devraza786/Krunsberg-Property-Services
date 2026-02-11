import { motion } from "framer-motion";
import { Phone, MapPin, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you as soon as possible.",
    });
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4"
          >
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
            Get in touch for a free consultation on your property project.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl text-navy mb-6">Get In Touch</h2>
              <div className="space-y-5">
                <a href="tel:3368173875" className="flex items-center gap-3 font-body text-foreground hover:text-gold-dark transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-muted-foreground">336-817-3875</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 font-body text-foreground">
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-muted-foreground">Pulaski, VA & Surrounding Areas</p>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/people/Krunsberg-Property-Services/61587253469663/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-foreground hover:text-gold-dark transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                    <Facebook className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold">Facebook</p>
                    <p className="text-muted-foreground">Message us on Facebook</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl text-navy mb-6">Request Service</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option value="">Select a Service</option>
                  <option>Property Repositioning</option>
                  <option>Gravel Driveway Repair</option>
                  <option>Repairs & Maintenance</option>
                  <option>Exterior Upgrades</option>
                  <option>Painting</option>
                  <option>Interior Remodels</option>
                  <option>Landscape Installation</option>
                  <option>Drainage & Grading</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
                <button
                  type="submit"
                  className="w-full gradient-gold text-navy font-body font-semibold py-3 rounded-md hover:opacity-90 transition-opacity text-lg"
                >
                  Request Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
