import { CookieBanner } from "./components/CookieBanner";
import { BookingPopup } from "./components/BookingPopup";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { PriceSection } from "./components/PriceSection";
import { WorksSection } from "./components/WorksSection";
import { MapSection } from "./components/MapSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden max-w-full">
      <CookieBanner />
      <BookingPopup />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PriceSection />
      <WorksSection />
      <MapSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
