import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "James R.",
    location: "Pulaski, VA",
    text: "Krunsberg did an incredible job on our driveway repair. Professional, on time, and the results speak for themselves. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah M.",
    location: "Dublin, VA",
    text: "We hired them for interior painting and they exceeded our expectations. Clean work, fair pricing, and great communication throughout.",
    rating: 5,
  },
  {
    name: "Tom & Linda K.",
    location: "Radford, VA",
    text: "From landscaping to drainage work, they handled everything with care. Our yard has never looked better. Truly dependable service.",
    rating: 5,
  },
  {
    name: "David H.",
    location: "Pulaski, VA",
    text: "Had them do a full exterior upgrade on our rental property. The transformation was amazing and the tenants love it. Great value for the price.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-navy text-center mb-12">
          What Our <span className="text-gold-dark">Clients Say</span>
        </h2>

        <div className="relative max-w-2xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold hover:bg-navy-light transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="overflow-hidden min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-lg p-8 shadow-md text-center w-full"
              >
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground italic text-lg leading-relaxed mb-6">
                  "{testimonials[current].text}"
                </p>
                <p className="font-heading text-navy text-lg">{testimonials[current].name}</p>
                <p className="font-body text-sm text-muted-foreground">{testimonials[current].location}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold hover:bg-navy-light transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-gold-dark" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
