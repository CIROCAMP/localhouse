import { motion } from "framer-motion";
import { Clock, Phone, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Restaurant page with menus and reservation info
 */

const cocktails = [
  { name: "Sister Margarita", price: 16, description: "tequila, passion fruit, agave, lime, tajin" },
  { name: "Down The Rabbit Hole", price: 16, description: "bourbon, strawberries, fresh mint, ginger ale" },
  { name: "Wake Me Up", price: 18, description: "vodka, baileys, espresso, agave, mini pancakes" },
  { name: "Tropical Garden", price: 16, description: "gin, fresh watermelon, elderflower, rosemary" },
  { name: "Bloody Mary", price: 16, description: "homemade mix, celery, bacon, olives, jalapeño" },
  { name: "Kiwi Crush", price: 18, description: "vodka, kiwi, agave, lemon juice, elderflower" },
  { name: "Meet Me At 4th & Ocean", price: 17, description: "tequila, fresh watermelon, agave, lime juice" },
  { name: "Mimosa", price: 14, description: "prosecco, cold pressed OJ (bottle $45)" },
];

const brunchItems = [
  { name: "Lobster Eggs Benedict", price: 32, description: "poached eggs, lobster, hollandaise, english muffin" },
  { name: "Fluffy Pancakes", price: 18, description: "buttermilk pancakes, fresh berries, maple syrup" },
  { name: "Avocado Toast", price: 16, description: "sourdough, smashed avocado, poached eggs, microgreens" },
  { name: "Breakfast Smash Burger", price: 22, description: "wagyu beef, fried egg, bacon, cheese, brioche bun" },
  { name: "French Toast", price: 19, description: "brioche, vanilla custard, fresh berries, whipped cream" },
  { name: "Veggie Egg White Omelette", price: 18, description: "egg whites, seasonal vegetables, goat cheese" },
  { name: "Lobster Roll", price: 38, description: "butter-poached lobster, brioche roll, lemon aioli" },
  { name: "Goat Cheese Croquettes", price: 14, description: "crispy fried, honey drizzle, arugula" },
];

const dinnerItems = [
  { name: "Tuna Tartare", price: 24, description: "sushi-grade tuna, avocado, sesame, wonton crisps" },
  { name: "Grilled Octopus", price: 28, description: "charred octopus, fingerling potatoes, chimichurri" },
  { name: "Pan-Seared Salmon", price: 36, description: "atlantic salmon, quinoa, roasted vegetables" },
  { name: "Filet Mignon", price: 52, description: "8oz filet, truffle mashed potatoes, red wine reduction" },
  { name: "Seafood Linguine", price: 38, description: "shrimp, mussels, clams, white wine garlic sauce" },
  { name: "Grilled Branzino", price: 42, description: "whole fish, lemon, capers, olive oil" },
];

const wines = [
  { name: "Santa Margherita Prosecco", price: 15, priceBottle: 57 },
  { name: "Whispering Angel Rosé", price: 17, priceBottle: 69 },
  { name: "Veuve Clicquot", price: null, priceBottle: 140 },
  { name: "Erste+Neue Pinot Grigio", price: 16, priceBottle: 53 },
  { name: "Justin Cabernet Sauvignon", price: 17, priceBottle: null },
  { name: "Jadot Beaujolais", price: 15, priceBottle: 45 },
];

export default function Restaurant() {
  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.restaurant} />
      <SEOSchema page="restaurant" />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/outside-terrace.jpg"
            alt="The Local House Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-4">
              Restaurant & Bar
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Coastal cuisine crafted with fresh, local ingredients on Ocean Drive
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hours & Reservation */}
      <section className="py-12 bg-white border-b border-[#E5DED5]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <Clock className="text-[#FF8F75]" size={20} />
                <div>
                  <p className="text-sm text-[#999]">Brunch</p>
                  <p className="font-medium text-[#4C5254]">8AM – 4PM daily</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#FF8F75]" size={20} />
                <div>
                  <p className="text-sm text-[#999]">Dinner</p>
                  <p className="font-medium text-[#4C5254]">6PM – 11PM (Closed Mondays)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#FF8F75]" size={20} />
                <div>
                  <p className="text-sm text-[#999]">Reservations</p>
                  <a href="tel:+13055385529" className="font-medium text-[#4C5254] hover:text-[#FF8F75]">
                    (305) 538-5529
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
            >
              Reserve on OpenTable
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              Our Menu
            </h2>
            <p className="text-lg text-[#666]">
              Fresh seafood, craft cocktails, and Miami's most famous brunch
            </p>
          </div>

          <Tabs defaultValue="brunch" className="max-w-4xl mx-auto">
            <TabsList className="w-full justify-center mb-12 bg-transparent gap-4">
              <TabsTrigger
                value="brunch"
                className="px-8 py-3 text-lg font-display data-[state=active]:bg-[#FF8F75] data-[state=active]:text-white rounded"
              >
                Brunch
              </TabsTrigger>
              <TabsTrigger
                value="dinner"
                className="px-8 py-3 text-lg font-display data-[state=active]:bg-[#FF8F75] data-[state=active]:text-white rounded"
              >
                Dinner
              </TabsTrigger>
              <TabsTrigger
                value="cocktails"
                className="px-8 py-3 text-lg font-display data-[state=active]:bg-[#FF8F75] data-[state=active]:text-white rounded"
              >
                Cocktails
              </TabsTrigger>
              <TabsTrigger
                value="wine"
                className="px-8 py-3 text-lg font-display data-[state=active]:bg-[#FF8F75] data-[state=active]:text-white rounded"
              >
                Wine
              </TabsTrigger>
            </TabsList>

            <TabsContent value="brunch">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-8 text-center">
                  Brunch Menu
                  <span className="block text-sm font-body text-[#999] mt-1">Daily 8AM – 4PM</span>
                </h3>
                <div className="space-y-6">
                  {brunchItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex justify-between items-start border-b border-[#E5DED5] pb-4 last:border-0"
                    >
                      <div>
                        <h4 className="font-semibold text-[#4C5254] mb-1">{item.name}</h4>
                        <p className="text-sm text-[#666]">{item.description}</p>
                      </div>
                      <span className="text-[#FF8F75] font-semibold ml-4">${item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dinner">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-8 text-center">
                  Dinner Menu
                  <span className="block text-sm font-body text-[#999] mt-1">6PM – 11PM (Closed Mondays)</span>
                </h3>
                <div className="space-y-6">
                  {dinnerItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex justify-between items-start border-b border-[#E5DED5] pb-4 last:border-0"
                    >
                      <div>
                        <h4 className="font-semibold text-[#4C5254] mb-1">{item.name}</h4>
                        <p className="text-sm text-[#666]">{item.description}</p>
                      </div>
                      <span className="text-[#FF8F75] font-semibold ml-4">${item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cocktails">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-8 text-center">
                  Signature Cocktails
                </h3>
                <div className="space-y-6">
                  {cocktails.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex justify-between items-start border-b border-[#E5DED5] pb-4 last:border-0"
                    >
                      <div>
                        <h4 className="font-semibold text-[#4C5254] mb-1">{item.name}</h4>
                        <p className="text-sm text-[#666]">{item.description}</p>
                      </div>
                      <span className="text-[#FF8F75] font-semibold ml-4">${item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wine">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-8 text-center">
                  Wine Selection
                </h3>
                <div className="space-y-6">
                  {wines.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex justify-between items-start border-b border-[#E5DED5] pb-4 last:border-0"
                    >
                      <h4 className="font-semibold text-[#4C5254]">{item.name}</h4>
                      <div className="text-right">
                        {item.price && (
                          <span className="text-[#FF8F75] font-semibold">
                            Glass ${item.price}
                          </span>
                        )}
                        {item.price && item.priceBottle && <span className="text-[#999] mx-2">|</span>}
                        {item.priceBottle && (
                          <span className="text-[#FF8F75] font-semibold">
                            Bottle ${item.priceBottle}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <p className="text-[#666] mb-4">
              Full menu available at the restaurant. Prices subject to change.
            </p>
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF8F75] font-medium hover:underline"
            >
              View Full Menu on OpenTable →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="/images/brunch-table-spread.jpg"
                alt="Brunch spread at The Local House"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="w-16 h-px bg-[#FF8F75] mb-6" />
              <h2 className="text-4xl font-display font-semibold text-[#4C5254] mb-6">
                Reserve Your Table
              </h2>
              <p className="text-[#666] leading-relaxed mb-8">
                Whether you're joining us for our legendary brunch or an intimate dinner,
                we recommend making a reservation to ensure the best experience. Walk-ins
                are welcome but subject to availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.opentable.com/the-local-house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded text-center"
                >
                  Book on OpenTable
                </a>
                <a
                  href="tel:+13055385529"
                  className="px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded text-center"
                >
                  Call (305) 538-5529
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
