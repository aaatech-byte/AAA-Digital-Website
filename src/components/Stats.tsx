// import React from 'react';
// import CountUp from 'react-countup';

// const stats = [
//   { number: 250, label: 'Projects Delivered', suffix: '+' },
//   { number: 98, label: 'Client Satisfaction', suffix: '%' },
//   { number: 15, label: 'Years Experience', suffix: '+' },
//   { number: 24, label: 'Support', suffix: '/7' }
// ];

// export default function Stats() {
//   return (
//     <section className="bg-primary py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-white">
//               <div className="text-4xl md:text-5xl font-bold mb-2">
//                 <CountUp end={stat.number} suffix={stat.suffix} duration={2} />
//               </div>
//               <div className="text-green-100">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import React from 'react';




import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { number: 50, label: 'Projects Delivered', suffix: '+' },
  { number: 98, label: 'Client Satisfaction', suffix: '%' },
  { number: 5, label: 'Years Experience', suffix: '+' },
  { number: 24, label: 'Support', suffix: '/7' }
];

export default function Stats() {
  return (
    <section className="bg-emerald-300 mb-7 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ number, label, suffix }) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 1.0 
  });

  return (
    <div ref={ref} className="text-white">
      <div className="text-4xl md:text-5xl font-bold">
        {inView ? (
          <CountUp end={number} suffix={suffix} duration={5} />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="text-gray-800 font-bold">{label}</div>
    </div>
  );
}