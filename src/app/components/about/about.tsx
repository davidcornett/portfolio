import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 text-center mt-16 scroll-mt-[2rem] lg:scroll-mt-20"
    >
      <div className="custom-transition">
        <p className="mb-6">
          I'm David. Most of my projects follow my interests or build on my previous career.
        </p>
        <p className="mb-6">
        I'm an engineer at heart. So after 10 years in insurance product management, I decided to get
        a 2nd degree in Computer Science from Oregon State University, studying on nights and weekends.
        After graduating in 2023, I moved to Tel Aviv and started a higher education data analytics business, 
        www.edtraverse.com.
        </p>

        <p className="mb-6">
        To finalize my career pivot, I'm seeking a junior developer position. I enjoy both front-end and back-end development.
        </p>
      </div>
    </section>
  );
}
