import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Blog listing page for SEO content
 */

const blogPosts = [
  {
    slug: "best-brunch-miami-beach-2025",
    title: "The Ultimate Guide to the Best Brunch in Miami Beach (2025)",
    excerpt: "Discover why The Local House has been voted the best brunch spot in South Beach. From our famous Lobster Eggs Benedict to bottomless mimosas, here's what makes our brunch unforgettable.",
    image: "/images/brunch-spread.jpg",
    date: "December 28, 2025",
    readTime: "5 min read",
    category: "Food & Dining",
  },
  {
    slug: "south-of-fifth-neighborhood-guide",
    title: "South of Fifth (SoFi): Miami Beach's Most Exclusive Neighborhood",
    excerpt: "Explore the charm of South of Fifth, from South Pointe Park to Ocean Drive. Learn why SoFi is the preferred destination for discerning travelers and locals alike.",
    image: "/images/ocean-drive.jpg",
    date: "December 20, 2025",
    readTime: "7 min read",
    category: "Travel Guide",
  },
  {
    slug: "ocean-drive-restaurants-guide",
    title: "Ocean Drive Dining: Where to Eat on Miami's Most Famous Street",
    excerpt: "A local's guide to the best restaurants on Ocean Drive. Skip the tourist traps and discover authentic dining experiences with stunning ocean views.",
    image: "/images/restaurant-outdoor.jpg",
    date: "December 15, 2025",
    readTime: "6 min read",
    category: "Food & Dining",
  },
  {
    slug: "boutique-hotels-miami-beach",
    title: "Why Boutique Hotels Offer the Best Miami Beach Experience",
    excerpt: "Large resorts vs. boutique hotels: discover why intimate properties like The Local House provide a more authentic and memorable Miami Beach stay.",
    image: "/images/deluxe-king-room.jpg",
    date: "December 10, 2025",
    readTime: "4 min read",
    category: "Travel Tips",
  },
];

export default function Blog() {
  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.blog} />
      <SEOSchema page="blog" />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#2D2D2D]">
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-4">
              The Local Journal
            </h1>
            <p className="text-xl text-white/80">
              Stories, guides, and insider tips from Ocean Drive
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
                      <span className="px-3 py-1 bg-[#C4846C] text-white text-xs font-medium rounded-full">
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
                    <h2 className="text-xl font-display font-semibold text-[#2D2D2D] mb-3 hover:text-[#C4846C] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#666] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#C4846C] font-medium hover:gap-3 transition-all">
                      Read More <ArrowRight size={16} />
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
          <h2 className="text-3xl font-display font-semibold text-[#2D2D2D] mb-4">
            Get Local Tips in Your Inbox
          </h2>
          <p className="text-[#666] mb-8">
            Subscribe to receive insider guides, exclusive offers, and the latest from The Local House.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-[#FAF7F2] border border-[#E5DED5] rounded focus:outline-none focus:border-[#C4846C]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#C4846C] text-white font-medium tracking-wide hover:bg-[#B07460] transition-all duration-300 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
