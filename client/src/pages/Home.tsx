import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { Star, Clock, MapPin, ChefHat, Waves, Wine, Calendar, ChevronLeft, ChevronRight, UtensilsCrossed, Mail, Pizza, GlassWater, Flame } from "lucide-react";
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

/*
 * Design: Miami Art Deco Revival
 * Homepage — 85% Brunch/Restaurant, 15% Hotel
 * Brunch-first hero, signature dishes, food gallery, brunch testimonials
 */

const SEO_TITLE = "The Local House | Best Breakfast & Brunch in South Beach Miami Beach";

const heroSlides = [
  {
    image: "/images/brunch-hero-overhead.jpg",
    title: "Best Brunch in Miami Beach",
    subtitle: "Home of the Legendary Lobster Eggs Benedict",
  },
  {
    image: "/images/brunch-spread.jpg",
    title: "Where Locals Gather",
    subtitle: "Fresh, coastal cuisine on Ocean Drive since 2012",
  },
  {
    image: "/images/gallery-tropical-dining.jpg",
    title: "Oceanfront Dining",
    subtitle: "South of Fifth's favorite brunch destination",
  },
];

const signatureDishes = [
  {
    name: "Lobster Eggs Benedict",
    price: 33,
    tag: "SIGNATURE",
    description: "Butter-poached Maine lobster, poached eggs, silky hollandaise, toasted brioche",
    image: "/images/brunch-lobster-benedict.jpg",
  },
  {
    name: "Brunch Spread",
    price: null,
    tag: "#1 EXPERIENCE",
    description: "Share our chef's selection of brunch favorites with the table",
    image: "/images/brunch-table-spread.jpg",
  },
  {
    name: "Fresh Seafood",
    price: null,
    tag: "OCEAN TO TABLE",
    description: "Oysters, lobster rolls, and daily catches from local waters",
    image: "/images/gallery-seafood.jpg",
  },
  {
    name: "Craft Cocktails",
    price: null,
    tag: "HANDCRAFTED",
    description: "Mimosas, Bloody Marys, and signature brunch cocktails",
    image: "/images/signature-cocktail.jpg",
  },
];

const foodGalleryImages = [
  { src: "/images/gallery-brunch-spread.jpg", alt: "Brunch spread at The Local House" },
  { src: "/images/gallery-pasta.jpg", alt: "Fresh pasta at The Local House" },
  { src: "/images/gallery-cocktail.jpg", alt: "Craft cocktail at The Local House" },
  { src: "/images/gallery-outdoor-seating.jpg", alt: "Outdoor oceanfront dining" },
  { src: "/images/gallery-toast-cocktails.jpg", alt: "Toast and cocktails brunch" },
  { src: "/images/gallery-seafood.jpg", alt: "Fresh seafood dishes" },
  { src: "/images/brunch-hero.jpg", alt: "Brunch at The Local House" },
  { src: "/images/outside-terrace.jpg", alt: "Ocean Drive terrace dining" },
];

const testimonials = [
  {
    text: "The Lobster Eggs Benedict is absolutely divine — best brunch dish I've ever had. We came back three times during our trip. The ocean views from the terrace make it even more special.",
    author: "Sarah M.",
    location: "New York, NY",
    source: "Google",
    rating: 5,
  },
  {
    text: "This is THE brunch spot in South Beach. The pancakes are fluffy perfection, the mimosas flow freely, and the staff treats you like family. Don't sleep on the goat cheese croquettes!",
    author: "Michael T.",
    location: "Chicago, IL",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    text: "We celebrated our anniversary here and the brunch was magical. Fresh lobster rolls, amazing cocktails, and the most welcoming atmosphere. The Italian hospitality is real.",
    author: "Emma & James",
    location: "London, UK",
    source: "OpenTable",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What is the best brunch in South Beach Miami?",
    answer: "The Local House has been voted #1 Brunch in South Beach by locals and visitors. Our famous Lobster Eggs Benedict, fluffy buttermilk pancakes, and signature mimosas have made us a must-visit destination on Ocean Drive.",
  },
  {
    question: "What are The Local House brunch hours?",
    answer: "Brunch is served daily from 8:00 AM to 4:00 PM. Our dinner service runs Wed-Sun from 4:00 PM to 10:00 PM. Happy Hour is Wed-Sun 4PM-6PM.",
  },
  {
    question: "Do I need a reservation for brunch?",
    answer: "We recommend making reservations through OpenTable, especially for weekend brunch. Walk-ins are welcome but tables fill up fast! You don't need to be a hotel guest to dine with us.",
  },
  {
    question: "Where is The Local House located in Miami Beach?",
    answer: "We're located at 400 Ocean Drive in the heart of South of Fifth (SoFi), Miami Beach's most exclusive neighborhood. Just steps from the beach, South Pointe Park, and a 15-minute drive from Miami International Airport.",
  },
  {
    question: "What is the Lobster Eggs Benedict?",
    answer: "Our signature dish — butter-poached Maine lobster, perfectly poached eggs, house-made hollandaise on toasted brioche. It's what put us on the map and the reason locals and tourists line up every weekend.",
  },
  {
    question: "Does The Local House have a hotel?",
    answer: "Yes! We're a boutique hotel with 18 beautifully designed rooms, a rooftop pool with Miami skyline views, reserved beach chairs & umbrella right in front of the hotel, Apple TV in every room, and rates starting from $199/night. Hotel guests get priority brunch seating.",
  },
  {
    question: "Is The Local House pet-friendly?",
    answer: "Our restaurant is pet-friendly — you can bring your furry friends to dine with us on our outdoor patio. The hotel does not allow pets. Please call ahead to ensure patio seating availability.",
  },
  {
    question: "Can I host a private event at The Local House?",
    answer: "Absolutely! We offer private dining and event spaces for birthdays, anniversaries, corporate events, and weddings. Contact us at info@localhouse.com or call (305) 538-5529.",
  },
];

const statsConfig = [
  { value: "4.9", labelKey: "brunch.avgRating", icon: Star },
  { value: "#1", labelKey: "brunch.brunchInSoBe", icon: UtensilsCrossed },
  { valueKey: "brunch.happyGuestsCount", labelKey: "brunch.happyGuests", icon: ChefHat },
  { value: "Daily", labelKey: "brunch.daily8am", icon: Clock },
];

const features = [
  { icon: ChefHat, label: "Fresh Seafood" },
  { icon: Wine, label: "Craft Cocktails" },
  { icon: Waves, label: "Ocean Drive Views" },
  { icon: Calendar, label: "Since 2012" },
];

const SUPABASE_URL = "https://kzqvdwibtuoronyphiuq.supabase.co";


function NewsletterInlineFormDark() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, first_name: firstName }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setFirstName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#FF8F75]/10 border border-[#FF8F75]/30 rounded-lg p-8"
      >
        <p className="text-[#FF8F75] text-xl font-display font-semibold mb-2">{t("newsletter.youreOnTheList")}</p>
        <p className="text-gray-400">{t("newsletter.checkInbox")}</p>
      </motion.div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={t("newsletter.firstName")}
          className="px-5 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF8F75] sm:w-36"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("newsletter.emailAddress")}
          required
          className="flex-1 px-5 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FF8F75]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-4 bg-[#FF8F75] text-white font-semibold text-sm rounded-lg hover:bg-[#e67c63] transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? t("newsletter.joining") : t("newsletter.subscribe")}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-3">{t("newsletter.errorMessage")}</p>
      )}
      <p className="text-gray-600 text-xs mt-4">{t("newsletter.noSpam")}</p>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

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

      {/* ===== HERO: Full-Screen Brunch ===== */}
      <section className="relative h-screen min-h-[700px] pt-10 flex items-center justify-center overflow-hidden">
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
                alt="Famous brunch at The Local House on Ocean Drive, Miami Beach"
                className="w-full h-full object-cover will-change-transform"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8F75]/90 rounded-full text-sm font-medium mb-6">
              {t("brunch.votedBest")}
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
                {currentSlide === 0 ? t("home.bestBrunch") : currentSlide === 1 ? t("home.whereLocals") : t("home.oceanfrontDining")}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-10 text-white/90">
                {currentSlide === 0 ? t("home.legendaryLobster") : currentSlide === 1 ? t("home.freshCoastal") : t("home.sofFavorite")}
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
              onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')}
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded text-lg"
            >
              {t("brunch.reserveForBrunch")}
            </a>
            <Link href="/restaurant">
              <span className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-[#4C5254] transition-all duration-300 rounded inline-block text-lg">
                View Menu
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

      {/* ===== STATS BAR ===== */}
      <section className="py-8 bg-white border-b border-[#E5DED5]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {statsConfig.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                  <stat.icon className="text-[#FF8F75]" size={22} />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-[#FF8F75]">
                    {stat.valueKey ? t(stat.valueKey) : stat.value}
                  </div>
                  <div className="text-xs text-[#666] font-medium uppercase tracking-wide">{t(stat.labelKey)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE DISHES GALLERY ===== */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              {t("brunch.whereBrunchBecomes")}
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              {t("brunch.freshLocal")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {signatureDishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
              >
                <picture>
                  <source srcSet={dish.image.replace('.jpg', '.webp')} type="image/webp" />
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#FF8F75] text-white text-xs font-medium rounded">
                    {dish.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display font-semibold text-white mb-1">
                    {dish.name}
                    {dish.price && <span className="text-[#FF8F75] ml-2">${dish.price}</span>}
                  </h3>
                  <p className="text-white/80 text-sm">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')}
                href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
              >
                {t("brunch.reserveForBrunch")}
              </a>
              <Link href="/brunch">
                <span className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded inline-block">
                  See Full Brunch Menu
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MONTHLY EVENTS — EMAIL SIGNUP ===== */}
      <section className="py-20 bg-[#2c2c2c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-40 h-40 border border-[#FF8F75] rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-[#FF8F75] rounded-full" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8F75]/20 border border-[#FF8F75]/30 rounded-full text-[#FF8F75] text-sm font-medium mb-6">
              <Calendar size={16} />
              Monthly Exclusive Events
            </span>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              {t("newsletter.neverMiss")}
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              {t("newsletter.exclusiveUpdates")}
            </p>

            {/* Events Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#FF8F75]/40 transition-colors"
              >
                <Pizza className="text-[#FF8F75] mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold text-sm mb-1">Pizza Pop-Up</h3>
                <p className="text-gray-500 text-xs">Neapolitan pizza nights with guest pizzaiolos</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#FF8F75]/40 transition-colors"
              >
                <Wine className="text-[#FF8F75] mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold text-sm mb-1">Wine Club</h3>
                <p className="text-gray-500 text-xs">Curated tastings from Italian & French vineyards</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#FF8F75]/40 transition-colors"
              >
                <GlassWater className="text-[#FF8F75] mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold text-sm mb-1">Scotch Tasting</h3>
                <p className="text-gray-500 text-xs">Premium single malt degustation evenings</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#FF8F75]/40 transition-colors"
              >
                <ChefHat className="text-[#FF8F75] mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold text-sm mb-1">Chef's Table</h3>
                <p className="text-gray-500 text-xs">Michelin-star guest chef special dinners</p>
              </motion.div>
            </div>

            {/* Why sign up */}
            <p className="text-white text-base md:text-lg font-medium mb-2">
              Leave your email to get priority access when we organize these events.
            </p>
            <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
              Pizza pop-ups, scotch club nights, Italian wine tastings with producers, intimate dinners with Michelin-star chefs — spots are limited and our subscribers always get first dibs.
            </p>

            {/* Signup Form */}
            <NewsletterInlineFormDark />
          </motion.div>
        </div>
      </section>

      {/* ===== BRUNCH QUICK LINKS (SEO internal linking) ===== */}
      <section className="py-6 bg-white border-b border-[#E5DED5]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/brunch" className="text-[#FF8F75] hover:underline font-medium">
              Best Brunch in Miami Beach
            </Link>
            <span className="text-[#E5DED5]">|</span>
            <Link href="/restaurant" className="text-[#FF8F75] hover:underline font-medium">
              Ocean Drive Restaurant
            </Link>
            <span className="text-[#E5DED5]">|</span>
            <Link href="/brunch-near-me-miami-beach" className="text-[#FF8F75] hover:underline font-medium">
              Brunch Near Me
            </Link>
            <span className="text-[#E5DED5]">|</span>
            <Link href="/hotel" className="text-[#FF8F75] hover:underline font-medium">
              Boutique Hotel Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LOBSTER BENEDICT SPOTLIGHT ===== */}
      <section className="py-20 bg-gradient-to-r from-[#FF8F75] to-[#e67c63] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  {t("home.signature")}
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                  {t("home.lobsterBenedict")}
                </h2>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  {t("home.lobsterDesc")}
                </p>
                <p className="text-white/70 text-base mb-8">
                  The reason locals and tourists line up every weekend. Once you try it, you'll understand.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')}
                    href="https://www.opentable.com/the-local-house"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-[#FF8F75] font-bold rounded hover:bg-white/90 transition-colors"
                  >
                    {t("brunch.reserveForBrunch")}
                  </a>
                  <Link href="/brunch">
                    <span className="px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-colors inline-block">
                      See Full Menu
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <picture>
                  <source srcSet="/images/brunch-lobster-benedict.webp" type="image/webp" />
                  <img
                    src="/images/brunch-lobster-benedict.jpg"
                    alt="Lobster Eggs Benedict at The Local House"
                    className="w-full rounded-lg shadow-2xl"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute -bottom-4 -right-4 bg-white text-[#FF8F75] px-6 py-4 rounded-lg shadow-lg">
                  <div className="text-3xl font-display font-bold">$33</div>
                  <div className="text-sm text-[#666]">Worth Every Penny</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRUNCH EXPERIENCE SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
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
                    <span className="font-medium">{t("brunch.daily8am")}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="w-16 h-px bg-[#FF8F75] mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
                Where Locals Gather, Travelers Belong
              </h2>
              <p className="text-sm tracking-[0.2em] text-[#FF8F75] uppercase mb-6">
                Italian-owned & operated since 2012
              </p>
              <p className="text-[#666] leading-relaxed mb-8">
                From legendary brunch to intimate dinners, experience coastal cuisine
                crafted with fresh, local ingredients in the heart of South of Fifth.
                Our chefs blend Miami's vibrant flavors with authentic Italian hospitality
                and timeless culinary traditions.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#FAF7F2] rounded-lg"
                  >
                    <feature.icon className="text-[#FF8F75]" size={24} />
                    <span className="font-medium text-[#4C5254]">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')}
                  href="https://www.opentable.com/the-local-house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded text-center"
                >
                  {t("brunch.reserveForBrunch")}
                </a>
                <Link href="/restaurant">
                  <span className="px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded text-center inline-block">
                    {t("brunch.viewFullMenu")}
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== AS FEATURED IN + TRUST BADGES ===== */}
      <section className="py-12 bg-white border-y border-[#E5DED5]">
        <div className="container">
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
            <div className="flex items-center gap-2 text-[#4C5254]">
              <span className="text-2xl">🇮🇹</span>
              <span className="font-medium">Italian-Owned Since 2012</span>
            </div>
          </div>
        </div>
      </section>


      {/* ===== INSTAGRAM-STYLE FOOD GALLERY ===== */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-12">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              #EATLIKEALOCAL
            </h2>
            <p className="text-lg text-[#666]">
              Follow us{" "}
              <a
                href="https://www.instagram.com/thelocalhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF8F75] hover:underline font-medium"
              >
                @thelocalhouse
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {foodGalleryImages.map((img, index) => (
              <motion.a
                key={index}
                href="https://www.instagram.com/thelocalhouse"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <picture>
                  <source srcSet={img.src.replace('.jpg', '.webp')} type="image/webp" />
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm">
                    View on Instagram
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              {t("home.whatGuestsSay")}
            </h2>
            <p className="text-lg text-[#666]">
              Hear from the thousands who've made us their favorite brunch spot
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
                className="bg-[#FAF7F2] p-8 rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#FF8F75] text-[#FF8F75]"
                    />
                  ))}
                </div>
                <p className="text-[#666] leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
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
          </div>
        </div>
      </section>

      {/* ===== OUR STORY (Condensed) ===== */}
      <section className="py-24 bg-[#FAF7F2]">
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
                alt="Italian heritage — The Local House, family-owned since 2012"
                className="w-24 h-24 mx-auto mb-6 object-contain"
              />
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
                Italian Hospitality on Ocean Drive
              </h2>
              <p className="text-sm tracking-[0.2em] text-[#FF8F75] uppercase">
                A Love Story Since 2012
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                <p className="text-[#666] leading-relaxed mb-6 text-lg">
                  In 2009, an Italian real estate investor wandering Ocean Drive found a weathered
                  Art Deco building at number 400. Most saw a property in need of work. He saw{" "}
                  <span className="italic text-[#FF8F75]">potential, character, and a soul waiting to be awakened.</span>
                </p>
                <p className="text-[#666] leading-relaxed mb-6 text-lg">
                  By 2012, he had transformed it into The Local House — a place where Italian warmth
                  meets Miami vibrancy, where every guest is treated like family, and where the famous
                  brunch has become a beloved tradition for locals and travelers alike.
                </p>
                <div className="pt-6 border-t border-[#E5DED5] text-center">
                  <p className="text-[#FF8F75] font-display text-xl italic">
                    "Some places you visit. Others, you fall in love with."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== HOTEL PREVIEW (Small, Elegant — 15%) ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <picture>
                <source srcSet="/images/rooftop-pool.webp" type="image/webp" />
                <img
                  src="/images/rooftop-pool.jpg"
                  alt="Rooftop pool at The Local House boutique hotel, Miami Beach"
                  className="w-full rounded-lg shadow-xl"
                  loading="lazy"
                />
              </picture>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="w-16 h-px bg-[#FF8F75] mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#4C5254] mb-4">
                Stay the Night, Wake Up to Brunch
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                18 boutique rooms with Ocean Drive views, a rooftop pool with Miami skyline
                panoramas, and the best brunch in town just steps from your bed.
              </p>
              <ul className="space-y-2 mb-8 text-[#666]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FF8F75] rounded-full" />
                  Rooms from $199/night
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FF8F75] rounded-full" />
                  Rooftop pool with skyline views
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#FF8F75] rounded-full" />
                  Priority brunch seating for guests
                </li>
              </ul>
              <Link href="/hotel">
                <span className="px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded inline-block">
                  Explore Rooms & Suites
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              {t("brunch.brunchFAQ")}
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

      {/* ===== LOCATION ===== */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <picture>
                <source srcSet="/images/ocean-drive.webp" type="image/webp" />
                <img
                  src="/images/ocean-drive.jpg"
                  alt="Ocean Drive Miami Beach — The Local House location"
                  className="w-full rounded-lg shadow-xl"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="lg:w-1/2">
              <div className="w-16 h-px bg-[#FF8F75] mb-6" />
              <h2 className="text-4xl font-display font-semibold text-[#4C5254] mb-6">
                Find Us on Ocean Drive
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-[#FF8F75] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#4C5254] mb-1">400 Ocean Drive</p>
                  <p className="text-[#666]">
                    Miami Beach, FL 33139<br />
                    South of Fifth (SoFi) neighborhood
                  </p>
                </div>
              </div>
              <p className="text-[#666] leading-relaxed mb-8">
                Located in the heart of South of Fifth, Miami Beach's most exclusive
                neighborhood. Just steps from South Pointe Park and the beach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com/?q=400+Ocean+Dr,+Miami+Beach,+FL+33139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded inline-block text-center"
                >
                  Get Directions
                </a>
                <a
                  href="tel:+13055385529"
                  className="px-6 py-3 border-2 border-[#4C5254] text-[#4C5254] font-medium tracking-wide hover:bg-[#4C5254] hover:text-white transition-all duration-300 rounded inline-block text-center"
                >
                  {t("common.callPhone")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-[#4C5254]">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
            Ready for Miami's Best Brunch?
          </h2>
          <p className="text-gray-400 mb-8">
            Join us daily from 8AM to 4PM on Ocean Drive. Reservations recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')}
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
            >
              {t("brunch.reserveForBrunch")}
            </a>
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-[#4C5254] transition-all duration-300 rounded"
            >
              {t("common.bookRoom")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
