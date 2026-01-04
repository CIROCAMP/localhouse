import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * The Local House - Landing Page
 * Elegant, Timeless, Luxury-Focused Design
 * Target: High-end clientele seeking authentic Italian hospitality in Miami Beach
 */

const heroSlides = [
  {
    image: "/images/restaurant-interior.jpg",
    title: "The Local House",
    subtitle: "A Curated Experience of Italian Elegance & Miami Vibrancy",
    cta: "Discover Our Story",
  },
  {
    image: "/images/rooftop-pool.jpg",
    title: "Rooftop Sanctuary",
    subtitle: "Panoramic Views. Refined Cocktails. Exclusive Ambiance.",
    cta: "Reserve Your Escape",
  },
  {
    image: "/images/brunch-spread.jpg",
    title: "Legendary Brunch",
    subtitle: "The Signature Experience That Defines South Beach",
    cta: "Book Your Table",
  },
];

const trustBadges = [
  { number: "4.9", label: "Guest Rating", icon: "⭐" },
  { number: "2,500+", label: "Verified Reviews", icon: "💬" },
  { number: "2025", label: "Travelers' Choice Award", icon: "🏆" },
  { number: "#1", label: "Brunch in South of Fifth", icon: "🥇" },
];

const testimonials = [
  {
    text: "An absolute gem. The attention to detail, from the Italian-inspired decor to the impeccable service, makes you feel like you're dining in a private villa on the Amalfi Coast.",
    author: "Victoria M.",
    location: "New York, NY",
    rating: 5,
  },
  {
    text: "The rooftop pool experience is unmatched. Sunset cocktails with Miami skyline views, paired with their signature brunch—pure luxury.",
    author: "James & Catherine",
    location: "London, UK",
    rating: 5,
  },
  {
    text: "We've stayed at luxury hotels worldwide. The Local House combines European sophistication with Miami's vibrant energy. Exceptional.",
    author: "Marco D.",
    location: "Milan, Italy",
    rating: 5,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="bg-cream text-charcoal">
      {/* ============================================
          HERO SECTION - Elegant Carousel
          ============================================ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-gold/20 backdrop-blur-sm border border-gold/40 rounded-full text-gold text-sm font-accent tracking-widest">
              CURATED EXPERIENCE
            </span>
          </motion.div>

          {/* Main Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl font-display font-bold mb-6 tracking-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-2xl font-light mb-10 text-white/90 leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gold text-navy font-accent font-semibold tracking-widest hover:bg-white transition-all duration-300 rounded"
            >
              RESERVE TABLE
            </a>
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-white text-white font-accent font-semibold tracking-widest hover:bg-white hover:text-navy transition-all duration-300 rounded"
            >
              BOOK ROOM
            </a>
          </motion.div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-10 h-2 bg-gold"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </section>

      {/* ============================================
          TRUST BADGES - Premium Stats
          ============================================ */}
      <section className="py-16 bg-white border-b-2 border-gold/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{badge.icon}</div>
                <div className="text-4xl font-display font-bold text-gold mb-2">
                  {badge.number}
                </div>
                <p className="text-sm text-charcoal/70 font-accent tracking-wide">
                  {badge.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT SECTION - Italian Heritage
          ============================================ */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/restaurant-interior.jpg"
                alt="The Local House Interior"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-gold mb-8" />
              <h2 className="text-5xl font-display font-bold text-navy mb-4">
                Where Locals Gather, Travelers Belong
              </h2>
              <p className="text-sm font-accent tracking-widest text-gold uppercase mb-8">
                Italian-Owned Since 2012
              </p>

              <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                In 2012, an Italian real estate visionary discovered a weathered Art Deco building at 400 Ocean Drive. What others saw as a property needing work, he saw potential, character, and a soul waiting to be awakened.
              </p>

              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                Today, The Local House stands as a testament to that vision: a boutique hotel where Italian warmth meets Miami vibrancy, where every guest is treated like family, and where the famous brunch has become a beloved tradition for discerning travelers worldwide.
              </p>

              <a
                href="#"
                className="inline-block px-8 py-4 bg-navy text-cream font-accent font-semibold tracking-widest hover:bg-gold hover:text-navy transition-all duration-300 rounded"
              >
                READ OUR STORY
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED DISH - Lobster Eggs Benedict
          ============================================ */}
      <section className="py-24 bg-gradient-to-r from-navy to-charcoal text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-gold/20 border border-gold/40 rounded-full text-gold text-xs font-accent tracking-widest mb-6">
                SIGNATURE DISH
              </span>
              <h2 className="text-5xl font-display font-bold mb-6">
                Lobster Eggs Benedict
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Our most celebrated dish. Fresh Maine lobster, perfectly poached eggs, house-made hollandaise on a toasted brioche. Featured in Miami New Times, Eater Miami, and countless culinary publications. The reason discerning guests return again and again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.opentable.com/the-local-house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gold text-navy font-accent font-semibold tracking-widest hover:bg-white transition-all duration-300 rounded text-center"
                >
                  RESERVE BRUNCH
                </a>
                <a
                  href="#"
                  className="px-8 py-4 border-2 border-gold text-gold font-accent font-semibold tracking-widest hover:bg-gold hover:text-navy transition-all duration-300 rounded text-center"
                >
                  VIEW MENU
                </a>
              </div>
            </motion.div>

            {/* Price Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-lg p-12">
                <div className="text-8xl font-display font-bold text-gold mb-4">$28</div>
                <p className="text-2xl text-white/80 font-light">Worth Every Penny</p>
                <p className="text-sm text-gold/60 font-accent tracking-widest mt-6 uppercase">
                  Most Ordered Dish
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS - Guest Reviews
          ============================================ */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gold mx-auto mb-8" />
            <h2 className="text-5xl font-display font-bold text-navy mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-charcoal/70">
              Discover why discerning travelers choose The Local House
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-gold hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-charcoal/80 leading-relaxed mb-8 italic text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-navy">{testimonial.author}</p>
                  <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review Links */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-12 border-t-2 border-gold/20">
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g34439-d1449858-Reviews-The_Local_House-Miami_Beach_Florida.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-gold transition-colors font-accent tracking-wide"
            >
              Read More on TripAdvisor →
            </a>
            <a
              href="https://share.google/0H2ptcjor9w7exBb0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-gold transition-colors font-accent tracking-wide"
            >
              Google Reviews →
            </a>
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-gold transition-colors font-accent tracking-wide"
            >
              OpenTable Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          HOTEL PREVIEW - Rooms & Amenities
          ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-gold mb-8" />
              <h2 className="text-5xl font-display font-bold text-navy mb-4">
                Your Miami Beach Escape
              </h2>
              <p className="text-sm font-accent tracking-widest text-gold uppercase mb-8">
                Boutique Luxury Redefined
              </p>

              <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
                Each room is thoughtfully designed to capture the essence of Miami Beach living with European boutique sophistication. Wake up to ocean views, Art Deco charm, and the promise of our legendary brunch steps away.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span>Ocean & City View Suites</span>
                </li>
                <li className="flex items-center gap-4 text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span>Rooftop Pool with Miami Skyline</span>
                </li>
                <li className="flex items-center gap-4 text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span>Premium Amenities Package</span>
                </li>
                <li className="flex items-center gap-4 text-charcoal/80">
                  <span className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                  <span>Steps from South Beach</span>
                </li>
              </ul>

              <a
                href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-navy text-cream font-accent font-semibold tracking-widest hover:bg-gold hover:text-navy transition-all duration-300 rounded"
              >
                EXPLORE ROOMS
              </a>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/deluxe-king-room.jpg"
                alt="Deluxe Suite"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          ROOFTOP POOL - Full Width Section
          ============================================ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/rooftop-pool.jpg"
            alt="Rooftop Pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">
              Rooftop Paradise
            </h2>
            <p className="text-2xl font-light text-white/90 mb-10 leading-relaxed">
              Unwind at our stunning rooftop pool with panoramic views of the Miami skyline. The perfect setting for sunset cocktails and unforgettable moments.
            </p>
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gold text-navy font-accent font-semibold tracking-widest hover:bg-white transition-all duration-300 rounded"
            >
              BOOK YOUR STAY
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          LOCATION - Find Us
          ============================================ */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/ocean-drive.jpg"
                alt="Ocean Drive Miami Beach"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-gold mb-8" />
              <h2 className="text-5xl font-display font-bold text-navy mb-8">
                Find Us on Ocean Drive
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-navy text-lg mb-1">Address</p>
                    <p className="text-charcoal/80">
                      400 Ocean Drive<br />
                      Miami Beach, FL 33139<br />
                      South of Fifth (SoFi) Neighborhood
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-navy text-lg mb-1">Phone</p>
                    <a href="tel:+13055385529" className="text-gold hover:text-navy transition-colors">
                      (305) 538-5529
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold text-navy text-lg mb-1">Email</p>
                    <a href="mailto:info@localhouse.com" className="text-gold hover:text-navy transition-colors">
                      info@localhouse.com
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=400+Ocean+Dr,+Miami+Beach,+FL+33139"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border-2 border-navy text-navy font-accent font-semibold tracking-widest hover:bg-navy hover:text-cream transition-all duration-300 rounded"
              >
                GET DIRECTIONS
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/70 mb-2">
            © 2024 The Local House. Italian-Owned Since 2012.
          </p>
          <p className="text-white/50 text-sm">
            400 Ocean Drive, Miami Beach, FL 33139 | (305) 538-5529
          </p>
        </div>
      </footer>
    </div>
  );
}
