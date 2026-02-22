import { useEffect } from "react";
import { useLocation } from "wouter";

/*
 * Google Analytics 4 Integration
 * Tracks page views, events, and conversions for The Local House
 * 
 * To activate: Replace GA_MEASUREMENT_ID with your actual GA4 ID (G-XXXXXXXXXX)
 */

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-BP0ZN45DWG";

// Declare gtag on window
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export function initGA() {
  if (typeof window === "undefined") return;
  
  // Add gtag script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

// Track page views
export function trackPageView(url: string, title?: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
  });
}

// Track custom events
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("event", eventName, eventParams);
}

// Pre-defined conversion events for The Local House
export const AnalyticsEvents = {
  // Booking Events
  BOOK_TABLE_CLICK: () => trackEvent("book_table_click", {
    event_category: "conversion",
    event_label: "OpenTable Reservation",
  }),
  
  BOOK_ROOM_CLICK: () => trackEvent("book_room_click", {
    event_category: "conversion",
    event_label: "Mews Hotel Booking",
  }),
  
  // Contact Events
  WHATSAPP_CLICK: () => trackEvent("whatsapp_click", {
    event_category: "contact",
    event_label: "WhatsApp Chat",
  }),
  
  PHONE_CLICK: () => trackEvent("phone_click", {
    event_category: "contact",
    event_label: "Phone Call",
  }),
  
  EMAIL_CLICK: () => trackEvent("email_click", {
    event_category: "contact",
    event_label: "Email Contact",
  }),
  
  // Engagement Events
  MENU_VIEW: (menuType: string) => trackEvent("menu_view", {
    event_category: "engagement",
    event_label: menuType,
  }),
  
  GALLERY_VIEW: () => trackEvent("gallery_view", {
    event_category: "engagement",
    event_label: "Photo Gallery",
  }),
  
  BLOG_READ: (articleTitle: string) => trackEvent("blog_read", {
    event_category: "engagement",
    event_label: articleTitle,
  }),
  
  // Review Platform Clicks
  TRIPADVISOR_CLICK: () => trackEvent("review_platform_click", {
    event_category: "social_proof",
    event_label: "TripAdvisor",
  }),
  
  GOOGLE_REVIEWS_CLICK: () => trackEvent("review_platform_click", {
    event_category: "social_proof",
    event_label: "Google Reviews",
  }),
  
  // Newsletter
  NEWSLETTER_SIGNUP: () => trackEvent("newsletter_signup", {
    event_category: "conversion",
    event_label: "Email Subscription",
  }),
};

// Analytics Provider Component
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  // Initialize GA on mount
  useEffect(() => {
    initGA();
  }, []);

  // Track page views on route change
  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return <>{children}</>;
}

export default AnalyticsProvider;
