import { motion } from "framer-motion";
import { Star, Clock, MapPin, Wine, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { SEOHead, seoConfigs } from "@/components/SEOHead";

export default function BrunchNearMe() {
  const whyChooseUs = [
    {
      icon: "🦞",
      title: "Famous Lobster Eggs Benedict",
      description: "Our signature dish that put us on the map. Fresh Maine lobster, perfectly poached eggs, house-made hollandaise on a toasted English muffin. This is what locals come back for again and again.",
      price: "$33"
    },
    {
      icon: "📍",
      title: "Prime Ocean Drive Location",
      description: "400 Ocean Drive in South of Fifth (SoFi) - the most exclusive neighborhood in Miami Beach. Ocean views, Art Deco architecture, and just 2 minutes from the beach.",
      highlight: "Easy to find, impossible to forget"
    },
    {
      icon: "🕐",
      title: "Daily Brunch Service",
      description: "Open daily from 8AM-4PM. No weekend brunch only restrictions here. Whether it's Tuesday morning or Sunday afternoon, our full brunch menu is always available.",
      highlight: "7 days a week, every week"
    },
    {
      icon: "⭐",
      title: "4.9 Rating",
      description: "Over 2,500 five-star reviews from guests who found us searching brunch near me. Join thousands of satisfied diners who discovered Miami Beach's hidden gem.",
      highlight: "See why everyone's talking about us"
    },
    {
      icon: "🇮🇹",
      title: "Italian-Owned Since 2012",
      description: "Authentic Italian hospitality meets Miami Beach vibes. Our Italian owner created this space as a love letter to coastal cuisine and genuine human connection.",
      highlight: "Family-owned, guest-obsessed"
    },
    {
      icon: "🍾",
      title: "Bottomless Mimosas Available",
      description: "Upgrade your brunch experience with bottomless mimosas and a selection of craft cocktails. Perfect for celebrations, catch-ups, or just because.",
      highlight: "Because brunch without bubbles is just breakfast"
    }
  ];

  const nearbyAttractions = [
    { name: "South Beach", distance: "2-minute walk" },
    { name: "Lincoln Road", distance: "5-minute drive" },
    { name: "Downtown Miami", distance: "10-minute drive" },
    { name: "Miami Beach Convention Center", distance: "8 minutes" },
    { name: "Art Deco District", distance: "Walking distance" },
    { name: "Bayside Marketplace", distance: "12-minute drive" }
  ];

  const seoConfig = {
    title: "Best Brunch Near Me Miami Beach | The Local House SoFi",
    description: "Searching for brunch near me in Miami Beach? The Local House on Ocean Drive serves the #1 rated brunch daily 8AM-4PM. Reserve your table now!",
    keywords: "brunch near me, brunch near me miami beach, best brunch miami beach, brunch sofi, ocean drive brunch, miami beach breakfast",
    canonicalUrl: "https://localhouse.com/brunch-near-me-miami-beach",
    ogImage: "/images/og-brunch.jpg",
    ogType: "restaurant" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "The Local House",
      "image": "https://localhouse.com/images/og-brunch.jpg",
      "description": "Best brunch near Miami Beach. Voted #1 rated brunch with famous Lobster Eggs Benedict, bottomless mimosas, and ocean views.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "400 Ocean Drive",
        "addressLocality": "Miami Beach",
        "addressRegion": "FL",
        "postalCode": "33139",
        "addressCountry": "US"
      },
      "telephone": "+1-305-538-5529",
      "url": "https://localhouse.com/brunch-near-me-miami-beach",
      "servesCuisine": "Italian, Mediterranean, Coastal",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "16:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2500",
        "bestRating": "5"
      }
    }
  };

  return (
    <div>
      <SEOHead {...seoConfig} />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FF8F75] to-[#e67c63]">
        <div className="absolute inset-0 opacity-20">
          <picture>
            <source srcSet="/images/brunch-hero-overhead.webp" type="image/webp" />
            <img
              src="/images/brunch-hero-overhead.jpg"
              alt="Brunch spread"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-semibold mb-6 tracking-wide"
          >
            Looking for Brunch Near You? You Found It.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-10 text-white/90"
          >
            The Local House serves Miami Beach's #1 rated brunch daily from 8AM-4PM at 400 Ocean Drive
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://order.toasttab.com/online/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion('https://order.toasttab.com/online/the-local-house')}
              className="px-8 py-4 bg-white text-[#FF8F75] font-bold rounded hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              Reserve Your Brunch Table
            </a>
            <Link href="/brunch">
              <span className="px-8 py-4 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-[#FF8F75] transition-all duration-300 inline-block">
                View Full Menu →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-[#666] leading-relaxed">
            When you search "brunch near me" in Miami Beach, you deserve more than just food—you deserve an experience. At The Local House, we've been serving the best brunch in South of Fifth (SoFi) since 2012, combining fresh coastal ingredients with authentic Italian hospitality.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] text-center mb-16">
            🏆 Why We're the #1 Brunch Near You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold text-[#FF8F75] mb-4">{item.title}</h3>
                <p className="text-[#666] leading-relaxed mb-4">{item.description}</p>
                {item.price && <p className="font-bold text-[#FF8F75]">{item.price} - Worth Every Penny</p>}
                {item.highlight && <p className="font-bold text-[#4C5254]">{item.highlight}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] text-center mb-12">
            📍 Convenient Location - Easy to Find
          </h2>

          <div className="bg-[#f9f9f9] p-8 rounded-lg mb-12">
            <p className="text-lg text-[#666] leading-relaxed mb-8">
              Located at 400 Ocean Drive in the heart of South of Fifth (SoFi), The Local House is incredibly easy to reach from anywhere in Miami Beach. Whether you're staying at a nearby hotel, exploring South Beach, or just craving the best brunch in town, we're just minutes away.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded">
                  <MapPin className="text-[#FF8F75] flex-shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-[#4C5254]">{attraction.name}</p>
                    <p className="text-sm text-[#666]">{attraction.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://order.toasttab.com/online/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => gtag_report_conversion('https://order.toasttab.com/online/the-local-house')}
              className="inline-block px-8 py-4 bg-[#FF8F75] text-white font-bold rounded hover:bg-[#e67c63] transition-all duration-300 text-lg"
            >
              Reserve Your Table Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF8F75] to-[#e67c63] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Stop Searching "Brunch Near Me" - We're Here
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          The Local House is Miami Beach's #1 rated brunch destination. Open daily 8AM-4PM with famous Lobster Eggs Benedict, bottomless mimosas, and ocean views.
        </p>
        <a
          href="https://order.toasttab.com/online/the-local-house"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => gtag_report_conversion('https://order.toasttab.com/online/the-local-house')}
          className="inline-block px-8 py-4 bg-white text-[#FF8F75] font-bold rounded hover:bg-gray-100 transition-all duration-300 text-lg"
        >
          Book Your Brunch Now
        </a>
      </section>
    </div>
  );
}

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => void;
  }
}
