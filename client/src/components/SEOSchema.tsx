import { useEffect } from "react";

interface SEOSchemaProps {
  page: "home" | "hotel" | "restaurant" | "brunch" | "gallery" | "contact" | "blog";
}

export function SEOSchema({ page }: SEOSchemaProps) {
  useEffect(() => {
    // Remove any existing schema scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Create and inject schema based on page
    const schemas = getSchemas(page);
    schemas.forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [page]);

  return null;
}

function getSchemas(page: string) {
  const baseUrl = "https://www.localhouse.com";
  
  // Organization Schema (appears on all pages)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Local House",
    "url": baseUrl,
    "logo": `${baseUrl}/images/local-house-logo.png`,
    "description": "Boutique Hotel & Famous Brunch in South of Fifth, Miami Beach. Italian-owned since 2012.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "400 Ocean Drive",
      "addressLocality": "Miami Beach",
      "addressRegion": "FL",
      "postalCode": "33139",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-305-538-5529",
      "contactType": "reservations",
      "availableLanguage": ["English", "Spanish", "Italian"]
    },
    "sameAs": [
      "https://www.tripadvisor.com/Hotel_Review-g34439-d1449858-Reviews-The_Local_House-Miami_Beach_Florida.html",
      "https://www.opentable.com/the-local-house",
      "https://www.instagram.com/thelocalhouse",
      "https://www.facebook.com/localhousemiami"
    ],
    "foundingDate": "2012",
    "founder": {
      "@type": "Person",
      "nationality": "Italian"
    }
  };

  // Hotel Schema
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "The Local House",
    "description": "Boutique Art Deco hotel on Ocean Drive in South of Fifth, Miami Beach. Italian-owned since 2012, featuring famous brunch restaurant and rooftop pool.",
    "url": `${baseUrl}/hotel`,
    "image": [
      `${baseUrl}/images/deluxe-king-room.jpg`,
      `${baseUrl}/images/rooftop-pool.jpg`,
      `${baseUrl}/images/hotel-exterior.jpg`
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "400 Ocean Drive",
      "addressLocality": "Miami Beach",
      "addressRegion": "FL",
      "postalCode": "33139",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.7682",
      "longitude": "-80.1300"
    },
    "telephone": "+1-305-538-5529",
    "priceRange": "$$$",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Rooftop Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "On-site Restaurant", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Beach Access", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "24-Hour Front Desk", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Apple TV in Every Room", "value": true }
    ],
    "checkinTime": "15:00",
    "checkoutTime": "11:00",
    "numberOfRooms": "20",
    "petsAllowed": false,
    "availableLanguage": ["English", "Spanish", "Italian"],
    "paymentAccepted": "Cash, Credit Card",
    "currenciesAccepted": "USD"
  };

  // Restaurant Schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "The Local House",
    "description": "Famous brunch destination in South of Fifth, Miami Beach. Home of the legendary Lobster Eggs Benedict. Italian-owned since 2012.",
    "url": `${baseUrl}/restaurant`,
    "image": [
      `${baseUrl}/images/lobster-eggs-benedict.jpg`,
      `${baseUrl}/images/restaurant-interior.jpg`,
      `${baseUrl}/images/brunch-spread.jpg`
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "400 Ocean Drive",
      "addressLocality": "Miami Beach",
      "addressRegion": "FL",
      "postalCode": "33139",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.7682",
      "longitude": "-80.1300"
    },
    "telephone": "+1-305-538-5529",
    "priceRange": "$$",
    "servesCuisine": ["American", "Brunch", "Mediterranean", "Italian-inspired"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday"],
        "opens": "08:00",
        "closes": "16:00",
        "description": "Brunch only"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "23:00"
      }
    ],
    "acceptsReservations": true,
    "hasMenu": {
      "@type": "Menu",
      "name": "The Local House Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Brunch Favorites",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "name": "Lobster Eggs Benedict",
              "description": "Fresh Maine lobster, poached eggs, house-made hollandaise on toasted brioche",
              "offers": {
                "@type": "Offer",
                "price": "33",
                "priceCurrency": "USD"
              }
            },
            {
              "@type": "MenuItem",
              "name": "Avocado Toast",
              "description": "Smashed avocado, poached eggs, cherry tomatoes, microgreens on sourdough",
              "offers": {
                "@type": "Offer",
                "price": "18",
                "priceCurrency": "USD"
              }
            },
            {
              "@type": "MenuItem",
              "name": "French Toast",
              "description": "Brioche French toast, fresh berries, maple syrup, whipped cream",
              "offers": {
                "@type": "Offer",
                "price": "16",
                "priceCurrency": "USD"
              }
            }
          ]
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "The Lobster Eggs Benedict is absolutely divine! Best brunch in Miami Beach, hands down."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marco T."
        },
        "reviewBody": "Italian hospitality meets Miami vibes. The owner's passion shows in every detail."
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is The Local House known for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Local House is famous for its Lobster Eggs Benedict brunch, boutique Art Deco hotel rooms, and Italian hospitality. Located on Ocean Drive in South of Fifth, Miami Beach, it's been a local favorite since 2012."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a reservation for brunch at The Local House?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we highly recommend making reservations through OpenTable, especially for weekend brunch. Walk-ins are welcome but may experience wait times during peak hours."
        }
      },
      {
        "@type": "Question",
        "name": "What are the hotel room rates at The Local House?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Room rates start at $199/night for a Cozy Queen room and go up to $329/night for our Ocean View Suite. All rooms include access to our rooftop pool and complimentary WiFi."
        }
      },
      {
        "@type": "Question",
        "name": "Is The Local House restaurant open to non-hotel guests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our restaurant is open to all guests. We recommend making reservations through OpenTable, especially for weekend brunch."
        }
      },
      {
        "@type": "Question",
        "name": "What makes The Local House different from other Miami Beach hotels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Local House is Italian-owned since 2012, offering authentic European hospitality in a restored Art Deco building on Ocean Drive. Our famous brunch, rooftop pool with skyline views, and prime South of Fifth location make us unique."
        }
      },
      {
        "@type": "Question",
        "name": "Where is The Local House located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Local House is located at 400 Ocean Drive in the South of Fifth (SoFi) neighborhood of Miami Beach, FL 33139. We're steps from the beach and Lummus Park."
        }
      }
    ]
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Local House",
    "description": "Boutique Hotel & Famous Brunch in South of Fifth, Miami Beach. Italian-owned since 2012.",
    "url": baseUrl,
    "image": `${baseUrl}/images/local-house-exterior.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "400 Ocean Drive",
      "addressLocality": "Miami Beach",
      "addressRegion": "FL",
      "postalCode": "33139",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.7682",
      "longitude": "-80.1300"
    },
    "telephone": "+1-305-538-5529",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2500",
      "bestRating": "5"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday"],
        "opens": "08:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "23:00"
      }
    ],
    "hasMap": "https://maps.google.com/?q=The+Local+House+Miami+Beach",
    "areaServed": {
      "@type": "City",
      "name": "Miami Beach"
    }
  };

  // BreadcrumbList Schema
  const getBreadcrumbSchema = (pageName: string, pageUrl: string) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...(pageName !== "Home" ? [{
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": `${baseUrl}${pageUrl}`
      }] : [])
    ]
  });

  // Return schemas based on page
  switch (page) {
    case "home":
      return [organizationSchema, hotelSchema, restaurantSchema, faqSchema, localBusinessSchema, getBreadcrumbSchema("Home", "/")];
    case "hotel":
      return [organizationSchema, hotelSchema, getBreadcrumbSchema("Hotel", "/hotel")];
    case "restaurant":
      return [organizationSchema, restaurantSchema, getBreadcrumbSchema("Restaurant", "/restaurant")];
    case "brunch":
      return [organizationSchema, restaurantSchema, getBreadcrumbSchema("Brunch", "/brunch")];
    case "gallery":
      return [organizationSchema, getBreadcrumbSchema("Gallery", "/gallery")];
    case "contact":
      return [organizationSchema, localBusinessSchema, getBreadcrumbSchema("Contact", "/contact")];
    case "blog":
      return [organizationSchema, getBreadcrumbSchema("Blog", "/blog")];
    default:
      return [organizationSchema];
  }
}

export default SEOSchema;
