import { Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { INSTAGRAM_URL } from "../constants";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-[#6F3417]">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-[#6F3417] transition-colors mb-6 sm:mb-8 text-base sm:text-lg md:text-xl px-4"
        >
          <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          <span>@true_men_barber</span>
        </a>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 px-4">
          {t.footer.copyright}
        </p>
        <p className="text-gray-600 text-xs sm:text-sm px-4">
          Powered by{" "}
          <a
            href="https://ethoit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6F3417] hover:text-white transition-colors"
          >
            EthoIT
          </a>
        </p>
      </div>
    </footer>
  );
}

