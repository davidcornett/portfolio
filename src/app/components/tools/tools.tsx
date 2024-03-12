import React from "react";
import { tools } from "@/lib/data";
import Image from "next/image";

export default function Tools() {
  const ICON_DIMENSIONS = 37;

  return (
    <section className="px-4 w-full mt-16 scroll-mt-20" id="tools">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="flex flex-col text-center items-center m-1 px-2 py-5 rounded-sm highlighted custom-transition"
          >
            <Image
              src={tool.imageUrl}
              alt={tool.alt}
              height={ICON_DIMENSIONS}
              width={ICON_DIMENSIONS}
              className="mb-2"
            />
            {tool.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
