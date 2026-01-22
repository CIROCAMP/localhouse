import { motion, AnimatePresence } from "framer-motion";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { Star, Clock, MapPin, ChefHat, Waves, Wine, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";
import MenuSection from "@/components/MenuSection";
/*
 * Design: Miami Art Deco Revival
 * Homepage with hero carousel, brunch section, testimonials, FAQ
 * Colors: Coral (#FF8F75), Seafoam (#7FBFB3), Gold (#FF8F75), Cream (white)
 */

// SEO: Set page title
const SEO_TITLE = "The Local House | Boutique Hotel & Best Brunch Miami Beach";

const heroSlides = [
  {
    image: "/images/restaurant-interior.jpg",
    title: "The Local House",
    subtitle: "Boutique Hotel & Famous Brunch in South of Fifth, Miami Beach",
  },
  {
    image: "/images/gallery-tropical-dining.jpg",
    title: "Coastal Dining",
    subtitle: "Fresh, local cuisine in a tropical paradise setting",
  },
  {
    image: "/images/rooftop-pool.jpg",
    title: "Rooftop Escape",
    subtitle: "Stunning pool with panoramic Miami skyline views",
  },
];

const testimonials = [
  {
    text: "Absolutely stunning boutique hotel! The ocean view from our room was breathtaking, and the restaurant exceeded all expectations. The staff made us feel like family.",
    author: "Sarah M.",
    location: "New York, NY",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "Perfect Miami Beach getaway. The rooftop pool is incredible, and the cocktails at the bar are the best I've had. The location on Ocean Drive can't be beat.",
    author: "Michael T.",
    location: "Chicago, IL",
    source: "Google",
    rating: 5,
  },
  {
    text: "We celebrated our anniversary here and it was magical. The attention to detail, from the beautifully designed rooms to the exquisite brunch, made our stay unforgettable.",
    author: "Emma & James",
    location: "London, UK",
    source: "Booking.com",
    rating: 5,
  },
];

const faqs = [
  // Location & Access - Voice Search Optimized
  {
    question: "Where is The Local House located in Miami Beach?",
    answer: "We're located at 400 Ocean Drive in the heart of South of Fifth (SoFi), Miami Beach's most exclusive neighborhood. Just steps from the beach, South Pointe Park, and a 15-minute drive from Miami International Airport.",
  },
  {
    question: "What is the best brunch in South Beach Miami?",
    answer: "The Local House has been voted #1 Brunch in South Beach by locals and visitors. Our famous Lobster Eggs Benedict ($28), fluffy buttermilk pancakes, and signature mimosas have earned us a 4.9-star rating from over 2,500 guests.",
  },
  // Hotel Operations
  {
    question: "What time is check-in and check-out at The Local House?",
    answer: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request, subject to availability. Book directly for complimentary late checkout.",
  },
  {
    question: "Is parking available at The Local House hotel?",
    answer: "Yes, valet parking is available for $45/night.",
  },
  // Restaurant & Dining
  {
    question: "Do I need a hotel reservation to eat at The Local House restaurant?",
    answer: "No! Our restaurant is open to everyone. We recommend making reservations through OpenTable, especially for weekend brunch (8AM-4PM daily). Walk-ins are welcome but tables fill up fast.",
  },
  {
    question: "What are The Local House brunch hours?",
    answer: "Brunch is served daily from 8:00 AM to 4:00 PM. Our dinner service runs Wed-Sun from 4:00 PM to 10:00 PM.",
  },
  // Pricing & Booking
  {
    question: "How much does a room cost at The Local House Miami Beach?",
    answer: "Room rates start from $199/night for a Standard King with city views, up to $329/night for our Grand Partial Ocean View King suite. Book directly on our website for the best rates and free breakfast.",
  },
  {
    question: "Does The Local House have a rooftop pool?",
    answer: "Yes! Our rooftop pool offers stunning panoramic views of the Miami skyline and ocean. It's exclusively available to hotel guests and features poolside service and loungers. Pool hours are 8:00 AM to 8:00 PM daily.",
  },
  // Special Occasions
  {
    question: "Can I host a private event at The Local House?",
    answer: "Absolutely! We offer private dining and event spaces for birthdays, anniversaries, corporate events, and weddings. Contact us at info@localhouse.com or call (305) 538-5529 for custom packages.",
  },
  {
    question: "Is The Local House pet-friendly?",
    answer: "The hotel does not allow pets. However, our restaurant is pet-friendly! You can bring your furry friends to dine with us on our outdoor patio. Please call ahead to ensure seating availability.",
  },
  {
    question: "What is The Local House cancellation policy?",
    answer: "We require cancellation at least 72 hours prior to your arrival date for a full refund. Cancellations made within 72 hours of arrival will be charged one night's room rate. Early booking discounts apply for reservations made 30+ days in advance.",
  },
];

const stats = [
  { value: "4.9", label: "Average Rating", icon: "⭐" },
  { value: "2,500+", label: "Guest Reviews", icon: "💬" },
  { value: "2025", label: "Travelers' Choice", icon: "🏆" },
  { value: "#1", label: "Brunch in SoFi", icon: "🥇" },
];

const features = [
  { icon: ChefHat, label: "Fresh Seafood" },
  { icon: Wine, label: "Craft Cocktails" },
  { icon: Waves, label: "Ocean Drive Views" },
  { icon: Calendar, label: "Since 2012" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // SEO: Set document title
  useEffect(() => {
    document.title = SEO_TITLE;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.home} />
      <SEOSchema page="home" />
      
      {/* Hero Carousel Section - pt-10 compensates for fixed urgency banner */}
      <section className="relative h-screen min-h-[700px] pt-10 flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 bg-[#FAF7F2]"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <picture>
              <source srcSet={heroSlides[currentSlide].image.replace('.jpg', '.webp')} type="image/webp" />
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                className="w-full h-full object-cover will-change-transform"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8F75]/90 rounded-full text-sm font-medium mb-6">
              🍳 Where Locals Gather, Travelers Belong
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 tracking-wide">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-10 text-white/90">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
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
              className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-[#4C5254] transition-all duration-300 rounded"
            >
              Book a Room
            </a>
            <Link href="/brunch">
              <span className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium tracking-wide hover:bg-white/20 transition-all duration-300 rounded inline-block">
                Famous Brunch →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-white" size={20} />
          </button>
          
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="text-white" size={20} />
          </button>
        </div>
      </section>

      {/* Brunch Section */}
      <section className="py-24 bg-[white]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              Where Locals Gather, Travelers Belong
            </h2>
            <p className="text-lg text-[#666] mb-2">Voted Best Brunch in South Beach</p>
            <p className="text-sm tracking-[0.2em] text-[#FF8F75] uppercase">
              Italian-owned & operated since 2012
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <picture>
                  <source srcSet="/images/brunch-spread.webp" type="image/webp" />
                  <img
                    src="/images/brunch-spread.jpg"
                    alt="Famous Brunch at The Local House"
                    className="w-full rounded-lg shadow-2xl"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute -bottom-6 -right-6 bg-[#FF8F75] text-white px-6 py-4 rounded shadow-lg">
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span className="font-medium">Daily 8AM – 4PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h3 className="text-3xl font-display font-semibold text-[#4C5254] mb-6">
                Legendary Brunch, Coastal Cuisine, Italian Heart
              </h3>
              <p className="text-[#666] leading-relaxed mb-8">
                From legendary brunch to intimate dinners, experience coastal cuisine
                crafted with fresh, local ingredients in the heart of South of Fifth.
                Founded by an Italian owner in 2012, our chefs blend Miami's vibrant flavors
                with authentic Italian hospitality and timeless culinary traditions.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <feature.icon className="text-[#FF8F75]" size={24} />
                    <span className="font-medium text-[#4C5254]">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded text-center"
                >
                  Reserve for Brunch
                </a>
                <Link href="/restaurant">
                  <span className="px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded text-center inline-block">
                    View Menu
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dish Highlight */}
      <section className="py-20 bg-gradient-to-r from-[#FF8F75] to-[#e67c63] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                🏆 #1 Most Ordered Dish
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Lobster Eggs Benedict
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Our signature dish that put us on the map. Fresh Maine lobster, perfectly poached eggs, 
                house-made hollandaise on a toasted brioche. Featured in Miami New Times, Eater Miami, 
                and countless food blogs. The reason locals and tourists line up every weekend.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-[#FF8F75] font-bold rounded hover:bg-[white] transition-colors"
                >
                  Reserve for Brunch
                </a>
                <Link href="/brunch">
                  <span className="px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-colors inline-block">
                    See Full Brunch Menu
                  </span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-6xl mb-4">🥚🦞</div>
                <div className="text-4xl font-display font-bold">$28</div>
                <div className="text-white/80">Worth Every Penny</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges & Stats Section */}
      <section className="py-16 bg-white border-y border-[#E5DED5]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-[white] rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-display font-bold text-[#FF8F75] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#666] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* As Seen On - Media Logos */}
          <div className="mt-12 pt-10 border-t border-[#E5DED5]">
            <p className="text-center text-sm text-[#999] uppercase tracking-[0.2em] mb-8">As Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity">
              <a href="https://www.miamiandbeaches.com/restaurants/best-south-beach-brunches" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                <img src="/images/badges/tripadvisor-travelers-choice-2025.png" alt="TripAdvisor Travelers' Choice" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
              </a>
              <a href="https://miami.eater.com/venue/9241/the-local-house" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#4C5254] font-bold text-xl hover:text-[#e4002b] transition-colors">
                <span>EATER</span>
              </a>
              <a onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                <img src="/images/badges/opentable-diners-choice-2024.png" alt="OpenTable Diners' Choice" className="h-16 w-auto grayscale hover:grayscale-0 transition-all" />
              </a>
              <a href="https://www.miamiandbeaches.com/l/hotels/the-local-house/4339" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#4C5254] font-semibold hover:text-[#e4145a] transition-colors">
                <span className="text-lg">MIAMI & BEACHES</span>
              </a>
            </div>
          </div>

          {/* Trust Badges Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-10 pt-10 border-t border-[#E5DED5]">
            <a href="https://www.tripadvisor.com/Hotel_Review-g34439-d1449858-Reviews-The_Local_House-Miami_Beach_Florida.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#666] hover:text-[#00aa6c] transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              <span className="font-medium">TripAdvisor</span>
            </a>
            <a href="https://share.google/0H2ptcjor9w7exBb0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#666] hover:text-[#4285f4] transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              <span className="font-medium">Google Reviews</span>
            </a>
            <a onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#666] hover:text-[#da3743] transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
              <span className="font-medium">OpenTable</span>
            </a>
            <div className="flex items-center gap-2 text-[#666]">
              <span className="text-2xl">🇮🇹</span>
              <span className="font-medium">Italian-Owned Since 2012</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[white]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-[#666]">
              Discover why travelers from around the world choose The Local House
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
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#FF8F75] text-[#FF8F75]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#666] leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#4C5254]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#999]">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-[#FF8F75] font-medium">
                    {testimonial.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g34439-d1449858-Reviews-The_Local_House-Miami_Beach_Florida.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#FF8F75] transition-colors"
            >
              Read more on TripAdvisor →
            </a>
            <a
              href="https://share.google/0H2ptcjor9w7exBb0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#FF8F75] transition-colors"
            >
              Google Reviews →
            </a>
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#FF8F75] transition-colors"
            >
              Booking.com →
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <img 
                src="/images/italian-heart-watercolor.png" 
                alt="Italian Heart" 
                className="w-24 h-24 mx-auto mb-6 object-contain"
              />
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
                Our Story
              </h2>
              <p className="text-sm tracking-[0.2em] text-[#FF8F75] uppercase">
                A Love Story on Ocean Drive
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-[white] p-8 md:p-12 rounded-lg">
                <p className="text-[#666] leading-relaxed mb-6 text-lg">
                  In the midst of the 2009 financial crisis, when the world seemed uncertain
                  and opportunities scarce, an Italian real estate investor found himself
                  wandering the iconic streets of Miami Beach. It was a chance encounter—a
                  simple walk down Ocean Drive—that would change everything.
                </p>
                <p className="text-[#666] leading-relaxed mb-6 text-lg">
                  There, at 400 Ocean Drive, stood a weathered Art Deco building with
                  faded coral walls and sun-bleached shutters. Most saw a property in need
                  of work. He saw something else entirely: <span className="italic text-[#FF8F75]">potential,
                  character, and a soul waiting to be awakened.</span>
                </p>
                <p className="text-[#666] leading-relaxed mb-6 text-lg">
                  It was love at first sight.
                </p>
                <p className="text-[#666] leading-relaxed mb-6 text-lg">
                  In 2012, he acquired the property and began a labor of love that would
                  span years. Every detail was considered with the passion of an Italian
                  craftsman—from the carefully restored architectural elements to the
                  warm hospitality that would become the hotel's signature. He didn't just
                  renovate a building; he breathed life into it.
                </p>
                <p className="text-[#666] leading-relaxed text-lg">
                  Today, The Local House stands as a testament to that vision: a boutique
                  hotel where Italian warmth meets Miami vibrancy, where every guest is
                  treated like family, and where the famous brunch has become a beloved
                  tradition for locals and travelers alike. What began as a chance encounter
                  has blossomed into one of South Beach's most cherished destinations.
                </p>
                <div className="mt-8 pt-6 border-t border-[#E5DED5] text-center">
                  <p className="text-[#FF8F75] font-display text-xl italic">
                    "Some places you visit. Others, you fall in love with."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hotel Preview Section */}
      <section className="py-24 bg-[white]">
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <img
                src="/images/deluxe-king-room.jpg"
                alt="Boutique Hotel Room"
                className="w-full rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="w-16 h-px bg-[#FF8F75] mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-6">
                Your Miami Beach Escape
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                Founded by an Italian owner in 2012, each room is thoughtfully designed
                to capture the essence of Miami Beach living with European boutique comfort.
                Wake up to Ocean Drive views, Art Deco charm, and the promise of our
                famous brunch just steps away.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#666]">
                  <span className="w-2 h-2 bg-[#FF8F75] rounded-full" />
                  Ocean & City View Rooms
                </li>
                <li className="flex items-center gap-3 text-[#666]">
                  <span className="w-2 h-2 bg-[#FF8F75] rounded-full" />
                  Rooftop Pool with Miami Skyline
                </li>
                <li className="flex items-center gap-3 text-[#666]">
                  <span className="w-2 h-2 bg-[#FF8F75] rounded-full" />
                  $35 Daily Amenities Package
                </li>
                <li className="flex items-center gap-3 text-[#666]">
                  <span className="w-2 h-2 bg-[#FF8F75] rounded-full" />
                  Steps from South Beach
                </li>
              </ul>
              <Link href="/hotel">
                <span className="px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded inline-block">
                  Explore Rooms & Suites
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pool Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img
            src="/images/rooftop-pool.jpg"
            alt="Rooftop Pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Rooftop Paradise
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Unwind at our stunning rooftop pool with panoramic views of the Miami
              skyline. The perfect spot for sunset cocktails.
            </p>
            <Link href="/hotel">
              <span className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded inline-block">
                Book Your Stay
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[white]">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border border-[#E5DED5]"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-[#4C5254] hover:text-[#FF8F75] py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#666] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Newsletter Section */}
      <section className="py-24 bg-[#4C5254]">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to receive exclusive offers, local tips, and updates from The Local House.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#FF8F75]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Map/Image */}
            <div className="lg:w-1/2">
              <img
                src="/images/ocean-drive.jpg"
                alt="Ocean Drive Miami Beach"
                className="w-full rounded-lg shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <div className="w-16 h-px bg-[#FF8F75] mb-6" />
              <h2 className="text-4xl font-display font-semibold text-[#4C5254] mb-6">
                Find Us on Ocean Drive
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-[#FF8F75] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#4C5254] mb-1">
                    400 Ocean Drive
                  </p>
                  <p className="text-[#666]">
                    Miami Beach, FL 33139<br />
                    South of Fifth (SoFi) neighborhood
                  </p>
                </div>
              </div>
              <p className="text-[#666] leading-relaxed mb-8">
                Located in the heart of South of Fifth, Miami Beach's most exclusive
                neighborhood. Just steps from South Pointe Park and the beach.
                Walking distance to the best restaurants, bars, and nightlife.
              </p>
              <a
                href="https://maps.google.com/?q=400+Ocean+Dr,+Miami+Beach,+FL+33139"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
