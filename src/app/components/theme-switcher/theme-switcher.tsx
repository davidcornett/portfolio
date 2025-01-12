"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiSunFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";

type Theme = "light" | "dark";

export default function ThemeSwitcher() {

  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Ensure the actual theme is set to "dark" by default
    if (!theme) {
      setTheme("dark");
    }
    setCurrentTheme(theme as Theme || "dark");
  }, [theme]);

  const switchTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <button className="icons" onClick={switchTheme} aria-label="Theme switcher">
      {currentTheme === "light" ? (
        <PiSunFill size={22} />
      ) : (
        <PiMoonFill size={22} />
      )}
    </button>
  );
}
