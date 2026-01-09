import { motion } from "framer-motion";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { useState } from "react";
import { X } from "lucide-react";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Gallery page with photo grid and lightbox
 */

const galleryImages = [
  { src: "/images/gallery-cocktail.jpg", alt: "Signature Cocktail", category: "food" },
  { src: "/images/gallery-brunch-spread.jpg", alt: "Brunch Spread", category: "food" },
  { src: "/images/gallery-room.jpg", alt: "Boutique Room", category: "hotel" },
  { src: "/images/gallery-outdoor-seating.jpg", alt: "Outdoor Seating", category: "restaurant" },
  { src: "/images/gallery-restaurant.jpg", alt: "Restaurant Interior", category: "restaurant" },
  { src: "/images/gallery-bathroom.jpg", alt: "Modern Bathroom", category: "hotel" },
  { src: "/images/gallery-entrance.jpg", alt: "Hotel Entrance", category: "location" },
  { src: "/images/gallery-tropical-dining.jpg", alt: "Tropical Dining Area", category: "restaurant" },
  { src: "/images/gallery-lobby.jpg", alt: "Hotel Lobby", category: "hotel" },
  { src: "/images/gallery-balcony.jpg", alt: "Balcony View", category: "hotel" },
  { src: "/images/gallery-pasta.jpg", alt: "Fresh Pasta", category: "food" },
  { src: "/images/gallery-seafood.jpg", alt: "Grilled Seafood", category: "food" },
  { src: "/images/gallery-toast-cocktails.jpg", alt: "Guests Toasting with Cocktails", category: "food" },
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
      {/* SEO Components */}
      <SEOHead {...seoConfigs.gallery} />
      <SEOSchema page="gallery" />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#4C5254]">
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
                    ? "bg-[#FF8F75] text-white"
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
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setLightboxImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                
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
            className="absolute top-6 right-6 text-white hover:text-[#FF8F75] transition-colors"
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
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#4C5254] mb-6">
            Experience It In Person
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto mb-10">
            Photos can only capture so much. Visit The Local House and create your own memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              onClick={() => window.trackOpenTableClick?.()} href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
            >
              Book a Table
            </a>
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
            >
              Book a Room
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
