import { motion } from "framer-motion";
import { Link } from "wouter";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { useTranslation } from "react-i18next";
import { Heart, Users, Leaf, Utensils } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export default function Culture() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: t("culture.unconditionalHospitality"),
      description: t("culture.unconditionalDesc"),
    },
    {
      icon: Users,
      title: t("culture.peopleForPeople"),
      description: t("culture.peopleDesc"),
    },
    {
      icon: Leaf,
      title: t("culture.authenticItalian"),
      description: t("culture.authenticDesc"),
    },
    {
      icon: Utensils,
      title: t("culture.freshLocal"),
      description: t("culture.freshLocalDesc"),
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: t("culture.timelineVision"),
      description: t("culture.timelineVisionDesc"),
    },
    {
      year: "2012",
      title: t("culture.timelineBeginning"),
      description: t("culture.timelineBeginningDesc"),
    },
    {
      year: "2015",
      title: t("culture.timelineRecognition"),
      description: t("culture.timelineRecognitionDesc"),
    },
    {
      year: "2020",
      title: t("culture.timelineChallenge"),
      description: t("culture.timelineChallengeDesc"),
    },
    {
      year: "2025",
      title: t("culture.timelineLegacy"),
      description: t("culture.timelineLegacyDesc"),
    },
  ];



  return (
    <div>
      <SEOHead
        title="The Local House Miami Beach | Italian-Owned Hotel & Restaurant Since 2012"
        description="Meet The Local House — Italian-owned boutique hotel & restaurant at 400 Ocean Drive, Miami Beach. Famous brunch, rooftop pool, Art Deco rooms. Discover our story, values, and 13 years of unconditional hospitality in South of Fifth."
        keywords="the local house miami, the local house miami beach, italian restaurant miami beach, boutique hotel ocean drive, south of fifth hotel, the local house story, ocean drive restaurant"
        canonicalUrl="https://www.localhouse.com/culture"
        ogImage="/images/culture-hero-dinner.jpg"
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#4C5254]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/culture-hero-dinner.jpg"
            alt="The Local House - Dining Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-4">
              {t("culture.title")}
            </h1>
            <p className="text-xl text-white/80">
              {t("culture.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              {t("culture.coreValues")}
            </h2>
            <p className="text-lg text-[#666]">
              {t("culture.coreValuesSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-lg border border-[#E5DED5] hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-12 h-12 text-[#FF8F75] mb-4" />
                <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#666] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-[#FF8F75] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-[#4C5254] mb-4">
              {t("culture.ourStory")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-lg mb-12"
          >
            <p className="text-[#666] leading-relaxed mb-6 text-lg">
              {t("culture.storyP1_1")}<span className="italic text-[#FF8F75]">{t("culture.storyP1_highlight")}</span>
            </p>
            <p className="text-[#666] leading-relaxed mb-6 text-lg">
              {t("culture.storyP2")}
            </p>
            <p className="text-[#666] leading-relaxed mb-6 text-lg">
              {t("culture.storyP3")}
            </p>
            <p className="text-[#666] leading-relaxed text-lg">
              {t("culture.storyP4")}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-[#FF8F75] text-white flex items-center justify-center">
                    <span className="text-3xl font-display font-semibold">{event.year}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-display font-semibold text-[#4C5254] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Philosophy Section */}
      <section className="py-24 bg-gradient-to-r from-[#FF8F75] to-[#e67c63] text-white">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              {t("culture.weArePeople")}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8 italic">
              {t("culture.drivenByPassion")}
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              {t("culture.philosophyP1")}
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              {t("culture.philosophyP2")}
            </p>
            <p className="text-2xl font-display italic mt-8">
              {t("culture.withLove")}<br />{t("culture.theLocalHouse")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#4C5254] mb-6">
              {t("culture.experienceCulture")}
            </h2>
            <p className="text-lg text-[#666] mb-8 max-w-2xl mx-auto">
              {t("culture.joinUsText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
              >
                {t("culture.reserveForBrunch")}
              </a>
              <a
                href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
              >
                {t("common.bookRoom")}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/brunch" className="text-[#FF8F75] hover:underline">{t("culture.famousBrunchMenu")}</Link>
              <span className="text-[#ccc]">|</span>
              <Link href="/restaurant" className="text-[#FF8F75] hover:underline">{t("culture.restaurantBar")}</Link>
              <span className="text-[#ccc]">|</span>
              <Link href="/hotel" className="text-[#FF8F75] hover:underline">{t("culture.boutiqueHotel")}</Link>
              <span className="text-[#ccc]">|</span>
              <Link href="/gallery" className="text-[#FF8F75] hover:underline">{t("common.photoGallery")}</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
