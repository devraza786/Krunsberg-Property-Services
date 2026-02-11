import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const faqItems = [
  {
    category: "General",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "We serve Pulaski, VA and surrounding communities including Dublin, Radford, and the surrounding counties. Contact us to confirm service availability for your specific location.",
      },
      {
        question: "Do you offer free consultations?",
        answer:
          "Yes! All consultations are completely free. We'll assess your project, discuss your needs, and provide a detailed quote with no obligation.",
      },
      {
        question: "How quickly can you schedule a project?",
        answer:
          "Project availability depends on our current schedule. We typically can schedule consultations within 2-3 days and start projects within 1-2 weeks. Emergency services may be available upon request.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, we are fully licensed and insured. Your property and our team are protected throughout the project.",
      },
    ],
  },
  {
    category: "Services",
    items: [
      {
        question: "What painting services do you offer?",
        answer:
          "We offer both interior and exterior painting. This includes residential painting, accent walls, trim work, and full property repaints with professional-grade materials.",
      },
      {
        question: "Can you handle driveway repair?",
        answer:
          "Absolutely! We specialize in gravel driveway repair and maintenance including leveling, filling, and drainage correction.",
      },
      {
        question: "Do you do landscaping work?",
        answer:
          "Yes! Our landscaping services include yard improvements, planting design, mulch bed installation, and complete landscape transformations.",
      },
      {
        question: "What interior remodeling work do you do?",
        answer:
          "We handle various interior remodels including kitchen and bathroom upgrades, room refreshes, and functional improvements to living spaces.",
      },
    ],
  },
  {
    category: "Pricing & Quotes",
    items: [
      {
        question: "How are your prices determined?",
        answer:
          "Our pricing is based on project scope, materials needed, timeline, and complexity. We provide transparent quotes that break down all costs clearly.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "We discuss flexible payment options based on project size. Contact us directly to discuss payment arrangements that work for your situation.",
      },
      {
        question: "What's included in your standard package?",
        answer:
          "Our Standard package covers up to 2,000 sq ft, premium materials, 3-7 day timeline, extended service area, full cleanup, project photos, and 6-month warranty.",
      },
      {
        question: "Can I get a custom quote for my project?",
        answer:
          "Yes! We encourage custom quotes. Our Custom package is specifically designed for unique projects with flexible scope, materials, timeline, and warranties.",
      },
    ],
  },
  {
    category: "Project Details",
    items: [
      {
        question: "How long do projects typically take?",
        answer:
          "Project duration varies by scope. Basic projects take 1-2 days, Standard projects 3-7 days, and larger projects may take longer. We'll provide a timeline during consultation.",
      },
      {
        question: "Do you provide warranties?",
        answer:
          "Yes! Warranty length depends on your package: Basic (no warranty), Standard (6 months), Premium (1 year), and Custom (flexible options available).",
      },
      {
        question: "What happens if I'm not satisfied?",
        answer:
          "Your satisfaction is our priority. We'll work with you to address any concerns and ensure the project meets your expectations.",
      },
      {
        question: "Do you take before and after photos?",
        answer:
          "We provide project photo documentation with our Standard, Premium, and Custom packages. This helps document your investment and project quality.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-navy mb-3 sm:mb-4">
            Frequently Asked <span className="text-gold-dark">Questions</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0 md:text-lg">
            Find answers to common questions about our services, pricing, and project details.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={categoryIndex + 1}
              className="mb-8"
            >
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl text-navy mb-3 sm:mb-4">
                {category.category}
              </h3>

              <Accordion type="single" collapsible className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={`${category.category}-${itemIndex}`}
                    value={`${category.category}-${itemIndex}`}
                    className="border border-border rounded-lg px-3 sm:px-4 md:px-6 data-[state=open]:border-gold data-[state=open]:bg-cream/50"
                  >
                    <AccordionTrigger className="text-left font-body font-semibold text-sm sm:text-base text-foreground hover:text-gold-dark transition-colors py-3 sm:py-4 md:py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed pb-3 sm:pb-4 md:pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
