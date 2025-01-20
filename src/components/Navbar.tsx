import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from '../assets/images/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/">
              <span className="text-5xl font-bold cursor-pointer text-primary">
                <img
                  src={Logo}
                  className="mt-2 h-auto w-20
                 object-cover"
                />
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary transition"
            >
              About
            </Link>

            <Link
              to="/services"
              className="text-gray-700 hover:text-primary transition"
            >
              Services
            </Link>
            <Link
              to="/work"
              className="text-gray-700 hover:text-primary transition"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-primary transition"
            >
              Blogs
            </Link>
            <Link to="/contact">
              {/* <Button variant="primary">Contact Us</Button> */}
              <button
                  type="submit"
                  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-primary backdrop-blur-md lg:font-semibold isolation-auto text-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-emerald-500 hover:border-emerald-600 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group"
                > Let's Talk
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-100 text-emerald-500 ease-linear duration-300 rounded-full border border-gray-100 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-50 group-hover:fill-emerald-500"
                    />
                  </svg>
                </button>

            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="/work"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/insights"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Insights
            </Link>
            <div className="px-3 py-2">
              <Link to="/contact">
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                > Get in touch
                  <svg
                    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    />
                  </svg>
                </button>
                {/* <Button variant="primary" className="w-full">
                  Contact Us
                </Button> */}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
