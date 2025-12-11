import { Calendar, Star } from "lucide-react";
import logoBarber from "../assets/logoBarber.jpg";
import { useLanguage } from "../contexts/LanguageContext";

const BOOKING_URL = "https://n1380884.alteg.io";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="min-h-screen flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 pt-20 sm:pt-24 md:pt-28"
      style={{ overflow: "visible" }}
    >
      <div
        className="max-w-5xl mx-auto w-full"
        style={{ overflow: "visible" }}
      >
        {/* Logo and Description */}
        <div
          className="text-center mb-6 sm:mb-7 md:mb-8"
          style={{ overflow: "visible" }}
        >
          <div className="mb-4 sm:mb-5 md:mb-6 flex justify-center animate-fade-in">
            <img
              src={logoBarber}
              alt="True Men Barber Logo"
              draggable="false"
              className="w-52 h-52 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full object-cover border-4 border-[#6F3417] select-none"
            />
          </div>
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-3 sm:mb-4 md:mb-5 tracking-tight px-4">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2 sm:mb-3 md:mb-4 font-light px-4">
            {t.hero.subtitle}
          </p>
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-4 sm:mb-5 md:mb-6 font-light px-4">
            {t.hero.subtitle2}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-black px-10 sm:px-8 md:px-10 py-5 sm:py-4 md:py-5 text-lg sm:text-base md:text-lg lg:text-xl font-medium hover:bg-[#6F3417] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-xl"
            >
              <Calendar className="w-6 h-6 sm:w-5 sm:h-5" />
              {t.hero.bookButton}
            </a>
            <a
              href="#prices"
              className="w-full sm:w-auto border-2 border-[#6F3417] px-10 sm:px-8 md:px-10 py-5 sm:py-4 md:py-5 text-lg sm:text-base md:text-lg lg:text-xl font-medium hover:bg-[#6F3417] hover:text-white transition-all duration-300 rounded-xl"
            >
              {t.hero.pricesButton}
            </a>
          </div>
        </div>

        {/* Info Cards - 3 equal boxes */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-4">
          {/* Working Hours */}
          <div className="relative bg-black/60 backdrop-blur-md rounded-lg sm:rounded-3xl p-2 sm:p-5 md:p-6 text-center shadow-lg">
            <div className="corner-border-top-left"></div>
            <div className="corner-border-top-right"></div>
            <div className="corner-border-bottom-left"></div>
            <div className="corner-border-bottom-right"></div>
            <p className="text-gray-400 mb-1 sm:mb-3 text-[9px] sm:text-sm font-light">
              {t.info.working}
            </p>
            <p className="text-sm sm:text-2xl md:text-3xl font-light text-white">
              {t.info.hours}
            </p>
          </div>

          {/* Free Softdrink */}
          <div className="relative bg-black/60 backdrop-blur-md rounded-lg sm:rounded-3xl p-2 sm:p-5 md:p-6 text-center shadow-lg">
            <div className="corner-border-top-left"></div>
            <div className="corner-border-top-right"></div>
            <div className="corner-border-bottom-left"></div>
            <div className="corner-border-bottom-right"></div>
            <p className="text-gray-400 mb-1 sm:mb-3 text-[9px] sm:text-sm font-light">
              {t.info.free}
            </p>
            <p className="text-xs sm:text-xl md:text-2xl font-light text-white">
              {t.info.softdrink}
            </p>
          </div>

          {/* Rating */}
          <div className="relative bg-black/60 backdrop-blur-md rounded-lg sm:rounded-3xl p-2 sm:p-5 md:p-6 text-center shadow-lg">
            <div className="corner-border-top-left"></div>
            <div className="corner-border-top-right"></div>
            <div className="corner-border-bottom-left"></div>
            <div className="corner-border-bottom-right"></div>
            <p className="text-gray-400 mb-1 sm:mb-3 text-[9px] sm:text-sm font-light">
              {t.info.rating}
            </p>
            <div className="flex items-center justify-center gap-1">
              <Star className="w-2.5 h-2.5 sm:w-5 sm:h-5 fill-[#6F3417] text-[#6F3417]" />
              <span className="text-sm sm:text-2xl md:text-3xl font-light text-white">
                5.0
              </span>
              <span className="text-gray-500 text-[10px] sm:text-base">
                (38)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

