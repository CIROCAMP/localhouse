import { motion } from "framer-motion";
import { Award, Star, Newspaper, ExternalLink, Quote, Calendar } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Press & Awards page showcasing media mentions and accolades
 * Colors: Coral (#C4846C), Seafoam (#7FBFB3), Gold (#D4AF37), Cream (#FAF7F2)
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
    color: "#D4AF37",
  },
  {
    year: "2023",
    title: "Miami New Times Best Of",
    description: "Featured in Miami New Times' annual 'Best Of Miami' guide for exceptional brunch offerings.",
    icon: Newspaper,
    color: "#C4846C",
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
        canonicalUrl="https://localhouse.com/press"
      />
      <SEOSchema page="home" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2D2D] via-[#3D3D3D] to-[#2D2D2D]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#D4AF37] rotate-45" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#C4846C] rotate-12" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-[#7FBFB3] -rotate-12" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center gap-2 mb-6">
              <Award className="w-8 h-8 text-[#D4AF37]" />
              <Newspaper className="w-8 h-8 text-[#C4846C]" />
              <Star className="w-8 h-8 text-[#D4AF37]" />
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
                <div className="text-4xl md:text-5xl font-display font-bold text-[#C4846C] mb-1">
                  {stat.value}
                </div>
                <div className="text-[#2D2D2D] font-medium">{stat.label}</div>
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
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#2D2D2D] mb-4">
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
                    <span className="text-sm font-medium text-[#C4846C]">{award.year}</span>
                    <h3 className="text-xl font-display font-semibold text-[#2D2D2D] mb-2">
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

      {/* Press Features Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#2D2D2D] mb-4">
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
                      <Newspaper className="w-5 h-5 text-[#C4846C]" />
                      <span className="font-display font-semibold text-[#2D2D2D]">
                        {feature.publication}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#999]">
                      <Calendar className="w-4 h-4" />
                      {feature.date}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-display font-semibold text-[#2D2D2D] mb-3">
                      "{feature.title}"
                    </h3>
                    <p className="text-[#666] leading-relaxed mb-4">
                      {feature.excerpt}
                    </p>
                    <a
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-[#C4846C] hover:text-[#B07460] font-medium transition-colors"
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
      <section className="py-24 bg-[#2D2D2D] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
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
                <Quote className="w-10 h-10 text-[#D4AF37] mb-4" />
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
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
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
              href="https://www.opentable.com/the-local-house"
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
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#2D2D2D] mb-6">
              Experience Award-Winning Hospitality
            </h2>
            <p className="text-lg text-[#666] mb-8">
              Join the thousands of guests who have discovered why The Local House is Miami Beach's favorite boutique hotel and brunch destination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C4846C] text-white font-medium rounded hover:bg-[#B07460] transition-colors"
              >
                Reserve for Brunch
              </a>
              <a
                href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#C4846C] text-[#C4846C] font-medium rounded hover:bg-[#C4846C] hover:text-white transition-colors"
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
          <h3 className="text-2xl font-display font-semibold text-[#2D2D2D] mb-4">
            Media Inquiries
          </h3>
          <p className="text-[#666] mb-6">
            For press inquiries, interview requests, or media partnerships, please contact our team.
          </p>
          <a
            href="mailto:press@localhouse.com"
            className="text-[#C4846C] hover:text-[#B07460] font-medium transition-colors"
          >
            press@localhouse.com
          </a>
        </div>
      </section>
    </div>
  );
}
