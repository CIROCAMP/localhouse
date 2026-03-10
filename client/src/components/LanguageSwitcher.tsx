import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
}

export default function LanguageSwitcher({ variant = "light" }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("es") ? "es" : "en";

  const toggle = () => {
    i18n.changeLanguage(currentLang === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
        variant === "dark"
          ? "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
          : "bg-black/5 text-[#4C5254] hover:bg-black/10"
      }`}
      aria-label={currentLang === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <Globe size={14} />
      <span>{currentLang === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
