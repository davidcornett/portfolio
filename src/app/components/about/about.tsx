import React from "react";
import SectionDivider from "../section-divider/section-divider";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 w-full mt-16 scroll-mt-[2rem] lg:scroll-mt-20"
    >
      {/* items-stretch ensures children match each other's height */}
      <div className="custom-transition flex flex-col md:flex-row gap-8 justify-center items-stretch">
        
        {/* Left Column: “Now I'm seeking...” + bullet points */}
        <div className="md:w-1/2 text-left">
          <p className="mb-4">
            Currently pursuing my MS in CS at Georgia Tech, I’m seeking a junior developer position.
          </p>
          <p className="font-semibold mb-2">What I offer:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Full-stack development experience</li>
            <li>Top-Secret security clearance (active)</li>
            <li>Communication and leadership skills from product management roles</li>
          </ul>
        </div>
        
        {/* Vertical Divider */}
        <SectionDivider />
        
        {/* Right Column: The two earlier paragraphs */}
        <div className="md:w-1/2 text-left">
          <p className="mb-6">
            During my 10 years in product management, using JavaScript to develop insurance applications 
            sparked my interest in programming. So I pursued a 2nd degree in Computer Science at Oregon 
            State University (studying on nights and weekends).
          </p>
          <p className="mb-6">
            I’ve since built a custom product configurator for a roof rack company, launched a successful 
            data analytics business (EdTraverse), and automated workflows in the financial management 
            office of a US embassy.
          </p>
        </div>
      </div>
    </section>
  );
}
