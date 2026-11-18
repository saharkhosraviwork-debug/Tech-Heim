import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landing/LandingPage";
import Container from "./components/common/container";
import Footer from "./components/layout/footer/Footer";
import ContactUs from "./components/pages/contact/ContactUs";
import AboutUs from "./components/pages/about/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}
