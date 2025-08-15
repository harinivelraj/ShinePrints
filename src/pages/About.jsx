import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};
