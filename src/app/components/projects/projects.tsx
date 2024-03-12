import React from "react";
import { projects } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section className="px-4 w-full leading-8 scroll-mt-20 mt-16" id="works">
      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
 
    </section>
  );
}
