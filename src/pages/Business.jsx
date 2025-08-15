import React, { useEffect } from "react";
// Removed unused Link import
import { Navbar } from "../components/Navbar";
// Imported assets for stationery cards
import letterHeadImg from "../assets/letter-head.png";
import complimentSlipImg from "../assets/cslip.jpg";
import certificateImg from "../assets/certificates.jpg";
import cdLabelsImg from "../assets/cd.jpg";
import greetingCardsImg from "../assets/greetings.jpg";
import envelopesImg from "../assets/envelope.jpg";
import folderImg from "../assets/folders.jpg";
import billBooksImg from "../assets/billbook.png";
import { StarBackground } from "../components/StarBackground";
import { Footer } from "../components/Footer";

export const Business = () => {
  useEffect(() => {
    document.title = "Stand Out with Premium Business Cards & Office Stationeries";
  }, []);
  
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
  <StarBackground />
  <Navbar />
  <main className="relative z-10 py-24 px-4">
        <div className="container mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-4xl font-bold text-[#f35009]">Stand Out with Premium Business Cards & Office Stationeries</h2>
          <p className="text-lg text-muted-foreground">
            High-quality, custom-designed business essentials to make a lasting impression.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="container mx-auto max-w-6xl mt-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Premium Quality Printing</h3>
              <p className="text-gray-300">Delivering satisfaction with every print</p>
            </div>
            <div className="bg-card backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Custom Design & Finishing Options</h3>
              <p className="text-gray-300">(Glossy, Matte, Textured)</p>
            </div>
            <div className="bg-card backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Fast Turnaround Time & Bulk Order Discounts</h3>
              <p className="text-gray-300">Faster delivery across the globe, and get the best discounts on bulk orders</p>
            </div>
          </div>
        </div>

        {/* Business Stationery Offerings Section */}
        <div className="container mx-auto max-w-6xl mt-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#f35009]">Our Business Stationery Offerings</h2>
          <p className="text-center text-gray-300 mb-8">
            Discover our top-notch Business Stationery designed to elevate your brand.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card: Letterhead */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <img src={letterHeadImg} alt="Letterhead" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold">Letterhead</h3>
            </div>
            {/* Card: Compliment Slip */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <img src={complimentSlipImg} alt="Compliment Slip" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold">Compliment Slip</h3>
            </div>
            {/* Card: Certificate */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <img src={certificateImg} alt="Certificate" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold">Certificate</h3>
            </div>
            {/* Card: CD Labels */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <img src={cdLabelsImg} alt="CD Labels" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold">CD Labels</h3>
            </div>
            {/* Card: Greeting Cards */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <img src={greetingCardsImg} alt="Greeting Cards" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold">Greeting Cards</h3>
            </div>
            {/* Card: Envelopes */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <img src={envelopesImg} alt="Envelopes" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold">Envelopes</h3>
            </div>
            {/* Card: Folder */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <img src={folderImg} alt="Folder" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold">Folder</h3>
            </div>
            {/* Card: Bill Books */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition duration-300">
              <img src={billBooksImg} alt="Bill Books" className="mx-auto mb-4 w-20 h-20 object-cover rounded-full border-2 border-primary" />
              <h3 className="text-xl font-semibold">Bill Books</h3>
            </div>
          </div>
        </div>

        {/* Custom Printing Services Section */}
        <section className="relative py-24 px-4">
          <StarBackground />
          <div className="container mx-auto max-w-6xl px-4 relative z-10 space-y-8">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-[#f35009]">Our Custom Printing Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { emoji: '📄', title: 'Custom Office Letterhead Printing' },
                { emoji: '💳', title: 'Custom Front & Back Business Cards' },
                { emoji: '🏷️', title: 'Custom Rectangle Labels Printing' },
                { emoji: '📇', title: 'Custom Tent Cards | Table Display Cards' },
                { emoji: '📰', title: 'Custom A4/A5 Flyers and Brochures | Single or Double Side Printing' },
                { emoji: '📒', title: 'Custom Wiro Spiral Notebooks | A4 & A5 | Ruled, Plain & Dot Grid' },
                { emoji: '📜', title: 'Custom Certificate Printing' },
                { emoji: '📄', title: 'Standard A3/A4/A5 Printed Sheets' }
              ].map(({ emoji, title }, idx) => (
                <div
                  key={idx}
                  className="bg-white/20 backdrop-blur-2xl rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{emoji}</div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm">
                    Learn more about our {title.toLowerCase()} services.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
