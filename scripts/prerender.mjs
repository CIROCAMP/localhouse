/**
 * Prerender Script for LocalHouse
 *
 * Generates static HTML files for each route at build time so that
 * search engines (Googlebot) see real content, meta tags, and structured
 * data without needing to execute JavaScript.
 *
 * How it works:
 * 1. Reads the built dist/public/index.html (the SPA shell)
 * 2. For each known route, creates a modified HTML with:
 *    - Correct <title>, <meta description>, <meta keywords>
 *    - Correct <link rel="canonical">
 *    - Correct Open Graph and Twitter Card tags
 *    - Route-specific JSON-LD structured data
 *    - A <noscript> block with semantic HTML content for crawlers
 * 3. Writes to dist/public/{route}/index.html
 *
 * Vercel serves these files directly (e.g., /brunch → /brunch/index.html)
 * before falling back to the SPA catch-all rewrite.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "..", "dist", "public");
const BASE_URL = "https://www.localhouse.com";

// ============================================================
// SEO DATA PER ROUTE
// This mirrors the data from SEOHead.tsx and each page component.
// ============================================================

const routes = [
  {
    path: "/brunch",
    title: "Best Brunch Miami Beach | #1 South Beach Brunch | Lobster Eggs Benedict | The Local House",
    description: "Voted best brunch in Miami Beach & South Beach. Famous Lobster Eggs Benedict ($33), bottomless mimosas, Ocean Drive views. Open 8AM-4PM daily. Reserve on OpenTable.",
    keywords: "best brunch miami beach, brunch miami beach, best brunch south beach, brunch south beach, south beach brunch, breakfast near me miami, lobster eggs benedict, bottomless mimosas, weekend brunch miami beach",
    canonicalUrl: `${BASE_URL}/brunch`,
    ogImage: `${BASE_URL}/images/brunch-spread.jpg`,
    ogType: "restaurant",
    noscriptContent: `
      <h1>Best Brunch in Miami Beach</h1>
      <p>An Ocean Drive Tradition Since 2012. Voted best brunch in Miami Beach and South Beach.</p>
      <h2>Brunch Favorites</h2>
      <ul>
        <li>Lobster Eggs Benedict - $33 - Our signature dish: butter-poached lobster, perfectly poached eggs, silky hollandaise on toasted english muffin</li>
        <li>Fluffy Buttermilk Pancakes - $18 - Stack of fluffy pancakes with fresh seasonal berries, whipped cream, and pure maple syrup</li>
        <li>Breakfast Smash Burger - $22 - Wagyu beef patty, fried egg, crispy bacon, melted cheese on brioche bun</li>
        <li>Avocado Toast - $16 - Sourdough bread, smashed avocado, poached eggs, microgreens, everything seasoning</li>
        <li>French Toast - $19 - Thick-cut brioche dipped in vanilla custard, fresh berries, powdered sugar</li>
        <li>Lobster Roll - $38 - Butter-poached Maine lobster, toasted brioche roll, lemon aioli, chives</li>
      </ul>
      <h2>Signature Brunch Cocktails</h2>
      <ul>
        <li>Mimosa - $14 / $45 bottle - prosecco, cold pressed OJ</li>
        <li>Bloody Mary - $16 - homemade mix, bacon, olives</li>
        <li>Wake Me Up - $18 - vodka, baileys, espresso</li>
      </ul>
      <p>Daily 8AM - 4PM. Walk-ins welcome, reservations recommended.</p>
      <p>The Local House, 400 Ocean Drive, Miami Beach, FL 33139. Call (305) 538-5529.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "The Local House",
      "description": "Famous brunch destination in South of Fifth, Miami Beach. Home of the legendary Lobster Eggs Benedict. Italian-owned since 2012.",
      "url": `${BASE_URL}/brunch`,
      "image": [`${BASE_URL}/images/lobster-eggs-benedict.jpg`, `${BASE_URL}/images/brunch-spread.jpg`],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "400 Ocean Drive",
        "addressLocality": "Miami Beach",
        "addressRegion": "FL",
        "postalCode": "33139",
        "addressCountry": "US"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "25.7682", "longitude": "-80.1300" },
      "telephone": "+1-305-538-5529",
      "priceRange": "$$",
      "servesCuisine": ["American", "Brunch", "Mediterranean", "Italian-inspired"],
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "16:00" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2500", "bestRating": "5" },
      "hasMenu": {
        "@type": "Menu",
        "hasMenuSection": [{
          "@type": "MenuSection",
          "name": "Brunch Favorites",
          "hasMenuItem": [
            { "@type": "MenuItem", "name": "Lobster Eggs Benedict", "description": "Fresh Maine lobster, poached eggs, house-made hollandaise on toasted brioche", "offers": { "@type": "Offer", "price": "33", "priceCurrency": "USD" } },
            { "@type": "MenuItem", "name": "Avocado Toast", "description": "Smashed avocado, poached eggs, cherry tomatoes, microgreens on sourdough", "offers": { "@type": "Offer", "price": "18", "priceCurrency": "USD" } }
          ]
        }]
      }
    }
  },
  {
    path: "/restaurant",
    title: "Ocean Drive Restaurant & Bar Miami Beach | Best Brunch & Dinner | The Local House",
    description: "Top-rated Ocean Drive restaurant in Miami Beach. Famous Lobster Eggs Benedict brunch, fresh seafood dinner, craft cocktails. Open daily 8AM-10PM. Reserve on OpenTable.",
    keywords: "ocean drive restaurant, ocean drive restaurant miami beach, ocean drive restaurants miami, best brunch restaurant south beach, miami beach restaurant, seafood, craft cocktails, lobster eggs benedict",
    canonicalUrl: `${BASE_URL}/restaurant`,
    ogImage: `${BASE_URL}/images/outside-terrace.jpg`,
    ogType: "restaurant",
    noscriptContent: `
      <h1>Ocean Drive Restaurant & Bar</h1>
      <p>Top-rated restaurant on Ocean Drive in the heart of South of Fifth, Miami Beach. Famous for our Lobster Eggs Benedict brunch, fresh seafood dinner, and craft cocktails.</p>
      <h2>Hours</h2>
      <p>Brunch: Daily 8AM - 4PM</p>
      <p>Dinner: Wednesday-Sunday 4PM - 10PM</p>
      <h2>Menu Highlights</h2>
      <p>Lobster Eggs Benedict ($33), Avocado Toast ($16), Tuna Tartare ($21), Lobster Roll ($38), Fresh Oysters, Caesar Salad ($17)</p>
      <p>The Local House, 400 Ocean Drive, Miami Beach, FL 33139. Reservations: (305) 538-5529 or OpenTable.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "The Local House",
      "description": "Top-rated Ocean Drive restaurant. Famous brunch, fresh seafood dinner, craft cocktails. Italian-owned since 2012.",
      "url": `${BASE_URL}/restaurant`,
      "image": `${BASE_URL}/images/outside-terrace.jpg`,
      "address": { "@type": "PostalAddress", "streetAddress": "400 Ocean Drive", "addressLocality": "Miami Beach", "addressRegion": "FL", "postalCode": "33139", "addressCountry": "US" },
      "telephone": "+1-305-538-5529",
      "priceRange": "$$",
      "servesCuisine": ["American", "Brunch", "Mediterranean", "Seafood"],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2500", "bestRating": "5" },
      "acceptsReservations": true
    }
  },
  {
    path: "/hotel",
    title: "Luxury Boutique Hotel Rooms in Miami Beach | Ocean View Suites | The Local House",
    description: "Luxury hotel rooms in Miami Beach with ocean views. Modern boutique suites, free WiFi, rooftop bar. Book directly for best rates. From $199/night.",
    keywords: "Miami Beach hotel, Ocean Drive rooms, boutique hotel, Art Deco, rooftop pool, luxury hotel Miami Beach",
    canonicalUrl: `${BASE_URL}/hotel`,
    ogImage: `${BASE_URL}/images/hotel-hero.jpg`,
    ogType: "hotel",
    noscriptContent: `
      <h1>Boutique Hotel on Ocean Drive, Miami Beach</h1>
      <p>Luxury boutique hotel rooms with ocean views in the heart of South of Fifth, Miami Beach. Modern Art Deco suites, rooftop pool, free WiFi. Italian-owned since 2012.</p>
      <h2>Room Types</h2>
      <ul>
        <li>Cozy Queen - From $199/night</li>
        <li>Deluxe King - From $249/night</li>
        <li>Ocean View Suite - From $329/night</li>
      </ul>
      <h2>Hotel Amenities</h2>
      <p>Rooftop Pool, Ocean Views, Free WiFi, Beach Access, On-site Restaurant & Bar, 24-Hour Front Desk</p>
      <p>Check-in: 3:00 PM | Check-out: 11:00 AM</p>
      <p>The Local House, 400 Ocean Drive, Miami Beach, FL 33139. Call (305) 538-5529.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Hotel",
      "name": "The Local House",
      "url": `${BASE_URL}/hotel`,
      "image": `${BASE_URL}/images/hotel-hero.jpg`,
      "address": { "@type": "PostalAddress", "streetAddress": "400 Ocean Drive", "addressLocality": "Miami Beach", "addressRegion": "FL", "postalCode": "33139", "addressCountry": "US" },
      "telephone": "+1-305-538-5529",
      "priceRange": "$$$",
      "starRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2500", "bestRating": "5" },
      "checkinTime": "15:00",
      "checkoutTime": "11:00",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Rooftop Pool" },
        { "@type": "LocationFeatureSpecification", "name": "Ocean Views" },
        { "@type": "LocationFeatureSpecification", "name": "Free WiFi" },
        { "@type": "LocationFeatureSpecification", "name": "Beach Access" },
        { "@type": "LocationFeatureSpecification", "name": "Restaurant" }
      ]
    }
  },
  {
    path: "/gallery",
    title: "Photo Gallery | The Local House | Miami Beach Boutique Hotel",
    description: "Explore The Local House: Art Deco rooms, rooftop pool, famous brunch dishes, Ocean Drive views. Italian elegance meets Miami vibes.",
    keywords: "hotel photos, Miami Beach gallery, Ocean Drive, boutique hotel images, brunch photos",
    canonicalUrl: `${BASE_URL}/gallery`,
    ogImage: `${BASE_URL}/images/gallery-restaurant.jpg`,
    ogType: "website",
    noscriptContent: `
      <h1>The Local House Photo Gallery</h1>
      <p>Explore our boutique hotel, famous brunch, rooftop pool, and Ocean Drive dining. Art Deco elegance meets Miami Beach vibes.</p>
      <p>The Local House, 400 Ocean Drive, Miami Beach, FL 33139.</p>
    `
  },
  {
    path: "/contact",
    title: "Contact Us | Reservations | The Local House Miami Beach",
    description: "Contact The Local House at 400 Ocean Drive, Miami Beach. Call +1 305-538-5529 or WhatsApp for reservations and inquiries.",
    keywords: "contact, reservations, Miami Beach hotel, book brunch, Ocean Drive",
    canonicalUrl: `${BASE_URL}/contact`,
    ogImage: `${BASE_URL}/images/ocean-drive.jpg`,
    ogType: "website",
    noscriptContent: `
      <h1>Contact The Local House</h1>
      <p>Address: 400 Ocean Drive, Miami Beach, FL 33139</p>
      <p>Phone: (305) 538-5529</p>
      <p>Email: info@localhouse.com</p>
      <p>Brunch: Daily 8AM - 4PM | Dinner: Wed-Sun 4PM - 10PM</p>
      <p>Make a reservation on OpenTable or call us directly.</p>
    `
  },
  {
    path: "/blog",
    title: "Miami Beach Travel Blog | Local Tips | The Local House",
    description: "Insider tips for Miami Beach: best restaurants, beaches, nightlife, hidden gems in South of Fifth. Your guide to the perfect Miami vacation.",
    keywords: "Miami Beach blog, travel tips, restaurants, South Beach, Ocean Drive guide",
    canonicalUrl: `${BASE_URL}/blog`,
    ogImage: `${BASE_URL}/images/gallery-tropical-dining.jpg`,
    ogType: "website",
    noscriptContent: `
      <h1>The Local Journal - Miami Beach Travel Blog</h1>
      <p>Insider tips for Miami Beach from The Local House.</p>
      <ul>
        <li><a href="/blog/best-brunch-miami-beach-2025">The Ultimate Guide to the Best Brunch in Miami Beach (2025)</a></li>
        <li><a href="/blog/south-of-fifth-neighborhood-guide">South of Fifth (SoFi): Miami Beach's Most Exclusive Neighborhood</a></li>
        <li><a href="/blog/ocean-drive-restaurants-guide">Ocean Drive Dining: Where to Eat on Miami's Most Famous Street</a></li>
        <li><a href="/blog/boutique-hotels-miami-beach">Why Boutique Hotels Offer the Best Miami Beach Experience</a></li>
        <li><a href="/blog/the-history-of-south-beach-miami">The History of South Beach Miami: From Mangroves to Art Deco Paradise</a></li>
      </ul>
    `
  },
  {
    path: "/culture",
    title: "Our Story & Culture | The Local House | Italian Hospitality Since 2012",
    description: "Discover the story behind The Local House. Italian-owned boutique hotel and restaurant on Ocean Drive, Miami Beach since 2012. Our values, history, and passion for hospitality.",
    keywords: "the local house story, italian restaurant miami beach, boutique hotel culture, ocean drive history, south of fifth miami",
    canonicalUrl: `${BASE_URL}/culture`,
    ogImage: `${BASE_URL}/images/restaurant-interior.jpg`,
    ogType: "website",
    noscriptContent: `
      <h1>Our Story & Culture</h1>
      <p>The Local House has been Italian-owned and operated since 2012. An Italian real estate investor fell in love with this Ocean Drive property and dedicated years of passion to create a space where authentic European hospitality meets Miami Beach vibes.</p>
      <p>400 Ocean Drive, South of Fifth, Miami Beach, FL 33139.</p>
    `
  },
  {
    path: "/press",
    title: "Press & Awards | The Local House Miami Beach",
    description: "Discover why The Local House has been featured in Miami New Times, Eater Miami, Travel + Leisure, and more. Award-winning boutique hotel and famous brunch on Ocean Drive.",
    keywords: "The Local House press, Miami Beach hotel awards, best brunch Miami awards, Ocean Drive restaurant reviews, TripAdvisor Travelers Choice Miami",
    canonicalUrl: `${BASE_URL}/press`,
    ogImage: `${BASE_URL}/images/restaurant-interior.jpg`,
    ogType: "website",
    noscriptContent: `
      <h1>Press & Awards</h1>
      <p>The Local House has been featured in Miami New Times, Eater Miami, Travel + Leisure, and more. Award-winning boutique hotel and famous brunch on Ocean Drive, Miami Beach.</p>
    `
  },
  {
    path: "/private-events",
    title: "Private Events & Private Dining Miami Beach | Weddings, Corporate | The Local House",
    description: "Host your private event at The Local House on Ocean Drive, Miami Beach. Birthday celebrations, corporate events, rehearsal dinners, private brunch. Up to 60 guests. Call (305) 538-5529.",
    keywords: "private events miami beach, private dining ocean drive, wedding venue south beach, corporate events miami, rehearsal dinner miami beach, birthday brunch miami",
    canonicalUrl: `${BASE_URL}/private-events`,
    ogImage: `${BASE_URL}/images/restaurant-interior.jpg`,
    ogType: "website",
    noscriptContent: `
      <h1>Private Events & Private Dining</h1>
      <p>Host your private event at The Local House on Ocean Drive, Miami Beach. Birthday celebrations, corporate events, rehearsal dinners, private brunch. Capacity up to 60 guests.</p>
      <p>Contact us at (305) 538-5529 or info@localhouse.com to plan your event.</p>
    `
  },
  {
    path: "/local-spots",
    title: "Things to Do Near The Local House | South of Fifth Miami Beach Guide",
    description: "Discover the best things to do in South of Fifth (SoFi), Miami Beach. Beaches, restaurants, shopping, and attractions within walking distance of The Local House on Ocean Drive.",
    keywords: "things to do miami beach, south of fifth guide, sofi miami beach, near ocean drive, miami beach attractions, south beach activities",
    canonicalUrl: `${BASE_URL}/local-spots`,
    ogImage: `${BASE_URL}/images/restaurant-interior.jpg`,
    ogType: "website",
    noscriptContent: `
      <h1>Things to Do Near The Local House</h1>
      <p>Discover the best things to do in South of Fifth (SoFi), Miami Beach. Beaches, restaurants, shopping, and attractions all within walking distance.</p>
    `
  },
  {
    path: "/leave-review",
    title: "Leave a Review | The Local House Miami Beach",
    description: "Share your experience at The Local House. Leave a Google review or tag us on social media.",
    keywords: "",
    canonicalUrl: `${BASE_URL}/leave-review`,
    ogImage: `${BASE_URL}/images/restaurant-interior.jpg`,
    ogType: "website",
    noindex: true,
    noscriptContent: `
      <h1>Leave a Review</h1>
      <p>Share your experience at The Local House. We'd love to hear from you!</p>
    `
  },
  {
    path: "/brunch-near-me-miami-beach",
    title: "Best Brunch Near Me Miami Beach | The Local House SoFi",
    description: "Searching for brunch near me in Miami Beach? The Local House on Ocean Drive serves the #1 rated brunch daily 8AM-4PM. Reserve your table now!",
    keywords: "brunch near me, brunch near me miami beach, best brunch miami beach, brunch sofi, ocean drive brunch, miami beach breakfast",
    canonicalUrl: `${BASE_URL}/brunch-near-me-miami-beach`,
    ogImage: `${BASE_URL}/images/og-brunch.jpg`,
    ogType: "restaurant",
    noscriptContent: `
      <h1>Looking for Brunch Near You? You Found It.</h1>
      <p>The Local House serves Miami Beach's #1 rated brunch daily from 8AM-4PM at 400 Ocean Drive in South of Fifth.</p>
      <h2>Why We're the #1 Brunch Near You</h2>
      <ul>
        <li>Famous Lobster Eggs Benedict - $33</li>
        <li>Prime Ocean Drive Location - 400 Ocean Drive, SoFi</li>
        <li>Daily Brunch Service - 7 days a week, 8AM-4PM</li>
        <li>4.9 Rating from 2,500+ guests</li>
        <li>Italian-Owned Since 2012</li>
        <li>Bottomless Mimosas Available</li>
      </ul>
      <p>The Local House, 400 Ocean Drive, Miami Beach, FL 33139. Call (305) 538-5529.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "The Local House",
      "image": `${BASE_URL}/images/og-brunch.jpg`,
      "description": "Best brunch near Miami Beach. Voted #1 rated brunch with famous Lobster Eggs Benedict, bottomless mimosas, and ocean views.",
      "address": { "@type": "PostalAddress", "streetAddress": "400 Ocean Drive", "addressLocality": "Miami Beach", "addressRegion": "FL", "postalCode": "33139", "addressCountry": "US" },
      "telephone": "+1-305-538-5529",
      "url": `${BASE_URL}/brunch-near-me-miami-beach`,
      "servesCuisine": "Italian, Mediterranean, Coastal",
      "priceRange": "$$",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2500", "bestRating": "5" }
    }
  },
  {
    path: "/restaurants-near-me-miami-beach",
    title: "Best Restaurant Near Me Miami Beach | The Local House Ocean Drive",
    description: "Looking for restaurants near me in Miami Beach? The Local House on Ocean Drive offers award-winning brunch, fresh seafood, and Italian hospitality. Open daily. Reserve now!",
    keywords: "restaurants near me, restaurants near me miami beach, ocean drive restaurant, miami beach dining, seafood restaurant, best restaurant miami beach",
    canonicalUrl: `${BASE_URL}/restaurants-near-me-miami-beach`,
    ogImage: `${BASE_URL}/images/og-restaurant.jpg`,
    ogType: "restaurant",
    noscriptContent: `
      <h1>Best Restaurant Near You in Miami Beach</h1>
      <p>The Local House on Ocean Drive offers award-winning brunch, fresh seafood, and Italian hospitality. Open daily.</p>
      <p>400 Ocean Drive, South of Fifth, Miami Beach, FL 33139. Call (305) 538-5529.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "The Local House",
      "image": `${BASE_URL}/images/og-restaurant.jpg`,
      "description": "Award-winning restaurant on Ocean Drive with fresh seafood, Mediterranean cuisine, and Italian hospitality.",
      "address": { "@type": "PostalAddress", "streetAddress": "400 Ocean Drive", "addressLocality": "Miami Beach", "addressRegion": "FL", "postalCode": "33139", "addressCountry": "US" },
      "telephone": "+1-305-538-5529",
      "url": `${BASE_URL}/restaurants-near-me-miami-beach`,
      "servesCuisine": ["Italian", "Mediterranean", "Seafood"],
      "priceRange": "$$$",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2500", "bestRating": "5" }
    }
  },
  // Blog posts
  {
    path: "/blog/best-brunch-miami-beach-2025",
    title: "The Ultimate Guide to the Best Brunch in Miami Beach (2025) | The Local House",
    description: "Why The Local House has been voted South Beach's favorite brunch destination. Our guide to the best brunch in Miami Beach with famous Lobster Eggs Benedict.",
    keywords: "best brunch miami beach 2025, brunch guide miami, south beach brunch, lobster eggs benedict, miami beach food guide",
    canonicalUrl: `${BASE_URL}/blog/best-brunch-miami-beach-2025`,
    ogImage: `${BASE_URL}/images/brunch-spread.jpg`,
    ogType: "article",
    noscriptContent: `
      <h1>The Ultimate Guide to the Best Brunch in Miami Beach (2025)</h1>
      <p>Why The Local House Has Been Voted South Beach's Favorite Brunch Destination</p>
      <p>When it comes to brunch in Miami Beach, the options can feel overwhelming. From trendy spots on Lincoln Road to beachfront cafes along Ocean Drive, South Beach is a brunch lover's paradise. But if you're looking for the best brunch in Miami Beach, locals and visitors alike agree: The Local House stands above the rest.</p>
      <p>Located at 400 Ocean Drive in the heart of South of Fifth (SoFi), The Local House has been serving Miami Beach's most beloved brunch since 2012.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Ultimate Guide to the Best Brunch in Miami Beach (2025)",
      "author": { "@type": "Organization", "name": "The Local House" },
      "datePublished": "2025-12-28",
      "publisher": { "@type": "Organization", "name": "The Local House", "url": BASE_URL },
      "image": `${BASE_URL}/images/brunch-spread.jpg`
    }
  },
  {
    path: "/blog/south-of-fifth-neighborhood-guide",
    title: "South of Fifth (SoFi): Miami Beach's Most Exclusive Neighborhood | The Local House",
    description: "Your complete guide to South of Fifth Miami Beach. Restaurants, beaches, hotels, and hidden gems in SoFi - Miami's best-kept secret.",
    keywords: "south of fifth miami beach, sofi miami, south of fifth guide, sofi neighborhood, miami beach neighborhoods",
    canonicalUrl: `${BASE_URL}/blog/south-of-fifth-neighborhood-guide`,
    ogImage: `${BASE_URL}/images/gallery-tropical-dining.jpg`,
    ogType: "article",
    noscriptContent: `
      <h1>South of Fifth (SoFi): Miami Beach's Most Exclusive Neighborhood</h1>
      <p>Your Complete Guide to Miami's Best-Kept Secret. Discover restaurants, beaches, hotels, and hidden gems in the South of Fifth neighborhood of Miami Beach.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "South of Fifth (SoFi): Miami Beach's Most Exclusive Neighborhood",
      "author": { "@type": "Organization", "name": "The Local House" },
      "datePublished": "2025-12-20",
      "publisher": { "@type": "Organization", "name": "The Local House", "url": BASE_URL }
    }
  },
  {
    path: "/blog/ocean-drive-restaurants-guide",
    title: "Ocean Drive Dining: Where to Eat on Miami's Most Famous Street | The Local House",
    description: "A local's guide to the best restaurants on Ocean Drive, Miami Beach. From brunch spots to seafood dinners, find the perfect Ocean Drive dining experience.",
    keywords: "ocean drive restaurants, where to eat ocean drive, ocean drive dining, miami beach restaurants, south beach restaurants",
    canonicalUrl: `${BASE_URL}/blog/ocean-drive-restaurants-guide`,
    ogImage: `${BASE_URL}/images/gallery-tropical-dining.jpg`,
    ogType: "article",
    noscriptContent: `
      <h1>Ocean Drive Dining: Where to Eat on Miami's Most Famous Street</h1>
      <p>A Local's Guide to the Best Restaurants on Ocean Drive, Miami Beach.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Ocean Drive Dining: Where to Eat on Miami's Most Famous Street",
      "author": { "@type": "Organization", "name": "The Local House" },
      "datePublished": "2025-12-15",
      "publisher": { "@type": "Organization", "name": "The Local House", "url": BASE_URL }
    }
  },
  {
    path: "/blog/boutique-hotels-miami-beach",
    title: "Why Boutique Hotels Offer the Best Miami Beach Experience | The Local House",
    description: "Large resorts vs. intimate properties: making the right choice for your Miami Beach vacation. Why boutique hotels like The Local House offer a superior experience.",
    keywords: "boutique hotels miami beach, best hotels miami beach, small hotels south beach, boutique hotel vs resort, miami beach accommodation",
    canonicalUrl: `${BASE_URL}/blog/boutique-hotels-miami-beach`,
    ogImage: `${BASE_URL}/images/gallery-tropical-dining.jpg`,
    ogType: "article",
    noscriptContent: `
      <h1>Why Boutique Hotels Offer the Best Miami Beach Experience</h1>
      <p>Large Resorts vs. Intimate Properties: Making the Right Choice for your Miami Beach vacation.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Why Boutique Hotels Offer the Best Miami Beach Experience",
      "author": { "@type": "Organization", "name": "The Local House" },
      "datePublished": "2025-12-10",
      "publisher": { "@type": "Organization", "name": "The Local House", "url": BASE_URL }
    }
  },
  {
    path: "/blog/the-history-of-south-beach-miami",
    title: "The History of South Beach Miami: From Mangroves to Art Deco Paradise | The Local House",
    description: "How a swampy barrier island became America's Riviera. The fascinating history of South Beach Miami from its earliest days to the Art Deco revival.",
    keywords: "history south beach miami, south beach history, art deco miami beach, miami beach history, south beach evolution",
    canonicalUrl: `${BASE_URL}/blog/the-history-of-south-beach-miami`,
    ogImage: `${BASE_URL}/images/gallery-tropical-dining.jpg`,
    ogType: "article",
    noscriptContent: `
      <h1>The History of South Beach Miami: From Mangroves to Art Deco Paradise</h1>
      <p>How a Swampy Barrier Island Became America's Riviera. The fascinating history of South Beach Miami.</p>
    `,
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The History of South Beach Miami: From Mangroves to Art Deco Paradise",
      "author": { "@type": "Organization", "name": "The Local House" },
      "datePublished": "2026-01-07",
      "publisher": { "@type": "Organization", "name": "The Local House", "url": BASE_URL }
    }
  },
];

// ============================================================
// HTML GENERATION
// ============================================================

function generateHtml(template, route) {
  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );

  // Replace meta name="title"
  html = html.replace(
    /<meta name="title" content="[^"]*" \/>/,
    `<meta name="title" content="${route.title}" />`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace meta keywords
  if (route.keywords) {
    html = html.replace(
      /<meta name="keywords" content="[^"]*" \/>/,
      `<meta name="keywords" content="${route.keywords}" />`
    );
  }

  // Replace robots meta if noindex
  if (route.noindex) {
    html = html.replace(
      /<meta name="robots" content="[^"]*" \/>/,
      `<meta name="robots" content="noindex, nofollow" />`
    );
  }

  // Insert or replace canonical URL
  if (html.match(/<link rel="canonical" href="[^"]*" \/>/)) {
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${route.canonicalUrl}" />`
    );
  } else {
    // Canonical was removed from template — insert it before robots meta or before </head>
    const insertPoint = html.match(/<meta name="robots"/)
      ? /<meta name="robots"/
      : /<\/head>/;
    html = html.replace(
      insertPoint,
      `<link rel="canonical" href="${route.canonicalUrl}" />\n    ${html.match(insertPoint)[0]}`
    );
  }

  // Replace Open Graph tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${route.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${route.description}" />`
  );
  if (route.ogType) {
    html = html.replace(
      /<meta property="og:type" content="[^"]*" \/>/,
      `<meta property="og:type" content="${route.ogType}" />`
    );
  }
  if (route.ogImage) {
    html = html.replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      `<meta property="og:image" content="${route.ogImage}" />`
    );
    html = html.replace(
      /<meta property="og:image:secure_url" content="[^"]*" \/>/,
      `<meta property="og:image:secure_url" content="${route.ogImage}" />`
    );
  }

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*" \/>/,
    `<meta name="twitter:url" content="${route.canonicalUrl}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  if (route.ogImage) {
    html = html.replace(
      /<meta name="twitter:image" content="[^"]*" \/>/,
      `<meta name="twitter:image" content="${route.ogImage}" />`
    );
  }

  // Add route-specific JSON-LD schema (before closing </head>)
  if (route.schema) {
    const schemaScript = `\n    <!-- Prerendered Route-Specific Schema -->\n    <script type="application/ld+json">\n    ${JSON.stringify(route.schema, null, 2).split('\n').join('\n    ')}\n    </script>`;
    html = html.replace('</head>', `${schemaScript}\n  </head>`);
  }

  // Add noscript content with semantic HTML inside <div id="root">
  // This ensures crawlers that don't execute JS still see meaningful content
  if (route.noscriptContent) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"><noscript>${route.noscriptContent.trim()}</noscript></div>`
    );
  }

  return html;
}

// ============================================================
// MAIN
// ============================================================

function main() {
  const templatePath = path.join(DIST_DIR, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error("ERROR: dist/public/index.html not found. Run 'vite build' first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");
  let count = 0;

  for (const route of routes) {
    const routeDir = path.join(DIST_DIR, route.path);
    fs.mkdirSync(routeDir, { recursive: true });

    const html = generateHtml(template, route);
    const outputPath = path.join(routeDir, "index.html");
    fs.writeFileSync(outputPath, html, "utf-8");
    count++;
    console.log(`  ✓ ${route.path}/index.html`);
  }

  console.log(`\nPrerendered ${count} routes successfully.`);
}

console.log("Prerendering static HTML for SEO...\n");
main();
