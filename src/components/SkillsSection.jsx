import { cn } from "@/lib/utils";
import { StarBackground } from "./StarBackground";
import { Star, Trophy, Leaf } from "lucide-react";

export const SkillsSection = () => {
  return (
  <section id="skills" className="py-24 px-4 relative bg-gradient-to-b from-[#0a0f1d] via-[#131724] to-[#1c1e30]">
      <StarBackground />
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Our Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <Star className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2 uppercase tracking-wide text-black">
              Trusted by 10,000+ Customers
            </h3>
            <p className="text-[#ff6700]">
              Delivering satisfaction with every print
            </p>
          </div>
    {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <Trophy className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
            <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#a40474] to-[#ff6700] mb-2 uppercase tracking-wide">
              20+ Years of Printing Excellence
            </h3>
            <p className="text-[#ff6700]">
              Crafting high-quality prints since 2010.
            </p>
          </div>
    {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
            <Leaf className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
            <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#a40474] to-[#ff6700] mb-2 uppercase tracking-wide">
              Eco-Friendly & Premium Quality
            </h3>
            <p className="text-[#ff6700]">
              Sustainable materials for a greener tomorrow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
