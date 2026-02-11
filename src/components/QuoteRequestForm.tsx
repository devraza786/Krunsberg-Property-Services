import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuoteRequestForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "We'll review your request and get back to you within 24 hours.",
    });
    setForm({ name: "", phone: "", email: "", service: "", preferredDate: "", preferredTime: "", address: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md border border-border bg-card font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold";

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Request a <span className="text-gold-dark">Free Quote</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Fill out the form below and we'll get back to you with a quote. You can also select a preferred appointment date.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-lg shadow-lg p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name *" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
            <input type="tel" placeholder="Phone Number *" required maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input type="email" placeholder="Email Address" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClass} required>
              <option value="">Select a Service *</option>
              <option>Property Repositioning</option>
              <option>Gravel Driveway Repair</option>
              <option>Repairs & Maintenance</option>
              <option>Exterior Upgrades</option>
              <option>Painting</option>
              <option>Interior Remodels</option>
              <option>Landscape Installation</option>
              <option>Drainage & Grading</option>
            </select>
          </div>

          <input type="text" placeholder="Property Address" maxLength={200} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={inputClass} />

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input type="date" value={form.preferredDate} onChange={(e) => setForm({ ...form, preferredDate: e.target.value })} className={`${inputClass} pl-10`} />
            </div>
            <select value={form.preferredTime} onChange={(e) => setForm({ ...form, preferredTime: e.target.value })} className={inputClass}>
              <option value="">Preferred Time</option>
              <option>Morning (8am - 12pm)</option>
              <option>Afternoon (12pm - 4pm)</option>
              <option>Evening (4pm - 6pm)</option>
            </select>
          </div>

          <textarea placeholder="Tell us about your project..." rows={4} required maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />

          <button type="submit" className="w-full gradient-gold text-navy font-body font-semibold py-3 rounded-md hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Request Free Quote
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteRequestForm;
