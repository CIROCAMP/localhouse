import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "wouter";

// Declare global tracking functions from index.html
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Music } from "lucide-react";
import NewsletterSignup from "./NewsletterSignup";

import { motion, AnimatePresence } from "framer-motion";

/*
 * Design: Miami Art Deco Revival
 * Layout component with sticky header navigation and footer
 * Colors: Coral (#FF8F75), Seafoam (#7FBFB3), Gold (#FF8F75), Cream (#FAF7F2)
 */

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/brunch", label: "Brunch" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/gallery", label: "Gallery" },
  { href: "/hotel", label: "Hotel" },
  { href: "/blog", label: "Blog" },
  { href: "/culture", label: "Culture" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <img
                src={isScrolled ? "/images/localhouse-logo-grey.png" : "/images/localhouse-logo-white.png"}
                alt="The Local House Miami"
                className="h-16 w-auto cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`text-sm font-medium tracking-wide transition-colors hover:text-[#FF8F75] ${
                      location === link.href
                        ? "text-[#FF8F75]"
                        : isScrolled
                        ? "text-[#4C5254]"
                        : "text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')}
                className="px-5 py-2.5 text-sm font-medium tracking-wide border-2 border-[#FF8F75] text-[#FF8F75] hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
              >
                Book a Table
              </a>
              <a
                href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.trackMewsClick?.()}
                className="px-5 py-2.5 text-sm font-medium tracking-wide bg-[#FF8F75] text-white hover:bg-[#e67c63] transition-all duration-300 rounded"
              >
                Book a Room
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 ${
                isScrolled ? "text-[#4C5254]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#FAF7F2] border-t border-[#E5DED5]"
            >
              <nav className="container py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`block text-lg font-medium py-2 ${
                        location === link.href
                          ? "text-[#FF8F75]"
                          : "text-[#4C5254]"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#E5DED5]">
                  <a
                    href="https://www.opentable.com/the-local-house"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')}
                    className="w-full py-3 text-center text-sm font-medium tracking-wide border-2 border-[#FF8F75] text-[#FF8F75] rounded"
                  >
                    Book a Table
                  </a>
                  <a
                    href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => window.trackMewsClick?.()}
                    className="w-full py-3 text-center text-sm font-medium tracking-wide bg-[#FF8F75] text-white rounded"
                  >
                    Book a Room
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#4C5254] text-white">
        {/* Main Footer */}
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img
                src="/images/localhouse-logo-white.png"
                alt="The Local House Miami"
                className="h-20 w-auto mb-6"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A boutique hotel and restaurant on Ocean Drive, Miami Beach.
                Unconditional hospitality since 2012.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs">
                  <span className="text-yellow-400">★</span> 4.9 Rating
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs">
                  🇮🇹 Italian-Owned
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full text-xs">
                  🏆 2025 Choice
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/thelocalhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#FF8F75] hover:text-[#FF8F75] transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/localhousemiami/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#FF8F75] hover:text-[#FF8F75] transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@thelocalhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#FF8F75] hover:text-[#FF8F75] transition-colors"
                >
                  <Music size={18} />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Hours</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[#FF8F75] font-medium mb-1">Front Desk</p>
                  <p className="text-gray-400">8:00 AM – 10:00 PM daily</p>
                </div>
                <div>
                  <p className="text-[#FF8F75] font-medium mb-1">Brunch</p>
                  <p className="text-gray-400">8:00 AM – 4:00 PM daily</p>
                </div>
                <div>
                  <p className="text-[#FF8F75] font-medium mb-1">Dinner</p>
                  <p className="text-gray-400">Wed-Sun 4:00 PM – 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Contact</h4>
              <div className="space-y-4 text-sm">
                <a
                  href="https://maps.google.com/?q=400+Ocean+Dr,+Miami+Beach,+FL+33139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#FF8F75]" />
                  <span>400 Ocean Dr,<br />Miami Beach, FL 33139</span>
                </a>
                <a
                  href="tel:+13055385529"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0 text-[#FF8F75]" />
                  <span>(305) 538-5529</span>
                </a>
                <a
                  href="mailto:info@localhouse.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={18} className="flex-shrink-0 text-[#FF8F75]" />
                  <span>info@localhouse.com</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6">Explore</h4>
              <nav className="space-y-3 text-sm">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <span className="block text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </Link>
                ))}
                <Link href="/private-events">
                  <span className="block text-gray-400 hover:text-white transition-colors">
                    Private Events
                  </span>
                </Link>
                <Link href="/press">
                  <span className="block text-gray-400 hover:text-white transition-colors">
                    Press & Awards
                  </span>
                </Link>
                <Link href="/local-spots">
                  <span className="block text-gray-400 hover:text-white transition-colors">
                    Things to Do Nearby
                  </span>
                </Link>
                <Link href="/leave-review">
                  <span className="block text-gray-400 hover:text-white transition-colors">
                    Leave a Review
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* Review Platforms Bar */}
        <div className="border-t border-gray-800 bg-[#252525]">
          <div className="container py-6">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <a
                href="https://www.tripadvisor.com/Hotel_Review-g34439-d1449858-Reviews-The_Local_House-Miami_Beach_Florida.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#00aa6c] transition-colors text-sm"
              >
                <span className="font-medium">TripAdvisor</span>
                <span className="text-yellow-400">★ 4.9</span>
              </a>
              <a
                href="https://share.google/0H2ptcjor9w7exBb0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#4285f4] transition-colors text-sm"
              >
                <span className="font-medium">Google Reviews</span>
                <span className="text-yellow-400">★ 4.8</span>
              </a>
              <a
                href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#da3743] transition-colors text-sm"
              >
                <span className="font-medium">OpenTable</span>
                <span className="text-yellow-400">★ 4.7</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} The Local House. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/contact">
                <span className="text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-500 hover:text-white transition-colors">
                  Terms of Service
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/13055385529"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="text-white" size={28} fill="white" />
      </a>
    </div>
  );
}
