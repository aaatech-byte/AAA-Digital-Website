




import React, { useState } from "react";
import Modal from "react-modal";
import {
  Code,
  Smartphone,
  Megaphone,
  Gauge,
  Users,
  Clapperboard,
  ShoppingBag,
  Rss,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build high-performance, responsive websites tailored to your business needs, providing seamless user experiences and secure platforms.",
    li1: "Custom Web Development",
    li2: "E-Commerce Development",
    li3: "WordPress Development",
    li4: "Shopify Store Setup",
    li5: "Website Redesign",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Develop innovative, user-friendly mobile apps for iOS and Android that engage users and enhance your business presence on mobile platforms.",
    li1: "Custom Mobile App Development",
    li2: "Cross-Platform Development",
    li3: "App Maintenance & Updates",
    li4: "Mobile App UI/UX Design",
    li5: "App Optimization",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Solutions",
    description:
      "Create scalable, secure, and conversion-optimized online stores that provide a seamless shopping experience and drive sales.",
    li1: "Custom E-Commerce Platforms",
    li2: "Payment Gateway Integration",
    li3: "E-Commerce App Development",
    li4: "Product Management Systems",
    li5: "E-Commerce Analytics",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    description:
      "Increase visibility, drive traffic, and improve rankings with targeted SEO strategies and digital marketing campaigns that bring high ROI.",
    li1: "On-Page & Off-Page SEO",
    li2: "Local SEO",
    li3: "PPC Management (Google Ads)",
    li4: "Content Marketing & Strategy",
    li5: "SEO Audits",
  },
  {
    icon: Rss,
    title: "Social Media Marketing",
    description:
      "Boost your brand’s presence with targeted social media campaigns, content creation, and community engagement across key platforms.",
    li1: "Social Media Strategy Development",
    li2: "Social Media Advertising",
    li3: "Content Creation & Scheduling",
    li4: "Community Management",
    li5: "Influencer Marketing",
  },
  {
    icon: Clapperboard,
    title: "Video Marketing & Branding",
    description:
      "Create engaging video content that drives brand awareness, builds trust, and enhances customer conversions.",
    li1: "Explainer Videos",
    li2: "Brand Storytelling",
    li3: "Product Demos & Tutorials",
    li4: "Video Ads & Social Media Clips",
    li5: "Video SEO",
  },
  {
    icon: Gauge,
    title: "Email Marketing & Automation",
    description:
      "Engage and convert your audience with personalized, automated email campaigns and lead generation strategies.",
    li1: "Email Campaign Management",
    li2: "Marketing Automation",
    li3: "Lead Generation Campaigns",
    li4: "List Segmentation",
    li5: "A/B Testing & Optimization",
  },
  {
    icon: Users,
    title: "Custom Software Solutions",
    description:
      "Develop tailored software solutions to automate business processes, integrate systems, and enhance operational efficiency.",
    li1: "Bespoke Business Software",
    li2: "CRM Development",
    li3: "ERP Systems",
    li4: "API Integrations",
    li5: "Cloud-Based Software",
  },
];

export default function Services() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalService, setModalService] = useState(null);

  const openModal = (service) => {
    setModalService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalService(null);
  };

  const renderModalContent = () => {
    if (!modalService) return null;

    const {
      icon: Icon,
      title,
      description,
      li1,
      li2,
      li3,
      li4,
      li5,
    } = modalService;
    return (
      <>
        <div className="flex items-center justify-center mb-4">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <h3 className="text-3xl font-bold text-gray-700 my-2">{title}</h3>
        <p className="text-gray-400 my-4 text-sm">{description}</p>

        <ul className="text-left text-gray-800 space-y-3 pt-4">
          {[li1, li2, li3, li4, li5].map((item, index) => (
            <li key={index} className="flex items-center font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <section id="services" className="pb-14 pt-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business,
            improve user engagement, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <button
                className="btn mt-4 pb-2"
                onClick={() => openModal(service)}
              >
                <span className="text-primary font-bold">See more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="15px"
                  className="ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    stroke="#292D32"
                    d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>



      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Service Modal"
        shouldCloseOnOverlayClick={true} 
        className=" inset-0 bg-white p-8 rounded-2xl shadow-xl max-w-xl backdrop-blur-sm w-full relative flex justify-center items-center translate-x-3/4 translate-y-1/2"
      >
        <div className="relative">
          <button
            className="absolute top-1 right-1 text-gray-500 text-2xl hover:text-gray-700 hover:scale-105"
            onClick={closeModal}
          >
            x
          </button>
          {renderModalContent()}
        </div>
      </Modal>
    </section>
  );
}
