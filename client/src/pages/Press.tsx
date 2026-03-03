import { motion } from "framer-motion";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { Award, Star, Newspaper, ExternalLink, Quote, Calendar } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Press & Awards page showcasing media mentions and accolades
 * Colors: Coral (#FF8F75), Seafoam (#7FBFB3), Gold (#FF8F75), Cream (#FAF7F2)
 */

const awards = [
  {
    year: "2025",
    title: "TripAdvisor Travelers' Choice",
    description: "Recognized as one of the top hotels in Miami Beach based on exceptional guest reviews and ratings.",
    icon: Award,
    color: "#00aa6c",
  },
  {
    year: "2024",
    title: "OpenTable Diners' Choice",
    description: "Awarded for outstanding dining experience, service quality, and guest satisfaction.",
    icon: Star,
    color: "#da3743",
  },
  {
    year: "2024",
    title: "Best Brunch in South Beach",
    description: "Voted by locals and visitors as the premier brunch destination in the South of Fifth neighborhood.",
    icon: Award,
    color: "#FF8F75",
  },
  {
    year: "2023",
    title: "Miami New Times Best Of",
    description: "Featured in Miami New Times' annual 'Best Of Miami' guide for exceptional brunch offerings.",
    icon: Newspaper,
    color: "#FF8F75",
  },
];

const pressFeatures = [
  {
    publication: "Miami & Miami Beach Official",
    title: "The Best South Beach Brunches",
    excerpt: "An underrated gem in the South of Fifth district, The Local House is one of the best brunch spots you'll ever find. Located in a boutique hotel of the same name, the restaurant is ideal for small groups of friends and family.",
    date: "August 2025",
    link: "https://www.miamiandbeaches.com/restaurants/best-south-beach-brunches",
    logo: "/images/press/miami-beaches.png",
  },
  {
    publication: "Eater Miami",
    title: "Ciro Campagnoli on The First Year at The Local House",
    excerpt: "The brunch is a real success. We have beautiful people. We want the restaurant to be 'your kitchen away from your kitchen' at an affordable price.",
    date: "November 2013",
    link: "https://miami.eater.com/2013/11/27/6322241/ciro-campagnoli-on-the-first-year-at-the-local-house",
    logo: "/images/press/eater.png",
  },
  {
    publication: "Eater Miami",
    title: "The 15 Best Eggs Benedicts in Miami",
    excerpt: "Prepare for lots of hollandaise sauce. The Local House featured among Miami's best Eggs Benedict destinations.",
    date: "July 2018",
    link: "https://miami.eater.com/venue/9241/the-local-house",
    logo: "/images/press/eater.png",
  },
  {
    publication: "Jessica Litras Blog",
    title: "The Local House Hotel Miami Beach Review",
    excerpt: "This super laid-back, elegant and heavy beach-vibe hotel is perfect for small groups, girls trips or even a little staycation. It's small enough for a more intimate experience.",
    date: "2024",
    link: "https://jessicalitras.com/the-local-house-hotel-miami-beach-review/",
    logo: "/images/press/jessica-litras.png",
  },
  {
    publication: "Miami Culinary Tours",
    title: "Local House Raw Bar And Grill at 400 Ocean Drive",
    excerpt: "Most unusually, brunch is served everyday from 7:30 AM until 5:30 PM, offering 25 choices, from pure breakfast choices like a fruit plate to hearty seafood dishes.",
    date: "February 2013",
    link: "https://www.miamiculinarytours.com/blog/the-local-house-raw-bar-and-grill-is-located-on-the-ground-floor-of-sense-hotel-at-400-ocean-drive/",
    logo: "/images/press/miami-culinary.png",
  },
  {
    publication: "TripAdvisor",
    title: "The Local House - Restaurant Reviews",
    excerpt: "Each dish was fresh, flavorful, and satisfying—a perfect balance of savory and sweet. The setting of The Local House is simply adorable, making it a great spot for brunch.",
    date: "2024",
    link: "https://www.tripadvisor.com/Restaurant_Review-g34439-d3741302-Reviews-The_Local_House-Miami_Beach_Florida.html",
    logo: "/images/press/tripadvisor.png",
  },
];

const testimonialQuotes = [
  {
    quote: "The best brunch I've ever had. The Lobster Eggs Benedict is absolutely divine, and the Ocean Drive views make it unforgettable.",
    author: "Sarah M.",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    quote: "Italian hospitality at its finest. The owner's passion for excellence shows in every detail. We felt like family from the moment we arrived.",
    author: "Marco T.",
    source: "Google Reviews",
    rating: 5,
  },
  {
    quote: "A hidden gem in South Beach. Skip the crowded tourist spots and come here. The rooftop pool and brunch combo is perfect.",
    author: "Jennifer L.",
    source: "OpenTable",
    rating: 5,
  },
];

const stats = [
  { value: "4.9", label: "Average Rating", sublabel: "across all platforms" },
  { value: "2,500+", label: "Guest Reviews", sublabel: "and counting" },
  { value: "13+", label: "Years of Excellence", sublabel: "since 2012" },
  { value: "#1", label: "Brunch in SoFi", sublabel: "voted by locals" },
];

export default function Press() {
  return (
    <div>
      {/* SEO */}
      <SEOHead
        title="Press & Awards | The Local House Miami Beach"
        description="Discover why The Local House has been featured in Miami New Times, Eater Miami, Travel + Leisure, and more. Award-winning boutique hotel and famous brunch on Ocean Drive."
        keywords="The Local House press, Miami Beach hotel awards, best brunch Miami awards, Ocean Drive restaurant reviews, TripAdvisor Travelers Choice Miami"
        canonicalUrl="https://www.localhouse.com/press"
      />
      <SEOSchema page="home" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4C5254] via-[#3D3D3D] to-[#4C5254]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#FF8F75] rotate-45" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#FF8F75] rotate-12" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#7FBFB3] -rotate-12" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center gap-2 mb-6">
              <Award className="w-8 h-8 text-[#FF8F75]" />
              <Newspaper className="w-8 h-8 text-[#FF8F75]" />
              <Star className="w-8 h-8 text-[#FF8F75]" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-4">
              Press & Awards
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Recognized by the world's leading travel and food publications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-[#E5DED5]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-[#FF8F75] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#4C5254] font-medium">{stat.label}</div>
                <div className="text-sm text-[#999]">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              Honored by travelers and industry experts for exceptional hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${award.color}15` }}
                  >
                    <award.icon className="w-7 h-7" style={{ color: award.color }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#FF8F75]">{award.year}</span>
                    <h3 className="text-xl font-display font-semibold text-[#4C5254] mb-2">
                      {award.title}
                    </h3>
                    <p className="text-[#666]">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Award Badges Section */}
      <section className="py-16 bg-white border-b border-[#E5DED5]">
        <div className="container">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-2">
              Official Award Badges
            </h3>
            <p className="text-[#666]">
              Proudly displaying our verified awards and certifications
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <motion.a
              href="https://www.tripadvisor.com/Hotel_Review-g34439-d1449858-Reviews-The_Local_House-Miami_Beach_Florida.html"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group"
            >
              <img
                src="/images/badges/tripadvisor-travelers-choice-2025.png"
                alt="TripAdvisor Travelers' Choice 2025"
                className="w-28 h-28 md:w-36 md:h-36 object-contain transition-transform"
              />
              <span className="mt-2 text-sm text-[#666] group-hover:text-[#00aa6c] transition-colors">
                View on TripAdvisor
              </span>
            </motion.a>
            <motion.a
              onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group"
            >
              <img
                src="/images/badges/opentable-diners-choice-2024.png"
                alt="OpenTable Diners' Choice 2024"
                className="w-28 h-28 md:w-36 md:h-36 object-contain transition-transform"
              />
              <span className="mt-2 text-sm text-[#666] group-hover:text-[#da3743] transition-colors">
                View on OpenTable
              </span>
            </motion.a>
            <motion.a
              href="https://www.tripadvisor.com/Restaurant_Review-g34439-d3741302-Reviews-The_Local_House-Miami_Beach_Florida.html"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group"
            >
              <img
                src="/images/badges/tripadvisor-certificate-excellence.png"
                alt="TripAdvisor Certificate of Excellence"
                className="w-28 h-28 md:w-36 md:h-36 object-contain transition-transform"
              />
              <span className="mt-2 text-sm text-[#666] group-hover:text-[#00aa6c] transition-colors">
                Certificate of Excellence
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Press Features Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              Featured In
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              What the world's top publications are saying about The Local House
            </p>
          </div>

          <div className="space-y-8">
            {pressFeatures.map((feature, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#FAF7F2] rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="flex items-center gap-3 mb-2">
                      <Newspaper className="w-5 h-5 text-[#FF8F75]" />
                      <span className="font-display font-semibold text-[#4C5254]">
                        {feature.publication}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#999]">
                      <Calendar className="w-4 h-4" />
                      {feature.date}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-display font-semibold text-[#4C5254] mb-3">
                      "{feature.title}"
                    </h3>
                    <p className="text-[#666] leading-relaxed mb-4">
                      {feature.excerpt}
                    </p>
                    <a
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-[#FF8F75] hover:text-[#e67c63] font-medium transition-colors"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#4C5254] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Guest Reviews
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Real experiences from our valued guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialQuotes.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              >
                <Quote className="w-10 h-10 text-[#FF8F75] mb-4" />
                <p className="text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.source}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF8F75] text-[#FF8F75]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review Platform Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white/10">
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g34439-d1449858-Reviews-The_Local_House-Miami_Beach_Florida.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#00aa6c] text-white rounded-lg hover:bg-[#009960] transition-colors font-medium"
            >
              Read on TripAdvisor
            </a>
            <a
              href="https://share.google/0H2ptcjor9w7exBb0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#4285f4] text-white rounded-lg hover:bg-[#3574e0] transition-colors font-medium"
            >
              Read on Google
            </a>
            <a
              onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#da3743] text-white rounded-lg hover:bg-[#c42f3a] transition-colors font-medium"
            >
              Read on OpenTable
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#4C5254] mb-6">
              Experience Award-Winning Hospitality
            </h2>
            <p className="text-lg text-[#666] mb-8">
              Join the thousands of guests who have discovered why The Local House is Miami Beach's favorite boutique hotel and brunch destination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF8F75] text-white font-medium rounded hover:bg-[#e67c63] transition-colors"
              >
                Reserve for Brunch
              </a>
              <a
                href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium rounded hover:bg-[#FF8F75] hover:text-white transition-colors"
              >
                Book Your Stay
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16 bg-white border-t border-[#E5DED5]">
        <div className="container max-w-2xl text-center">
          <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-4">
            Media Inquiries
          </h3>
          <p className="text-[#666] mb-6">
            For press inquiries, interview requests, or media partnerships, please contact our team.
          </p>
          <a
            href="mailto:press@localhouse.com"
            className="text-[#FF8F75] hover:text-[#e67c63] font-medium transition-colors"
          >
            press@localhouse.com
          </a>
        </div>
      </section>
    </div>
  );
}
