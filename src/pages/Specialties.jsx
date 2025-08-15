import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";
import spot6 from "../assets/spot-printing-img-6.jpg";
import spot7 from "../assets/state-of-art2.jpg";
import spot8 from "../assets/state-of-art3.jpg";
import spot1 from "../assets/spot-printing-img-1.jpg";
import spot2 from "../assets/spot-printing-img-2.jpg";
import spot3 from "../assets/spot-printing-img-3.jpg";
import spot4 from "../assets/spot-printing-img-4.jpg";
import spot5 from "../assets/spot-printing-img-5.jpg";
import { Star, Trophy, Leaf } from "lucide-react";
import boxImg from "../assets/box.jpg";
import machineImg from "../assets/machine.jpg";
import folderImg from "../assets/folders.jpg";
import printsImg from "../assets/prints.png";

export const Specialties = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main className="py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-4xl font-bold text-[#f35009]">
            Our Unique Printing Techniques & Spcial Packaging Styles
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcases cutting-edge printing techniques that add value to branding,
            ensuring premium and high-end finishes.
          </p>
        </div>
        {/* Specialty Solutions Cards */}
        <div className="container mx-auto max-w-6xl mt-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot1} alt="4C Plus Spot Printing" className="mx-auto mb-4 w-20 h-20 object-cover border-2 border-primary" />
              <h3 className="text-xl font-semibold">4C Plus Spot Printing</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot2} alt="Stunning Color Accuracy & Depth" className="mx-auto mb-4 w-20 h-20 object-cover border-2 border-primary" />
              <h3 className="text-xl font-semibold">
                Stunning Color Accuracy & Depth
              </h3>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot3} alt="Variable Printing" className="mx-auto mb-4 w-20 h-20 object-cover border-2 border-primary" />
              <h3 className="text-xl font-semibold">Variable Printing</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot4} alt="Personalized & Dynamic Content" className="mx-auto mb-4 w-20 h-20 object-cover border-2 border-primary" />
              <h3 className="text-xl font-semibold">Personalized & Dynamic Content</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot5} alt="Post Press Finishes" className="mx-auto mb-4 w-20 h-20 object-cover border-2 border-primary" />
              <h3 className="text-xl font-semibold">Post Press Finishes</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot6} alt="Premium Coatings & Laminations" className="mx-auto mb-4 w-20 h-20 object-cover border-2 border-primary" />
              <h3 className="text-xl font-semibold">Premium Coatings & Laminations</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot7} alt="Digital Spot UV" className="mx-auto mb-4 w-20 h-20 object-cover border-2 border-primary" />
              <h3 className="text-xl font-semibold">Digital Spot UV</h3>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot8} alt="Luxury Gloss & Matte Effects" className="mx-auto mb-4 w-20 h-20 object-cover border-2 border-primary" />
              <h3 className="text-xl font-semibold">Luxury Gloss & Matte Effects</h3>
            </div>
          </div>
        </div>
        {/* Why Choose Our Specialty Services Section */}
        <div className="container mx-auto max-w-5xl mt-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f35009] text-center">
            Why Choose Our Specialty Services?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            Establishes credibility by highlighting expertise, cutting-edge technology, sustainability, and years of experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot1} alt="State-of-the-Art Printing" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">State-of-the-Art Printing</h3>
              <p className="text-gray-300">Cutting-edge technology ensures precision, perfection, and vibrant results.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot2} alt="Advanced Finishing Techniques" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Advanced Finishing Techniques</h3>
              <p className="text-gray-300">Enhance your prints with Digital Spot UV, Foiling, and Laser Cutting for a premium look.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot3} alt="Trusted by Leading Brands" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Trusted by Leading Brands</h3>
              <p className="text-gray-300">Delivering excellence for 20+ years with a commitment to quality and reliability.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot4} alt="Sustainable & Eco-Friendly Options" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Sustainable & Eco-Friendly Options</h3>
              <p className="text-gray-300">FSC-certified, recyclable printing solutions for a greener, responsible future.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <img src={spot5} alt="Customization & High-Quality Materials" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Customization & High-Quality Materials</h3>
              <p className="text-gray-300">Tailored solutions crafted with the finest materials to meet your unique needs.</p>
            </div>
          </div>
        </div>
        {/* Highlights Section */}
        <div className="container mx-auto max-w-6xl mt-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f35009] text-center">Our Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <Star className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted by 10,000+ Customers</h3>
              <p className="text-gray-300">Delivering satisfaction with every print</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <Trophy className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">20+ Years of Printing Excellence</h3>
              <p className="text-gray-300">Crafting high-quality prints since 2010.</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <Leaf className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly & Premium Quality</h3>
              <p className="text-gray-300">Sustainable materials for a greener tomorrow</p>
            </div>
          </div>
        </div>
        {/* By the Numbers Section */}
        <div className="container mx-auto max-w-6xl mt-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f35009] text-center">By the Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold mb-2">🥇 #1</h3>
              <p className="text-lg font-semibold">Trusted Leader in Labels</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold mb-2">📆 15+</h3>
              <p className="text-lg font-semibold">Years of Experience</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold mb-2">🏷️ 10B+</h3>
              <p className="text-lg font-semibold">Labels Printed</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold mb-2">🌐 500+</h3>
              <p className="text-lg font-semibold">Global Clients</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold mb-2">👥 100+</h3>
              <p className="text-lg font-semibold">Printing Experts</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold mb-2">🌍 50+</h3>
              <p className="text-lg font-semibold">Countries Delivered</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold mb-2">🏭 100+</h3>
              <p className="text-lg font-semibold">Industries Served</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold mb-2">🎨 8+</h3>
              <p className="text-lg font-semibold">Colors (Process & Pantone)</p>
            </div>
          </div>
        </div>
        {/* Premium Specialty Packaging Solutions Section */}
        <div className="container mx-auto max-w-6xl mt-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f35009] text-center">
            Our Premium Specialty Packaging Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <img src={boxImg} alt="Rigid Boxes" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Rigid Boxes</h3>
              <p className="text-gray-300">Premium-quality packaging that combines Luxury & Durable Packaging.</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <img src={machineImg} alt="Custom Packaging Designs" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Custom Packaging Designs</h3>
              <p className="text-gray-300">Uniquely crafted packaging solutions to enhance your brand identity.</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <img src={folderImg} alt="Eco-Friendly & Sustainable" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Eco-Friendly & Sustainable</h3>
              <p className="text-gray-300">Efficient production to meet both small and large-scale packaging needs.</p>
            </div>
            <div className="bg-card backdrop-blur-lg p-8 rounded-xl text-center transform hover:scale-105 transition duration-300">
              <img src={printsImg} alt="Eco-Friendly & Sustainable Materials" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Eco-Friendly & Sustainable Materials</h3>
              <p className="text-gray-300">Efficient production to meet both small and large-scale packaging needs.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
