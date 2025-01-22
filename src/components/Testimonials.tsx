import { useState } from "react";

import { Star } from "lucide-react";

import { Button } from "./ui/Button";

import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Emily R.",
    role: "CEO, LearnSphere Inc.",
    content:
      "We needed a high-performing, SEO-friendly website for our education platform, and they delivered exactly what we envisioned. The new design has significantly boosted engagement and trust among our users.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    category: "Web Development",
  },
  {
    name: "Jason T.",
    role: "Co-Founder, EcoVolt Systems",
    content:
      "Their team built a robust website for our renewable energy solutions company. It’s sleek, responsive, and showcases our services perfectly. Couldn’t be happier!",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    category: "Web Development",
  },
  {
    name: "Sarah K.",
    role: "Owner, HandyNest",
    content:
      "We were looking for an easy-to-use mobile app for our home services platform, and they exceeded our expectations. The app runs smoothly on both iOS and Android, and our customers are loving it.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    category: "Mobile App Development",
  },
  {
    name: "David M.",
    role: "CTO, RideWave Rentals",
    content:
      "The app they created for our bike rental business is intuitive and feature-rich. It’s helped us improve bookings and deliver a better customer experience.",
    image:
      "https://images.unsplash.com/photo-1505914701055-bf56d64088d4?auto=format&fit=crop&w=150&q=80",
    category: "Mobile App Development",
  },
  {
    name: "Lisa P.",
    role: "Founder, RadiantGlow Skincare",
    content:
      "Their team launched a stunning Shopify store for our skincare brand, and it’s been a game-changer. Sales have been consistently growing since day one!",
    image:
      "https://images.unsplash.com/photo-1493376552683-31e3c57a84ea?auto=format&fit=crop&w=150&q=80",
    category: "E-Commerce Solutions",
  },
  {
    name: "Ryan S.",
    role: "Manager, HavenLiving Interiors",
    content:
      "Our online furniture store needed an overhaul, and they delivered a platform that’s fast, secure, and optimized for sales. It’s a huge win for our business.",
    image:
      "https://images.unsplash.com/photo-1517362537966-d46c4c1fcdc2?auto=format&fit=crop&w=150&q=80",
    category: "E-Commerce Solutions",
  },
  {
    name: "Olivia W.",
    role: "Marketing Director, UrbanScape Designs",
    content:
      "Thanks to their SEO expertise, our website now ranks on the first page for several competitive keywords. We’ve seen a 40% increase in organic traffic!",
    image:
      "https://images.unsplash.com/photo-1501805077538-f3972ea505bc?auto=format&fit=crop&w=150&q=80",
    category: "SEO & Digital Marketing",
  },
  {
    name: "Brian L.",
    role: "Owner, FlexPro Fitness",
    content:
      "Their social media strategy and ad management have given us the exposure we needed. Leads are pouring in, and we’re thrilled with the results.",
    image:
      "https://images.unsplash.com/photo-1573497164405-61cba2c0888b?auto=format&fit=crop&w=150&q=80",
    category: "SEO & Digital Marketing",
  },
  {
    name: "Natalie H.",
    role: "Product Manager, StreamView Media",
    content:
      "Our app’s new design is a hit with our users! It’s intuitive, visually stunning, and has significantly improved retention rates.",
    image:
      "https://images.unsplash.com/photo-1477989684386-2e8b034f91bb?auto=format&fit=crop&w=150&q=80",
    category: "UI/UX Design",
  },
  {
    name: "Kevin D.",
    role: "CEO, BistroCraft",
    content:
      "They redesigned our website with a clean, modern look, making it much easier for customers to navigate. The results have been fantastic.",
    image:
      "https://images.unsplash.com/photo-1512730555111-75511a9edfff?auto=format&fit=crop&w=150&q=80",
    category: "UI/UX Design",
  },
  {
    name: "Sophia G.",
    role: "Owner, LuxeNest Decor",
    content:
      "Our website’s loading time was a major issue, but after their optimization, it’s blazing fast. The improvement in user experience is incredible.",
    image:
      "https://images.unsplash.com/photo-1556742522-ec7c0d1e44f2?auto=format&fit=crop&w=150&q=80",
    category: "Performance Optimization",
  },
  {
    name: "Mark P.",
    role: "Founder, AutoNext",
    content:
      "They streamlined our site’s performance, and the difference is clear. Both our traffic and conversions have seen a noticeable boost.",
    image:
      "https://images.unsplash.com/photo-1534233709757-357b6a85d372?auto=format&fit=crop&w=150&q=80",
    category: "Performance Optimization",
  },
  {
    name: "Laura C.",
    role: "Operations Manager, FreshFields Agriculture",
    content:
      "Their custom software solution has completely transformed our supply chain operations. It’s efficient, reliable, and easy to use.",
    image:
      "https://images.unsplash.com/photo-1532001747389-bf28c9a1c5cc?auto=format&fit=crop&w=150&q=80",
    category: "Custom Software Solutions",
  },
  {
    name: "Ethan J.",
    role: "Director, PrimeTrack Logistics",
    content:
      "We had a complex workflow issue that required a unique solution, and they nailed it. The software has saved us countless hours and improved productivity.",
    image:
      "https://images.unsplash.com/photo-1561016238-7508cf500e55?auto=format&fit=crop&w=150&q=80",
    category: "Custom Software Solutions",
  },
];

const categories = [
  "Web Development",
  "Mobile App Development",
  "E-Commerce Solutions",
  "SEO & Digital Marketing",
  "Performance Optimization",
  "UI/UX Design",
];

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleViewAllClick = () => {
    setSelectedCategory(null);
  };

  const filteredTestimonials = selectedCategory
    ? testimonials.filter(
        (testimonial) => testimonial.category === selectedCategory
      )
    : testimonials;

  return (
    <main className=" mx-10 py-7 rounded-2xl bg-cover relative ">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 my-2">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="text-xl my-2 text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear from some of our satisfied
          clients.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 px-6 py-4 text-center">
          {categories.map((category) => (
            // <div
            //   key={category}
            //   className="bg-white rounded-2xl p-1 text-sm shadow-md  text-gray-500 hover:text-emerald-500 hover:font-bold font-semibold translate-y-0 cursor-pointer hover:shadow-xl duration-150 transition scale-95"
            //   onClick={() => handleCategoryClick(category)}
            // >
            //   <h2 className="text-base mt-2">{category}</h2>
            // </div>

            <span
              key={category}
              // className="relative text-white text-gray-500 leading-8 no-underline group"
              className="bg-white mx-auto  w-fit relative leading-8  no-underline group mt-6 text-gray-600 hover:text-emerald-500 hover:font-bold font-semibold translate-y-0 cursor-pointer duration-150 transition scale-95"
              onClick={() => handleCategoryClick(category)}
            >
              <span className="text-md font-bold">{category}</span>
              <span className="absolute bottom-[-0.25rem] right-0 h-[2px] w-0 bg-emerald-500 rounded transition-all duration-400 ease-linear group-hover:w-full group-hover:left-0"></span>
            </span>
          ))}
        </div>
      </div>

      <section className="w-full z-[400] container mx-auto px-4 py-14">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          effect="cube"
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {filteredTestimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialsCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {selectedCategory && (
        <div className="text-center">
          <Button
            variant="primary"
            size="md"
            className="group px-5 "
            onClick={handleViewAllClick}
          >
            View All
          </Button>
        </div>
      )}
    </main>
  );
}

const TestimonialsCard = ({ testimonial }) => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400" />
            ))}
          </div>
          <p
            style={{ fontFamily: "monospace" }}
            className="text-gray-600 text-base pt-3 pb-6"
          >
            {testimonial.content}
          </p>
          <div className="flex items-center pt-3">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <code className="font-semibold text-gray-900">
                {testimonial.name}
              </code>
              <div>
                <code className="text-gray-600 text-sm">
                  {testimonial.role}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};































