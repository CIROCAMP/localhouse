import { Download, FileText } from "lucide-react";

export default function MenuSection() {
  const menus = [
    {
      title: "Brunch Menu",
      description: "Our famous brunch featuring the legendary Lobster Eggs Benedict, pancakes, and seasonal specialties. Daily 8AM - 4PM",
      file: "/menus/brunch-menu.pdf",
      icon: "🥂",
      color: "bg-coral",
    },
    {
      title: "Dinner Menu",
      description: "Elegant dinner selections featuring fresh seafood, Italian-inspired pasta, and premium steaks. Evening service available.",
      file: "/menus/dinner-menu.pdf",
      icon: "🍽️",
      color: "bg-sky",
    },
    {
      title: "Drinks Menu",
      description: "Craft cocktails, wine selection, and signature drinks. Perfect for aperitivo or after-dinner drinks.",
      file: "/menus/drinks-menu.pdf",
      icon: "🍸",
      color: "bg-sunshine",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-charcoal mb-4">
            Our Menus
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Explore our carefully curated menus featuring fresh, local ingredients and Italian-inspired cuisine.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Header with Icon */}
              <div className={`${menu.color} p-8 text-center`}>
                <div className="text-5xl mb-3">{menu.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {menu.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-charcoal/80 mb-8 leading-relaxed">
                  {menu.description}
                </p>

                {/* Download Button */}
                <a
                  href={menu.file}
                  download
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-coral text-white font-accent font-semibold rounded hover:bg-coral/90 transition-colors duration-300"
                >
                  <Download size={20} />
                  Download PDF
                </a>

                {/* View Online Link */}
                <a
                  href={menu.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full mt-3 px-6 py-3 border-2 border-coral text-coral font-accent font-semibold rounded hover:bg-coral/10 transition-colors duration-300"
                >
                  <FileText size={20} />
                  View Online
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-charcoal/70 mb-4">
            Have dietary restrictions or allergies? Please inform your server.
          </p>
          <p className="text-sm text-charcoal/50">
            Menus subject to change based on seasonal availability and chef's selections.
          </p>
        </div>
      </div>
    </section>
  );
}
