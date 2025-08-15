import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { MyClients } from "../components/MyClients";
import { Footer } from "../components/Footer";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen text-gray-900 overflow-x-hidden relative">
      <StarBackground />
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <SkillsSection />
        <MyClients />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
