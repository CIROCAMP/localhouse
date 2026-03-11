import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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

const getStats = (t: (key: string) => string) => [
  { icon: Star, value: "4.9", label: t("brunch.avgRating") },
  { icon: Users, value: t("brunch.happyGuestsCount"), label: t("brunch.happyGuests") },
  { icon: Award, value: t("brunch.number1"), label: t("brunch.brunchInSoBe") },
];

function BrunchNewsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useTranslation();

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
            {t("newsletter.neverMiss")}
          </h2>
          <p className="text-[#666] mb-8">
            {t("newsletter.exclusiveUpdates")}
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#FF8F75]/10 border border-[#FF8F75]/30 rounded-lg p-8"
            >
              <p className="text-[#FF8F75] text-xl font-display font-semibold mb-2">{t("newsletter.youreOnTheList")}</p>
              <p className="text-[#666]">{t("newsletter.checkInbox")}</p>
            </motion.div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={t("newsletter.firstName")}
                  className="px-5 py-4 bg-white border border-[#E5DED5] rounded-lg text-[#4C5254] placeholder-[#999] text-sm focus:outline-none focus:border-[#FF8F75] sm:w-36"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.emailAddress")}
                  required
                  className="flex-1 px-5 py-4 bg-white border border-[#E5DED5] rounded-lg text-[#4C5254] placeholder-[#999] text-sm focus:outline-none focus:border-[#FF8F75]"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-4 bg-[#FF8F75] text-white font-semibold text-sm rounded-lg hover:bg-[#e67c63] transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                >
                  {status === "loading" ? t("newsletter.joining") : t("newsletter.subscribe")}
                </button>
              </form>
              {status === "error" && (
                <p className="text-red-500 text-sm mt-3">{t("newsletter.errorMessage")}</p>
              )}
              <p className="text-[#999] text-xs mt-4">{t("newsletter.noSpam")}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default function Brunch() {
  const { t } = useTranslation();
  const stats = getStats(t);
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
              🍳 {t("brunch.votedBest")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-6"
          >
            {t("brunch.bestBrunchMiami")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-4"
          >
            {t("brunch.oceanDriveTradition")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <Clock className="text-[#FF8F75]" size={24} />
            <span className="text-xl font-medium">{t("brunch.daily8am")}</span>
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
              {t("brunch.reserveForBrunch")}
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
              {t("brunch.whereBrunchBecomes")}
            </h2>
            <p className="text-lg text-[#666] leading-relaxed mb-6">
              {t("brunch.storyP1")}
            </p>
            <p className="text-lg text-[#666] leading-relaxed">
              {t("brunch.storyP2")}
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
              {t("brunch.brunchFavorites")}
            </h2>
            <p className="text-lg text-[#666]">
              {t("brunch.freshLocal")}
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
                {t("brunch.viewFullMenu")}
              </span>
            </Link>
          </div>

          {/* Brunch Nearby Link */}
          <div className="mt-12 bg-[#FAF7F2] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-4">
              {t("brunch.lookingForBrunch")}
            </h3>
            <p className="text-[#666] mb-6 max-w-2xl mx-auto">
              {t("brunch.localHouseDestination")}
            </p>
            <Link href="/brunch-near-me-miami-beach" className="inline-block px-6 py-3 bg-[#FF8F75] text-white font-medium rounded hover:bg-[#e67c63] transition-colors">
              {t("brunch.findBrunchNear")}
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
                  {t("brunch.signatureCocktails")}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {t("brunch.cocktailsIntro")}
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
              {t("brunch.brunchOnOceanDrive")}
            </h2>
            <div className="prose prose-lg text-[#666] leading-relaxed space-y-6">
              <p dangerouslySetInnerHTML={{ __html: t("brunch.seoP1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("brunch.seoP2") }} />

              <h2 className="text-3xl font-display font-semibold text-[#4C5254] !mt-12 !mb-6">
                {t("brunch.sundayBrunchTitle")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t("brunch.seoP3") }} />
              <p>{t("brunch.seoP4")}</p>

              <h2 className="text-3xl font-display font-semibold text-[#4C5254] !mt-12 !mb-6">
                {t("brunch.oceanDriveViewsTitle")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t("brunch.seoP5") }} />
              <p dangerouslySetInnerHTML={{ __html: t("brunch.seoP6") }} />
              <p dangerouslySetInnerHTML={{ __html: t("brunch.seoP7") }} />
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
              {t("brunch.brunchFAQ")}
            </h2>
            <p className="text-lg text-[#666] text-center mb-12">
              {t("brunch.faqSubtitle")}
            </p>

            <div className="space-y-4">
              {[
                { q: t("brunch.faq1Q"), a: t("brunch.faq1A") },
                { q: t("brunch.faq2Q"), a: t("brunch.faq2A") },
                { q: t("brunch.faq3Q"), a: t("brunch.faq3A") },
                { q: t("brunch.faq4Q"), a: t("brunch.faq4A") },
                { q: t("brunch.faq5Q"), a: t("brunch.faq5A") },
                { q: t("brunch.faq6Q"), a: t("brunch.faq6A") },
                { q: t("brunch.faq7Q"), a: t("brunch.faq7A") },
                { q: t("brunch.faq8Q"), a: t("brunch.faq8A") }
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
              {t("brunch.joinUs")}
            </h2>
            <p className="text-xl text-[#666] max-w-2xl mx-auto mb-4">
              {t("brunch.thousandsHappy")}
            </p>
            <p className="text-lg text-[#999] max-w-xl mx-auto mb-10">
              {t("brunch.walkIns")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
              >
                {t("brunch.reserveOpenTable")}
              </a>
              <a
                href="tel:+13055385529"
                className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
              >
                {t("brunch.callUs")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
