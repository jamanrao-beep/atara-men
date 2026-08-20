import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TrustBanner from "./components/TrustBanner";
import CategoryGrid from "./components/CategoryGrid";
import RevolvingGallery from "./components/RevolvingGallery";
import BestSellers from "./components/BestSellers";
import EditorialBanner from "./components/EditorialBanner";
import Newsletter from "./components/Newsletter";
import IntroSequence from "./components/IntroSequence";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <IntroSequence>
      <Navbar />
      <main>
        <FadeIn delay={0.2}>
          <HeroSection />
        </FadeIn>
        
        <FadeIn>
          <TrustBanner />
        </FadeIn>
        
        <FadeIn>
          <RevolvingGallery />
        </FadeIn>
        
        <FadeIn>
          <BestSellers />
        </FadeIn>
        
        <FadeIn>
          <EditorialBanner />
        </FadeIn>
        
        <FadeIn>
          <Newsletter />
        </FadeIn>
      </main>
      <Footer />
    </IntroSequence>
  );
}
