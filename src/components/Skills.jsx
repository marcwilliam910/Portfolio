import React from "react";
import {FaReact, FaGitAlt} from "react-icons/fa";
import {RiTailwindCssFill, RiFirebaseFill} from "react-icons/ri";
import {BiLogoTypescript} from "react-icons/bi";
import {SiSupabase, SiExpress, SiNextdotjs, SiPrisma} from "react-icons/si";
import {PiFileSqlDuotone} from "react-icons/pi";

const technologies = [
  {
    icon: <FaReact />,
    name: "ReactJS",
  },
  {
    icon: <SiNextdotjs />,
    name: "NextJS",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress />,
  },
  {
    icon: <BiLogoTypescript />,
    name: "TypeScript",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  {
    icon: <PiFileSqlDuotone />,
    name: "SQL",
  },
  {
    icon: <RiFirebaseFill />,
    name: "Firebase",
  },

  {
    name: "Supabase",
    icon: <SiSupabase />,
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
  {
    icon: <SiPrisma />,
    name: "Prisma",
  },
];

export default function Skills() {
  return (
    <section id="Technologies" className="space-y-4 sm:space-y-6">
      <h2 className="text-xl font-bold text-light-primaryText sm:text-2xl">
        Technologies
      </h2>
      <div className="flex flex-wrap gap-3 sm:px-4">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-light-card text-sm sm:text-base"
          >
            <p>{technology.icon}</p>
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
