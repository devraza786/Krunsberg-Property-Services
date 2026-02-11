import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/use-seo";
import { pageMetadata } from "@/lib/seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const packages = [
  {
    name: "Basic",
    price: "Contact",
    description: "Perfect for small projects and maintenance",
    features: [
      "Up to 500 sq ft coverage",
      "Standard materials",
      "1-2 day project timeline",
      "Local only service area",
      "Email support",
      "Basic cleanup included",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "Contact",
    description: "Most popular choice for comprehensive work",
    features: [
      "Up to 2,000 sq ft coverage",
      "Premium materials",
      "3-7 day project timeline",
      "Extended service area",
      "Phone & email support",
      "Full cleanup & site restoration",
      "Project photos provided",
      "6-month warranty",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Contact",
    description: "Complete solution with top-tier service",
    features: [
      "Unlimited square footage",
      "Top-tier materials & finishes",
      "Custom timeline available",
      "Full service area coverage",
      "24/7 support",
      "Full cleanup & landscaping",
      "Professional photo documentation",
      "1-year warranty",
      "Free design consultation",
      "Project manager assigned",
    ],
    popular: false,
  },
  {
    name: "Custom",
    price: "Flexible",
    description: "Tailored solutions for unique projects",
    features: [
      "Fully customizable scope",
      "Your choice of materials",
      "Flexible timeline",
      "Anywhere in service area",
      "Dedicated support team",
      "Premium cleanup services",
      "Detailed documentation",
      "Extended warranty options",
      "Free pre-project consultation",
      "Regular progress updates",
    ],
    popular: false,
  },
];

const Pricing = () => {
  useSeo(pageMetadata.pricing);

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-navy py-10 sm:py-12 md:py-20">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-3 sm:mb-4"
          >
            Simple, Transparent <span className="text-gold">Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-sm sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto px-2 sm:px-0"
          >
            Choose the perfect package for your property needs. All quotes include a free consultation.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                  pkg.popular
                    ? "lg:scale-105 ring-2 ring-gold shadow-2xl"
                    : "hover:shadow-lg"
                } ${pkg.popular ? "bg-gradient-to-br from-navy to-navy-dark" : "bg-card"}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gold text-navy py-1 text-center">
                    <span className="font-heading font-bold text-sm">MOST POPULAR</span>
                  </div>
                )}

                <div className={`p-6 md:p-8 ${pkg.popular ? "pt-12 md:pt-16" : ""}`}>
                  {/* Package Name */}
                  <h3 className={`font-heading text-2xl md:text-3xl mb-2 ${
                    pkg.popular ? "text-gold" : "text-navy"
                  }`}>
                    {pkg.name}
                  </h3>

                  {/* Description */}
                  <p className={`font-body text-sm mb-4 ${
                    pkg.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <p className={`font-heading text-3xl md:text-4xl font-bold mb-1 ${
                      pkg.popular ? "text-gold" : "text-navy"
                    }`}>
                      {pkg.price}
                    </p>
                    <p className={`font-body text-xs ${
                      pkg.popular ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}>
                      Get a custom quote
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="tel:3368173875"
                    className={`w-full block text-center py-2.5 md:py-3 rounded-md font-body font-semibold mb-8 transition-all duration-300 ${
                      pkg.popular
                        ? "gradient-gold text-navy hover:opacity-90"
                        : "bg-navy text-gold hover:bg-navy-dark"
                    }`}
                  >
                    Get Quote
                  </a>

                  {/* Features */}
                  <div className="space-y-3 md:space-y-4">
                    {pkg.features.map((feature, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + j * 0.05 }}
                        className="flex gap-3 items-start"
                      >
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? "text-gold" : "text-gold-dark"
                        }`} />
                        <span className={`font-body text-sm md:text-base ${
                          pkg.popular ? "text-primary-foreground/80" : "text-foreground"
                        }`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-like Info Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-cream">
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy mb-3 sm:mb-4">
              Have <span className="text-gold-dark">Questions?</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
              Our pricing is flexible and transparent. Every project is unique, so we provide custom quotes after a free consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Free Consultation",
                description: "We offer completely free consultations to assess your project needs and provide accurate pricing.",
              },
              {
                title: "No Hidden Fees",
                description: "What you see is what you pay. We provide detailed quotes with no surprise charges.",
              },
              {
                title: "Flexible Terms",
                description: "Discuss payment options and project timelines that work best for your budget and schedule.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <h3 className="font-heading text-xl text-navy mb-3">{item.title}</h3>
                <p className="font-body text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-navy">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="font-body text-sm sm:text-lg md:text-xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
              Contact us today for a free consultation and custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
              <a
                href="tel:3368173875"
                className="inline-flex items-center justify-center gap-2 gradient-gold text-navy font-body font-semibold px-6 sm:px-8 py-3 rounded-md hover:opacity-90 transition-opacity min-h-[44px] sm:min-h-auto text-sm sm:text-base"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-body font-semibold px-6 sm:px-8 py-3 rounded-md hover:bg-gold/10 transition-colors min-h-[44px] sm:min-h-auto text-sm sm:text-base"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
