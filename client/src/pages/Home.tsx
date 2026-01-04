import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { getLoginUrl } from "@/const";

/**
 * The Local House - Homepage
 * Elegant & Timeless Design
 * Placeholder: This page will be redesigned with the elegant design system
 */

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy to-charcoal">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/restaurant-interior.jpg"
            alt="The Local House"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold mb-6">
            The Local House
          </h1>
          <p className="text-2xl font-light mb-8 text-white/90">
            Boutique Hotel & Famous Brunch in South of Fifth, Miami Beach
          </p>
          <p className="text-lg mb-10 text-gold">
            Where Locals Gather, Travelers Belong
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-navy font-semibold rounded hover:bg-white transition-colors"
            >
              Book a Table
            </a>
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors"
            >
              Book a Room
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-navy mb-4">
              Where Locals Gather, Travelers Belong
            </h2>
            <p className="text-lg text-charcoal/70">
              Italian-owned & operated since 2012
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/80 leading-relaxed mb-6">
              In 2012, an Italian real estate investor discovered a weathered Art Deco building 
              at 400 Ocean Drive. What others saw as a property needing work, he saw potential, 
              character, and a soul waiting to be awakened.
            </p>
            <p className="text-charcoal/80 leading-relaxed mb-6">
              Today, The Local House stands as a testament to that vision: a boutique hotel 
              where Italian warmth meets Miami vibrancy, where every guest is treated like family, 
              and where the famous brunch has become a beloved tradition for locals and travelers alike.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-y border-gold/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-gold mb-2">4.9</div>
              <p className="text-charcoal/70">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-gold mb-2">2,500+</div>
              <p className="text-charcoal/70">Guest Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-gold mb-2">2025</div>
              <p className="text-charcoal/70">Travelers' Choice</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-gold mb-2">#1</div>
              <p className="text-charcoal/70">Brunch in SoFi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Experience The Local House
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Discover why travelers from around the world choose us
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g34439-d1449858-Reviews-The_Local_House-Miami_Beach_Florida.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gold text-navy font-semibold rounded hover:bg-white transition-colors"
            >
              Read Reviews
            </a>
            <a
              href="https://share.google/0H2ptcjor9w7exBb0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gold text-gold font-semibold rounded hover:bg-gold hover:text-navy transition-colors"
            >
              Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-navy mb-6">
            Get in Touch
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-semibold text-navy mb-2">Address</p>
              <p className="text-charcoal/70">400 Ocean Drive<br />Miami Beach, FL 33139</p>
            </div>
            <div>
              <p className="font-semibold text-navy mb-2">Phone</p>
              <a href="tel:+13055385529" className="text-gold hover:text-navy">
                (305) 538-5529
              </a>
            </div>
            <div>
              <p className="font-semibold text-navy mb-2">Email</p>
              <a href="mailto:info@localhouse.com" className="text-gold hover:text-navy">
                info@localhouse.com
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/13055385529"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-navy font-semibold rounded hover:bg-navy hover:text-gold transition-colors"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2024 The Local House. Italian-owned since 2012.
          </p>
          <p className="text-white/50 text-sm mt-2">
            400 Ocean Drive, Miami Beach, FL 33139
          </p>
        </div>
      </footer>
    </div>
  );
}
