import { motion } from "framer-motion";
import { Wifi, Waves, Coffee, Sun, Dumbbell, Car, Users, Bath, Tv, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Hotel page with rooms, amenities, and booking CTAs
 */

const rooms = [
  {
    name: "Grand Partial Ocean View King",
    type: "SIGNATURE SUITE",
    price: 329,
    description: "The ultimate retreat in a corner room with beautiful floor-to-ceiling windows. This bright and airy room features our largest terrace with prime ocean and city views.",
    size: "450 sq ft",
    bed: "1 King Bed",
    view: "Ocean & City Views",
    features: ["Ocean View", "Private Terrace", "Free Wi-Fi", "Mini Bar", "Apple TV"],
    images: ["/images/grand-ocean-king-1.jpg", "/images/grand-ocean-king-balcony.jpg", "/images/grand-ocean-king-bathroom.jpg"],
  },
  {
    name: "Partial Ocean View Double",
    type: null,
    price: 279,
    description: "Enjoy all the comforts of home in an elegant beach-inspired room. This spacious room features two double beds and partial views of the ocean.",
    size: "380 sq ft",
    bed: "2 Double Beds",
    view: "Partial Ocean View",
    features: ["Ocean View", "Sleeps 4", "Free Wi-Fi", "Balcony", "Apple TV"],
    images: ["/images/partial-ocean-view-king.jpg", "/images/partial-ocean-view-double-2.jpg", "/images/partial-ocean-view-double-3.jpg"],
  },
  {
    name: "Deluxe King, Ocean Views",
    type: null,
    price: 259,
    description: "Wake up bright-eyed and refreshed in our King-sized bed by Nature's Sleep. This spacious room offers partial views of the ocean and a breezy balcony.",
    size: "350 sq ft",
    bed: "1 King Bed",
    view: "Partial Ocean View",
    features: ["Ocean View", "Balcony", "Free Wi-Fi", "Apple TV"],
    images: ["/images/deluxe-king.jpg", "/images/deluxe-king-2.jpg", "/images/deluxe-king-bathroom.jpg"],
  },
  {
    name: "Deluxe Double",
    type: null,
    price: 239,
    description: "Perfect for families or friends traveling together. This elegant beach-inspired room features two comfortable double beds with partial ocean views and a private balcony.",
    size: "360 sq ft",
    bed: "2 Double Beds",
    view: "Partial Ocean View",
    features: ["Ocean View", "Sleeps 4", "Free Wi-Fi", "Balcony", "Apple TV"],
    images: ["/images/deluxe-double.jpg"],
  },
  {
    name: "Standard King, City Views",
    type: null,
    price: 199,
    description: "Simple in the best way, this king bedroom offers all the essentials for a perfect beach getaway with stunning city views.",
    size: "300 sq ft",
    bed: "1 King Bed",
    view: "City View",
    features: ["City View", "Free Wi-Fi", "Mini Bar", "Rain Shower", "Apple TV"],
    images: ["/images/standard-king.jpg"],
  },
];

const amenityIcons = [
  { icon: Waves, nameKey: "hotel.rooftopPool", descKey: "hotel.rooftopPoolDesc" },
  { icon: Sun, nameKey: "hotel.beachSpot", descKey: "hotel.beachSpotDesc" },
  { icon: Wifi, nameKey: "hotel.wifi", descKey: "hotel.wifiDesc" },
  { icon: Dumbbell, nameKey: "hotel.yoga", descKey: "hotel.yogaDesc" },
  { icon: Car, nameKey: "hotel.valet", descKey: "hotel.valetDesc" },
  { icon: Users, nameKey: "hotel.concierge", descKey: "hotel.conciergeDesc" },
  { icon: Bath, nameKey: "hotel.bath", descKey: "hotel.bathDesc" },
  { icon: Tv, nameKey: "hotel.appleTv", descKey: "hotel.appleTvDesc" },
];

// Room Image Carousel Component
function RoomImageCarousel({ images, name }: { images: string[], name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 1) {
    return (
      <picture>
        <source srcSet={images[0].replace('.jpg', '.webp')} type="image/webp" />
        <img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </picture>
    );
  }

  return (
    <div className="relative w-full h-full group">
      <picture>
        <source srcSet={images[currentIndex].replace('.jpg', '.webp')} type="image/webp" />
        <img
          src={images[currentIndex]}
          alt={`${name} - Photo ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
          loading="lazy"
        />
      </picture>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 text-[#4C5254]" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
      >
        <ChevronRight className="w-5 h-5 text-[#4C5254]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hotel() {
  const { t } = useTranslation();
  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.hotel} />
      <SEOSchema page="hotel" />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/hotel-hero.webp" type="image/webp" />
            <img
              src="/images/hotel-hero.jpg"
              alt="The Local House Hotel"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-4">
              {t("hotel.luxuryBoutique")}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t("hotel.oceanViewSuites")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-[4/3] shadow-xl rounded-lg overflow-hidden">
                    <RoomImageCarousel 
                      images={room.images} 
                      name={room.name} 
                    />
                    {room.type && (
                      <span className="absolute top-4 left-4 px-4 py-2 bg-[#FF8F75] text-white text-xs font-medium tracking-wider rounded z-10">
                        {room.type}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="text-[#FF8F75] font-medium mb-2">
                    {t("hotel.from")} <span className="text-3xl font-display">${room.price}</span>{t("hotel.perNight")}
                  </div>
                  <h2 className="text-3xl font-display font-semibold text-[#4C5254] mb-4">
                    {room.name}
                  </h2>
                  <p className="text-[#666] leading-relaxed mb-6">
                    {room.description}
                  </p>
                  
                  {/* Room Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-[#666] mb-6">
                    <span>{room.size}</span>
                    <span>•</span>
                    <span>{room.bed}</span>
                    <span>•</span>
                    <span>{room.view}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white border border-[#E5DED5] rounded text-sm text-[#666]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded inline-block"
                  >
                    {t("hotel.bookThisRoom")}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#7FBFB3]/20 text-[#7FBFB3] text-sm font-medium rounded-full mb-4">
              {t("hotel.includedEveryStay")}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              {t("hotel.amenitiesPackage")}
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              {t("hotel.amenitiesDesc")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenityIcons.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center p-6 bg-[#FAF7F2] rounded-lg"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <amenity.icon className="text-[#FF8F75]" size={24} />
                </div>
                <h3 className="font-display font-semibold text-[#4C5254] mb-2">
                  {t(amenity.nameKey)}
                </h3>
                <p className="text-sm text-[#666]">{t(amenity.descKey)}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#666] mb-2">
              <span className="font-semibold text-[#FF8F75]">{t("hotel.perNightValue")}</span> · {t("hotel.incredibleValue")}
            </p>
            <p className="text-sm text-[#999]">
              {t("hotel.amenitiesAutoIncluded")}
            </p>
          </div>
        </div>
      </section>

      {/* Cross-sell: Restaurant & Brunch */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#4C5254] mb-6">
              {t("hotel.wakeUpBrunch")}
            </h2>
            <p className="text-lg text-[#666] mb-8">
              {t("hotel.brunchDesc")}
              {" "}{t("hotel.brunchSteps")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/brunch">
                <span className="px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded inline-block">
                  {t("hotel.seeBrunchMenu")}
                </span>
              </Link>
              <Link href="/restaurant">
                <span className="px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded inline-block">
                  {t("hotel.fullRestaurantMenu")}
                </span>
              </Link>
              <Link href="/gallery">
                <span className="px-6 py-3 border-2 border-[#4C5254] text-[#4C5254] font-medium tracking-wide hover:bg-[#4C5254] hover:text-white transition-all duration-300 rounded inline-block">
                  {t("hotel.photoGallery")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4C5254]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                {t("hotel.bestPriceGuarantee")}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8F75]/20 text-[#FF8F75] rounded-full text-sm font-medium">
                {t("hotel.freeCancellation")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
              {t("hotel.bookDirect")}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
              {t("hotel.skipFees")}
            </p>
            <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
              {t("hotel.rated")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
              >
                {t("hotel.bookYourStay")}
              </a>
              <a
                href="tel:+13055385529"
                className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-[#4C5254] transition-all duration-300 rounded"
              >
                {t("common.callPhone")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
