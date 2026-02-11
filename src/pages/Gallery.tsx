import { motion } from "framer-motion";
import { useState } from "react";
import { useSeo } from "@/hooks/use-seo";
import { pageMetadata } from "@/lib/seo";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceDriveway from "@/assets/service-driveway.jpg";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceRemodel from "@/assets/service-remodel.jpg";
import serviceDrainage from "@/assets/service-drainage.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";

const images = [
  { src: property1, alt: "Property maintenance work", category: "Exterior" },
  { src: property2, alt: "Landscaping detail", category: "Landscaping" },
  { src: servicePainting, alt: "Interior painting", category: "Painting" },
  { src: serviceDriveway, alt: "Gravel driveway repair", category: "Driveway" },
  { src: serviceLandscaping, alt: "Landscape installation", category: "Landscaping" },
  { src: serviceRemodel, alt: "Interior remodel", category: "Remodeling" },
  { src: serviceDrainage, alt: "Drainage and grading", category: "Drainage" },
  { src: serviceExterior, alt: "Exterior upgrades", category: "Exterior" },
  { src: property1, alt: "Property work detail 2", category: "Exterior" },
  { src: servicePainting, alt: "Professional painting finish", category: "Painting" },
  { src: serviceLandscaping, alt: "Landscape design", category: "Landscaping" },
  { src: serviceDriveway, alt: "Driveway resurfacing", category: "Driveway" },
];

const categories = ["All", "Painting", "Driveway", "Landscaping", "Remodeling", "Drainage", "Exterior"];

const Gallery = () => {
  useSeo(pageMetadata.gallery);
  const [selected, setSelected] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter(img => img.category === selectedCategory);

  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedImages = filteredImages.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="pt-20">
      <section className="bg-navy py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl text-primary-foreground mb-3 sm:mb-4"
          >
            Our <span className="text-gold">Work</span>
          </motion.h1>
          <p className="font-body text-sm sm:text-base text-primary-foreground/70 max-w-xl mx-auto px-2 sm:px-0">
            See the quality and care we bring to every project.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          {/* Category Filter */}
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-body font-semibold transition-all text-sm sm:text-base min-h-[40px] ${
                    selectedCategory === cat
                      ? "gradient-gold text-navy"
                      : "bg-card text-foreground hover:bg-muted border border-border"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {paginatedImages.map((img, i) => (
              <motion.div
                key={`${selectedCategory}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => {
                  const selectedIndex = images.findIndex(
                    (image) => image.src === img.src && image.alt === img.alt
                  );
                  setSelected(selectedIndex);
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                  <p className="text-primary-foreground font-body text-sm font-semibold">{img.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-body text-sm min-h-[40px]"
              >
                Previous
              </motion.button>

              <div className="flex gap-1 sm:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <motion.button
                    key={page}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-md font-body font-semibold text-sm transition-all ${
                      currentPage === page
                        ? "gradient-gold text-navy"
                        : "bg-card hover:bg-muted"
                    }`}
                  >
                    {page}
                  </motion.button>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-body text-sm min-h-[40px]"
              >
                Next
              </motion.button>
            </div>
          )}
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
