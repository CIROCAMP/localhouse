import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Gift, Clock, Star } from "lucide-react";

/*
 * Exit Intent Popup for Hospitality
 * Captures users about to leave with special offer
 * Best practice: Show once per session, offer real value
 */

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Also trigger on mobile when user scrolls up quickly (indicating intent to leave)
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY - 100 && currentScrollY < 200 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
      lastScrollY = currentScrollY;
    };

    // Delay adding listeners to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg mx-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#C4846C] to-[#B07460]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Gift className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <h3 className="text-2xl font-display font-semibold">
                      Wait! Don't Leave Yet
                    </h3>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h4 className="text-2xl font-display font-semibold text-[#2D2D2D] mb-3">
                  Get 10% Off Your First Stay
                </h4>
                <p className="text-[#666] mb-6">
                  Book directly and enjoy exclusive perks: free breakfast, late checkout, and the best rate guaranteed.
                </p>

                {/* Trust Signals */}
                <div className="flex justify-center gap-6 mb-6 text-sm text-[#999]">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#D4AF37]" />
                    <span>4.9 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#C4846C]" />
                    <span>Free Cancellation</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href="https://api.mews.com/distributor/5851368a-5f95-4538-9882-ae8a00f9d016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-[#C4846C] text-white font-medium rounded-lg hover:bg-[#B07460] transition-colors"
                  >
                    Claim My 10% Discount
                  </a>
                  <button
                    onClick={handleClose}
                    className="block w-full py-3 text-[#999] hover:text-[#666] transition-colors text-sm"
                  >
                    No thanks, I'll pay full price
                  </button>
                </div>

                {/* Urgency */}
                <p className="mt-4 text-xs text-[#C4846C]">
                  ⏰ Offer expires in 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Newsletter signup popup (alternative version)
export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Show after 30 seconds on page
    const timer = setTimeout(() => {
      const shown = localStorage.getItem("newsletterShown");
      if (!shown) {
        setIsVisible(true);
        localStorage.setItem("newsletterShown", "true");
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-xl border border-[#E5DED5] p-6 max-w-sm"
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-[#999] hover:text-[#666]"
      >
        <X className="w-5 h-5" />
      </button>
      <h4 className="text-lg font-display font-semibold text-[#2D2D2D] mb-2">
        Stay in the Loop
      </h4>
      <p className="text-sm text-[#666] mb-4">
        Get exclusive offers, event invites, and Miami Beach insider tips.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-[#E5DED5] rounded focus:outline-none focus:border-[#C4846C]"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#C4846C] text-white font-medium rounded hover:bg-[#B07460] transition-colors"
        >
          Subscribe
        </button>
      </form>
    </motion.div>
  );
}
