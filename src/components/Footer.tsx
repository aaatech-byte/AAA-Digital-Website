import { Facebook, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            {/* <h3 className="text-2xl font-bold mb-4">AAA Digital</h3> */}
            <img
              src="src/assets/images/logo-white.png"
              className="mt-2 h-11 w-16
                object-cover"
            />
            <p className="text-gray-400 mt-2">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61566395171281"
                className="text-gray-400 hover:text-primary transition"
              >
                <Facebook size={24} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-primary transition">
                <Twitter size={24} />
              </a> */}
              {/* <a
                href="https://www.instagram.com/aaadigitalltd/"
                className="text-gray-400 hover:text-primary transition"
              >
                <Instagram size={24} />
              </a> */}
              <a
                href="https://www.linkedin.com/company/aaa-digital-marketing/posts/?feedView=all"
                className="text-gray-400 hover:text-primary transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/services/web-development")}
                  className="text-gray-400 hover:text-primary transition"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleNavigation("/services/digital-marketing")
                  }
                  className="text-gray-400 hover:text-primary transition"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/services/ecommerce")}
                  className="text-gray-400 hover:text-primary transition"
                >
                  E-Commerce
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-400 hover:text-primary transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigation("/blog")}
                  className="text-gray-400 hover:text-primary transition"
                >
                  Blog
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => handleNavigation("/careers")}
                  className="text-gray-400 hover:text-primary transition"
                >
                  Careers
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-400 hover:text-primary transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="flex items-center text-gray-400">
              <EmailIcon
                className="mr-2 cursor-pointer"
                onClick={() =>
                  (window.location.href =
                    "mailto:Business@aaa-digitalmarketing.com")
                }
              />
              <span>Business@aaa-digitalmarketing.com</span>
            </div>

            <div
              className="flex items-center text-gray-400 mt-4 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Pennsylvania,+USA",
                  "_blank"
                )
              }
            >
              <LocationOnIcon className="mr-2 cursor-pointer" />
              <span>Headquarter: Pennsylvania, USA</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AAA Digital. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
