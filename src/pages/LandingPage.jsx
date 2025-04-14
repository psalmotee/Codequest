import Header from "../components/landingComponents/Header";
import HeroSection from "../components/landingComponents/HeroSection";
import FeaturesSection from "../components/landingComponents/FeaturesSection";
import AboutUsSection from "../components/landingComponents/AboutUsSection";
import ParentsSection from "../components/landingComponents/ParentsSection";
import TeachersSection from "../components/landingComponents/TeachersSection";
import NewsletterSection from "../components/landingComponents/NewsletterSection";
import EnrollSection from "../components/landingComponents/EnrollSection";
import Footer from "../components/landingComponents/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <ParentsSection />
      <TeachersSection />
      <NewsletterSection />
      <EnrollSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
