// const OurMission = () => {
//   return (
//     <section className="bg-gray-100 text-gray-800 py-16 px-8">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our <span className="text-primary">Mission</span></h2>

import { TbBackground } from "react-icons/tb";

//         <div>

//         <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
//           Empowering Businesses, Transforming Futures. Our mission is to empower businesses with innovative,
//           results-driven digital solutions that drive growth, enhance user experiences, and deliver measurable success.
//           We strive to be more than just a service provider—we’re your long-term partner in navigating the digital world
//           with confidence, creativity, and cutting-edge technology.
//         </p>

//         <img src="" alt="" />

//         </div>

//     <p className="text-xl mt-12 font-medium">
//       Your success is our mission, and we’re here to make it happen.
//     </p>
//   </div>
//     </section>
//   );
// }

// export default OurMission;

export default function Hero() {
  return (
    <main className="bg-white">
      <section className="relative mb-24 z-0 h-[88vh] bg-white  bg-[url('https://t3.ftcdn.net/jpg/09/33/83/82/360_F_933838289_TS8PCfgl9RFC1Z6dRwkpxpsG9gSgObnB.jpg')] bg-cover bg-center">
        <div className="absolute z-0 bg-gray-100 w-[100%] h-[100%] opacity-80"></div>
        <div className="mx-auto max-w-7xl">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="relative text-center z-30">
              {/* <span className="text-primary text-2xl my-5 font-bold tracking-wide uppercase">
                Your Partner in Digital Growth
                </span> */}
              <h1 className="text-3xl font-bold text-emerald-600">
                Empowering Businesses,
                <span className=" text-gray-900"> Transforming Futures</span>
              </h1>
              {/* <p className="text-lg text-gray-600 my-5 pb-5 max-w-2xl mx-auto">
                We create stunning websites, build next-gen mobile apps, and
                deliver custom software solutions to transform your business.
                With data-driven digital marketing strategies, we help you
                connect, engage, and grow in the digital age.
              </p> */}
              <p className="text-base font-semibold text-gray-600 my-5 pb-5 max-w-xl mx-auto">
                Our mission is to empower businesses with innovative,
                results-driven digital solutions that drive growth, enhance user
                experiences, and deliver measurable success. We strive to be
                more than just a service provider—we’re your long-term partner
                in navigating the digital world with confidence, creativity, and
                cutting-edge technology.
              </p>
            </div>

            <div className="absolute -bottom-44">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className=" text-gray-800 p-6 rounded-lg shadow-xl"
                style={{
                  background: 'linear-gradient(356deg, rgb(14 220 172), transparent)'
                }}
                >
                  <h3 className="text-2xl font-semibold mb-3">
                    Build Success Stories
                  </h3>
                  <p>
                    Crafting custom websites, apps, and marketing strategies
                    that meet and exceed business goals.
                  </p>
                </div>
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-semibold mb-3">
                    Inspire Innovation
                  </h3>
                  <p>
                    Leveraging the latest tools and frameworks to stay ahead of
                    the competition.
                  </p>
                </div>
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-semibold mb-3">Foster Growth</h3>
                  <p>
                    Delivering scalable solutions that adapt to your business
                    needs.
                  </p>
                </div>
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-semibold mb-3">
                    Simplify the Complex
                  </h3>
                  <p>
                    Providing clear communication, transparent processes, and
                    ongoing support for a seamless journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
