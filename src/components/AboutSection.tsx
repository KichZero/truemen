import { Phone, MapPin, Clock } from "lucide-react";
import founderImage from "../assets/founder.png";
import founderDenisImage from "../assets/founderDenis.webp";
import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function AboutSection() {
  const founderRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const { t } = useLanguage();

  const schedule = [
    { day: t.schedule.monday, hours: t.schedule.closed },
    { day: t.schedule.tuesday, hours: t.info.hours },
    { day: t.schedule.wednesday, hours: t.info.hours },
    { day: t.schedule.thursday, hours: t.info.hours },
    { day: t.schedule.friday, hours: t.info.hours },
    { day: t.schedule.saturday, hours: t.info.hours },
    { day: t.schedule.sunday, hours: t.schedule.closed },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 border-t border-[#6F3417]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Founders Section */}
          <div
            ref={founderRef.ref}
            className={`transition-all duration-1000 ${
              founderRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                {/* Adrian */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#6F3417] shadow-2xl mb-3 sm:mb-4">
                    <img
                      src={founderImage}
                      alt="Adrian"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-light text-white mb-2">
                    {t.about.founderName1}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-[#6F3417]">
                    {t.about.founderTitle}
                  </p>
                </div>

                {/* Denis */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#6F3417] shadow-2xl mb-3 sm:mb-4 flex items-center justify-center">
                    <img
                      src={founderDenisImage}
                      alt="Denis"
                      className="object-cover object-top"
                      style={{ 
                        objectPosition: "50% 5%",
                        width: "100%",
                        height: "100%",
                        maxWidth: "100%",
                        maxHeight: "100%"
                      }}
                    />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-light text-white mb-2">
                    {t.about.founderName2}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-[#6F3417]">
                    {t.about.founderTitle}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed italic max-w-md text-center px-4">
                {t.about.founderQuote}
              </p>
            </div>
          </div>

          {/* Salon Info Section */}
          <div
            ref={infoRef.ref}
            className={`transition-all duration-1000 delay-200 ${
              infoRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-white">
                  {t.about.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  <strong className="text-white">True Men Barber</strong>{" "}
                  {t.about.text1}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#6F3417] flex-shrink-0"></div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300">
                      {t.about.features.equipment}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#6F3417] flex-shrink-0"></div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300">
                      {t.about.features.approach}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#6F3417] flex-shrink-0"></div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300">
                      {t.about.features.atmosphere}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#6F3417] flex-shrink-0"></div>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300">
                      {t.about.features.drinks}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 border-t border-[#6F3417]/30 pt-6 sm:pt-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F3417] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 mb-1 text-sm sm:text-base">
                      {t.about.address}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl break-words">
                      {t.map.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F3417] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 mb-1 text-sm sm:text-base">
                      {t.about.phone}
                    </p>
                    <a
                      href="tel:069019141"
                      className="text-base sm:text-lg md:text-xl hover:text-[#6F3417] transition-colors"
                    >
                      0690 19 141
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#6F3417] mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                      {t.about.schedule}
                    </p>
                    <div className="space-y-2">
                      {schedule.map((s, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center text-sm sm:text-base"
                        >
                          <span className="text-gray-400">{s.day}</span>
                          <span
                            className={
                              s.hours === t.schedule.closed
                                ? "text-gray-600"
                                : "text-white"
                            }
                          >
                            {s.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

