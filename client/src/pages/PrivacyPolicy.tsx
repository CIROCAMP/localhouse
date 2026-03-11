import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SEOHead } from "@/components/SEOHead";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div>
      <SEOHead
        title="Privacy Policy | The Local House Miami Beach"
        description="Privacy Policy for The Local House boutique hotel and restaurant at 400 Ocean Drive, Miami Beach."
        canonicalUrl="https://www.localhouse.com/privacy-policy"
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
            {t("legal.privacyPolicy")}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl prose prose-lg">
          <p className="text-sm text-[#999]">{t("legal.lastUpdated")}: March 2026</p>

          <h2>{t("legal.infoWeCollect")}</h2>
          <p>{t("legal.infoWeCollectDesc")}</p>
          <ul>
            <li>{t("legal.infoName")}</li>
            <li>{t("legal.infoEmail")}</li>
            <li>{t("legal.infoPhone")}</li>
            <li>{t("legal.infoPayment")}</li>
            <li>{t("legal.infoBrowsing")}</li>
          </ul>

          <h2>{t("legal.howWeUse")}</h2>
          <p>{t("legal.howWeUseDesc")}</p>
          <ul>
            <li>{t("legal.useReservations")}</li>
            <li>{t("legal.useNewsletter")}</li>
            <li>{t("legal.useImprove")}</li>
            <li>{t("legal.useMarketing")}</li>
          </ul>

          <h2>{t("legal.cookies")}</h2>
          <p>{t("legal.cookiesDesc")}</p>

          <h2>{t("legal.thirdParty")}</h2>
          <p>{t("legal.thirdPartyDesc")}</p>

          <h2>{t("legal.dataSecurity")}</h2>
          <p>{t("legal.dataSecurityDesc")}</p>

          <h2>{t("legal.yourRights")}</h2>
          <p>{t("legal.yourRightsDesc")}</p>

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
