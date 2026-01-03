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

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, twitterCard, noindex]);

  return null;
}

// Pre-defined SEO configurations for each page
export const seoConfigs = {
  home: {
    title: "The Local House | Boutique Hotel & Famous Brunch | Miami Beach",
    description: "Italian-owned boutique hotel on Ocean Drive since 2012. Home of the legendary Lobster Eggs Benedict. Rooftop pool, Art Deco charm, steps from South Beach. Book direct for best rates.",
    keywords: "Miami Beach hotel, boutique hotel Miami, Ocean Drive hotel, best brunch Miami Beach, Lobster Eggs Benedict, South of Fifth hotel, SoFi Miami, Italian hotel Miami, rooftop pool Miami",
    canonicalUrl: "https://localhouse.com",
    ogImage: "/images/og-home.jpg",
    ogType: "website" as const,
  },
  hotel: {
    title: "Boutique Hotel Rooms | Ocean Drive Views | The Local House Miami Beach",
    description: "4 unique room types from $199/night. Ocean Drive views, Art Deco design, rooftop pool. Italian hospitality in South of Fifth. Free WiFi, beach access, famous brunch included.",
    keywords: "Miami Beach hotel rooms, Ocean Drive hotel, boutique hotel Miami, South of Fifth accommodation, Art Deco hotel, rooftop pool hotel Miami, SoFi Miami hotel",
    canonicalUrl: "https://localhouse.com/hotel",
    ogImage: "/images/og-hotel.jpg",
    ogType: "hotel" as const,
  },
  restaurant: {
    title: "Restaurant & Bar | Ocean Drive Dining | The Local House Miami Beach",
    description: "Award-winning restaurant on Ocean Drive. Fresh seafood, craft cocktails, Mediterranean-inspired cuisine. Open for breakfast, lunch & dinner. Reservations via OpenTable.",
    keywords: "Ocean Drive restaurant, Miami Beach dining, best restaurant South Beach, seafood Miami Beach, craft cocktails Miami, Mediterranean restaurant Miami",
    canonicalUrl: "https://localhouse.com/restaurant",
    ogImage: "/images/og-restaurant.jpg",
    ogType: "restaurant" as const,
  },
  brunch: {
    title: "Best Brunch Miami Beach | Lobster Eggs Benedict | The Local House",
    description: "Voted #1 brunch in South of Fifth. Try our legendary Lobster Eggs Benedict, bottomless mimosas, and Ocean Drive views. Weekend reservations recommended. Book on OpenTable.",
    keywords: "best brunch Miami Beach, Lobster Eggs Benedict, brunch South Beach, bottomless mimosas Miami, weekend brunch Miami, brunch Ocean Drive, SoFi brunch",
    canonicalUrl: "https://localhouse.com/brunch",
    ogImage: "/images/og-brunch.jpg",
    ogType: "restaurant" as const,
  },
  gallery: {
    title: "Photo Gallery | The Local House | Miami Beach Boutique Hotel",
    description: "Explore The Local House through our gallery. See our Art Deco rooms, rooftop pool, famous brunch dishes, and Ocean Drive views. Italian elegance meets Miami vibes.",
    keywords: "The Local House photos, Miami Beach hotel gallery, Ocean Drive hotel photos, boutique hotel Miami images, brunch photos Miami",
    canonicalUrl: "https://localhouse.com/gallery",
    ogImage: "/images/og-gallery.jpg",
    ogType: "website" as const,
  },
  contact: {
    title: "Contact Us | Reservations | The Local House Miami Beach",
    description: "Contact The Local House at 400 Ocean Drive, Miami Beach. Call +1 305-538-5529 or WhatsApp for reservations. Hotel bookings, restaurant reservations, and inquiries.",
    keywords: "The Local House contact, Miami Beach hotel reservations, Ocean Drive hotel phone, book brunch Miami Beach, hotel booking South Beach",
    canonicalUrl: "https://localhouse.com/contact",
    ogImage: "/images/og-contact.jpg",
    ogType: "website" as const,
  },
  blog: {
    title: "Miami Beach Travel Blog | Local Tips | The Local House",
    description: "Insider tips for Miami Beach from The Local House. Best restaurants, beaches, nightlife, and hidden gems in South of Fifth. Your guide to the perfect Miami vacation.",
    keywords: "Miami Beach blog, South Beach travel tips, SoFi Miami guide, best restaurants Miami Beach, Miami Beach insider tips, Ocean Drive guide",
    canonicalUrl: "https://localhouse.com/blog",
    ogImage: "/images/og-blog.jpg",
    ogType: "website" as const,
  },
};

export default SEOHead;
