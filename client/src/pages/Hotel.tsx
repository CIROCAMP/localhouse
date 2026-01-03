import { motion } from "framer-motion";
import { Wifi, Waves, Coffee, Sun, Dumbbell, Car, Users, Bath, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
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
    features: ["Ocean View", "Private Terrace", "Free Wi-Fi", "Mini Bar"],
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
    features: ["Ocean View", "Sleeps 4", "Free Wi-Fi", "Balcony"],
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
    features: ["Ocean View", "Balcony", "Free Wi-Fi", "Smart TV"],
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
    features: ["Ocean View", "Sleeps 4", "Free Wi-Fi", "Balcony"],
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
    features: ["City View", "Free Wi-Fi", "Mini Bar", "Rain Shower"],
    images: ["/images/standard-king.jpg"],
  },
];

const amenities = [
  { icon: Waves, name: "Rooftop Pool", description: "Stunning pool with Miami skyline views" },
  { icon: Sun, name: "Beach Access", description: "Beach chairs & umbrella setup daily" },
  { icon: Wifi, name: "High-Speed Wi-Fi", description: "Complimentary throughout property" },
  { icon: Coffee, name: "Welcome Drink", description: "Signature cocktail upon arrival" },
  { icon: Dumbbell, name: "Daily Yoga", description: "Complimentary classes at State of Yoga" },
  { icon: Car, name: "Valet Parking", description: "Available for an additional fee" },
  { icon: Users, name: "Concierge", description: "24/7 personalized service" },
  { icon: Bath, name: "Luxury Bath", description: "Premium toiletries & rain shower" },
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
      <img
        src={images[0]}
        alt={name}
        className="w-full h-full object-cover rounded-lg"
      />
    );
  }

  return (
    <div className="relative w-full h-full group">
      <img
        src={images[currentIndex]}
        alt={`${name} - Photo ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 text-[#2D2D2D]" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
      >
        <ChevronRight className="w-5 h-5 text-[#2D2D2D]" />
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
  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.hotel} />
      <SEOSchema page="hotel" />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hotel-hero.jpg"
            alt="The Local House Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-4">
              Our Rooms & Suites
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Italian-owned since 2012. Each room blends Miami Beach style with European boutique comfort
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
                      <span className="absolute top-4 left-4 px-4 py-2 bg-[#C4846C] text-white text-xs font-medium tracking-wider rounded z-10">
                        {room.type}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="text-[#C4846C] font-medium mb-2">
                    From <span className="text-3xl font-display">${room.price}</span>/night
                  </div>
                  <h2 className="text-3xl font-display font-semibold text-[#2D2D2D] mb-4">
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
                    className="px-6 py-3 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded inline-block"
                  >
                    Book This Room
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
              INCLUDED WITH EVERY STAY
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#2D2D2D] mb-4">
              $35 Daily Amenities Package
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              Everything you need for the perfect Miami Beach experience, included with every reservation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center p-6 bg-[#FAF7F2] rounded-lg"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <amenity.icon className="text-[#C4846C]" size={24} />
                </div>
                <h3 className="font-display font-semibold text-[#2D2D2D] mb-2">
                  {amenity.name}
                </h3>
                <p className="text-sm text-[#666]">{amenity.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#666] mb-2">
              <span className="font-semibold text-[#C4846C]">$35/night</span> · Incredible Value
            </p>
            <p className="text-sm text-[#999]">
              The amenities package is automatically included with your stay. No need to add it separately—just book and enjoy!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D2D2D]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
              Ready for Your Miami Beach Escape?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Book directly with us for the best rates and exclusive perks. Your perfect South of Fifth getaway awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded"
              >
                Book Your Stay
              </a>
              <a
                href="tel:+13055385529"
                className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-[#2D2D2D] transition-all duration-300 rounded"
              >
                Call (305) 538-5529
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
