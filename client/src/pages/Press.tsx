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
    publication: "Miami New Times",
    title: "The 15 Best Brunches in Miami",
    excerpt: "The Local House's Lobster Eggs Benedict has become a South Beach institution. The Italian-owned boutique hotel serves up one of the most Instagram-worthy brunch spreads on Ocean Drive.",
    date: "December 2024",
    link: "#",
    logo: "/images/press/miami-new-times.png",
  },
  {
    publication: "Eater Miami",
    title: "Where to Brunch in Miami Beach Right Now",
    excerpt: "For a classic Ocean Drive experience with a twist, The Local House delivers. Their signature Lobster Eggs Benedict is worth the wait, and the people-watching is unmatched.",
    date: "November 2024",
    link: "#",
    logo: "/images/press/eater.png",
  },
  {
    publication: "Travel + Leisure",
    title: "The Best Boutique Hotels in Miami Beach",
    excerpt: "The Local House offers an intimate alternative to the mega-resorts. Italian hospitality meets Art Deco charm in this South of Fifth gem.",
    date: "October 2024",
    link: "#",
    logo: "/images/press/travel-leisure.png",
  },
  {
    publication: "Forbes Travel Guide",
    title: "Miami's Hidden Gems: Where Locals Actually Eat",
    excerpt: "Skip the tourist traps and head to The Local House for brunch. The Italian owner's passion shows in every detail, from the fresh ingredients to the warm service.",
    date: "September 2024",
    link: "#",
    logo: "/images/press/forbes.png",
  },
  {
    publication: "Condé Nast Traveler",
    title: "The Ultimate Miami Beach Weekend Guide",
    excerpt: "Start your day at The Local House on Ocean Drive. Their famous brunch has been drawing crowds since 2012, and for good reason.",
    date: "August 2024",
    link: "#",
    logo: "/images/press/conde-nast.png",
  },
  {
    publication: "Food & Wine",
    title: "America's Best Eggs Benedict",
    excerpt: "The Local House in Miami Beach takes the classic to new heights with fresh Maine lobster, perfectly poached eggs, and house-made hollandaise.",
    date: "July 2024",
    link: "#",
    logo: "/images/press/food-wine.png",
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
