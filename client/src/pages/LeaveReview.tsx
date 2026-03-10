import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Star, Instagram, Facebook, Music } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/SEOHead";

export default function LeaveReview() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF8F75]/10 to-white">
      <SEOHead
        title="Leave a Review | The Local House Miami Beach"
        description="Share your experience at The Local House. Leave a Google review or tag us on social media."
        canonicalUrl="https://www.localhouse.com/leave-review"
        noindex={true}
      />
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="text-6xl">🙏</div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#4C5254] mb-6">
            {t("leaveReview.thankYou")}
          </h1>

          <p className="text-xl text-[#666] mb-8">
            {t("leaveReview.feedback")}
          </p>
        </motion.div>
      </section>

      {/* Google Review CTA */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={32}
                  className="fill-[#FF8F75] text-[#FF8F75]"
                />
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#4C5254] mb-4">
              {t("leaveReview.leaveGoogle")}
            </h2>

            <p className="text-[#666] mb-6">
              {t("leaveReview.shareExperience")}
            </p>

            <a
              href="https://share.google/0H2ptcjor9w7exBb0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-4 bg-[#FF8F75] text-white font-bold text-lg rounded-lg hover:bg-[#e67c63] transition-colors duration-300"
            >
              {t("leaveReview.leaveGoogleBtn")}
            </a>

            <p className="text-sm text-[#999] mt-4">
              {t("leaveReview.takesLess")}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-[#4C5254] mb-6 text-center">
              {t("leaveReview.shareSocial")}
            </h3>

            <p className="text-[#666] text-center mb-6">
              {t("leaveReview.tagUs")}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <a
                href="https://www.instagram.com/thelocalhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg text-white hover:shadow-lg transition-shadow"
              >
                <Instagram size={24} />
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/localhousemiami/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-blue-600 rounded-lg text-white hover:shadow-lg transition-shadow"
              >
                <Facebook size={24} />
                <span className="text-sm font-medium">Facebook</span>
              </a>

              <a
                href="https://www.tiktok.com/@thelocalhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-black rounded-lg text-white hover:shadow-lg transition-shadow"
              >
                <Music size={24} />
                <span className="text-sm font-medium">TikTok</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Back to Restaurant Section */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md mx-auto text-center"
        >
          <p className="text-[#666] mb-6">
            {t("leaveReview.readyToBook")}
          </p>

          <Link href="/brunch">
            <span className="inline-block px-8 py-3 bg-[#FF8F75] text-white font-medium rounded-lg hover:bg-[#e67c63] transition-colors cursor-pointer">
              {t("leaveReview.reserveYourTable")}
            </span>
          </Link>

          <p className="text-sm text-[#999] mt-8">
            The Local House • 400 Ocean Drive, Miami Beach, FL 33139<br />
            {t("leaveReview.openDaily")}
          </p>
        </motion.div>
      </section>
    </div>
  );
}
