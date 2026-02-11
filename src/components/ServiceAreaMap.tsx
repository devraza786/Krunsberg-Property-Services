import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const serviceAreas = [
  { name: "Pulaski", description: "Main Service Hub", coordinate: "37.3289, -80.7633" },
  { name: "Dublin", description: "Extended Service Area", coordinate: "37.2841, -80.6511" },
  { name: "Radford", description: "Extended Service Area", coordinate: "37.1317, -80.5754" },
  { name: "Floyd County", description: "Service Coverage", coordinate: "37.0133, -80.4166" },
  { name: "Giles County", description: "Service Coverage", coordinate: "37.3042, -80.5742" },
];

const ServiceAreaMap = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-cream">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-gold-dark" />
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy">
              Service <span className="text-gold-dark">Area</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Serving Pulaski, VA and surrounding regions including Dublin, Radford, Floyd County, and Giles County. Our experienced team is ready to help with your property needs.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 sm:mb-12"
        >
          <div className="w-full h-96 sm:h-[500px]">
            <iframe
              title="Krunsberg Property Services - Service Area Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51962.489455088476!2d-80.84089453486327!3d37.318957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d9a64c8c8c8cd%3A0x5f8c8c8c8c8c8c8c!2sPulaski%2C%20VA%2024301!5e0!3m2!1sen!2sus!4v1707000000000&z=9"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Service Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {serviceAreas.map((area, i) => (
            <motion.div
              key={area.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 2}
              className="bg-gradient-to-br from-white to-cream rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg hover:from-gold/10 transition-all"
            >
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-gold mx-auto mb-2 sm:mb-3" />
              <h3 className="font-heading text-lg sm:text-xl text-navy">{area.name}</h3>
              <p className="font-body text-xs sm:text-sm text-gold-dark font-semibold mt-1 mb-2">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={7}
          className="mt-10 sm:mt-12 text-center bg-gradient-to-r from-navy-light/30 to-gold/10 rounded-lg p-6 sm:p-8"
        >
          <h3 className="font-heading text-xl sm:text-2xl text-navy mb-3">
            Ready to Get Started?
          </h3>
          <p className="font-body text-sm sm:text-base text-muted-foreground mb-6">
            Contact us today for a free consultation in your service area!
          </p>
          <a
            href="tel:3368173875"
            className="inline-flex items-center gap-2 gradient-gold text-navy font-body font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:opacity-90 transition-opacity text-sm sm:text-base min-h-[44px] sm:min-h-auto"
          >
            <MapPin className="w-4 h-4" />
            Call Now: 336-817-3875
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
