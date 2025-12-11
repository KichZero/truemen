import { useLanguage } from "../contexts/LanguageContext";

export function LanguageSwitcher() {
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

