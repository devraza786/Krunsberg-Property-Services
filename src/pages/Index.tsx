import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Facebook, Paintbrush, Hammer, TreePine, Droplets, Home, Wrench, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceDriveway from "@/assets/service-driveway.jpg";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceRemodel from "@/assets/service-remodel.jpg";
import serviceDrainage from "@/assets/service-drainage.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  { icon: Paintbrush, title: "Painting", image: servicePainting },
  { icon: Home, title: "Interior Remodels", image: serviceRemodel },
  { icon: Wrench, title: "Driveway Repair", image: serviceDriveway },
  { icon: TreePine, title: "Landscaping", image: serviceLandscaping },
  { icon: Droplets, title: "Drainage Solutions", image: serviceDrainage },
  { icon: Hammer, title: "Exterior Upgrades", image: serviceExterior },
];

const whyUs = [
  "Reliable workmanship",
  "Honest pricing",
  "Local trusted service",
  "Quality results",
  "Responsive communication",
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
          >
            Reliable Property Services{" "}
            <span className="text-gold">You Can Count On</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
          >
            Quality repairs, improvements, and maintenance in Pulaski, VA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:3368173875"
              className="inline-flex items-center justify-center gap-2 gradient-gold text-navy font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-body font-semibold px-8 py-4 rounded-md hover:bg-gold/10 transition-colors text-lg"
            >
              Request Service
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">
                Your Trusted Local <span className="text-gold-dark">Property Partner</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Krunsberg Property Services provides dependable property improvement, maintenance, and repair solutions. From exterior upgrades to interior remodels, we help keep your property looking and functioning at its best.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-navy font-body font-semibold hover:text-gold-dark transition-colors"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="grid grid-cols-2 gap-4"
            >
              <img src={property1} alt="Property work by Krunsberg" className="rounded-lg shadow-lg w-full h-48 object-cover" />
              <img src={property2} alt="Landscaping by Krunsberg" className="rounded-lg shadow-lg w-full h-48 object-cover mt-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Our <span className="text-gold-dark">Services</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Comprehensive property services to keep your home and land in top shape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/70 transition-colors flex items-end p-6">
                  <div className="flex items-center gap-3">
                    <service.icon className="w-6 h-6 text-gold" />
                    <h3 className="font-heading text-xl text-primary-foreground">{service.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 gradient-gold text-navy font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
              Why Choose <span className="text-gold">Krunsberg</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto lg:max-w-4xl">
            {whyUs.map((item, i) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-center gap-3 bg-navy-light/50 rounded-lg p-5"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="font-body text-primary-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="flex flex-col items-center gap-3"
          >
            <MapPin className="w-8 h-8 text-gold-dark" />
            <h2 className="font-heading text-2xl md:text-3xl text-navy">
              Serving Pulaski, VA & Surrounding Communities
            </h2>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
              Need Property Work Done Right?
            </h2>
            <p className="font-body text-xl text-gold mb-10">
              Let's Get Started Today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3368173875"
                className="inline-flex items-center justify-center gap-2 gradient-gold text-navy font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://www.facebook.com/people/Krunsberg-Property-Services/61587253469663/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-body font-semibold px-8 py-4 rounded-md hover:bg-gold/10 transition-colors text-lg"
              >
                <Facebook className="w-5 h-5" />
                Message on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
