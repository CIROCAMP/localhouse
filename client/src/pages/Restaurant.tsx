import { motion } from "framer-motion";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { Clock, Phone, ExternalLink, Download, ShoppingCart } from "lucide-react";
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
  { name: "Oysters on the Half Shell", price: 25, description: "champagne mignonette, lemon" },
  { name: "Yellowfin Tuna Tartare", price: 21, description: "soy ginger dressing, avocado crema, wonton crisps" },
  { name: "Goat Cheese Croquettes", price: 14, description: "our iconic bites since 2012 | crisp, creamy, served with warm guava dip" },
  { name: "Local Caesar", price: 17, description: "baby gem lettuce, signature caesar, 24 month parm" },
  { name: "Nicoles Maine Event (Lobster Roll)", price: 35, description: "poached maine lobster, tossed in lemon aioli, la provence brioche roll, fries" },
  { name: "Shrimply Tropical Salad", price: 25, description: "charred mango, shrimp, plantain chips, toasted coconut, citrus vinaigrette, avocado, torn herbs, hazelnuts" },
];

const dinnerItems = [
  { name: "Yellowfin Tuna Tartare", price: 21, description: "soy ginger dressing, avocado crema, wonton crisps" },
  { name: "Smoked Fish Dip", price: 16, description: "house smoked with bright lemon aioli and crispy tostones" },
  { name: "Fried Calamari", price: 19, description: "crispy calamari with marinara sauce" },
  { name: "Nicoles Maine Event (Lobster Roll)", price: 35, description: "poached maine lobster, tossed in lemon aioli, la provence brioche roll, fries" },
  { name: "Shrimply Tropical Salad", price: 25, description: "charred mango, shrimp, plantain chips, toasted coconut, citrus vinaigrette" },
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
          <picture>
            <source srcSet="/images/outside-terrace.webp" type="image/webp" />
            <img
              src="/images/outside-terrace.jpg"
              alt="The Local House Restaurant"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </picture>
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
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 w-full md:w-auto">
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
                  <p className="font-medium text-[#4C5254]">Wed-Sun 4PM – 10PM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#FF8F75]" size={20} />
                <div>
                  <p className="text-sm text-[#999]">Happy Hour</p>
                  <p className="font-medium text-[#4C5254]">Wed-Sun 4PM – 6PM</p>
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
              onClick={() => window.trackOpenTableClick?.()} href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded w-full md:w-auto justify-center"
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
            <TabsList className="w-full justify-center mb-12 bg-transparent gap-2 md:gap-4 flex-wrap">
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
                  <span className="block text-sm font-body text-[#999] mt-1">Wed-Sun 4PM – 10PM</span>
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
            <p className="text-[#666] mb-6">
              Full menu available below. Prices subject to change.
            </p>
            
            {/* PDF Download Links */}
            <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center mb-8">
              <a
                href="/menus/BrunchJan2026(2).pdf"
                download
                className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-[#F5F5F5] text-[#4C5254] font-medium hover:bg-[#E5DED5] transition-colors rounded text-sm md:text-base w-full md:w-auto"
              >
                <Download size={16} />
                <span>Download Brunch Menu</span>
              </a>
              <a
                href="/menus/DinnerJan2026(2).pdf"
                download
                className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-[#F5F5F5] text-[#4C5254] font-medium hover:bg-[#E5DED5] transition-colors rounded text-sm md:text-base w-full md:w-auto"
              >
                <Download size={16} />
                <span>Download Dinner Menu</span>
              </a>
              <a
                href="/menus/HAPPYHOUR_.pdf(2).pdf"
                download
                className="flex items-center justify-center gap-2 px-3 md:px-4 py-2 bg-[#F5F5F5] text-[#4C5254] font-medium hover:bg-[#E5DED5] transition-colors rounded text-sm md:text-base w-full md:w-auto"
              >
                <Download size={16} />
                <span>Download Happy Hour Menu</span>
              </a>
            </div>
            
            {/* Online Ordering Link */}
            <a
              href="https://order.toasttab.com/online/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded mb-4"
            >
              <ShoppingCart size={18} />
              Order Online
            </a>
            
            <br />
            
            <a
              onClick={() => window.trackOpenTableClick?.()} href="https://www.opentable.com/the-local-house"
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
              <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                <a
                  onClick={() => window.trackOpenTableClick?.()} href="https://www.opentable.com/the-local-house"
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
                <a
                  href="https://order.toasttab.com/online/the-local-house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded text-center flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Order Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
