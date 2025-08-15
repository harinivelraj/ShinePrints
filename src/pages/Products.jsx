import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";

export const Products = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main className="py-24 px-4">
        {/* Product listings removed, dropdown under 'Projects' in navbar now provides navigation */}
      </main>
      <Footer />
    </div>
  );
};
