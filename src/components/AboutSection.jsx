import React from "react";
import { Link } from "react-router-dom";
import { StarBackground } from "./StarBackground";
import machineImg from "../assets/machine.jpg";
import heroImg from "../assets/hero.jpg";
import reactLogo from "../assets/react.svg";

export const AboutSection = () => {
  return (
    <>
      <StarBackground />
      <section id="about" className="relative py-24 px-4 bg-gradient-to-b from-primary/20 via-primary/10 to-secondary/20 text-gray-100">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="container mx-auto max-w-5xl relative z-10 space-y-20">
          {/* Who We Are */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#f35009]">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                We are Shine Prints, delivering premium printing solutions with over 20 years of experience. Committed to quality, innovation, and sustainable practices that help brands stand out.
              </p>
              <Link to="/products" className="inline-block px-8 py-4 bg-[#a40474] text-white shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                Shop Now
              </Link>
            </div>
            <div className="animate-fade-in-delay-1">
              <img src={machineImg} alt="Our Machinery" className="w-full rounded-2xl shadow-2xl border-2 border-primary" />
            </div>
          </div>

           {/* Our Journey */}
          <div className="space-y-10">
            <h2 className="text-5xl font-extrabold text-center text-[#f35009] animate-fade-in">
              Our Journey
            </h2>
            <ul className="relative flex flex-col md:flex-row justify-between md:items-center space-y-6 md:space-y-0">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full border-l-2 border-primary"></div>
               <li className="flex-1 text-center animate-fade-in-delay-1">
                <div className="inline-block p-4 bg-[#a40474] rounded-full mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">2010</span>
                </div>
                <p className="text-gray-300">Founded with a vision for quality.</p>
               </li>
               <li className="flex-1 text-center animate-fade-in-delay-2">
                <div className="inline-block p-4 bg-[#a40474] rounded-full mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">2015</span>
                </div>
                <p className="text-gray-300">Expanded to include large-format printing.</p>
               </li>
               <li className="flex-1 text-center animate-fade-in-delay-3">
                <div className="inline-block p-4 bg-[#a40474] rounded-full mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">2020</span>
                </div>
                <p className="text-gray-300">Launched eco-friendly product line.</p>
               </li>
               <li className="flex-1 text-center animate-fade-in-delay-4">
                <div className="inline-block p-4 bg-[#a40474] rounded-full mb-4 shadow-lg">
                  <span className="text-xl font-bold text-white">2025</span>
                </div>
                <p className="text-gray-300">Serving 10,000+ satisfied clients.</p>
               </li>
             </ul>
          </div>

           {/* What We Do */}
          <div className="space-y-10">
            <h2 className="text-5xl font-extrabold text-center text-[#f35009] animate-fade-in">
              What We Do
            </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300 animate-fade-in">
                  <img src={machineImg} alt="Business Essentials" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
                 <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Business Essentials</h3>
                <p className="text-gray-300">Professional stationery & marketing materials.</p>
               </div>
               <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300 animate-fade-in-delay-1">
                  <img src={heroImg} alt="Premium Packaging" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
                 <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Premium Packaging</h3>
                <p className="text-gray-300">Custom boxes & labels that stand out.</p>
               </div>
               <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300 animate-fade-in-delay-2">
                  <img src={reactLogo} alt="Creative Prints" className="mx-auto mb-4 w-20 h-20 object-contain rounded-full border-2 border-primary" />
                 <h3 className="text-xl font-semibold mb-2 text-[#a40474]">Creative Prints</h3>
                <p className="text-gray-300">Eye-catching banners, posters, and more.</p>
               </div>
             </div>
           </div>
         </div>
       </section>
     </>
   );
};
