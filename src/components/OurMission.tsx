import React from 'react';

export default function App() {
  const heroData = {
    title: "Empowering Businesses,",
    subtitle: "Transforming Futures",
    missionStatement:
      "Our mission is to empower businesses with innovative, results-driven digital solutions that drive growth, enhance user experiences, and deliver measurable success. We strive to be more than just a service provider—we’re your long-term partner in navigating the digital world with confidence, creativity, and cutting-edge technology.",
    features: [
      {
        title: "Build Success Stories",
        description:
          "Crafting custom websites, apps, and marketing strategies that meet and exceed business goals.",
        // backgroundColor: 'linear-gradient(356deg, rgb(14 220 172), transparent)',
      },
      {
        title: "Inspire Innovation",
        description:
          "Leveraging the latest tools and frameworks to stay ahead of the competition.",
        // backgroundColor: 'white',
      },
      {
        title: "Foster Growth",
        description:
          "Delivering scalable solutions that adapt to your business needs.",
        // backgroundColor: 'white',
      },
      {
        title: "Simplify the Complex",
        description:
          "Providing clear communication, transparent processes, and ongoing support for a seamless journey.",
        // backgroundColor: 'white',
      },
    ],
  };

  return (
    <main className="bg-white">
      <section className="relative mb-24 z-0 h-[88vh] bg-white bg-[url('https://t3.ftcdn.net/jpg/09/33/83/82/360_F_933838289_TS8PCfgl9RFC1Z6dRwkpxpsG9gSgObnB.jpg')] bg-cover bg-center">
        <div className="absolute z-0 bg-gray-100 w-[100%] h-[100%] opacity-80"></div>
        <div className="mx-auto max-w-7xl">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="relative text-center z-30">
              <h1 className="text-4xl font-bold text-emerald-600">
                {heroData.title}
                <span className="text-gray-900"> {heroData.subtitle}</span>
              </h1>
              <p className="text-lg font-semibold text-gray-600 my-5 pb-5 max-w-3xl mx-auto">
                {heroData.missionStatement}
              </p>
            </div>

            <div className="absolute -bottom-44">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {heroData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 scale-100 hover:scale-105 duration-300 p-6 rounded-lg shadow-md hover:shadow-xl"
                    // style={{
                    //   background: feature.backgroundColor || 'white',
                    // }}
                  >
                    <h3 className="text-lg font-bold text-gray-700 mb-3">{feature.title}</h3>
                    <p className='text-gray-400 font-semibold'>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
