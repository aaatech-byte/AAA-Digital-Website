import {
  ArrowRight,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";

// const expertise = [
//   {
//     icon: Briefcase,
//     title: "Custom Software Development",
//     description: "Tailored software solutions to meet your business needs.",
//   },
//   {
//     icon: Users,
//     title: "Team Augmentation",
//     description: "Expand your team with our skilled IT professionals.",
//   },
//   {
//     icon: Globe,
//     title: "Global Delivery",
//     description: "Delivering projects across the globe with excellence.",
//   },
//   {
//     icon: Award,
//     title: "Award-Winning Solutions",
//     description: "Recognized for our innovative and impactful solutions.",
//   },
// ];


export default function Hero() {
  return (
    <main className="bg-white">
      {/* <section className="relative h-[95vh] bg-white bg-[url('https://images.pexels.com/photos/7547027/pexels-photo-7547027.jpeg')] bg-cover bg-center"> */}
      <section className="relative h-[95vh] bg-white bg-[url('https://img.freepik.com/premium-photo/office-white-desk-laptop-accessories-top-view-free-space-your-text-flat-lay_187166-36073.jpg')] bg-cover bg-center">
        <div className="absolute  bg-gray-100 w-[100%] h-[100%] opacity-60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-52">
          <div className="text-center pt-24 sm:pt-0">
            <span className="text-primary text-2xl my-5 font-bold tracking-wide uppercase">
              Your Partner in Digital Growth
            </span>
            <h1 className="my-5 text-2xl md:text-4xl font-bold text-primary">
              Let’s Build
              <span className=" text-gray-900">
                {" "}
                Something Extraordinary Together{" "}
              </span>
            </h1>
            <p className="text-base sm:textlg text-gray-600 my-5 pb-5 max-w-2xl mx-auto">
              We create stunning websites, build next-gen mobile apps, and
              deliver custom software solutions to transform your business. With
              data-driven digital marketing strategies, we help you connect,
              engage, and grow in the digital age.
            </p>
            {/* <div className="flex flex-col sm:flex-row justify-center gap-4"> */}
              <Link to="/contact">
                <Button variant="primary" size="md" className="group">
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* <Link to="/contact">
          <Button variant="primary" size="lg" className="group">
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link to="/work">
          <Button variant="outline" size="lg">
            View Our Work
          </Button>
        </Link> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of services to help your business thrive in
              the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300"
              >
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
