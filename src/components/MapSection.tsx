import { MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MAPS_EMBED_URL, MAPS_DIRECTIONS_URL } from "../constants";

export function MapSection() {
  const titleRef = useScrollAnimation();
  const mapRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center w-full border-t border-[#6F3417] py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        <h2
          ref={titleRef.ref}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 sm:mb-4 text-center px-4 transition-all duration-1000 ${
            titleRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {t.map.title}
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Address Info - Above Map */}
          <div
            ref={infoRef.ref}
            className={`transition-all duration-1000 delay-200 ${
              infoRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-start gap-3 sm:gap-4 justify-center max-w-3xl mx-auto">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F3417] mt-1 flex-shrink-0" />
              <div className="text-center sm:text-left">
                <p className="text-gray-400 mb-2 text-sm sm:text-base font-light">
                  {t.about.address}
                </p>
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl md:text-2xl font-light text-white break-words mb-3 hover:text-[#6F3417] transition-colors cursor-pointer inline-block"
                >
                  {t.map.address}
                </a>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light italic mb-3">
                  {t.map.description}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-[#6F3417] font-light">
                  {t.map.welcome}
                </p>
              </div>
            </div>
          </div>

          {/* Map - Full Width */}
          <div
            ref={mapRef.ref}
            className={`transition-all duration-1000 delay-300 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] ${
              mapRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden relative">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Open directions in Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
