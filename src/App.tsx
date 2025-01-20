import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import WebDevelopment from './pages/Services/WebDevelopment';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import ECommerce from './pages/Services/ECommerce';
import SocialMarketing from './pages/Services/SocialMarketing';
import VideoMarketing from './pages/Services/VideoMarketing';
import About from './pages/About/AboutPage';
import OurWork from './pages/Portfolio/OurWork';
import ContactForm from './pages/Contact/ContactPage';
import Blog from './pages/Blog/Blog';
import ServicesPage from './pages/Services/ServicesPage';
import MobileApps from './pages/Services/MobileApps';
import CustomSoftware from './pages/Services/CustomSoftware';
import EmailMarketing from './pages/Services/EmailMarketing';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/social-marketing" element={<SocialMarketing />} />
          <Route path="/services/video-marketing" element={<VideoMarketing />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
