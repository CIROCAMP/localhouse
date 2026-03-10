import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Calendar, Users, Utensils, Wine, Music, Camera } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export default function PrivateEvents() {
  const { t } = useTranslation();

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
            {t("privateEvents.celebrateWithUs")}
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
            {t("privateEvents.title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {t("privateEvents.subtitle")}
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-charcoal mb-4">{t("privateEvents.perfectFor")}</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto">
              {t("privateEvents.perfectForDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Calendar, title: t("privateEvents.birthdayCelebrations"), desc: t("privateEvents.birthdayDesc") },
              { icon: Users, title: t("privateEvents.corporateEvents"), desc: t("privateEvents.corporateDesc") },
              { icon: Wine, title: t("privateEvents.rehearsalDinners"), desc: t("privateEvents.rehearsalDesc") },
              { icon: Utensils, title: t("privateEvents.privateBrunch"), desc: t("privateEvents.privateBrunchDesc") },
              { icon: Music, title: t("privateEvents.cocktailParties"), desc: t("privateEvents.cocktailDesc") },
              { icon: Camera, title: t("privateEvents.photoShoots"), desc: t("privateEvents.photoDesc") },
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
              <h2 className="font-display text-4xl text-charcoal mb-6">{t("privateEvents.ourSpaces")}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="font-semibold text-charcoal text-lg">{t("privateEvents.mainDining")}</h3>
                  <p className="text-charcoal/70">{t("privateEvents.mainDiningCapacity")}</p>
                </div>
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="font-semibold text-charcoal text-lg">{t("privateEvents.privateBalcony")}</h3>
                  <p className="text-charcoal/70">{t("privateEvents.balconyCapacity")}</p>
                </div>
                <div className="border-l-4 border-coral pl-6">
                  <h3 className="font-semibold text-charcoal text-lg">{t("privateEvents.rooftopTerrace")}</h3>
                  <p className="text-charcoal/70">{t("privateEvents.terraceCapacity")}</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-cream rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2">{t("privateEvents.whatsIncluded")}</h4>
                <ul className="text-charcoal/70 space-y-2">
                  <li>{t("privateEvents.includedMenu")}</li>
                  <li>{t("privateEvents.includedCoordinator")}</li>
                  <li>{t("privateEvents.includedAV")}</li>
                  <li>{t("privateEvents.includedSeating")}</li>
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
                <p className="font-display text-3xl">{t("privateEvents.since")}</p>
                <p className="font-display text-4xl">2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-charcoal text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-6">{t("privateEvents.readyToPlan")}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {t("privateEvents.contactEvents")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                {t("privateEvents.contactUs")}
              </Button>
            </Link>
            <a href="tel:+13055385529">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                {t("common.callPhone")}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
