import React from "react";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

/*
 * Design: Miami Art Deco Revival
 * Individual blog post page - SEO optimized content
 */

const blogContent: Record<string, {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}> = {
  "best-brunch-miami-beach-2025": {
    title: "The Ultimate Guide to the Best Brunch in Miami Beach (2025)",
    subtitle: "Why The Local House Has Been Voted South Beach's Favorite Brunch Destination",
    image: "/images/brunch-spread.jpg",
    date: "December 28, 2025",
    readTime: "5 min read",
    category: "Food & Dining",
    content: (
      <>
        <p>
          When it comes to <strong>brunch in Miami Beach</strong>, the options can feel overwhelming.
          From trendy spots on Lincoln Road to beachfront cafes along Ocean Drive, South Beach is
          a brunch lover's paradise. But if you're looking for the <strong>best brunch in Miami Beach</strong>,
          locals and visitors alike agree: The Local House stands above the rest.
        </p>

        <h2>What Makes The Local House Brunch Special?</h2>

        <p>
          Located at <strong>400 Ocean Drive</strong> in the heart of South of Fifth (SoFi),
          The Local House has been serving Miami Beach's most beloved brunch since 2012.
          What started as an Italian owner's passion project has become a culinary institution.
        </p>

        <h3>The Famous Lobster Eggs Benedict</h3>

        <p>
          Our signature dish—and the reason many guests return week after week—is the
          <strong>Lobster Eggs Benedict</strong>. Butter-poached Maine lobster sits atop a
          perfectly toasted English muffin, crowned with two flawlessly poached eggs and
          draped in silky hollandaise. At $33, it's an indulgence worth every penny.
        </p>

        <h3>Signature Mimosas & Craft Cocktails</h3>

        <p>
          No Miami Beach brunch is complete without cocktails. Our <strong>signature mimosas</strong>
          feature cold-pressed orange juice and premium prosecco. For something different, try our
          house-made Bloody Mary with bacon and olives, or the Wake Me Up—a perfect blend of
          vodka, Baileys, and espresso.
        </p>

        <h2>The Perfect Setting</h2>

        <p>
          What truly sets The Local House apart is the atmosphere. Our <strong>Ocean Drive location</strong>
          offers the quintessential Miami Beach experience—palm trees swaying, art deco architecture
          gleaming in the morning sun, and the Atlantic Ocean just steps away. Whether you choose
          our tropical outdoor terrace or the elegant indoor dining room with its signature blue
          ceiling, you're in for an unforgettable experience.
        </p>

        <h2>Brunch Hours & Reservations</h2>

        <p>
          We serve brunch <strong>daily from 8AM to 4PM</strong>. While walk-ins are welcome,
          we highly recommend making reservations, especially for weekend brunch. You can book
          directly through OpenTable or call us at (305) 538-5529.
        </p>

        <h2>Why Locals Choose The Local House</h2>

        <ul>
          <li>Voted Best Brunch in South Beach multiple years running</li>
          <li>Italian-owned with authentic hospitality since 2012</li>
          <li>Prime Ocean Drive location in exclusive South of Fifth</li>
          <li>Fresh, locally-sourced ingredients</li>
          <li>Craft cocktails and signature mimosas</li>
          <li>Both indoor and outdoor seating available</li>
        </ul>

        <p>
          Ready to experience the best brunch Miami Beach has to offer?
          <Link href="/brunch"><span className="text-[#FF8F75] hover:underline">View our full brunch menu</span></Link>
          or make your reservation today.
        </p>
      </>
    ),
  },
  "south-of-fifth-neighborhood-guide": {
    title: "South of Fifth (SoFi): Miami Beach's Most Exclusive Neighborhood",
    subtitle: "Your Complete Guide to Miami's Best-Kept Secret",
    image: "/images/ocean-drive.jpg",
    date: "December 20, 2025",
    readTime: "7 min read",
    category: "Travel Guide",
    content: (
      <>
        <p>
          <strong>South of Fifth</strong>, affectionately known as SoFi, is Miami Beach's most
          prestigious and sought-after neighborhood. Tucked away at the southern tip of Miami Beach,
          this exclusive enclave offers a more refined, residential atmosphere compared to the
          bustling streets of South Beach proper.
        </p>

        <h2>Where is South of Fifth?</h2>

        <p>
          South of Fifth encompasses the area south of Fifth Street in Miami Beach, bordered by
          the Atlantic Ocean to the east and Biscayne Bay to the west. This small but mighty
          neighborhood spans just a few blocks but packs in some of Miami's most desirable
          real estate, restaurants, and beaches.
        </p>

        <h2>Why Stay in South of Fifth?</h2>

        <h3>1. South Pointe Park</h3>

        <p>
          At the very tip of Miami Beach sits <strong>South Pointe Park</strong>, a 17-acre
          waterfront park offering stunning views of Fisher Island, cruise ships passing through
          Government Cut, and the Miami skyline. It's the perfect spot for morning jogs, sunset
          watching, or a romantic evening stroll.
        </p>

        <h3>2. Less Crowded Beaches</h3>

        <p>
          While the beaches north of Fifth Street can get packed with tourists, the
          <strong>South of Fifth beach</strong> maintains a more relaxed, local vibe.
          The sand is just as pristine, the water just as turquoise, but with a fraction
          of the crowds.
        </p>

        <h3>3. World-Class Dining</h3>

        <p>
          SoFi is home to some of Miami's finest restaurants. From the legendary Joe's Stone Crab
          to intimate Italian trattorias, the neighborhood offers culinary experiences for every
          palate. And of course, <strong>The Local House</strong> on Ocean Drive serves the area's
          most celebrated brunch.
        </p>

        <h3>4. Art Deco Architecture</h3>

        <p>
          Ocean Drive in South of Fifth features some of the best-preserved <strong>Art Deco
          architecture</strong> in Miami Beach. These pastel-colored buildings from the 1930s
          and 40s have been lovingly restored and now house boutique hotels, restaurants, and
          residences.
        </p>

        <h2>Getting Around South of Fifth</h2>

        <p>
          One of SoFi's greatest advantages is its walkability. Everything you need—beaches,
          restaurants, parks, and shops—is within a pleasant stroll. The neighborhood is also
          well-connected to the rest of Miami Beach via the free South Beach Local trolley.
        </p>

        <h2>Where to Stay in South of Fifth</h2>

        <p>
          For the authentic SoFi experience, skip the mega-resorts and opt for a
          <strong>boutique hotel</strong> like The Local House. Our intimate property at
          400 Ocean Drive puts you in the heart of the neighborhood, with the beach,
          South Pointe Park, and the best restaurants all within walking distance.
        </p>

        <p>
          <Link href="/hotel"><span className="text-[#FF8F75] hover:underline">Explore our rooms and suites</span></Link>
          and discover why South of Fifth is Miami Beach's best-kept secret.
        </p>
      </>
    ),
  },
  "ocean-drive-restaurants-guide": {
    title: "Ocean Drive Dining: Where to Eat on Miami's Most Famous Street",
    subtitle: "A Local's Guide to the Best Restaurants on Ocean Drive",
    image: "/images/restaurant-outdoor.jpg",
    date: "December 15, 2025",
    readTime: "6 min read",
    category: "Food & Dining",
    content: (
      <>
        <p>
          <strong>Ocean Drive</strong> is synonymous with Miami Beach. This iconic stretch of
          road, lined with Art Deco buildings and swaying palm trees, has been featured in
          countless movies, TV shows, and music videos. But beyond the neon lights and classic
          cars, Ocean Drive is also home to some of Miami's best dining experiences.
        </p>

        <h2>Navigating Ocean Drive's Restaurant Scene</h2>

        <p>
          Let's be honest: Ocean Drive has its share of tourist traps. With so many options
          competing for attention, it can be hard to separate the authentic gems from the
          overpriced, underwhelming spots. Here's how to dine like a local on Miami's most
          famous street.
        </p>

        <h2>What to Look For</h2>

        <h3>Local Crowds</h3>

        <p>
          The best indicator of a quality restaurant is seeing Miami locals dining there.
          If a spot is filled only with tourists, proceed with caution. Restaurants like
          <strong>The Local House</strong> have earned their reputation by serving both
          visitors and residents who return week after week.
        </p>

        <h3>Fresh, Quality Ingredients</h3>

        <p>
          Miami's proximity to both the ocean and Latin America means access to incredible
          fresh seafood and tropical produce. The best Ocean Drive restaurants take advantage
          of this, featuring locally-sourced ingredients rather than frozen, pre-packaged fare.
        </p>

        <h3>Reasonable Prices</h3>

        <p>
          Yes, you're on Ocean Drive, and yes, there's a premium for the location. But that
          doesn't mean you should pay $30 for a mediocre burger. Quality restaurants offer
          fair value for the experience they provide.
        </p>

        <h2>Best Times to Dine on Ocean Drive</h2>

        <p>
          <strong>Brunch (8AM-4PM):</strong> This is when Ocean Drive truly shines. The morning
          light illuminates the Art Deco facades, the temperature is pleasant, and the vibe is
          relaxed. It's the perfect time to enjoy a leisurely meal with ocean views.
        </p>

        <p>
          <strong>Sunset (5PM-7PM):</strong> Watch the sky turn pink and orange as you sip
          cocktails on an Ocean Drive terrace. This golden hour is magical.
        </p>

        <p>
          <strong>Late Night (10PM+):</strong> Ocean Drive comes alive after dark. While some
          restaurants close early, others transform into vibrant nightlife spots.
        </p>

        <h2>Our Recommendation</h2>

        <p>
          At <strong>The Local House</strong>, we've been serving Ocean Drive since 2012.
          Our Italian-owned restaurant combines Miami's coastal cuisine with European
          hospitality. Whether you're joining us for our famous brunch or an intimate dinner,
          you'll experience the best of what Ocean Drive has to offer.
        </p>

        <p>
          <Link href="/restaurant"><span className="text-[#FF8F75] hover:underline">View our menus</span></Link>
          and <Link onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"><span className="text-[#FF8F75] hover:underline">make a reservation</span></Link>.
        </p>
      </>
    ),
  },
  "boutique-hotels-miami-beach": {
    title: "Why Boutique Hotels Offer the Best Miami Beach Experience",
    subtitle: "Large Resorts vs. Intimate Properties: Making the Right Choice",
    image: "/images/deluxe-king-room.jpg",
    date: "December 10, 2025",
    readTime: "4 min read",
    category: "Travel Tips",
    content: (
      <>
        <p>
          When planning a trip to <strong>Miami Beach</strong>, one of the biggest decisions
          you'll make is where to stay. The area offers everything from massive resort complexes
          to intimate boutique properties. While the big-name hotels have their appeal, there's
          a compelling case for choosing a <strong>boutique hotel</strong> for your Miami Beach stay.
        </p>

        <h2>What is a Boutique Hotel?</h2>

        <p>
          Boutique hotels are typically smaller properties (under 100 rooms) that emphasize
          unique design, personalized service, and a distinct sense of place. Unlike chain
          hotels that offer standardized experiences, boutique properties reflect the character
          of their location and ownership.
        </p>

        <h2>Benefits of Boutique Hotels in Miami Beach</h2>

        <h3>1. Personalized Service</h3>

        <p>
          At a 500-room resort, you're a room number. At a boutique hotel, you're a guest.
          Staff members learn your name, remember your preferences, and go out of their way
          to make your stay special. This level of attention simply isn't possible at larger
          properties.
        </p>

        <h3>2. Authentic Local Experience</h3>

        <p>
          Boutique hotels are often locally owned and operated, which means they're deeply
          connected to the community. At <strong>The Local House</strong>, our Italian owner's
          passion for Miami Beach infuses every aspect of the experience—from the Art Deco
          restoration to the carefully curated restaurant menu.
        </p>

        <h3>3. Prime Locations</h3>

        <p>
          Large resorts need large footprints, which often means they're located away from
          the most desirable areas. Boutique hotels can occupy prime real estate in the heart
          of the action. Our location at <strong>400 Ocean Drive</strong> in South of Fifth
          puts you steps from the beach, South Pointe Park, and the best restaurants.
        </p>

        <h3>4. Unique Character</h3>

        <p>
          Every boutique hotel tells a story. The Local House occupies a beautifully restored
          Art Deco building that our owner fell in love with during the 2009 financial crisis.
          That story—of passion, restoration, and Italian hospitality—is woven into every
          detail of your stay.
        </p>

        <h3>5. Better Value</h3>

        <p>
          Without the overhead of massive properties, boutique hotels can often offer better
          value. You're paying for quality, not for amenities you'll never use. Our
          <strong>$35 daily amenities package</strong> includes beach chairs, umbrellas,
          rooftop pool access, and daily yoga—everything you need, nothing you don't.
        </p>

        <h2>Is a Boutique Hotel Right for You?</h2>

        <p>
          Boutique hotels are ideal for travelers who value authenticity, personalized service,
          and unique experiences over standardized luxury. If you're looking to truly experience
          Miami Beach—not just visit it—a boutique property is the way to go.
        </p>

        <p>
          <Link href="/hotel"><span className="text-[#FF8F75] hover:underline">Discover The Local House</span></Link>
          and see why our guests keep coming back.
        </p>        </>
    ),
  },
  "the-history-of-south-beach-miami": {
    title: "The History of South Beach Miami: From Mangroves to Art Deco Paradise",
    subtitle: "How a Swampy Barrier Island Became America's Riviera",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1920&q=80",
    date: "January 7, 2026",
    readTime: "8 min read",
    category: "History & Culture",
    content: (
      <>
        <p>
          Today, <strong>South Beach Miami</strong> is synonymous with glamour, Art Deco architecture,
          and world-class nightlife. But just over a century ago, this iconic destination was nothing
          more than a mosquito-infested mangrove swamp. The transformation of South Beach from
          uninhabitable wetland to international playground is one of America's most remarkable
          urban development stories.
        </p>

        <h2>The Early Days: Before Miami Beach Existed</h2>

        <p>
          In the 1800s, the barrier island we now call Miami Beach was completely wild. Dense
          mangrove forests lined the shores, and the interior was a tangle of palmetto scrub
          and marshland. The only inhabitants were wildlife—and the occasional shipwrecked sailor.
        </p>

        <p>
          The first attempt at development came in <strong>1870</strong>, when Henry and Charles Lum
          purchased 165 acres to start a coconut plantation. They planted thousands of coconut palms,
          hoping to create a tropical agricultural enterprise. The venture failed—the soil was too
          sandy, and hurricanes destroyed their crops—but those coconut palms would later become
          iconic symbols of Miami Beach.
        </p>

        <h2>The Lummus Brothers and the Birth of Miami Beach</h2>

        <p>
          The true founders of Miami Beach were <strong>John and James Lummus</strong>, who arrived
          in 1912 with a vision. These brothers from Georgia saw potential where others saw swampland.
          They purchased land in what is now <strong>South of Fifth</strong>—the very neighborhood
          where The Local House stands today—and began the monumental task of transforming it into
          a seaside resort community.
        </p>

        <p>
          The Lummus brothers' first subdivision, platted in 1912, was Miami Beach's original
          development. They dredged canals, filled in marshland, and built the first wooden
          structures. Their dream was to create an "American Riviera"—a playground for the wealthy
          that could rival the French Côte d'Azur.
        </p>

        <h2>Carl Fisher: The Man Who Built Miami Beach</h2>

        <p>
          While the Lummus brothers started the development, it was <strong>Carl Fisher</strong>
          who truly built Miami Beach. Fisher, a millionaire entrepreneur who had made his fortune
          in automobile headlights and the Indianapolis Motor Speedway, arrived in 1913 and
          immediately saw the island's potential.
        </p>

        <p>
          Fisher invested millions in dredging Biscayne Bay, using the sand to raise the island's
          elevation and create buildable land. He constructed hotels, polo fields, golf courses,
          and tennis courts. He even imported gondolas from Venice and elephants for publicity stunts.
          By the early 1920s, Miami Beach was the hottest destination in America.
        </p>

        <h2>The Florida Land Boom of the 1920s</h2>

        <p>
          The <strong>1920s</strong> brought unprecedented growth to Miami Beach. The Florida land
          boom attracted speculators from across the country, all hoping to get rich in the tropical
          real estate market. Property values skyrocketed—some lots sold multiple times in a single
          day, each time at a higher price.
        </p>

        <p>
          It was during this era that many of South Beach's iconic buildings were constructed.
          Developers built hotels, apartment buildings, and commercial structures at a frantic pace.
          The architectural style of choice was <strong>Mediterranean Revival</strong>, with its
          red tile roofs, stucco walls, and ornate details.
        </p>

        <p>
          But the boom couldn't last forever. A devastating hurricane in 1926 killed hundreds and
          destroyed much of the new construction. The Great Depression followed in 1929, and
          Miami Beach's first golden age came to an abrupt end.
        </p>

        <h2>The Art Deco Era: South Beach's Architectural Renaissance</h2>

        <p>
          From the ashes of the Depression rose South Beach's most enduring legacy: its
          <strong>Art Deco architecture</strong>. Between 1930 and 1941, developers constructed
          hundreds of buildings in the new Art Deco and Streamline Moderne styles that were
          sweeping the nation.
        </p>

        <p>
          Architects like <strong>Henry Hohauser</strong>, <strong>L. Murray Dixon</strong>, and
          <strong>Albert Anis</strong> designed buildings that were smaller and more affordable
          than the grand Mediterranean Revival hotels of the 1920s. These structures featured
          geometric patterns, nautical motifs, pastel colors, and the distinctive "eyebrows"
          (horizontal ledges above windows) that helped shade interiors from the tropical sun.
        </p>

        <p>
          The result was the largest concentration of Art Deco architecture in the world—over
          800 buildings in a roughly one-square-mile area. Today, this <strong>Art Deco Historic
          District</strong> is a National Historic Landmark and draws millions of visitors annually.
        </p>

        <h2>South of Fifth: Miami Beach's First Neighborhood</h2>

        <p>
          The area south of Fifth Street—where The Local House is located at <strong>400 Ocean
          Drive</strong>—holds special significance in Miami Beach history. This was the Lummus
          brothers' original subdivision, the very first piece of Miami Beach to be developed.
        </p>

        <p>
          Before World War II, South of Fifth was one of the few areas in Miami Beach that welcomed
          Jewish visitors and residents, who faced discrimination elsewhere. This inclusive heritage
          helped shape the neighborhood's character as a welcoming, diverse community.
        </p>

        <p>
          Today, <strong>South of Fifth (SoFi)</strong> is Miami Beach's most exclusive neighborhood,
          home to luxury condominiums, world-class restaurants, and the pristine South Pointe Park.
          The area has come full circle—from Miami Beach's humble beginning to its most prestigious address.
        </p>

        <h2>The Decline and Rebirth of South Beach</h2>

        <p>
          By the 1970s, South Beach had fallen into decline. The Art Deco buildings that had once
          been cutting-edge were now seen as outdated. Many had been converted into low-rent
          apartments or retirement homes. Crime was rampant, and developers were eager to demolish
          the "old" buildings and replace them with modern high-rises.
        </p>

        <p>
          The savior of South Beach was <strong>Barbara Baer Capitman</strong>, a designer and
          preservationist who recognized the architectural significance of the Art Deco district.
          In 1976, she founded the Miami Design Preservation League and began a decades-long
          campaign to save the buildings from demolition.
        </p>

        <p>
          Her efforts paid off in 1979, when the Art Deco Historic District became the first
          20th-century neighborhood to be listed on the National Register of Historic Places.
          This protection sparked a renaissance. Investors began restoring the buildings,
          painting them in the now-iconic pastel colors, and transforming South Beach into
          the glamorous destination it is today.
        </p>

        <h2>South Beach Today: A Living Museum</h2>

        <p>
          Modern South Beach is a unique blend of history and contemporary culture. The Art Deco
          buildings that were nearly demolished now house boutique hotels, trendy restaurants,
          and exclusive nightclubs. Ocean Drive—the street where The Local House welcomes guests
          daily—has become one of the most photographed streets in America.
        </p>

        <p>
          When you walk down Ocean Drive today, you're walking through over a century of history.
          The coconut palms planted by the Lum brothers still sway in the ocean breeze. The Art
          Deco facades designed by Hohauser and Dixon still gleam in the tropical sun. And the
          spirit of the Lummus brothers' dream—an American Riviera where visitors can escape
          the ordinary—lives on in every sunset cocktail and oceanfront brunch.
        </p>

        <h2>Experience the History at The Local House</h2>

        <p>
          At The Local House, we're proud to be part of South Beach's continuing story. Our
          building on Ocean Drive reflects the Art Deco heritage that makes this neighborhood
          special, while our Italian ownership since 2012 adds a new chapter to the area's
          tradition of welcoming visitors from around the world.
        </p>

        <p>
          Whether you're enjoying our famous <strong>Lobster Eggs Benedict</strong> at brunch
          or watching the sunset from our rooftop, you're experiencing the same magic that has
          drawn visitors to South Beach for over a century.
        </p>

        <p>
          <Link href="/brunch"><span className="text-[#FF8F75] hover:underline">Join us for brunch</span></Link>
          and taste the history of South Beach for yourself.
        </p>
      </>
    ),
  },
};

export default function BlogPost(){
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
        <div className="text-center">
          <h1 className="text-4xl font-display font-semibold text-[#4C5254] mb-4">
            {t("blogPost.articleNotFound")}
          </h1>
          <Link href="/blog">
            <span className="text-[#FF8F75] hover:underline">{t("blogPost.backToBlog")}</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-[#FF8F75] text-white text-sm font-medium rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-white/80">
              {post.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container max-w-3xl">
          {/* Meta Info */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-[#E5DED5]">
            <div className="flex items-center gap-4 text-sm text-[#999]">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
            <button className="flex items-center gap-2 text-[#666] hover:text-[#FF8F75] transition-colors">
              <Share2 size={16} />
              {t("blogPost.share")}
            </button>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-[#4C5254]
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-[#666] prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-[#666] prose-li:mb-2
              prose-strong:text-[#4C5254]"
          >
            {post.content}
          </motion.div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-[#E5DED5]">
            <Link href="/blog">
              <span className="inline-flex items-center gap-2 text-[#FF8F75] hover:gap-3 transition-all">
                <ArrowLeft size={16} />
                {t("blogPost.backToBlog")}
              </span>
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-display font-semibold text-[#4C5254] mb-4">
            {t("blogPost.experienceTitle")}
          </h2>
          <p className="text-[#666] mb-8">
            {t("blogPost.experienceDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF8F75] text-white font-medium tracking-wide hover:bg-[#e67c63] transition-all duration-300 rounded"
            >
              {t("common.bookRoom")}
            </a>
            <a
              onClick={() => gtag_report_conversion('https://www.opentable.com/the-local-house')} href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#FF8F75] text-[#FF8F75] font-medium tracking-wide hover:bg-[#FF8F75] hover:text-white transition-all duration-300 rounded"
            >
              {t("blogPost.reserveTable")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
