import { motion } from "framer-motion";
import { Paintbrush, Hammer, TreePine, Droplets, Home, Wrench, ArrowUpRight, Shovel } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { pageMetadata } from "@/lib/seo";
import servicePainting from "@/assets/service-painting.jpg";
import serviceDriveway from "@/assets/service-driveway.jpg";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceRemodel from "@/assets/service-remodel.jpg";
import serviceDrainage from "@/assets/service-drainage.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const services = [
  {
    icon: ArrowUpRight, title: "Property Repositioning",
    desc: "Improving layout, usability, and functionality of your property for better living or resale value.",
    image: property1,
  },
  {
    icon: Wrench, title: "Gravel Driveway Repair",
    desc: "Leveling, filling, and drainage correction to restore your gravel driveway to perfect condition.",
    image: serviceDriveway,
  },
  {
    icon: Hammer, title: "Repairs & Maintenance",
    desc: "General upkeep, fixes, and small repairs to keep your property running smoothly.",
    image: property2,
  },
  {
    icon: Home, title: "Exterior Upgrades",
    desc: "Siding, paint, and enhancements that boost curb appeal and protect your home.",
    image: serviceExterior,
  },
  {
    icon: Paintbrush, title: "Painting",
    desc: "Interior and exterior professional painting with clean lines and lasting finishes.",
    image: servicePainting,
  },
  {
    icon: Shovel, title: "Interior Remodels",
    desc: "Functional and aesthetic upgrades to kitchens, bathrooms, and living spaces.",
    image: serviceRemodel,
  },
  {
    icon: TreePine, title: "Landscape Installation",
    desc: "Yard improvement, planting design, mulch beds, and overall landscape transformation.",
    image: serviceLandscaping,
  },
  {
    icon: Droplets, title: "Drainage & Grading",
    desc: "Prevent water issues and improve land flow with proper drainage solutions.",
    image: serviceDrainage,
  },
];

const Services = () => {
  useSeo(pageMetadata.services);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-navy py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-3 sm:mb-4"
          >
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <p className="font-body text-sm sm:text-base text-primary-foreground/70 max-w-xl mx-auto px-2 sm:px-0">
            Comprehensive property solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-48 sm:h-64 md:h-80 object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-navy" />
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground">{service.title}</h2>
                  </div>
                  <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <a
            href="tel:3368173875"
            className="inline-flex items-center gap-2 gradient-gold text-navy font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-lg"
          >
            Call Us Today: 336-817-3875
          </a>
        </div>
      </section>
    </main>
  );
};

export default Services;
