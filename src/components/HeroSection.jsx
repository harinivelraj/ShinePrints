import { ArrowDown } from "lucide-react";
import heroImg from "../assets/hero.jpg";
import { StarBackground } from "./StarBackground";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 pb-16 bg-gradient-to-br from-[#0a0f1d] via-[#131724] to-[#1c1e30] text-white overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
  <StarBackground />
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-stretch justify-center gap-8">
        {/* Left: Text content */}
  <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 backdrop-filter backdrop-blur-lg bg-[#0a0f1d] bg-opacity-50 p-6 md:p-8 rounded-xl shadow-xl h-full">
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Premium Printing Solutions for Business & Personal Needs
          </h1>
          <p className="text-base md:text-lg text-[#f35009]">
            Get quality printing services for all products—business or personal—in
            one place.
          </p>
          <a
            href="#contact"
            className="block w-full mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#a40474] to-[#ff6700] text-white font-semibold shadow-2xl transform transition hover:scale-105 hover:rotate-2"
          >
            Shop Now
          </a>
        </div>
        {/* Right: Hero image */}
        <div className="flex-1 flex items-center justify-center h-full">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
