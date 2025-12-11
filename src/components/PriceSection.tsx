import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { BOOKING_URL } from "../constants";

export function PriceSection() {
  const titleRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const { t } = useLanguage();
  const [priceVisible, setPriceVisible] = useState<number[]>([]);

  useEffect(() => {
    if (servicesRef.isVisible) {
      t.services.forEach((_, index) => {
        setTimeout(() => {
          setPriceVisible((prev) => [...prev, index]);
        }, index * 150);
      });
    }
  }, [servicesRef.isVisible, t.services]);

  return (
    <section
      id="prices"
      className="min-h-screen flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 border-t border-[#6F3417]"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          ref={titleRef.ref}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-12 sm:mb-16 text-center px-4 transition-all duration-1000 ${
            titleRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {t.prices.title}
        </h2>

        <div
          ref={servicesRef.ref}
          className={`mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${
            servicesRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12 text-gray-400 px-4">
            {t.prices.services}
          </h3>
          <div className="space-y-6 sm:space-y-8 px-4">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-4 sm:gap-6 border-b border-[#6F3417] pb-4 sm:pb-6"
              >
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light break-words">
                    {service.name}
                  </h4>
                </div>
                <div className="text-left sm:text-right flex-shrink-0">
                  <span
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light transition-all duration-500 ${
                      priceVisible.includes(index)
                        ? "text-white opacity-100 scale-100"
                        : "text-[#6F3417] opacity-50 scale-95"
                    }`}
                  >
                    {service.price}
                  </span>
                  <span className="text-gray-500 ml-2 text-base sm:text-lg">
                    L
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16 px-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl md:text-2xl font-medium hover:bg-[#6F3417] hover:text-white transition-all duration-300 inline-flex items-center gap-3 rounded-xl"
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            {t.prices.bookButton}
          </a>
        </div>
      </div>
    </section>
  );
}

