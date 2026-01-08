import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SEOHead, seoConfigs } from "@/components/SEOHead";
import { SEOSchema } from "@/components/SEOSchema";

/*
 * Design: Miami Art Deco Revival
 * Contact page with form, map, and contact info
 */

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div>
      {/* SEO Components */}
      <SEOHead {...seoConfigs.contact} />
      <SEOSchema page="contact" />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/ocean-drive.jpg"
            alt="Ocean Drive Miami Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-white/80">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-px bg-[#FF8F75] mb-6" />
              <h2 className="text-4xl font-display font-semibold text-[#4C5254] mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="https://maps.google.com/?q=400+Ocean+Dr,+Miami+Beach,+FL+33139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#FF8F75]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#FF8F75]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4C5254] mb-1">Address</h3>
                    <p className="text-[#666]">
                      400 Ocean Drive<br />
                      Miami Beach, FL 33139<br />
                      South of Fifth (SoFi)
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+13055385529"
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#FF8F75]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#FF8F75]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4C5254] mb-1">Phone</h3>
                    <p className="text-[#666]">(305) 538-5529</p>
                  </div>
                </a>

                <a
                  href="mailto:info@localhouse.com"
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#FF8F75]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#FF8F75]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4C5254] mb-1">Email</h3>
                    <p className="text-[#666]">info@localhouse.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-12 h-12 bg-[#FF8F75]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#FF8F75]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4C5254] mb-1">Hours</h3>
                    <div className="text-[#666] space-y-1">
                      <p><span className="font-medium">Front Desk:</span> 8AM – 10PM daily</p>
                      <p><span className="font-medium">Brunch:</span> 8AM – 4PM daily</p>
                      <p><span className="font-medium">Dinner:</span> 4PM – 10PM (Closed Mondays)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-[#4C5254] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/thelocalhouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#FF8F75] hover:text-white transition-colors text-[#4C5254]"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/localhousemiami/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#FF8F75] hover:text-white transition-colors text-[#4C5254]"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://wa.me/13055385529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#FF8F75] hover:text-white transition-colors text-[#4C5254]"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@thelocalhouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#FF8F75] hover:text-white transition-colors text-[#4C5254]"
                  >
                    <Music size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-display font-semibold text-[#4C5254] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#4C5254] mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John"
                        className="bg-[#FAF7F2] border-[#E5DED5]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4C5254] mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        className="bg-[#FAF7F2] border-[#E5DED5]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4C5254] mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-[#FAF7F2] border-[#E5DED5]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4C5254] mb-2">
                      Phone (optional)
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-[#FAF7F2] border-[#E5DED5]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4C5254] mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      placeholder="How can we help?"
                      className="bg-[#FAF7F2] border-[#E5DED5]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4C5254] mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more..."
                      rows={5}
                      className="bg-[#FAF7F2] border-[#E5DED5] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#FF8F75] hover:bg-[#e67c63] text-white py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-[#E5DED5]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.0876!2d-80.1302!3d25.7689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4a5e7e7e7e7%3A0x0!2s400%20Ocean%20Dr%2C%20Miami%20Beach%2C%20FL%2033139!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="The Local House Location"
        />
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#FAF7F2] rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-display font-semibold text-[#4C5254] mb-2">
                Restaurant Reservations
              </h3>
              <p className="text-[#666] mb-4">Book your table on OpenTable</p>
              <span className="text-[#FF8F75] font-medium">Reserve Now →</span>
            </a>

            <a
              href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-[#FAF7F2] rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-display font-semibold text-[#4C5254] mb-2">
                Hotel Reservations
              </h3>
              <p className="text-[#666] mb-4">Book your room directly</p>
              <span className="text-[#FF8F75] font-medium">Book Now →</span>
            </a>

            <a
              href="tel:+13055385529"
              className="p-8 bg-[#FAF7F2] rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-display font-semibold text-[#4C5254] mb-2">
                Call Us
              </h3>
              <p className="text-[#666] mb-4">Speak with our team directly</p>
              <span className="text-[#FF8F75] font-medium">(305) 538-5529</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
