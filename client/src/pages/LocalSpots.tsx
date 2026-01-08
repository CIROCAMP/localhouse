import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Coffee, Waves, ShoppingBag, Utensils, Camera } from "lucide-react";

const spots = [
  {
    category: "Beaches",
    icon: Waves,
    places: [
      { name: "South Pointe Park Beach", distance: "2 min walk", desc: "Pristine beach with stunning views of Fisher Island" },
      { name: "Lummus Park Beach", distance: "5 min walk", desc: "Iconic Miami Beach with lifeguard stands" },
      { name: "South Beach", distance: "3 min walk", desc: "World-famous beach and boardwalk" },
    ]
  },
  {
    category: "Coffee & Breakfast",
    icon: Coffee,
    places: [
      { name: "Panther Coffee", distance: "10 min walk", desc: "Local roaster with excellent espresso" },
      { name: "A La Folie", distance: "8 min walk", desc: "French café with amazing crepes" },
      { name: "Threefold Café", distance: "15 min drive", desc: "Australian-style brunch spot" },
    ]
  },
  {
    category: "Shopping",
    icon: ShoppingBag,
    places: [
      { name: "Lincoln Road Mall", distance: "10 min walk", desc: "Pedestrian shopping promenade" },
      { name: "Española Way", distance: "12 min walk", desc: "Charming European-style street" },
      { name: "Sunset Harbour", distance: "15 min walk", desc: "Trendy shops and boutiques" },
    ]
  },
  {
    category: "Dining",
    icon: Utensils,
    places: [
      { name: "Joe's Stone Crab", distance: "5 min walk", desc: "Iconic Miami seafood institution" },
      { name: "Prime 112", distance: "3 min walk", desc: "Celebrity steakhouse" },
      { name: "Juvia", distance: "10 min walk", desc: "Rooftop dining with city views" },
    ]
  },
  {
    category: "Attractions",
    icon: Camera,
    places: [
      { name: "Art Deco Historic District", distance: "Walking distance", desc: "Iconic 1930s architecture" },
      { name: "South Pointe Park Pier", distance: "5 min walk", desc: "Watch cruise ships pass by" },
      { name: "Miami Beach Botanical Garden", distance: "15 min walk", desc: "Urban oasis with tropical plants" },
    ]
  },
];

export default function LocalSpots() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-coral/90 rounded-full text-sm font-medium mb-6">
            📍 Explore the Neighborhood
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            Local Spots
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Discover the best of South of Fifth, Miami Beach. Our favorite places within walking distance.
          </p>
        </div>
      </section>

      {/* Location Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-coral mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">400 Ocean Drive, Miami Beach</span>
          </div>
          <h2 className="font-display text-3xl text-charcoal mb-4">
            In the Heart of South of Fifth
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            South of Fifth (SoFi) is Miami Beach's most exclusive neighborhood. Known for its quieter beaches, 
            upscale dining, and stunning Art Deco architecture, it's the perfect base for exploring Miami.
          </p>
        </div>
      </section>

      {/* Spots by Category */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          {spots.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-coral" />
                </div>
                <h2 className="font-display text-3xl text-charcoal">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.places.map((place, placeIndex) => (
                  <Card key={placeIndex} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-charcoal text-lg mb-1">{place.name}</h3>
                      <p className="text-coral text-sm mb-3">{place.distance}</p>
                      <p className="text-charcoal/70 text-sm">{place.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">Stay With Us</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Experience the best of South Beach from our boutique hotel. Start your day with our famous brunch, 
            then explore all these amazing spots just steps away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hotel">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                View Rooms
              </Button>
            </Link>
            <Link href="/brunch">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                Famous Brunch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
