import { motion } from "framer-motion";
import { Clock, Star, Award, Users } from "lucide-react";
import { Link } from "wouter";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Dedicated Brunch page - the signature experience
 */

const brunchHighlights = [
  {
    name: "Lobster Eggs Benedict",
    price: 32,
    description: "Our signature dish - butter-poached lobster, perfectly poached eggs, silky hollandaise on a toasted english muffin",
    tag: "SIGNATURE",
  },
  {
    name: "Fluffy Buttermilk Pancakes",
    price: 18,
    description: "Stack of fluffy pancakes with fresh seasonal berries, whipped cream, and pure maple syrup",
    tag: "FAN FAVORITE",
  },
  {
    name: "Breakfast Smash Burger",
    price: 22,
    description: "Wagyu beef patty, fried egg, crispy bacon, melted cheese on a brioche bun",
    tag: null,
  },
  {
    name: "Avocado Toast",
    price: 16,
    description: "Sourdough bread, smashed avocado, poached eggs, microgreens, everything seasoning",
    tag: null,
  },
  {
    name: "French Toast",
    price: 19,
    description: "Thick-cut brioche dipped in vanilla custard, fresh berries, powdered sugar",
    tag: null,
  },
  {
    name: "Lobster Roll",
    price: 38,
    description: "Butter-poached Maine lobster, toasted brioche roll, lemon aioli, chives",
    tag: "PREMIUM",
  },
];

const stats = [
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Users, value: "2,500+", label: "Happy Guests" },
  { icon: Award, value: "#1", label: "Brunch in SoBe" },
];

export default function Brunch() {
  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.brunch} />
      <SEOSchema page="brunch" />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-brunch.jpg"
            alt="Famous Brunch at The Local House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8F75]/90 rounded-full text-sm font-medium mb-6">
              🍳 Voted Best Brunch in South Beach
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-6"
          >
            Miami's Most Famous Brunch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-4"
          >
            An Ocean Drive Tradition Since 2012
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <Clock className="text-[#FF8F75]" size={24} />
            <span className="text-xl font-medium">Daily 8AM – 4PM</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded inline-block"
            >
              Reserve for Brunch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-[#E5DED5]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                  <stat.icon className="text-[#FF8F75]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-display font-semibold text-[#4C5254]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#666]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl font-display font-semibold text-[#4C5254] mb-6">
              Where Brunch Becomes an Experience
            </h2>
            <p className="text-lg text-[#666] leading-relaxed mb-6">
              At The Local House, brunch isn't just a meal—it's our way of welcoming you in.
              Tucked into the South of Fifth neighborhood, just steps from the beach, we're
              known for creating a relaxed, coastal setting where good food and genuine
              hospitality come first.
            </p>
            <p className="text-lg text-[#666] leading-relaxed">
              Our menu highlights comforting favorites with fresh, local touches—from our
              legendary lobster eggs benedict and fluffy pancakes to lighter, seasonal plates
              that feel right at home by the ocean. Whether you join us on the patio with a
              mimosa in hand or settle into our cozy dining room, our team is here to make
              you feel cared for.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              Brunch Favorites
            </h2>
            <p className="text-lg text-[#666]">
              Fresh, local ingredients crafted into unforgettable dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brunchHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF7F2] p-6 rounded-lg relative"
              >
                {item.tag && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#FF8F75] text-white text-xs font-medium rounded">
                    {item.tag}
                  </span>
                )}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-semibold text-[#4C5254] pr-20">
                    {item.name}
                  </h3>
                  <span className="text-[#FF8F75] font-semibold">${item.price}</span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/restaurant">
              <span className="text-[#FF8F75] font-medium hover:underline">
                View Full Menu →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cocktails Section */}
      <section className="py-24 bg-[#4C5254]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-16 h-px bg-[#FF8F75] mb-6" />
                <h2 className="text-4xl font-display font-semibold text-white mb-6">
                  Signature Brunch Cocktails
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  No brunch is complete without our craft cocktails. From bottomless mimosas
                  to our famous Bloody Mary, we've got the perfect pairing for your meal.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <div>
                      <h4 className="text-white font-medium">Mimosa</h4>
                      <p className="text-gray-500 text-sm">prosecco, cold pressed OJ</p>
                    </div>
                    <span className="text-[#FF8F75]">$14 / $45 bottle</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <div>
                      <h4 className="text-white font-medium">Bloody Mary</h4>
                      <p className="text-gray-500 text-sm">homemade mix, bacon, olives</p>
                    </div>
                    <span className="text-[#FF8F75]">$16</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <div>
                      <h4 className="text-white font-medium">Wake Me Up</h4>
                      <p className="text-gray-500 text-sm">vodka, baileys, espresso</p>
                    </div>
                    <span className="text-[#FF8F75]">$18</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/images/signature-cocktail.jpg"
                alt="Signature Brunch Cocktail"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Only 4 tables left for tomorrow's brunch
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-6">
              Don't Miss Miami's #1 Brunch Experience
            </h2>
            <p className="text-xl text-[#666] max-w-2xl mx-auto mb-4">
              Join 2,500+ happy guests who've discovered why we're rated 4.9 stars.
            </p>
            <p className="text-lg text-[#999] max-w-xl mx-auto mb-10">
              Daily 8AM – 4PM • Walk-ins welcome, reservations guarantee your spot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
              >
                Reserve on OpenTable
              </a>
              <a
                href="tel:+13055385529"
                className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
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
