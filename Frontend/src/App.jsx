import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import Bookappointment from "./pages/Bookappointment"
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import CriminalLaw from "./Practice/CriminalLaw";
import FamilyLaw from "./Practice/FamilyLaw";
import PropertyLaw from "./Practice/PropertyLaw";
import CorporateLaw from "./Practice/CorporateLaw";
import CivilLitigation from "./Practice/CivilLitigation";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Bookappointment />} />
        {/* <Route path="/about" element={<h1>About</h1>} />
        <Route path="/practice-areas" element={<h1>Practice Areas</h1>} />
        <Route path="/attorneys" element={<h1>Attorneys</h1>} />
        <Route path="/case-results" element={<h1>Cases</h1>} />
        <Route path="/blog" element={<h1>Blog</h1>} />
        <Route path="/testimonials" element={<h1>Testimonials</h1>} />
        <Route path="/faq" element={<h1>FAQ</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/consultation" element={<h1>Consultation</h1>} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/practice/criminal-law" element={<CriminalLaw />} />
        <Route path="/practice/family-law" element={<FamilyLaw />} />
        <Route path="/practice/property-law" element={<PropertyLaw />} />
        <Route path="/practice/corporate-law" element={<CorporateLaw />} />
        <Route path="/practice/civil-litigation" element={<CivilLitigation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;