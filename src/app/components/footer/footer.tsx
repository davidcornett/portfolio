import React from "react";
import FooterButtons from "./footer-buttons";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  return (
    <footer className="mt-3 border-t w-full max-w-[97.75%] border-accent-color mx-auto">
      <div className="flex justify-around sm:grid sm:grid-cols-3 items-center my-6 mx-3 custom-transition">
        <span className={`${dmSerifDisplay.className} text-center flex justify-center text-lg sm:text-2xl`}>Contact Me</span>
        <div className="hidden sm:block border-t-2 border-dotted mx-3 border-theme-color-dark dark:border-theme-color custom-transition" />
        <div className="flex gap-2 justify-center">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}
