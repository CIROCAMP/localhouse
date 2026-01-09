import { motion, AnimatePresence } from "framer-motion";

// Declare global tracking functions
declare global {
  interface Window {
    trackOpenTableClick?: () => void;
    trackMewsClick?: () => void;
  }
}
import { useState, useEffect } from "react";
import { Users, Clock, Flame, Star, MapPin } from "lucide-react";

/*
 * Social Proof & Urgency Components for Hospitality
 * - Live visitor count
 * - Recent bookings notification
 * - Limited availability alerts
 * - Real-time activity feed
 */

// Simulated recent bookings data
const recentBookings = [
  { name: "Sarah M.", location: "New York", type: "brunch", time: "2 min ago" },
  { name: "Marco T.", location: "Milan", type: "room", time: "5 min ago" },
  { name: "Jennifer L.", location: "London", type: "brunch", time: "8 min ago" },
  { name: "David K.", location: "Chicago", type: "room", time: "12 min ago" },
  { name: "Emma R.", location: "Toronto", type: "brunch", time: "15 min ago" },
  { name: "Lucas P.", location: "Paris", type: "room", time: "18 min ago" },
];

// Live notification popup
export function BookingNotification() {
  const [currentBooking, setCurrentBooking] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Rotate through bookings
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentBooking((prev) => (prev + 1) % recentBookings.length);
        setIsVisible(true);
      }, 500);
    }, 12000);

    // Auto-hide after 6 seconds
    const hideInterval = setInterval(() => {
      setTimeout(() => setIsVisible(false), 6000);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      clearInterval(hideInterval);
    };
  }, []);

  const booking = recentBookings[currentBooking];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-24 left-4 z-50 bg-white rounded-lg shadow-xl border border-[#E5DED5] p-4 max-w-xs"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF8F75]/10 flex items-center justify-center flex-shrink-0">
              {booking.type === "room" ? (
                <MapPin className="w-5 h-5 text-[#FF8F75]" />
              ) : (
                <Star className="w-5 h-5 text-[#FF8F75]" />
              )}
            </div>
            <div>
              <p className="text-sm text-[#4C5254]">
                <span className="font-semibold">{booking.name}</span> from{" "}
                {booking.location}
              </p>
              <p className="text-xs text-[#666]">
                {booking.type === "room"
                  ? "just booked a room"
                  : "reserved a table for brunch"}
              </p>
              <p className="text-xs text-[#999] mt-1">{booking.time}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Urgency banner for limited availability
export function UrgencyBanner() {
  const [roomsLeft, setRoomsLeft] = useState(3);
  const [tablesLeft, setTablesLeft] = useState(4);
  const [peopleViewing, setPeopleViewing] = useState(127);

  // Update availability every 10 minutes (600000ms)
  useEffect(() => {
    const generateRandomData = () => {
      setRoomsLeft(Math.floor(Math.random() * 5) + 1); // 1-5 rooms
      setTablesLeft(Math.floor(Math.random() * 6) + 2); // 2-8 tables
      setPeopleViewing(Math.floor(Math.random() * 250) + 50); // 50-300 people
    };

    // Generate initial data
    generateRandomData();

    // Update every 10 minutes
    const interval = setInterval(generateRandomData, 600000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-[#FF8F75] to-[#e67c63] text-white py-2 px-4"
    >
      <div className="container flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-yellow-300 animate-pulse" />
          <span>
            <strong>Only {roomsLeft} rooms left</strong> for this weekend
          </span>
        </div>
        <div className="hidden md:block w-px h-4 bg-white/30" />
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>
            <strong>{tablesLeft} brunch tables</strong> available tomorrow
          </span>
        </div>
        <div className="hidden md:block w-px h-4 bg-white/30" />
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>
            <strong>{peopleViewing} people</strong> viewing now
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Sticky booking bar for mobile
export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E5DED5] shadow-lg p-3 md:hidden"
        >
          <div className="flex gap-2">
            <a
              onClick={() => window.trackOpenTableClick?.()} href="https://www.opentable.com/the-local-house"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-[#FF8F75] text-white text-center font-medium rounded hover:bg-[#e67c63] transition-colors"
            >
              Book Table
            </a>
            <a
              href="https://www.booking.com/hotel/us/sense-south-beach.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-[#4C5254] text-white text-center font-medium rounded hover:bg-[#3D3D3D] transition-colors"
            >
              Book Room
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Live activity indicator
export function LiveActivityIndicator() {
  return (
    <div className="flex items-center gap-2 text-sm text-[#666]">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span>127 people viewing</span>
    </div>
  );
}

// Best seller badge
export function BestSellerBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -top-2 -right-2 bg-[#FF8F75] text-white text-xs font-bold px-2 py-1 rounded-full z-10">
        #1 BEST SELLER
      </div>
      {children}
    </div>
  );
}

// Limited time offer badge
export function LimitedOfferBadge({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
      className="inline-flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
    >
      <Flame className="w-3 h-3" />
      {text}
    </motion.div>
  );
}
