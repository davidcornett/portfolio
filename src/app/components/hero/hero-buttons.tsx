import React from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

export default function HeroButtons() {
  const ICON_SIZE = 22;

  return (
    <>
      <a
        className="icons"
        href="https://github.com/davidcornett/"
        target="_blank"
        aria-label="Button to my GitHub profile"
      >
        <AiFillGithub size={ICON_SIZE} />
      </a>
      <a
        className="icons"
        href="https://www.linkedin.com/in/davidcornett"
        target="_blank"
        aria-label="Button to my LinkedIn profile"
      >
        <BiLogoLinkedin size={ICON_SIZE} />
      </a>
    </>
  );
}
