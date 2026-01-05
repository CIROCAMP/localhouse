import { motion } from "framer-motion";
import { Heart, Users, Leaf, Utensils } from "lucide-react";

export default function Culture() {
  const values = [
    {
      icon: Heart,
      title: "Unconditional Hospitality",
      description: "We treat every guest like family. Your comfort and happiness are our priority.",
    },
    {
      icon: Users,
      title: "People for People",
      description: "Our team is passionate about creating meaningful connections and memorable experiences.",
    },
    {
      icon: Leaf,
      title: "Authentic Italian Heart",
      description: "Founded by an Italian owner in 2012, we blend Mediterranean warmth with Miami's vibrant energy.",
    },
    {
      icon: Utensils,
      title: "Fresh & Local",
      description: "We celebrate coastal cuisine with fresh, local ingredients and traditional Italian techniques.",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "The Vision",
      description: "An Italian real estate investor discovers 400 Ocean Drive and falls in love with its potential.",
    },
    {
      year: "2012",
      title: "The Beginning",
      description: "The Local House opens its doors. 18 boutique rooms and a restaurant dedicated to authentic hospitality.",
    },
    {
      year: "2015",
      title: "The Recognition",
      description: "Our famous Lobster Eggs Benedict becomes legendary. Brunch becomes our signature experience.",
    },
    {
      year: "2020",
      title: "The Challenge",
      description: "We adapt and thrive, maintaining our commitment to our guests and community during difficult times.",
    },
    {
      year: "2025",
      title: "The Legacy",
      description: "13 years of unconditional hospitality. 4.9-star rating. 2,500+ happy guests. Still growing.",
    },
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#4C5254]">
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-4">
              Our Culture
            </h1>
            <p className="text-xl text-white/80">
              Where Italian warmth meets Miami vibrancy
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
              Our Core Values
            </h2>
            <p className="text-lg text-[#666]">
              The principles that guide everything we do
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
              Our Story
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
              In 2009, during uncertain times when many saw obstacles, an Italian entrepreneur saw opportunity. Walking down Ocean Drive in Miami Beach, he discovered 400 Ocean Drive—a weathered Art Deco building with faded coral walls and sun-bleached shutters. While others saw a property needing work, he saw something different: <span className="italic text-[#FF8F75]">potential, character, and a soul waiting to be awakened.</span>
            </p>
            <p className="text-[#666] leading-relaxed mb-6 text-lg">
              It was love at first sight.
            </p>
            <p className="text-[#666] leading-relaxed mb-6 text-lg">
              What followed was a labor of love spanning years. Every detail was considered with the passion of an Italian craftsman—from carefully restored architectural elements to the warm hospitality that would become the hotel's signature. He didn't just renovate a building; he breathed life into it.
            </p>
            <p className="text-[#666] leading-relaxed text-lg">
              Today, The Local House stands as a testament to that vision: a boutique hotel where Italian warmth meets Miami vibrancy, where every guest is treated like family, and where the famous brunch has become a beloved tradition for locals and travelers alike.
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
              We are People for People
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8 italic">
              Driven by a genuine passion for Hospitality and good food.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              We believe in the simple things in life: a home-cooked meal, a walk on the beach, and a warm tête-à-tête conversation. We express our gratitude in writing and we pride ourselves in remembering names, drink orders, and table preferences.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              We are happy you're here and we hope you'll become a fan.
            </p>
            <p className="text-2xl font-display italic mt-8">
              With love,<br />The Local House
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
              Experience Our Culture
            </h2>
            <p className="text-lg text-[#666] mb-8 max-w-2xl mx-auto">
              Join us for brunch, dinner, or a stay at our boutique hotel. Become part of our story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com/the-local-house"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
              >
                Reserve for Brunch
              </a>
              <a
                href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
              >
                Book a Room
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
