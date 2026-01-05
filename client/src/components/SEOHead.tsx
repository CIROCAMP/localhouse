import { useEffect } from "react";

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
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/images/og-default.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noindex = false,
  schema,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

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
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Basic Meta Tags
    setMetaTag("description", description);
    if (keywords) {
      setMetaTag("keywords", keywords);
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

    // Open Graph Tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:image", ogImage.startsWith("http") ? ogImage : `https://localhouse.com${ogImage}`, true);
    setMetaTag("og:image:width", "1200", true);
    setMetaTag("og:image:height", "630", true);
    setMetaTag("og:site_name", "The Local House", true);
    setMetaTag("og:locale", "en_US", true);
    if (canonicalUrl) {
      setMetaTag("og:url", canonicalUrl, true);
    }

    // Twitter Card Tags
    setMetaTag("twitter:card", twitterCard);
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage.startsWith("http") ? ogImage : `https://localhouse.com${ogImage}`);
    setMetaTag("twitter:site", "@thelocalhouse");

    // Additional SEO Tags
    setMetaTag("author", "The Local House");
    setMetaTag("geo.region", "US-FL");
    setMetaTag("geo.placename", "Miami Beach");
    setMetaTag("geo.position", "25.7682;-80.1300");
    setMetaTag("ICBM", "25.7682, -80.1300");

    // Language and locale
    setMetaTag("language", "English");
    setMetaTag("content-language", "en-US");

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

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, noindex, schema]);

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
        "text": "The Local House has been voted #1 Brunch in South Beach by locals and visitors. Our famous Lobster Eggs Benedict ($28), fluffy buttermilk pancakes, and signature mimosas have earned us a 4.9-star rating from over 2,500 guests."
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
        "text": "Brunch is served daily from 8:00 AM to 4:00 PM. Our dinner service runs from 6:00 PM to 11:00 PM. The bar stays open until midnight on weekends."
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
    title: "The Local House | Boutique Hotel & Famous Brunch | Miami Beach",
    description: "Boutique hotel on Ocean Drive with legendary Lobster Eggs Benedict brunch. Rooftop pool, Art Deco design, Italian hospitality. Book direct for best rates.",
    keywords: "Miami Beach hotel, best brunch, Ocean Drive, boutique hotel, Lobster Eggs Benedict",
    canonicalUrl: "https://localhouse.com",
    ogImage: "/images/og-home.jpg",
    ogType: "website" as const,
    schema: reviewSchema,
  },
  hotel: {
    title: "Boutique Hotel Rooms | Ocean Drive Views | The Local House Miami Beach",
    description: "Unique rooms from $199/night with Ocean Drive views, Art Deco design, rooftop pool. Italian hospitality in South of Fifth. Free WiFi, beach access.",
    keywords: "Miami Beach hotel, Ocean Drive rooms, boutique hotel, Art Deco, rooftop pool",
    canonicalUrl: "https://localhouse.com/hotel",
    ogImage: "/images/og-hotel.jpg",
    ogType: "hotel" as const,
    schema: reviewSchema,
  },
  restaurant: {
    title: "Restaurant & Bar | Ocean Drive Dining | The Local House Miami Beach",
    description: "Award-winning Ocean Drive restaurant with fresh seafood, craft cocktails, Mediterranean cuisine. Open breakfast, lunch & dinner. Book via OpenTable.",
    keywords: "Ocean Drive restaurant, Miami Beach dining, seafood, craft cocktails, Mediterranean",
    canonicalUrl: "https://localhouse.com/restaurant",
    ogImage: "/images/og-restaurant.jpg",
    ogType: "restaurant" as const,
    schema: faqSchema,
  },
  brunch: {
    title: "Best Brunch Miami Beach | Lobster Eggs Benedict | The Local House",
    description: "Voted #1 brunch in South of Fifth. Legendary Lobster Eggs Benedict, bottomless mimosas, Ocean Drive views. Weekend reservations recommended.",
    keywords: "best brunch Miami Beach, Lobster Eggs Benedict, bottomless mimosas, brunch South Beach, weekend brunch",
    canonicalUrl: "https://localhouse.com/brunch",
    ogImage: "/images/og-brunch.jpg",
    ogType: "restaurant" as const,
    schema: faqSchema,
  },
  gallery: {
    title: "Photo Gallery | The Local House | Miami Beach Boutique Hotel",
    description: "Explore The Local House: Art Deco rooms, rooftop pool, famous brunch dishes, Ocean Drive views. Italian elegance meets Miami vibes.",
    keywords: "hotel photos, Miami Beach gallery, Ocean Drive, boutique hotel images, brunch photos",
    canonicalUrl: "https://localhouse.com/gallery",
    ogImage: "/images/og-gallery.jpg",
    ogType: "website" as const,
    schema: reviewSchema,
  },
  contact: {
    title: "Contact Us | Reservations | The Local House Miami Beach",
    description: "Contact The Local House at 400 Ocean Drive, Miami Beach. Call +1 305-538-5529 or WhatsApp for reservations and inquiries.",
    keywords: "contact, reservations, Miami Beach hotel, book brunch, Ocean Drive",
    canonicalUrl: "https://localhouse.com/contact",
    ogImage: "/images/og-contact.jpg",
    ogType: "website" as const,
    schema: faqSchema,
  },
  blog: {
    title: "Miami Beach Travel Blog | Local Tips | The Local House",
    description: "Insider tips for Miami Beach: best restaurants, beaches, nightlife, hidden gems in South of Fifth. Your guide to the perfect Miami vacation.",
    keywords: "Miami Beach blog, travel tips, restaurants, South Beach, Ocean Drive guide",
    canonicalUrl: "https://localhouse.com/blog",
    ogImage: "/images/og-blog.jpg",
    ogType: "website" as const,
    schema: reviewSchema,
  },
};

export default SEOHead;
