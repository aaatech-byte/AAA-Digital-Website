// TestimonialSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube'; // For the 3D effect
// import TestimonialCard from './TestimonialCard';
import { Button } from './ui/Button'


const testimonials = [
  {
    name: 'Mary O.',
    location: 'New Brunswick',
    testimonial: 'I like that you come monthly and it is your scheduled visit. I don’t have to remember to call! I appreciate getting the email after your visit, so I know what is going on on the outside of my place.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    name: 'Lori and Dave D.',
    location: 'New Brunswick',
    testimonial: 'We have been loyal customers for over 20 years and couldn’t imagine being without the great services offered by Orkin. Being severely allergic to stinging insect bites, I trust only Orkin with our home, and personal safety.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    name: 'Bev S.',
    location: 'British Columbia',
    testimonial: 'My technician was careful, detailed with his work and very pleasant. He was not afraid to climb my difficult property and make extra effort to ensure he had found all of the bait stations. Excellent job, thank you.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    name: 'Lan P.',
    location: '',
    testimonial: 'Our technician was excellent. Courteous, on time, and thorough. He takes his job seriously and tackles the job as if our home were his own. I would recommend him to friends & neighbours without hesitation.',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    name: 'Jason',
    location: 'Retail',
    testimonial: 'Our technician is always professional and knowledgeable. He answers all my questions and provides great service every time.',
    avatar: 'https://via.placeholder.com/50',
  },
];

const TestimonialSlider = () => {
  return (
    <>
      <section className='bg-center h-[82vh] mx-10 my-20  rounded-2xl bg-cover relative' style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682126104327-ef7d5f260cf7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') " }}>
        <div className="hero-overlay rounded-2xl bg-[var(--secondary)] absolute top-0 left-0 w-full h-[82vh] z-[200] opacity-45"> </div>

        <section className="container absolute z-[400] text-white">
          <div className='flex justify-between px-12 pt-20'>
            <h1 className='font-[900] text-5xl py-1'>Our beloved <br /> Customer’s Feedback </h1>
            <Button
              variant="primary"
              size="md"
              className=" cursor-pointer group"
            >
              Let's Get Started 
              {/* <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /> */}
            </Button>
          </div>
        </section>


        <section className="py-16 w-full -bottom-32 z-[400] absolute  ">
          <div className="container mx-auto px-4">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 300,
                // disableOnInteraction: false,
              }}
              pagination={{ clickable: true }} 
              effect="cube"
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </>
  );
};

export default TestimonialSlider;




import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-[var(--card)] w-full p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="text-xl text-[var(--white)] italic">"{testimonial.testimonial}"</p>
        <div className="flex items-center mt-4">
          <span className="font-semibold text-[var(--primary-text)]">{testimonial.name}</span>
          {testimonial.location && (
            <span className="text-[var(--white)] ml-4">({testimonial.location})</span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <FaStar className="text-[var(--primary-text)] mr-1" />
          <FaStar className="text-[var(--primary-text)] mr-1" />
          <FaStar className="text-[var(--primary-text)] mr-1" />
          <FaStar className="text-yellow-400 mr-1" />
          <FaStar className="text-yellow-400 mr-1" />
        </div>
      </div>
    </div>
  );
};
