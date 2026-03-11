import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/SEOHead";

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div>
      <SEOHead
        title="Terms of Service | The Local House Miami Beach"
        description="Terms of Service for The Local House boutique hotel and restaurant at 400 Ocean Drive, Miami Beach."
        canonicalUrl="https://www.localhouse.com/terms-of-service"
        noindex={true}
      />

      {/* Hero */}
      <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center bg-[#4C5254]">
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-semibold"
          >
            {t("legal.termsOfService")}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl prose prose-lg">
          <p className="text-sm text-[#999]">{t("legal.lastUpdated")}: March 2026</p>

          <h2>{t("legal.hotelReservations")}</h2>
          <p>{t("legal.hotelReservationsDesc")}</p>

          <h2>{t("legal.cancellationPolicy")}</h2>
          <p>{t("legal.cancellationPolicyDesc")}</p>

          <h2>{t("legal.checkInOut")}</h2>
          <p>{t("legal.checkInOutDesc")}</p>

          <h2>{t("legal.restaurantPolicy")}</h2>
          <p>{t("legal.restaurantPolicyDesc")}</p>

          <h2>{t("legal.intellectualProperty")}</h2>
          <p>{t("legal.intellectualPropertyDesc")}</p>

          <h2>{t("legal.liability")}</h2>
          <p>{t("legal.liabilityDesc")}</p>

          <h2>{t("legal.governingLaw")}</h2>
          <p>{t("legal.governingLawDesc")}</p>

          <h2>{t("legal.contactUs")}</h2>
          <p>
            {t("legal.contactUsDesc")}<br />
            <strong>Email:</strong> info@localhouse.com<br />
            <strong>{t("legal.phone")}:</strong> (305) 538-5529<br />
            <strong>{t("legal.address")}:</strong> 400 Ocean Drive, Miami Beach, FL 33139
          </p>
        </div>
      </section>
    </div>
  );
}
