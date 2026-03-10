import { motion } from "framer-motion";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Gallery page with photo grid and lightbox
 */

const galleryImages = [
  { src: "/images/gallery-cocktail.jpg", alt: "Signature cocktail at The Local House, Ocean Drive Miami Beach", category: "food" },
  { src: "/images/gallery-brunch-spread.jpg", alt: "Brunch spread at The Local House, Miami Beach", category: "food" },
  { src: "/images/gallery-room.jpg", alt: "Boutique hotel room at The Local House, Ocean Drive Miami Beach", category: "hotel" },
  { src: "/images/gallery-outdoor-seating.jpg", alt: "Outdoor oceanfront seating at The Local House, Miami Beach", category: "restaurant" },
  { src: "/images/gallery-restaurant.jpg", alt: "Restaurant interior at The Local House, Ocean Drive Miami Beach", category: "restaurant" },
  { src: "/images/gallery-bathroom.jpg", alt: "Modern bathroom in boutique hotel room, The Local House Miami Beach", category: "hotel" },
  { src: "/images/gallery-entrance.jpg", alt: "Art Deco hotel entrance, The Local House on Ocean Drive Miami Beach", category: "location" },
  { src: "/images/gallery-tropical-dining.jpg", alt: "Tropical dining area at The Local House, Miami Beach", category: "restaurant" },
  { src: "/images/gallery-lobby.jpg", alt: "Boutique hotel lobby at The Local House, Ocean Drive Miami Beach", category: "hotel" },
  { src: "/images/gallery-balcony.jpg", alt: "Ocean view from balcony at The Local House hotel, Miami Beach", category: "hotel" },
  { src: "/images/gallery-pasta.jpg", alt: "Fresh pasta at The Local House restaurant, Ocean Drive Miami Beach", category: "food" },
  { src: "/images/gallery-seafood.jpg", alt: "Grilled seafood at The Local House restaurant, Miami Beach", category: "food" },
  { src: "/images/gallery-toast-cocktails.jpg", alt: "Guests toasting with cocktails at The Local House, Miami Beach", category: "food" },
];

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: t("gallery.all") },
    { id: "hotel", label: t("gallery.hotelCat") },
    { id: "restaurant", label: t("gallery.restaurantCat") },
    { id: "food", label: t("gallery.foodDrinks") },
    { id: "location", label: t("gallery.location") },
  ];

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
              {t("gallery.title")}
            </h1>
            <p className="text-xl text-white/80">
              {t("gallery.subtitle")}
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
            alt={galleryImages.find(img => img.src === lightboxImage)?.alt || "The Local House Miami Beach"}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#4C5254] mb-6">
            {t("gallery.experienceInPerson")}
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto mb-10">
            {t("gallery.photosCapture")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
            >
              {t("common.bookTable")}
            </a>
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
            >
              {t("common.bookRoom")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
