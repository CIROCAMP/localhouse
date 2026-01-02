import { motion } from "framer-motion";
import { Star, Clock, MapPin, ChefHat, Waves, Wine, Calendar } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/*
 * Design: Miami Art Deco Revival
 * Homepage with hero slider, brunch section, testimonials, FAQ
 * Colors: Coral (#C4846C), Seafoam (#7FBFB3), Gold (#D4AF37), Cream (#FAF7F2)
 */

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
  {
    question: "Where is The Local House located?",
    answer: "We're located at 400 Ocean Drive in the heart of South of Fifth (SoFi), Miami Beach's most exclusive neighborhood. Just steps from the beach and South Pointe Park.",
  },
  {
    question: "What makes your brunch famous?",
    answer: "Our brunch has been voted Best Brunch in South Beach multiple times. We're known for our Lobster Eggs Benedict, fluffy pancakes, and signature mimosas. Fresh, local ingredients and ocean views make it unforgettable.",
  },
  {
    question: "What time is check-in and check-out?",
    answer: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.",
  },
  {
    question: "Is parking available at the hotel?",
    answer: "Yes, valet parking is available for an additional fee. We also have partnerships with nearby parking garages for self-parking options.",
  },
  {
    question: "Can I make a restaurant reservation without staying at the hotel?",
    answer: "Absolutely! Our restaurant is open to all guests. We recommend making reservations through OpenTable, especially for weekend brunch.",
  },
];

const stats = [
  { value: "4.9", label: "Average Rating" },
  { value: "2,500+", label: "Guest Reviews" },
  { value: "2024", label: "Travelers' Choice" },
];

const features = [
  { icon: ChefHat, label: "Fresh Seafood" },
  { icon: Wine, label: "Craft Cocktails" },
  { icon: Waves, label: "Ocean Views" },
  { icon: Calendar, label: "Since 2012" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-restaurant.jpg"
            alt="The Local House Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C4846C]/90 rounded-full text-sm font-medium mb-6">
              🍳 Home of Miami's #1 Brunch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold mb-6 tracking-wide"
          >
            The Local House
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-light mb-10 text-white/90"
          >
            Boutique Hotel & Famous Brunch in South of Fifth, Miami Beach
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded"
            >
              Book a Table
            </a>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-[#2D2D2D] transition-all duration-300 rounded"
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Brunch Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#2D2D2D] mb-4">
              Miami's Most Famous Brunch
            </h2>
            <p className="text-lg text-[#666] mb-2">Voted Best Brunch in South Beach</p>
            <p className="text-sm tracking-[0.2em] text-[#C4846C] uppercase">
              An Ocean Drive Tradition Since 2012
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
                <img
                  src="/images/hero-brunch.jpg"
                  alt="Famous Brunch at The Local House"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#C4846C] text-white px-6 py-4 rounded shadow-lg">
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
              <h3 className="text-3xl font-display font-semibold text-[#2D2D2D] mb-6">
                A Culinary Journey on Ocean Drive
              </h3>
              <p className="text-[#666] leading-relaxed mb-8">
                From legendary brunch to intimate dinners, experience coastal cuisine
                crafted with fresh, local ingredients in the heart of South of Fifth.
                Our chefs blend Miami's vibrant flavors with timeless culinary traditions.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <feature.icon className="text-[#C4846C]" size={24} />
                    <span className="font-medium text-[#2D2D2D]">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.opentable.com/the-local-house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded text-center"
                >
                  Reserve for Brunch
                </a>
                <Link href="/restaurant">
                  <span className="px-6 py-3 border-2 border-[#C4846C] text-[#C4846C] font-medium tracking-wide hover:bg-[#C4846C] hover:text-white transition-all duration-300 rounded text-center inline-block">
                    View Menu
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 border border-[#E5DED5] rounded-lg"
              >
                <div className="text-4xl md:text-5xl font-display font-semibold text-[#C4846C] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#666]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#2D2D2D] mb-4">
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
                      className="fill-[#D4AF37] text-[#D4AF37]"
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
                    <p className="font-semibold text-[#2D2D2D]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#999]">{testimonial.location}</p>
                  </div>
                  <span className="text-xs text-[#C4846C] font-medium">
                    {testimonial.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#C4846C] transition-colors"
            >
              Read more on TripAdvisor →
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#C4846C] transition-colors"
            >
              Google Reviews →
            </a>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#C4846C] transition-colors"
            >
              Booking.com →
            </a>
          </div>
        </div>
      </section>

      {/* Hotel Preview Section */}
      <section className="py-24 bg-white">
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
                src="/images/hero-hotel.jpg"
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
              <div className="w-16 h-px bg-[#D4AF37] mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#2D2D2D] mb-6">
                Your Miami Beach Escape
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                Each room is thoughtfully designed to capture the essence of Miami Beach
                living with boutique comfort. Wake up to ocean views, Art Deco charm,
                and the promise of our famous brunch just steps away.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-[#666]">
                  <span className="w-2 h-2 bg-[#C4846C] rounded-full" />
                  Ocean & City View Rooms
                </li>
                <li className="flex items-center gap-3 text-[#666]">
                  <span className="w-2 h-2 bg-[#C4846C] rounded-full" />
                  Rooftop Pool with Miami Skyline
                </li>
                <li className="flex items-center gap-3 text-[#666]">
                  <span className="w-2 h-2 bg-[#C4846C] rounded-full" />
                  $35 Daily Amenities Package
                </li>
                <li className="flex items-center gap-3 text-[#666]">
                  <span className="w-2 h-2 bg-[#C4846C] rounded-full" />
                  Steps from South Beach
                </li>
              </ul>
              <Link href="/hotel">
                <span className="px-6 py-3 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded inline-block">
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
            src="/images/hero-pool.jpg"
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
              <span className="px-8 py-4 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded inline-block">
                Book Your Stay
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#2D2D2D] mb-4">
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
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-[#2D2D2D] hover:text-[#C4846C] py-5">
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

      {/* Newsletter Section */}
      <section className="py-24 bg-[#2D2D2D]">
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
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#C4846C]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded"
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
              <div className="w-16 h-px bg-[#D4AF37] mb-6" />
              <h2 className="text-4xl font-display font-semibold text-[#2D2D2D] mb-6">
                Find Us on Ocean Drive
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-[#C4846C] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-[#2D2D2D] mb-1">
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
                className="px-6 py-3 border-2 border-[#C4846C] text-[#C4846C] font-medium tracking-wide hover:bg-[#C4846C] hover:text-white transition-all duration-300 rounded inline-block"
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
