import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-navy flex items-center justify-center"
      pointerEvents={isLoading ? "auto" : "none"}
    >
      <div className="flex flex-col items-center gap-6 sm:gap-8 px-4">
        {/* Logo/Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl text-cream mb-2">
            Krunsberg
          </h1>
          <p className="font-body text-gold text-xs sm:text-sm md:text-base">
            Property Services
          </p>
        </motion.div>

        {/* Animated Loading Circle */}
        <motion.div
          className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-navy-light"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="141.4 282.8"
              strokeLinecap="round"
              className="text-gold"
              animate={{ strokeDashoffset: [0, -282.8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-cream text-sm md:text-base"
        >
          Loading...
        </motion.p>

        {/* Animated Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gold rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PageLoader;
