import { motion } from "framer-motion";
import { Star, MapPin, Clock, Users, Award, Utensils } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";

export default function RestaurantsNearMe() {
  const highlights = [
    {
      icon: "🏆",
      title: "#1 Rated Restaurant",
      description: "4.9-star rating from 2,500+ guests on TripAdvisor, Google, and Booking.com"
    },
    {
      icon: "🍽️",
      title: "Award-Winning Cuisine",
      description: "Fresh seafood, Mediterranean flavors, and Italian hospitality in every dish"
    },
    {
      icon: "📍",
      title: "Prime Ocean Drive Location",
      description: "400 Ocean Drive in South of Fifth (SoFi) - just 2 minutes from South Beach"
    },
    {
      icon: "🕐",
      title: "Open Daily",
      description: "Breakfast, brunch (8AM-4PM daily), and dinner (Wed-Sun 4PM-10PM)"
    },
    {
      icon: "🇮🇹",
      title: "Italian-Owned",
      description: "Authentic Italian hospitality combined with Miami's vibrant coastal cuisine"
    },
    {
      icon: "🍾",
      title: "Craft Cocktails",
      description: "Signature cocktails, bottomless mimosas, and an extensive wine selection"
    }
  ];

  const menuHighlights = [
    { name: "Lobster Eggs Benedict", price: "$33", description: "Our signature brunch dish" },
    { name: "Yellowfin Tuna Tartare", price: "$21", description: "Fresh and perfectly seasoned" },
    { name: "Fried Calamari", price: "$19", description: "Crispy and delicious" },
    { name: "Goat Cheese Croquettes", price: "$14", description: "Warm and creamy" }
  ];

  const nearbyAttractions = [
    { name: "South Beach", distance: "2-minute walk" },
    { name: "Lincoln Road", distance: "5-minute drive" },
    { name: "Art Deco District", distance: "Walking distance" },
    { name: "Downtown Miami", distance: "10-minute drive" },
    { name: "Miami Beach Convention Center", distance: "8 minutes" },
    { name: "Bayside Marketplace", distance: "12-minute drive" }
  ];

  const seoConfig = {
    title: "Best Restaurant Near Me Miami Beach | The Local House Ocean Drive",
    description: "Looking for restaurants near me in Miami Beach? The Local House on Ocean Drive offers award-winning brunch, fresh seafood, and Italian hospitality. Open daily. Reserve now!",
    keywords: "restaurants near me, restaurants near me miami beach, ocean drive restaurant, miami beach dining, seafood restaurant, best restaurant miami beach",
    canonicalUrl: "https://localhouse.com/restaurants-near-me-miami-beach",
    ogImage: "/images/og-restaurant.jpg",
    ogType: "restaurant" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "The Local House",
      "image": "https://localhouse.com/images/og-restaurant.jpg",
      "description": "Award-winning restaurant on Ocean Drive with fresh seafood, Mediterranean cuisine, and Italian hospitality. Open daily for breakfast, brunch, and dinner.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "400 Ocean Drive",
        "addressLocality": "Miami Beach",
        "addressRegion": "FL",
        "postalCode": "33139",
        "addressCountry": "US"
      },
      "telephone": "+1-305-538-5529",
      "url": "https://localhouse.com/restaurants-near-me-miami-beach",
      "servesCuisine": ["Italian", "Mediterranean", "Seafood"],
      "priceRange": "$$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "16:00",
          "description": "Brunch service"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "16:00",
          "closes": "22:00",
          "description": "Dinner service"
        }
      ],
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
            <source srcSet="/images/restaurant-interior.webp" type="image/webp" />
            <img
              src="/images/restaurant-interior.jpg"
              alt="Restaurant interior"
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
            Best Restaurant Near You in Miami Beach
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-10 text-white/90"
          >
            Award-winning cuisine on Ocean Drive with 4.9-star ratings and Italian hospitality
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
              Reserve Your Table
            </a>
            <Link href="/restaurant">
              <span className="px-8 py-4 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-[#FF8F75] transition-all duration-300 inline-block">
                View Menu →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-[#666] leading-relaxed mb-8">
            When you search "restaurants near me" in Miami Beach, you're looking for more than just food—you're looking for an experience. The Local House, located at 400 Ocean Drive in the heart of South of Fifth (SoFi), offers exactly that: award-winning cuisine, ocean views, and authentic Italian hospitality.
          </p>
          <p className="text-lg text-[#666] leading-relaxed">
            Whether you're a local seeking your new favorite spot or a traveler exploring Miami Beach, we welcome you with fresh coastal ingredients, craft cocktails, and a passion for creating unforgettable memories.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] text-center mb-16">
            Why The Local House is Miami Beach's Best Restaurant
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold text-[#FF8F75] mb-3">{item.title}</h3>
                <p className="text-[#666] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] text-center mb-16">
            Signature Dishes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {menuHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-l-4 border-[#FF8F75] pl-6 py-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#4C5254]">{item.name}</h3>
                  <span className="text-[#FF8F75] font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-[#666]">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/restaurant">
              <span className="inline-block px-8 py-4 bg-[#FF8F75] text-white font-bold rounded hover:bg-[#e67c63] transition-all duration-300 text-lg">
                View Full Menu
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] text-center mb-12">
            📍 Easy to Find From Anywhere
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <p className="text-lg text-[#666] leading-relaxed mb-8">
              Located at 400 Ocean Drive in South of Fifth (SoFi), The Local House is incredibly convenient whether you're staying nearby, exploring the Art Deco District, or just looking for the best restaurant in Miami Beach.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-[#f9f9f9] rounded">
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
          Stop Searching "Restaurants Near Me"
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          The Local House is Miami Beach's #1 rated restaurant with award-winning cuisine, ocean views, and Italian hospitality. Open daily for breakfast, brunch, and dinner.
        </p>
        <a
          href="https://order.toasttab.com/online/the-local-house"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => gtag_report_conversion('https://order.toasttab.com/online/the-local-house')}
          className="inline-block px-8 py-4 bg-white text-[#FF8F75] font-bold rounded hover:bg-gray-100 transition-all duration-300 text-lg"
        >
          Book Your Table Today
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
