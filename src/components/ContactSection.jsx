import React from "react";
import { StarBackground } from "./StarBackground";
import { Mail, Phone, Linkedin, Twitter, Instagram, Twitch } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-4 bg-secondary/30 overflow-hidden">
      <StarBackground />
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Locate Us */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-semibold mb-2 text-[#f35009]">Locate Us</h3>
          <p className="text-white">
            Find us & make the real conversation to boost your business - SHINE PRINTS
          </p>
          <p className="text-white mb-4">
            Sannadhi First St, Ganapathy Colony, Royapettah, Chennai, Tamil Nadu 600014
          </p>
          <div className="mx-auto max-w-2xl">
            <iframe
              title="Shine Prints Location"
              src="https://maps.google.com/maps?q=Sannadhi%20First%20St%20Ganapathy%20Colony%20Royapettah%20Chennai%20600014&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="flex justify-between items-center mt-2">
              <span className="font-medium text-[#f35009]">4.4 ★ 14 reviews</span>
              <a
                href="https://maps.google.com/?q=Sannadhi%20First%20St%20Ganapathy%20Colony%20Royapettah%20Chennai%20600014"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#a40474] to-[#ff6700]">
            Get In Touch
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#a40474] to-[#ff6700]">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-[#f35009]">Email</h4>
                  <a href="mailto:info@theshineprints.com" className="text-[#a4047c] hover:text-opacity-80">
                    info@theshineprints.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-[#f35009]">Phone</h4>
                  <a href="tel:+911234567890" className="text-[#a4047c] hover:text-opacity-80">
                    +91 99402 50509
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 text-center">
              <h4 className="font-medium mb-4 text-[#f35009]">Connect With Us</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-white hover:text-primary" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-6 w-6 text-white hover:text-primary" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-white hover:text-primary" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitch className="h-6 w-6 text-white hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-card p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#a40474] to-[#ff6700]">Send a Message</h3>
            <form action="mailto:info@theshineprints.com" method="POST" encType="text/plain" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#f35009]">Name</label>
                <input type="text" id="name" name="Name" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#f35009]">Email</label>
                <input type="email" id="email" name="Email" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-[#f35009]">Mobile Number</label>
                <input type="tel" id="mobile" name="Mobile Number" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Mobile Number" />
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium mb-2 text-[#f35009]">Industry</label>
                <input type="text" id="industry" name="Industry" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Industry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#f35009]">Message</label>
                <textarea id="message" name="Message" rows="4" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="cosmic-button w-full">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
