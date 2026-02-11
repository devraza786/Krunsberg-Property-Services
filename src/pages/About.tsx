import { motion } from "framer-motion";
import { CheckCircle, Target, Heart } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import { pageMetadata } from "@/lib/seo";
import property1 from "@/assets/property-1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const values = [
  { icon: CheckCircle, title: "Reliability", desc: "We show up on time and deliver on our promises." },
  { icon: Target, title: "Quality Workmanship", desc: "Every project gets our full attention to detail." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Your satisfaction is our top priority." },
];

const About = () => {
  useSeo(pageMetadata.about);

  return (
    <main className="pt-20">
      <section className="bg-navy py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4"
          >
            About <span className="text-gold">Krunsberg</span>
          </motion.h1>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
            Quality work, honest service, local expertise.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="font-heading text-3xl text-navy mb-6">Our Story</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Krunsberg Property Services was built on the belief that every homeowner deserves reliable, high-quality property care. Based in Pulaski, Virginia, we bring local expertise and a commitment to craftsmanship to every project we take on.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Whether it's a gravel driveway that needs repair, an interior that needs a fresh coat of paint, or a complete landscape transformation, we approach every job with the same dedication and attention to detail.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <img src={property1} alt="Krunsberg property work" className="rounded-lg shadow-lg w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="font-heading text-3xl text-foreground mb-6">Our Mission</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed italic">
              "Deliver dependable property services with honesty, craftsmanship, and attention to detail — making every property we touch better than we found it."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl text-primary-foreground text-center mb-12">
            Our <span className="text-gold">Values</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-navy" />
                </div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">{value.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
