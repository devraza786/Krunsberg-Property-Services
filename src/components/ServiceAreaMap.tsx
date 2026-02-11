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
  { name: "Pulaski", coordinate: "37.3289, -80.7633" },
  { name: "Dublin", coordinate: "37.2841, -80.6511" },
  { name: "Radford", coordinate: "37.1317, -80.5754" },
  { name: "Floyd County", coordinate: "37.0133, -80.4166" },
  { name: "Giles County", coordinate: "37.3042, -80.5742" },
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
            We proudly serve Pulaski, VA and the surrounding communities. Our experienced team is ready to help with your property needs.
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
          <div className="w-full h-96 sm:h-[500px] bg-gray-200 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="font-body text-muted-foreground mb-2">Interactive Map</p>
              <p className="font-body text-sm text-muted-foreground">
                To enable the interactive Google Map, please:
              </p>
              <ol className="font-body text-xs sm:text-sm text-muted-foreground mt-2 space-y-1">
                <li>1. Get a Google Maps API key from Google Cloud Console</li>
                <li>2. Install: npm install @react-google-maps/api</li>
                <li>3. Set VITE_GOOGLE_MAPS_API_KEY environment variable</li>
                <li>4. Uncomment the GoogleMap component below</li>
              </ol>
            </div>
          </div>
          {/* 
            GoogleMap Component (Uncomment after installing @react-google-maps/api):
            
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "500px" }}
              center={{ lat: 37.3289, lng: -80.7633 }}
              zoom={9}
            >
              {serviceAreas.map((area) => (
                <Marker
                  key={area.name}
                  position={{
                    lat: parseFloat(area.coordinate.split(",")[0]),
                    lng: parseFloat(area.coordinate.split(",")[1]),
                  }}
                  title={area.name}
                />
              ))}
            </GoogleMap>
          */}
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
              className="bg-white rounded-lg p-4 sm:p-6 shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-gold mx-auto mb-2 sm:mb-3" />
              <h3 className="font-heading text-lg sm:text-xl text-navy">{area.name}</h3>
              <p className="font-body text-xs sm:text-sm text-muted-foreground mt-2">
                Service Area
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
          className="mt-10 sm:mt-12 text-center"
        >
          <p className="font-body text-sm sm:text-base text-muted-foreground mb-4">
            Don't see your area listed? Contact us - we may still be able to help!
          </p>
          <a
            href="tel:3368173875"
            className="inline-flex items-center gap-2 gradient-gold text-navy font-body font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <MapPin className="w-4 h-4" />
            Call for Availability
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
