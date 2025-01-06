import React from "react";
import { DM_Serif_Display } from "next/font/google";
import HeroButtons from "./hero-buttons";

const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: "400", fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"] });

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex flex-col items-end p-2">
        <h1
          className={`${dmSerifDisplay.className} text-5xl sm:text-6xl text-accent-color tracking-tight text-center`}
        >
          David Cornett
        </h1>
        <h2 className="custom-transition text-lg font-semibold">Full-Stack Developer</h2>
        <div className="my-2 flex gap-2">
          <HeroButtons />
        </div>
      </div>
    </section>
  );
}
