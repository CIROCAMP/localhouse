import { useState } from "react";
import { motion } from "framer-motion";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { Clock, Star, Award, Users, Mail } from "lucide-react";
import { Link } from "wouter";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

const SUPABASE_URL = "https://kzqvdwibtuoronyphiuq.supabase.co";

/*
 * Design: Miami Art Deco Revival
 * Dedicated Brunch page - the signature experience
 */

const brunchHighlights = [
  {
    name: "Lobster Eggs Benedict",
    price: 33,
    description: "Our signature dish - butter-poached lobster, perfectly poached eggs, silky hollandaise on a toasted english muffin",
    tag: "SIGNATURE",
  },
  {
    name: "Fluffy Buttermilk Pancakes",
    price: 18,
    description: "Stack of fluffy pancakes with fresh seasonal berries, whipped cream, and pure maple syrup",
    tag: "FAN FAVORITE",
  },
  {
    name: "Breakfast Smash Burger",
    price: 22,
    description: "Wagyu beef patty, fried egg, crispy bacon, melted cheese on a brioche bun",
    tag: null,
  },
  {
    name: "Avocado Toast",
    price: 16,
    description: "Sourdough bread, smashed avocado, poached eggs, microgreens, everything seasoning",
    tag: null,
  },
  {
    name: "French Toast",
    price: 19,
    description: "Thick-cut brioche dipped in vanilla custard, fresh berries, powdered sugar",
    tag: null,
  },
  {
    name: "Lobster Roll",
    price: 38,
    description: "Butter-poached Maine lobster, toasted brioche roll, lemon aioli, chives",
    tag: "PREMIUM",
  },
];

const stats = [
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Users, value: "2,500+", label: "Happy Guests" },
  { icon: Award, value: "#1", label: "Brunch in SoBe" },
];

function BrunchNewsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, first_name: firstName, source: "website" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setFirstName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-12 h-12 bg-[#FF8F75]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="text-[#FF8F75]" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#4C5254] mb-4">
            Never Miss a Brunch Special
          </h2>
          <p className="text-[#666] mb-8">
            Get exclusive updates on seasonal menus, chef's specials, and VIP brunch events delivered to your inbox.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#FF8F75]/10 border border-[#FF8F75]/30 rounded-lg p-8"
            >
              <p className="text-[#FF8F75] text-xl font-display font-semibold mb-2">You're on the list!</p>
              <p className="text-[#666]">Check your inbox for a welcome from The Local House.</p>
            </motion.div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="px-5 py-4 bg-white border border-[#E5DED5] rounded-lg text-[#4C5254] placeholder-[#999] text-sm focus:outline-none focus:border-[#FF8F75] sm:w-36"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 px-5 py-4 bg-white border border-[#E5DED5] rounded-lg text-[#4C5254] placeholder-[#999] text-sm focus:outline-none focus:border-[#FF8F75]"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-4 bg-[#FF8F75] text-white font-semibold text-sm rounded-lg hover:bg-[#e67c63] transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                >
                  {status === "loading" ? "Joining..." : "Subscribe"}
                </button>
              </form>
              {status === "error" && (
                <p className="text-red-500 text-sm mt-3">Something went wrong. Please try again.</p>
              )}
              <p className="text-[#999] text-xs mt-4">No spam, just brunch. Unsubscribe anytime.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function Brunch() {
  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.brunch} />
      <SEOSchema page="brunch" />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#FAF7F2]">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/brunch-hero-overhead.webp" type="image/webp" />
            <img
              src="/images/brunch-hero-overhead.jpg"
              alt="Overhead view of famous brunch dishes at The Local House"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF8F75]/90 rounded-full text-sm font-medium mb-6">
              🍳 Voted Best Brunch in South Beach
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-6"
          >
            Best Brunch in Miami Beach
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-4"
          >
            An Ocean Drive Tradition Since 2012
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <Clock className="text-[#FF8F75]" size={24} />
            <span className="text-xl font-medium">Daily 8AM – 4PM</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')}
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded inline-block"
            >
              Reserve for Brunch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-[#E5DED5]">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center">
                  <stat.icon className="text-[#FF8F75]" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-display font-semibold text-[#4C5254]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#666]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl font-display font-semibold text-[#4C5254] mb-6">
              Where Brunch Becomes an Experience
            </h2>
            <p className="text-lg text-[#666] leading-relaxed mb-6">
              At The Local House, brunch isn't just a meal—it's our way of welcoming you in.
              Tucked into the South of Fifth neighborhood, just steps from the beach, we're
              known for creating a relaxed, coastal setting where good food and genuine
              hospitality come first.
            </p>
            <p className="text-lg text-[#666] leading-relaxed">
              Our menu highlights comforting favorites with fresh, local touches—from our
              legendary lobster eggs benedict and fluffy pancakes to lighter, seasonal plates
              that feel right at home by the ocean. Whether you join us on the patio with a
              mimosa in hand or settle into our cozy dining room, our team is here to make
              you feel cared for.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              Brunch Favorites
            </h2>
            <p className="text-lg text-[#666]">
              Fresh, local ingredients crafted into unforgettable dishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brunchHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAF7F2] p-6 rounded-lg relative"
              >
                {item.tag && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-[#FF8F75] text-white text-xs font-medium rounded">
                    {item.tag}
                  </span>
                )}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-display font-semibold text-[#4C5254] pr-20">
                    {item.name}
                  </h3>
                  <span className="text-[#FF8F75] font-semibold">${item.price}</span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/restaurant">
              <span className="text-[#FF8F75] font-medium hover:underline">
                View Full Menu →
              </span>
            </Link>
          </div>

          {/* Brunch Nearby Link */}
          <div className="mt-12 bg-[#FAF7F2] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-4">
              Looking for brunch nearby?
            </h3>
            <p className="text-[#666] mb-6 max-w-2xl mx-auto">
              The Local House is your destination for the best brunch in Miami Beach. Located in South of Fifth, just steps from South Beach.
            </p>
            <Link href="/brunch-near-me-miami-beach" className="inline-block px-6 py-3 bg-[#FF8F75] text-white font-medium rounded hover:bg-[#e67c63] transition-colors">
              Find Brunch Near You
            </Link>
          </div>
        </div>
      </section>

      {/* Cocktails Section */}
      <section className="py-24 bg-[#4C5254]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-16 h-px bg-[#FF8F75] mb-6" />
                <h2 className="text-4xl font-display font-semibold text-white mb-6">
                  Signature Brunch Cocktails
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  No brunch is complete without our craft cocktails. From our famous Bloody Mary
                  to refreshing mimosas, we've got the perfect pairing for your meal.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <div>
                      <h4 className="text-white font-medium">Mimosa</h4>
                      <p className="text-gray-500 text-sm">prosecco, cold pressed OJ</p>
                    </div>
                    <span className="text-[#FF8F75]">$14 / $45 bottle</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <div>
                      <h4 className="text-white font-medium">Bloody Mary</h4>
                      <p className="text-gray-500 text-sm">homemade mix, bacon, olives</p>
                    </div>
                    <span className="text-[#FF8F75]">$16</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <div>
                      <h4 className="text-white font-medium">Wake Me Up</h4>
                      <p className="text-gray-500 text-sm">vodka, baileys, espresso</p>
                    </div>
                    <span className="text-[#FF8F75]">$18</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/images/signature-cocktail.jpg"
                alt="Signature Brunch Cocktail"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Local House Section - SEO content for long-tail keywords */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl font-display font-semibold text-[#4C5254] mb-8 text-center">
              Brunch on Ocean Drive
            </h2>
            <div className="prose prose-lg text-[#666] leading-relaxed space-y-6">
              <p>
                Looking for the perfect <strong>brunch in Miami Beach</strong>? The Local House
                offers an unmatched brunch experience right on Ocean Drive, in the heart of the exclusive
                South of Fifth neighborhood. Since 2012, our Italian-owned restaurant has been serving
                Miami Beach's most talked-about brunch — combining fresh, locally-sourced ingredients
                with Mediterranean flair and genuine hospitality.
              </p>
              <p>
                Our <strong>weekend brunch in Miami Beach</strong> has become a tradition for locals and
                visitors alike. Every Saturday and Sunday, guests fill our sun-drenched patio and cozy
                dining room to enjoy dishes like our legendary <strong>Lobster Eggs Benedict</strong> —
                butter-poached Maine lobster over perfectly poached eggs with silky hollandaise on a
                toasted English muffin. Paired with a glass of prosecco or a craft cocktail, it's the ultimate
                South Beach brunch experience.
              </p>

              <h2 className="text-3xl font-display font-semibold text-[#4C5254] !mt-12 !mb-6">
                Sunday Brunch Miami Beach — A Local Tradition
              </h2>
              <p>
                <strong>Sunday brunch at The Local House</strong> is more than a meal — it's a Miami Beach
                ritual. Whether you're celebrating a birthday, catching up with friends, or enjoying a
                lazy morning after a night on South Beach, our team makes every visit feel special.
                We serve brunch <strong>daily from 8AM to 4PM</strong>, so you never have to miss out —
                even on a Tuesday.
              </p>
              <p>
                Our menu goes beyond the classics. From fluffy buttermilk pancakes topped with seasonal
                berries to our indulgent Breakfast Smash Burger with Wagyu beef and a fried egg, there's
                something for every craving. Add a craft Bloody Mary, an espresso martini, or a classic
                mimosa — the perfect way to start your day in Miami Beach.
              </p>

              <h2 className="text-3xl font-display font-semibold text-[#4C5254] !mt-12 !mb-6">
                Brunch with Ocean Drive Views
              </h2>
              <p>
                What sets The Local House apart from every other <strong>brunch spot in Miami Beach</strong>?
                Location, food, and soul. Sitting at 400 Ocean Drive, you're steps from the sand,
                surrounded by Art Deco architecture and tropical palms. Our patio offers prime people-watching
                while you sip your morning coffee or afternoon cocktail.
              </p>
              <p>
                We've been rated <strong>#1 Brunch in South Beach</strong> with a 4.9-star average across
                over 2,500 reviews. Guests consistently praise our warm service, generous portions, and
                the unmistakable quality of every plate that leaves our kitchen. Whether you're a first-time
                visitor or a regular, the Local House team treats you like family.
              </p>
              <p>
                Ready to taste why thousands choose us every week? <strong>Reserve your brunch table
                on OpenTable</strong> — especially for weekends, when our tables fill up fast. Walk-ins
                are always welcome, but a reservation guarantees your spot at Miami Beach's best brunch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Schema markup for featured snippets */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl font-display font-semibold text-[#4C5254] mb-4 text-center">
              Brunch FAQ
            </h2>
            <p className="text-lg text-[#666] text-center mb-12">
              Everything you need to know about brunch at The Local House
            </p>

            <div className="space-y-4">
              {[
                {
                  q: "Is Local House the best brunch in Miami Beach?",
                  a: "Yes — The Local House has been voted #1 Brunch in South Beach and Miami Beach, with a 4.9-star rating from over 2,500 guests. Our famous Lobster Eggs Benedict, craft cocktails, and Ocean Drive patio dining have made us the go-to brunch destination since 2012. We've been featured in Eater Miami, Miami New Times, and recommended by thousands of locals and visitors."
                },
                {
                  q: "What cocktails do you serve at brunch?",
                  a: "We offer a curated brunch cocktail menu including classic mimosas ($14 or $45 for a bottle of prosecco), our famous homemade Bloody Mary ($16), and the Wake Me Up espresso cocktail ($18). You can also enjoy our full cocktail menu with craft creations and seasonal specials."
                },
                {
                  q: "What time does brunch start at The Local House?",
                  a: "Brunch is served daily from 8:00 AM to 4:00 PM — seven days a week, including weekdays. Whether you're an early riser or prefer a late morning, we've got you covered. Our kitchen serves the full brunch menu during all hours."
                },
                {
                  q: "Do I need a reservation for weekend brunch?",
                  a: "We highly recommend making a reservation through OpenTable for weekend brunch (Saturday and Sunday), as tables fill up quickly — especially between 10AM and 1PM. Walk-ins are always welcome, but wait times during peak hours can be 20–40 minutes. Weekday brunch is more relaxed and walk-ins are easily accommodated."
                },
                {
                  q: "Where is The Local House located?",
                  a: "The Local House is located at 400 Ocean Drive, in the South of Fifth (SoFi) neighborhood of Miami Beach, FL 33139. We're just steps from the beach, South Pointe Park, and Lummus Park. The restaurant is on the ground floor of our boutique hotel, with both indoor dining and a beautiful outdoor patio on Ocean Drive."
                },
                {
                  q: "What are the most popular brunch dishes?",
                  a: "Our most ordered brunch dishes are the Lobster Eggs Benedict ($33) — butter-poached Maine lobster with perfectly poached eggs and silky hollandaise — followed by the Fluffy Buttermilk Pancakes ($18), the Avocado Toast ($16), and the Breakfast Smash Burger ($22) with Wagyu beef and a fried egg. The Lobster Roll ($38) is also a guest favorite."
                },
                {
                  q: "Is the brunch patio pet-friendly?",
                  a: "Yes! Our outdoor patio on Ocean Drive is pet-friendly. Bring your furry friend and enjoy brunch al fresco. We provide water bowls for four-legged guests. Please note that pets are only allowed on the outdoor patio, not inside the restaurant."
                },
                {
                  q: "Can I host a private brunch event at The Local House?",
                  a: "Absolutely! We host private brunch events including birthdays, bridal showers, corporate brunches, and celebrations. We can accommodate groups of up to 40 guests with customized menus and beverage packages. Contact us at (305) 538-5529 or visit our private events page for more information."
                }
              ].map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-lg border border-[#E5DED5] overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-semibold text-[#4C5254] text-lg hover:text-[#FF8F75] transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span className="text-[#FF8F75] ml-4 shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-[#666] leading-relaxed">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <BrunchNewsletter />

      {/* CTA Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-6">
              Join Us for Miami's #1 Brunch
            </h2>
            <p className="text-xl text-[#666] max-w-2xl mx-auto mb-4">
              Thousands of happy guests have made us their favorite brunch spot on Ocean Drive.
            </p>
            <p className="text-lg text-[#999] max-w-xl mx-auto mb-10">
              Daily 8AM – 4PM · Walk-ins welcome, reservations recommended
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
              >
                Reserve on OpenTable
              </a>
              <a
                href="tel:+13055385529"
                className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
              >
                Call (305) 538-5529
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
