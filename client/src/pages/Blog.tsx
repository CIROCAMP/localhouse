import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Blog listing page for SEO content
 */

const blogPosts = [
  {
    slug: "best-brunch-miami-beach-2026",
    title: "The Ultimate Guide to the Best Brunch in Miami Beach (2026)",
    excerpt: "Discover why The Local House has been voted the best brunch spot in South Beach. From our famous Lobster Eggs Benedict to signature mimosas, here's what makes our brunch unforgettable.",
    image: "/images/brunch-spread.jpg",
    date: "March 1, 2026",
    readTime: "5 min read",
    category: "Food & Dining",
  },
  {
    slug: "south-of-fifth-neighborhood-guide",
    title: "South of Fifth (SoFi): Miami Beach's Most Exclusive Neighborhood",
    excerpt: "Explore the charm of South of Fifth, from South Pointe Park to Ocean Drive. Learn why SoFi is the preferred destination for discerning travelers and locals alike.",
    image: "/images/ocean-drive.jpg",
    date: "February 20, 2026",
    readTime: "7 min read",
    category: "Travel Guide",
  },
  {
    slug: "ocean-drive-restaurants-guide",
    title: "Ocean Drive Dining: Where to Eat on Miami's Most Famous Street",
    excerpt: "A local's guide to the best restaurants on Ocean Drive. Skip the tourist traps and discover authentic dining experiences with stunning ocean views.",
    image: "/images/restaurant-outdoor.jpg",
    date: "February 15, 2026",
    readTime: "6 min read",
    category: "Food & Dining",
  },
  {
    slug: "boutique-hotels-miami-beach",
    title: "Why Boutique Hotels Offer the Best Miami Beach Experience",
    excerpt: "Large resorts vs. boutique hotels: discover why intimate properties like The Local House provide a more authentic and memorable Miami Beach stay.",
    image: "/images/deluxe-king-room.jpg",
    date: "February 10, 2026",
    readTime: "4 min read",
    category: "Travel Tips",
  },
  {
    slug: "the-history-of-south-beach-miami",
    title: "The History of South Beach Miami: From Mangroves to Art Deco Paradise",
    excerpt: "Discover how a mosquito-infested swamp became America's Riviera. From the Lummus brothers to the Art Deco renaissance, explore the fascinating history of South Beach.",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
    date: "January 7, 2026",
    readTime: "8 min read",
    category: "History & Culture",
  },
];

export default function Blog() {
  const { t } = useTranslation();

  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.blog} />
      <SEOSchema page="blog" />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#4C5254]">
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-4">
              {t("blog.title")}
            </h1>
            <p className="text-xl text-white/80">
              {t("blog.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#FF8F75] text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[#999] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-display font-semibold text-[#4C5254] mb-3 hover:text-[#FF8F75] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#666] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#FF8F75] font-medium hover:gap-3 transition-all">
                      {t("blog.readMore")} <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-display font-semibold text-[#4C5254] mb-4">
            {t("newsletter.getLocalTips")}
          </h2>
          <p className="text-[#666] mb-8">
            {t("newsletter.subscribeGuides")}
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder={t("newsletter.enterEmail")}
              className="flex-1 px-6 py-4 bg-[#FAF7F2] border border-[#E5DED5] rounded focus:outline-none focus:border-[#FF8F75]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
            >
              {t("newsletter.subscribe")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
