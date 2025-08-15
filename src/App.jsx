import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Specialties } from "./pages/Specialties";
import { Corporate } from "./pages/Corporate";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Products } from "./pages/Products";
// Removed unused Business import; using BusinessCards for business pages
import { Business } from "./pages/Business";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/business" element={<Business />} />
          <Route path="products/business-cards" element={<Business />} />
          <Route path="about" element={<About />} />
          <Route path="specialties" element={<Specialties />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
