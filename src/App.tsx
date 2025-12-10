import { Instagram, Calendar, Phone, MapPin, Clock, Star } from "lucide-react";
import logoBarber from "./assets/logoBarber.jpg";
import founderImage from "./assets/founder.png";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./contexts/LanguageContext";
import { CookieBanner } from "./components/CookieBanner";
import { BookingPopup } from "./components/BookingPopup";

const INSTAGRAM_URL = "https://www.instagram.com/true_men_barber/";
const BOOKING_URL = "https://n1380884.alteg.io";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.56954301538474!2d28.835708059828296!3d47.03836762795855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d390d78dbcd%3A0x42fef4d3673076c4!2sTRUE%20MEN%20BARBER!5e0!3m2!1sru!2s!4v1765380198749!5m2!1sru!2s";

const reviews = [
  {
    name: { ro: "Alexandru", en: "Alexander", ru: "Александр" },
    rating: 5,
    text: {
      ro: "Cel mai bun barbershop din Chișinău! Meșterii sunt adevărați profesioniști, atmosfera este excelentă. Ies mereu mulțumit de rezultat.",
      en: "The best barbershop in Chisinau! The masters are true professionals, the atmosphere is excellent. I always leave satisfied with the result.",
      ru: "Лучший барбершоп в Кишиневе! Мастера настоящие профессионалы, атмосфера отличная. Всегда выхожу довольным результатом.",
    },
    date: { ro: "acum 2 săptămâni", en: "2 weeks ago", ru: "2 недели назад" },
  },
  {
    name: { ro: "Ion", en: "Ivan", ru: "Иван" },
    rating: 5,
    text: {
      ro: "Calitate la cel mai înalt nivel. Atenție la detalii, abordare individuală. Recomand tuturor!",
      en: "Quality at the highest level. Attention to detail, individual approach. I recommend to everyone!",
      ru: "Качество на высшем уровне. Внимание к деталям, индивидуальный подход. Рекомендую всем!",
    },
    date: { ro: "acum 3 săptămâni", en: "3 weeks ago", ru: "3 недели назад" },
  },
  {
    name: { ro: "Dmitri", en: "Dmitry", ru: "Дмитрий" },
    rating: 5,
    text: {
      ro: "Loc excelent! Curățenie, ordine, meșteri profesioniști. Și băutura gratuită - un bonus plăcut.",
      en: "Excellent place! Cleanliness, order, professional masters. And free drink - a pleasant bonus.",
      ru: "Отличное место! Чистота, порядок, профессиональные мастера. И бесплатный напиток - приятный бонус.",
    },
    date: { ro: "acum 1 lună", en: "1 month ago", ru: "1 месяц назад" },
  },
  {
    name: { ro: "Maxim", en: "Maxim", ru: "Максим" },
    rating: 5,
    text: {
      ro: "Vin deja de jumătate de an, mereu tunsoare perfectă. Meșterii știu ce fac, atmosfera super!",
      en: "I've been coming for half a year now, always perfect haircut. The masters know their job, great atmosphere!",
      ru: "Хожу уже полгода, всегда идеальная стрижка. Мастера знают свое дело, атмосфера супер!",
    },
    date: { ro: "acum 1 lună", en: "1 month ago", ru: "1 месяц назад" },
  },
];

// Hook for scroll animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

// Language Switcher Component
function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLanguage("ro")}
        className={`px-3 py-1.5 text-sm font-light transition-all rounded ${
          language === "ro"
            ? "text-white bg-[#6F3417]"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        RO
      </button>
      <button
        onClick={() => setLanguage("ru")}
        className={`px-3 py-1.5 text-sm font-light transition-all rounded ${
          language === "ru"
            ? "text-white bg-[#6F3417]"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 text-sm font-light transition-all rounded ${
          language === "en"
            ? "text-white bg-[#6F3417]"
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        EN
      </button>
    </div>
  );
}

// About Section Component
function AboutSection() {
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
          {/* Founder Section */}
          <div
            ref={founderRef.ref}
            className={`transition-all duration-1000 ${
              founderRef.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Circular Image */}
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-[#6F3417] shadow-2xl mb-4 sm:mb-5">
                <img
                  src={founderImage}
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name Below Circle */}
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white mb-2">
                {t.about.founderName}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-light text-[#6F3417] mb-3 sm:mb-4">
                {t.about.founderTitle}
              </p>
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
              {/* Salon Description */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 sm:mb-6 text-white">
                  {t.about.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  <strong className="text-white">True Men Barber</strong>{" "}
                  {t.about.text1}
                </p>

                {/* Features */}
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

              {/* Contact Info */}
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

// Price Section Component
function PriceSection() {
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

// Works Section Component (Instagram Feed)
function WorksSection() {
  const titleRef = useScrollAnimation();
  const instagramRef = useScrollAnimation();
  const textRef = useScrollAnimation();
  const { t } = useLanguage();

  useEffect(() => {
    // Load Instagram embed script when section is visible
    if (instagramRef.isVisible) {
      const existingScript = document.querySelector(
        'script[src="//www.instagram.com/embed.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // @ts-ignore
        if (window.instgrm) {
          // @ts-ignore
          window.instgrm.Embeds.process();
        }
      }
    }
  }, [instagramRef.isVisible]);

  return (
    <section
      id="works"
      className="min-h-screen flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 border-t border-[#6F3417]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          ref={titleRef.ref}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-8 sm:mb-12 md:mb-16 text-center px-4 transition-all duration-1000 ${
            titleRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {t.works.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Instagram Embed - Left Side */}
          <div
            ref={instagramRef.ref}
            className={`transition-all duration-1000 delay-200 ${
              instagramRef.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative bg-black rounded-2xl border-2 border-[#6F3417] p-4 sm:p-6 overflow-hidden">
              <div className="w-full min-h-[500px] flex items-center justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`${INSTAGRAM_URL}?utm_source=ig_embed&amp;utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "0",
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "calc(100% - 2px)",
                  }}
                >
                  <div style={{ padding: "16px" }}>
                    <a
                      href={INSTAGRAM_URL}
                      style={{
                        background: "#FFFFFF",
                        lineHeight: 0,
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "50%",
                            flexGrow: 0,
                            height: "40px",
                            marginRight: "14px",
                            width: "40px",
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "4px",
                              flexGrow: 0,
                              height: "14px",
                              marginBottom: "6px",
                              width: "100px",
                            }}
                          />
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "4px",
                              flexGrow: 0,
                              height: "14px",
                              width: "60px",
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ padding: "19% 0" }} />
                      <div
                        style={{
                          display: "block",
                          height: "50px",
                          margin: "0 auto 12px",
                          width: "50px",
                        }}
                      >
                        <svg
                          width="50px"
                          height="50px"
                          viewBox="0 0 60 60"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              transform="translate(-511.000000, -20.000000)"
                              fill="#000000"
                            >
                              <g>
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ paddingTop: "8px" }}>
                        <div
                          style={{
                            color: "#3897f0",
                            fontFamily: "Arial,sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 550,
                            lineHeight: "18px",
                          }}
                        >
                          View this profile on Instagram
                        </div>
                      </div>
                      <div style={{ padding: "12.5% 0" }} />
                    </a>
                    <p
                      style={{
                        color: "#c9c8cd",
                        fontFamily: "Arial,sans-serif",
                        fontSize: "14px",
                        lineHeight: "17px",
                        marginBottom: 0,
                        marginTop: "8px",
                        overflow: "hidden",
                        padding: "8px 0 7px",
                        textAlign: "center",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <a
                        href={INSTAGRAM_URL}
                        style={{
                          color: "#c9c8cd",
                          fontFamily: "Arial,sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          lineHeight: "17px",
                          textDecoration: "none",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        True Men Barber (@true_men_barber)
                      </a>
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Text Section - Right Side */}
          <div
            ref={textRef.ref}
            className={`flex flex-col justify-center transition-all duration-1000 delay-300 ${
              textRef.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6 sm:space-y-8 px-4">
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <Instagram className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#6F3417] flex-shrink-0" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white">
                  Instagram
                </h3>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
                {t.works.description}
              </p>

              <div className="pt-4 sm:pt-6">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 sm:gap-4 text-white hover:text-[#6F3417] transition-colors text-base sm:text-lg md:text-xl lg:text-2xl font-light border-2 border-[#6F3417] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl hover:bg-[#6F3417] hover:bg-opacity-10"
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{t.works.instagramLink}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Map Section Component
function MapSection() {
  const titleRef = useScrollAnimation();
  const mapRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const { t } = useLanguage();

  const salonImageUrl =
    "https://lh3.googleusercontent.com/p/AF1QipPdyRg_mp9VyeogAG0QRsSAGivkkeTAu5KuWy-W=s1360-w1360-h1020-rw";

  return (
    <section className="min-h-screen flex flex-col justify-center w-full border-t border-[#6F3417] py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <h2
          ref={titleRef.ref}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 text-center px-4 transition-all duration-1000 ${
            titleRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {t.map.title}
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch">
          {/* Map - Left Side */}
          <div
            ref={mapRef.ref}
            className={`transition-all duration-1000 delay-200 ${
              mapRef.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="w-full h-full min-h-[250px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] rounded-2xl overflow-hidden border-2 border-[#6F3417]">
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
            </div>
          </div>

          {/* Address and Photo - Right Side */}
          <div
            ref={infoRef.ref}
            className={`flex flex-col justify-center transition-all duration-1000 delay-300 ${
              infoRef.isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4 sm:space-y-5">
              {/* Address */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#6F3417] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 mb-1 text-xs sm:text-sm font-light">
                      {t.about.address}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white break-words mb-2 sm:mb-3">
                      {t.map.address}
                    </p>
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light italic">
                      {t.map.description}
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-[#6F3417] font-light mt-2">
                      {t.map.welcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Salon Photo */}
              <div>
                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#6F3417] shadow-2xl">
                  <img
                    src={salonImageUrl}
                    alt="True Men Barber Salon"
                    className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reviews Section Component
function ReviewsSection() {
  const titleRef = useScrollAnimation();
  const reviewsRef = useScrollAnimation();
  const { t, language } = useLanguage();

  return (
    <section
      id="reviews"
      className="min-h-screen flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 border-t border-[#6F3417]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef.ref}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            titleRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 px-4">
            {t.reviews.title}
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 px-4">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-[#6F3417] text-[#6F3417]" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-medium">
              5.0
            </span>
            <span className="text-gray-500 text-base sm:text-lg md:text-xl">
              (38 {t.reviews.reviews})
            </span>
          </div>
        </div>

        <div
          ref={reviewsRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 transition-all duration-1000 delay-200 ${
            reviewsRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-black p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-[#6F3417] hover:border-white transition-all"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-[#6F3417] text-[#6F3417]"
                  />
                ))}
              </div>
              <p className="text-white mb-6 sm:mb-8 leading-relaxed text-lg sm:text-xl md:text-2xl font-light">
                {review.text[language]}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="font-medium text-xl sm:text-2xl md:text-3xl text-white">
                  {review.name[language]}
                </span>
                <span className="text-gray-400 text-base sm:text-lg">
                  {review.date[language]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden max-w-full">
      <CookieBanner />
      <BookingPopup />
      {/* Navigation - Fixed */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl bg-black/70 border-b border-[#6F3417]/30"
            : "backdrop-blur-0 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-5">
          <div className="flex items-center justify-between">
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
                className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg font-medium hover:bg-[#6F3417] hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-xl"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.hero.bookButton}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 pt-20 sm:pt-24 md:pt-28"
        style={{ overflow: "visible" }}
      >
        <div
          className="max-w-5xl mx-auto w-full"
          style={{ overflow: "visible", position: "relative" }}
        >
          {/* Logo and Description */}
          <div
            className="text-center mb-6 sm:mb-7 md:mb-8"
            style={{ overflow: "visible", width: "100%", position: "relative" }}
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

      {/* About Section */}
      <AboutSection />

      {/* Price List */}
      <PriceSection />

      {/* Works Section */}
      <WorksSection />

      {/* Map Section */}
      <MapSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer */}
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
    </div>
  );
}

export default App;
