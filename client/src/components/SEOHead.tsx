import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "restaurant" | "hotel";
  twitterCard?: "summary" | "summary_large_image";
  noindex?: boolean;
  schema?: Record<string, any>;
  titleEs?: string;
  descriptionEs?: string;
  keywordsEs?: string;
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/images/restaurant-interior.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noindex = false,
  schema,
  titleEs,
  descriptionEs,
  keywordsEs,
}: SEOHeadProps) {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === "es";

  // Use Spanish overrides when available and language is Spanish
  const activeTitle = isSpanish && titleEs ? titleEs : title;
  const activeDescription = isSpanish && descriptionEs ? descriptionEs : description;
  const activeKeywords = isSpanish && keywordsEs ? keywordsEs : keywords;

  useEffect(() => {
    // Update document title
    document.title = activeTitle;

    // Update html lang attribute
    document.documentElement.lang = isSpanish ? "es" : "en";

    // Helper function to update or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Helper function to update or create link tags
    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        if (hreflang) link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Basic Meta Tags
    setMetaTag("description", activeDescription);
    if (activeKeywords) {
      setMetaTag("keywords", activeKeywords);
    }
    if (noindex) {
      setMetaTag("robots", "noindex, nofollow");
    } else {
      setMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    }

    // Canonical URL
    if (canonicalUrl) {
      setLinkTag("canonical", canonicalUrl);
    }

    // Dynamic hreflang tags based on current page
    if (canonicalUrl) {
      setLinkTag("alternate", canonicalUrl, "en");
      setLinkTag("alternate", canonicalUrl + "?lng=es", "es");
      setLinkTag("alternate", canonicalUrl, "x-default");
    }

    // Open Graph Tags
    setMetaTag("og:title", activeTitle, true);
    setMetaTag("og:description", activeDescription, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:image", ogImage.startsWith("http") ? ogImage : `https://www.localhouse.com${ogImage}`, true);
    setMetaTag("og:image:width", "1200", true);
    setMetaTag("og:image:height", "630", true);
    setMetaTag("og:site_name", "The Local House", true);
    setMetaTag("og:locale", isSpanish ? "es_ES" : "en_US", true);
    setMetaTag("og:locale:alternate", isSpanish ? "en_US" : "es_ES", true);
    if (canonicalUrl) {
      setMetaTag("og:url", canonicalUrl, true);
    }

    // Twitter Card Tags
    setMetaTag("twitter:card", twitterCard);
    setMetaTag("twitter:title", activeTitle);
    setMetaTag("twitter:description", activeDescription);
    setMetaTag("twitter:image", ogImage.startsWith("http") ? ogImage : `https://www.localhouse.com${ogImage}`);
    setMetaTag("twitter:site", "@thelocalhouse");

    // Additional SEO Tags
    setMetaTag("author", "The Local House");
    setMetaTag("geo.region", "US-FL");
    setMetaTag("geo.placename", "Miami Beach");
    setMetaTag("geo.position", "25.7682;-80.1300");
    setMetaTag("ICBM", "25.7682, -80.1300");

    // Language and locale - dynamic
    setMetaTag("language", isSpanish ? "Spanish" : "English");
    setMetaTag("content-language", isSpanish ? "es" : "en-US");

    // Mobile optimization
    setMetaTag("format-detection", "telephone=yes");
    setMetaTag("apple-mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-status-bar-style", "default");
    setMetaTag("apple-mobile-web-app-title", "The Local House");

    // Structured Data (Schema.org)
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      if (script) {
        script.textContent = JSON.stringify(schema);
      }
    }

  }, [activeTitle, activeDescription, activeKeywords, canonicalUrl, ogImage, ogType, twitterCard, noindex, schema, isSpanish]);

  return null;
}

// Pre-defined SEO configurations for each page
// Review Schema for Google Rich Results (4.9 stars)
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "ratingCount": "2500",
  "bestRating": "5",
  "worstRating": "1",
};

// FAQ Schema for Google Rich Results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is The Local House located in Miami Beach?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're located at 400 Ocean Drive in the heart of South of Fifth (SoFi), Miami Beach's most exclusive neighborhood. Just steps from the beach, South Pointe Park, and a 15-minute drive from Miami International Airport."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best brunch in South Beach Miami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Local House has been voted #1 Brunch in South Beach by locals and visitors. Our famous Lobster Eggs Benedict ($33), fluffy buttermilk pancakes, and signature mimosas have earned us a 4.9-star rating from over 2,500 guests."
      }
    },
    {
      "@type": "Question",
      "name": "What time is check-in and check-out at The Local House?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are available upon request, subject to availability. Book directly for complimentary late checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Is parking available at The Local House hotel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, valet parking is available for $45/night. We also partner with nearby parking garages for self-parking options starting at $25/day."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a hotel reservation to eat at The Local House restaurant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No! Our restaurant is open to everyone. We recommend making reservations through OpenTable, especially for weekend brunch (8AM-4PM daily). Walk-ins are welcome but tables fill up fast."
      }
    },
    {
      "@type": "Question",
      "name": "What are The Local House brunch hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brunch is served daily from 8:00 AM to 4:00 PM. Our dinner service runs from 4:00 PM to 10:00 PM. The bar stays open until midnight on weekends."
      }
    },
    {
      "@type": "Question",
      "name": "Is The Local House pet-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The hotel is NOT pet-friendly. However, our restaurant IS pet-friendly on the outdoor patio only. Please call us at +1 305-538-5529 for details."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cancellation policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We require 72 hours notice prior to arrival for cancellations. Cancellations made within 72 hours of arrival will be charged the full rate."
      }
    }
  ]
};

export const seoConfigs = {
  home: {
    title: "The Local House | Boutique Hotel & Best Breakfast Brunch in South Beach Miami",
    description: "Boutique hotel & best breakfast brunch in South Beach Miami Beach. Famous Lobster Eggs Benedict, craft cocktails, rooftop pool, Ocean Drive rooms. Voted #1 brunch by locals. Italian-owned since 2012. Book hotel or table now!",
    keywords: "boutique hotel miami beach, best breakfast south beach, best brunch miami beach, breakfast near me, brunch near me, ocean drive hotel, south beach hotel, lobster eggs benedict, rooftop pool miami beach",
    titleEs: "The Local House | Hotel Boutique y Mejor Brunch en South Beach Miami",
    descriptionEs: "Hotel boutique y el mejor brunch en South Beach Miami Beach. Famoso Lobster Eggs Benedict, cócteles artesanales, piscina en la azotea, habitaciones en Ocean Drive. Votado #1 brunch por locales. Propiedad italiana desde 2012.",
    keywordsEs: "hotel boutique miami beach, mejor brunch miami beach, desayuno miami beach, restaurante ocean drive, hotel south beach, lobster eggs benedict, piscina azotea miami beach",
    canonicalUrl: "https://www.localhouse.com/",
    ogImage: "/images/restaurant-interior.jpg",
    ogType: "website" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "The Local House",
      "image": "https://www.localhouse.com/images/og-home.jpg",
      "description": "Voted best breakfast & brunch in South Beach. Famous Lobster Eggs Benedict, boutique hotel on Ocean Drive. Italian-owned since 2012. Rooftop pool, ocean views, Mediterranean cuisine.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "400 Ocean Drive",
        "addressLocality": "Miami Beach",
        "addressRegion": "FL",
        "postalCode": "33139",
        "addressCountry": "US"
      },
      "telephone": "+1-305-538-5529",
      "url": "https://www.localhouse.com/",
      "priceRange": "$$$",
      "servesCuisine": ["Mediterranean", "Italian", "American", "Seafood", "Brunch"],
      "mealServed": ["breakfast", "brunch", "lunch", "dinner"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2500",
        "bestRating": "5"
      }
    }
  },
  hotel: {
    title: "Boutique Hotel & Best Hotel Brunch Miami Beach | Ocean Drive | The Local House",
    description: "Boutique Art Deco hotel with Miami's best hotel brunch at 400 Ocean Drive, South of Fifth. Ocean view rooms from $199, rooftop pool, famous Lobster Eggs Benedict brunch daily. Italian-owned since 2012. Book direct for best rates.",
    keywords: "best hotel brunch miami, boutique hotel miami beach, local house hotel, local house hotel miami, the local house hotel, ocean drive hotel, south of fifth hotel, miami beach hotel rooftop pool, art deco hotel miami beach, boutique hotels miami local cuisine, hotel brunch miami beach",
    titleEs: "Hotel Boutique y Mejor Brunch de Hotel Miami Beach | Ocean Drive | The Local House",
    descriptionEs: "Hotel boutique Art Deco con el mejor brunch de hotel en Miami en 400 Ocean Drive, South of Fifth. Habitaciones con vista al mar desde $199, piscina en la azotea, famoso brunch Lobster Eggs Benedict diario. Reserva directo.",
    keywordsEs: "mejor brunch hotel miami, hotel boutique miami beach, hotel ocean drive, hotel south of fifth, hotel miami beach piscina azotea, hotel art deco miami beach, the local house hotel",
    canonicalUrl: "https://www.localhouse.com/hotel",
    ogImage: "/images/hotel-hero.jpg",
    ogType: "hotel" as const,
    schema: {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "The Local House",
      "url": "https://www.localhouse.com/hotel",
      "telephone": "+1-305-538-5529",
      "email": "info@localhouse.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "400 Ocean Drive",
        "addressLocality": "Miami Beach",
        "addressRegion": "FL",
        "postalCode": "33139",
        "addressCountry": "US"
      },
      "starRating": {
        "@type": "Rating",
        "ratingValue": "4.9",
        "bestRating": "5"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2500",
        "bestRating": "5"
      },
      "image": "https://www.localhouse.com/images/og-hotel.jpg",
      "priceRange": "$$$",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Rooftop Pool"},
        {"@type": "LocationFeatureSpecification", "name": "Ocean Views"},
        {"@type": "LocationFeatureSpecification", "name": "Free WiFi"},
        {"@type": "LocationFeatureSpecification", "name": "Reserved Beach Chairs & Umbrella"},
        {"@type": "LocationFeatureSpecification", "name": "Restaurant"},
        {"@type": "LocationFeatureSpecification", "name": "Bar"},
        {"@type": "LocationFeatureSpecification", "name": "Apple TV in Every Room"}
      ]
    },
  },
  restaurant: {
    title: "Ocean Drive Restaurant & Bar Miami Beach | Best Brunch & Dinner | The Local House",
    description: "Top-rated Ocean Drive restaurant in Miami Beach. Famous Lobster Eggs Benedict brunch, fresh seafood dinner, craft cocktails. Open daily 8AM-10PM. Reserve on OpenTable.",
    keywords: "ocean drive restaurant, ocean drive restaurant miami beach, ocean drive restaurants miami, best brunch restaurant south beach, miami beach restaurant, seafood, craft cocktails, lobster eggs benedict",
    titleEs: "Restaurante y Bar en Ocean Drive Miami Beach | Mejor Brunch y Cena | The Local House",
    descriptionEs: "Restaurante top en Ocean Drive, Miami Beach. Famoso brunch con Lobster Eggs Benedict, cena de mariscos frescos, cócteles artesanales. Abierto todos los días 8AM-10PM. Reserva en OpenTable.",
    keywordsEs: "restaurante ocean drive, restaurante miami beach, mejor brunch south beach, restaurante mariscos miami, cócteles artesanales miami, lobster eggs benedict",
    canonicalUrl: "https://www.localhouse.com/restaurant",
    ogImage: "/images/outside-terrace.jpg",
    ogType: "restaurant" as const,
    schema: faqSchema,
  },
  brunch: {
    title: "Best Brunch & Breakfast Miami Beach | #1 on Ocean Drive | The Local House",
    description: "Voted #1 brunch & breakfast in Miami Beach. Famous Lobster Eggs Benedict ($33), craft cocktails & stunning Ocean Drive views. Served daily 8AM-4PM. Walk-ins welcome or reserve on OpenTable.",
    keywords: "best brunch miami beach, best breakfast miami beach, brunch miami beach, breakfast ocean drive, ocean drive breakfast, best breakfast south beach, brunch south beach, south beach brunch, breakfast near me miami, lobster eggs benedict, mimosas, weekend brunch miami beach, sunday brunch miami beach, brunch ocean drive, brunch near me miami beach, breakfast miami south beach",
    titleEs: "Mejor Brunch y Desayuno en Miami Beach | #1 en Ocean Drive | The Local House",
    descriptionEs: "Votado #1 brunch y desayuno en Miami Beach. Famoso Lobster Eggs Benedict ($33), cócteles artesanales y vistas a Ocean Drive. Servido diariamente 8AM-4PM. Reserva en OpenTable.",
    keywordsEs: "mejor brunch miami beach, brunch miami beach, brunch south beach, desayuno miami beach, lobster eggs benedict, mimosas, brunch domingo miami beach, brunch ocean drive, reservaciones brunch miami beach",
    canonicalUrl: "https://www.localhouse.com/brunch",
    ogImage: "/images/brunch-spread.jpg",
    ogType: "restaurant" as const,
    schema: faqSchema,
  },
  gallery: {
    title: "Photos | The Local House Miami Beach | Rooms, Brunch, Rooftop Pool & Ocean Drive",
    description: "See The Local House: Art Deco hotel rooms, famous Lobster Eggs Benedict brunch, rooftop pool, Ocean Drive terrace dining. 400 Ocean Drive, South of Fifth Miami Beach.",
    keywords: "the local house photos, local house miami beach gallery, ocean drive hotel photos, miami beach brunch photos, rooftop pool miami beach",
    titleEs: "Fotos | The Local House Miami Beach | Habitaciones, Brunch, Piscina y Ocean Drive",
    descriptionEs: "Descubre The Local House: habitaciones Art Deco, famoso brunch Lobster Eggs Benedict, piscina en la azotea, terraza en Ocean Drive. 400 Ocean Drive, South of Fifth Miami Beach.",
    keywordsEs: "fotos the local house, galería local house miami beach, fotos hotel ocean drive, fotos brunch miami beach, piscina azotea miami beach",
    canonicalUrl: "https://www.localhouse.com/gallery",
    ogImage: "/images/gallery-restaurant.jpg",
    ogType: "website" as const,
    schema: reviewSchema,
  },
  contact: {
    title: "Contact & Hours | The Local House | 400 Ocean Drive Miami Beach",
    description: "The Local House — 400 Ocean Drive, Miami Beach FL 33139. Brunch daily 8AM-4PM, Dinner Wed-Sun. Call (305) 538-5529, WhatsApp, or book on OpenTable. Hotel reservations & private events.",
    keywords: "the local house contact, local house miami beach phone, 400 ocean drive miami beach, local house hours, local house reservations, miami beach restaurant hours, local house hotel reservations",
    titleEs: "Contacto y Horarios | The Local House | 400 Ocean Drive Miami Beach",
    descriptionEs: "The Local House — 400 Ocean Drive, Miami Beach FL 33139. Brunch todos los días 8AM-4PM, Cena Mié-Dom. Llama al (305) 538-5529, WhatsApp, o reserva en OpenTable.",
    keywordsEs: "contacto the local house, teléfono local house miami beach, 400 ocean drive miami beach, horarios local house, reservaciones miami beach",
    canonicalUrl: "https://www.localhouse.com/contact",
    ogImage: "/images/ocean-drive.jpg",
    ogType: "website" as const,
    schema: faqSchema,
  },
  blog: {
    title: "Best Brunch South Beach, Ocean Drive Restaurants & Miami Beach Travel Tips | The Local House Blog",
    description: "Local guides to Miami Beach: best brunch spots, Ocean Drive dining, South of Fifth neighborhood secrets, boutique hotel tips & South Beach history. Written by The Local House team.",
    keywords: "best brunch south beach, miami beach breakfast spots, ocean drive restaurants, south of fifth guide, miami beach travel blog, south beach dining guide",
    titleEs: "Mejor Brunch South Beach, Restaurantes Ocean Drive y Tips de Miami Beach | Blog The Local House",
    descriptionEs: "Guías locales de Miami Beach: mejores lugares de brunch, restaurantes en Ocean Drive, secretos de South of Fifth, tips de hoteles boutique e historia de South Beach.",
    keywordsEs: "mejor brunch south beach, desayuno miami beach, restaurantes ocean drive, guía south of fifth, blog viajes miami beach, guía restaurantes south beach",
    canonicalUrl: "https://www.localhouse.com/blog",
    ogImage: "/images/gallery-tropical-dining.jpg",
    ogType: "website" as const,
    schema: reviewSchema,
  },
};

export default SEOHead;
