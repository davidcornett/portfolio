import React from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Tools from "./components/tools/tools";
import Projects from "./components/projects/projects";

export default function page() {
  return (
    <>
      <div className="mt-48" />
      <main className="flex flex-col items-center">
        <Hero />
        <About/>
        <Projects/>
        <Tools />
      </main>
    </>
  );
}
