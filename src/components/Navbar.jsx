import logo from "../assets/logo.png";
import { StarBackground } from "./StarBackground";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
  <div className="relative overflow-visible">
        <StarBackground />
        <div className="relative z-10">
          {/* Top Bar */}
          <nav className="w-full bg-[#222] text-white py-2 px-4 shadow-md">
            <div className="container mx-auto flex items-center justify-center">
              <span className="text-sm font-medium flex items-center gap-4">
                <a href="mailto:info@theshineprints.com" className="hover:underline">info@theshineprints.com</a>
                <span>|</span>
                <a href="tel:+919940250509" className="hover:underline">+91 99402 50509</a>
              </span>
            </div>
          </nav>

          {/* Main Navigation Bar */}
          <nav className="w-full bg-white text-[#222] py-3 px-4 shadow-sm border-b">
            <div className="container mx-auto flex items-center justify-between">
              <img src={logo} alt="Shine Prints Logo" className="h-10" />
              <ul className="flex flex-nowrap gap-6 md:gap-10 font-semibold text-base md:text-lg">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li className="relative group">
                  <span className="hover:text-primary transition-colors cursor-pointer">Products</span>
                  <ul className="absolute hidden group-hover:block bg-white text-[#222] shadow-lg mt-2 py-2 z-20 left-1/2 transform -translate-x-1/2 w-auto min-w-max">
                    <li><Link to="/products/business-cards" className="block px-4 py-2 hover:bg-gray-100">Business Cards & Office Stationery</Link></li>
                    <li><Link to="/products/packaging-labels" className="block px-4 py-2 hover:bg-gray-100">Packaging Labels & Solutions</Link></li>
                    <li><Link to="/products/food-grade-packaging" className="block px-4 py-2 hover:bg-gray-100">Food grade Packaging</Link></li>
                    <li><Link to="/products/mono-carton-boxes" className="block px-4 py-2 hover:bg-gray-100">Mono Carton Boxes</Link></li>
                    <li><Link to="/products/tags" className="block px-4 py-2 hover:bg-gray-100">Tags</Link></li>
                    <li><Link to="/products/flyers-brochures" className="block px-4 py-2 hover:bg-gray-100">Flyers & Brochures</Link></li>
                    <li><Link to="/products/certificates" className="block px-4 py-2 hover:bg-gray-100">Certificates</Link></li>
                    <li><Link to="/products/invitations-greeting-cards" className="block px-4 py-2 hover:bg-gray-100">Invitations & Greeting Cards</Link></li>
                    <li><Link to="/products/books-magazines" className="block px-4 py-2 hover:bg-gray-100">Books & Magazines</Link></li>
                    <li><Link to="/products/coffee-table-books" className="block px-4 py-2 hover:bg-gray-100">Coffee Table Books</Link></li>
                    <li><Link to="/products/posters" className="block px-4 py-2 hover:bg-gray-100">Posters</Link></li>
                  </ul>
                </li>
                <li><Link to="/specialties" className="hover:text-primary transition-colors">Specialties</Link></li>
                <li><Link to="/corporate" className="hover:text-primary transition-colors">Corporate &amp; Bulk Orders</Link></li>
                <li><Link to="/#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li className="ml-auto"><Link to="/products" className="cosmic-button whitespace-nowrap">Shop Now</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
