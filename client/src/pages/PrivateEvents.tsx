import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, Users, Utensils, Wine, Music, Camera } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export default function PrivateEvents() {
  return (
    <div className="min-h-screen bg-cream">
      <SEOHead
        title="Private Events & Private Dining Miami Beach | Weddings, Corporate | The Local House"
        description="Host your private event at The Local House on Ocean Drive, Miami Beach. Birthday celebrations, corporate events, rehearsal dinners, private brunch. Up to 60 guests. Call (305) 538-5529."
        keywords="private events miami beach, private dining ocean drive, wedding venue south beach, corporate events miami, rehearsal dinner miami beach, birthday brunch miami"
        canonicalUrl="https://www.localhouse.com/private-events"
      />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-coral/90 rounded-full text-sm font-medium mb-6">
            🎉 Celebrate With Us
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            Private Events & Dining on Ocean Drive, Miami Beach
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Host your special occasion at The Local House. From intimate gatherings to grand celebrations.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-charcoal mb-4">Perfect For Every Occasion</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              Whether you're planning a birthday brunch, corporate event, or wedding celebration, we'll create an unforgettable experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: "Birthday Celebrations", desc: "Make your special day memorable with our signature brunch experience" },
              { icon: Users, title: "Corporate Events", desc: "Impress clients and colleagues with oceanfront dining" },
              { icon: Wine, title: "Rehearsal Dinners", desc: "Intimate setting for pre-wedding celebrations" },
              { icon: Utensils, title: "Private Brunch", desc: "Exclusive brunch service for your group" },
              { icon: Music, title: "Cocktail Parties", desc: "Evening events with craft cocktails and appetizers" },
              { icon: Camera, title: "Photo Shoots", desc: "Our Art Deco setting makes the perfect backdrop" },
            ].map((event, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <event.icon className="w-8 h-8 text-coral" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">{event.title}</h3>
                  <p className="text-charcoal/70">{event.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Details */}
      <section className="py-20 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-charcoal mb-6">Our Spaces</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="font-semibold text-charcoal text-lg">Main Dining Room</h3>
                  <p className="text-charcoal/70">Up to 60 guests • Full buyout available</p>
                </div>
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="font-semibold text-charcoal text-lg">Private Balcony</h3>
                  <p className="text-charcoal/70">Up to 20 guests • Ocean views</p>
                </div>
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="font-semibold text-charcoal text-lg">Rooftop Terrace</h3>
                  <p className="text-charcoal/70">Up to 40 guests • Sunset cocktails</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-cream rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2">What's Included</h4>
                <ul className="text-charcoal/70 space-y-2">
                  <li>✓ Customized menu options</li>
                  <li>✓ Dedicated event coordinator</li>
                  <li>✓ A/V equipment available</li>
                  <li>✓ Flexible seating arrangements</li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Private dining setup"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-coral text-white p-6 rounded-xl shadow-xl">
                <p className="font-display text-3xl">Since</p>
                <p className="font-display text-4xl">2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Ready to Plan Your Event?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact our events team to discuss your vision. We'll work with you to create a customized experience for your guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                Contact Us
              </Button>
            </Link>
            <a href="tel:+13055385529">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                Call (305) 538-5529
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
