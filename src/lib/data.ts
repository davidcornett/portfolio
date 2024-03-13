//import solarsystem from "../../public/project/solar_system.JPG";
import roof_rack from "../../public/project/roof_rack.png";
import edtraverse from "../../public/project/edtraverse_map.png";
import shell from "../../public/project/shell.png";
import ER from "../../public/project/ER.png";

import jsImg from "../../public/tools/js.svg";
import nextImg from "../../public/tools/next.svg";
import pcRequiredImg from "../../public/tools/pcrequired.svg";
import reactImg from "../../public/tools/react.svg";
import graphQlImg from "../../public/tools/graphql.svg";
import mySqlImg from "../../public/tools/mysql.svg";
import pythonImg from "../../public/tools/python.svg";
import flaskImg from "../../public/tools/flask.svg";
import cImg from "../../public/tools/c.svg";
import cPlusPlusImg from "../../public/tools/c++.svg";
import openGLImg from "../../public/tools/opengl.svg";
import javaImg from "../../public/tools/java.svg";
import muiImg from "../../public/tools/mui.svg";
import tailwindImg from "../../public/tools/tailwind.svg";
import remixImg from "../../public/tools/remix.svg";
import shopifyImg from "../../public/tools/shopify.svg";
import teamworkImg from "../../public/tools/teamwork.svg";

export const links = [
  {
    name: "Works",
    hash: "#works",
  },
  {
    name: "Technologies",
    hash: "#tools",
  }
];

export const tools = [
  {
    name: "JavaScript",
    imageUrl: jsImg,
    alt: "JavaScript logo",
  },

  {
    name: "React.js",
    imageUrl: reactImg,
    alt: "React.js logo",
  },
  {
    name: "Next.js",
    imageUrl: nextImg,
    alt: "Next.js logo",
  },
  {
    name: "Remix",
    imageUrl: remixImg,
    alt: "Remix logo",
  },
  {
    name: "Shopify API",
    imageUrl: shopifyImg,
    alt: "Shopify logo",
  },
  {
    name: "Tailwind",
    imageUrl: tailwindImg,
    alt: "Tailwind logo",
  },
  {
    name: "Material-UI",
    imageUrl: muiImg,
    alt: "MUI logo",
  },
  {
    name: "GraphQL",
    imageUrl: graphQlImg,
    alt: "GraphQL logo",
  },
  {
    name: "MySQL",
    imageUrl: mySqlImg,
    alt: "MySQL logo",
  },
  {
    name: "Python",
    imageUrl: pythonImg,
    alt: "Python logo",
  },
  {    
    name: "Flask",
    imageUrl: flaskImg,
    alt: "Flask logo",
  },
  {
    name: "C++",
    imageUrl: cPlusPlusImg,
    alt: "C++ logo",
  },
  {
    name: "C",
    imageUrl: cImg,
    alt: "C logo",
  },
  {
    name: "OpenGL",
    imageUrl: openGLImg,
    alt: "OpenGL logo",
  },
  /*
  {
    name: "Java",
    imageUrl: javaImg,
    alt: "Java logo",
  }
  */
];

export const projects = [
  {
    name: "Solar System FTL Journey",
    description:
    "Graphical simulation with close-to-accurate scale of solar system, where the player flies a spaceship by all planets at extremely high speeds. There are some cool effects like light attenuation as you travel away from the sun, making planets increasingly dimmer. Stars also blue-shift and red-shift, depending on flight velocity and direction. ",
    tools: ["C++", "OpenGL", "PC Required"],
    toolIcons: [cPlusPlusImg, openGLImg, pcRequiredImg],
    imageUrl: shell,
    videoLink: "https://youtu.be/SSwFiZqa-ms",
    githubLink: "https://github.com/davidcornett/FTL_Solar_System_Tour",
  },
  {
    name: "EdTraverse University Analytics",
    description:
      "A webapp with a RESTful API backend created as a demo for a business venture I launched, allowing users to retrieve forecasted growth/decline of universities. The projections are based on an algorithm I designed to model revenue changes over 5 and 10 years to 3,000 colleges based on their demographics, selectivity, and the job growth prospects of their academic programs.",
    tools: [
      "React.js",
      "Next.js",
      "Python",
      "Material UI",
    ],
    toolIcons: [reactImg, nextImg, pythonImg, muiImg],
    imageUrl: edtraverse,
    liveLink: "https://edtraverse.com/",
    githubLink: "https://github.com/davidcornett/watering_hole",
  },
  {
    name: "Adventure Van Roof Rack - Web Configurator",
    description:
      "I was part of a continuous integration team of 4 developers that built a Shopify integrated custom webapp for Orion Van Gear. We streamlined the roof rack design process for their engineers and customers by creating a drag and drop product configurator. I developed features including automatic grid resizing based on rack size, product querying and filtering, exclusion zones due to roof obstacles, and user-specified pre-installed roof appliances. Due to an NDA, I can't share the source code.",
    tools: ["React.js", "Remix", "GraphQL", "Tailwind", "Material UI", "Shopify API", "Team-based"],
    imageUrl: roof_rack,
    toolIcons: [reactImg,remixImg, graphQlImg, tailwindImg, muiImg, shopifyImg, teamworkImg],
    pdf: "/project/roof_rack.pdf",
  },
  {
    name: "Unix Shell",
    description:
      "A multi-process program using to enable execution of user commands, replicating a subset of BASH functionality. The shell supports background processes, input/output redirection, and special handling for SIGINT and SIGTSTP. I implemented this by using the operating system API and system calls like fork, exec, and wait.",
    tools: ["C"],
    toolIcons: [cImg],
    imageUrl: shell,
    githubLink: "https://github.com/davidcornett/shell_program",
  },
  {
    name: "Eric Roberts Movie Database",
    description:
      "A CRUD app (with a 90s feel) dedicated to the voluminous work of Eric Roberts. Users can create, read, update, and delete movie data. I created this along with another CS student at Oregon State to learn relational databases and have some fun. We designed the front-end to reach previously unheard-of levels of taste and subtlety...",
    tools: ["Flask", "Python", "MySQL", "Team-based"],
    imageUrl: ER,
    toolIcons: [flaskImg, pythonImg, mySqlImg, teamworkImg],
    githubLink: "https://github.com/davidcornett/ER-database",
  },
];
