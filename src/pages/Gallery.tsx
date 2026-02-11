import { motion } from "framer-motion";
import { useState } from "react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceDriveway from "@/assets/service-driveway.jpg";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceRemodel from "@/assets/service-remodel.jpg";
import serviceDrainage from "@/assets/service-drainage.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";

const images = [
  { src: property1, alt: "Property maintenance work" },
  { src: property2, alt: "Landscaping detail" },
  { src: servicePainting, alt: "Interior painting" },
  { src: serviceDriveway, alt: "Gravel driveway repair" },
  { src: serviceLandscaping, alt: "Landscape installation" },
  { src: serviceRemodel, alt: "Interior remodel" },
  { src: serviceDrainage, alt: "Drainage and grading" },
  { src: serviceExterior, alt: "Exterior upgrades" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <section className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4"
          >
            Our <span className="text-gold">Work</span>
          </motion.h1>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
            See the quality and care we bring to every project.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
