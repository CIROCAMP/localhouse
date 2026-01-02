import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

/*
 * Design: Miami Art Deco Revival
 * Gallery page with photo grid and lightbox
 */

const galleryImages = [
  { src: "/images/hero-restaurant.jpg", alt: "Restaurant Terrace", category: "restaurant" },
  { src: "/images/hero-brunch.jpg", alt: "Famous Brunch Spread", category: "food" },
  { src: "/images/hero-hotel.jpg", alt: "Ocean View Suite", category: "hotel" },
  { src: "/images/hero-pool.jpg", alt: "Rooftop Pool", category: "hotel" },
  { src: "/images/ocean-drive.jpg", alt: "Ocean Drive Location", category: "location" },
  { src: "/images/hero-restaurant.jpg", alt: "Outdoor Dining", category: "restaurant" },
  { src: "/images/hero-brunch.jpg", alt: "Lobster Benedict", category: "food" },
  { src: "/images/hero-hotel.jpg", alt: "Boutique Room", category: "hotel" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "hotel", label: "Hotel" },
  { id: "restaurant", label: "Restaurant" },
  { id: "food", label: "Food & Drinks" },
  { id: "location", label: "Location" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#2D2D2D]">
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-4">
              Gallery
            </h1>
            <p className="text-xl text-white/80">
              Explore The Local House through our lens
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#E5DED5] sticky top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-[#C4846C] text-white"
                    : "bg-[#FAF7F2] text-[#666] hover:bg-[#E5DED5]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#C4846C] transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#2D2D2D] mb-6">
            Experience It In Person
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto mb-10">
            Photos can only capture so much. Visit The Local House and create your own memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded"
            >
              Book a Table
            </a>
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#C4846C] text-[#C4846C] font-medium tracking-wide hover:bg-[#C4846C] hover:text-white transition-all duration-300 rounded"
            >
              Book a Room
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
