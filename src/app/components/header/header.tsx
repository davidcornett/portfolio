import React from "react";
import Link from "next/link";
import { DM_Serif_Display } from "next/font/google";
import { links } from "@/lib/data";
import ThemeSwitcher from "../theme-switcher/theme-switcher";

const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: "400", fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"] });

export default function Header() {
  return (
    <header className="z-[99] fixed w-full -left-1/2 translate-x-[50%] top-0">
      <nav className="flex justify-between items-center p-4 max-w-[1250px] mx-auto">
        <div className="flex gap-3 items-center">
          <ThemeSwitcher />
          <a
            href="#home"
            className={`${dmSerifDisplay.className} hover:text-accent-color text-xl`}
          >
            dc.
          </a>
        </div>
        <ul className="flex flex-row text-lg gap-12 sm:gap-24">
          {links.map((link) => (
            <li key={link.hash}>
              <Link
                href={link.hash}
                className="hover:text-accent-color font-semibold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
