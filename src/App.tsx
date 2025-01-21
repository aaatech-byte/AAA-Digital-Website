import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import OurWork from "./pages/Portfolio/OurWork";
import ContactForm from "./pages/Contact/ContactPage";

import ServicesPage from "./pages/Services/ServicesPage";
import WebDevelopment from "./pages/Services/WebDevelopment";
import MobileApps from "./pages/Services/MobileApps";
import CustomSoftware from "./pages/Services/CustomSoftware";
import ECommerce from "./pages/Services/ECommerce";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import SocialMarketing from "./pages/Services/SocialMarketing";
import VideoMarketing from "./pages/Services/VideoMarketing";
import EmailMarketing from "./pages/Services/EmailMarketing";

import Blog from "./pages/Blog/Blog";
import EmailMarBlog from "./pages/Blog/BlogDomians/EmailMar";
import WebBlog from "./pages/Blog/BlogDomians/WebDev";
import AppBlog from "./pages/Blog/BlogDomians/AppDev";
import DigitalMarBlog from "./pages/Blog/BlogDomians/DigitalMarketing";
import EcomBlog from "./pages/Blog/BlogDomians/Ecom";
import SocialMarBlog from "./pages/Blog/BlogDomians/SocialMar";
import VideoMarBlog from "./pages/Blog/BlogDomians/VideoMar";
import CustomDevBlog from "./pages/Blog/BlogDomians/CustomDev";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route
            path="/services/di  tal-marketing"
            element={<DigitalMarketing />}
          />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route
            path="/services/custom-software"
            element={<CustomSoftware />}
          />
          <Route
            path="/services/social-marketing"
            element={<SocialMarketing />}
          />
          <Route
            path="/services/video-marketing"
            element={<VideoMarketing />}
          />
          <Route
            path="/services/email-marketing"
            element={<EmailMarketing />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<ServicesPage />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/app-dev" element={<AppBlog />} />
          <Route path="/blog/web-dev" element={<WebBlog />} />
          <Route path="/blog/digital-marketing" element={<DigitalMarBlog />} />
          <Route path="/blog/e-commerce" element={<EcomBlog />} />
          <Route
            path="/blog/social-media-marketing"
            element={<SocialMarBlog />}
          />
          <Route path="/blog/email-marketing" element={<EmailMarBlog />} />
          <Route path="/blog/video-marketing" element={<VideoMarBlog />} />
          <Route path="/blog/custom-software-dev" element={<CustomDevBlog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
