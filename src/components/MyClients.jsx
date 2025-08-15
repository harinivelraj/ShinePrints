import { StarBackground } from "./StarBackground";
import { Printer, Leaf, Clock, Layout } from "lucide-react";
import company1 from "../assets/company-1.JPG";
import company2 from "../assets/company-2.JPG";
import company3 from "../assets/company-3.JPG";
import company4 from "../assets/company-4.JPG"; // Assuming you have a fourth company image
import testimonial1 from "../assets/client-img.jpg";
import testimonial2 from "../assets/client-img1.jpg";
import testimonial3 from "../assets/client-img2.jpg";
import testimonial4 from "../assets/client-img3.jpg";
import testimonial5 from "../assets/client-img4.jpg";

export const MyClients = () => {
  const clients = [
    { src: company1, alt: "Client 1" },
    { src: company2, alt: "Client 2" },
    { src: company3, alt: "Client 3" },
    { src: company4, alt: "Client 4" },
  ];
  const testimonials = [
    {
      src: testimonial1,
      name: "Alice Johnson",
      feedback:
        "Working with this company was a pleasure. Their attention to detail exceeded expectations!",
    },
    {
      src: testimonial2,
      name: "Michael Smith",
      feedback: "Fast, reliable, and high-quality service. Highly recommended!",
    },
    {
      src: testimonial3,
      name: "Sophia Lee",
      feedback:
        "They turned our vision into reality. Exceptional customer support!",
    },
    {
      src: testimonial4,
      name: "David Brown",
      feedback:
        "Amazing designs and quick delivery. Will work with them again.",
    },
    {
      src: testimonial5,
      name: "Emma Davis",
      feedback:
        "Top-notch quality and professionalism every step of the way.",
    },
  ];

  return (
    <section id="clients" className="relative py-24 px-4 overflow-hidden">
      <StarBackground position="absolute" />

      <div className="container mx-auto max-w-5xl text-center z-10">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#f35009]">
          My Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover opacity-0 animate-fade-in"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="mx-auto max-h-20 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Call-to-action for free quote */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 text-[#f35009]">
            Ready to Get Started? Request a Free Quote Today!
          </h3>
          <p className="mt-4 text-white">
            Fill out the form by clicking the button below and our experts will
            reach you soon – Happy shopping
          </p>
          <a
            href="#quote-form"
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg transition hover:opacity-90"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Why Choose Us? (USPs) */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#f35009]">Why Choose Us?</span> <span className="text-[#a4047c]">(USPs)</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Here are the top reasons why you should choose us.
          </p>
        </div>

        {/* USP cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 opacity-0 animate-fade-in">
            <Printer className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-[#f35009] mb-2">High-Quality Prints</h4>
            <p className="text-white">Vibrant, true-to-life color for every project.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 opacity-0 animate-fade-in-delay-1">
            <Leaf className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-[#f35009] mb-2">Eco-Friendly Printing</h4>
            <p className="text-white">Sustainable materials and processes.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 opacity-0 animate-fade-in-delay-2">
            <Clock className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-[#f35009] mb-2">Fast Turnaround</h4>
            <p className="text-white">On-time delivery to meet your deadlines.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 opacity-0 animate-fade-in-delay-3">
            <Layout className="h-12 w-12 text-[#a40474] mx-auto mb-4" />
            <h4 className="font-semibold text-lg text-[#f35009] mb-2">Customizable Designs</h4>
            <p className="text-white">Bulk orders and tailored solutions available.</p>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#f35009]">Customer</span> <span className="text-[#a4047c]">Testimonials</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            <span className="text-[#f35009]">See What Our Customers Say –</span> <span className="text-[#a4047c]">Their Words, Our Pride!</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-lg shadow-xs transform transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <img
                src={t.src}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-xl mb-2 text-center text-[#f35009]">
                {t.name}
              </h4>
              <p className="text-white text-center">
                {t.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
