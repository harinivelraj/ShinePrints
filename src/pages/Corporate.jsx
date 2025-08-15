import React from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";
import calendarImg from "../assets/calender.jpg";
import diaryImg from "../assets/diary-book.jpg";
import diary2Img from "../assets/diary-book2.jpg";
import diary3Img from "../assets/diary-book3.jpg";
import diary4Img from "../assets/diary-book4.jpg";

export const Corporate = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main className="py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f35009] to-[#a40474] bg-clip-text text-transparent">
            Corporate & Bulk Orders - Premium Printing for Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Custom Printing Solutions Tailored for Your Brand, Events & Corporate Needs
          </p>
        </div>
      </main>
      {/* Corporate Feature Cards Section */}
      <section className="relative py-24 px-4">
        <StarBackground />
        <div className="container mx-auto max-w-6xl relative z-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-[#f35009]">Bulk Order Discounts</h3>
            <p className="text-gray-300 mt-2">Competitive Pricing for Large Quantities</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-[#f35009]">Dedicated Account Managers</h3>
            <p className="text-gray-300 mt-2">Hassle-Free Order Processing</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-[#f35009]">Premium Quality & Customization</h3>
            <p className="text-gray-300 mt-2">Tailor-Made Printing Solutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold text-[#f35009]">Fast Turnaround & Delivery</h3>
            <p className="text-gray-300 mt-2">Nationwide & International Shipping</p>
          </div>
        </div>
        </div>
      </section>
      {/* Corporate Product Offerings Section */}
      <section className="relative py-24 px-4">
        <StarBackground />
        <div className="container mx-auto max-w-6xl relative z-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#f35009]">Our Corporate Product Offerings</h2>
        <p className="text-center text-gray-300 mb-8">
          Enhance your brand’s presence with premium custom-printed corporate essentials designed for businesses, events, and promotional needs.
        </p>
        {/* Diaries Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <img src={diaryImg} alt="Diaries" className="rounded-lg shadow-lg max-w-md mx-auto object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Custom Branded Diaries:</h3>
            <p className="text-gray-300 mb-4">Annual diaries with your company logo, custom covers, and tailored layouts.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Daily, Weekly & Monthly Planners:</h3>
            <p className="text-gray-300 mb-4">Options to fit any scheduling style and personal preference.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Hardcover, Softcover, and Spiral Bound Options:</h3>
            <p className="text-gray-300">Choose the perfect binding for durability and style.</p>
          </div>
        </div>
        {/* Calendars Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <img src={calendarImg} alt="Calendars" className="rounded-lg shadow-lg max-w-md mx-auto object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Wall Calendars:</h3>
            <p className="text-gray-300 mb-4">Large format for maximum visibility, perfect for corporate offices.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Desk Calendars:</h3>
            <p className="text-gray-300 mb-4">Practical and stylish, ideal for employee desks and client gifts.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Pocket Calendars:</h3>
            <p className="text-gray-300">Portable, easy-to-use, and customizable for on-the-go use.</p>
          </div>
        </div>
        <hr className="border-t border-primary my-8" />
        {/* Group 3 */}
        {/* Notebooks Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <img src={diary2Img} alt="Notebooks" className="rounded-lg shadow-lg max-w-md mx-auto object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Custom Notebooks:</h3>
            <p className="text-gray-300 mb-4">Add logos, quotes, and colors to notebooks for a memorable brand experience.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Eco-Friendly Paper Options:</h3>
            <p className="text-gray-300 mb-4">Choose from recycled, FSC-certified, or sustainable paper materials.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Notepads:</h3>
            <p className="text-gray-300">Perfect for jotting down ideas, with customizable designs and paper options.</p>
          </div>
        </div>
        {/* Group 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <img src={diary3Img} alt="Brochures" className="rounded-lg shadow-lg max-w-md mx-auto object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Brochures:</h3>
            <p className="text-gray-300 mb-4">High-quality, full-color brochures to showcase your services and products.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Flyers:</h3>
            <p className="text-gray-300 mb-4">Eye-catching designs perfect for promotions, events, and marketing campaigns.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Presentation Folders:</h3>
            <p className="text-gray-300">Custom-branded folders for proposals, reports, and presentations that leave a lasting impression.</p>
          </div>
        </div>
        <hr className="border-t border-primary my-8" />
        {/* Group 5 */}
        {/* Corporate Gifting Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <img src={diary4Img} alt="Corporate Gifting" className="rounded-lg shadow-lg max-w-md mx-auto object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Corporate Greeting Cards:</h3>
            <p className="text-gray-300 mb-4">Custom holiday or thank-you cards to make your clients and employees feel valued.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Branded Office Supplies:</h3>
            <p className="text-gray-300 mb-4">Enhance your brand’s presence in the workspace with visiting cards, letterheads, etc.</p>
            <h3 className="text-xl font-semibold text-[#a40474] mb-2">Gift Boxes & Hampers:</h3>
            <p className="text-gray-300">Premium corporate gifting solutions with personalized packaging.</p>
          </div>
        </div>
        <hr className="border-t border-primary my-8" />
         </div>
       </section>
      <Footer />
    </div>
  );
};
