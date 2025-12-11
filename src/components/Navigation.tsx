import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { BOOKING_URL } from "../constants";

export function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 border-none ${
        isScrolled
          ? "backdrop-blur-2xl"
          : "backdrop-blur-0"
      }`}
      style={{
        background: isScrolled
          ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.08) 85%, rgba(0, 0, 0, 0.03) 95%, rgba(0, 0, 0, 0) 100%)"
          : "transparent",
        borderBottom: "none",
        boxShadow: "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5 min-h-[64px] flex items-center w-full">
        <div className="flex items-center justify-between w-full">
          <LanguageSwitcher />
          <div
            className={`transition-all duration-500 ease-in-out ${
              isScrolled
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-4 pointer-events-none"
            }`}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg font-medium hover:bg-[#6F3417] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-xl whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.hero.bookButton}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

