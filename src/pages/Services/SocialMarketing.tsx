import React from "react";
import { Search, TrendingUp, Globe, FileText } from "lucide-react";
import ServiceHero from "./ServiceHero";
import ProcessTimeline from "../../components/ProcessTimeline";
import ContactCTA from "../../components/ContactCTA";

const features = [
  {
    icon: "Search", // Example icon
    title: "Social Media Strategy Development",
    description: "Create a roadmap for growing your brand on social platforms",
  },
  {
    icon: "TrendingUp", // Example icon
    title: "Social Media Advertising",
    description: "Reach the right audience with targeted ad campaigns on Facebook, Instagram, LinkedIn, and more",
  },
  {
    icon: "Globe", // Example icon
    title: "Content Creation & Scheduling",
    description: "Keep your social media active and engaging with high-quality content",
  },
  {
    icon: "FileText", // Example icon
    title: "Community Management",
    description: "Foster relationships with your audience and build a loyal community",
  },
];


const process = [
  {
    title: "Social Media Audit",
    description: "In-depth analysis of your current social media presence, identifying strengths, weaknesses, and opportunities for improvement.",
  },
  {
    title: "Custom Strategy Development",
    description: "Crafting a unique social media marketing strategy tailored to your brand's goals, audience, and industry trends.",
  },
  {
    title: "Execution & Campaigns",
    description: "Implementing engaging campaigns and content strategies that resonate with your audience and drive meaningful interactions.",
  },
  {
    title: "Performance Tracking & Optimization",
    description: "Constantly monitoring key metrics to assess success and refine strategies for maximum engagement and growth.",
  },
];



export default function SocialMarketing() {
  return (
    <main className="bg-white">
      <div
        className="bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
            relative h-[94vh] bg-cover bg-center pt-20 "
      >
        <div className="absolute bg-[#434343] z-10 w-[100%] h-[88%] opacity-80"></div>
        {/* <div className="relative h-[90vh]  pt-20 bg-[url('https://thumbs.wbm.im/pw/medium/34950f1f017647cd3f8484485b040686.avif')] bg-cover bg-center"> */}
        <ServiceHero
          title="Social Media Marketing"
          subtitle="Boost Engagement with Targeted Social Media Strategies"
          description="Build brand awareness and engage your audience with targeted social media campaigns. From strategy development to influencer marketing, we help you grow your online community and drive results."
        />
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition duration-300"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline steps={process} />
      <ContactCTA />
    </main>
  );
}
