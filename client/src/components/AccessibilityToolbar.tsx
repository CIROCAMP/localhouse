import { useState } from "react";
import { X, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    disableAnimations: false,
    readableFont: false,
    keyboardNav: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
    applySettings(newSettings);
  };

  const applySettings = (newSettings: typeof settings) => {
    // High Contrast
    if (newSettings.highContrast) {
      document.documentElement.style.filter = "contrast(1.5)";
    } else {
      document.documentElement.style.filter = "contrast(1)";
    }

    // Large Text
    if (newSettings.largeText) {
      document.documentElement.style.fontSize = "18px";
    } else {
      document.documentElement.style.fontSize = "16px";
    }

    // Disable Animations
    if (newSettings.disableAnimations) {
      const style = document.createElement("style");
      style.id = "disable-animations";
      style.innerHTML = `
        * {
          animation: none !important;
          transition: none !important;
        }
      `;
      if (!document.getElementById("disable-animations")) {
        document.head.appendChild(style);
      }
    } else {
      const style = document.getElementById("disable-animations");
      if (style) style.remove();
    }

    // Readable Font
    if (newSettings.readableFont) {
      document.documentElement.style.fontFamily = "Georgia, serif";
    } else {
      document.documentElement.style.fontFamily = "inherit";
    }

    // Keyboard Navigation
    if (newSettings.keyboardNav) {
      const style = document.createElement("style");
      style.id = "keyboard-nav";
      style.innerHTML = `
        *:focus {
          outline: 3px solid #FF8F75 !important;
          outline-offset: 2px !important;
        }
      `;
      if (!document.getElementById("keyboard-nav")) {
        document.head.appendChild(style);
      }
    } else {
      const style = document.getElementById("keyboard-nav");
      if (style) style.remove();
    }

    // Save to localStorage
    localStorage.setItem("a11y-settings", JSON.stringify(newSettings));
  };

  // Load settings from localStorage on mount
  useState(() => {
    const saved = localStorage.getItem("a11y-settings");
    if (saved) {
      const loadedSettings = JSON.parse(saved);
      setSettings(loadedSettings);
      applySettings(loadedSettings);
    }
  });

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-[#FF8F75] hover:bg-[#FF7A5C] text-white rounded-full p-3 shadow-lg transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Accessibility Options"
      >
        <Users size={24} />
      </motion.button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 bg-white rounded-lg shadow-2xl p-6 w-80 border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Accessibility</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {/* High Contrast */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={() => toggleSetting("highContrast")}
                  className="w-5 h-5 rounded border-gray-300 text-[#FF8F75] focus:ring-[#FF8F75]"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">High Contrast</span>
              </label>

              {/* Large Text */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={() => toggleSetting("largeText")}
                  className="w-5 h-5 rounded border-gray-300 text-[#FF8F75] focus:ring-[#FF8F75]"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Increase Text Size</span>
              </label>

              {/* Disable Animations */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={settings.disableAnimations}
                  onChange={() => toggleSetting("disableAnimations")}
                  className="w-5 h-5 rounded border-gray-300 text-[#FF8F75] focus:ring-[#FF8F75]"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Disable Animations</span>
              </label>

              {/* Readable Font */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={settings.readableFont}
                  onChange={() => toggleSetting("readableFont")}
                  className="w-5 h-5 rounded border-gray-300 text-[#FF8F75] focus:ring-[#FF8F75]"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Readable Font</span>
              </label>

              {/* Keyboard Navigation */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={settings.keyboardNav}
                  onChange={() => toggleSetting("keyboardNav")}
                  className="w-5 h-5 rounded border-gray-300 text-[#FF8F75] focus:ring-[#FF8F75]"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">Keyboard Navigation</span>
              </label>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">Your preferences are saved automatically</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
