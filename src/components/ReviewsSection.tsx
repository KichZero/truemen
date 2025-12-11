import { Star } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { reviews } from "../constants";

export function ReviewsSection() {
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

